import React from 'react';
import '../css/mostrarImg.css';
import Slider from './Slider';
function MostrarImg(props) {

  return (
    <>
      {props.activarModalImg ?
        <div className='contMostrarImg'>
          <Slider img={props.img}/>
        </div>
        :
        null
      }
    </>
  );
}

export default MostrarImg;