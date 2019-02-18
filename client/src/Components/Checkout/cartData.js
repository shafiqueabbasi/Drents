import React, { Component } from 'react';
import './cartData.css'

class CartData extends Component {
	state = {
		finalArr: []
	}

	componentDidMount(){
		const { finalArr } = this.props.location.state;
		this.setState({ finalArr })
	}

	cancelOrder(e){
		let { finalArr } = this.state;
		finalArr = finalArr.filter((elem) => elem._id !== e._id)
		this.setState({ finalArr });
		this.props.updateCart(finalArr);
		localStorage.setItem('Cart', JSON.stringify(finalArr));
	}

	render() {
		const { finalArr } = this.state;
		var price = 0;
		console.log(price, 'priceeeeeeeeeee')

		return (
			<div style={{marginTop:'10%'}}>
				<div className="hidden-xs">
					<div className="container" style={{width:'55%' , marginLeft: '19%'}}>
						<div className="row">
							<div className="col-md-12 col-sm-12 chainbelt1"><span className="chainbelt">Your Cart</span></div>
						</div>	
						{finalArr.map((elem, key) => {
							price += elem.priceDay;
							return (
								<div>
									<div className="row">
										<div className="col-md-6 col-sm-6 chainbelt3">
											<p><span className="chainbelt2">Arrival:{elem.from}</span></p>
										</div>
										<div className="col-md-6 col-sm-6 chainbelt3">
											<p><span className="chainbelt2">Return:{elem.to}</span></p>
										</div>
									</div>
									<div className="row">
										<div className="container">
											<div className="col-md-10 col-sm-9">
												<div className="row">
													<div className="col-md-6 col-sm-6">								
														<h2><span className="chainbelt4">{elem.productName}</span></h2>
													</div>
													<div className="col-md-4 col-sm-6 apex5" onClick={this.cancelOrder.bind(this,elem)}>x</div>
												</div>									
												<div className="row">
													<div className="col-md-4 col-sm-4">	
														<h4 className="chainbelt5"><span>Size : {elem.sizes.join(" ,")}</span></h4>
													</div>
												</div><br/>
												<div className="row chainbelt6">
													<div className="col-md-4 col-sm-4">
														<p><span>${elem.priceDay} X {(+elem.rentDay + 1)} Days= </span></p>
													</div>
													<div className="col-md-4 col-sm-4 chainbelt7">
														<p><span>{(+elem.priceDay) * (+elem.rentDay + 1)}</span></p>
													</div>
												</div>
												{/*<div className="row chainnbelt10">													
													<div className="col-md-8 col-sm-8" style={{textAlign: 'center'}}>
														<button type="submit"
															className="btn  
															chainbelt8" 
															onClick={this.cancelOrder.bind(this,elem)}
														>
															<span className="chainbelt9">Cancel Order</span>
														</button>
													</div>
												</div>*/}
												
											</div>
											<div className="col-md-2 col-sm-3"></div>
										</div>
									</div>							
								</div>
							)
						})}
						<div className="row apex1">
							<div className="col-md-2 col-sm-2"></div>
							<div className="col-md-4 col-sm-4">
								<p><span>Subtotal</span></p>
							</div>
							<div className="col-md-4 col-sm-4 chainbelt7">
								<p><span>9999.99</span></p>
							</div>
						</div>
						<div className="row">										
							<div className="col-md-12 col-sm-12 chainbelt1">
								<button className="btn apex2">
									<span className="apex3">
										CHECKOUT
									</span>
								</button>
							</div>
						</div>							
					</div>
				</div>
				<div className="visible-xs">
					<div className="container">
						<div className="row" style={{marginTop:'7%'}}>
							<div className="col-xs-12 chainbelt1"><span className="chainbelt">Your Cart</span></div>
						</div>	
						<div className="row">
							<div className="col-xs-6 chainbelt3">
								<p><span className="chainbelt2">Arrival:Thu 12/40</span></p>
							</div>
							<div className="col-xs-6 chainbelt3">
								<p><span className="chainbelt2">Return:Sun 12/23</span></p>
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="col-xs-10">
									<div className="row">
										<div className="col-xs-10">								
											<h2><span className="chainbelt4">Pink Sharara</span></h2>
										</div>
										<div className="col-xs-2 apex9">x</div>
									</div>									
									<div className="row">
										<div className="col-xs-6">	
											<h4 className="chainbelt5"><span>Size : M</span></h4>
										</div>
									</div><br/>
									<div className="row chainbelt6">
										<div className="col-xs-8 apex8">
											<p><span>$5999.99 X 3 Days=</span></p>
										</div>
										<div className="col-xs-4 apex8">
											<p><span>9999.99</span></p>
										</div>
									</div>
									<div className="row chainnbelt10">
										<div className="col-xs-4">
											<button className="btn  chainbelt8" type="button"><span className="apex6">Confirm Order</span></button>
										</div>
										<div className="col-xs-2"></div>
										<div className="col-xs-4">
											<button className="btn  chainbelt8" type="button"><span className="apex6">Cancel Order</span></button>
										</div>
									</div>
									<div className="row apex1">
										<div className="col-xs-6 apex8">
											<p><span>Subtotal</span></p>
										</div>
										<div className="col-xs-6 apex10">
											<p><span>9999.99</span></p>
										</div>
									</div>
									<div className="row apex1">
										<div className="col-xs-2">
										</div>
										<div className="col-xs-3">
											<button className="btn apex2" type="button"><span className="apex3">CHECKOUT</span></button>
										</div>
										<div className="col-xs-2">
										</div>
									</div>
								</div>
								<div className="col-xs-2"></div>
							</div>
						</div>	
					</div>
				</div>
				
			</div>
		)
	}
}

export default CartData;