import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./Hero.css"
import { Typewriter } from "react-simple-typewriter"
const Hero = () => {

  const [click,setClick] = useState(false)
  const closeMenu = ()=>{
    setClick(false)
  }
  return (
    <div className="hero-parent">
      <div className='hero-container'>

      <div className='hero-right-box'>
        <img src="profile.jpg" alt="profile"/>
      </div>

        <div className='hero-left-box'>
        <div className='hero-left-child'>
             <h2 style={{marginBottom:"20px",color:"white"}}>Welcome to my portfolio</h2>
           <h1 style={{marginTop:"20px"}}>Hi I'M <span style={{color:"yellow" ,fontSize:"1.8rem"}}>PRIYANSHU KAUSHIK</span></h1>
           <h2 style={{marginBottom:"20px",color:"white"}}><Typewriter words={[" Aspiring Full Stack Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /></h2>
           <div style={{marginTop:"20px"}}>
           {/* <button className="btn1"><a href="./priyanshu_kaushik_resume.pdf" download style={{color:"black"}}>RESUME</a></button> */}
          
          <div className='btn'>
           {/* <a href="./priyanshu_kaushik_resume.pdf" className="btn1" download style={{color:"black"}}>RESUME</a> */}
           <Link to="contect" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="btn2">Contact Me</Link>  
           </div>
           {/* <button className="btn2"><Link to="contect" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>  </button> */}
           </div>
         </div>
        </div>
     
      </div>
    </div>
  )
}

export default Hero