import React from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../Slices/cart/cartSlice";

function GridItemBtn(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="h-10 w-40 bg-red hover:bg-dark-red text-white font-bold py-2 rounded-md shadow-lg"
        onClick={() => {
          const product = {
            name: props.name,
            price: props.price,
            image: props.image,
            alt: props.alt,
            size: props.size,
          };
          dispatch(
            addItemToCart({
              product,
            })
          );
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

function CartBtn(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="h-10 w-40 bg-red hover:bg-light-red text-white font-bold py-2 rounded-md shadow-lg"
        onClick={() => {
          const product = {
            name: props.productName,
            price: props.price,
          };
          dispatch(
            removeItemFromCart({
              product,
            })
          );
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

function SideMenuBtn(props) {
  const location = useLocation();
  let sideBtnClass;
  if (location.pathname === props.link) {
    sideBtnClass = "h-14 w-64 bg-yellow text-lg font-bold rounded-md shadow-xl";
  } else {
    sideBtnClass =
      "h-14 w-64 bg-red hover:bg-dark-red text-white text-lg font-bold rounded-md shadow-xl";
  }
  return (
    <div>
      <Link to={`${props.link}`}>
        <button className={sideBtnClass}>{props.text}</button>
      </Link>
    </div>
  );
}

function FormBtn({ text, func }) {
  return (
    <button
      className="h-12 w-40 bg-yellow hover:bg-light-red text-lg font- p-2 rounded-md"
      onClick={func}
    >
      {text}
    </button>
  );
}

function ReceivedBtn(props) {
  const navigate = useNavigate();
  return (
      <button className="h-12 w-40 bg-pizza hover:bg-yellow text-white text-lg p-2 m-8 rounded-md"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        {props.text}
      </button>
  );
}

export { GridItemBtn, SideMenuBtn, FormBtn, ReceivedBtn, CartBtn };