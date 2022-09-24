import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search.jsx"
import "./NavBar.css"


import {VscHome} from "react-icons/vsc"




export default function NavBar() {


  return (
    <nav className="navBar">
      
      <div className="search"><Search /></div>

      <div className="flexboxitems">
      <div title="Home" className="flexboxitems1"><NavLink to="/"><VscHome size="2.5rem" color="white"/></NavLink></div>
      <div className="flexboxitems2"><NavLink to="/home"><h3 className="nav-h3">HOME</h3></NavLink></div>
      <div className="flexboxitems3"><NavLink to="/create"><h3 className="nav-h3">CREATE YOUR ACTIVITY</h3></NavLink></div>
      <div className="flexboxitems3"><NavLink to="/activities"><h3 className="nav-h3">ACTIVITIES</h3></NavLink></div>
      <div className="myList4"><NavLink to="/myList"><h3 className="nav-h3">MY LIST</h3></NavLink></div>
      <div className="flexboxitems5"><NavLink to="/about"><h3 className="nav-h3">ABOUT</h3></NavLink></div>
      </div>
        
    </nav>
  );
}
