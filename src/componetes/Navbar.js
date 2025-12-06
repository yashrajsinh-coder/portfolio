import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  
  return (
  
    <div className="header"> 
    <nav className="navbar">
      <a className="nav-barnd" href="href">{(props.title)}</a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about us">About us</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
      
    </div>
  )
}

