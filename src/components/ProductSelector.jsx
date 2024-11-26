export default function ProductSelector(){
    return (
        <div className="w-[30%] min-w-[200px] mt-10" >
            <form action="" className="flex flex-col gap-4">
                <label htmlFor="products" className="font-bold text-slate-600">Selecciona tu producto</label>
                <select className="w-full border-2 bg-transparent placeholder:text-slate-400 placeholder:font-bold [&>option]:font-bold text-slate-400 text-sm rounded pl-3 pr-8 py-2" itemID="products">
                    <option value="MAX XL">Plan L MAX</option>
                    <option value="PRO MAX">PLAN MAX RRSS</option>
                    <option value="GRAND INTER">Plan XL MAX LIBRE</option>
                </select>
            </form>
        </div>
        
    )
}