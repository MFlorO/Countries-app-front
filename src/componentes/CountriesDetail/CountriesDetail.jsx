import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetail, deleteCountriesDetail } from "../../redux/actions/index.js";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../../Loading/Loading.jsx";
import ActivityCard from "../ActivityCard/ActivityCard.jsx";

import {AiFillCaretLeft} from "react-icons/ai"

import "./countriesDetail.css"
import NavBar from "../NavBar/NavBar.jsx";




export default function CountriesDetail() {
  const { id } = useParams();  // const iD = props.match.params.id;   --> IDEM a useParams

  const dispatch = useDispatch();
  const history = useHistory();


  const countriesDetail = useSelector((state) => state.countriesDetail);

 



  useEffect(() => {
    dispatch(getCountriesDetail(id));
    console.log("el componente se monto");

    return () => {
      dispatch(deleteCountriesDetail(id));
      console.log("el componente se desmonto");
      //TENGO QUE DESMONTAR EL COMPONENTE SINO ME QUEDA AHI COLGADO
    };
  }, [dispatch,id]);

  

  
    function volverAtras(){ //boton volver atras
       history.goBack()
    }




  return (
    <div className="countries-details">

      <NavBar />
      
      {countriesDetail.imageFlag ? (

      <div className="countriesdetail-container">

        

        <div className="cd-items"> 
          <img className="cd-image" src={countriesDetail.imageFlag[1]} alt="Imagen del videojuego" />
        </div>

        <div className="cd-container">

          <div className="cd-items-2">
          <h1 className="cd-h1">{countriesDetail.name}</h1>
          <p className="cd-2">Code: {countriesDetail.id}</p>
          <p className="cd-2">Continent: {countriesDetail.continent}</p>
          <p className="cd-2">Capital: {countriesDetail.capital}</p>
          <p className="cd-2">Subregion: {countriesDetail.subregion.length > 0 ? countriesDetail.subregion : "Not have" }</p>
          <p className="cd-2">Area: {countriesDetail.area} Km2</p>
          <p className="cd-3">Population: {new Intl.NumberFormat().format(countriesDetail.population)}</p>
          </div>

        


        <div className="cd-items-3">  

                {countriesDetail.activities.length > 0 ?
             <>
                   <h3 className="activity-h3">ACTIVITIES:</h3>

                   <div className="activity-container">
                    {countriesDetail.activities.map((a) => (
                       <div  key={a.id}>
                       <ActivityCard 
                       id={a.id}
                       name={a.name}
                       difficulty={a.difficulty}
                       seassion={a.seassion}
                       duration={a.duration}  />
                       </div>
                   ))}
                   </div>
             </> 
          
                : <div className="vacio-div-cdetail">The Country not have any activities</div>}
        </div>
        </div>


        <button className="botton-volver-atras" onClick={volverAtras}> <AiFillCaretLeft size="2rem" /></button>
        
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
