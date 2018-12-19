import React, { Component } from 'react';

class FirstPage extends Component {
  render() {
    
    return (
      <div>
      	<div className="nav navbar navbar-fixed-top bgc">
      		<div className="container-fluid">
      			<div className="col-md-4">
      				<div className="navbar-header">
      					<a href="#"><img src="./images/Drent-logo-white.png" style={{width: '40%'}}/></a>
      				</div>
      			</div>
      		<div className="container-fluid">
      			<div className="col-md-8  container customhover">
      				<ul className="nav navbar-nav navbar-right customhover">
      					<li className="head"><a href="#" className="nav">HOME</a></li>
        				<li className="head"><a href="#" className="nav">PRODUCT</a></li>
        				<li className="head"><a href="#" className="nav">TESTIMONIALS</a></li>
        				<li className="head"><a href="#" className="nav">MY PROFILE</a></li>
      				</ul>
      			</div>
      		</div>
      		</div>
      	</div>

      </div>
    );

  }
}

export default FirstPage;

{/*<div className="row">
      		 	<div className="col-md-6" style={{backgroundColor: "black"}}>
      		 		<div className="row">
      		 			<div className="col-md-4">
      		 				<img src="./images/Drent-logo-white.png" style={{width: '100%'}}/>
      		 			</div>
      		 			<div className="col-md-4"></div>
      		 			<div className="col-md-4"></div>
      		 		</div>
      		 	</div>
      		 	<div className="col-md-6" style={{height: '129px'}}>
      		 		<div className="row">
      		 			<div className="col-md-1" style={{backgroundColor: "yellow", height: '129px'}}></div>
      		 			<div className="col-md-10" style={{backgroundColor: "black", height: '129px'}}>
      		 				<div className="row">
		      		 			<div className="col-md-3"></div>
		      		 			<div className="col-md-3"></div>
		      		 			<div className="col-md-3"></div>
		      		 			<div className="col-md-3"></div>
		      		 		</div>
      		 			</div>
      		 			<div className="col-md-1" style={{backgroundColor: "blue", height: '129px'}}></div>
      		 		</div>
      		 	</div>
      		</div>*/}