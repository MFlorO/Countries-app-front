import React from "react";
import CountriesCard from "../CountriesCard/CountriesCard.jsx";
import "./countries.css"



export default function Countries({countries, pagina, porpagina}) {

  

   function filterCountriesPagina() {
  
     return countries.slice( ((pagina - 1 )* porpagina )  , (((pagina - 1 )* porpagina)+ porpagina)) 
    
 } 
                              
 //[0,8]
 //[9,18]
 //[19,28]
 //[29,38]


  console.log("pagina",pagina)

  console.log("cantidad de pasies por pagina",filterCountriesPagina())
  







  return (
    
    <div className="home-countries" >
    
        {filterCountriesPagina().map((country) => (
          <div  key={country.id}>
            <CountriesCard
              id={country.id}
              name={country.name}
              image={country.imageFlag[0]}
              continent={country.continent}
              population={country.population}
            />
          </div>
        ))}
      
    </div>
  );
}
