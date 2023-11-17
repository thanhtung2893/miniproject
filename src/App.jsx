import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home/Home'
import Cart from './component/cart/Cart'

//import "./App.css"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>  
        <Route path='/cart' element={<Cart></Cart>}> </Route>  
           
      </Routes>

    </div>
  )
}
