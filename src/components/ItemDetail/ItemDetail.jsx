import { useContext, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Clicker } from '../Clicker/Clicker';
import { Talles } from '../Talles/Talles';
import { CartContext } from '../CartContext/CartContext';
import Button from 'react-bootstrap/esm/Button';
import {Link, useNavigate} from "react-router-dom"
import { FaTrashAlt } from 'react-icons/fa'


const ItemDetail = ({id, nombre, descripcion, precio, img})=>{
    const navigate = useNavigate()
    const handleVolver=()=>{
        navigate(-1)
    }
    const {agregarAlCarrito, isInCart, eliminarDelCarrito}= useContext(CartContext)
    const [cantidad, setCantidad]= useState(1)
    const [talle, setTalle] = useState(null)
    
    const handleAgregar=()=>{
        const item={
            id,
            nombre,
            precio,
            descripcion,
            img,
            cantidad,
            talle,
        }
        
        agregarAlCarrito(item)
    
    }
    

    
    return(
        <div>
              
                <div className="carta__detalle"> 
                
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className='foto__producto' variant="top" src={img} alt={nombre} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Title>${precio}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <Talles setTalle={setTalle}/>
                        <br />
                        
                        
                        <Clicker counter={cantidad} setCounter={setCantidad}/>
                        <Button onClick={handleAgregar} variant="primary">Agregar al carrito</Button>
                        { 
                            isInCart(id)
                                ? <Link className='btn btn-success' to="/cart">Terminar mi compra</Link>
                                : null
                            }      
                        <Button className='eliminar' variant='danger' onClick={()=> eliminarDelCarrito(id)}><FaTrashAlt/></Button>
                        <hr />
                        
                        <Button onClick={handleVolver} variant="secondary">Volver</Button>

                        
        
                    </Card.Body>
                    </Card>
                </div> 
        </div>




    )



}
export default ItemDetail
