import React from 'react';
import Sixth from '../Images/Sixth.jpg'
import './footer.css'

function Footer() {
    return(
            <div >
                <hr />
                <div className="container-fluid padding">
                    <div className= "row text-center">
                        <div className="col-md-4">
                            <img src ={Sixth} id="im" alt="it is"/>
                            <hr className="light" />
                            <p> 9842314388</p>
                            <p> barnit.basnet1@gmail.com</p>
                            <p> Itahari - Sunsari</p>
                        </div>
                        <div className= "col-md-4">
                            <hr className = "light" />
                            <h5> Our Hours</h5>
                            <hr className = "light" />
                            <p> Monday : 9am-5pm</p>
                            <p> Saturday : 10am : 2pm</p>
                            <p> Sunday : Closed</p>
                        </div> 
                        <div className= "col-md-4">
                            <hr className = "light" />
                            <h5> Our Hours</h5>
                            <hr className = "light" />
                            <p> city,State</p>
                            <p> city,State</p>
                            <p> city,State</p>
                            <p> Closed</p>
                        </div>   
                    </div>
                </div>
            </div>
    );
}



export default Footer;