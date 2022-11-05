import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Personaje from "./Personaje";
const Mostrar = ({nombrePersonaje}) => {

    useEffect(()=>{

        consumirApi(nombrePersonaje);
    },[nombrePersonaje]);

    const [personajes, setPersonajes]=useState([]);


    const consumirApi = async (nombre)=>{
      try {
        const res= await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`);
        
        if (!res.ok) {
          return Swal.fire({
            title:"error",
            text:"Persona no encontrado",
            icon:"error",
          });          
        }

        const datos = await res.json();
        setPersonajes(datos.results);

      } catch (error) {
        console.log(error);
      }finally{

      }
    }

  return (
    <>
    <div className="row mt-2">
      {personajes.map((item)=>(
        <Personaje key={item.id}  character={item}/>
      ))}
    </div>

    </>
  )
}

export default Mostrar