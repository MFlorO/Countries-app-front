import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCountriesFavrites } from "../../redux/actions/index.js";
import { Link } from 'react-router-dom';
import "./myList.css"

import {ImCross} from "react-icons/im"
import NavBar from "../NavBar/NavBar.jsx";


export default function MyList(){

     
    const dispatch = useDispatch();

    const countriesFavourites = useSelector(state=>state.countriesFavourites);


    console.log("countriesFavourites",countriesFavourites)


    return (
       <>

       <NavBar />
       
        <div className="mylist-cointeiner">
          <h2 className="titulo-mylist">COUNTRY LIST</h2>

          {countriesFavourites.length > 0 ? 
          
            countriesFavourites.map(countries =>  
             
            <div className="fav-container" key={countries.id}>
               <div className="fav-items">
               <div className="name-fav">{countries.name}</div>
               <Link to={`/detail/${countries.id}`}>
               <img className="imagen" src={countries.image} alt="" />
               </Link>
               <button title="Delete" className="boton-cruz" onClick={() => dispatch(removeCountriesFavrites(countries.id))}><ImCross size="1rem"/></button>
               </div>
            </div>  
            )  
            
            : <div className="vacio-div-mylist"><p className="vacio-mylist">They have nothing on your list. Add !</p></div> }
        
        </div>

       </>
      );
}



