import React, { Component } from 'react';

class Headingf8 extends Component {
  render() {
    
    return (
    	<div>
    		<div className="container">
    			<div className="nav navbar navbar-fixed-bottom bgc">
    				<div className="col-md-12">
    					<div className="col-md-1"></div>
    					<div className="col-md-3">
    						<ul className="nav navbar navbar-left customhover">
    							<li className="head"><a href="#" className="nav">HOME</a></li>
        						<li className="head"><a href="#" className="nav">PRODUCT</a></li>
        						<li className="head"><a href="#" className="nav">TESTIMONIALS</a></li>
        						<li className="head"><a href="#" className="nav">MY PROFILE</a></li>
    						</ul>
    					</div>
    					<div className="col-md-4">
    						<h2>Social Media</h2>
    						<i class="fab fa-facebook-square"></i>&emsp;
    						<i class="fab fa-pinterest"></i>&emsp;
    						<i class="fab fa-twitter-square"></i>
    					</div>
    					<div className="col-md-4">
    						<a href="#"><img src="./images/Drent-logo-white.png" style={{width: '80%'}}/></a>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    );

  }
}

export default Headingf8;