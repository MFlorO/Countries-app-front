import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCountries } from "../../redux/actions/index.js";
import Form from "./Form/Form.jsx"
import Loading from "../../Loading/Loading.jsx"

import "./create.css"
import NavBar from "../NavBar/NavBar.jsx";






export default function Create() {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countriesAll);


    useEffect(() => {
    dispatch(getAllCountries());
    }, [dispatch]);



    return (
      <div className="create">
        <NavBar />
        
        {countries.length > 0 ? <Form countries={countries} /> : <Loading />}
      </div>
    );
    

  
  
  }
  