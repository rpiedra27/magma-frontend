import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { postRecoverPass } from "../../Slices/users/requests/postRecoverPass";
import { LoginInput } from "../../Components/CustomInput";
import { FormBtn } from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";

export default function RecuperarContrasena() {
  const [email, setEmail] = useState("");
  const [localErrorMessage, setLocalErrorMessage] = useState("");
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const userIsRecoveringPass = useSelector((state) => state.user.userIsRecoveringPass);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return userIsRecoveringPass ? (
    <Navigate to="/" />
  ) : (
    <div>
      <div className="flex justify-center h-100 bg-red w-96 tiny:w-3/4 h-4/5 mt-6 py-8 rounded-md flex-col items-center m-auto">
        <h1 className="text-3xl text-white tiny:text-center">Recupera tu contraseña</h1>
        <div className="flex flex-col items-center w-3/4 py-8">
          <div>
            <p className="mb-4 text-white text-lg">
              Ingresa el correo electrónico asociado a tu cuenta, te llegará un
              código de recuperación
            </p>
          </div>
          <LoginInput name={'email'} type={'email'} placeholder={'abc@mail.com'} value={email} func={(evt) => {setEmail(evt.target.value);}}/>
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}
          {localErrorMessage && <span className="text-red-500">{localErrorMessage}</span>}
          <FormBtn text={'Enviar código'} func= {() => {
              if (email) {
                setLocalErrorMessage("");
                dispatch(
                  postRecoverPass({
                    email
                  })
                );
                navigate("/ContrasenaNueva", { replace: true });
              } else {
                setLocalErrorMessage("Debe indicar su correo");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
