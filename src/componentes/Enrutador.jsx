import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../paginas/Inicio';
import Proyectos from '../paginas/Proyectos';
import SobreMi from '../paginas/SobreMi';

function Enrutador(props) {
  return (
    <div>
      <Routes>
        <Route index path='index.html' element={<Inicio />} />
        <Route path='/proyectos' element={<Proyectos/>} />
        <Route path='/me' element={<SobreMi/>} />
      </Routes>
    </div>
  );
}

export default Enrutador;