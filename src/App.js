import React from 'react';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
      <p>To-Do List:</p>
          <ToDo />
      </header>
    </div>
  );
}

export default App;
