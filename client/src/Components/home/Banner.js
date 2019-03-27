import React, { Component } from 'react';

class SecondPage extends Component {
  render() {

    return (
    <div>
      <div className="row App hidden-xs" style={{marginTop: '88px'}}>
      	<div className="row Banner">
      		<img alt="" src="./images/Banner.png" style={{width: '100%'}}/>
      	</div>
      </div>
      <div className="App visible-xs" style={{marginTop:'14%'}}>
      	<div className="Banner">
      		<img alt="" src="./images/mobile-banner.png" style={{width: '100%'}}/>
      	</div>
      </div>
    </div>
    );

  }
}

export default SecondPage;
