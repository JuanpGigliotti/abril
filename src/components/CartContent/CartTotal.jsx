import React from 'react'
import { dataContext } from '../Context/DataContext'
import { useContext } from 'react'

    
const CartTotal = () => {
  const {cart} = useContext(dataContext);
  const total = cart.reduce((acc,it)=> acc + it.precio, 0);
  return (
    <div className='cartTotal'>
        <h3>Total: ${total}</h3>
    </div>
  )
}

export default CartTotal