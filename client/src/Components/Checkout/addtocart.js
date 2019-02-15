import React, { Component } from 'react';
import './addtocart.css'

class Addtocart extends Component {
	render() { 
		return( 
			<div style={{marginTop:'7%'}}>
				<div className="container" style={{width:'55%' , marginLeft: '19%'}}>
					<div className="row">
						<div className="col-md-12 chainbelt1"><span className="chainbelt">Your Cart</span></div>
					</div>	
					<div className="row">
						<div className="col-md-6 chainbelt3">
							<p><span className="chainbelt2">Arrival:Thu 12/40</span></p>
						</div>
						<div className="col-md-6 chainbelt3">
							<p><span className="chainbelt2">Return:Sun 12/23</span></p>
						</div>
					</div><br/>
					<div className="row">
						<div className="col-md-5">
							<img src="../images/pinksharara.jpg" style={{width:"100%", height:"300px"}}/>
						</div>
						<div className="col-md-7">
							<div className="row">
								<h2><span className="chainbelt4">Pink Sharara</span></h2>
							</div>
							<div>
								<h2><span>Size : M</span></h2>
							</div><br/>
							<div className="row">
								<div className="col-md-8">
									<p><span>$5999.99 X 3 Days=</span></p>
								</div>
								<div className="col-md-4">
									<p><span>9999.99</span></p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-5">
									<button className="btn" type="button"><span className="">Confirm Order</span></button>
								</div>
								<div className="col-md-2">s</div>
								<div className="col-md-5">s</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
    );

  }
}

export default Addtocart;