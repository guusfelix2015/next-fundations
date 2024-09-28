'use client'

import { createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (productId: number) => {
    setCartItems((prevItems) => {
      const productInCart = prevItems.some(
        (item) => item.productId === productId,
      )
      if (productInCart) {
        return prevItems.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      } else {
        return [...prevItems, { productId, quantity: 1 }]
      }
    })
  }
  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
