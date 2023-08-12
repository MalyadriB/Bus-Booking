import { Link, useNavigate } from "react-router-dom"; 
import "./Register.css";
function Register() {
  const navigate = useNavigate(); 

  const handleRegister = () => {
    console.log("Registering...");
    navigate("/Home");
  };

  return (
    <div className="register-container">
      <h1>Register Page</h1>
      <div className="input-container">
        <label>Username:</label>
        <input
          type="text"
          
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
        
        />
      </div>
      <div className="button-container">
        <button onClick={handleRegister}>Register and Login</button>
      </div>
      <div className="login-link">
        <Link to="/login">Already have an account? Login here</Link>
      </div>
    </div>
  );
}

export default Register;
