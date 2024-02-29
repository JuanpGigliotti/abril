import React, { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

const CartTotal = () => {
  const { cart } = useContext(dataContext);
  
  const total = cart.reduce((acc, product) => acc + (product.precio * product.quanty), 0);

  return (
    <div className='cartTotal'>
      <h3>TOTAL: ${total}</h3>
    </div>
  );
}

export default CartTotal;
