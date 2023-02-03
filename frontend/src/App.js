import './App.css';
import LoginForm from './components/Login/LoginForm';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" exact component={LoginForm} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
