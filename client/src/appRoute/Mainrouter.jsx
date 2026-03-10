import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Reservation from '../Pages/TableReservation'
import About from '../Pages/About'



const MainRote = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/table-reservation' element={<Reservation />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default MainRote