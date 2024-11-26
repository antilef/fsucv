export default function NavBar(){
    return (
        <>
            <header className="bg-secondary">
                <nav className="w-full flex items-center justify-between py-4">
                    <div className="pl-10">
                        <h1 className="font-bold text-xl border-2 p-2 text-white" >NASC</h1>
                    </div>
                
                    <div className="flex px-10">
                        <ul className="flex space-4 gap-20 [&>li]:text-white [&>li]:font-bold">
                            <li className=""><a href="">Boleta</a></li>
                            <li className=""><a>Consumo</a></li>
                            <li className=""><a>Beneficios</a></li>
                            <li className=""><a>Mis Datos</a></li>
                            <li className=""><a>Log Out</a></li>    
                        </ul>
                    </div>                
                </nav>
            </header>
        </>
    )
}