import React from 'react';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Catalogo from './componentes/NavDesktop/Catalogo/Catalogo';  
import Nosotros from './componentes/NavDesktop/SobreNosotros/SobreNosotros'; 
import Contacto from './componentes/NavDesktop/Contacto/Contacto';
import Buscador from './componentes/NavDesktop/Buscador/Buscador';
import Usuario from './componentes/NavDesktop/Usuario/Usuario';
import Tinto from './componentes/Main/Categorias/Tinto/Tinto';
import Blanco from './componentes/Main/Categorias/Blanco/Blanco';
import Rosado from './componentes/Main/Categorias/Rosado/Rosado';
import Espumoso from './componentes/Main/Categorias/Espumoso/Espumoso';
import Fortificado from './componentes/Main/Categorias/Fortificado/Fortificado';
import NavDesktop from './componentes/NavDesktop/NavDesktop';
import Main from './componentes/Main/Main';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavDesktop />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobrenosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/tinto" element={<Tinto />}/>
          <Route path="/blanco" element={<Blanco />}/>
          <Route path="/rosado" element={<Rosado />}/>
          <Route path="/espumoso" element={<Espumoso />}/>
          <Route path="/fortificado" element={<Fortificado />}/>
        </Routes>
      </BrowserRouter>
      <Main/>
    </>
  );
};

export default App;