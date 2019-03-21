import React, { Component } from 'react';
import  './mobileheader.css';
import Login from '../login/SignIn';
import { Link, withRouter } from "react-router-dom";
import SignUp from '../login/SignUp';

import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class FirstPage extends Component {
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
    const { loggedIn, arr, user } = this.props,
    { arrCart } = this.state;
    let finalArr = arr.length > 0 ? arr : arrCart,
    userId = user && user._id ? user._id : '';
    console.log(this.props,'HHHHHeeeeeeaaadrrrrr')
    return (
      <div>
      	<div className="nav navbar navbar-fixed-top bgc">
      	  <div className="nav navbar navbar-fixed-top bgc hidden-xs">
      		  <div className="container-fluid">
      	  	  <div className="col-md-4 col-sm-2">
      			 	  <div className="navbar-header" style={{marginBottom:'-3%'}}>
      					  <a href="#" className="hidden-sm"><img src="../images/Drent-logo-white.png" style={{width: '46%', height : '103px'}}/></a>
                  <a href="#" className="visible-sm"><img src="../images/Drent-logo-white.png" style={{width: '110%'}}/></a>
      				  </div>
      			  </div>
      		    <div className="container-fluid">
      			    <div className="col-md-8 col-sm-10  container customhover">
      				    <ul className="nav navbar-nav navbar-right customhover">
      					    <li className="head"><Link to={`/`} className="nav" style={{fontSize:'12px'}}>HOME</Link></li>
        				    <li className="head"><Link to={`/product`} className="nav" style={{fontSize:'12px',marginRight:'-9px'}}>PRODUCT</Link></li>
                    {loggedIn && <li className="head" style={{marginRight: '-28px'}}><Link to={`/profile/${userId}`} className="nav" style={{fontSize:'12px'}}>MY PROFILE</Link></li>}
        				    <li className="head"><Link to={`/detail`} className="nav" style={{fontSize:'12px'}}></Link></li>
        				    {/*<li className="head"><Link to={`/detail`} className="nav" style={{fontSize:'12px'}}>TESTIMONIALS</Link></li>*/}
                    {loggedIn && <li className="head" onClick={this.logOut}><a className="nav" style={{fontSize:'12px'}}>Log Out</a></li>}

                    {!loggedIn && <li className="head">
                      <a href="#" className="nav" data-toggle="modal" data-target="#SignIn" style={{fontSize:'12px'}}>Sign In</a>
                        <div className="modal fade" id="SignIn" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" style={{textAlign:'center'}}>Sign In</h4>
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
                      <a href="#" className="nav" data-toggle="modal" data-target="#SignUp" style={{fontSize:'12px'}}>Sign Up</a>
                        <div className="modal fade" id="SignUp" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" style={{textAlign:'center'}}>Sign Up</h4>
                              </div>
                              <div className="modal-body">
                                  <SignUp />
                              </div>

                            </div>
                          </div>
                        </div>
                    </li>}
                    <li className="head">
                      <Link to={{pathname: `/checkout`, state: {finalArr}}} className="nav badge">
                        <img src="../images/bag.png" style={{marginTop:'-5px'}}/>
                        <span className="badge">
                          {finalArr.length > 0 ? finalArr.length : ''}
                        </span>
                      </Link>
                    </li>
      				    </ul>
      			    </div>
      		    </div>
      		  </div>
      	  </div>
          <div id="myNav" className="overlay visible-xs" style={{background:'#c2073fcf'}}>
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <div className="overlay-content">
              <ul className="nav navbar-nav navbar-right customhover">
                    <li className="head"><Link to={`/`} className="nav" onClick={this.closeNav}>HOME</Link></li>
                    <li className="head"><Link to={`/product`} className="nav" onClick={this.closeNav}>PRODUCT</Link></li>
                    {loggedIn &&<li className="head"><Link to={`/profile/${userId}`} className="nav" onClick={this.closeNav}>MY PROFILE</Link></li>}
                    {loggedIn && <li className="head" onClick={this.logOut}><a className="nav" onClick={this.closeNav}>Log Out</a></li>}

                    {!loggedIn && <li className="head">
                      <a href="#" className="nav" data-toggle="modal" data-target="#SignIn1" onClick={this.closeNav}>Sign In</a>
                        <div className="modal fade" id="SignIn1" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" style={{textAlign:'center'}}>Sign In</h4>
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
                      <a href="#" className="nav" data-toggle="modal" data-target="#SignUp1">Sign Up</a>
                        <div className="modal fade" id="SignUp1" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" style={{textAlign:'center'}}>Sign Up</h4>
                              </div>
                              <div className="modal-body">
                                  <SignUp />
                              </div>

                            </div>
                          </div>
                        </div>
                    </li>}
                    <li className="head">
                      <Link to={{pathname: `/checkout`, state: {finalArr}}} className="nav badge">
                        <img src="../images/bag.png" style={{marginTop:'-5px'}}/>
                        <span className="badge">
                          {finalArr.length > 0 ? finalArr.length : ''}
                        </span>
                      </Link>
                    </li>
                  </ul>
            </div>
          </div>
          <div className="row visible-xs" style={{background:'#c2073f'}}>
            <div className="col-md-4 col-xs-4">
              <i onClick={this.openNav} className="fas fa-bars" style={{color:'white',marginLeft:'8px',fontSize:'24px',marginTop:'10px'}}></i>
            </div>
            <div className="col-md-4 col-xs-4">
              <img src="./images/Drent-logo-white.png" style={{width:'80%'}} />
            </div>
            <div className="col-md-4 col-xs-4">
              {/*<i className="fas fa-search"></i>*/}
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

const signUpLogin = connect(mapStateToProps)(FirstPage);
export default withRouter(signUpLogin);
