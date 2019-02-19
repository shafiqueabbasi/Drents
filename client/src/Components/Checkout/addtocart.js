import React, { Component } from 'react';
import './addtocart.css'

class Addtocart extends Component {
	render() {
		return(
		<div>
			{/*<nav>
				<div class="container">
    				<ul class="navbar-right">
      					<li style={{listStyle: 'none'}}><a id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge"></span></a></li>
    				</ul>
  				</div>
			</nav>*/}


			<div className="container">
				<div class="shopping-cart col-xs-12">
    				<div class="shopping-cart-header">
    					<i class="fa fa-shopping-cart cart-icon"></i><span class="badge"></span>
    					<div class="shopping-cart-total">
        					<h5><span class="lighter-text">Total:</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        					<span class="main-color-text">$2,229.97</span></h5>
        					<hr/>
      					</div>
    				</div>

    				<ul class="shopping-cart-items">
    					<li class="clearfix">


        					{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />*/}

        					<h2 style={{fontFamily: 'Qwigley'}}><span class="item-name">Pink Sharara</span></h2>
        					<h5><span class="item-price">Size : M</span></h5>
				        	<h5><span class="item-quantity">$5999.99 X 3 Days = 9999.99</span></h5>
				    	</li>

				    	<hr/>

				    	<li class="clearfix">

				        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />*/}

				        	<h2 style={{fontFamily: 'Qwigley'}}><span class="item-name">Pink Sharara</span></h2>
        					<h5><span class="item-price">Size : M</span></h5>
				        	<h5><span class="item-quantity">$5999.99 X 3 Days = 9999.99</span></h5>
				      	</li>

				      	<hr/>

				      	<li class="clearfix">

				        	{/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />*/}

				        	<h2 style={{fontFamily: 'Qwigley'}}><span class="item-name">Pink Sharara</span></h2>
        					<h5><span class="item-price">Size : M</span></h5>
				        	<h5><span class="item-quantity">$5999.99 X 3 Days = 9999.99</span></h5>
				      	</li>

				      	<hr/>
				    </ul>

				    <a href="#" class="button">Checkout</a>
				 </div>
			</div>
			</div>

    );

  }
}

export default Addtocart;
