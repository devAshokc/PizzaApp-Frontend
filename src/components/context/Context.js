import React from 'react'
const Cart = React.createContext()
export default function Context({children}) {
  return (
   <Cart.Provider>
    {children}
   </Cart.Provider>
  )
}
