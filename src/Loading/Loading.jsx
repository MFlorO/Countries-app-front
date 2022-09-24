import React from "react";

import "./loading.css";



const srcGif= "https://acegif.com/wp-content/gifs/globe-24.gif"



export default function Loading() {


  return (
    <div className="loading">
      <img src={srcGif} alt="Link caido" />
    </div>
  );
}


