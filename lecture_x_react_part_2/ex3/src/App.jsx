import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guitar from './Guitar';


function App() {
  const myCallbackFunc = (inputFromChild) => {
    console.log("This is: "+ inputFromChild);
  }

  
  return (
    <>
     <Guitar myCallbackFunction={myCallbackFunc}/>
    </>
  )
}

export default App
