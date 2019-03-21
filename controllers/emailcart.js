import React, { Component } from 'react';

class Emailcart extends Component {
	render() {
		return(
		<div>
			<div className="row" style={{backgroundColor:'#c2073f',textAlign:'center'}}>
				<img src="../images/Drent-logo-white.png" style={{height:'120px'}} />
			</div>
			<div className="row" style={{textAlign:'center',backgroundImage: "url('https://res.cloudinary.com/dxk0bmtei/image/upload/v1552902878/Drent-logo-white_hmbw7i.png')"}}>
				<h3 style={{color:'#c2073f'}}>Thank You For Sign Up In Drents</h3>
				<h4>Email is Verified</h4>
				<img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1552907380/email-conf-icons-smal_pe5m8b.png" style={{height:'420px'}}/>
			</div>
		</div>

    );

  }
}

export default Emailcart;
