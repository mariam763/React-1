import React from 'react'
import '../start/start.css'
import img1 from '../start/imgs/avataaars.svg'


export default function Home() {
  return (
    <div>

<header className="head">
            <div className="container d-flex align-items-center flex-column">
                <img className="avatar mb-5" src={img1} alt="" />
                <h1 className="heading">START REACT</h1>
                <div className="text">
                    <div className="icon">
                      <i className="fas fa-star"></i>
                    </div>
                </div>
                <p className="heading2">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>


    </div>
  )
}
