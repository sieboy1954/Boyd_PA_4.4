import React from 'react';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
      <p className= "title"> My Shopping List:</p>
      <img src="/shoppingList.png" alt="My Shopping List" className="img"/>
          <ToDo />
      </header>
    </div>
  );
}

export default App;
