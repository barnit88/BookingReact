import React from 'react';
import First from '../Images/First.jpg'
import Second from '../Images/Second.jpg'
import Third from '../Images/Fourth.jpg'
import './carousel.css';

function ImageCarousel () {
    return(
        <div>
            <div>
                <div id="carouselFadeExampleIndicators" className="carousel slide carousel-fade fix"   data-ride="carousel">
                    <div className="carousel-inner h-50 or" role="listbox">
                        <div className="carousel-item active h-50">
                            <img className="d-block w-100 yo" src={First}  
                            data-src="holder.js/900x400?theme=social" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={Second} 
                            data-src="holder.js/900x400?theme=industrial" alt="Second slide"/>
                        </div>
                    </div>
                    
                    <a className="carousel-control-prev" 
                    href="#carouselFadeExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" 
                    href="#carouselFadeExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>  
            </div>
            <div>                
                <div className="container">
                    {/* <img src="https://hotelmoonlight.co.uk/wp-content/themes/moonlighthotel/assets/img/circle-half.png" alt="circle" /> */}
                        <h1>Welcome to Hotel Moonlight</h1>
                            <p>We are a boutique hotel, situated in an elegant Victorian property in the vibrant and cosmopolitan Borough of Kensington.<br/>
                            A hidden gem, we opened our doors in the summer of 2016 and offer sumptuous rooms.</p>
                            <p>Perfectly located, the Museums, Hyde Park and luxury shopping is all at your fingertips. With all the main transport links nearby, Hotel Moonlight is the place to explore and experience London.</p>
                            <p>Whether it is for business or pleasure, our friendly and helpful team are always at hand to ensure our guests have a relaxing and enjoyable stay.</p>
                            <p>We look forward to welcoming you to Hotel Moonlight.</p>
                </div>
            </div>
            {/* Fixex BackGround */}
            <div>
                <section id="features">
                    <div className="fixed-wrap">
                        <div id = "fixed">
                        
                        </div>
                    </div>
                </section>
            </div>
            {/* Meet The Team */}
            <div>
                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className = "col-12">
                            <h1 className = "display-4">Meet The Team</h1>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <div>            
                <div className= "container-fluid padding mt-1">
                    <div className="row padding">
                        <div className ="col-lg-6">
                            <h2> If You built it ...</h2>
                            <p> The colummns will automatically statck on top of ecah other when 
                                the screen s ess than 576px
                            </p>
                            <p>
                                Resize the browser window to see the effect . responsice web design 2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAobecome more important as the anonymousof movile traffic
                                now is more than half million
                                
                            </p>
                            <br/>
                        </div>
                        <div className="col-lg-6">
                            <img src={Third} style ={{height:"300px",width:"100%"}}
                             className = "img-fluid" alt="it is" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;