
import { useState, useEffect } from "react";
import { getUnicoProducto } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect( () => {
        getUnicoProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem])

  return (
    <div>
        <ItemDetail  {...producto} />
    </div>
  )
}

export default ItemDetailContainer