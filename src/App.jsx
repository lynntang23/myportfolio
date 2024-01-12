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

  return ( <HashRouter>

    <>
      <div>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProfessionslExperience" element={<ProfessionalExperience />} />
          <Route path="/MissionStatement" element={<MissionStatement />} />
        </Routes>
      
      </div>
ç

      <div>
        <h1>A first-year student at Barnard College aspiring to pursue a major in Economics. </h1>
      </div>
        <h1 id ="Name">
          Preparing to pursue a legal profession post-graduation. </h1>
      
     
      <img src = {cat} id="cat"> 
      </img>
    </>
    </HashRouter>
  )
}
export default App

