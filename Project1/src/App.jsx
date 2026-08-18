import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <h1>APP COMPONENT</h1>
    <p>G2 Students</p>
    <Home/>
    
    </>
    
  )
}

export default App
// to use this in another files