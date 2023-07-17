
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

import { FaTrashAlt } from 'react-icons/fa'

export const ItemCardInCart = ({item}) =>{
    const {eliminarDelCarrito}=useContext(CartContext)
    return (
        <div className="col-2 m-5"> 


           
                
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className='foto__producto' variant="top" src={item.img} alt={item.nombre} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Title>${item.precio}</Card.Title>
                        <Card.Title>Talle: {item.talle}</Card.Title>
                        <Card.Title>Cantidad: {item.cantidad}</Card.Title>
                        <Card.Text>{item.descripcion}</Card.Text>
                        
                        <button className='eliminar btn btn-danger'  onClick={()=> eliminarDelCarrito(item.id)}><FaTrashAlt/></button>
                        <hr />
                    </Card.Body>
                    </Card>
        </div>        
           
            
  );
}