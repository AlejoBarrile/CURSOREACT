
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



export const Clicker= () =>{
    const [counter, setCounter]= useState(0)
    const sumarCant =()=>{
        if(counter ===0 || counter>0){

            setCounter(counter +1)
        }
    }
    const restarCant = ()=>{
        if(counter>0){
            setCounter(counter -1 )
        }
    }
    return(
    <div>
        <Button onClick={restarCant} variant="danger m-4">-</Button>
                                    
                                        
        <div className='cantidad__producto'>{counter}</div>

        <Button  onClick={sumarCant} variant="success m-4">+</Button>
        <br />
        <Button variant="primary">Agregar al carrito</Button>
    </div>
    )
}