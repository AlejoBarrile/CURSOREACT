import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { Link, useParams } from "react-router-dom"
import ListaDeFiltrado from "../ListaDeFiltrado/ListaDeFiltrado"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../config/config"




const ItemDetailContainer = () =>{

    const [item, setItem] = useState([])
    const[loading, setLoading] = useState(true)
    const {itemID} = useParams()
    
    useEffect(() =>{
        setLoading(true)
        setItem([])
        const itemRef= doc(db, "productos", itemID)

        getDoc(itemRef)
            .then((doc) =>{
                
                    setItem({...doc.data(), id: doc.id})
                
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

