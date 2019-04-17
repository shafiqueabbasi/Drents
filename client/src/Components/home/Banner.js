import React, { Component } from 'react';

class SecondPage extends Component {
  render() {

    return (
    <div>
      <div className="row App B_H hidden-xs">
      	<div className="row Banner">
      		<img alt="" src="../images/Banner-2.jpg" style={{width: '100%'}}/>
      	</div>
      </div>
      <div className="App B_H visible-xs">
      	<div className="Banner">
      		<img alt="" src="../images/Banner-2.jpg" style={{width: '100%'}}/>
      	</div>
      </div>
    </div>
    );

  }
}

export default SecondPage;
