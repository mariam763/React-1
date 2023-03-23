import React from 'react'
import '../contacts/contacts.css'

export default function Contacts() {
return (

    
    <div>

<section className="page-section bg-white " id="contact">
            <div className="container">
                <h2 className="contact-me text-center text-uppercase">Contact Me</h2>                               
                <div className="icon4">
                    <i className="fas fa-star"></i>
                </div>               
                <div className="row">
                    <div className="col-lg-8 mx-auto">                     
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="control">
                                <div className="label pb-2">
                                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" />
                                </div>
                            </div>
                            <div className="control">
                                <div className="label pb-2">
                                    <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" />
                                </div>
                            </div>
                            <div className="control">
                                <div className="label pb-2">
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" />
                                </div>
                            </div>
                            <div className="control">
                                <div className="label-area pb-2">
                                    <textarea className="form-control" id="message" rows="3" placeholder="Message" required="required"></textarea>
                                </div>
                            </div>
                            <br />           
                            <div><button className="btn btn-primary" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

