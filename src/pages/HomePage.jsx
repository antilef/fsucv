import NavBar from "../components/NavBar";
import ProductSelector from "../components/ProductSelector";

export default function HomePage(){
    return (
        <>
            <NavBar/>

            <ProductSelector/>

            <div className="grid-cols-2">
                <div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}