import React from 'react';
import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Schedule from './Components/Schedule';
import BoardGames from './Components/Board Games';


function App() {
  return (
    <div className="App">
      
      <Home />
      <Menu />
      <Schedule />
      <BoardGames />
    </div>
  );
}

export default App;
