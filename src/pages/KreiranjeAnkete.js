import React, { useState } from 'react';
import './KreiranjeAnkete.css';

function KreiranjeAnkete() {
  const [anketa, setAnketa] = useState({
    naziv: '',
    opis: '',
    multipleChoice: false,
    izbori: [],
    sudionici: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setAnketa({ ...anketa, [name]: newValue });
  };

  const dodajIzbor = () => {
    const noviIzbor = ''; // Ovdje možete postaviti početnu vrijednost
    setAnketa({ ...anketa, izbori: [...anketa.izbori, noviIzbor] });
  };

  const urediIzbor = (index, vrijednost) => {
    const noviIzbori = [...anketa.izbori];
    noviIzbori[index] = vrijednost;
    setAnketa({ ...anketa, izbori: noviIzbori });
  };

  const obrisiIzbor = (index) => {
    const noviIzbori = anketa.izbori.filter((_, i) => i !== index);
    setAnketa({ ...anketa, izbori: noviIzbori });
  };

  const spremiAnketu = () => {
    // Ovdje dodajte logiku za spremanje ankete (na primjer, slanje na server)
    // Nakon spremanja, preusmjerite korisnika na stranicu za dijeljenje ankete
  };

  return (
    <div>
      <h2>Kreiranje Ankete</h2>
      <form>
        <label>
          Naziv ankete:
          <input
            type="text"
            name="naziv"
            value={anketa.naziv}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Opis ankete:
          <textarea
            name="opis"
            value={anketa.opis}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Multi-choice:
          <input
            type="checkbox"
            name="multipleChoice"
            checked={anketa.multipleChoice}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <h3>Lista izbora</h3>
        {anketa.izbori.map((izbor, index) => (
          <div key={index}>
            <input
              type="text"
              value={izbor}
              onChange={(e) => urediIzbor(index, e.target.value)}
            />
            <button type="button" onClick={() => obrisiIzbor(index)}>
              Obriši
            </button>
          </div>
        ))}
        <button type="button" onClick={dodajIzbor}>
          Dodaj izbor
        </button>
        <br />

        <button type="button" onClick={spremiAnketu}>
          Spremi Anketu
        </button>
      </form>
    </div>
  );
}

export default KreiranjeAnkete;
