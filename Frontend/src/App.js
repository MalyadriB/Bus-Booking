import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import BusSeatLayout from "./BusSeatLayout/BusSeatLayout";
import Login from "./Login/Login";
import Register from "./Registration/Register"; 
import Confirmation from "./Confirmation"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/select-seat/:busNumber" element={<BusSeatLayout />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmation" element={<Confirmation />} />{" "}
        
      </Routes>
    </Router>
  );
};

export default App;
