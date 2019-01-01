import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Header from '../home/Header';
import Footer from '../home/headingf8';
import UpCommingOrder from './upCommingOrder';
import OrderHistory from './orderHistory';
import Profile from './profile';
import UploadDress from './uploadDress';
import seeChart from './seeChart';

class Order extends Component {
	constructor(props) {
		super(props);
		this.state = {
			upComing: false,
			orderHis: false,
			profile: false,
			uploadDress: true
		}
	}

  	render() {
    
    return (
        <div>
      		<div className="App" style={{marginTop: '110px'}}>
      		<Header displayIcon={true}/>
      			<div className="container">
      				<div className="row  hidden-xs hidden-sm">
      					<div className="col-md-1 col-md-1"></div>
      					<div className="col-md-2 col-sm-4">
      						<h4 className="order" onClick={() => this.setState({upComing: true, orderHis: false, profile: false,uploadDress: false})} style={{color: '#c2o72f'}}><u>Upcomming Order</u></h4>
      					</div>
      					<div className="col-md-1"></div>
      					<div className="col-md-2 col-sm-3">
      						<h4 className="order" onClick={() => this.setState({orderHis: true, upComing: false, profile: false,uploadDress: false})} style={{color: '#c2o72f'}}>Order History</h4>
      					</div>
      					<div className="col-md-1"></div>
      					<div className="col-md-2 col-sm-1">
      						<h4 className="order" onClick={() => this.setState({orderHis: false, upComing: false, profile: true,uploadDress: false})} style={{color: '#c2o72f'}}>Profile</h4>
      					</div>
      					<div className="col-md-2 col-sm-1"></div>
      					<div className="col-md-2 col-sm-3">
      						<h4 className="order" onClick={() => this.setState({orderHis: false, upComing: false, profile: false,uploadDress: true})} style={{color: '#c2o72f'}}>Upload Dress</h4>
      					</div>
      					<div className="col-md-2"></div>
      				</div>
      					<hr className="hidden-xs hidden-sm" style={{borderTop:'2px solid #c2073f'}}/>








      				<div className="row  visible-sm">
      					<div className="col-sm-1"></div>
      					<div className="col-sm-3">
      						<h5 className="order" onClick={() => this.setState({upComing: true, orderHis: false, profile: false,uploadDress: false})} style={{color: '#c2o72f'}}><u>Upcomming Order</u></h5>
      					</div>
      					<div className=""></div>
      					<div className="col-sm-2">
      						<h5 className="order" onClick={() => this.setState({orderHis: true, upComing: false, profile: false,uploadDress: false})} style={{color: '#c2o72f'}}>Order History</h5>
      					</div>
      					<div className="col-sm-1"></div>
      					<div className="col-sm-1">
      						<h5 className="order" onClick={() => this.setState({orderHis: false, upComing: false, profile: true,uploadDress: false})} style={{color: '#c2o72f'}}>Profile</h5>
      					</div>
      					<div className="col-sm-1"></div>
      					<div className="col-sm-3">
      						<h5 className="order" onClick={() => this.setState({orderHis: false, upComing: false, profile: false,uploadDress: true})} style={{color: '#c2o72f'}}>Upload Dress</h5>
      					</div>
      					<div className="col-sm-1"></div>
      				</div>
      					<hr className="visible-sm" style={{borderTop:'2px solid #c2073f'}}/>







      				<div className="row visible-xs">
						<div className="nav-side-menu">
				        	<div className="menu-list">
				           		<ul>
				                	<li>
					                  	<a href="#"><i className="fa fa-dashboard fa-lg"></i> Upcomming Order</a>
				                	</li>
				           		</ul>
				            	<ul>
				                	<li>
				                 		<a href="#"><i className="fa fa-dashboard fa-lg"></i> Order History</a>
				                  	</li>
				            	</ul>
				            	<ul>
				                	<li>
				                		<a href="#"><i className="fa fa-dashboard fa-lg"></i> Profile</a>
				                	</li>
				            	</ul>
				            	<ul>
				                	<li>
				                		<a href="#"><i className="fa fa-dashboard fa-lg"></i> Upload Dress</a>
				                	</li>
				            	</ul>
				     		</div>
						</div>
					</div>
					{this.state.upComing && <UpCommingOrder/>}
					{this.state.orderHis && <OrderHistory/>}
					{this.state.profile && <Profile/>}
					{this.state.uploadDress && <UploadDress/>}
					
					
				</div>
      		</div>
      		<Footer/>
      	</div>
    );

  }
}

export default Order;