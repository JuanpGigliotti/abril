import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css"

const CartElements = () => {
  const {cart, setCart} = useContext(dataContext)
  
  const deleteProduct = (id) => {
      const fundId = cart.find((element)=> element.id === id)
  
      const newCart = cart.filter((element) => {
          return element !== fundId
      });
  
      setCart (newCart);
  }
  
  return cart.map((product) => {
      return (
          <div className="cartContent" key={product.id}>
              <img src={product.img}/>
              <h3 className="name">{product.nombre}</h3>
              <CartItemCounter product={product} />
              <h4 className="price">${product.precio}</h4>
              <h3 className="cart-delete" onClick={() => deleteProduct(product.id)}>X</h3>
          </div>
      )
  })
  }
  
  export default CartElements

