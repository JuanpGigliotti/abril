import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='Producto'>
        <img src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p>${precio} </p>
        <Link to={`/item/${id}`}> Comprar </Link>
    </div>
  )
}

export default Item