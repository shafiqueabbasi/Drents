import React, { Component } from 'react';
import FirstPage from '../home/firstPage';
import FilterPanel from './filterpanel';

class FilterPage extends Component {
  render() {
    
    return (
      <div className="App">
        <FirstPage />
        <FilterPanel/>
      </div>
    );

  }
}

export default FilterPage;