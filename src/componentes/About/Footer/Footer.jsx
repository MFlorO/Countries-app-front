import React from "react";

import {SiGmail, SiGithub } from "react-icons/si"
import "./footer.css"


export default function Footer() {
    return (

    <footer className="footer">
        <div className="name">
            <h3>© Developed, Maria Florencia Oldani</h3>
        </div>

          <div className="wrapper">
          <div className="icon">
             <div className="tooltip">floroldani@hotmail.com</div>
             <span className="span"><SiGmail className="gmail" size="2rem"/></span>
          </div>

          <div className="icon">
             <div className="tooltip">/MFlorO</div>
             <span className="span"><SiGithub className="github" size="2rem"/></span>
          </div>
        </div>

    </footer>
 
  );
}