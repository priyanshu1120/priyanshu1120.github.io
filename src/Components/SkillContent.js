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
               <img className="img"  src="css.png"/>
              </div>
               <h3>CSS</h3>
            </div>
            
            <div className="skill">
              <div className="skillsets">
               <img className="img" src="javascript.png" alt="js"/>
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
               <img className="img" src="node.png" alt="nodejs"/>
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
            
             <div className="static">
              <div>
              <img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=priyanshu1120&show_icons=true&locale=en&layout=compact" alt="priyanshu1120" width="100%" height="100%"  />
              </div>
              <div>
               &nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=priyanshu1120&show_icons=true&locale=en" alt="priyanshu1120" width="100%" height="100%" />
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