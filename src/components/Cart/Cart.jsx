import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { ItemCardInCart } from "../ItemCardInCart/ItemCardInCart"
import { Button } from "bootstrap"
import { Link, Navigate } from "react-router-dom"

export const Cart = () =>{

    const {vaciarCarrito, cart, totalCompra, totalCantidad} = useContext(CartContext)

    return (
        <div className="item__list" >
            
                <div className="row me-auto">
                    <h2 className="productos__titulo">Tu carrito</h2>
                    {  
                        (cart.length===0)
                        ? null
                       
                        : <div>
                        <h3><b>Total: ${totalCompra()}</b></h3>
                        <h3><b>Cantidad de artículos: {totalCantidad()}</b></h3>
                        <h3>Tu compra consta de los siguientes artículos:</h3>
                        <hr />
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                        <Link className="btn btn-success m-2" to="/pay">Ir a pagar</Link>


                    </div>
                    }

                            {
                    cart.map((prod) => <ItemCardInCart  key={prod.id}  item={prod}/> )
                }
              
                </div>
        
         
        </div>    
        



    )
}
