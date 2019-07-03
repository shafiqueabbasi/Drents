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
 			<div className="row navbar ">
     			<div className="col-sm-2 col-md-2 col-lg-2 hidden-xs">
					<img src="../images/drent-logo.png" style={{height:'45px', marginTop:'25px'}}/>
     			</div>
     			<div className="col-sm-1 col-md-3 col-lg-6 hidden-xs"></div>
     			<div className="col-sm-9 col-md-7 col-lg-4 hidden-xs">
     				<ul className="nav navbar-nav navbar-right">
     					<li className="head"><Link to={`/`}>Home</Link></li>
     					<li className="head"><Link to={`/product`} className="nav">Catalog</Link></li>
     					 {loggedIn && <li className="head" onClick={this.logOut}><a className="nav">Log Out</a></li>}

                      {!loggedIn && <li className="head">
                        <a href="#" className="nav" data-toggle="modal" data-target="#SignIn" >Sign In</a>
                          <div className="modal fade" id="SignIn" role="dialog">
                            <div className="modal-dialog widht_sm">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <div className="row">
                                      <div className="">
                                        <h4 className="modal-title margmodal">Sign In</h4>
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
                            <div className="modal-dialog widht_sm">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <div className="row">
                                      <div className="">
                                        <h4 className="modal-title margmodal">Sign Up</h4>
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
	                        <Link to={{pathname: `/checkout`, state: {finalArr}}} className="nav">
	                          Cart
	                          <span>
	                            {finalArr.length > 0 ? finalArr.length : ''}
	                          </span>
	                        </Link>
                      </li>
                 {loggedIn && <li className="headCartpro marg_nav" style={{textAlign:'center'}}><Link to={`/profile/${userId}`} className="nav">My Profile</Link></li>}     
     				</ul>
     			</div>
 			</div>


      <div id="myNav" className="overlay visible-xs">
              <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
              <div className="overlay-content">
                <ul className="nav navbar-nav navbar-right customhover">
                      <li className="mob_head"><Link to={`/`} className="nav" onClick={this.closeNav}>Home</Link></li>
                      <li className="mob_head"><Link to={`/product`} className="nav" onClick={this.closeNav}>Catalog</Link></li>
                      {loggedIn &&<li className="mob_head"><Link to={`/profile/${userId}`} className="nav" onClick={this.closeNav}>My Profile</Link></li>}
                      {loggedIn && <li className="mob_head" onClick={this.logOut}><a className="nav" onClick={this.closeNav}>Log Out</a></li>}

                      {!loggedIn && <li className="mob_head">
                        <a href="#" className="nav" data-toggle="modal" data-target="#SignIn1" onClick={this.closeNav}>Sign In</a>
                          <div className="modal fade" id="SignIn1" role="dialog">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title" style={{textAlign:'center',fontSize: '40px'}}>Sign In</h4>
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
                                  <h4 className="modal-title mob_menu" style={{textAlign:'center', marginLeft: '30px !important'}}>Sign Up</h4>
                                </div>
                                <div className="modal-body">
                                    <SignUp />
                                </div>

                              </div>
                            </div>
                          </div>
                      </li>}


                      <li className="mob_headCart">
                          <Link to={{pathname: `/checkout`, state: {finalArr}}} className="nav">
                            Cart
                            <span>
                              {finalArr.length > 0 ? finalArr.length : ''}
                            </span>
                          </Link>
                      </li>



                      {/*<li className="head">
                        <Link to={{pathname: `/checkout`, state: {finalArr}}} className="nav badge">
                          <img src="../images/bag.png" style={{marginTop:'-5px'}}/>
                          <span className="badge">
                            {finalArr.length > 0 ? finalArr.length : ''}
                          </span>
                        </Link>
                      </li>*/}
                    </ul>
              </div>
            </div>

            <div className="row visible-xs" style={{background:'linear-gradient(to bottom, #473463 0%, #2a1f3b 100%)', marginTop:'-22%' , marginLeft:'-12%'}}>
              <div className="col-md-4 col-xs-4">
                <i onClick={this.openNav} className="fas fa-bars" style={{color:'white',marginLeft:'8px',fontSize:'24px',marginTop:'10px'}}></i>
              </div>
              <div className="col-xs-4">
                <Link to={`/`}><img src="../images/drent-logo.png" style={{height:'45px'}}/></Link>
              </div>
              <div className="col-xs-4">
                {/*<i className="fas fa-search"></i>*/}
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
