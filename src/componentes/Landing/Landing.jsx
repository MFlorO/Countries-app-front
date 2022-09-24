import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import imagen1 from "./imagenes/1.jpg"
import imagen2 from "./imagenes/2.jpg"
import imagen3 from "./imagenes/3.jpg"
import imagen4 from "./imagenes/7.jpg"






export default function Landing() {
  return (
    <>

    <div className="slider">
      <ul className="ul">
        <li className="li">
          <img src={imagen1} alt="" />
        </li>
        <li className="li">
          <img src={imagen2} alt="" />
        </li>
        <li className="li">
          <img src={imagen3} alt="" />
        </li>
        <li className="li">
          <img src={imagen4} alt="" />
        </li>
      </ul>
    </div>

        <h1 className="title-landing">Welcome to Countries</h1>

        <Link to="/home">
          <button className="boton-landing">GET IN</button>
        </Link> 

    

    </>
  );
}
