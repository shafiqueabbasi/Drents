import React, { Component } from 'react';
import StripeData from '../form/mainpayment';
import { connect } from 'react-redux';
import { HttpUtils } from '../../Service/HttpUtils';
import { Link , Route} from 'react-router-dom';
import moment from 'moment';
import { Redirect } from 'react-router';
import './cartData.css'

class CartData extends Component {
	state = {
		finalArr: [],
		showStripe: false,
		paymentSuccess: false,
		msg: '',
		goTo: false
	}

	async componentDidMount() {
		const finalArr = JSON.parse(await localStorage.getItem('Cart'));
		this.setState({ finalArr }, () => {
			this.getData();
		})
		this.props.changingHeader('calling true');
	}

	cancelOrder(e) {
		let { finalArr } = this.state;
		finalArr = finalArr.filter((elem) => elem._id !== e._id);
		this.setState({ finalArr }, () => {
			this.getData();
		});
		this.props.updateCart(finalArr);
		localStorage.setItem('Cart', JSON.stringify(finalArr));
		this.updateStatus(e._id);
	}

	async updateStatus(_id) {
		let obj = { _id, bookedFrom: '', bookedTo: '', status: 'Available' },
			res = await HttpUtils.post('uploaddress', obj, this.props.user.token);
	}

	onSuccessCard = async (data) => {
		const { user } = this.props,
			{ finalPrice, finalArr } = this.state;
		if (data.status == 'succeeded') {
			let obj = {
				userId: user._id,
				products: finalArr,
				email: user.email,
				name: user.username,
				date: moment().format('LL'),
				amount: finalPrice,
				reviewId: ''
			},
				stripeRes = await HttpUtils.post('orderdetail', obj, user.token);
			if (stripeRes.code && stripeRes.code == 200) {
				this.setState({ paymentSuccess: true })
				setTimeout(() => {
					this.props.updateCart([]);
					localStorage.removeItem('Cart');
					document.getElementById("stripeCard").click();
					this.setState({ goTo: true })
				}, 3000)
			}

		}
	}

	onErrorCard = msg => {
		this.setState({ msg })
		setTimeout(() => {
			this.setState({ msg: '' })
		}, 4000)
	}

	getData = e => {
		const { finalArr } = this.state,
			{ loggedIn, user } = this.props;
		var price = 0;
		finalArr && finalArr.map((elem) => {
			price += (+elem.priceDay) * (+elem.rentDay + 1)
		})
		let tax = price * 1.48 / 100,
			drentFee = price * 2 / 100,
			stripeFee = price * 2.9 / 100,
			finalPrice = (price + drentFee + tax).toFixed(2)
		if (user) {
			var data = {
				email: user.email,
				name: user.username,
				amount: finalPrice
			}
		}
		this.setState({ finalPrice, price, data })
	}

