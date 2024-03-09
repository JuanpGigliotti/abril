import React from "react";
import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tinto from './components/Products/Categorias/Tinto';
import Blanco from './components/Products/Categorias/Blanco';
import Rosado from './components/Products/Categorias/Rosado';
import Espumosos from './components/Products/Categorias/Espumosos';
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/categoria/1" element={<Tinto />} />
          <Route path="/categoria/2" element={<Blanco />} />
          <Route path="/categoria/3" element={<Rosado />} />
          <Route path="/categoria/4" element={<Espumosos />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
