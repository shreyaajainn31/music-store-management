import React from "react";
// import {Link} from "react-router-dom";
import './Home.css'
import Navbar from "../Navbar/Navbar";
function Home(){
    return (
        
        <div className = 'home'>
            <Navbar/>
            <div className= 'body'>
                <h2>Welcome to Home</h2>
            </div>
        </div>

    );
}

export default Home;