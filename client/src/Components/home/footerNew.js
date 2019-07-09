import React, { Component } from 'react';
import  './mobileheader.css';
import Login from '../login/SignIn';
import { Link, withRouter } from "react-router-dom";
import SignUp from '../login/SignUp';
import './home.css';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class FooterNew extends Component {
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
      console.log(loggedIn ,'loggedIn')

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
     		<footer style={{backgroundColor:'#473463'}}>
     			<div className="stage">
     				<img src="../images/scroll-logo.png" className="scrollfoot"/>
     			</div>
     			<div className="row rowpaddmarg">
     				<div className="col-sm-1 col-md-1 col-lg-1"></div>
     				<div className="col-sm-2 col-md-2 col-lg-2">
     					<p className="quickfooter">Quick Links</p>
     					<ul className="nav navbar-nav">
	     					<li className="footernav"><Link to={`/`}>Home</Link></li>
	     					<li className="footernav"><Link to={`/product`}>Catalog</Link></li>
					   {loggedIn && <li className="footernav" onClick={this.logOut}><a className="nav">Log Out</a></li>}

                       {!loggedIn && <li className="footernav">
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
                                  <button type="button" className="btn btn-default" data-dismiss="modal" id='closeSignInModal'>Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                       </li>}
                       {!loggedIn && <li className="footernav">
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
                        <li className="footernav">
                            <Link to={{pathname: `/checkout`, state: {finalArr}}} className="nav">
                              Cart
                              <span>
                                {finalArr.length > 0 ? finalArr.length : ''}
                              </span>
                            </Link>
                        </li>
                    {loggedIn && <li className="footernav marg_nav" style={{textAlign:'center'}}><Link to={`/profile/${userId}`} className="nav">My Profile</Link></li>} 
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
		     				<div className="col-sm-12 col-md-6 col-lg-6">	
		     					<p className="contmailfoot">info@drent.com</p>
		     				</div>
		     				<div className="col-sm-12 col-md-6 col-lg-6">	
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

function mapStateToProps(state) {
    const { loggedIn, user } = state.authentication;
    return {
        loggedIn, user
    };
}

const signUpLogin = connect(mapStateToProps)(FooterNew);
export default withRouter(signUpLogin);
