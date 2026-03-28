import React from 'react'
import Mainrouter from './appRoute/Mainrouter'
import Navbar from './Common/User/Navbar'
import Footer from './Common/User/Footer'
import ScrollToTop from './Common/User/ScrollToTop'
import { CartProvider } from './Context/CartContext'
import { AuthProvider } from './Context/AuthContext'
import LoginModal from './Components/User/Auth/LoginModal'

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
