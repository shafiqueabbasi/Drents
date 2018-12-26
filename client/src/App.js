import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home/index';
import FilterPage from './Components/filter/index';
import Productdetailfirstfold from './Components/productdetail/productdetailfirstfold';
import Headingf8 from './Components/home/headingf8';
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Productdetailfirstfold/>

      </div>
    );

  }
}

export default App;
