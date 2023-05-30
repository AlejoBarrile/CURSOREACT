import Header from "./Components/header.jsx"
import "./App.css"
import ItemList from "./Components/itemlist.jsx"


function App() {
  

  return (

      <div>
          <Header />
          <ItemList beta={"Acá pondré todos los productos en venta para que el usuario añada al carrito. Próximamente..."}/>
      </div>
      

  )
}

export default App