	render() {
		const { finalArr, paymentSuccess, msg, finalPrice, price, data, goTo } = this.state,
			{ loggedIn, user } = this.props,
			showButton = finalArr && finalArr.length < 1 ? true : loggedIn ? false : true;
		if (goTo) {
			return <Redirect to='/' />
		}

		return (
			<div style={{ marginTop: '6%' }}>
				<div className="">
					<div className="row" style={{ margin: '0px' }}>
						<div className="col-xs-12 col-sm-1 col-md-2 col-lg-3"></div>
						<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
							<div className="row cart_marg_screen">
								<div className="col-xs-12 col-lg-3 col-md-3 col-sm-3 chainbelt1">
									Cart
									</div>
								<div className="col-xs-12 col-lg-2 col-md-2 col-sm-2"></div>
								<div className="col-xs-12 col-lg-3 col-md-3 col-sm-3">
									<button
										className="btn checkout_btn"
										disabled={showButton}
										data-toggle="modal" data-target="#stripeCard">
										Checkout
										</button>
								</div>
								<div className="col-xs-12 col-lg-4 col-md-4 col-sm-4">
									<Link to={'/product'}>
										<button
												className="btn btn_browse_dresses"
												> Browse more dresses
										</button>
									</Link>	
								</div>
							</div><br />
							{finalArr && finalArr.map((elem, key) => {
								return (
									<div>
										{/*<div className="row">
												<div className="col-md-6 col-sm-6 chainbelt3">
													<p><span className="chainbelt2">Arrival: </span></p>
												</div>
												<div className="col-md-6 col-sm-6 chainbelt3">
													<p><span className="chainbelt2">Return: </span></p>
												</div>
											</div>*/}
										<div className="row cart_marg_screen">
											<div className="col-xs-12 col-lg-2 col-md-2 col-sm-2">
												<img src="../images/pink-shirt-01.png" className="img_of_cart_dress" />
											</div>
											<div className="col-xs-12 col-lg-6 col-md-6 col-sm-6">
												<p className="chainbelt4">{elem.productName}</p>
												<div className="row" style={{ margin: '0px' }}>
													<div className="col-xs-12 col-lg-5 col-md-5 col-sm-5 cart_dress_date">{elem.from}</div>
													<div className="col-xs-12 col-lg-2 col-md-2 col-sm-2 cart_dress_date">To</div>
													<div className="col-xs-12 col-lg-5 col-md-5 col-sm-5 cart_dress_date">{elem.to}</div>
												</div><br />
												<p className="chainbelt4" onClick={this.cancelOrder.bind(this, elem)}>Remove dress</p>
											</div>
											<div className="col-xs-6 col-lg-4 col-md-4 col-sm-4 cart_align">
												${((+elem.priceDay) * (+elem.rentDay + 1)).toFixed(2)}
											</div>
										</div>
										{/*<div className="row">												
													<div className="col-lg-10 col-md-10 col-sm-9">
														<div className="row">
															<div className="col-lg-4 col-md-6 col-sm-6">
																<h2><span>{elem.productName}</span></h2>
															</div>
															<div className="col-lg-4 col-md-4 col-sm-6 apex5" onClick={this.cancelOrder.bind(this,elem)}>x</div>
														</div>
														<div className="row">
															<div className="col-lg-4 col-md-4 col-sm-4">
																<h4 className="chainbelt5"><span>Size : {elem.sizes.join(" ,")}</span></h4>
															</div>
														</div><br/>
														<div className="row chainbelt6">
															<div className="col-lg-4 col-md-4 col-sm-4">
																<p><span>${elem.priceDay} X {(+elem.rentDay + 1)} Days= </span></p>
															</div>
															<div className="col-lg-4 col-md-4 col-sm-4 chainbelt7">
																<p><span>{((+elem.priceDay) * (+elem.rentDay + 1)).toFixed(2)}</span></p>
															</div>
														</div>
														<div className="row chainnbelt10">
															<div className="col-lg-8 col-md-8 col-sm-8" style={{textAlign: 'center'}}>
																<button type="submit"
																	className="btn
																	chainbelt8"
																	onClick={this.cancelOrder.bind(this,elem)}
																>
																	<span className="chainbelt9">Cancel Order</span>
																</button>
															</div>
														</div>
													</div>
													<div className="col-lg-10 col-md-2 col-sm-3"></div>												
												</div>*/}
									</div>
								)
							})}<br />
							{/*<div className="row apex1">
									<div className="col-md-2 col-sm-2"></div>
									<div className="col-md-4 col-sm-4">
										<p><span>Subtotal</span></p>
									</div>
									<div className="col-md-4 col-sm-4 chainbelt7">
										<p><span>{price}</span></p>
									</div>
									<div className="col-md-2 col-sm-2"></div>
								</div>*/}
							<div className="row cart_total_align">
								<div className="col-xs-12 col-lg-8 col-md-8 col-sm-8"></div>
								<div className="col-xs-6 col-lg-2 col-md-2 col-sm-2">
									<p className="cart_total">Net Amount:</p>
									<br />
									<p className="cart_total">Tax:</p>
									<br />
									<p className="cart_total">Drent fee:</p>
									<br />
									<p className="cart_total">Stripe fee:</p>
									<br />
									<p className="cart_total">Total:</p>
								</div>
								<div className="col-xs-6 col-lg-2 col-md-2 col-sm-2">
									<p className="cart_price">{price}</p>
									<br />
									<p className="cart_price">1.48%</p>
									<br />
									<p className="cart_price">2%</p>
									<br />
									<p className="cart_price">2.9%</p>
									<br />
									<p className="cart_price">{finalPrice}</p>
								</div>
							</div>
							{/*<div className="row apex1">
									<div className="col-lg-7 col-md-7 col-sm-6"></div>
									<div className="col-lg-5 col-md-5 col-sm-6 chainbelt7">
										<div className="row">
											<div className="col-md-6 col-sm-6">
												Net Amount:
											</div>
											<div className="col-md-6 col-sm-6">
												{price}
											</div>
											<div className="col-md-6 col-sm-6">
												Tax:
											</div>
											<div className="col-md-6 col-sm-6">
												1.48%
											</div>
											<div className="col-md-6 col-sm-6">
												Drent fee:
											</div>
											<div className="col-md-6 col-sm-6">
												2%
											</div>
											<div className="col-md-6 col-sm-6">
												Stripe fee:
											</div>
											<div className="col-md-6 col-sm-6">
												2.9%
											</div>
											<div className="col-md-6 col-sm-6">
												Total:
											</div>
											<div className="col-md-6 col-sm-6">
												{finalPrice}
											</div>
										</div>
									</div>
								</div>*/}<br />
							<div className="row">
								<div className="col-xs-12 col-xs-12 col-lg-5 col-md-5 col-sm-5"></div>
								<div className="col-xs-12 col-lg-3 col-md-3 col-sm-3">
									<button
										className="btn checkout_btn"
										disabled={showButton}
										data-toggle="modal" data-target="#stripeCard">
										Checkout
										</button>
								</div>
								<div className="col-xs-12 col-lg-4 col-md-4 col-sm-4">
									<Link to={'/product'}>
										<button
												className="btn btn_browse_dresses"
												> Browse more dresses
										</button>
									</Link>
								</div>
							</div>
							{!loggedIn && <div className="row">
								<h3 style={{ textAlign: 'center' }}>Login First for CHECKOUT!!</h3>
							</div>}
							<div id="stripeCard" className="modal fade" role="dialog" style={{ marginTop: '5%' }}>
								<div className="modal-dialog">
									<div className="modal-content" style={{ backgroundColor: 'white' }}>
										<div className="modal-header" style={{ background: '#8080808' }}>
											<button type="button" className="close" data-dismiss="modal" style={{ color: '#cb9d6c' }}>&times;</button>
											<h4 className="modal-title stripe_head">Stripe</h4>
										</div>
										<div className="modal-body">
											{!paymentSuccess && <div className="row househalt">
												<div className="col-md-12">
													<StripeData
														onError={this.onErrorCard}
														onChange={this.onSuccessCard}
														data={data}
													/>
												</div>
												{msg.length > 0 && <div>
													{msg}
												</div>}
											</div>}
											{paymentSuccess && <div className="row">
												<div className="col-md-12" style={{ textAlign: 'center' }}>
													<img src="../images/paid.gif" style={{ width: '20%' }} />
												</div>
											</div>}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-1 col-md-2 col-lg-3"></div>
					</div>
				</div>
				{/*<div className="visible-xs">
					<div className="container">
						<div className="row" style={{marginTop: '9%'}}>
							<div className="col-xs-12 chainbelt1"><span className="chainbelt">Your Cart</span></div>
						</div>
						{finalArr && finalArr.map((elem, key) => {
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
														<p style={{fontSize: '20px'}}><span>{((+elem.priceDay) * (+elem.rentDay + 1)).toFixed(2)}</span></p>
													</div>
												</div>
												<div className="row chainnbelt10">
													<div className="col-xs-8" style={{textAlign: 'center'}}>
														<button type="submit"
															className="btn
															chainbelt8"
															onClick={this.cancelOrder.bind(this,elem)}
														>
															<span className="chainbelt9">Cancel Order</span>
														</button>
													</div>
												</div>

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
								<p><span>{price}</span></p>
							</div>
						</div>
						<div className="row apex1">
							<div className="col-xs-12">
								<div className="row">
									<div className="col-xs-9">
										Net Amount:
									</div>
									<div className="col-xs-3" style={{padding: '0px'}}>
										{price}
									</div>
									<div className="col-xs-9">
										Tax:
									</div>
									<div className="col-xs-3" style={{padding: '0px'}}>
										1.48%
									</div>
									<div className="col-xs-9">
										Drent fee:
									</div>
									<div className="col-xs-3" style={{padding: '0px'}}>
										2%
									</div>
									<div className="col-xs-9">
										Stripe fee:
									</div>
									<div className="col-xs-3" style={{padding: '0px'}}>
										2.9%
									</div>
									<div className="col-xs-9">
										Total:
									</div>
									<div className="col-xs-3" style={{padding: '0px'}}>
										{finalPrice}
									</div>
								</div>
							</div>
						</div>
						<div className="row" style={{marginTop: '10px'}}>
							<div className="col-xs-12 chainbelt1">
								<button className="btn apex2" data-toggle="modal" data-target="#stripeCardM">
									<span className="apex3">
										CHECKOUT
									</span>
								</button>
							</div>
						</div>
						<div id="stripeCardM" className="modal fade" role="dialog" style={{marginTop:'5%'}}>
							<div className="modal-dialog">
								<div className="modal-content" style={{backgroundColor:'white'}}>
					                <div className="modal-header" style={{background:'#8080808c'}}>
					                  <button type="button" className="close" data-dismiss="modal" style={{color:'white'}}>&times;</button>
					                  <h4 className="modal-title" style={{color:'white',textAlign:'center'}}>Stripe</h4>
					                </div>
					                <div className="modal-body">
						                {!paymentSuccess && <div className="row househalt">
											<div className="col-md-12">
												<StripeData
													onError={this.onErrorCard}
													onChange={this.onSuccessCard}
													data={data}
												 />
											</div>
											{msg.length > 0 && <div>
												{msg}
											</div>}
										</div>}
										{paymentSuccess && <div className="row">
											<div className="col-md-12" style={{textAlign:'center'}}>
													<img src="../images/paid.gif" style={{width:'20%'}} />
											</div>
										</div>}
					                </div>
								</div>
							</div>
						</div>
					</div>
				</div>*/}



			</div>
		)
	}
}

function mapStateToProps(state) {
	const { loggedIn, user } = state.authentication;
	return {
		loggedIn, user
	};
}

const connectCartData = connect(mapStateToProps)(CartData);
export default connectCartData;
