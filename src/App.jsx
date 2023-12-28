import React from 'react'
import NavBar from './componentes/NavBar/NavBar';
import './App.css'
import ProductoCard from './componentes/ProductoCard/ProductoCard';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


const App = () =>  {
  let profesor = "samuel";
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hola!"}/>
      <ProductoCard/>

    </>
  )
}

export default App