import React, { Component } from 'react';

class Headingf8 extends Component {
  render() {
    
    return (
    	<div>
    		<div className="hidden-xs">
    			<div className="nav navbar navbar-bottom bgc">
    				<div className="col-md-12 col-sm-12">
    					<div className="col-md-1 col-sm-1"></div>
    					<div className="col-md-3 col-sm-3">
    						<ul className="nav navbar navbar-left customhover">
    							<li className="head"><a href="#" className="nav">HOME</a></li>
        						<li className="head"><a href="#" className="nav">PRODUCT</a></li>
        						<li className="head"><a href="#" className="nav">TESTIMONIALS</a></li>
        						<li className="head"><a href="#" className="nav">MY PROFILE</a></li>
    						</ul>
    					</div>
    					<div className="col-md-4 col-sm-4">
    						<h3>Social Media</h3>
    						<i className="fab fa-facebook-square"></i>&emsp;
    						<i className="fab fa-pinterest"></i>&emsp;
    						<i className="fab fa-twitter-square"></i>
    					</div>
    					<div className="col-md-4 col-sm-4">
    						<a href="#"><img src="./images/Drent-logo-white.png" style={{width: '80%'}}/></a>
    					</div>
    				</div>
    			</div>
    		</div>

            <div className="visible-xs">
                <div className="nav navbar navbar-bottom bgc">
                    <div className="col-xs-12">
                        <div className="col-xs-3"></div>
                            <div className="row">
                                <ul className="nav navbar navbar-left customhover" style={{textAlign: 'center',fontSize:'12px'}}>
                                    <li className="head"><a href="#" className="nav" style={{fontSize:'12px'}}>HOME</a></li>
                                    <li className="head"><a href="#" className="nav" style={{fontSize:'12px'}}>PRODUCT</a></li>
                                    <li className="head"><a href="#" className="nav" style={{fontSize:'12px'}}>TESTIMONIALS</a></li>
                                    <li className="head"><a href="#" className="nav" style={{fontSize:'12px'}}>MY PROFILE</a></li>
                                </ul>
                            </div>
                        
                            <div className=" row" style={{fontSize:'10px'}}>
                                <div className="col-xs-4"></div>
                                <div className="col-xs-6">
                                    <h3 style={{fontSize: '16px'}}>Social Media</h3>
                                    <i className="fab fa-facebook-square"></i>&emsp;
                                    <i className="fab fa-pinterest"></i>&emsp;
                                    <i className="fab fa-twitter-square"></i>
                                </div>
                        </div>
                        <div className="col-xs-4"></div>
                        <div className="col-xs-4">
                            <a href="#"><img src="./images/Drent-logo-white.png" style={{width: '120%'}}/></a>
                        </div>
                    </div>
                </div>
            </div>
            

    	</div>
    );

  }
}

export default Headingf8;