export default function ProductSelector(){
    return (
        <div className="w-[400px] min-w-[200px] mt-4" >
            <div className="relative">
                <form action="" className="">
                    <label htmlFor="products" className="pr-8">Selecciona tu producto</label>
                    <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm rounded pl-3 pr-8 py-2" itemID="products">
                        <option value="MAX XL">Plan l max</option>
                        <option value="PRO MAX">PLAN MAX RRSS</option>
                        <option value="GRAND INTER">Plan XL MAX LIBRE</option>
                    </select>
                </form>
            </div>
            
        </div>
        
    )
}