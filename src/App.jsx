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
      {/* <Navbar /> */}
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  )
}

export default App