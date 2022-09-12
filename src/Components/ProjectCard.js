import "./ProjectCard.css"

import React from 'react'


const ProjectCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
           <a href={ `${props.code}`} target="_blank" className="Btn">Code</a>  
           <a href={`${props.source}`} className="Btn">Source</a> 
        </div>
    </div>

</div>
  )
}

export default ProjectCard