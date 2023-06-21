import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Link, useParams } from "react-router-dom"
import ListaDeFiltrado from "../ListaDeFiltrado/ListaDeFiltrado"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () =>{

    const [item, setItem] = useState([])
    const[loading, setLoading] = useState(true)
    const {itemID} = useParams()
    
    useEffect(() =>{
        setLoading(true)
        setItem([])

        pedirDatos()
            .then((res) =>{
                
                    setItem(res.find((prod)=> prod.id === Number(itemID)))
                
            })
            .catch((error) =>{  
                console.log(error)
            })
            .finally(()=> setLoading(false))
    },[itemID])

    return (
        <div className="item__list" >
           
                <div>
                    <ListaDeFiltrado/>
                </div>
                <div >
                        {
                            loading
                                ? <h4 className="loading">Cargando...</h4>
                                : <ItemDetail {...item}/>
                        }
                
            
                </div>
                
    
        </div>




    )

}
export default ItemDetailContainer

