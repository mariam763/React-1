import React, { Component } from 'react'
import '../about/about.css'
export default class About extends Component {
  render() {
    return (
      <>
      

      <section className="page-section text-white mt-5">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>                                 
                    <div className="icon3">
                      <i className="fas fa-star"></i>
                    </div>                                
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>

            
            </div>
        </section>
      
      
      
      
      
      </>
    )
  }
}

