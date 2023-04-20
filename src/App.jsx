import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './componentes/Header'
import Inicio from './paginas/Inicio'
import Enrutador from './componentes/Enrutador'

function App() {

  return (
    <div className="App">
      <Header/>
      <Enrutador/>
    </div>
  )
}

export default App
