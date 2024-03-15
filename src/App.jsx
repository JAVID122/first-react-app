import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Help from './Components/Help'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
