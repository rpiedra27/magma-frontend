import { FormBtn } from "../../Components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { patchResetPass } from "../../Slices/users/requests/patchResetPass";
import { LoginInput } from "../../Components/CustomInput";

export default function ContrasenaNueva() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [code, setCode] = useState();
    const [localErrorMessage, setLocalErrorMessage] = useState("");
    const errorMessage = useSelector((state) => state.user.errorMessage);
    const dispatch = useDispatch();

    /*
      Datos de prueba:
      email: "rodrigo.piedra@ucr.ac.cr",
      password: cualquiera,
      code: 963221,
    */
    return (
        <div>
            <div className="flex justify-center h-100">
                <div className="flex justify-center h-100 bg-red w-2/6 tiny:w-3/4 h-4/5 mt-6 py-8 rounded-md flex-col items-center m-auto my-3">
                    <h1 className="text-3xl text-white tiny:text-center tiny:text-2xl">Ingresa tu nueva contraseña</h1>

                    <div className='flex flex-col items-center w-3/4 py-8'>

                        <label className="text-lg text-white">
                            Correo electrónico
                            <LoginInput name={'email'} type={'email'} placeholder={'abc@mail.com'} value={email} func={(evt) => {setEmail(evt.target.value);}}/>
                        </label>

                        <label className="text-lg text-white">
                            Nueva contraseña
                            <LoginInput name={'password'} type={'password'} placeholder={''} value={password} func={(evt) => {setPassword(evt.target.value);}}/>
                        </label>

                        <label className="text-lg text-white">
                            Repita la contraseña
                            <LoginInput name={'repeatPass'} type={'password'} value={passwordConfirmation} func={(evt) => {setPasswordConfirmation(evt.target.value);}}/>
                        </label>
                        
                        <label className="text-lg text-white">
                            Código de confirmación
                            <input
                                name='code' type='number'
                                className="mb-6 mt-1 block px-3 py-2 w-64 bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
                  focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
                                value={code}
                                onChange={(evt) => {
                                    setCode(evt.target.value);
                                }}
                            />
                        </label>

                    </div>
                    {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                    {localErrorMessage && <span className="text-red-500">{localErrorMessage}</span>}
                    <FormBtn text={'Cambiar contraseña'}
                        func={() => {
                            if (passwordConfirmation && password && code) {
                                if (password === passwordConfirmation) {
                                    if (password.length < 8) {
                                        setLocalErrorMessage("La contraseña debe contener al menos 8 dígitos.");
                                    }
                                    if (code.length > 6 || code.length < 6) {
                                        setLocalErrorMessage("El código debe contener al menos 8 dígitos.");
                                    } else {
                                        setLocalErrorMessage("");
                                        dispatch(
                                            patchResetPass({
                                                email,
                                                password,
                                                code
                                            })
                                        );
                                    }
                                }
                            } else {
                                setLocalErrorMessage("Debe completar todos los campos");
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}