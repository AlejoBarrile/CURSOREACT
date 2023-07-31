import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react"

import Header from "./components/Header/Header"
import "./mycss/App.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros";
import Inicio from "./components/Inicio/Inicio";
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import { Cart } from './components/Cart/Cart';
import { Pay } from './Pay/Pay';









function App() {
  
    
  return (

    <CartProvider>
        <BrowserRouter>
          
            <Header/>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:categoryID' element={<ItemListContainer/>} />
              <Route path='/item/:itemID' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<Navigate to={"/"}/>}/>
              <Route path='/pay' element={<Pay/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
              <Route path='/cart' element={<Cart/>}/>   
            </Routes>
          <Footer/>
          
          
          
        </BrowserRouter>
    </CartProvider>

  )
}

export default App
