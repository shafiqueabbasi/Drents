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
    		<div className="row rwmarg hidden-xs">
    			<div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/pink-shirt-01.png" className="imgwidth"/>
    				<div className="absoul">
    					<p className="pinktext">Pink Floral Top</p>
    					<p className="pinksmaltext">$7/day</p>
    				</div>
    			</div>   
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/black-shirt-01.png" className="imgwidth margimag"/>
    				<div className="absoul">
    					<p className="chiffontext">Chiffon <br/>Suite</p>
    					<p className="chiffonsmaltext">$3/day</p>
    				</div>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/geometric-shirt-01.png" className="imgwidth leftimg"/>
    				<div className="absoul">
    					<p className="blackwhitetext">Black & White Shirt</p>
    					<p className="blackwhitesmaltext">$11/day</p>
    				</div>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/pink-01.png" className="imgwidth leftimg"/>
    				<div className="absoul">
    					<p className="bridaltext">Bridal Shararah</p>
    					<p className="bridalsmaltext">$11/day</p>
    				</div>
    			</div>
    			<div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
    				<img src="../images/yellow-01.png" className="imgwidth leftimg"/>
    				<div className="absoul">
    					<p className="prettext">Pret Long Dress</p>
    					<p className="pretsmaltext">$5/day</p>
    				</div>
    			</div>
    			<div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
    		</div><br/><br/>
            <div className="row rwmarg visible-xs">
                <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
                    <img src="../images/pink-shirt-01.png" className="imgwidth"/>
                    <div className="absoul">
                        <p className="pinktext">Pink Floral Top</p>
                        <p className="pinksmaltext">$7/day</p>
                    </div>
                </div><br/> 
                <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
                    <img src="../images/black-shirt-01.png" className="imgwidth margimag" style={{marginTop: '-12%' , marginBottom: '25%' }}/>
                    <div className="absoul">
                        <p className="chiffontext">Chiffon <br/>Suite</p>
                        <p className="chiffonsmaltext">$3/day</p>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
                    <img src="../images/geometric-shirt-01.png" className="imgwidth leftimg"/>
                    <div className="absoul">
                        <p className="blackwhitetext">Black & White Shirt</p>
                        <p className="blackwhitesmaltext">$11/day</p>
                    </div>
                </div><br/>
                <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
                    <img src="../images/pink-01.png" className="imgwidth leftimg"/>
                    <div className="absoul">
                        <p className="bridaltext">Bridal Shararah</p>
                        <p className="bridalsmaltext">$11/day</p>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relat">
                    <img src="../images/yellow-01.png" className="imgwidth leftimg"/>
                    <div className="absoul">
                        <p className="prettext">Pret Long Dress</p>
                        <p className="pretsmaltext">$5/day</p>
                    </div>
                </div><br/>
                <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
            </div><br/>
    		<div className="container hidden-xs">
    			<div className="row">
    				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
    					<img src="../images/arrow.png" className="featarrow"/>
    				</div>
    				<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
    					<p className="featarrowtext">SHOW ALL FEATURED DRESSES</p>
    				</div>
    			</div>
    		</div><br/><br/><br/><br/><br/><br/>
            <div className="container visible-xs">
                <div className="row">
                    <div className="col-xs-12" style={{textAlign:'center'}}>
                        <img src="../images/arrow.png" className="featarrow"/>
                    </div><br/>
                    <div className="col-xs-12" style={{textAlign:'center'}}>
                        <p className="featarrowtext">SHOW ALL FEATURED DRESSES</p>
                    </div>
                </div>
            </div><br/>
		</div>
    );

  }
}

export default Heading4New;