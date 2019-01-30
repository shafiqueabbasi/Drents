import React, { Component } from 'react';
import  './mobileheader.css';
import Login from '../login/SignIn';
import SignUp from '../login/SignUp';

class FirstPage extends Component {
  openNav = ()=>{
    document.getElementById("myNav").style.width = "100%";
  }
  closeNav = () =>{
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <div>
      	<div className="nav navbar navbar-fixed-top bgc">
      	  <div className="nav navbar navbar-fixed-top bgc hidden-xs">
      		  <div className="container-fluid">
      	  	  <div className="col-md-4 col-sm-3">
      			 	  <div className="navbar-header">
      					  <a href="#" className="hidden-sm"><img src="./images/Drent-logo-white.png" style={{width: '40%'}}/></a>
                  <a href="#" className="visible-sm"><img src="./images/Drent-logo-white.png" style={{width: '110%'}}/></a>
      				  </div>
      			  </div>
      		    <div className="container-fluid">
      			    <div className="col-md-8 col-sm-9  container customhover">
      				    <ul className="nav navbar-nav navbar-right customhover">
      					    <li className="head"><a href="#" className="nav">HOME</a></li>
        				    <li className="head"><a href="#" className="nav">PRODUCT</a></li>
        				    <li className="head"><a href="#" className="nav">TESTIMONIALS</a></li>
        				    <li className="head"><a href="#" className="nav">MY PROFILE</a></li>
                    <li className="head">
                      <a href="#" className="nav" data-toggle="modal" data-target="#SignIn">Sign In</a>
                        <div className="modal fade" id="SignIn" role="dialog">
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
                    </li>
                    <li className="head">
                      <a href="#" className="nav" data-toggle="modal" data-target="#SignUp">Sign Up</a>
                        <div className="modal fade" id="SignUp" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" style={{textAlign:'center'}}>Sign Up</h4>
                              </div>
                              <div className="modal-body">
                                  <SignUp />
                              </div>
                              
                            </div>
                          </div>
                        </div>

                    </li>







                    <li className="head"><a href="#" className="nav"><img src="./images/bag.png" style={{marginTop:'-5px'}}/></a></li>
      				    </ul>
      			    </div>
      		    </div>
      		  </div>
      	  </div>



          <div id="myNav" className="overlay visible-xs" style={{background:'#c2073fcf'}}>
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <div className="overlay-content">
              <a href="#">HOME</a>
              <a href="#">PRODUCT</a>
              <a href="#">TESTIMONIALS</a>
              <a href="#">MY PROFILE</a>
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
              {/*<i class="fas fa-search"></i>*/}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default FirstPage;
