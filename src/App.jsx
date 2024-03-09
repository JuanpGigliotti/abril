import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tinto from './components/Products/Categorias/Tinto';
import Rosado from './components/Products/Categorias/Rosado';
import Blanco from './components/Products/Categorias/Blanco';
import Espumosos from './components/Products/Categorias/Espumosos'
import Checkout from "./components/Checkout/Checkout";

function App() {
  
  return (
    <>
    <DataProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/blanco" element={<Blanco/>}></Route>
        <Route path="/rosado" element={<Rosado/>}></Route>
        <Route path="/espumosos" element={<Espumosos/>}></Route>
        <Route path="/tinto" element={<Tinto/>}></Route>
        <Route path='/' element= {<Home/>} /> 
        <Route path="/cart" element={<CartContent/>} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
