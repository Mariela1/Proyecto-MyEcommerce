import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'



function App() {

  return (
    <>
    <BrowserRouter>   
     <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
      </Routes>
     </CartProvider>
     </BrowserRouter>

    </>
  )
}

export default App
