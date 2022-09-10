import "./Footer.css"
import React from 'react'
import {FaHome ,FaPhone,FaMailBulk, FaGithub,FaLinkedin, FaFacebook} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-Content">
           <div className="leftSide">
            
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <div>
                    <p>Muzaffarnagar , Utter Pardesh</p>
                    <p>India</p>
                </div>
            </div>

            <div className="mobile">
                <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                  +91 8171626930
                </h4>
             
            </div>

            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                 priyanshukaushik796@gmail.com
                </h4>
             
            </div>

            </div> 

           <div className="rightSide">
              <div className="social">
              <a href="https://www.linkedin.com/in/priyanshu-kaushik-426422210"><FaLinkedin size={50} style={{color:"#fff",marginRight:"2rem"}} /></a>
              <a href="https://github.com/priyanshu1120"><FaGithub size={50} style={{color:"#fff",marginRight:"2rem"}} /></a>
              <a href=""><FaFacebook size={50} style={{color:"#fff",marginRight:"2rem"}} /></a>
              </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer