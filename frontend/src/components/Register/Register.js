import React from "react";
import './Register.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

function Register(){
    const navigate = useNavigate();
    const handleBack = e => {
        navigate("/");
    }
    return (
        <div className = 'register'>
             
             Register
            <div className = 'right'>
            <button onClick={handleBack}> Back to login </button>
            </div>
            
            <div className = 'back'>
            <button onClick={handleBack}> Back to login </button>
            </div>
        </div>

    );
}

export default Register;