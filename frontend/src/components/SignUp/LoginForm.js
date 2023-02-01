import React, {useState} from "react";
import './LoginForm.css';
function LoginForm(){

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleShowPassword = e => {
        setShowPassword(e.target.checked);
    }

    return (

        <div className = 'sign-up'>
            <h2>Login</h2>
           <form>
            <label for = "username"> Email: </label>
            <input className = 'sign' type = "email" id = "username" placeholder="Enter Email"/>
            <br></br>
            <label for = "pass"> Password: </label>
            <input className = 'sign' type = {showPassword ? "text" : "password"} id = "pass" placeholder="Enter Password"/> <input type = "checkbox" onChange={handleShowPassword}/> <label>Show Password?</label>
            <br></br>
            <button className = 'sign' type = "submit"> Submit </button>
            
            <button className = 'sign'>New User</button>
            </form> 
        </div>

    );

}

export default LoginForm;






