import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductDetails from './Components/Details';
import Cart from './Components/Cart';
import CartProvider from './Components/CartContext';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        
    </Routes>
  );
  
}

export default App
