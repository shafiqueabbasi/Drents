import React, { Component } from 'react';
import './home.css';


class Heading4New extends Component {
  render() {
    
    return (
    	<div>
    		<div className="container">
    			<div className="row">
    				<p className="featuresub">FEATURED</p>
    				<p className="featuredhead">Featured Rental</p>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
    				<img src="../images/pink-shirt-01.png" className="imgwidth"/>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
    				<img src="../images/black-shirt-01.png" className="imgwidth"/>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
    				<img src="../images/geometric-shirt-01.png" className="imgwidth"/>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
    				<img src="../images/pink-01.png" className="imgwidth"/>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
    				<img src="../images/yellow-01.png" className="imgwidth"/>
    			</div>
    			<div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
    		</div>
		</div>
    );

  }
}

export default Heading4New;