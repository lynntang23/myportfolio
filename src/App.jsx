import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cat from "./images/cat.png"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>"portfolio"</h1>
      </div>
        <h1 id ="Name">
          lynn tang </h1>
      <p id = "Student">
         first-year student at Barnard College
      </p>
      <p id = "Studying">
         Studying Economics
      </p>
      <img src = {cat}> 
      </img>
    </>
  )
}

export default App

