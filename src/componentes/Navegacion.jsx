import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navegacion.css';

function Navegacion(props) {
  return (
    <div className='contNavegacion'>
      <NavLink className={({ isActive }) => (isActive ? 'contNavegacion__navActive' : 'contNavegacion__nav')}
        to="/">Inicio</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'contNavegacion__navActive' : 'contNavegacion__nav')}
        to="proyectos">Proyectos</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'contNavegacion__navActive' : 'contNavegacion__nav')}
        to="me">Sobre mi</NavLink>
    </div>
  );

}

export default Navegacion;