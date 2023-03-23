import React, { Component } from 'react'
import '../portfolio/portfolio.css'

import img1 from '../portfolio/imgs/cabin.png'
import img2 from '../portfolio/imgs/cake.png'
import img3 from '../portfolio/imgs//circus.png'
import img4 from '../portfolio/imgs/game.png'
import img5 from '../portfolio/imgs/safe.png'
import img6 from '../portfolio/imgs/submarine.png'

export default class Portfolio extends Component {
  render() {

    const one = ()=>{
      let box =document.getElementById("box")
      box.style.display="flex"
      
    }
    const two = ()=>{
      let box2 =document.getElementById("box2")
      box2.style.display="flex"
      
    }
    const three = ()=>{
      let box3 =document.getElementById("box3")
      box3.style.display="flex"
      
    }
    const four = ()=>{
      let box4 =document.getElementById("box4")
      box4.style.display="flex"
      
    }
    const five = ()=>{
      let box5 =document.getElementById("box5")
      box5.style.display="flex"
      
    }
    const six = ()=>{
      let box6 =document.getElementById("box6")
      box6.style.display="flex"
      
    }
    const close1 = ()=>{
      let closeBtn =document.getElementById("box")
      closeBtn.style.display="none"     
    }
    const close2 = ()=>{
      let closeBtn =document.getElementById("box2")
      closeBtn.style.display="none"     
    }
    const close3 = ()=>{
      let closeBtn =document.getElementById("box3")
      closeBtn.style.display="none"     
    }
    const close4 = ()=>{
      let closeBtn =document.getElementById("box4")
      closeBtn.style.display="none"     
    }
    const close5 = ()=>{
      let closeBtn =document.getElementById("box5")
      closeBtn.style.display="none"     
    }
    const close6 = ()=>{
      let closeBtn =document.getElementById("box6")
      closeBtn.style.display="none"     
    }



    return (
    <>


            <section className="section">
            <div className="container">         
                <h2 className="portfolio">PORTFOLIO</h2>
                <div className="contain">
                <div className="icon1">
                    <i className="fas fa-star"></i>
                </div>  
                </div>                        
                <div className="row justify-content-center">        
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="item mt-5" >                         
                            <div className="overlay" onClick={one}>
                                <div className="content"><i className="fas fa-plus fa-3x"></i></div>
                                
                            </div> 
                            <img className="img-fluid" src={img1} alt=""/>                                      
                        </div>
                    </div>      
                    <div className="col-md-6 col-lg-4 mb-5" >
                    <div className="item mt-5">                         
                            <div className="overlay" onClick={two}>
                                <div className="content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>  
                            <img className="img-fluid" src={img2} alt="" />             
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="item mt-5">                         
                            <div className="overlay" onClick={three}>
                                <div className="content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>  
                            <img className="img-fluid" src={img3} alt="" />             
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5" >
                    <div className="item ">                         
                            <div className="overlay" onClick={four}>
                                <div className="content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>  
                            <img className="img-fluid" src={img4} alt="" />             
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5" >
                    <div className="item">                         
                            <div className="overlay" onClick={five}>
                                <div className="content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>  
                            <img className="img-fluid" src={img5} alt="" />             
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" >
                    <div className="item">                         
                            <div className="overlay" onClick={six}>
                                <div className="content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>  
                            <img className="img-fluid" src={img6} alt="" />             
                        </div>
                    </div>
                </div> 


                <div id="box">
                <div className="innerbox">                                         
                    <div className="modal-body bg-white text-center">                 
                            <div className="row justify-content-center">                    
                                <div className="col-lg-8">   
                                    <i className="closebtn pt-3 fas fa-times" onClick={close1}></i>        
                                    <h2 className="portfolio-modal-title pt-5">LOG CABIN</h2>
                                    <div className="icon2">                        
                                        <i className="fas fa-star pb-3"></i>                               
                                    </div>
                                    <img className="image img-fluid rounded mb-3" src={img1} alt="" />
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary mb-3" data-dismiss="modal" onClick={close1}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                </div> 

                <div id="box2">
                <div className="innerbox">                                         
                    <div className="modal-body bg-white text-center">                 
                            <div className="row justify-content-center">                    
                                <div className="col-lg-8">   
                                    <i className="closebtn pt-3 fas fa-times"  onClick={close2}></i>        
                                    <h2 className="portfolio-modal-title pt-5">LOG CABIN</h2>
                                    <div className="icon2">                        
                                        <i className="fas fa-star pb-3"></i>                               
                                    </div>
                                    <img className="image img-fluid rounded mb-3" src={img2} alt="" />
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary mb-3" onClick={close2}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                </div> 
                <div id="box3">
                <div className="innerbox">                                         
                    <div className="modal-body bg-white text-center">                 
                            <div className="row justify-content-center">                    
                                <div className="col-lg-8">   
                                    <i className="closebtn pt-3 fas fa-times"  onClick={close3}></i>        
                                    <h2 className="portfolio-modal-title pt-5">LOG CABIN</h2>
                                    <div className="icon2">                        
                                        <i className="fas fa-star pb-3"></i>                               
                                    </div>
                                    <img className="image img-fluid rounded mb-3" src={img3} alt="" />
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary mb-3" onClick={close3}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                </div> 
                <div id="box4">
                <div className="innerbox">                                         
                    <div className="modal-body bg-white text-center">                 
                            <div className="row justify-content-center">                    
                                <div className="col-lg-8">   
                                    <i className="closebtn pt-3 fas fa-times"  onClick={close4}></i>        
                                    <h2 className="portfolio-modal-title pt-5">LOG CABIN</h2>
                                    <div className="icon2">                        
                                        <i className="fas fa-star pb-3"></i>                               
                                    </div>
                                    <img className="image img-fluid rounded mb-3" src={img4} alt="" />
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary mb-3" onClick={close4}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                </div> 
                <div id="box5">
                <div className="innerbox">                                         
                    <div className="modal-body bg-white text-center">                 
                            <div className="row justify-content-center">                    
                                <div className="col-lg-8">   
                                    <i className="closebtn pt-3 fas fa-times"  onClick={close5}></i>        
                                    <h2 className="portfolio-modal-title pt-5">LOG CABIN</h2>
                                    <div className="icon2">                        
                                        <i className="fas fa-star pb-3"></i>                               
                                    </div>
                                    <img className="image img-fluid rounded mb-3" src={img5} alt="" />
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary mb-3" onClick={close5}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                </div> 
                <div id="box6">
                <div className="innerbox">                                         
                    <div className="modal-body bg-white text-center">                 
                            <div className="row justify-content-center">                    
                                <div className="col-lg-8">   
                                    <i className="closebtn pt-3 fas fa-times"  onClick={close6}></i>        
                                    <h2 className="portfolio-modal-title pt-5">LOG CABIN</h2>
                                    <div className="icon2">                        
                                        <i className="fas fa-star pb-3"></i>                               
                                    </div>
                                    <img className="image img-fluid rounded mb-3" src={img6} alt="" />
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary mb-3" onClick={close6}>
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                </div> 


            </div>
            
        </section>

       


      </>
    
    )
  }
}
