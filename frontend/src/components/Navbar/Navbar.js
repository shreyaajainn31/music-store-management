import React from "react";
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const navigate = useNavigate();

    return (
        <div >
            <nav className = 'navbar'>
            <ul className = 'items'>
              <li> <Link to = "/home"> Logo </Link></li> 
              <li> <Link to = "/about">About</Link></li> 
              <li> <Link to = "/contact"> Contact Us</Link></li> 
              <li> <Link to= "/music"> Music</Link></li> 
              <li> <Link to = "/yourmusic">Your Music </Link></li> 
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;