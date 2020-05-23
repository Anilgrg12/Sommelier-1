import React from 'react';
import Home from './components/Home'
import './App.css';
import NavBar from './components/NavBar'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    
      <NavBar />
      <Home />
    </div>

  );
}

export default App;
