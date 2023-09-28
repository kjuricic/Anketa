import React from 'react';
import { useGlobalState } from '../GlobalStateContext';
import { useNavigate } from 'react-router-dom';

function KreiranjeAnkete() {
  const { state, dispatch } = useGlobalState();

  const updateGlobalVariable = () => {
    dispatch({ type: 'UPDATE_GLOBAL_VARIABLE', payload: 'Novi sadržaj' });
  };

  return (
    <div>
      <h1>Kreiranje Ankete</h1>
      <p>Globalna varijabla: {state.globalVariable}</p>
      <button onClick={updateGlobalVariable}>Ažuriraj Globalnu Varijablu</button>
    </div>
  );
}

export default KreiranjeAnkete;
