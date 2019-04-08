import React, { Component } from 'react';
import { HttpUtils } from  '../../Service/HttpUtils';
import CommentCard from '../productdetail/commentCard';
import { Rate } from '../_components/myInput';
import Report from './report';

import { connect } from 'react-redux';

class UpCommingOrder extends Component {
	constructor(props){
		super(props);
		this.state = {
			// rentals: this.props.rentals,
			// rented: this.props.rented,
			passToReport: {},
			showReviewBox: false,
			e: '',
			elem: '',
			take: this.props.take,
			buyer: ['Received', 'Returned'],
	    	seller: ['Dispatched', 'Completed', 'Available'],
		}
	}

	componentDidMount(){
		this.showHideFooter();
	}

	componentDidUpdate(prevProps, prevState){
		this.showHideFooter();
	}

	componentWillUnmount(){
    	this.props.hideFooter();
    }

 	showHideFooter(){
 		const { rentals, rented, take, showFooter, hideFooter } = this.props;
		let arr = take ? rentals : rented;
		if(arr.length === 0){
            showFooter();
        }else if(arr.length > 0){
        	hideFooter();
        }
 	}

	changeDropdown(e, elem){
		let text = e.target.innerText;
		if(['Completed', 'Returned'].includes(text)){
			this.setState({ e: text, elem, showReviewBox: true });	
		}else {
			this.setState({ e: text, elem, showReviewBox: false });
		}			
	}

	cancelStatus(){
		this.setState({ e: '', elem: '' });
		document.getElementById("confirmStatus").click();
	}

	changeStatus = async (popUp, reviewId, rate) => {
		document.getElementById(popUp).click();
		const { elem } = this.state;
		let { take, rentals, rented } = this.props,	
		arr = take ? rentals : rented,
		obj = this.makeCodeShort(arr, take, reviewId, rate);			
		let statusRental = await HttpUtils.post('twiliosms', obj);
		alert('Your status updated successfully');		
		this.props.filterData();	
		this.updateStatus(elem._id);		
	}

	makeCodeShort(arr, take, reviewId, rate){
		const { e, elem} = this.state;
		let obj = {},
		msg = `Dress status has changed to ${e}`;				
		arr = arr.map((el) => {
			if(elem._id === el._id){
				let thisRate  = ['Dispatched', 'Received'],
				productRate = thisRate.includes(e) ? '' : e === "Returned" ? rate : elem.productRate;
				if(take){
					el.rentalStage = e;					
				}else {
					el.rentedStage = e;
				}
				obj = {
					reviewId,
					productRate,
					dataId: el.dataId,
					productId: el._id,
					rentalStage: el.rentalStage,
					rentedStage: el.rentedStage,
					forEmail: [
						{ email: el.buyerEmail, msg, name: el.userName, emailTo: el.userEmail },
						{ email: el.userEmail, msg, name: el.buyerName, emailTo: el.buyerEmail  }
					]
				};	
				return el;
			}				
			return el;				

		})
		return obj;
	}

	async updateStatus(_id){
		let obj = {_id, bookedFrom: '', bookedTo: '', status: 'Available'},
		res = await HttpUtils.post('uploaddress', obj, this.props.user.token);
	}

