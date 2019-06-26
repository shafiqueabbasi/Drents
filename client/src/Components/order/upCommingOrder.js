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
    			<div className="container">	
    				<div key={key} className="row" style={{margin:'0px'}}>
    					<div className="col-xs-12 col-sm-1 col-md-2 col-lg-2"></div>
						<div className="col-xs-12 col-sm-3 col-md-2 col-lg-2" style={{paddingTop: '2%'}}>
							<img alt="" src={elem.fileList[0]} className="current_image" />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<h1 className="current_dress_name">{elem.productName}</h1>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{paddingTop: '3%'}}>
									<Rate rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
								</div>
								<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2" style={{paddingTop: '3%'}}>
									<div className="dropdown current_btn_status">
										<button className="btn dropdown-toggle current_dropdown" type="button" data-toggle="dropdown"
										  >{stage && stage.length > 0 ? stage : 'Status'} &emsp;&emsp;
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

								<div className="row" style={{margin:'0px'}}>
									<div className={report ? "col-xs-12 col-sm-10 col-md-10 col-lg-10" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"} style={{paddingLeft: '0px'}}>
										<h4 className="current_sizes">Size: {elem.sizes.join(", ")}</h4>
									</div>
									{report && <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2" style={{textAlign: 'center'}}>
										{/*<h4>{report}</h4>*/}
										<Report 
											ind={key} 
											data={passToReport} 
											screen="desktop"
											onClick={(e) => this.setState({ passToReport: elem })}
										/>
									</div>}								
								</div>
							<div className="row" style={{margin:'0px'}}>
								<h4 className="current_dress_price">${elem.priceDay}</h4>
							</div>
							
							<div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">
								<h4 className="current_total_price">${elem.priceDay} X {+elem.rentDay +1} Days = ${elem.amount}</h4>
							</div>
						</div>
						<div className="col-xs-12 col-sm-1 col-md-2 col-lg-2"></div>

						<div className="modal fade" id="confirmStatus" role="dialog">
                            <div className="modal-dialog" style={showReviewBox ? {width: '96%'} : {}}>
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title model_head_text">{!showReviewBox ? 'Confirmation' : 'Add Review'}</h4>
                                </div>
                                <div className="modal-body model_body_text">
                                    {!showReviewBox && <span>This will change your status</span>}
                                    {!showReviewBox && <div className="row" style={{marginTop: '6%'}}>
                                    	<div className="col-md-6"></div>
                                    	<div className="col-md-3">
                                    		<button className="btn model_confirm_btn"                             
                                    			onClick={(e) => this.changeStatus("confirmStatus", elem.reviewId)}
                                			>Confirm</button>                                    		
                                    	</div>
                                    	<div className="col-md-3">
                                    		<button className="btn model_cancel_btn"                			
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
					<div className="row" style={{margin:'0px'}}>
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<hr style={{borderTop:'2px solid rgb(203, 157, 108)'}}/>
						</div>
						<div className="col-md-2"></div>
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