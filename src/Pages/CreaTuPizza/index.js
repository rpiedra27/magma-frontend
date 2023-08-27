import { useDispatch } from "react-redux";
import {
  ColoredIngredientBox,
  IngredientBox,
  IngredientOption,
} from "../../Components/CustomIngredientBox";
import { IngredientInput } from "../../Components/CustomInput";
import { useEffect, useState } from "react";
import { addItemToCart } from "../../Slices/cart/cartSlice";

export default function CreaTuPizza() {
  const [size, setSize] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheese, setCheese] = useState("");
  const [prevPrices, setPrevPrices] = useState({
    size: 0,
    crust: 0,
    sauce: 0,
    cheese: 0,
  });
  const [meats, setMeats] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [extras, setExtras] = useState([]);
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsFetch = await fetch(
        `${process.env.REACT_APP_API_URL}/ingredients/`
      );
      const ingredientsJSON = await ingredientsFetch.json();
      setIngredients(ingredientsJSON);
      setLoading(false);
    };
    fetchIngredients();
  }, []);

  const handleRadioChange = (setter, item, name, itemPrice) => {
    if (prevPrices[name] !== 0) {
      let newPrice = price - prevPrices[name] + itemPrice;
      setPrice(newPrice);
    } else {
      let newPrice = price + itemPrice;
      setPrice(newPrice);
    }
    setPrevPrices({ ...prevPrices, [name]: itemPrice });
    setter(item);
  };

  const handleCheckboxChange = (ingredient, setter, item, itemPrice) => {
    if (ingredient.some((option) => option === item)) {
      //remove item
      setter(ingredient.filter((option) => option !== item));
      setPrice(price - itemPrice);
    } else {
      setter([...ingredient, item]); //add item
      setPrice(price + itemPrice);
    }
  };

  const getPizzaString = () => {
    let pizzaString = "";
    pizzaString +=
      "Salsa " +
      sauce +
      ", queso " +
      cheese +
      ", " +
      meats.join(", ") +
      ", " +
      vegetables.join(", ") +
      ", " +
      "extras " +
      extras.join(", ");
    return pizzaString;
  };

  return loading ? (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="w-16 h-16 border-b-2 border-pizza rounded-full animate-spin"></div>
    </div>
  ) : (
    <div>
      <h1 className="text-3xl text-pizza font-semibold text-center my-5">Crea tu propia pizza</h1>
      <div className="flex flex-col w-10/12 cel:w-full gap-y-5 justify-center m-auto">
        <IngredientBox title="Tamaño">
          {ingredients &&
            ingredients.filter((i)=>i.type === "sizes").map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <IngredientInput
                    inputType={"radio"}
                    ingredientValue={`${i.value}`}
                    ingredientName={"size"}
                    ingredientFunction={(evt) => {
                      handleRadioChange(
                        setSize,
                        evt.target.value,
                        evt.target.name,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </IngredientBox>
        <ColoredIngredientBox title="Salsas">
          {ingredients &&
            ingredients.filter((i)=>i.type === "sauces").map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <IngredientInput
                    inputType={"radio"}
                    ingredientValue={`${i.value}`}
                    ingredientName={"sauce"}
                    ingredientFunction={(evt) => {
                      handleRadioChange(
                        setSauce,
                        evt.target.value,
                        evt.target.name,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </ColoredIngredientBox>
        <IngredientBox title="Quesos">
          {ingredients &&
            ingredients.filter((i)=>i.type === "cheeses").map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <IngredientInput
                    inputType={"radio"}
                    ingredientValue={`${i.value}`}
                    ingredientName={"cheese"}
                    ingredientFunction={(evt) => {
                      handleRadioChange(
                        setCheese,
                        evt.target.value,
                        evt.target.name,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </IngredientBox>
        <ColoredIngredientBox title="Carnes">
          {ingredients &&
            ingredients.filter((i)=>i.type === "meats").map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <IngredientInput
                    inputType={"checkbox"}
                    ingredientValue={`${i.value}`}
                    ingredientName={"meat"}
                    ingredientFunction={(evt) => {
                      handleCheckboxChange(
                        meats,
                        setMeats,
                        evt.target.value,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </ColoredIngredientBox>
        <IngredientBox title="Vegetales y Frutas">
          {ingredients &&
            ingredients.filter((i)=>i.type === "vegetables").map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <IngredientInput
                    inputType={"checkbox"}
                    ingredientValue={`${i.value}`}
                    ingredientName={"vegetable"}
                    ingredientFunction={(evt) => {
                      handleCheckboxChange(
                        vegetables,
                        setVegetables,
                        evt.target.value,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </IngredientBox>
        <ColoredIngredientBox title="Extras">
          {ingredients &&
            ingredients.filter((i)=>i.type === "extras").map((i) => {
              return (
                <IngredientOption text={`${i.label}`}>
                  <IngredientInput
                    inputType={"checkbox"}
                    ingredientValue={`${i.value}`}
                    ingredientName={"extra"}
                    ingredientFunction={(evt) => {
                      handleCheckboxChange(
                        extras,
                        setExtras,
                        evt.target.value,
                        i.price
                      );
                    }}
                  />
                </IngredientOption>
              );
            })}
        </ColoredIngredientBox>
        <hr className="border-red" />
        <h2 className="text-2xl text-center">Costo: ₡{price}</h2>
        <div className="flex w-9/12 m-auto justify-center gap-x-10 pb-5">
          <button
            className="h-10 w-56 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md"
            onClick={() => {
              const product = {
                name: getPizzaString(),
                price: price,
                image: "https://ci0137.s3.amazonaws.com/magma/personalizada/personalizada.png",
                alt: "customPizza",
                size: size,
              };
              dispatch(
                addItemToCart({
                  product,
                })
              );
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
