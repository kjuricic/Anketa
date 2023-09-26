import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//import Home from './pages/Home';

import Pocetna from './pages/Pocetna';
import DetaljiAnkete from './pages/DetaljiAnkete';
import DijeljenjeAnkete from './pages/DijeljenjeAnkete';
import KreiranjeAnkete from './pages/KreiranjeAnkete';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Pocetna/>}></Route>
          <Route path = '/KreiranjeAnkete' element= {<KreiranjeAnkete/>}></Route>
          <Route path = '/DetaljiAnkete' element= {<DetaljiAnkete/>}></Route>
          <Route path = '/DijeljenjeAnkete' element= {<DijeljenjeAnkete/>}></Route>       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
