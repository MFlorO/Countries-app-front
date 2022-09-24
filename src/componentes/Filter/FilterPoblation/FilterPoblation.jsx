import React from "react";
import { useDispatch } from "react-redux";
import { ASCENDENTE,DESCENDENTE } from "../constantes.js";
import { orderPoblation } from "../../../redux/actions/index.js";
import "./filterPoblation.css"



export default function FilterPoblation() {
    const dispatch = useDispatch()



    function onSelectionchange(event){
        dispatch(orderPoblation(event.target.value))
       }


    return (
        <div className="filter-poblation">
            <p className="filter-p" htmlFor="select">SEARCH BY POPULATION</p>
            <select className="filter-select"  name="select" defaultValue={"Default"} onChange={onSelectionchange}>
                <option value="Default">-</option>
                <option value={ASCENDENTE}>Most</option>
                <option value={DESCENDENTE}>Less</option>
            </select>
        </div>
    );
}

