import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getCategoria } from "../AsyncMock";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
    
  )
}

export default ItemListContainer