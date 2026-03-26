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
import OrderHistory from '../Pages/OrderHistory'
import ReservationHistory from '../Pages/ReservationHistory'
import Profile from '../Pages/Profile'
import ProtectedRoute from '../Components/Auth/ProtectedRoute'

const MainRote = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        
        {/* Protected Routes */}
        <Route path='/table-reservation' element={<ProtectedRoute><Reservation /></ProtectedRoute>} />
        <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/ordersuccess' element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
        <Route path='/order-history' element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
        <Route path='/reservation-history' element={<ProtectedRoute><ReservationHistory /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default MainRote