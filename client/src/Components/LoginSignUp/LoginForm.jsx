
import React, { useState } from "react";
import { redirect } from 'react-router-dom';



function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
  
    // }
  
    function handleSubmit(event) {
  
    //   event.preventDefault();
    return redirect("/dashboard")
  
    }
  return (
    <div className='login-form'>
        <h1>Login</h1>
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





   


