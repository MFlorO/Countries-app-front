import React from "react";
import { useDispatch} from "react-redux";
import { orderContinent } from "../../../redux/actions/index.js";

import "./filterContinent.css"

export default function FilterContinent() {

  const dispatch = useDispatch();




  function onContinentChange(event) {
    event.preventDefault()
    dispatch(orderContinent(event.target.value));
  }

  



  return (
    <div className="filter-continent">
      
      <p className="filter-p" htmlFor="select">SEARCH BY CONTINENT</p>
      <select className="filter-select"  name="select" defaultValue={"Default"} onChange={onContinentChange}>
        <option value="Default">-</option>
        <option value="Asia">ASIA</option>
        <option value="North America">NORTH AMERICA</option>
        <option value="South America">SOUTH AMERICA</option>
        <option value="Africa">AFRICA</option>
        <option value="Antarctica">ANTARTIDA</option>
        <option value="Oceania">OCEANIA</option>
        <option value="Europe">EUROPE</option>
      </select> 



    </div>
  );
}
