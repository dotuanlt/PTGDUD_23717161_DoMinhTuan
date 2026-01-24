import React from 'react'
import './LoginForm.css'

function LoginForm() {
  return (
    <div className="login-box">

        <button className="close-btn" onClick={() => setShow(false)}>
        ✕
        </button>

        <h2>Login Form</h2>
        <div >
            <p>Username:</p>
            <input type="text" />
        </div>
        
        <div>
            <p>Password:</p>
            <input type="password" />
        </div>

        <div>
            <button className= "btn-login">Login</button>
        </div>
        
    </div>
  )
}

export default LoginForm
