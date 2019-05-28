import React, { Component } from 'react';
import  './mobileheader.css';
import Login from '../login/SignIn';
import { Link, withRouter } from "react-router-dom";
import SignUp from '../login/SignUp';
import './home.css';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Headernew extends Component {
  render() {
    
    return (
     	<div>
     		<div className="container">
     			<div className="row navbar">
	     			<div className="col-sm-2 col-md-2 col-lg-2">
						<img src="../images/drent-logo.png" style={{height:'45px', marginTop:'25px'}}/>
	     			</div>
	     			<div className="col-sm-10 col-md-10 col-lg-10 hidden-xs">
	     				<ul className="nav navbar-nav navbar-right">
	     					<li className="head">Home</li>
	     					<li className="head">Catalog</li>
	     					<div className="dropdown">
							  <li className="head dropbtn">My Profile</li>
							  <div className="dropdown-content">
							    <a href="#">Sign In</a>
							    <a href="#">Sign Out</a>
							  </div>
							</div>	
	     					<li className="headCart">Cart</li>
	     				</ul>
	     			</div>
     			</div>
     		</div>
      	</div>
    );

  }
}

export default Headernew;