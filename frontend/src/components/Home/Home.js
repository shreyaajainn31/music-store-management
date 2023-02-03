import React from "react";
import Image from "./music.jpeg";
import './Home.css'
import Navbar from "../Navbar/Navbar";
function Home(){
    return (
        
        <div className = 'home'>
            <Navbar/>
            <div className= 'body'>
                <h2>Welcome to Home</h2>
                <img src = {Image}/>
            </div>
        </div>

    );
}

export default Home;