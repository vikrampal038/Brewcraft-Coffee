import React from 'react'
import Mainrouter from './appRoute/Mainrouter'
import { CartProvider } from './Context/CartContext'
import { AuthProvider } from './Context/AuthContext'
import LayoutWrapper from './appRoute/LayoutWrapper'

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <LayoutWrapper>
          <Mainrouter />
        </LayoutWrapper>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
