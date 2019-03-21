import React, { Component } from 'react';

class UpCommingOrder extends Component {
  render() {
    
    return (
    	<div>
			<div className="row hidden-sm hidden-xs">
				<div className="col-md-2">
					<img alt="" src="./images/pinksharara.jpg" style={{width: '117%'}}/>
				</div>
			
				<div className="col-md-10">
					
						<div className="col-md-4">
						<h1 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>Pink Sharara</h1>
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
							<select style={{border: '1px solid #c2073f',width: '100%'}}>
								<option value="volvo">Status</option>
							</select>
						</div>
					
					<div className="col-md-12">
						<h4>Size: M</h4>
						<h4>$ 5999.99</h4>
					</div><br/><br/><br/>

					<div className="col-md-12">
						<br/><br/>
					</div>
						
					
					<div className="col-md-6">
						<h4>$ 5999.99 X 3 Days =&emsp;&emsp; 9999.99</h4>
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
			</div>
							{/*<---hidden-sm--->*/}
			<div className="visible-sm ">
				<div className="row">
					<div className=" col-sm-4">
						<img alt="" src="./images/pinksharara.jpg" style={{width: '100%'}}/>
					</div>
			
					<div className="col-sm-8">
						<div className="row">
							<div className="row col-sm-5">
								<h1 style={{fontFamily: 'Qwigley',fontSize: '41px',color: '#c2o72f'}}>Pink Sharara</h1>
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
										<select style={{border: '1px solid #c2073f'}}>
											<option value="volvo">SORT BY</option>
										</select>
									</div>
									
								</div>
							<div className="col-sm-2">
								<div className="row">
									<h4>Size: M</h4>
									<h4>$ 5999.99</h4>
								</div>
							</div>
							<div className=""></div>
							<div className="col-sm-2"></div>
							<div className="col-sm-5">
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
							</div>
						</div>
					</div>
				</div>
			</div>
				{/*<---hidden-xs--->*/}
			<div className="row">
				<div className="visible-xs">
					<div className="col-xs-2"></div>
						<div className="col-xs-6">
							<img alt="" src="./images/pinksharara.jpg" style={{height: '240px'}}/>
						</div>
				</div>
				<div className="visible-xs col-xs-12">
					<div className="col-xs-2"></div>
						<div className="row">
							<div className="col-xs-"></div>
							<div className="col-xs-8">
								<h1 style={{fontFamily: 'Qwigley',fontSize: '42px'}}>Pink Sharara</h1>
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
							<select style={{border: '1px solid #c2073f'}}>
								<option value="volvo">SORT BY</option>
							</select>
						</div>
						<div className="col-xs-3"></div>
						<div className="col-xs-4">
							<div className="row">
								<h4>Size: M</h4>
								<h4>$ 5999.99</h4>
							</div>
						</div>
					</div>
					<div className="row visible-xs">
						<div className="col-xs-3"></div>
						<div className="col-xs-6">
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
						</div>
					</div>
					<div className="col-md-12 hidden-xs">
						<hr style={{borderTop:'2px solid #c2073f'}}/>
					</div>
			</div>
		
		</div>


    );

  }
}

export default UpCommingOrder;
