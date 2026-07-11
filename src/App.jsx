import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './components/Register'
import Viewpage from './components/Viewpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
      <Viewpage />
    </>
  )
}

export default App
