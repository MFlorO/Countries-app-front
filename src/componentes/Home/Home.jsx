import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Countries from "../Countries/Countries.jsx";
import Paginas from "../Paginas/Paginas.jsx";
import Filter from "../Filter/Filter.jsx";
import "./home.css";

import { getAllCountries} from "../../redux/actions/index.js";
import Loading from "../../Loading/Loading.jsx";

import background from "./video2.mp4"
import NavBar from "../NavBar/NavBar.jsx";





export default function Home() {

  
  const dispatch = useDispatch();

  const [pagina, setPagina] = useState(1);
  
  const porpagina = pagina === 1 ? 9 : 10


  const countries = useSelector((state) => state.filterCountries);


  console.log(" Home ", countries)



  const maximo = countries.length / 10



  

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);





  return (


    <div className="home-cointeiner">

      <NavBar />

      <video className="video-home" autoPlay loop muted>
        <source src={background} type="video/mp4"/>
      </video>
      
      {countries.length > 0 ? (

        <div className="home-items">

        <div className="filter"><Filter /></div>
        <div className="pagina"><Paginas pagina={pagina} setPagina={setPagina} maximo={maximo} /></div>
        <div className="countries-container"><Countries pagina={pagina} porpagina={porpagina} countries={countries}/></div>

        </div>

      ) : ( countries.msg ?  <div className="error-search-home"><h3 className="errores-name-home">{countries.msg}</h3></div> : <Loading />
            //Si hay un error en la busqueda de nombres mostralo sino que aparezca loading
      )}
    
   </div>
  );
}
