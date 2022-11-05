// import "./SkillContent.css";
 import "./skill.css"
import {FaReact,FaNodeJs,FaHtml5,FaGitAlt,FaGithub} from "react-icons/fa"
import {SiChakraui,SiVisualstudiocode,SiCss3,SiExpress,SiMongodb,SiJavascript,SiRedux} from "react-icons/si"
import {FcTreeStructure} from "react-icons/fc"
import GitHubCalendar from 'react-github-calendar';



import React from 'react'

const SkillContent = () => {
    
  return (
    <div className="skills-main" id="skills">
        <h1>Skills</h1>
       
        <div className="skills-mid">
         <div className="frontend-box">
           <h2 className="sub-heading-skill">FRONTEND</h2>
           <div className="frontend-skill-box">
               <div>
                  <FaReact className="icons" style={{color:"#61dbfb"}}/>
                  <h3>React</h3>
               </div>

               <div>
                  <SiRedux className="icons" style={{color:"#764abc"}}/>
                  <h3>Redux</h3>
               </div>

               <div>
                  <SiChakraui className="icons" style={{color:"#6fcad0"}}/>
                  <h3>Chakra UI</h3>
               </div>

               <div>
                  <SiCss3 className="icons" style={{color:"#304cdc"}}/>
                  <h3>CSS</h3>
               </div>

               <div>
                  <FaHtml5 className="icons" style={{color:"#e54c21"}}/>
                  <h3>HTML</h3>
               </div>

           </div>
         </div>  

          <div className="backend-box">
           <h2 className="sub-heading-skill">BACKEND</h2>
           <div className="backend-skill-box">
               <div>
               <FaNodeJs className="icons" style={{color:"#90c53f"}}/>
               <h3>Node Js</h3>
               </div>

               <div>
               <SiExpress className="icons" style={{color:"#90c53f"}} />
               <h3>Express</h3>
               </div>

               <div>
               <SiMongodb className="icons" style={{color:"#0fa14c"}}/>
               <h3>Mongo Db</h3>

               </div>
           </div>
         </div>   
        
         <div className="Tool-box">
           <h2 className="sub-heading-skill">TOOLS</h2>
           <div className="tool-skill-box">
               <div>
               <SiVisualstudiocode className="icons" style={{color:"#24aff2"}}/>
               <h3>V.S.code</h3>
               </div>

               <div>
               <FaGitAlt className="icons" style={{color:"#f05033"}}/>
               <h3>Git</h3>
               </div>

               <div>
               <FaGithub className="icons" style={{color:"black"}}/>
               <h3>Github</h3>
               </div>
           </div>
         </div>  

                 
         <div className="other-box">
           <h2 className="sub-heading-skill">LANGUAGE</h2>
           <div className="other-skill-box">
               <div>
               <SiJavascript className="icons" style={{color:"#ead41c"}}/>
               <h3>Java Script</h3>
               </div>

               <div>
               <FcTreeStructure className="icons" style={{color:"#90c53f"}}/>
               <h3>DSA</h3>
               </div>

           </div>
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