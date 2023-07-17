
import { useEffect } from 'react';



export const Talles = ({setTalle})=>{
        const talles=[
                {
                        value: "S",
                        label: "S"
                },
                {
                        value: "M",
                        label: "M"
                },
                {
                        value: "L",
                        label: "L"
                },
                {
                        value: "XL",
                        label: "XL"
                },
        ]
        const handleSelect= (e)=>{
                setTalle(e.target.value)
                
        }
        useEffect(() =>{
                setTalle(talles[0].value)
        },[])
        
        return(    
                <div>
                        <select onChange={handleSelect}>
                                {talles.map((opt) => <option key={opt.value} value={opt.value}>{opt.label} </option> )}
                        </select>  
                </div>
        )




}