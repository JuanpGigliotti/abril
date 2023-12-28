import React from 'react'
import ProductoImagen from '../ProductoImagen/ProductoImagen'
import ProductoInfo from '../ProductoInfo/ProductoInfo'
import ProductoBoton from '../Producto boton/ProductoBoton'
import './ProductoCard.css'
const ProductoCard = () => {
  return (
    <div className='ProductoCard'>
        <ProductoImagen/>
        <ProductoInfo/>
        <ProductoBoton/>
    </div>
  )
}

export default ProductoCard