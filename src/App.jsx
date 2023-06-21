import 'bootstrap/dist/css/bootstrap.css';
import React from "react"

import Header from "./components/Header/Header"
import "./css/App.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros";
import Inicio from "./components/Inicio/Inicio";
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';









function App() {
  

  return (
    <BrowserRouter>
      
        <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryID' element={<ItemListContainer/>} />
          <Route path='/item/:itemID' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to={"/"}/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/> 
        </Routes>
      <Footer/>
      
      
      
    </BrowserRouter>
  )
}

export default App
