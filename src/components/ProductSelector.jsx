export default function ProductSelector(){
    return (
        <form action="max-w-sm mx-auto">
            <label htmlFor="products">Selecciona tu producto</label>
            <select itemID="products">
                <option value="MAX XL"></option>
                <option value="PRO MAX"></option>
                <option value="GRAND INTER"></option>
            </select>
        </form>
    )
}