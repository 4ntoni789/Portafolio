import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/inicio.css';
import MaquinaEscribirEfect from '../componentes/MaquinaEscribirEfect';

function Inicio(props) {
  return (
    <div className='contIni'>
      <MaquinaEscribirEfect/>
      <h1 className='contIni__name'>Antoni parra</h1>
      <h2 className='contIni__dev'>Desarrollador Web FronEnd</h2>
      <div className='contIni__btnMe'>
        <NavLink className='contIni__btnMe__btn1' to='/me'>Sobre mí</NavLink>
        <NavLink className='contIni__btnMe__btn' to='/proyectos' >Ver Proyectos</NavLink>
      </div>
    </div>
  );
}

export default Inicio;