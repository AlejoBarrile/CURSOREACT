import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export const Talles = ()=>{
        return(
            
        <div>
                <h5 className='text-center'>Seleccione talle</h5>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">S</Button>
                    <Button variant="secondary">M</Button>
                    <Button variant="secondary">L</Button>
                    <Button variant="secondary">XL</Button>
                    <Button variant="secondary">XXL</Button>
                </ButtonGroup>
            
        </div>
        )




}