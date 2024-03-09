import React, { useContext } from 'react'
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import { Link } from 'react-router-dom'

const CartContent = () => {

  return (
    <>
    <CartElements/>
    <CartTotal/>
    <Link to={"/checkout"}> <button className='checkout'> Finalizar Compra </button> </Link>
    </>
  )
  
}

export default CartContent