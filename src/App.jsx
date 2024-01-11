import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cat from "./images/cat.png"

import './App.css'
import NavigationBar from "./Navbar.jsx"
import Home from "./Pages/Home"
import About from "./Pages/About"
import ProfessionalExperience from "./Pages/ProfessionalExperience"
import MissionStatement from "./Pages/MissionStatement"
import { Routes, Route, HashRouter } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavigationBar></NavigationBar>
      
      </div>

      <div>
        <h1>A first-year student at Barnard College aspiring to pursue a major in Economics. </h1>
      </div>
        <h1 id ="Name">
          Preparing to pursue a legal profession post-graduation. </h1>
      <p id = "Student">
         Hello! This will be my portfolio website and I hope to be able to share my experiences here.

      </p>
     
      <img src = {cat} id="cat"> 
      </img>
    </>
  )
}
export default App

