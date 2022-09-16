import "./SkillContent.css";

import GitHubCalendar from 'react-github-calendar';



import React from 'react'

const SkillContent = () => {
    
  return (
    <div className="skills-main">
        <h1>Skills</h1>
       
        <div className="skills-mid">
            
        <div className="skill">
                <img className="img" src="front-end.png" alt="front-end"/>
                <h3>FRONTEND</h3>
            </div>

            <div className="skill">
                <img className="img" src="backend.png" alt="html"/>
                <h3>BACKEND</h3>
            </div>

            <div className="skill">
                <img className="img" src="datastructure.png" alt="html"/>
                <h3>DATA STRUCTURE</h3>
            </div>


            <div className="skill">
                <img className="img" src="HTML5.png" alt="html"/>
                <h3>HTML</h3>
            </div>
            <div className="skill">
               <img className="img" src="CSS.png" alt="css"/>
               <h3>CSS</h3>
            </div>
            <div className="skill">
               <img className="img" src="js.png" alt="js"/>
               <h3>JavaScript</h3>
            </div>
            <div className="skill">
                <img className="img" src="git.png" alt="git"/>
                <h3>Git</h3>
            </div>
            <div className="skill">
                <img className="img" src="chakraui.png" alt="chakra"/>
                <h3>chakra-UI</h3>
            </div>
            <div className="skill">
                <img className="img" src="mongodb.jpg" alt="mongo"/>
                <h3>MongoDB</h3>
            </div>
            <div className="skill">
               <img className="img" src="node.png" alt="nodejs"/>
               <h3>NodeJs</h3>
            </div>
            <div className="skill">
                 <img className="img" src="React Cover.jpg" alt="react"/>
                 <h3>React</h3>
            </div>
            <div className="skill">
                <img className="img" src="redux.png" alt="redux"/>
                <h3>Redux</h3>
            </div>
        </div>

        
        <div id="static">
          <div className="main-stat" > 
            <div >
              <h1 >STATISTICS</h1>
            </div>
  
            <div className="static-container">
              <div className="static-box" >
                <div className="circle-box">
                  <div>1200+</div>
                  <div><h3>Hours</h3> of Full Stack Coding</div>
                </div>
    
                <div className="circle-box">
                  <div >250+</div>
                  <div><h3>DSA</h3>Problems</div>
                </div>
    
                <div className="circle-box">
                  <div>220+</div>
                  <div><h3>Git</h3>Commits</div>
                </div>
    
                <div className="circle-box">
                  <div >10+</div>
                  <div><h3>Projects</h3>Done</div>
                </div>
    
                
                <div className="circle-box">
                  <div>100+</div>
                  <div><h3>Hours</h3> of Soft Skills Sessions</div>
                </div>

              </div>
            </div>
          </div>
        </div>


         <div>
        <h1 style={{marginTop:"6rem"}}>Github Calender</h1>
         <GitHubCalendar username="priyanshu1120" style={{color:"white",margin:"auto",marginTop:"2rem"}} />
        </div>  

    </div>
  )
}

export default SkillContent;