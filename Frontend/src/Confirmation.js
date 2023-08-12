import React from "react";
import { Link } from "react-router-dom"; 

const Confirmation = () => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Your seat selection has been confirmed!</p>
      <Link to="/Home">Go to Home</Link> 
    </div>
  );
};

export default Confirmation;
