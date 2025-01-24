import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element=<Body />>
      </Route>

    </Routes>
  );
}

const Body: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Shiloh Minnix
        </h3>
        <div>
          Resume
        </div>
      </header>
    </div>
  );
}

export default App;
