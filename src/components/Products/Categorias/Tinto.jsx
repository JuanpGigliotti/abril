import React, { useContext } from 'react';
import { dataContext } from '../../Context/DataContext';
import Navbar from "../../Nabar/Navbar"; 
import Banner from "../../Banner/Banner";


const Tinto = () => {
  const { data, selectedCategory, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    console.log(product);
    setCart([...cart, product]);
  }

  const filteredProducts = selectedCategory
    ? data.filter((producto) => producto.idcategoria === selectedCategory)
    : data;

  return (
    <div>
      <Navbar />
      <Banner />
      <div className='products-container-cat'>
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.nombre}</h3>
            <h4>${product.precio}</h4>
            <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tinto;

