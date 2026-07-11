import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './components/Register'
import Viewpage from './components/Viewpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>


        <Route path='/' element={<Register/>}/>
        <Route path='/vi' element={<Viewpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
