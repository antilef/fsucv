import NavBar from "src/components/NavBar";
import ProductSelector from "src/components/ProductSelector";
import Sidebar from "src/components/Sidebar";
import Detail from "src/components/Detail";

export default function HomePage(){
    return (
        <>
            <NavBar/>
            <div className="flex flex-col gap-8 w-[80%] mx-auto py-10">

                <ProductSelector/>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-[20%]">
                        <Sidebar/>
                    </div>
                    <div className="lg:w-[80%]">
                        <Detail/>
                    </div>
                </div>
            </div>

            
        </>
    )
}