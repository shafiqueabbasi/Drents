import React, { Component } from 'react';

class SecondPage extends Component {
  render() {

    return (
    <div>
      <div className="App hidden-xs" style={{marginTop: '88px'}}>
      	<div className="Banner">
      		<img src="./images/Banner.png" style={{width: '100%'}}/>
      	</div>
      </div>
      <div className="App visible-xs" style={{marginTop:'14%'}}>
      	<div className="Banner">
      		<img src="./images/mobile-banner.png" style={{width: '105%'}}/>
      	</div>
      </div>
    </div>
    );

  }
}

export default SecondPage;

//<h1 style={{fontFamily: 'Crimson Text'}}>Second Page</h1>
//        <h1>Second Text</h1>
//      <h1 style={{fontFamily:'Arizonia'}}>Arizonia</h1>
//    <h1 style={{fontFamily:'great vibes'}}>Great Vibes</h1>
//  <h1 style={{fontFamily:'Qwigley'}}>Qwigley</h1>
