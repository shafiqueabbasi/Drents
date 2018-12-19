import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/firstPage';
import SecondPage from './Components/secondPage';
import Heading from './Components/heading';
import Heading2 from './Components/heading2';
import Heading3 from './Components/heading3';
import Heading4 from './Components/heading4';
import Heading5 from './Components/heading5';
import Heading6 from './Components/heading6';
import Heading7 from './Components/heading7';
import Headingf8 from './Components/headingf8';

class App extends Component {
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

export default App;

// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>