
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemCard = ({item}) =>{
    return (
        <div className="col-2 m-5"> 

            
           
                
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className='foto__producto' variant="top" src={item.img} alt={item.nombre} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Title>${item.precio}</Card.Title>
                        <Card.Text className='descripcion'>
                        {item.descripcion}
                        </Card.Text>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
                    </Card>
        </div>        
           
            
  );
}