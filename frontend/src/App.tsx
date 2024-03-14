import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import './App.css';
import BowlersList from './Bowlers/BowlerList';

function App() {
  return (
    <div className="App">
      <Header />
      <BowlersList />
    </div>
  );
}

export default App;
