import React from 'react';
import { MenuItem, MenuPizzaItem, HomeItem } from '../MenuItem';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function ProductGrid({url}) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsFetch = await fetch(url);
            const productsJSON = await productsFetch.json();
            setItems(productsJSON);
            setLoading(false);
        }

        fetchProducts();
    }, []);


    return (
        loading ? <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="w-16 h-16 border-b-2 border-pizza rounded-full animate-spin"></div>
        </div> : (
            <div className="mx-10 mb-20 grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8 xl:pr-40">
            {
                items && items.map((i) => {
                    return (
                        <MenuItem name= {`${i.name}`} description={`${i.description}`} price= {`${i.price}`} image= {`${i.image}`} alt= {`${i.name}`}/>
                    )
                })
            }
            </div>
        )
    )
}

function ProductGridPizza({url}) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsFetch = await fetch(url);
            const productsJSON = await productsFetch.json();
            setItems(productsJSON);
            setLoading(false);
        }

        fetchProducts();
    }, []);


    return (
        loading ? <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="w-16 h-16 border-b-2 border-pizza rounded-full animate-spin"></div>
        </div> : (
            <div className="mx-10 mb-20 grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8 xl:pr-40">
            {
                items && items.map((i) => {
                    return (
                        <MenuPizzaItem name= {`${i.name}`} description={`${i.description}`} price= {`${i.price}`} image= {`${i.image}`} alt= {`${i.name}`}/>
                    )
                })
            }
            </div>
        )
    )
}

function HomeProductGrid({homePizzaUrl, homeComboUrl}) {
    const [pizzaItems, setPizzaItems] = useState(null);
    const [comboItems, setComboItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const pizzaItemsFetch = await fetch(homePizzaUrl);
            const pizzaItemsJSON = await pizzaItemsFetch.json();
            setPizzaItems(pizzaItemsJSON);

            const comboItemsFetch = await fetch(homeComboUrl);
            const comboItemsJSON = await comboItemsFetch.json();
            setComboItems(comboItemsJSON);

            setLoading(false);
        }

        fetchProducts();
    }, []);


    return (
        loading ? <div className="fixed top-[90%] left-[50%] -translate-x-[50%] -translate-y-[90%]">
            <div className="w-16 h-16 border-b-2 border-pizza rounded-full animate-spin"></div>
        </div> : (
        <div>
            <p className="text-center text-pizza text-3xl cel:text-2xl cel:mx-10 mt-5 mb-10">
                Disfrute de nuestras pizzas, tanto de las clásicas como las innovadoras
            </p>
            <div className="flex justify-between tiny:justify-center flex-wrap lg:mx-36 cel:mx-10 my-10">
            {
                pizzaItems && pizzaItems.map((i) => {
                    return (
                        <HomeItem name={i.name} image= {i.image}/>
                    )
                })
            }
            </div>
            <div className="ml-36 tiny:mx-10 tiny:flex tiny:justify-center mb-10" >
                <Link to="/Pizzas">
                    <button className="h-12 w-52 bg-pizza hover:bg-yellow text-white text-lg rounded-md">Vea el menú de pizzas</button>
                </Link>
            </div>
            <p className="text-center text-pizza text-3xl cel:text-2xl cel:mx-10 mt-5 mb-10">
                Si no puede decidir ¡Dale un vistazo a nuestras promociones!
            </p>
            <div className="lg:flex lg:justify-between cel:flex-col lg:mx-36 cel:mx-10 my-10">
            {
                comboItems && comboItems.map((i) => {
                    return (
                        <HomeItem name={i.name} image={i.image}/>
                    )
                })
            }               
            </div>
            <div className="ml-36 cel:mx-10 cel:flex cel:justify-center mb-10">
                <Link to="/Promos">
                    <button className="h-12 w-52 bg-pizza hover:bg-yellow text-white text-lg rounded-md">Vea el menú de combos</button>
                </Link>
            </div>
        </div>
        )
    )
}

export {ProductGrid, ProductGridPizza, HomeProductGrid};