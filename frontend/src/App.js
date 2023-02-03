import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LoginForm/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
