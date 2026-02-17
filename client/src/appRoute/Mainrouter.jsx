import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
const MainRote = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default MainRote