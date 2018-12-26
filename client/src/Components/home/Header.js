import React, { Component } from 'react';

class FirstPage extends Component {
  render() {
    
    return (
      <div>
      	<div className="nav navbar navbar-fixed-top bgc" style={{display:"none"}}>
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
                {this.props.displayIcon && <li className="head"><a href="#" className="nav"><img src="./images/bag.png" style={{marginTop:'-5px'}}/></a></li>}
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
