import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Header from './Header';
import Banner from './Banner';
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
      <div className="App" style={{backgroundImage: "url('./images/swrils.png')"}}>
        {/*<Header/>*/}
        <Banner/>
        <Heading/>
        <Heading2/>
        <Heading3/>
        <Heading4 label='Featured Rentals' hrLine={true}/>
        <Heading7/>
        {/*<Headingf8/>*/}

      </div>
    );

  }
}

export default Home;