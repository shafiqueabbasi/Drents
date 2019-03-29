import React, { Component } from 'react';
import { HttpUtils } from  '../../Service/HttpUtils';

class UpCommingOrder extends Component {
	constructor(props){
		super(props);
		this.state = {
			rentals: this.props.location.state.rentals,
			rented: this.props.location.state.rented,
			take: this.props.take,
			buyer: ['Received', 'Returned'],
	    	seller: ['Dispatched', 'Completed', 'Available'],
		}
	}

	async changeStatus(e, elem){
		let { take, rentals, rented } = this.state;
		if(take){
			let obj = {}
			rentals = rentals.map((el) => {
				if(elem._id === el._id){					
					el.rentalStage = e.target.innerText;
					obj = {
						dataId: el.dataId,
						productId: el._id,
						rentalStage: el.rentalStage,
						rentedStage: el.rentedStage
					};	
					return el;
				}				
				return el;						
			})			

			let statusRental = await HttpUtils.post('twiliosms', obj);
			this.setState({ rentals });
		}else {
			let obj = {}
			rented = rented.map((el) => {
				if(elem._id === el._id){
					el.rentedStage = e.target.innerText;	
					obj = {
						dataId: el.dataId,
						productId: el._id,
						rentalStage: el.rentalStage,
						rentedStage: el.rentedStage
					};
					return el;					
				}				
				return el;
			})
			let statusRental = await HttpUtils.post('twiliosms', obj);
			this.setState({ rented });
		}		
	}

	render() {
	    const { rentals, rented, take } = this.state;	    
	    let arr = take ? rentals : rented,
	    buyer = ['Received', 'Returned'],
	    seller = ['Dispatched', 'Completed', 'Available'],
	    status = take ? seller : buyer;
	    
	    return (
    	<div>
    		{arr.map((elem) => {
    			let stage = take ? elem.rentalStage : elem.rentedStage
    			return (
    				<div className="row hidden-sm hidden-xs">
						<div className="col-md-2">
							<img alt="" src={elem.fileList[0]} style={{width: '117%'}}/>
						</div>

						<div className="col-md-10">

								<div className="col-md-4">
								<h1 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>{elem.productName}</h1>
								</div>
								<div className="col-md-6" style={{paddingTop: '3%'}}>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span>4.5</span>
								</div>
								<div className="col-md-2" style={{paddingTop: '3%'}}>
									<div className="dropdown" style={{textAlign: 'right'}}>
										<button className="btn dropdown-toggle" type="button" data-toggle="dropdown"
										  style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f'}}>{stage && stage.length > 0 ? stage : 'Status'} &emsp;&emsp;
										  <span className="caret"></span></button>

										<ul className="dropdown-menu">
											{status.map((el) => {
												return (
													<li onClick={(e) => this.changeStatus(e, elem)}>
														<a>{el}</a>
													</li>
												)												
											})}
											{/*<li><a href="#">HTML</a></li>
											<li><a href="#">CSS</a></li>
											<li><a href="#">JavaScript</a></li>*/}
										</ul>
									</div>
								</div>

							<div className="col-md-12">
								<h4>Size: {elem.sizes.join(", ")}</h4>
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
					</div>
				)
    		})}

							{/*<---hidden-sm--->*/}
			{rentals.map((elem) => {
    			return (
					<div className="visible-sm ">
						<div className="row">
							<div className=" col-sm-4">
								<img alt="" src={elem.fileList[0]} style={{width: '100%'}}/>
							</div>

							<div className="col-sm-8">
								<div className="row">
									<div className="row col-sm-5">
										<h1 style={{fontFamily: 'Qwigley',fontSize: '41px',color: '#c2o72f'}}>{elem.productName}</h1>
									</div>
									<div className="row">
										<div className="col-sm-4" style={{paddingTop: '4%'}}>
											<span class="fa fa-star checked" style={{color: 'yellow',fontSize: '70%'}}></span>
											<span class="fa fa-star checked" style={{color: 'yellow',fontSize: '70%'}}></span>
											<span class="fa fa-star checked" style={{color: 'yellow',fontSize: '70%'}}></span>
											<span class="fa fa-star checked" style={{color: 'yellow',fontSize: '70%'}}></span>
											<span class="fa fa-star checked" style={{color: 'yellow',fontSize: '70%'}}></span>
											<span style={{fontSize: '70%'}}>4.5</span>
										</div>

										<div className="col-sm-2" style={{paddingTop: '4%'}}>
											<div className="dropdown">
											<button class="btn dropdown-toggle" type="button" data-toggle="dropdown"
												 style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f'}}>Status &emsp;&emsp;
												 <span class="caret"></span></button>

											<ul class="dropdown-menu">
												<li><a href="#">HTML</a></li>
												<li><a href="#">CSS</a></li>
												<li><a href="#">JavaScript</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-2">
									<div className="row">
										<h4>Size: {elem.sizes.join(", ")}</h4>
										<h4>${elem.priceDay}</h4>
									</div>
								</div>
								<div className=""></div>
								<div className="col-sm-2"></div>
								{/*<div className="col-sm-5">
									<h4>Order Date</h4>
									<div className="row">
										<div className="col-sm-6">
											<h4>Order</h4>
											<h4>19/2/19</h4>
										</div>
										<div className="col-sm-6">
											<h4>Return</h4>
											<h4>21/2/19</h4>
										</div>
									</div>
								</div>*/}
							</div>
						</div>
					</div>
				</div>
				)
    		})}
				{/*<---hidden-xs--->*/}
			{rentals.map((elem) => {
    			return (
					<div className="row">
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
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span class="fa fa-star checked" style={{color: 'yellow'}}></span>
									<span>4.5</span>
								</div>
								<div className="col-xs-2"></div>
								<div className="col-xs-10" style={{paddingTop: '3%'}}>
									<div className="dropdown">
										<button class="btn dropdown-toggle" type="button" data-toggle="dropdown"
										  style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f', textAlign: 'right'}}>Status &emsp;&emsp;
										  <span class="caret"></span></button>

										<ul class="dropdown-menu">
											<li><a href="#">HTML</a></li>
											<li><a href="#">CSS</a></li>
											<li><a href="#">JavaScript</a></li>
										</ul>
									</div>
								</div>
								<div className="col-xs-3"></div>
								<div className="col-xs-4">
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
					</div>
				)
    		})}


		</div>


    );

    }
}

export default UpCommingOrder;
