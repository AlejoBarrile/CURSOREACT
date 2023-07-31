import { useEffect, useState } from "react"

import {ItemList} from "../ItemList/ItemList"
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../config/config"




const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    const {categoryID} = useParams()
    
    useEffect(() =>{
        setLoading(true)
        setProductos([])
        const productosRef = collection(db, "productos")
        let q = categoryID ? query(productosRef, where("tipo", "==", categoryID)) :
                productosRef
        getDocs(q)
            .then((resp) =>{
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
        })
        .catch(e => console.log(e) )
        .finally(() => setLoading(false))

    },[categoryID])




    return (
        
            <div className="item__list">
                
                    <ItemList items={productos}/>
                        {
                            loading
                                ? <h4 className="loading">Cargando catálogo...</h4>
                                : null
                        }
                    

            </div>
        





    )

}
export default ItemListContainer

