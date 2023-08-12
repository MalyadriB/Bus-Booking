import React, { useState, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [updatedBusList, setUpdatedBusList] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    async function fetchBusData() {
      try {
        const response = await axios.get('http://localhost:5000/getdata');
        setUpdatedBusList(response.data);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    }

    fetchBusData();
  }, []);

  const handleLogout = () => {
    
    console.log('User logged out');

    navigate('/');
  };

  return (
    <div className="home-container">
      <div className="top-tag">
        Available Bus
        
      </div>
      <div className="bus-list">
        {updatedBusList.map((busInfo) => {
          const selectedSeats = busInfo.seat_selected || [];
          const actualAvailableSeats = parseInt(busInfo.max_available) - selectedSeats.length;
          if (actualAvailableSeats > 0)
            return (
              <div key={busInfo._id} className="bus-info">
                <div>Bus {busInfo.bus}</div>
                <div>Available seats: {actualAvailableSeats}</div>
                <Link
                  to={`/select-seat/${busInfo._id}`}
                  className="select-button"
                  style={{ textDecoration: 'none' }}
                >
                  Select Bus
                </Link>
                
              </div>
            );
          else return null;
        })}
      </div>
      <button onClick={handleLogout}>Logout</button> 
    </div>
  );
};

export default Home;
