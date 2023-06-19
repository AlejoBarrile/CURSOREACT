import { ItemCard } from "../ItemCard/ItemCard"

export const ItemList = ({items}) =>{
    return (
        <div>
            
                <div className="row me-auto">
                <h2 className="productos__titulo">Listado de productos</h2>
                
                            {
                    items.map((prod) => <ItemCard  key={prod.id}  item={prod}/> )
                }
                </div>
        
         
        </div>    
        



    )
}

