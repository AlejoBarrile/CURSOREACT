import { useContext, useState } from "react"
import { CartContext } from "../components/CartContext/CartContext"
import { Navigate } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/config"
import { Link } from "react-router-dom"


export const Pay = () => {

    const[orderID, setOrderID]=useState(null)
    const {cart, totalCompra, vaciarCarrito, totalCantidad} = useContext(CartContext)


    const [values, setValues]= useState({

        nombre: "",
        direccion: "",
        email: "",
        telefono:"",
        tarjeta: "",
        cod: "" 
    })
   

    const handleSubmit = (e)=> {
        e.preventDefault()
     
        if(!values.nombre || !values.direccion || !values.email || !values.tarjeta || !values.cod){
            alert("Todos los campos son obligatorios!")
            return
        }
        if(isNaN(values.cod) || isNaN(values.tarjeta) || isNaN(values.telefono)){
            alert("Ingrese correctamente los datos")
        }
        
        const orden ={
            cliente: {values}, 
            items: cart,
            total: totalCompra(),
            fecha: new Date(),
            estado: "generada"
        }
        const orderRef = collection(db, "orders")
        addDoc(orderRef, orden)
        .then((doc) => {
            setOrderID(doc.id)} )
        .catch((error)=> {console.log(error)})
    }

    const handleInput = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
       
    }

    if(orderID){
        
    return(
        
        <div className="item__list">
            <h2>Compra exitosa!</h2>
            <h3>Tu orden de compra es: <strong>{orderID}</strong></h3>
            <Link onClick={vaciarCarrito()} className="btn btn-primary m-2" to="/">Volver al Inicio</Link>
        </div>
    )}
           
        
    
    const verificar = totalCompra()
    if( verificar === 0 ){
        return <Navigate to={"/"}/>
    }

    return(
        <div className="item__list ">
            
            <h2 className="productos__titulo">Estás a un paso de adquirirlo!</h2>
            <hr />
            {cart.map((prod) =>   <h2 key={prod.id}><strong>Tus productos:</strong> {prod.nombre} / <strong>Cantidad:</strong> {prod.cantidad} </h2>)} 
                
            {<h2><strong>Cantidad total:</strong>  {totalCantidad()}  </h2>}
            {<h2><strong>Precio final:</strong>  ${totalCompra()}  </h2>}
                    
            <div className="formulario">
                <form className="col-6" action="" onSubmit={handleSubmit }>
                    <input required name="nombre" onChange={handleInput} value={values.nombre} type="text" placeholder="Nombre y apellido del titular" className="form-control  my-4"/>
                    <input required name="tarjeta" onChange={handleInput} value={values.tarjeta} type="text" placeholder="Ultimos 4 digitos de la tarjeta" className="form-control my-4"/>
                    <input required name="cod" onChange={handleInput} value={values.cod} type="text" placeholder="Código de seguridad" className="form-control my-4"/>
                
                    <input required name="direccion"onChange={handleInput} value={values.direccion} type="text" placeholder="Dirección" className="form-control my-4"/>
                    <input required name="telefono"onChange={handleInput} value={values.telefono} type="text" placeholder="Teléfono" className="form-control my-4"/>
                    <input required name="email" onChange={handleInput} value={values.email} type="text" placeholder="Email" className="form-control my-4"/>
                    
                    <button type="submit" className="btn btn-success col-6" >Pagar</button>


                </form>

            </div>


        </div>
    )
}