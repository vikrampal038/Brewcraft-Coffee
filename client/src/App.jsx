import React from 'react'
import Mainrouter from './appRoute/Mainrouter'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import ScrollToTop from './Common/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Mainrouter />
      <Footer />
    </div>
  )
}

export default App
