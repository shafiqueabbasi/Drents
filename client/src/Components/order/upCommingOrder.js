import React, { Component } from 'react';
import Header from '../home/Header';
import Footer from '../home/headingf8';

class UpCommingOrder extends Component {
  render() {
    
    return (
      	<div>
      		<div className="App" style={{marginTop: '110px'}}>
      		<Header displayIcon={true}/>
      			<div className="container">
      				<div className="row  hidden-xs">
      					<div className="col-md-2 "></div>
      					<div className="col-md-2 col-sm-4">
      						<h4 className="order"><u>Upcomming Order</u></h4>
      					</div>
      					<div className="col-md-1"></div>
      					<div className="col-md-2 col-sm-4">
      						<h4 className="order">Order History</h4>
      					</div>
      					<div className="col-md-1"></div>
      					<div className="col-md-2 col-sm-4">
      						<h4 className="order">Profile</h4>
      					</div>
      					<div className="col-md-2"></div>
      					

      				</div>
      				<hr className="hidden-xs" style={{borderTop:'2px solid #c2073f'}}/>
      				<div className="row visible-xs">
					<div className="nav-side-menu">
				        <div className="menu-list">
				            <ul>
				                <li>
				                  <a href="#">
				                  <i className="fa fa-dashboard fa-lg"></i> Upcomming Order
				                  </a>
				                </li>
				            </ul>
				            <ul>
				                <li>
				                  <a href="#">
				                  <i className="fa fa-dashboard fa-lg"></i> Order History
				                  </a>
				                </li>
				            </ul>
				            <ul>
				                <li>
				                  <a href="#">
				                  <i className="fa fa-dashboard fa-lg"></i> Profile
				                  </a>
				                </li>
				            </ul>
				     	</div>
					</div>
      				
      			</div>
				
					
  				</div>
      		</div>
      		<Footer/>
      	</div>


    );

  }
}

export default UpCommingOrder;
