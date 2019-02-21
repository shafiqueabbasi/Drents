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
      			{upComing: false},
      			{orderHis: false},
          			{profile: false},
      			{uploadDress: true}
                  ]
		}
	}

      componentDidMount(){
            const { goTo } = this.props.location.state;
            this.renderWithState(goTo);
      }

      renderWithState(goTo){
            let { arr } = this.state;
            arr = arr.map((elem) => {
                  let key = Object.keys(elem)[0];
                  if(key == goTo){
                        return {[key]: true}                    
                  }else {
                        return {[key]: false} 
                  }
            })
            this.setState({ arr }) 
      }

  	render() {
            console.log(this.state.arr, 'hello brotherrrr')
            const { arr } = this.state;
          return (
              <div>
      		<div className="App" style={{marginTop: '110px'}}>
      			<div className="container">
      				<div className="row  hidden-xs hidden-sm">
      					<div className="col-md-1 col-md-1"></div>
      					<div className="col-md-2 col-sm-4">
      						<h4 className="order" onClick={this.renderWithState.bind(this, "upComing")} style={{color: '#c2o72f'}}><u>Upcomming Order</u></h4>
      					</div>
      					<div className="col-md-1"></div>
      					<div className="col-md-2 col-sm-3">
      						<h4 className="order" onClick={this.renderWithState.bind(this, "orderHis")} style={{color: '#c2o72f'}}>Order History</h4>
      					</div>
      					<div className="col-md-1"></div>
      					<div className="col-md-2 col-sm-1">
      						<h4 className="order" onClick={this.renderWithState.bind(this, "profile")} style={{color: '#c2o72f'}}>Profile</h4>
      					</div>
      					<div className="col-md-2 col-sm-1"></div>
      					<div className="col-md-2 col-sm-3">
      						<h4 className="order" onClick={this.renderWithState.bind(this, "uploadDress")} style={{color: '#c2o72f'}}>Upload Dress</h4>
      					</div>
      					<div className="col-md-2"></div>
      				</div>
      					<hr className="hidden-xs hidden-sm" style={{borderTop:'2px solid #c2073f'}}/>

      				<div className="row  visible-sm">
      					<div className="col-sm-1"></div>
      					<div className="col-sm-3">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "upComing")} style={{color: '#c2o72f'}}><u>Upcomming Order</u></h5>
      					</div>
      					<div className=""></div>
      					<div className="col-sm-2">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "orderHis")} style={{color: '#c2o72f'}}>Order History</h5>
      					</div>
      					<div className="col-sm-1"></div>
      					<div className="col-sm-1">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "profile")} style={{color: '#c2o72f'}}>Profile</h5>
      					</div>
      					<div className="col-sm-1"></div>
      					<div className="col-sm-3">
      						<h5 className="order" onClick={this.renderWithState.bind(this, "uploadDress")} style={{color: '#c2o72f'}}>Upload Dress</h5>
      					</div>
      					<div className="col-sm-1"></div>
      				</div>
      					<hr className="visible-sm" style={{borderTop:'2px solid #c2073f'}}/>

      				<div className="row visible-xs">
						<div className="nav-side-menu">
				        	<div className="menu-list">
				           		<ul>
      				                	<li onClick={this.renderWithState.bind(this, "upComing")}>
      				                  	<a ><i className="fa fa-dashboard fa-lg"></i> Upcomming Order</a>
      				                	</li>
				           		</ul>
				            	<ul>
      				                	<li onClick={this.renderWithState.bind(this, "orderHis")}>
      				                 		<a><i className="fa fa-dashboard fa-lg"></i> Order History</a>
      			                  	</li>
				            	</ul>
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
					{arr[0].upComing && <UpCommingOrder/>}
					{arr[1].orderHis && <OrderHistory {...this.props}/>}
					{arr[2].profile && <Profile {...this.props}/>}
					{arr[3].uploadDress && <UploadDress {...this.props}/>}
				</div>
      		</div>      	
      	</div>
      );

  }
}

export default Order;
