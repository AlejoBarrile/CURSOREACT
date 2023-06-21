
import Card from 'react-bootstrap/Card';
import { Clicker } from '../Clicker/Clicker';
import { Talles } from '../Talles/Talles';


const ItemDetail = ({id, nombre, descripcion, precio, img, talle})=>{

    return(
        <div>
              
                <div className="carta__detalle"> 
                
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className='foto__producto' variant="top" src={img} alt={nombre} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Title>${precio}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <Talles/>
                        <Clicker>
                            
                        </Clicker>
                        
                        
                    </Card.Body>
                    </Card>
                </div> 
        </div>




    )



}
export default ItemDetail