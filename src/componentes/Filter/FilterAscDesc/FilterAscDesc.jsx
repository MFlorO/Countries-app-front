import React from "react";
import { useDispatch } from "react-redux";
import { ASCENDENTE,DESCENDENTE } from "../constantes.js";
import { AscDes } from "../../../redux/actions/index.js";
import "./filterAscDesc.css"




export default function FilterAscDesc() {
    const dispatch = useDispatch()



    function onSelectionchange(event){
        event.preventDefault()
        dispatch(AscDes(event.target.value))
       }


    return (
        <div className="filter-asc">
            <p className="filter-p" htmlFor="select">ASCE/DES</p>
            <select className="filter-select" name="select" defaultValue={"Default"} onChange={onSelectionchange}>
                <option value="Default">-</option>
                <option value={ASCENDENTE}>A-Z</option>
                <option value={DESCENDENTE}>Z-A</option>
            </select>
        </div>
    );
}


