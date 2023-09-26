import React from 'react';
import { useNavigate } from 'react-router-dom'; // Uvoz useNavigate

import './Pocetna.css';

function Pocetna() {
  const navigate = useNavigate(); // Koristi useNavigate za navigaciju

  const handleKreirajAnketuClick = () => {
    // Koristi navigate za navigaciju na stranicu za kreiranje ankete
    navigate('/KreiranjeAnkete');
  };

  return (
    <div className="pocetna-container">
      <h1>Dobrodošli na Početnu stranicu</h1>
      <button className="kreiraj-anketu-button" onClick={handleKreirajAnketuClick}>
        Kreiraj novu anketu
      </button>
    </div>
  );
}

export default Pocetna;
