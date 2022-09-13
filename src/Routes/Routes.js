import React from 'react'
import Home from "./Home"
import About from "./About"
import Contect from "./Contect"
import Project from "./Project"
import Skills from './Skills';
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <div>
            <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contect" element={<Contect />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default Routers