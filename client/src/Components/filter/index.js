import React, { Component } from 'react';
import Header from '../home/Header';
import FilterPanel from './filterpanel';
import Footer from '../home/headingf8';


class FilterPage extends Component {
  render() {

    return (
		<div className="App" style={{backgroundImage: "url('./images/swrils.png')"}}>
			<FilterPanel {...this.props}/>        
		</div>
    );

  }
}

export default FilterPage;
<<<<<<< HEAD
=======

>>>>>>> 07e16d52c8f94a6e84e765edd82716cf26e2ad63
