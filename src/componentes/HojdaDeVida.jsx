import React, { useEffect, useRef, useState } from 'react';
import '../css/hojaDeVida.css';

function HojdaDeVida(props) {
	const myRef = useRef();
	const [activarImg, setActivarImg] = useState(true);

	useEffect(() => {
		if (activarImg) {
			setTimeout(() => {
				myRef.current.src = 'https://lh3.googleusercontent.com/a/AEdFTp4da1xN14hR4QrYruB19Nv5dKjZSZ9CGrNeGRbbb8M=s288-p-rw-no';
				setActivarImg(false);
			}, 40000);
		} else {
			setTimeout(() => {
				myRef.current.src = 'https://ii.ct-stc.com/1/logos/candidates/2022/11/29/11f04e8164f64c13885c092841thumbnail.jpeg';
				setActivarImg(true)
			},4000)
		}
	}, [activarImg])

	return (
		<div className="app">
			<div className="encabezado">
				<h3>HOJA DE VIDA</h3>
				<div className="contImg">
					<img ref={myRef} src="https://ii.ct-stc.com/1/logos/candidates/2022/11/29/11f04e8164f64c13885c092841thumbnail.jpeg" alt="Antoni de jesus parra" />
				</div>
			</div>
			<h4>DATOS PERSONALES</h4>
			<div className="datosPersonales">
				<b><label>NOMBRE:</label></b>
				<p className="n1">Antoni De Jesus Parra Barrios</p>
				<b><label>IDENTIFICACIÓN:</label></b>
				<p className="n2">CC:1043435661</p>
				<b><label>FECHA DE NACIMIENTO:</label></b>
				<p className="n3">02/04/2002</p>
				<b><label>ESTADO CIVIL:</label></b>
				<p className="n4">Soltero</p>
				<b><label>DOMICILIO:</label></b>
				<p className="n5">Carrera 50 No 43 - 24 Barrios Abajo</p>
				<b><label>TELEFONO:</label></b>
				<p className="n6">3044927450</p>
			</div>
			<h4>ESTUDIOS</h4>
			<div className="contEstudios">
				<label>SECUENDARIA:</label>
				<p>Colegio Nuestra Señora Del Rosario</p>
			</div>
			<h4>ESTUDIOS COMPLEMENTARIOS</h4>
			<div className="contEstudios2">
				<p><b>Tecnico en sistemas.</b> 3 semestre, Institucion inca</p>
			</div>
			<h3>Referencias personales</h3>
			<div className='constPersonal'>
				<ul>
					<li>
						<p>Soy una persona atenta</p>
					</li>
					<li>
						<p>Soy muy correcto y responsable con todos mis proyectos</p>
					</li>
					<li>
						<p>Soy bastante sociable y servicial</p>
					</li>
					<li>
						<p>Me gusta estudiar mucho para tener siempre respuestas ala mano</p>
					</li>
					<li>
						<p>Me gusta mucho la tecnologia y siempre estoy metido en este mundo</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default HojdaDeVida;