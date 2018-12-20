import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import Heading from './heading';
import Heading2 from './heading2';
import Heading3 from './heading3';
import Heading4 from './heading4';
import Heading5 from './heading5';
import Heading6 from './heading6';
import Heading7 from './heading7';
import Headingf8 from './headingf8';

class Home extends Component {
  render() {
    
    return (
      <div className="App">
        <FirstPage />
        <SecondPage/>
        <Heading/>
        <Heading2/>
        <Heading3/>
        <Heading4/>
        <Heading5/>
        <Heading6/>
        <Heading7/>
        <Headingf8/>

      </div>
    );

  }
}

export default Home;