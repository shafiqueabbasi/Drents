import React, { Component } from 'react';
import Header from '../home/Header';
import FilterPanel from './filterpanel';

class FilterPage extends Component {
  render() {
    
    return (
      <div className="App">
        <Header />
        <FilterPanel/>
      </div>
    );

  }
}

export default FilterPage;