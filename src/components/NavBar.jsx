export default function NavBar(){
    return (
        <>
            <header className="border-gray-200 bg-red-500">
                <nav className="max-w-screen flex items-center justify-between">
                    <div>
                        <h1 className="px-3 py-2">Home</h1>
                    </div>
                
                    <div className="flex">
                        <ul className="flex space-4 gap-20">
                            <li className="rounded-full px-3 py-2 hover:bg-gray-700 hover:text-white">Boletas</li>
                            <li className="rounded-full px-3 py-2 hover:bg-gray-700 hover:text-white">Consumo</li>
                            <li className="rounded-full px-3 py-2 hover:bg-gray-700 hover:text-white">Beneficios</li>
                            <li className="rounded-full px-3 py-2 hover:bg-gray-700 hover:text-white">Mis Datos</li>
                            <li className="rounded-full px-3 py-2 hover:bg-gray-700 hover:text-white">Log Out</li>    
                        </ul>
                    </div>                
                </nav>
            </header>
        </>
    )
}