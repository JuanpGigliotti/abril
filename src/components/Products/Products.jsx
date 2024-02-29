import { useContext } from "react";
import { dataContext } from "../Context/DataContext"; 
import "./Products.css";

const Products = () => {
    const {data, cart, setCart} = useContext(dataContext)
    const buyProducts = (product) => {
        console.log(product)
        setCart([...cart, product])
    }
    return (
        <div className="products-container">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.img} alt="img-product-card" />
                    <h3>{product.nombre}</h3>
                    <h4>${product.precio}</h4>
                    <button onClick={()=> buyProducts(product)}>ADD TO BAG</button>
                </div>
            ))}
        </div>
    );
};

export default Products;
