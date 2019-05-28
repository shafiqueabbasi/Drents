import React, { Component } from 'react';
import './home.css';

class Heading3 extends Component {
  render() {
    
    return (
    	<div>
      		  <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-3 col-md-4 col-lg-4"></div>
                  <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                      <p className="howwork">HOW IT WORKS</p>
                      <p className="rentwork">How Drent Works</p>
                      <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <img src="../images/choose-your-dress-icon.png" className="iconimg" />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9">
                            <p className="chosedres">1.Choose a dress</p>
                            <p className="chosedetail">Browse our catalog of hundreds of available dresses from our users.
                                            Check out the details, confirm the size and move on to the next step.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <img src="../images/place-order-icon.png" className="iconimg2" />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9">
                            <p className="chosedres">2.Place your order</p>
                            <p className="chosedetail">Browse our catalog of hundreds of available dresses from our users.
                                            Check out the details, confirm the size and move on to the next step.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <img src="../images/return-repeat-icon.png" className="iconimg3" />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9">
                            <p className="chosedres">3.Return and repeat</p>
                            <p className="chosedetail">Browse our catalog of hundreds of available dresses from our users.
                                            Check out the details, confirm the size and move on to the next step.</p>
                        </div>
                      </div>
                  </div>
                  <div className="col-xs-12 col-sm-3 col-md-3 col-md-4"></div>             
              </div>
            </div>	
    	</div>
    );

  }
}

export default Heading3;


  {/*<div className="Heading">
              <h1 className="headings1" style={{marginBottom:'-1%'}}>How It Works</h1>
              <img src='./images/bar-white.png' style={{marginTop:'-1%'}}/>
          </div>

          <div className="container-fluid">
            <div className="col-md-12 col-sm-12">
              <div className="row" style={{textAlign: 'center',margin: '0', marginBottom: '2%'}}>
                <div className="col-md-4 col-sm-4">
                  <img alt="" src="./images/1-lapi.png" className="img-lapi"/>
                    <div className="col-md-12 col-sm-12">
                      <h3 className="h_lapi" style={{fontWeight: '400', marginTop:'10px'}}>Sign up or Register</h3>
                      <p className="p_lapi">We've made clothing rental easy!<br/> Select your mumbership plan, and we'll<br/> send you clothing and accessories<br/> tailored to you and your needs!</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <img alt="" src="./images/2-lapi.png"/>
                  <div className="col-md-12 col-sm-12">
                      <h3 className="h_lapi" style={{fontWeight: '400', marginTop:'10px'}}>Choose an order</h3>
                      <p className="p_lapi">We've made clothing rental easy!<br/> Select your mumbership plan, and we'll<br/> send you clothing and accessories<br/> tailored to you and your needs!</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <img alt="" src="./images/3-lapi.png"/>
                  <div className="col-md-12 col-sm-12">
                      <h3 className="h_lapi" style={{fontWeight: '400', marginTop:'10px'}}>Return and repeat</h3>
                      <p className="p_lapi">We've made clothing rental easy!<br/> Select your mumbership plan, and we'll<br/> send you clothing and accessories <br/>tailored to you and your needs!</p>
                    </div>
                </div>
              </div>
            </div>
          </div>*/}