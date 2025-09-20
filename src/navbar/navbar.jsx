import React from 'react'
import styles from "./navbar.module.css"
import { Link }  from "react-router-dom"

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <ul className={styles.navElement}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar