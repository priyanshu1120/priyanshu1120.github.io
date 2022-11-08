import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import React from 'react'
// import { Link } from "react-router-dom"
import { useState } from "react"
import {Link} from "react-scroll"
import {IoLogoPinterest} from "react-icons/io"

const Navbar = () => {

    const [visible,setVisible] = useState(false)
    const [navColor,setNavColor] = useState(false);
   
    const handleClick = ()=>{
        setVisible(!visible)
    }
   
    const closeMenu = ()=>{
        setVisible(true)
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
        <Link to="home"><div style={ {display:"flex",alignItem:"center"}}><IoLogoPinterest style={{width:"30px", height:"30px",color:"yellow"}} /><h2>ortfolio</h2></div></Link>
        <ul className={visible ? "navbar-menu active" : "navbar-menu"}>
            <li className="nav-item">
                <Link to="home"  >Home</Link>
            </li>
            <li className="nav-item">
                <Link to="about" spy={true} smooth={true} offset={-180} duration={500} onClick={closeMenu}>About</Link>
            </li>

            <li className="nav-item">
                <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Skills</Link>
            </li>

            <li className="nav-item">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Project</Link>
            </li>
          
            <li className="nav-item">
                <a href="./priyanshu_kaushik_resume.pdf" download>Resume</a>
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