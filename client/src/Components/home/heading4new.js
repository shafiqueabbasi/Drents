import React, { Component } from 'react';
import './home.css';


class Heading4New extends Component {
  render() {
    
    return (
    	<div>
    		<div className="container">
    			<div className="row">
    				<p className="featuresub">FEATURED</p>
    				<p className="featuredhead">Featured Rental</p>
    			</div>
    		</div>
    		<div className="row rwmarg">
    			<div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/pink-shirt-01.png" className="imgwidth"/>
    				<div className="absoul">
    					<p className="feainnertext">Pink Floral Top</p>
    					<p className="feainsmaltext">$7/day</p>
    				</div>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/black-shirt-01.png" className="imgwidth margimag"/>
    				<div className="absoul">
    					<p className="feainnertext">Chiffon Suite</p>
    					<p className="feainsmaltext">$3/day</p>
    				</div>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/geometric-shirt-01.png" className="imgwidth leftimg"/>
    				<div className="absoul">
    					<p className="feainnertext">Black & White Shirt</p>
    					<p className="feainsmaltext">$11/day</p>
    				</div>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/pink-01.png" className="imgwidth leftimg"/>
    				<div className="absoul">
    					<p className="feainnertext">Bridal Shararah</p>
    					<p className="feainsmaltext">$11/day</p>
    				</div>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/yellow-01.png" className="imgwidth leftimg"/>
    				<div className="absoul">
    					<p className="feainnertext">Pret Long Dress</p>
    					<p className="feainsmaltext">$5/day</p>
    				</div>
    			</div>
    			<div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
    		</div><br/><br/>
    		<div className="container">
    			<div className="row">
    				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
    					<img src="../images/arrow.png" className="featarrow"/>
    				</div>
    				<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
    					<p className="featarrowtext">SHOW ALL FEATURED DRESSES</p>
    				</div>
    			</div>
    		</div><br/><br/><br/><br/><br/><br/>
		</div>
    );

  }
}

export default Heading4New;