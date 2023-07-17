
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const ItemCard = ({item}) =>{
    return (
        <div className="col-2 m-5"> 

            
           
                
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className='foto__producto' variant="top" src={item.img} alt={item.nombre} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Title>${item.precio}</Card.Title>
                        <Link className='ver__mas' to={`/item/${item.id}`}> Ver más</Link>
                    </Card.Body>
                    </Card>
        </div>        
           
            
  );
}