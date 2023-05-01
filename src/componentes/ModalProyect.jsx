import React, { useRef, useState } from 'react';
import '../css/modalProyect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Tabla from './Tabla.jsx';
import MostrarImg from './MostrarImg';

function ModalProyect(props) {
  const miRef = useRef();
  const [activarMostrarImg, setActivarMostrarImg] = useState(false);
  const changeImg = (e) => {
    miRef.current.src = e.target.src;
  }
  window.addEventListener('click', e => {
    if (e.target.className == 'contProyectos__proy__contModalProyect__active') {
      props.Close();
    }
  })
  window.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
      props.Close();
    }
  })
  return (
    <div className={props.activeModal ? 'contProyectos__proy__contModalProyect__active' : 'contProyectos__proy__contModalProyect'}>
      <div className='contProyectos__proy__contModalProyect__active__info'>
        <div className='contProyectos__proy__contModalProyect__active__info__contImg'>
          <img ref={miRef} src={props.datos.img[0]} onClick={() => setActivarMostrarImg(true)} />
          <div className='contProyectos__proy__contModalProyect__active__info__contImg__subImgs'>
            {
              props.datos.img.map((m, i) => {
                return <img key={i} onClick={(e) => changeImg(e)} className='contProyectos__proy__contModalProyect__active__info__contImg__subImgs__item'
                  src={props.datos.img[i]}
                />
              })
            }
          </div>
        </div>
        <div className='contProyectos__proy__contModalProyect__active__info__info'>
          <h2 className='contProyectos__proy__contModalProyect__active__info__info__name'>
            {props.name}
          </h2>
          <div className='contProyectos__proy__contModalProyect__active__info__info__contDatos'>
            <Tabla
              tecnologias={props.tec}
              tipoApp={props.tipeApp}
              render={props.ren}
              comentario={props.comen}
              codigo={props.cod}
            />
          </div>
        </div>
      </div>
      <div className='contProyectos__proy__contModalProyect__active__contBtnXmark' onClick={() => {
        if(activarMostrarImg == false){
          props.Close();
        }else setActivarMostrarImg(false);
        
      }
      }>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <MostrarImg activarModalImg={activarMostrarImg} img={props.datos.img} />
    </div>
  );
}

export default ModalProyect;