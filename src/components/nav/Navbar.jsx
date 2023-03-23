import React from 'react'
import { Link } from 'react-router-dom'
import '../nav/nav.css'

export default function 
() {

  return (


    <div>
        
<nav className="navbar bg-danger navbar-expand-lg bg-body-tertiary fixed-top" id="#">
  <div className="container">
    <Link className="navbar-brand text-white" to="start">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                        <li ><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white" to="portfolio">PORTFOLIO</Link></li>
                        <li ><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white" to="about">ABOUT</Link></li>
                        <li ><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-white" to="contact">CONTACT</Link></li>
                    </ul>
                    </div>
                </div>      
            </nav>

    </div>
  )
}

