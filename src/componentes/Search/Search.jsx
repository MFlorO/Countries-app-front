import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName, getAllCountries} from "../../redux/actions/index.js";
import "./search.css"

import {RiSearch2Line} from "react-icons/ri"
import {GrPowerReset} from "react-icons/gr"






export default function Search() {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  

  

  function onSearchChange(event) {
    setSearch(event.target.value.trim()); //Para evitar "    arg" y que me saque los espacios
  }

  function handleSubmit(event){
    event.preventDefault();
    dispatch(getCountriesName(search))
    setSearch("")
  }

  function onClickReset(){
    dispatch(getAllCountries())
  }





  return (
    <div className="search">
     
      <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="input" 
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={onSearchChange}
      />
      <button title="Search" className="boton-search1" type="submit"><RiSearch2Line size="1.5rem" /></button>
      <button className="boton-search2" onClick={onClickReset}><GrPowerReset  /></button>
      </form>

    </div>

  );
}

