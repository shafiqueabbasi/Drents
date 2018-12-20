import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home/index';
import FilterPage from './Components/filter/index';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <FilterPage />

      </div>
    );

  }
}

export default App;
