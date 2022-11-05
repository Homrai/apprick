import React, { useState } from 'react'
import { useEffect } from 'react';
import Formulario from './components/Formulario'
import Mostrar from "./components/Mostrar";

const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState(()=>JSON.parse(localStorage.getItem("nombreApi"))||"");
  
  useEffect(()=>{
    localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje))  
  },[nombrePersonaje]);

  return (
    <div className='container'>
      App
      <Formulario setNombrePersonaje={setNombrePersonaje}/>
      <Mostrar nombrePersonaje={nombrePersonaje}/>
    </div>
  )
}

export default App