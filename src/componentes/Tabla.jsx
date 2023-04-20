import React from 'react';
import '../css/tabla.css'

function Tabla(props) {
  return (
    <div className='contTable'>
      <h3>Datos tecnicos</h3>
      <table>
        <tbody>
          <tr>
            <td><b>Tenologias</b></td>
          </tr>
          <tr>
            <td>{props.tecnologias}</td>
          </tr>
          <tr>
            <td><b>Tipo de web</b></td>
          </tr>
          <tr>
            <td>{props.tipoApp}</td>
          </tr>
          <tr>
            <td><b>Renderización</b></td>
          </tr>
          <tr>
            <td>{props.render}</td>
          </tr>
          <tr>
            <td><b>Comentario</b></td>
          </tr>
          <tr>
            <td>{props.comentario}</td>
          </tr>
          <tr>
            <td><b>Codigo en GitHub</b></td>
          </tr>
          <tr>
            <td><a href={props.codigo}>{props.codigo}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;