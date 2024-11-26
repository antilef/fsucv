import NavBar from "src/components/NavBar";
import ProductSelector from "src/components/ProductSelector";

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