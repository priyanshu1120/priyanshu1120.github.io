import "./Heroimg.css"

import React from 'react'
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="heroimg">
        <div className="mask">
          <img className="base-img" 
          src="base.jpg" alt="base img"
          /> 
        </div>
        <div className="content">
            <img src="profile.jpg" alt="profile" className="profileimg" />
            <p style={{ marginBottom:"40px"}}>Hi I'M A FULL STACK DEVELOPER</p>
            <div>
               <Link to="/project" className="Btn">PROJECTS</Link>  
               <Link to="/contect" className="Btn Btn-light">Contact</Link>   
            </div>
        </div>
        
        
    </div>
  )
}

export default Heroimg