	render() {		
	    const { rentals, rented, take, showFooter, hideFooter } = this.props,
	    { showReviewBox, passToReport } = this.state;	 
	    let arr = take ? rentals : rented,
	    buyer = ['Received', 'Returned'],
	    seller = ['Dispatched', 'Completed', 'Available'],
	    status = take ? seller : buyer;
	    if(arr.length === 0){
            return (
            	<div style={{textAlign: 'center'}}>
            		<h3>no dress</h3>
            	</div>
        	)
 		}
	    
	    return (
    	<div>
    		{arr.map((elem, key) => {
    			let stage = take ? elem.rentalStage : elem.rentedStage,  
    			report = take ? '' : 'Report',  			
    			obj = { 
    				reviewId: elem.reviewId,
    				productId: elem._id, 
    				rentalId: elem.userId, 
    				rentedId: elem.buyerId,
    				rentedName: elem.buyerName,
    				rentalName: elem.userName
				},
				rating = elem.productRate == undefined || elem.productRate == '' ? 0 : +elem.productRate;
    			
    			return (
    				<div key={key} className="row hidden-sm hidden-xs">
						<div className="col-md-2">
							<img alt="" src={elem.fileList[0]} style={{width: '117%'}}/>
						</div>

						<div className="col-md-10">

								<div className="col-md-4">
								<h1 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>{elem.productName}</h1>
								</div>
								<div className="col-md-6" style={{paddingTop: '3%'}}>
									{/*<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span>4.5</span>*/}
									<Rate rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
								</div>
								<div className="col-md-2" style={{paddingTop: '3%'}}>
									<div className="dropdown" style={{textAlign: 'right'}}>
										<button className="btn dropdown-toggle" type="button" data-toggle="dropdown"
										  style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f'}}>{stage && stage.length > 0 ? stage : 'Status'} &emsp;&emsp;
										  <span className="caret"></span></button>

										<ul className="dropdown-menu">
											{status.map((el, k) => {
												return (
													<li data-toggle="modal" key={k}
														data-target="#confirmStatus" 
														onClick={(e) => this.changeDropdown(e, elem)}
													>
														<a>{el}</a>
													</li>
												)												
											})}											
										</ul>
									</div>
								</div>

							<div className="col-md-12 row">
								<div className={report ? "col-md-10" : "col-md-12"} style={{paddingLeft: '0px'}}>
									<h4>Size: {elem.sizes.join(", ")}</h4>
								</div>
								{report && <div className="col-md-2" style={{textAlign: 'center'}}>
									{/*<h4>{report}</h4>*/}
									<Report 
										ind={key} 
										data={passToReport} 
										screen="desktop"
										onClick={(e) => this.setState({ passToReport: elem })}
									/>
								</div>}
								
								<h4>${elem.priceDay}</h4>
							</div><br/><br/><br/>

							<div className="col-md-12">
								<br/><br/>
							</div>


							<div className="col-md-6">
								<h4>${elem.priceDay} X {+elem.rentDay +1} Days = ${elem.amount}</h4>
								{/*<div className="row">
									<div className="col-md-2">
										<h4>Order</h4>
										<h4>19/2/19</h4>
									</div>
									<div className="col-md-2">
										<h4>Return</h4>
										<h4>21/2/19</h4>
									</div>
								</div>*/}
							</div>
						</div>
						<div className="col-md-12 hidden-xs">
							<div className="col-md-2"></div>
							<div className="col-md-8">
								<hr style={{borderTop:'2px solid #c2073f'}}/>
							</div>
							<div className="col-md-2"></div>
						</div>
						<div className="modal fade" id="confirmStatus" role="dialog">
                            <div className="modal-dialog" style={showReviewBox ? {width: '96%'} : {}}>
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title" style={{textAlign:'center', color: 'white'}}>{!showReviewBox ? 'Confirmation' : 'Add Review'}</h4>
                                </div>
                                <div className="modal-body" style={{textAlign:'center', color: 'white'}}>
                                    {!showReviewBox && <span>This will change your status</span>}
                                    {!showReviewBox && <div className="row" style={{marginTop: '10px'}}>
                                    	<div className="col-md-6"></div>
                                    	<div className="col-md-3">
                                    		<button className="btn btn-sm" 
                                    			style={{color:'black', backgroundColor:'white', width: '100%'}}
                                    			onClick={(e) => this.changeStatus("confirmStatus", elem.reviewId)}
                                			>Confirm</button>                                    		
                                    	</div>
                                    	<div className="col-md-3">
                                    		<button className="btn btn-sm" 
                                    			style={{color:'black', backgroundColor:'white', width: '100%'}}
                                    			onClick={(e) => this.cancelStatus()}
                                			>Cancel</button>
                                    	</div>
                                    </div>}
                                    {showReviewBox && <CommentCard obj={obj} popUp={'confirmStatus'} changeStatus={this.changeStatus}/>}
                                </div>

                              </div>
                            </div>
                        </div>
					</div>
				)
    		})}

							{/*<---hidden-sm--->*/}
			{arr.map((elem, key) => {
				let stage = take ? elem.rentalStage : elem.rentedStage,  
				report = take ? '' : 'Report',  			
    			obj = { 
    				reviewId: elem.reviewId,
    				productId: elem._id, 
    				rentalId: elem.userId, 
    				rentedId: elem.buyerId,
    				rentedName: elem.buyerName,
    				rentalName: elem.userName
				},
				rating = elem.productRate == undefined || elem.productRate == '' ? 0 : +elem.productRate;
    			
    			return (
					<div key={key} className="visible-sm ">
						<div className="row">
							<div className=" col-sm-4">
								<img alt="" src={elem.fileList[0]} style={{width: '100%'}}/>
							</div>

							<div className="col-sm-8">
								<div className="row">
									<div className="row col-sm-4">
										<h1 style={{fontFamily: 'Qwigley',fontSize: '41px',color: '#c2o72f'}}>{elem.productName}</h1>
									</div>
									<div className="row">
										<div className="col-sm-4" style={{paddingTop: '4%'}}>											
											<Rate rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
										</div>

										<div className="col-sm-3" style={{paddingTop: '4%'}}>
											<div className="dropdown">
											<button className="btn dropdown-toggle" type="button" data-toggle="dropdown"
												 style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f'}}>{stage && stage.length > 0 ? stage : 'Status'} &emsp;&emsp;
												 <span className="caret"></span></button>

											<ul className="dropdown-menu">
												{status.map((el, k) => {
												return (
													<li data-toggle="modal" key={k}
													data-target="#confirmStatusTab" 
													onClick={(e) => this.changeDropdown(e, elem)}>
														<a>{el}</a>
													</li>
												)												
											})}	
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-5">
									<div className="row">
										<h4>Size: {elem.sizes.join(", ")}</h4>
										<h4>${elem.priceDay}</h4>
									</div>
								</div>
								<div className=""></div>
								<div className="col-sm-2"></div>
								{report && <div className="col-sm-5" style={{textAlign: 'center'}}>
									<Report 
										ind={key} 
										data={passToReport} 
										screen="tab"
										onClick={(e) => this.setState({ passToReport: elem })}
									/>
								</div>}
							</div>
						</div>
						<div className="col-md-12 visible-sm">
							<div className="col-md-2"></div>
							<div className="col-md-8">
								<hr style={{borderTop:'2px solid #c2073f'}}/>
							</div>
							<div className="col-md-2"></div>
						</div>
						<div className="modal fade" id="confirmStatusTab" role="dialog">
                            <div className="modal-dialog" style={showReviewBox ? {width: '86%'} : {}}>
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title" style={{textAlign:'center', color: 'white'}}>{!showReviewBox ? 'Confirmation' : 'Add Review'}</h4>
                                </div>
                                <div className="modal-body" style={{textAlign:'center', color: 'white'}}>
                                    {showReviewBox && <span>This will change your status</span>}
                                    {!showReviewBox && <div className="row" style={{marginTop: '10px'}}>}
                                    	<div className="col-md-6"></div>
                                    	<div className="col-md-3">
                                    		<button className="btn btn-sm" 
                                    			style={{color:'black', backgroundColor:'white', width: '100%'}}
                                    			onClick={(e) => this.changeStatus("confirmStatusTab", elem.reviewId)}
                                			>Confirm</button>                                    		
                                    	</div>
                                    	<div className="col-md-3">
                                    		<button className="btn btn-sm" 
                                    			style={{color:'black', backgroundColor:'white', width: '100%'}}
                                    			onClick={(e) => this.cancelStatus()}
                                			>Cancel</button>
                                    	</div>
                                    </div>}
                                    {showReviewBox && <CommentCard obj={obj} popUp={'confirmStatusTab'} changeStatus={this.changeStatus} />}
                                </div>

                              </div>
                            </div>
                        </div>
					</div>
				</div>
				)
    		})}
				{/*<---hidden-xs--->*/}
			{arr.map((elem, key) => {
				let stage = take ? elem.rentalStage : elem.rentedStage,    	
				report = take ? '' : 'Report',		
    			obj = { 
    				reviewId: elem.reviewId,
    				productId: elem._id, 
    				rentalId: elem.userId, 
    				rentedId: elem.buyerId,
    				rentedName: elem.buyerName,
    				rentalName: elem.userName
				},
				rating = elem.productRate == undefined || elem.productRate == '' ? 0 : +elem.productRate;
    			
    			return (
					<div key={key} className="row">
						<div className="visible-xs">
							<div className="col-xs-2"></div>
								<div className="col-xs-6">
									<img alt="" src={elem.fileList[0]} style={{height: '240px'}}/>
								</div>
						</div>
						<div className="visible-xs col-xs-12">
							<div className="col-xs-2"></div>
								<div className="row">
									<div className="col-xs-"></div>
									<div className="col-xs-8">
										<h1 style={{fontFamily: 'Qwigley',fontSize: '42px'}}>{elem.productName}</h1>
									</div>
									<div className="col-xs-3"></div>
								</div>
								<div className="col-xs-2"></div>
								<div className="col-xs-10">
									{/*<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span className="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span>4.5</span>*/}
									<Rate rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
								</div>
								<div className="col-xs-2"></div>
								<div className="col-xs-10" style={{paddingTop: '3%'}}>
									<div className="dropdown">
										<button className="btn dropdown-toggle" type="button" data-toggle="dropdown"
										  style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f', textAlign: 'right'}}>{stage && stage.length > 0 ? stage : 'Status'} &emsp;&emsp;
										  <span className="caret"></span></button>

										<ul className="dropdown-menu">
											{status.map((el, k) => {
												return (
													<li data-toggle="modal" key={k}
														data-target="#confirmStatusMobile" 
														onClick={(e) => this.changeDropdown(e, elem)}>
														<a>{el}</a>
													</li>
												)												
											})}	
										</ul>
									</div>
								</div>
								<div className="col-xs-2"></div>
								<div className="col-xs-10">
									{report && <div className="row">
										<Report 
											ind={key} 
											data={passToReport} 
											screen="mobile"
											onClick={(e) => this.setState({ passToReport: elem })}
										/>
									</div>}
								</div>
								<div className="col-xs-2"></div>
								<div className="col-xs-10">
									<div className="row">
										<h4>Size: {elem.sizes.join(", ")}</h4>
										<h4>${elem.priceDay}</h4>
									</div>
								</div>
							</div>
							<div className="row visible-xs">
								<div className="col-xs-3"></div>
								{/*<div className="col-xs-6">
									<h4>Order Date</h4>
									<div className="row">
										<div className="col-xs-6">
											<h4>Order</h4>
											<h4>19/2/19</h4>
										</div>
										<div className="col-xs-6">
											<h4>Return</h4>
											<h4>21/2/19</h4>
										</div>
									</div>
								</div>*/}
							</div>
							{/*<div className="col-md-12 hidden-xs">
								<div className="col-md-2"></div>
								<div className="col-md-8">
									<hr style={{borderTop:'2px solid #c2073f'}}/>
								</div>
								<div className="col-md-2"></div>
							</div>*/}
						<div className="col-md-12 visible-xs">
							<div className="col-md-2"></div>
							<div className="col-md-8">
								<hr style={{borderTop:'2px solid #c2073f'}}/>
							</div>
							<div className="col-md-2"></div>
						</div>
						<div className="modal fade" id="confirmStatusMobile" role="dialog">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title" style={{textAlign:'center', color: 'white'}}>{!showReviewBox ? 'Confirmation' : 'Add Review'}</h4>
                                </div>
                                <div className="modal-body" style={{textAlign:'center', color: 'white'}}>
                                    {showReviewBox && <span>This will change your status</span>}
                                    {!showReviewBox && <div className="row" style={{marginTop: '10px'}}>
                                    	<div className="col-md-6"></div>
                                    	<div className="col-md-3">
                                    		<button className="btn btn-sm" 
                                    			style={{color:'black', backgroundColor:'white', width: '100%'}}
                                    			onClick={(e) => this.changeStatus("confirmStatusMobile", elem.reviewId)}
                                			>Confirm</button>                                    		
                                    	</div>
                                    	<div className="col-md-3">
                                    		<button className="btn btn-sm" 
                                    			style={{color:'black', backgroundColor:'white', width: '100%'}}
                                    			onClick={(e) => this.cancelStatus()}
                                			>Cancel</button>
                                    	</div>
                                    </div>}
                                    {showReviewBox && <CommentCard obj={obj} popUp={'confirmStatusMobile'} changeStatus={this.changeStatus} />}
                                </div>
                              </div>
                            </div>
                        </div>

					</div>
				)
    		})}


		</div>


    );

    }
}


function mapStateToProps(state) {
    const { loggedIn, user } = state.authentication;
    return {
        loggedIn, user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showFooter: () => dispatch({ type: 'SHOW_FOOTER' }),
        hideFooter: () => dispatch({ type: 'HIDE_FOOTER' })
    };
}

const connectUpCommingOrder = connect(mapStateToProps, mapDispatchToProps)(UpCommingOrder);
export default connectUpCommingOrder;