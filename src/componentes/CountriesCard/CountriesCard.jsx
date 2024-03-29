import React from "react";
import {useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {addCountriesFavorites}from "../../redux/actions/index.js"
import "./countriesCard.css"
import { RiHeartAddFill } from "react-icons/ri"
import Swal from "sweetalert2";







export default function CountriesCard({ id, name, image, continent, population}) {

  const dispatch = useDispatch();

  function onChangeClick(){
    dispatch(addCountriesFavorites({name: name, id: id, image:image}))
    Swal.fire({
      icon: "success",
      title: `ADDED "${name.toUpperCase()}" A MY LIST`,
      showConfirmButton: true,
      color: "black",
      confirmButtonColor: "#5aa5a5ed",
  });
  }

  return (
    
    <div className="countries-card-container">
      
      <h3 className="countries-card-h3">{name}</h3>
      <Link to={`/detail/${id}`}><img className="bandera"src={image} alt="" /></Link>
      <h4 className="countries-card-h4">continent:</h4>
      <h3 className="countries-card-1">{continent}</h3>
      <h4 className="countries-card-h4">population:</h4>
      <p className="countries-card-1"> {new Intl.NumberFormat().format(population)}</p> 
      <div title="AddFav" className="favb"><button className="boton-fav" onClick={() => onChangeClick()  }><RiHeartAddFill size="1.5rem" /></button></div>

    </div>
  );
}
