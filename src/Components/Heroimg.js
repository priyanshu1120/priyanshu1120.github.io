import "./Heroimg.css"

import React, { useState } from 'react'
import { Link } from "react-scroll"

const Heroimg = () => {
  const [click,setClick] = useState(false)
  const closeMenu = ()=>{
    setClick(false)
  }
  return (
    <div className="heroimg">
        <div className="mask">
          <img className="base-img" 
          src="base.jpg" alt="base img"
          /> 
        </div>
        <div className="content">
            <img src="profile.jpg" alt="profile" className="profileimg" />
            <h2 style={{ marginBottom:"40px"}}>Hi I'M <span style={{color:"yellow" ,fontSize:"1.8rem"}}>PRIYANSHU KAUSHIK</span></h2>
            <h4 style={{ marginTop:"-60px"}}>ASPIRING FULL-STACK-DEVELOPER</h4>
            <div className="btn-box">
               <a href="./priyanshu_kaushik_resume.pdf" download className="Btn">RESUME</a>  
               <Link to="contect" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="Btn Btn-light">Contact</Link>   
            </div>
        </div>
        
        
    </div>
  )
}

export default Heroimg