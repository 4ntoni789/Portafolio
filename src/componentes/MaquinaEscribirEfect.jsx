import React, { useEffect, useState } from 'react';
import '../css/maquinaEscribirEfect.css';
function MaquinaEscribirEfect(props) {
  const [activeMaquina, setActiveMaquina] = useState(false);
  const [count,setCount] = useState(0);

  const namesMaquina = [
    '!Hola mundo¡',
    'console.log()',
    'const name = ',
    'npm create vi',
    'React/Vite',
    'Sass',
    'JavaScript',
    'useReducer',
    'contrátenme',
    'npm run'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMaquina(!activeMaquina);
      if(activeMaquina){
        setCount(count+1);
        if(count == namesMaquina.length)setCount(0);
      }
    }, 3500);
    return () => clearInterval(interval)
  }, [activeMaquina])

  return (
    <div className='contMaquina'>
      <span className={activeMaquina ? 'contMaquina__span' : 'contMaquina__null'}>
        {namesMaquina[count]}
      </span>
    </div>
  );
}

export default MaquinaEscribirEfect;