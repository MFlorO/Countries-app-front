import React from 'react'
import NavBar from '../componentes/NavBar/NavBar'
import error from "./404_2.jpg"

import "./Error.css"

function Error() {
  return (
    <div className='error'>
        <NavBar />
        <div className='error-img'>
          <img src={error} alt="Not Exist the page" />
        </div>
    </div>
  )
}

export default Error