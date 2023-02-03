import React, { useState } from "react";
import "./LoginForm.css";
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';


function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitButton = e => {
        navigate('/home');
  }
  const handleRegisterButton = e => {
        navigate('/register')
  }

  return (
    <div className = 'sign-up'>
        <h2>Login</h2>
        <form>
        <label for = "username"> Email: </label>
        <input className = 'sign' type = "email" id = "username" placeholder="Enter Email" value = {email} onChange={handleEmailChange}/>
        <br></br>
        <label for = "pass"> Password: </label>
        <input className = 'sign' type = {showPassword ? "text" : "password"} id = "pass" placeholder="Enter Password" value = {password} onChange={handlePasswordChange}/> <input type = "checkbox" onChange={handleShowPassword}/> <label>Show Password?</label>
        <br></br>
        <button className = 'sign' type = "submit" onClick={handleSubmitButton}> Submit </button>
        <button className = 'sign' onClick={handleRegisterButton} >New User</button>
        </form> 
    </div>
  );
}

export default LoginForm;
