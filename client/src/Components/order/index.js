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
import _ from 'underscore';
import { HttpUtils } from  '../../Service/HttpUtils';

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
                  ],
                  rented: [],
                  rentals: [],
                  historyData: [],
                  loading: true
		}
	}

      componentDidMount(){
            const { goTo, orderhistory, id } = this.props.location.state,
            { arr, orderTabs } = this.state;
            if(goTo == 'profile' || goTo == 'uploadDress'){
                  this.renderWithState(goTo, arr);
            }else{
                  this.renderWithState(goTo, orderTabs);
            }
            this.filterDataWithStatus();            
      }

      async filterDataWithStatus(){
            const { id } = this.props.location.state;
            let data = await HttpUtils.post('getprofiledress', {userId: id}),
            historyData = [],
            rented = [],
            rentals = [];
            data.orderhistory.length > 0 && data.orderhistory.map((elem) => {
                  elem.products.map((el) => {
                        let isUser = el.userId === id;
                        if(isUser && ['Completed', 'Available'].includes(el.rentalStage)){
                              historyData.push(this.easyObject(el, elem));
                        }
                        if(isUser && ['Completed', 'Dispatched', ''].includes(el.rentalStage)){
                              rentals.push(this.easyObject(el, elem));
                        }                             
                  });
                  if(elem.userId === id){
                        elem.products.map((el) => {
                              if(['Completed', 'Available'].includes(el.rentalStage)){
                                    historyData.push(this.easyObject(el, elem));
                              }else if(!['Completed', 'Available'].includes(el.rentalStage)){
                                    rented.push(this.easyObject(el, elem));
                              }                                   
                        })                            
                  }
            })
            rented = _.flatten(rented);
            historyData = _.flatten(historyData);
            rentals = _.flatten(rentals);
            this.setState({ rented, historyData, rentals, loading: false });
      }

      easyObject(el, elem){
            return {...el, ...{
                  amount: elem.amount,
                  date: elem.date,
                  buyerEmail: elem.email,
                  buyerName: elem.name,
                  buyerId: elem.userId,
                  dataId: elem._id,
                  reviewId: elem.reviewId
            }}
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
            const { arr, orderTabs, rented, historyData, rentals } = this.state,
            { goTo } = this.props.location.state;

          return (
              <div>
                  {this.state.loading && <div className="loading">Loading&#8230;</div>}
      		<div className="App" style={{marginTop: '110px'}}>
      			<div className="container">
      				<div className="row  hidden-xs hidden-sm">
      					{/*<div className="col-md-1"></div>*/}
      					{goTo == 'currentRentals' && <div className="col-md-4 col-sm-4" style={{textAlign: 'center'}}>
      						<h4 className="order" onClick={this.renderWithState.bind(this, "currentRentals", orderTabs)} style={{fontFamily: 'crimsontext',color: '#c2073f'}}>Current Rentals</h4>
      					</div>}
      					{/*<div className="col-md-1"></div>*/}
      					{goTo == 'currentRentals' && <div className="col-md-4 col-sm-3" style={{textAlign: 'center'}}>
      						<h4 className="order" onClick={this.renderWithState.bind(this, "currentRented", orderTabs)} style={{fontFamily: 'crimsontext',color: '##c2073f'}}>Current Rented</h4>
      					</div>}
                                    {goTo == 'currentRentals' && <div className="col-md-4 col-sm-3" style={{textAlign: 'center'}}>
                                          <h4 className="order" onClick={this.renderWithState.bind(this, "orderHis", orderTabs)} style={{fontFamily: 'crimsontext',color: '##c2073f'}}>Order History</h4>
                                    </div>}
      					{/*<div className="col-md-1"></div>*/}
      					{goTo == 'profile' && <div className="col-md-6 col-sm-1" style={{textAlign: 'center'}}>
						      <h4 className="order" onClick={this.renderWithState.bind(this, "profile", arr)} style={{fontFamily: 'crimsontext',color: '#c2073f'}}>Profile</h4>
      					</div>}
      					{/*<div className="col-md-2 col-sm-1"></div>*/}
      					{goTo == 'profile' && <div className="col-md-6 col-sm-3" style={{textAlign: 'center'}}>
      						<h4 className="order" onClick={this.renderWithState.bind(this, "uploadDress", arr)} style={{fontFamily: 'crimsontext',color: '##c2073f'}}>Upload Dress</h4>
      					</div>}
      					{/*<div className="col-md-2"></div>*/}
      				</div>
      					<hr className="hidden-xs hidden-sm" style={{borderTop:'2px solid #c2073f'}}/>

      				<div className="row  visible-sm">      					
                                    {goTo == 'currentRentals' && <div className="col-sm-4" style={{textAlign: 'center'}}>
                                          <h5 className="order" onClick={this.renderWithState.bind(this, "currentRentals", orderTabs)} style={{fontFamily: 'crimsontext',color: '#c2073f'}}>Current Rentals</h5>
                                    </div>}
      					{goTo == 'profile' && <div className="col-sm-6" style={{textAlign: 'center'}}>
      						<h5 className="order" onClick={this.renderWithState.bind(this, "profile", arr)} style={{fontFamily: 'crimsontext',color: '#c2073f'}}>Profile</h5>
      					</div>}
                                    {goTo == 'currentRentals' && <div className="col-sm-4" style={{textAlign: 'center'}}>
                                          <h5 className="order" onClick={this.renderWithState.bind(this, "currentRented", orderTabs)} style={{fontFamily: 'crimsontext',color: '#c2073f'}}>Current Rented</h5>
                                    </div>}
      					{goTo == 'profile' && <div className="col-sm-6" style={{textAlign: 'center'}}>
      						<h5 className="order" onClick={this.renderWithState.bind(this, "uploadDress", arr)} style={{fontFamily: 'crimsontext',color: '#c2073f'}}>Upload Dress</h5>
      					</div>}
                                    {goTo == 'currentRentals' && <div className="col-sm-4" style={{textAlign: 'center'}}>
                                          <h5 className="order" onClick={this.renderWithState.bind(this, "orderHis", orderTabs)} style={{fontFamily: 'crimsontext',color: '#c2073f'}}>Order History</h5>
                                    </div>}
      				</div>
      					<hr className="visible-sm" style={{borderTop:'2px solid #c2073f'}}/>

      				<div className="row visible-xs">
						<div className="nav-side-menu">
				        	<div className="menu-list">
				           		{goTo == 'currentRentals' && <ul style={{textAlign: 'center'}}>
      				                	<li onClick={this.renderWithState.bind(this, "currentRentals", orderTabs)}>
      				                  	<a style={{fontFamily: 'crimsontext',}}><i className="fa fa-dashboard fa-lg"></i>Current Rentals</a>
      				                	</li>
				           		</ul>}
                                          {goTo == 'currentRentals' && <ul style={{textAlign: 'center'}}>
                                                <li onClick={this.renderWithState.bind(this, "currentRented", orderTabs)}>
                                                      <a style={{fontFamily: 'crimsontext',}}><i className="fa fa-dashboard fa-lg"></i>Current Rented</a>
                                                </li>
                                          </ul>}
				            	{goTo == 'currentRentals' && <ul style={{textAlign: 'center'}}>
      				                	<li onClick={this.renderWithState.bind(this, "orderHis", orderTabs)}>
      				                 		<a style={{fontFamily: 'crimsontext',}}><i className="fa fa-dashboard fa-lg"></i>Order History</a>
      			                  	</li>
				            	</ul>}
				            	{goTo == 'profile' && <ul style={{textAlign: 'center'}}>
      				                	<li onClick={this.renderWithState.bind(this, "profile", arr)}>
      				                		<a style={{fontFamily: 'crimsontext',}}><i className="fa fa-dashboard fa-lg"></i> Profile</a>
      				                	</li>
				            	</ul>}
				            	{goTo == 'profile' && <ul style={{textAlign: 'center'}}>
      				                	<li onClick={this.renderWithState.bind(this, "uploadDress", arr)}>
      				                		<a style={{fontFamily: 'crimsontext',}}><i className="fa fa-dashboard fa-lg"></i> Upload Dress</a>
      				                	</li>
				            	</ul>}
				     		</div>
						</div>
					</div>
					{orderTabs[0].currentRentals && <UpCommingOrder filterData={() => this.filterDataWithStatus()} rentals={rentals} take={true}/>}
					{orderTabs[1].currentRented && <UpCommingOrder filterData={() => this.filterDataWithStatus()} rented={rented} take={false}/>}
                              {orderTabs[2].orderHis && <OrderHistory historyData={historyData}/>}
					{arr[0].profile && <Profile {...this.props}/>}
					{arr[1].uploadDress && <UploadDress {...this.props}/>}
				</div>
      		</div>      	
      	</div>
      );

  }
}

export default Order;
