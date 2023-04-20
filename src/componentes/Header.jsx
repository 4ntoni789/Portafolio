import React, { useState } from 'react';
import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Navegacion from './Navegacion';

function Header(props) {
  const [activeHeader, setActiveHeader] = useState(false);
  return (
    <div className='contHeader' onMouseOver={() => setActiveHeader(true)} onMouseOut={() => setActiveHeader(false)}>
      <Navegacion />
      <FontAwesomeIcon className='contHeader__bntShow' icon={activeHeader ? faArrowLeft : faArrowRight} />
      <a className='contHeader__cod' href="https://github.com/4ntoni789/Portafolio.git">Revisar esté mismo codigo</a>
      <p className='contHeader__spam'>Diseñado y desarrollador por Antoni parra</p>
    </div>
  );
}

export default Header;