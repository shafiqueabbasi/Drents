import React, { Component } from 'react';
import  './mobileheader.css';
import Login from '../login/SignIn';
import { Link, withRouter } from "react-router-dom";
import SignUp from '../login/SignUp';
import './home.css';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Headernew extends Component {
  state = {
      arrCart: [],
  }

  async componentDidMount(){
      let cart = await localStorage.getItem('Cart');
      if(cart == null){
          this.setState({ arrCart : [] })
      }else {
          let arrCart = JSON.parse(cart);
          this.setState({ arrCart });
      }
  }

  openNav = ()=>{
      console.log(document.getElementById("myNav"))
     document.getElementById("myNav").style.width = "100%";

  }

  closeNav = () =>{
      document.getElementById("myNav").style.width = "0%";
  }

  logOut = () => {
      this.props.dispatch(userActions.logout())
      this.props.history.push('/')
  }

  render() {
      const { loggedIn, arr, user, location } = this.props,
      { arrCart } = this.state;
      let finalArr = arr.length > 0 ? arr : arrCart,
      userId = user && user._id ? user._id : '';
      //console.log(this.props, 'bhai jaaannnn bhai jaannn')
      //console.log(location,'location')
      let str = location.pathname;
      if(str.slice(str.indexOf("/") + 1, str.indexOf("/", 1)) == 'reset'){
        return null;
      }

      return (
    <div>
 		<div className="container">
 			<div className="row navbar">
     			<div className="col-sm-2 col-md-2 col-lg-2">
					<img src="../images/drent-logo.png" style={{height:'45px', marginTop:'25px'}}/>
     			</div>
     			<div className="col-sm-4 col-md-4 col-lg-4 hidden-xs"></div>
     			<div className="col-sm-6 col-md-6 col-lg-6 hidden-xs">
     				<ul className="nav navbar-nav navbar-right">
     					<li className="head"><Link to={`/`}>Home</Link></li>
     					<li className="head"><Link to={`/product`} className="nav">Catalog</Link></li>
     					 {loggedIn && <li className="head" onClick={this.logOut}><a className="nav">Log Out</a></li>}

                      {!loggedIn && <li className="head">
                        <a href="#" className="nav" data-toggle="modal" data-target="#SignIn" >Sign In</a>
                          <div className="modal fade" id="SignIn" role="dialog">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <div className="row">
                                      <div className="container">
                                        <h4 className="modal-title">Sign In</h4>
                                      </div>
                                  </div>                                  
                                </div>
                                <div className="modal-body">
                                  <Login />
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                      </li>}
                      {!loggedIn && <li className="head">
                        <a href="#" className="nav" data-toggle="modal" data-target="#SignUp">Sign Up</a>
                          <div className="modal fade" id="SignUp" role="dialog">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <div className="row">
                                      <div className="container">
                                        <h4 className="modal-title">Sign In</h4>
                                      </div>
                                  </div>
                                </div>
                                <div className="modal-body scrolling_form">
                                    <SignUp />
                                </div>

                              </div>
                            </div>
                          </div>
                      </li>}	
     					<li className="headCart">
	                        <Link to={{pathname: `/checkout`, state: {finalArr}}} className="nav" style={{background: 'none'}}>
	                          Cart
	                          <span>
	                            {finalArr.length > 0 ? finalArr.length : ''}
	                          </span>
	                        </Link>
                        </li>
     				</ul>
     			</div>
 			</div>
 		</div>

 		{/*Banner of Home*/}

 		<div>            
              <img src="../images/drent-purple-header.png" className="banneralign" />

              <div className="relationtext container">
                <div className="row" style={{margin:'0px'}}>
                  <img src="../images/header-welcome-leaf.png" className="banerleaf"/><br/>  
                </div>
                <div className="row" style={{margin:'0px'}}>  
                  <p className="weltext">WELCOME</p>
                </div>
                <div className="row" style={{margin:'0px'}}>
                    <p className="lartext">Luxury</p>
                </div>
                <div className="row" style={{margin:'0px'}}>
                    <p className="lartext">clothing </p>
                </div>
                <div className="row" style={{margin:'0px'}}>
                    <p className="lartext">for rent.</p>
                </div> 
                  {/*<p className="lartext"> <br/><br/></p><br/>*/}
                <div className="row">
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <img src="../images/arrow.png" className="arrowimg"/>
                  </div>
                  <div className="col-xs-9 col-sm-3 col-md-2 col-lg-2">
                    <p className="smaltext">SHOW CATALOG</p>
                  </div>
                </div>
              </div>
        </div>

  	</div>
    );

  }
}


function mapStateToProps(state) {
    const { loggedIn, user } = state.authentication;
    return {
        loggedIn, user
    };
}

const signUpLogin = connect(mapStateToProps)(Headernew);
export default withRouter(signUpLogin);
				