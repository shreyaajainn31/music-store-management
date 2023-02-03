import React from "react";
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from "./logo.png";

function Navbar(){
    const navigate = useNavigate();

    return (
        <div >
            <nav className = 'navbar'>
            <ul className = 'items'>
              <li className = 'logo'> <Link to = "/home"> <img src = {Logo}/> </Link></li> 
              <li> <Link to = "/about">About</Link></li> 
               
              <li> <Link to= "/music"> Music</Link></li> 
              <li> <Link to = "/yourmusic">Your Music </Link></li> 
              <li> <Link to = "/contact"> Contact Us</Link></li>
              <li> <Link to = "/"> Sign out </Link></li>
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;