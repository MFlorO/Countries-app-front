import React from "react";
import { useDispatch } from "react-redux";
import FilterAscDesc from "./FilterAscDesc/FilterAscDesc";
import FilterContinent from "./FilterContinent/FilterContinent.jsx";
import FilterPoblation from "./FilterPoblation/FilterPoblation.jsx";
import FilterActivity from "./FilterActivity/FilterActivity.jsx";
import { getAllCountries} from "../../redux/actions/index.js";

import "./filter.css"




export default function Filter() {

    const dispatch = useDispatch();


    function onClickReset(){
        dispatch(getAllCountries())
        window.location.reload() //refresca la pagina despues de borrar
      }

     

    return (
        <div className="filter">
            <div className="filter-conteiner">
            <FilterContinent />
            <FilterPoblation />
            <FilterAscDesc />
            <FilterActivity />
            <button className="boton-reset-filter" onClick={onClickReset}>REFRESH</button>
            </div>
        </div>
    );
}


