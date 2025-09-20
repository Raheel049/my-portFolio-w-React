import React from 'react'
import styles from "./navbar.module.css"
import { Link }  from "react-router-dom"

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <ul className={styles.navElement}>
            <li>
            <a href="#home">Home</a>
                {/* <Link to="/">Home</Link> */}
            </li>
            <li>
            <a href="#about">About</a>
                {/* <Link to="/about">About</Link> */}
            </li>
            <li>
            <a href="#project">Project</a>
                {/* <Link to="/project">Project</Link> */}
            </li>
            <li>
            <a href="#contact">Contact</a>
                {/* <Link to="/contact">Contact</Link> */}
            </li>
        </ul>
    </div>
  )
}

export default Navbar