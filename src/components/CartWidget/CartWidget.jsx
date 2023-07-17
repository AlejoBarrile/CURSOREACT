import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"


const CartWidget = ()=>{
   const {totalCantidad} = useContext(CartContext)

    return(
        <div>
            <Link to="/cart"><img className="carrito" src="../src/assets/carrito.png" alt="CARRITO" /></Link>
                <span className="cantidad__carrito">{totalCantidad()}</span>
        </div>
    )
        }
        export default CartWidget