import React from 'react'

import  ProjectWork from '../Components/ProjectWork'
import SkillContent from '../Components/SkillContent'
import AboutContent from '../Components/AboutContent'
import Form from "../Components/Form"
import Hero from '../Components/Hero'


const Home = () => {
  return (
    <div id="home">
   <Hero />
   <AboutContent />
   <SkillContent />
   <ProjectWork />
   <Form />

    </div>
  )
}

export default Home