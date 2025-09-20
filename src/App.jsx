import React from 'react'
import Navbar from './navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Project from './pages/project/project'
import Contact from './pages/contact/contact'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const App = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/project" || location.pathname === "/contact") {
      document.body.style.backgroundColor = "#121212"; // Home page bg
    } else {
      document.body.style.backgroundColor = "white"; // other pages bg
    }
  }, [location]);

  return (
    <>
          {/* <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>

          </Routes> */}

          <Home />
          <About />
          <Project />
          <Contact />
    </>
  )
}

export default App