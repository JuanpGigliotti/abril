import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1);


    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
    <>
    <div className="counter-container">
        <button onClick={decrementar}> - </button>
        <p className="contador"> {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
      <button  className="agregar" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount