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
            <h2 style={{ marginBottom:"40px"}}>Hi I'M PRIYANSHU KAUSHIK</h2>
            <h4 style={{ marginTop:"-60px"}}>FRONT END DEVELOPER</h4>
            <div className="btn-box">
               <Link to="/project" className="Btn">PROJECTS</Link>  
               <Link to="/contect" className="Btn Btn-light">Contact</Link>   
            </div>
        </div>
        
        
    </div>
  )
}

export default Heroimg