import React from 'react'
import  ProjectWork from '../Components/ProjectWork'
import SkillContent from '../Components/SkillContent'
import Form from "../Components/Form"
import Hero from '../Components/Hero'
import About from '../Components/About'


const Home = () => {
  return (
    <div id="home">
   <Hero />
   <About/>
   <SkillContent />
   <ProjectWork />
   <Form />

    </div>
  )
}

export default Home