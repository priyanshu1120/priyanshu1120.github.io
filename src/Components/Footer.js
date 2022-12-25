import "./Footer.css"
import React from 'react'
import {FaHome ,FaPhone,FaMailBulk, FaGithub,FaLinkedin, FaFacebook} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{width:"90%",margin:"auto",marginBottom:"10px"}}></hr>
        <div className="footer-Content">

           <div className="leftSide">
            
            <div className="location-main-div">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} className="location-icon" />
                <div>
                    <p>Muzaffarnagar , Utter Pardesh</p>
                    <p>India</p>
                </div>
            </div>

            <div className="mobile-main-div">
              
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} className="mobile-icon"/>
                  <div>
                   <p>+91 8171626930</p>
                   </div>
            
             
            </div>

            <div className="email-main-div">
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} className="email-icon" />
                <div>
                  <p>priyanshukaushik796@gmail.com</p>
                </div>
            </div>

            </div> 

           <div className="rightSide">
              <div className="social">
              <a href="https://www.linkedin.com/in/priyanshu-kaushik-426422210" target="_blank"><FaLinkedin className="linkdin"/></a>
              <a href="https://github.com/priyanshu1120" target="_blank"><FaGithub  className="github" /></a>
              <a href="https://www.facebook.com/priyanshu1120" target="_blank"><FaFacebook  className="facebook" /></a>
              </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer