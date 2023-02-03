import React from "react";
import Navbar from "../Navbar";
import './Pages.css';

function Contact(){
    return (
        <div>
            <Navbar></Navbar>
            
            <br/>
            <div className = 'contact'>
            <h2>Thankyou for joining us :) </h2>

            <div className = 'contact-details'>
                
            
            <h3>Have Queries? Contact us!</h3>

            <br/>

            <p>
                You can send us email to: music@music.com
                <br/>
                You can call us at: +1 999 999 9999
            </p>
            </div>
            </div>

        </div>
        
    );
}

export default Contact;