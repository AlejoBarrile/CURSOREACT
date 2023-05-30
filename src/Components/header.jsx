




const Header = () =>{
    return(
        
            <div>
                
                <nav className="barra__nav">
                    <img className="logo" src="./src/assets/logo.png" alt="LOGO INFAME" />
                    <div >
                        <ul className="lista" >
                            <li>
                                <a href="">Inicio</a>
                            </li>
                            <li>
                                <a href="">Tienda</a>
                            </li>
                            <li>
                                <a href="">Sobre nosotros</a>
                            </li>
                            
                            <li><a href=""><img className="carrito" src="../src/assets/carrito.png" alt="CARRITO" /></a></li>
                        </ul>
                        <span className="cantidad__carrito">0</span>
                    </div>
                </nav>

            </div>



    )
}
export default Header