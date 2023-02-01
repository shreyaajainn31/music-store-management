import React, {useState} from "react";

function SignUp(){

    return (

        <div>
            <h2>Login</h2>
           <form>
            <label for = "username"> Email: </label>
            <input type = "email" id = "username" placeholder="Enter Email"/>
            <label for = "pass"> Password: </label>
            <input type = "password" id = "pass" placeholder="Enter Password"/>
            </form> 
        </div>

    );


}

export default SignUp;






