import "./AboutContent.css"
 import React from 'react'
 import {Link} from "react-router-dom"
 
 const AboutContent = () => {
   return (
     <div className="about">
       <div className="left" >
        <h1>Who Am I ?</h1>
        <p>Hello! I am Priyanshu Kaushik a Fullstack developer, I am a consistent learner who believe in hard work . I am most attracted to solving real customer problems with a business justification, I am having good experience in computer fundamentals and love to do coding.</p>
        <Link to="/contect"><button className="Btn">Download CV</button></Link>
       </div>

     <div className="right">
       <div className="content-container">
        <div className="content-stack-top">
            <img src="./mongodb.jpg" className="img" alt="mongodb img"/>
        </div>
     
        <div className="content-stack-bottom">
            <img src="./React Cover.jpg" className="img" alt="mongodb img"/>
        </div>

       </div>
     </div>


     </div>
   )
 }
 
 export default AboutContent