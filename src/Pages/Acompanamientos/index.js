import SideMenu from "../../Components/SideMenu";
import {ProductGrid} from "../../Components/ProductGrid";

export default function Acompanamientos() {
    return (
        <div className="py-6 mt-5 flex tiny:gap-10 tiny:grid tiny:flex-none tiny:place-content-center">
            <SideMenu />
            <ProductGrid url={`${process.env.REACT_APP_API_URL}/accompaniments`}/>
        </div>
    )
}