import "./ProjectCard.css"
// import 'animate.css';
import React from 'react'


const ProjectCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">{props.title}</h2>
    <h3 className="project-tool">Tech Stack</h3>
    <h4>{props.tool}</h4>
    <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
           <a href={ `${props.code}`} target="_blank" rel="noreferrer" className="Btn" >Code</a>  
           <a href={`${props.source}`} target="_blank"  rel="noreferrer" className="Btn">Live</a> 
        </div>
    </div>

</div>
  )
}

export default ProjectCard