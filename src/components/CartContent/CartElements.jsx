import React, { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import CartItemCounter from './CartItemCounter';
import './CartContent.css';


const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);
  
  const deleteProduct = (id) => {
    const foundProduct = cart.find((element) => element.id === id);
    const newCart = cart.filter((element) => element !== foundProduct);
    setCart(newCart);
  };

  const updateCart = (productId, newQuantity) => {
    const updatedCart = cart.map(product => {
      if (product.id === productId) {
        return { ...product, quanty: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };



  return cart.map((product) => {
    return (
      <section>
              <div className="cartContent" key={product.id}>
                  <img src={product.img} alt={product.nombre} />
                  <h3 className="name">{product.nombre}</h3>
                  <CartItemCounter product={product} updateCart={updateCart} />
                  <h4 className="price">${product.precio}</h4>
                  <h3 className="cart-delete" onClick={() => deleteProduct(product.id)}>X</h3>
              </div>

      </section>
    );
  });
};

export default CartElements;
