import React from 'react'
import Mainrouter from './appRoute/Mainrouter'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainrouter />
      <Footer />
    </div>
  )
}

export default App
