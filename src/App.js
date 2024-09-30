import './App.css';

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PRIMEICONS
import 'primeicons/primeicons.css';

// PRIMEFLEX
import 'primeflex/primeflex.css';

// VISTAS
import Home from './pages/Home';

import Informacion from './pages/Informacion';

import Categoria from './pages/Categoria';

// COMPONENTES
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home/> }></Route>
          <Route exact path='/informacion' element={ <Informacion/> }></Route>
          <Route exact path='/categoria' element={ <Categoria/> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
