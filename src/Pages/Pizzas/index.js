import SideMenu from "../../Components/SideMenu";
import {ProductGridPizza} from "../../Components/ProductGrid";

export default function Pizzas() {
    return (
        <div className="py-6 mt-5 flex tiny:gap-10 tiny:grid tiny:flex-none tiny:place-content-center">
            <SideMenu />
            <ProductGridPizza url={`${process.env.REACT_APP_API_URL}/items/pizzas/`}/>
        </div>
    )
}