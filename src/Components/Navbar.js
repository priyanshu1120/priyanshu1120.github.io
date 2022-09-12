import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

    const [visible,setVisible] = useState(false)
    const [navColor,setNavColor] = useState(false);
    const handleClick = ()=>{
        setVisible(!visible)
    }
  
    const changeColor = ()=>{
        if(window.scrollY >=1){
            setNavColor(true)

        }
        else{
            setNavColor(false)
        }
    }
 window.addEventListener("scroll",changeColor)

  return (
    <div className={navColor ? "Header Header-bg" : "Header"}>
        <Link to="/"><h1>Portfolio</h1></Link>
        <ul className={visible ? "navbar-menu active" : "navbar-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            {/* <li>
                <Link to="/skills">Skills</Link>
            </li> */}
            <li>
                <Link to="/contect">Contect</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>

        <div className="toggle" onClick={handleClick}>
            {
                visible ? ( <FaTimes size={20} style={{color:"#fff"}} />):
                ( <FaBars size={20} style={{color:"#fff"}} />)
            }
          
          

        </div>

    </div>
  )
}

export default Navbar