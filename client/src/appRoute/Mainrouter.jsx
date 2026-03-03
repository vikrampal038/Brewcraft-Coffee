import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import TableReservation from '../Pages/TableReservation'



const MainRote = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/table-reservation' element={<TableReservation />} />
    </Routes>
    </>
  )
}

export default MainRote