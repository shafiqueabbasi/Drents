import React, { Component } from 'react';

class Heading3 extends Component {
  render() {
    
    return (
    	<div className="App" style={{backgroundColor:'#c2073f'}}>
    		<div className="Heading">
      			<h1 className="headings1" style={{marginBottom:'-1%'}}>How It Works</h1>
      			<img src='./images/bar-white.png' style={{marginTop:'-1%'}}/>
      		</div>

      		<div className="container-fluid">
      			<div className="col-md-12 col-sm-12">
      				<div className="row" style={{textAlign: 'center',margin: '0', marginBottom: '2%'}}>
      					<div className="col-md-4 col-sm-4">
      						<img src="./images/1-lapi.png" className="img-lapi"/>
      							<div className="col-md-12 col-sm-12">
      								<h3 className="h_lapi">Sign up or Register</h3>
      								<p className="p_lapi">Lorem Ipsum is simply dummy of  scrambled it to make a type specimen book.</p>
      							</div>
      					</div>
      					<div className="col-md-4 col-sm-4">
      						<img src="./images/2-lapi.png"/>
      						<div className="col-md-12 col-sm-12">
      								<h3 className="h_lapi">Sign up or Register</h3>
      								<p className="p_lapi">Lorem Ipsum is simply dummy of  scrambled it to make a type specimen book.</p>
      							</div>
      					</div>
      					<div className="col-md-4 col-sm-4">
      						<img src="./images/3-lapi.png"/>
      						<div className="col-md-12 col-sm-12">
      								<h3 className="h_lapi">Sign up or Register</h3>
      								<p className="p_lapi">Lorem Ipsum is simply dummy of  scrambled it to make a type specimen book.</p>
      							</div>
      					</div>
      				</div>
      			</div>
      		</div>
	    	


    	</div>
    );

  }
}

export default Heading3;