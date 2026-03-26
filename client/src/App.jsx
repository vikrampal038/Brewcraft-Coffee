import React from 'react'
import Mainrouter from './appRoute/Mainrouter'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import ScrollToTop from './Common/ScrollToTop'
import { CartProvider } from './Context/CartContext'
import { AuthProvider } from './Context/AuthContext'
import LoginModal from './Components/Auth/LoginModal'

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <ScrollToTop />
          <Navbar />
          <Mainrouter />
          <Footer />
          <LoginModal />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
