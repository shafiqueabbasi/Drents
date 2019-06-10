import React, { Component } from 'react';
import './home.css';

class Scrollimage extends Component {
  	render() {
    return (
    	<div>
    			<div className="row" style={{margin:'0px'}}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{textAlign:'center'}}>
                    <img src="../images/scroll-logo.png" className="scrollimag"/>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
              </div>
    	</div>
    	);

  }
}

export default Scrollimage;