import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guitar from './Guitar';


function App() {
  const guitarData = {
    "brand": "Fender",
    "type": "StratoCaster",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/1963_Fender_Stratocaster_%28%244%2C200%29.jpg/170px-1963_Fender_Stratocaster_%28%244%2C200%29.jpg",
    "year":1962
    }

  
  return (
    <>
     <Guitar guitarData={guitarData}/>
    </>
  )
}

export default App
