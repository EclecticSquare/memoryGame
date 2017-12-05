import React, { Component } from 'react';
import './App.css';
import MemoryCardBack from './MemoryCard.js'

class App extends Component {
  // Game Logic


  //Renders the physical gameboard
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h4 className="App-subtitle">Match Cards To Win</h4>
        </header>
        <div>
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
        </div>
        <div>
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
        </div>
        <div>
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
        </div>
        <div>
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
          <MemoryCardBack />
       </div>
      
      </div>
    );
  }
}

export default App;
