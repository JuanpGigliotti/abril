import React from 'react';
import './CartItemCounter.css';

const CartItemCounter = ({ product, updateCart }) => {
  const incrementar = () => {
    updateCart(product.id, product.quanty + 1);
  }

  const decrementar = () => {
    if (product.quanty > 1) {
      updateCart(product.id, product.quanty - 1);
    }
  }

  return (
    <>
      <div className="counter-container">
        <button onClick={decrementar}> - </button>
        <p className="contador"> {product.quanty} </p>
        <button onClick={incrementar}> + </button>
      </div>
    </>
  );
}

export default CartItemCounter;
