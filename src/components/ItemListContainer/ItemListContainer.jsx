import { useEffect, useState } from "react"

import {ItemList} from "../ItemList/ItemList"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Link, useParams } from "react-router-dom"




const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    const {categoryID} = useParams()
    
    useEffect(() =>{
        setLoading(true)
        setProductos([])

        pedirDatos()
            .then((res) =>{
                if(!categoryID){
                    setProductos(res)
                }
                else{
                    setProductos(res.filter((item) => item.tipo ===categoryID))
                }
            })
            .catch((error) =>{  
                console.log(error)
            })
            .finally(()=> setLoading(false))
    },[categoryID])




    return (
        <div className='fondo__inicio'>
            <div className="item__list">
                
                    <ItemList items={productos}/>
                        {
                            loading
                                ? <h4 className="loading">Cargando catálogo...</h4>
                                : null
                        }
                    

            </div>
        </div>





    )

}
export default ItemListContainer

