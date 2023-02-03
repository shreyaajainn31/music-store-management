import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import Home from "../Home/Home";
import Register from "../Register/Register";
import { Route, Link, Switch, Location, useNavigate } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useLocation();
  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked);
  };
  const [inputButton, setInputButton] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  const setInputButtonSubmit = (e) => {
    e.preventDefault();
    setInputButton("submit");
    history.push("/home");
  };
  const setInputButtonRegister = (e) => {
    e.preventDefault();
    setInputButton("register");
    history.push("/register");
  };

  return (
    <div className="sign-up">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Email: </label>
        <input
          className="sign"
          type="email"
          id="username"
          placeholder="Enter Email"
        />
        <br />
        <label htmlFor="pass"> Password: </label>
        <input
          className="sign"
          type={showPassword ? "text" : "password"}
          id="pass"
          placeholder="Enter Password"
        />{" "}
        <input type="checkbox" onChange={handleShowPassword} />{" "}
        <label>Show Password?</label>
        <br />
        <button className="sign" type="submit" onClick={setInputButtonSubmit}>
          Submit
        </button>
        <button className="sign" onClick={setInputButtonRegister}>
          New User
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
