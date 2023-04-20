import React, { useState } from 'react';
import Proyecto from '../componentes/Proyecto';
import '../css/proyectos.css';
import { Datos } from '../Scripts/PruebaBaseDatosProyectos';

function Proyectos(props) {
  return (
    <div className='contProyectos'>
      {
        Datos.map((d, i) => {
          return <Proyecto
            key={i}
            name={d.datos.name}
            src={d.img[0]}
            dato={d}
            tec={d.datos.tecnologias}
            tipeApp={d.datos.tipoApp}
            ren={d.datos.render}
            comen={d.datos.comentario}
            cod={d.datos.codigo}
          />
        })
      }
    </div>
  );
}

export default Proyectos;