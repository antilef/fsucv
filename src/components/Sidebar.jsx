const Sidebar = () => {
    return (
        <div className="flex flex-col gap-4 border-2 rounded-xl">
            <i class="fa-solid fa-mobile-screen-button fa-4x"></i>

            {/* plan detail */}

            <div className="flex flex-col gap-4">
                <p>Detalle</p>
                <div>
                    <p>Nombre Plan</p>
                    <p>Plan XL</p>
                </div>

                <div>
                    <p>Min:</p>
                    <p>120Min</p>
                </div>

                <div>
                    <p>SMS:</p>
                    <p>120</p>
                </div>

                <div>
                    <p>SMS:</p>
                    <p>120</p>
                </div>
                
            </div>

        </div>
    )
}

export default Sidebar