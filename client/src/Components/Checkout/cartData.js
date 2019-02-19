import React, { Component } from 'react';
import StripeData from '../form/mainpayment';
import './cartData.css'

class CartData extends Component {
	state = {
		finalArr: [],
		showStripe: false
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
		console.log(price, 'priceeeeeeeee')

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
											<p><span className="chainbelt2">Arrival: {elem.from}</span></p>
										</div>
										<div className="col-md-6 col-sm-6 chainbelt3">
											<p><span className="chainbelt2">Return: {elem.to}</span></p>
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
								<button className="btn apex2" data-toggle="modal" data-target="#stripeCard">
									<span className="apex3">
										CHECKOUT
									</span>
								</button>
							</div>
						</div>
						<div id="stripeCard" className="modal fade" role="dialog" style={{marginTop:'5%'}}>
							<div className="modal-dialog">
								<div className="modal-content" style={{backgroundColor:'white'}}>
					                <div className="modal-header" style={{background:'#8080808c'}}>
					                  <button type="button" className="close" data-dismiss="modal" style={{color:'white'}}>&times;</button>
					                  <h4 className="modal-title" style={{color:'white',textAlign:'center'}}>Stripe</h4>
					                </div>
					                <div className="modal-body">
					                <div className="row" style={{border:'1px solid gray',width:'87%',textAlign:'center',marginLeft:'35px',padding:'15px'}}>
														<div className="col-md-12">
															<StripeData />
														</div>
													</div>
					                </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="visible-xs">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 chainbelt1"><span className="chainbelt">Your Cart</span></div>
						</div>
						{finalArr.map((elem, key) => {
							price += elem.priceDay;
							return (
								<div>
									<div className="row">
										<div className="col-xs-6 chainbelt3">
											<p><span className="chainbelt2" style={{fontSize: '14px'}}>Arrival: {elem.from}</span></p>
										</div>
										<div className="col-xs-6 chainbelt3">
											<p><span className="chainbelt2" style={{fontSize: '14px'}}>Return: {elem.to}</span></p>
										</div>
									</div>
									<div className="row">
										<div className="container">
											<div className="col-xs-12">
												<div className="row">
													<div className="col-xs-8">
														<h5><span className="chainbelt4">{elem.productName}</span></h5>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-4 apex5" onClick={this.cancelOrder.bind(this,elem)}>x</div>
												</div>
												<div className="row">
													<div className="col-xs-8">
														<h4 className="chainbelt5" style={{fontSize: '16px'}}><span>Size : {elem.sizes.join(" ,")}</span></h4>
													</div>
												</div><br/>
												<div className="row chainbelt6">
													<div className="col-xs-8">
														<p style={{fontSize: '20px'}}><span>${elem.priceDay} X {(+elem.rentDay + 1)} Days= </span></p>
													</div>
													<div className="col-xs-2 chainbelt7">
														<p style={{fontSize: '20px'}}><span>{(+elem.priceDay) * (+elem.rentDay + 1)}</span></p>
													</div>
												</div>
												{/*<div className="row chainnbelt10">
													<div className="col-xs-8" style={{textAlign: 'center'}}>
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
											<div className="col-xs-3"></div>
										</div>
									</div>
								</div>
							)
						})}
						<div className="row apex1">
							<div className="col-xs-2"></div>
							<div className="col-xs-4">
								<p><span>Subtotal</span></p>
							</div>
							<div className="col-xs-4 chainbelt7">
								<p><span>9999.99</span></p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 chainbelt1">
								<button className="btn apex2" data-toggle="modal" data-target="#stripeCard">
									<span className="apex3">
										CHECKOUT
									</span>
								</button>
							</div>
						</div>
						<div id="stripeCard" className="modal fade" role="dialog" style={{marginTop:'5%'}}>
							<div className="modal-dialog">
								<div className="modal-content" style={{backgroundColor:'white'}}>
					                <div className="modal-header" style={{background:'#8080808c'}}>
					                  <button type="button" className="close" data-dismiss="modal" style={{color:'white'}}>&times;</button>
					                  <h4 className="modal-title" style={{color:'white',textAlign:'center'}}>Stripe</h4>
					                </div>
					                <div className="modal-body">
					                <div className="row" style={{border:'1px solid gray',width:'87%',textAlign:'center',marginLeft:'35px',padding:'15px'}}>
														<div className="col-md-12">
															<StripeData />
														</div>
													</div>
					                </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				 


			</div>
		)
	}
}

export default CartData;
