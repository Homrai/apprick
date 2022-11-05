import React from 'react'
import { useFormulario } from "../Hooks/useFormulario";
const Formulario = ({setNombrePersonaje}) => {
    const [inputs, handleChange, reset] = useFormulario({
        nombre:"",
    });
    const {nombre} =inputs;

    const handleSubmit = e=>{
        e.preventDefault();
        setNombrePersonaje(nombre);
        reset();
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input 
            className='form-control mb-1'
            type="text" 
            name='nombre'
            value={nombre}
            placeholder="Ingrese el nombre del personaje"  
            onChange={handleChange}          
            />
            <button  
            type='submit'
            className='btn btn-dark'>Buscar</button>
    </form>
  )
}

export default Formulario