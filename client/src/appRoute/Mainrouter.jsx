import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/User/Home'
import Contact from '../Pages/User/Contact'
import Reservation from '../Pages/User/TableReservation'
import About from '../Pages/User/About'
import Menu from '../Pages/User/Menu'
import ProductDetails from '../Pages/User/ProductDetails'
import Checkout from '../Pages/User/Checkout'
import Cart from '../Pages/User/Cart'
import OrderSuccess from '../Pages/User/OrderSuccess'
import OrderHistory from '../Pages/User/OrderHistory'
import ReservationHistory from '../Pages/User/ReservationHistory'
import Profile from '../Pages/User/Profile'
import EditProfile from '../Pages/User/EditProfile'
import ProtectedRoute from '../Components/User/Auth/ProtectedRoute'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import AdminOrders from '../Pages/Admin/AdminOrders'
import AdminReservations from '../Pages/admin/AdminReservations'
import AdminProducts from '../Pages/Admin/AdminProducts'

const MainRote = () => {
  return (
    <>
      <Routes>
        {/* Admin Routes */}
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/products' element={<AdminProducts />} />
        <Route path='/admin/orders' element={<AdminOrders />} />
        <Route path='/admin/reservations' element={<AdminReservations />} />

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
        <Route path='/edit-profile' element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default MainRote
