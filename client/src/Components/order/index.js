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
      		<div className="" style={{marginTop: '110px'}}>
      			<div className="container">
      				<div className="row">
                                    {goTo == 'currentRentals' && <div className="col-sm-2 col-md-2 col-lg-2"></div>}

      					{goTo == 'currentRentals' && <div className="col-sm-2 col-md-2 col-lg-2">
      						<button 
                                                className="rental_btn" 
                                                onClick={this.renderWithState.bind(this, "currentRentals", orderTabs)} 
                                                style={orderTabs[0].currentRentals ? {textAlign: 'center', backgroundColor:'#cb9d6c', color: 'rgb(71, 52, 99)', fontFamily: 'playfair display', fontSize:'13px'} : {textAlign: 'center'}}>
                                                Current Rentals
                                          </button>
      					</div>}

                                    {goTo == 'currentRentals' && <div className="col-sm-1 col-md-1 col-lg-1"></div>}

      					{goTo == 'currentRentals' && <div className="col-sm-2 col-md-2 col-lg-2">
      						<button 
                                                className="rental_btn" 
                                                onClick={this.renderWithState.bind(this, "currentRented", orderTabs)} 
                                                style={orderTabs[1].currentRented ? {textAlign: 'center', backgroundColor:'#cb9d6c', color: 'rgb(71, 52, 99)', fontFamily: 'playfair display', fontSize:'13px'} : {textAlign: 'center'}}>
                                                Current Rented
                                          </button>
      					</div>}

                                    {goTo == 'currentRentals' && <div className="col-sm-1 col-md-1 col-lg-1"></div>}

                                    {goTo == 'currentRentals' && <div className="col-sm-2 col-md-2 col-lg-2">
                                          <button 
                                                className="rental_btn" 
                                                onClick={this.renderWithState.bind(this, "orderHis", orderTabs)} 
                                                style={orderTabs[2].orderHis ? {textAlign: 'center', backgroundColor:'#cb9d6c', color: 'rgb(71, 52, 99)', fontFamily: 'playfair display', fontSize:'13px'} : {textAlign: 'center'}}>
                                                Order History
                                          </button>
                                    </div>}

                                    {goTo == 'currentRentals' && <div className="col-sm-1 col-md-2 col-lg-2"></div>}
                              </div>
                        </div>            	
                        <div className="row" style={{margin:'0px'}}>
                              {goTo == 'profile' && <div className="col-sm-2 col-md-2 col-lg-2"></div>}
                              {goTo == 'profile' && <div className="col-sm-3 col-md-4 col-lg-4">
                                    <p className="profile_editHead">Edit Profile</p>
                              </div>}    
					{goTo == 'profile' && <div className="col-sm-2 col-md-1 col-lg-1">
					      <button 
                                          className="btn_profile" 
                                          onClick={this.renderWithState.bind(this, "profile", arr)}
                                           style={arr[0].profile ? {textAlign: 'center', backgroundColor:'#cb9d6c', color: 'rgb(71, 52, 99)', fontFamily: 'playfair display', fontSize:'15px'} : {textAlign: 'center'}}
                                          >Profile
                                    </button>
					</div>}
					{goTo == 'profile' && <div className="col-sm-3 col-md-2 col-lg-2" >
						<button 
                                          className="btn_updress" 
                                          onClick={this.renderWithState.bind(this, "uploadDress", arr)} 
                                          style={arr[1].uploadDress ? {textAlign: 'center', backgroundColor:'#cb9d6c', color: 'rgb(71, 52, 99)', fontFamily: 'playfair display', fontSize:'15px'} : {textAlign: 'center'}}
                                          >Upload Dress
                                    </button>
					</div>}
                              {goTo == 'profile' && <div className="col-sm-2 col-md-3 col-lg-3"></div>}
				</div>			
				{orderTabs[0].currentRentals && <UpCommingOrder filterData={() => this.filterDataWithStatus()} rentals={rentals} take={true}/>}
				{orderTabs[1].currentRented && <UpCommingOrder filterData={() => this.filterDataWithStatus()} rented={rented} take={false}/>}
                        {orderTabs[2].orderHis && <OrderHistory historyData={historyData}/>}
				{arr[0].profile && <Profile {...this.props}/>}
				{arr[1].uploadDress && <UploadDress {...this.props}/>}
      		</div>      	
      	</div>
      );

  }
}

export default Order;
