import { useEffect, useState } from "react"

import {ItemList} from "../ItemList/ItemList"
import { pedirDatos } from "../../helpers/pedirDatos"




const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    
    useEffect(() =>{
        pedirDatos()
            .then((res) =>{
                setProductos(res)
            })
            .catch((error) =>{
                console.log(error)
            })
    },[])




    return (
        <div className="item__list">
            <ItemList items={productos}/>
        </div>




    )

}
export default ItemListContainer

