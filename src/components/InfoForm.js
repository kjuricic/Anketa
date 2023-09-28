import React, { useState } from 'react';
import { useGlobalState } from '../GlobalStateContext';
import './InfoForm.css'; // Uvoz stila

function InfoForm() {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const { dispatch } = useGlobalState(); // Nema potrebe za čitanjem stanja

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Spremanje podataka u globalno stanje
    dispatch({ type: 'SET_INFO', payload: formData });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Naziv ankete:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Opis ankete:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Spremi informacije</button>
    </form>
  );
}

export default InfoForm;
