import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Reservia from './components/ProjectDetail/Reservia';
import Ohmyfood from './components/ProjectDetail/Ohmyfood';
import Orinoco from './components/ProjectDetail/Orinoco';
import Piiquante from './components/ProjectDetail/Piiquante';
import LaChouetteAgence from './components/ProjectDetail/LaChouetteAgence';
import Groupomania from './components/ProjectDetail/Groupomania';

function App() {
  return (
    <BrowserRouter>
        <Routes >
          <Route exact path="/portfolio-personnel/" element={<Home />} />
          <Route exact path="/portfolio-personnel/ProjectDetail/Reservia" element={<Reservia />} />
          <Route exact path="/portfolio-personnel/ProjectDetail/Ohmyfood" element={<Ohmyfood />} />
          <Route exact path="/portfolio-personnel/ProjectDetail/Orinoco" element={<Orinoco />} />
          <Route exact path="/portfolio-personnel/ProjectDetail/Piiquante" element={<Piiquante />} />
          <Route exact path="/portfolio-personnel/ProjectDetail/LaChouetteAgence" element={<LaChouetteAgence />} />
          <Route exact path="/portfolio-personnel/ProjectDetail/Groupomania" element={<Groupomania />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
