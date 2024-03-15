import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const hanldeContactus = () => {
    debugger
    useNavigate('contact')
  }
  return (
    <div>
      Home
        <Link  to={'contact'} > Contact su </Link>
    </div>
  )
}

export default Home
