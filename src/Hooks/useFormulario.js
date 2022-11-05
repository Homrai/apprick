import { useState } from 'react'

export const useFormulario = (initialState ={}) => {

    const [inputs, setInputs]= useState(initialState);

    const handleChange = (e)=>{
        const {name, value, checked, type} = e.target; //propiedades dinamicas

        setInputs((old)=>({ //se trae el todo () retorna un objeto
            ...old, // se copia lo que venga del todo
            [name]: type ==="checkbox" ? checked : value // [] llama la propiedad dinamica, y se verifica para dar una respuesta dependiendo de la propiedad type
        }));
    };
    const reset = ()=>{
        setInputs(initialState);
    };
  return [inputs, handleChange, reset]
}
