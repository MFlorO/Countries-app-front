import React,{useState} from 'react';
import "./paginas.css"

import {GrPrevious, GrNext} from "react-icons/gr"







export default function Paginas({pagina, setPagina, maximo}){

  const [input, setInput] = useState(1);

    function siguiente(){
        setInput(parseInt(input) + 1) //Al parseInt lo agrego porque cuando escribo la pagina a la que quiero ir en el input y le doy siguiente, me agrega string porque no lo toma como numero
        setPagina(parseInt(pagina) + 1)  
     }
    
    function anterior(){
        setPagina(parseInt(pagina) - 1)
        setInput(parseInt(input) - 1)
    }

    const maximoRedondeo = Math.ceil(maximo) 
    

    function onKeyDown (event){
      if(event.keyCode === 13){ //La tecla 13 es el enter

      setPagina(parseInt(event.target.value))
        if(parseInt(event.target.value) < 1  //si ponemos algo menor a 1
        || parseInt(event.target.value) > maximoRedondeo  //Si ponemos algo mayor al maximo
        || isNaN(parseInt(event.target.value))){ //Si ponemos algo que no es un numero 

            setPagina(1)
            setInput(1)
             }else {
            setPagina(parseInt(event.target.value))
            }
        }
      }



      function onInputChange(event) {
        setInput(event.target.value)
      }
    
     

      

    return(
        <div className='paginas'>

            <div>
              <button className="boton-anterior" onClick={anterior} disabled={pagina === 1 || pagina < 1} >
                <GrPrevious className="icono-anterior" size="1.5rem"/>
              </button>
            </div>

            <div><input className="input-paginas" onKeyDown={onKeyDown} name="page" autoComplete='off' value={input} onChange={onInputChange}/></div>
            <p className='maximo'> de {maximoRedondeo}</p>
            <div>
              <button className="boton-siguiente" onClick={siguiente} disabled={pagina === maximoRedondeo || pagina > maximoRedondeo}>
                <GrNext size="1.5rem"/>
              </button>
            </div>
        </div>
    )
}