import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Header from '../home/Header';
import Footer from '../home/headingf8';
import UpCommingOrder from './upCommingOrder';
import OrderHistory from './orderHistory';
import Profile from './profile';
import UploadDress from './uploadDress';
import SeeChart from './seeChart';

class Order extends Component {
	constructor(props) {
		super(props);
		this.state = {
                  arr: [      			
          			{profile: false},
      			{uploadDress: false}
                  ],
                  orderTabs: [
                        {currentRentals: false},
                        {currentRented: false},
                        {orderHis: false},
                  ]
		}
	}

      componentDidMount(){
            const { goTo } = this.props.location.state,
            { arr, orderTabs } = this.state;
            if(goTo == 'profile'){
                  this.renderWithState(goTo, arr);
            }else{
                  this.renderWithState(goTo, orderTabs);
            }            
      }

      renderWithState(goTo, arr){            
            arr = arr.map((elem) => {
                  let key = Object.keys(elem)[0];
                  if(key == goTo){
                        return {[key]: true}                    
                  }else {
                        return {[key]: false} 
                  }
            })
            if(arr.length == 2){
                  this.setState({ arr }); 
            }else{
                  this.setState({ orderTabs: arr });
            }
      }

  	render() {
            const { arr, orderTabs } = this.state,
            { goTo } = this.props.location.state;
            console.log(arr, orderTabs, 'hello brotherrrr')

          return (
              <div>
      		<div className="App" style={{marginTop: '110px'}}>
      			<div className="container">
      				<div className="row  hidden-xs hidden-sm">
      					{/*<div className="col-md-1"></div>*/}
      					{goTo == 'currentRentals' && <div className="col-md-4 col-sm-4" style={{textAlign: 'center'}}>
      						<h4 className="order" onClick={this.renderWithState.bind(this, "currentRentals", orderTabs)} style={{color: '#c2073f'}}>Current Rentals</h4>
      					</div>}
      					{/*<div className="col-md-1"></div>*/}
      					{goTo == 'currentRentals' && <div className="col-md-4 col-sm-3" style={{textAlign: 'center'}}>
      						<h4 className="order" onClick={this.renderWithState.bind(this, "currentRented", orderTabs)} style={{color: '##c2073f'}}>Current Rented</h4>
      					</div>}
                                    {goTo == 'currentRentals' && <div className="col-md-4 col-sm-3" style={{textAlign: 'center'}}>
                                          <h4 className="order" onClick={this.renderWithState.bind(this, "orderHis", orderTabs)} style={{color: '##c2073f'}}>Order History</h4>
                                    </div>}
      					{/*<div className="col-md-1"></div>*/}
      					{goTo == 'profile' && <div className="col-md-6 col-sm-1" style={{textAlign: 'center'}}>
						      <h4 className="order" onClick={this.renderWithState.bind(this, "profile", arr)} style={{color: '#c2073f'}}>Profile</h4>
      					</div>}
      					{/*<div className="col-md-2 col-sm-1"></div>*/}
      					{goTo == 'profile' && <div className="col-md-6 col-sm-3" style={{textAlign: 'center'}}>
      						<h4 className="order" onClick={this.renderWithState.bind(this, "uploadDress", arr)} style={{color: '##c2073f'}}>Upload Dress</h4>
      					</div>}
      					{/*<div className="col-md-2"></div>*/}
      				</div>
      					<hr className="hidden-xs hidden-sm" style={{borderTop:'2px solid #c2073f'}}/>

      				<div className="row  visible-sm">
      					{/*<div className="col-sm-1"></div>
      					<div className="col-sm-3">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "upComing")} style={{color: '#c2073f'}}><u>Upcomming Order</u></h5>
      					</div>
      					<div className=""></div>
      					<div className="col-sm-2">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "orderHis")} style={{color: '#c2073f'}}>Order History</h5>
      					</div>*/}
      					<div className="col-sm-1"></div>
      					<div className="col-sm-1">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "profile")} style={{color: '#c2073f'}}>Profile</h5>
      					</div>
      					<div className="col-sm-1"></div>
      					<div className="col-sm-3">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "uploadDress")} style={{color: '#c2073f'}}>Upload Dress</h5>
      					</div>
      					<div className="col-sm-1"></div>
      				</div>
      					<hr className="visible-sm" style={{borderTop:'2px solid #c2073f'}}/>

      				<div className="row visible-xs">
						<div className="nav-side-menu">
				        	<div className="menu-list">
				           		{/*<ul>
      				                	<li onClick={this.renderWithState.bind(this, "upComing")}>
      				                  	<a><i className="fa fa-dashboard fa-lg"></i> Upcomming Order</a>
      				                	</li>
				           		</ul>
				            	<ul>
      				                	<li onClick={this.renderWithState.bind(this, "orderHis")}>
      				                 		<a><i className="fa fa-dashboard fa-lg"></i> Order History</a>
      			                  	</li>
				            	</ul>*/}
				            	<ul>
      				                	<li onClick={this.renderWithState.bind(this, "profile")}>
      				                		<a><i className="fa fa-dashboard fa-lg"></i> Profile</a>
      				                	</li>
				            	</ul>
				            	<ul>
      				                	<li onClick={this.renderWithState.bind(this, "uploadDress")}>
      				                		<a><i className="fa fa-dashboard fa-lg"></i> Upload Dress</a>
      				                	</li>
				            	</ul>
				     		</div>
						</div>
					</div>
					{orderTabs[0].currentRentals && <UpCommingOrder {...this.props}/>}
					{orderTabs[1].currentRented && <OrderHistory {...this.props}/>}
                              {orderTabs[2].orderHis && <OrderHistory {...this.props}/>}
					{arr[0].profile && <Profile {...this.props}/>}
					{arr[1].uploadDress && <UploadDress {...this.props}/>}
				</div>
      		</div>      	
      	</div>
      );

  }
}

export default Order;
