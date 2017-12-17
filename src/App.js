import React, { Component } from 'react';

import './App.css';

import Resume from './pages/resume/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-body App-title">Mimi Flynn</h1>
        </header>
        <div className="App-body">
          <p className="App-intro">
            Senior user experience (UX) software engineer. She volunteers her time as an early member of The Things Network - New York, and as an active mentor and educator to locally-based and remote junior developers. Mimi loves building and fixing things; a perennial maker, always thinking of new applications for projects. She is committed to open source software and builds various types of low-cost embedded systems.
          </p>
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
