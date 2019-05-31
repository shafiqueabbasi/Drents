import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import './home.css';

class FooterNew extends Component {
  render() {
    
    return (
     	<div>
     		<footer style={{backgroundColor:'#473463'}}>
     			<div className="stage">
     				<img src="../images/scroll-logo.png" className="scrollfoot"/>
     			</div>
     			<div className="row rowpaddmarg">
     				<div className="col-sm-1 col-md-1 col-lg-1"></div>
     				<div className="col-sm-2 col-md-2 col-lg-2">
     					<p className="quickfooter">Quick Links</p>
     					<ul className="nav navbar-nav">
	     					<li className="footernav">Home</li>
	     					<li className="footernav">Catalog</li>
	     					<div className="dropdown">
							  <li className="footernavpro dropbtn">My Profile</li>
							  <div className="dropdown-content">
							    <a href="#">Sign In</a>
							    <a href="#">Sign Out</a>
							  </div>
							</div>	
	     					<li className="footernav">Cart</li>
	     				</ul>
     				</div>
     				<div className="col-sm-1 col-md-1 col-lg-1"></div>
     				<div className="col-sm-2 col-md-2 col-lg-2">
     					<p className="quickfooter">Social links</p>
     					<img src="../images/fb-footer-icon.png"/>
     					<img src="../images/insta-footer-icon.png" className="instaicon"/>
     				</div>
     				<div className="col-sm-1 col-md-1 col-lg-1"></div>
     				<div className="col-sm-3 col-md-3 col-lg-3">
     					<p className="quickfooter">Contact</p>
     					<div className="col-sm-12 col-md-12 col-lg-12">	
		     				<div className="col-sm-6 col-md-6 col-lg-6">	
		     					<p className="contmailfoot">info@drent.com</p>
		     				</div>
		     				<div className="col-sm-6 col-md-6 col-lg-6">	
		     					<p className="contnofoot">+ 92 345 1248612</p>
		     				</div>	
		     			</div>		
     				</div>
     				<div className="col-sm-2 col-md-2 col-lg-2"></div>
     			</div>
     			<div className="row copyrightfoot" style={{margin:'0px'}}>
     				<p className="copytext">Copyright drent 2019.</p>
     			</div>
     		</footer>
     	</div>
    );

  }
}

export default FooterNew;