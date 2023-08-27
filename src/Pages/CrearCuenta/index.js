import { FormBtn } from "../../Components/Buttons";
import { useState } from "react";
import { postCreateUser } from "../../Slices/users/requests/postCreateUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginInput } from "../../Components/CustomInput";

export default function CrearCuenta() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [localErrorMessage, setLocalErrorMessage] = useState("");
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    return (
        <div>
            <div className = "flex justify-center h-100">
                <div className="flex justify-center h-100 bg-red w-96 tiny:w-3/4 h-4/5 mt-6 py-3 rounded-md flex-col items-center m-auto my-5">
                    <h1 className="text-4xl text-white">Crea tu cuenta</h1>
                    <div className='flex flex-col items-center w-3/4 py-8'>
                    <label className = "text-lg text-white">
                      Nombre
                      <LoginInput name={'name'} type={'text'} placeholder={''} value={name} func={(evt) => {setUsername(evt.target.value);}}/>
                    </label>
                    <label className = "text-lg text-white">
                      Correo electrónico
                      <LoginInput name={'email'} type={'email'} placeholder={'abc@mail.com'} value={email} func={(evt) => {setEmail(evt.target.value);}}/>
                    </label>
                    <label className = "text-lg text-white">
                      Contraseña
                      <LoginInput name={'password'} type={'password'} placeholder={''} value={password} func={(evt) => {setPassword(evt.target.value);}}/>
                    </label>
                    <label className = "text-lg text-white">
                      Repita su contraseña
                      <LoginInput name={'confirm-password'} type={'password'} placeholder={''} value={passwordConfirmation} func={(evt) => {setPasswordConfirmation(evt.target.value);}}/>
                    </label>
                    {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                    {localErrorMessage && <span className="text-red-500">{localErrorMessage}</span>}
                    <FormBtn text={'Crear cuenta'} func={() => {
                        if (email && password && name) {
                          if (password.length < 8) {
                            setLocalErrorMessage("La contraseña debe contener al menos 8 dígitos.");
                          }
                          if (password !== passwordConfirmation) {
                            setLocalErrorMessage("Los dos campos de contraseña no son iguales.");
                          } else {
                            setLocalErrorMessage("");
                            dispatch(
                              postCreateUser({
                                name,
                                email,
                                password,
                              })
                            );
                            navigate("/", { replace: true });
                          }
                        } else {
                          setLocalErrorMessage("Debe completar todos los campos");
                        }
                    }}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}