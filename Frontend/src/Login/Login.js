import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    
    console.log("Logging in...");
    
    navigate("/Home");
  };

  const handleRegister = () => {
   
    console.log("Registering...");
    
    navigate("/register");
  };
  

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="input-container">
        <label>Username:</label>
        <input type="text" />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input type="password" />
      </div>
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
      <div className="register-link">
        <Link to="/register">Don't have an account? Register here</Link>
      </div>
      
    </div>
  );
}

export default Login;
