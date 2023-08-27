import { CartItem } from "../../Components/MenuItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Carrito() {
  const cart = useSelector((state) => state.cart.cart);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl text-center mt-6">Mi carrito</h1>
      <div className="w-4/5 py-6 mt-5 m-auto grid grid-cols-4 gap-y-6">
        {cart &&
          cart.map((item, index) => {
            return (
              <CartItem
                key={index}
                name={`${item.name}`}
                price={`${item.price}`}
                image={`${item.image}`}
                alt={`${item.alt}`}
                productName={`${item.name}`}
                size={`${item.size}`}
              />
            );
          })}
      </div>

      <div className="flex flex-cols gap-x-8 my-8 justify-center">
        <p className="text-3xl">Total: ₡{totalCost}</p>
        <button
          className="h-10 w-40 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md"
          onClick={() => {
            navigate("/ConfirmarOrden", { replace: true });
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
