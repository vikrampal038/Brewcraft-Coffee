import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Reservation from '../Pages/TableReservation'
import About from '../Pages/About'
import Menu from '../Pages/Menu'
import ProductDetails from '../Pages/ProductDetails'
import Checkout from '../Pages/Checkout'
import Cart from '../Pages/Cart'
import OrderSuccess from '../Pages/OrderSuccess'



const MainRote = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/table-reservation' element={<Reservation />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/ordersuccess' element={<OrderSuccess />} />
      </Routes>
    </>
  )
}

export default MainRote