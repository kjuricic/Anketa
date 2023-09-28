import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStateProvider } from './GlobalStateContext'; // Dodano

import Pocetna from './pages/Pocetna';
import DetaljiAnkete from './pages/DetaljiAnkete';
import DijeljenjeAnkete from './pages/DijeljenjeAnkete';
import KreiranjeAnkete from './pages/KreiranjeAnkete';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStateProvider> {/* Dodano */}
          <Routes>
            <Route index element={<Pocetna />} />
            <Route path="/KreiranjeAnkete" element={<KreiranjeAnkete />} />
            <Route path="/DetaljiAnkete" element={<DetaljiAnkete />} />
            <Route path="/DijeljenjeAnkete" element={<DijeljenjeAnkete />} />
          </Routes>
        </GlobalStateProvider> {/* Dodano */}
      </BrowserRouter>
    </div>
  );
}

export default App;
