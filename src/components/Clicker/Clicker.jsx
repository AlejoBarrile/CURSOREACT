
import Button from 'react-bootstrap/Button';




export const Clicker= ({counter, setCounter,}) =>{


    const sumarCant =()=>{
        if(counter<10)
        setCounter(counter +1)
    
    }
    const restarCant = ()=>{
        if(counter>1)
            setCounter(counter -1 )
        
    }
    return(
    <div>
        <Button onClick={restarCant} variant="danger m-4">-</Button>
                                    
                                        
        <div className='cantidad__producto'>{counter}</div>

        <Button  onClick={sumarCant} variant="success m-4">+</Button>
        <br />

        
    </div>
    )
}