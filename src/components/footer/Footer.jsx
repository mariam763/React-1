import React from 'react'
import '../footer/footer.css'

export default function footer() {
    return (
    <div >
<footer className="footer ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="mb-4">LOCATION</h4>
                        <p className="lead mb-0">
                        2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="mb-4">AROUND THE WEB</h4>
                        <a className="btn btn-outline-light btn-social mx-2">
                            <i className="fab fa-fw fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-2" >
                            <i className="fab fa-fw fa-twitter">
                                </i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-2">
                            <i className="fab fa-fw fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-2">
                            <i className="fab fa-fw fa-dribbble"></i>
                        </a>
                    </div>
                
                    <div className="col-lg-4">
                        <h4 className="mb-4">ABOUT FREELANCER</h4>
                        <p className="fw-bolder ">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
            </div>

            
        </footer>

        <div className="copyright py-3">
            <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
    </div>
  )
}
