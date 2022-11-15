import React from "react";
import { useState } from "react";
import {FaFileDownload} from "react-icons/fa"
import "./About.css";
const About = () => {
    const [visible,setVisible] = useState(false)
  return (
    <div id="about">
        <h1 style={{textAlign:"center",marginTop:"50px"}}>About Me</h1>
    <div className="about-container">
      <div className="about-container-left">
        <div className="about-img">
          <img src="https://www.shutterstock.com/image-vector/student-learning-process-back-view-600w-688093252.jpg" alt="" width="100%" height="100%" />
        </div>
      </div>
      <div className="about-container-right">
  
        <div className="about-summery">
          <p>
            Hi👋 I am Priyanshu Kaushik and I am from Muzaffarnagar U.P Currently
            I am doing Full Stack web Developer course from Masai School.
          </p>
        </div>
        <div className="toggle-buttons">
          <button onClick={()=>setVisible(false)}>Qualification</button>
          <button onClick={()=>setVisible(true)}>Experience</button>
        </div>
        {
            visible ? 
            
        <div className="experience">
        <div>
          <p>Nov 2019 - Apr 2022</p>
          <p>
            I did work with Micro Turner Group at Haridwar Which is the vendor
            of Hero motor Corp Ltd. as a Quality Engineeer
          </p>
        </div>
      </div> :
        <div className="education">
        <div >
          <p>Jul 2015 - Aug 2019</p>
          <p>I have done B.Tech from A.K.T.U and I got 69.13%</p>
        </div>
        <div style={{marginTop:"10px"}}>
          <p>Jul 2014 - Jun 2015</p>
          <p> I have Completed Senior Secondary from U.P Board with 71%</p>
        </div>
        <div style={{marginTop:"20px"}}>
          <p>Jul 2012 - Jun 2013</p>
          <p>I have Completed High School from U.P Board with 79.5%</p>
        </div>
      </div>
      }
      <div className="cv"><a href="./priyanshu_kaushik_resume.pdf" download> <FaFileDownload className="downloadicon"/> Resume</a></div> 
    </div>

    </div>
    </div>
  );
};

export default About;
