// import "./SkillContent.css";
 import "./skill.css"

import GitHubCalendar from 'react-github-calendar';



import React from 'react'

const SkillContent = () => {
    
  return (
    <div className="skills-main">
        <h1>Skills</h1>
       
        <div className="skills-mid">
            
         <div className="skill">
               <div className="skillsets">
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU" alt="front-end"/>
              </div>  
                <h3>FRONTEND</h3>

            </div>

            <div className="skill">
              <div className="skillsets">
                <img className="img" src="backend.png" alt="html"/>
                </div> 
                <h3>BACKEND</h3>
            </div>

            <div className="skill">
               <div className="skillsets">
                <img className="img" src="datastructure.png" alt="html"/>
                </div> 
                <h3>DATA STRUCTURE</h3>
            </div>


            <div className="skill">

              <div className="skillsets">
                <img className="img" src="https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg" alt="html"/>
                </div>
                <h3>HTML</h3>
            </div>
            <div className="skill">
              <div className="skillsets">
               <img className="img"  src="data:image/png;base64,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" alt="css"/>
              </div>
               <h3>CSS</h3>
            </div>
            
            <div className="skill">
              <div className="skillsets">
               <img className="img" src="data:image/png;base64,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" alt="js"/>
               </div> 
               <h3>JavaScript</h3>
            </div>
            <div className="skill">
                <div className="skillsets">
                <img className="img" src="github.png" alt="git"/>
                </div>
                <h3>Git</h3>
            </div>
            <div className="skill">
               <div className="skillsets">
                <img className="img" src="chakraui.png" alt="chakra"/>
                </div> 
                <h3>chakra-UI</h3>
            </div>
            <div className="skill">
                <div className="skillsets">
                <img className="img" src="mongodb.jpg" alt="mongo"/>
                </div> 
                <h3>MongoDB</h3>
            </div>
            <div className="skill">
              <div className="skillsets">
               <img className="img" src="data:image/png;base64,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" alt="nodejs"/>
              </div>
               <h3>NodeJs</h3>
            </div>
            <div className="skill">
               <div className="skillsets">
                 <img className="img" src="React Cover.jpg" alt="react"/>
                </div>
                 <h3>React</h3>
            </div>
            <div className="skill">
            <div className="skillsets">
                <img className="img" src="https://codeit.mk/dam/jcr:2200ee35-a3b1-43c0-9589-e036ae9ea5d8/redux.1.2020-12-17-07-49-19.png" alt="redux"/>
            </div>  
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