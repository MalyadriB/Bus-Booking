import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BusSeatLayout.css';
import { useNavigate } from 'react-router-dom';

const BusSeatLayout = () => {
  const [busData, setBusData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchBusData() {
      try {
        const response = await axios.get('http://localhost:5000/getdata');
        setBusData(response.data);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    }

    fetchBusData();
  }, []);

  const handleSeatClick = (busId, seatNumber) => {
    const updatedBusData = busData.map((bus) => {
      if (bus._id === busId) {
        const selectedSeats = bus.seat_selected || [];
        const updatedSelectedSeats = selectedSeats.includes(seatNumber)
          ? selectedSeats.filter((seat) => seat !== seatNumber)
          : [...selectedSeats, seatNumber];
        return { ...bus, seat_selected: updatedSelectedSeats };
      }
      return bus;
    });

    setBusData(updatedBusData);
  };

  const handleUpdateSeats = async (busId, updatedSelectedSeats) => {
    try {
      await axios.post(`http://localhost:5000/updateSeatSelection/${busId}`, {
        seat_selected: updatedSelectedSeats,
      });

      navigate('/confirmation');
    } catch (error) {
      console.error('Error updating selected seats:', error);
    }
  };

  return (
    <div className="bus-seat-layout">
      <h2>Bus Seat Layout</h2>
      <button className='modify-button' onClick={() => navigate('/Home')}>Go to Home</button>
      <div className="bus-list">
        {busData.map((busInfo) => (
          <div key={busInfo._id} className="bus-box">
            <div className="bus-name">Bus {busInfo.bus}</div>
            <div className="seat-grid">
              {Array(busInfo.max_available)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`seat-box ${
                      busInfo.seat_selected &&
                      busInfo.seat_selected.includes(index + 1)
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => handleSeatClick(busInfo._id, index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
            </div>
            <button className='modify-button'
              onClick={() =>
                handleUpdateSeats(busInfo._id, busInfo.seat_selected)
              }
            >
             Confirm
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusSeatLayout;
