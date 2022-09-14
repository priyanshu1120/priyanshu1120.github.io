import React from 'react'
import Heroimg from "../Components/Heroimg"
import  ProjectWork from '../Components/ProjectWork'
import SkillContent from '../Components/SkillContent'
import AboutContent from '../Components/AboutContent'
import Form from "../Components/Form"


const Home = () => {
  return (
    <div>
   <Heroimg />
   <AboutContent />
   <SkillContent />
   <ProjectWork />
   <Form />

    </div>
  )
}

export default Home