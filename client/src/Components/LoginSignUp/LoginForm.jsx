
import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from 'react-router-dom';



function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();

    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
  
    // }
  
    function handleSubmit(event) {
  
    //   event.preventDefault();
    return navigate("/dashboard");
  
    }
  return (
    <div className='login-form'>
        
      <form onSubmit={handleSubmit}>
<div className="form-field">
  <label>Email</label>
  <input
    autoFocus
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
<div className="form-field">
  <label>Password</label>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>


<button className="form-button" type="submit" 
// disabled={!validateForm()}
>

  Login

</button>

</form>
    </div>
  )
}

export default LoginForm





   


