import React, { useEffect, useRef, useState } from 'react';
import '../css/proyecto.css';
import '../css/modalProyect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ModalProyect from './ModalProyect'


function Proyecto(props) {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div className='contProyectos__proy'>
      <img className='contProyectos__proy__img'
        src={props.src}
        onClick={() => setActiveModal(true)}
      ></img>
      <h1 className='contProyectos__proy__h1' onClick={() => setActiveModal(true)}>{props.name}</h1>
      <ModalProyect activeModal={activeModal}
        name={props.name}
        Close={() => setActiveModal(null)}
        datos={props.dato}
        tec={props.tec}
        tipeApp={props.tipeApp}
        ren={props.ren}
        comen={props.comen}
        cod={props.cod}
        
      />
    </div>
  );
}

export default Proyecto;