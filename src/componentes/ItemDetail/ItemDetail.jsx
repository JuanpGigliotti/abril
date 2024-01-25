import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, stock, precio, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }

  return (
    <div className='contenedorItem'>
      <img src={img} alt={nombre} />
      <h2 className='nombre'> {nombre} </h2>
      <h3>${precio} </h3>



      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount incial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
      }


    </div>
  )
}

export default ItemDetail