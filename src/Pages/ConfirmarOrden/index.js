import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { IngredientInput } from "../../Components/CustomInput";
import { IngredientOption } from "../../Components/CustomIngredientBox";
import { LoginInput } from "../../Components/CustomInput";
import { postOrder } from "../../Slices/cart/requests/postOrder";

export default function ConfirmarOrden() {
  const cart = useSelector((state) => state.cart.cart);
  const [pickup, setPickup] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const totalCost = useSelector((state) => state.cart.totalCost);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-3xl text-center mt-6">Completa tu compra</h1>
      <div className="flex flex-col gap-4 w-4/5 m-auto mt-5 p-5 items-center">
        {cart &&
          cart.map((item, index) => {
            return (
              <div
                className="w-full border-pizza border-b-2 pb-2 shadow-md"
                key={index}
              >
                <p className="text-lg text-center">
                  {`${item.name}`} {item.size === "undefined" ? "" : item.size}{" "}
                  ₡{`${item.price}`}
                </p>
              </div>
            );
          })}
        <div>
          <p className="text-2xl">Total: ₡{totalCost}</p>
        </div>
      </div>

      <div className="flex w-9/12 m-auto gap-x-4 p-5 justify-center text-lg">
        <IngredientOption text="Recoger en la tienda">
          <IngredientInput
            inputType="radio"
            ingredientValue="store"
            ingredientName="pickup"
            ingredientFunction={(evt) => {
              setPickup(evt.target.value);
            }}
          />
        </IngredientOption>
        <IngredientOption text="Express">
          <IngredientInput
            inputType="radio"
            ingredientValue="express"
            ingredientName="pickup"
            ingredientFunction={(evt) => {
              setPickup(evt.target.value);
            }}
          />
        </IngredientOption>
      </div>

      <div className="w-9/12 m-auto flex justify-center">
        <label className="text-lg text-slate-900 text-center">
          Ingresa tu nombre
          <LoginInput
            name={"name"}
            type={"text"}
            placeholder={""}
            value={name}
            func={(evt) => {
              setName(evt.target.value);
            }}
          />
        </label>
      </div>
      <div className="w-9/12 m-auto flex justify-center">
        <label className="text-lg text-slate-900 text-center">
          Ingresa tu dirección
          <textarea
            name="address"
            type="text"
            className="mb-6 mt-1 h-40 block px-3 py-2 w-64 bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
            focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow"
            value={address}
            onChange={(evt) => {
              setAddress(evt.target.value);
            }}
          ></textarea>
        </label>
      </div>

      <div className="flex w-9/12 m-auto justify-center gap-x-10 pb-5">
        <button
          className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md"
          onClick={() => {
            dispatch(
              postOrder({
                name,
                cart,
                totalCost,
                pickup,
                address,
              })
            );
            navigate("/OrdenRecibida", { replace: true });
          }}
        >
          Confirmar compra
        </button>
        <button
          className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md"
          onClick={() => {
            navigate("/Carrito", { replace: true });
          }}
        >
          Volver al carrito
        </button>
      </div>
    </div>
  );
}
