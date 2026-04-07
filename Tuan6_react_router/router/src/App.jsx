import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="">
        <span style={{margin: "20px"}}><Link  to={"/"}>Home</Link></span>
        <span style={{margin: "20px"}}><Link  to={"/about"}>About us</Link></span>
        <span style={{margin: "20px"}}><Link  to={"/contact"}>Contact us</Link></span>
      </div>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact'/>
      </Routes>
    
    </>
  )
}

export default App
