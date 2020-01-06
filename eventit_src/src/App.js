import React from 'react';
import InputBar from './InputBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eventit</h1>
        <h2>Welcome to Eventit! Eventit helps you find cool events nearby to you.</h2>
      </header>
      <InputBar/>
    </div>
  );
}

export default App;