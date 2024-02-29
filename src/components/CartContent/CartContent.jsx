import React, { useContext } from 'react'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import { dataContext } from '../Context/DataContext'

const CartContent = () => {

  return (
    <>
    <CartElements/>
    <CartTotal/>
    </>
  )
  
}

export default CartContent