import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from './Pages/Contact'
const MainRote = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default MainRote