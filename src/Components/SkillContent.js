import "./SkillContent.css";



import React from 'react'

const SkillContent = () => {
  return (
    <div className="skills-main">
        <h1>Skills</h1>
        <div className="skills-mid">
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
    </div>
  )
}

export default SkillContent;