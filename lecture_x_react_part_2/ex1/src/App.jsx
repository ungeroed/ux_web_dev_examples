import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCounter from './examples/ex1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyCounter/>
    </>
  )
}

export default App
