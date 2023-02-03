import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import About from "./components/Navbar/Pages/About";
import Contact from "./components/Navbar/Pages/ContactUs";
import YourMusic from "./components/Navbar/Pages/YourMusic";
import Music from "./components/Navbar/Pages/Music";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LoginForm/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
         <Route path = "/music" element = {<Music/>}/>
         <Route path = "/yourmusic" element = {< YourMusic />}/>
      </Routes>
    </Router>
  );
}

export default App;
