import {ProductGrid} from "../../Components/ProductGrid";
import SideMenu from "../../Components/SideMenu";

export default function Promos() {
    return (
        <div>
            <div class="py-6 mt-5 flex tiny:gap-10 tiny:grid tiny:flex-none tiny:place-content-center">
                <SideMenu />
                <ProductGrid url={`${process.env.REACT_APP_API_URL}/items/combos/`}/>
            </div>
        </div>
    );
}