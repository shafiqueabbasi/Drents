import React, { Component } from 'react';

class Heading5 extends Component {
  render() {
    
    return (
     	<div>
          <div className="row hidden-xs" style={{margin:'0px'}}>
            <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <p className="benetext">BENEFITS</p>
                <p className="whydrenttext">Why Drent?</p>
            </div>
            <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                <img src="../images/wear-new-dresses-icon.png" className="wearnew"/>
                <p className="whydresub">Wear new dresses</p>
                <p className="whydresmal">Wear new dresses at every event and gathered compliments!</p>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                <img src="../images/pay-less-for-more-icon.png" className="payless"/>
                <p className="whydresub">Pay less <br/>for more</p>
                <p className="whydresmal">Buy new dresses is expensive. Why not rent and save?</p>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                <img src="../images/make-money-icon.png" className="makemoney"/>
                
                    <p className="whydresub">Make extra <br/>cash</p>
                    <p className="whydresmal">Rent those dresses in closet and make extra cash.</p>
                
            </div>
            <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
          <div className="visible-xs" style={{margin:'0px'}}>
            <div className="col-xs-12">
                <p className="benetext" style={{textAlign:'center'}}>BENEFITS</p>
                <p className="whydrenttext" style={{textAlign:'center'}}>Why Drent?</p>
            </div><br/>
            <div className="row" style={{margin:'0px'}}>
              <div className="col-xs-3">
                <img src="../images/wear-new-dresses-icon.png" className="wearnew"/>
              </div>
              <div className="col-xs-9">  
                <p className="whydresub">Wear new dresses</p>
                <p className="whydresmal">Wear new dresses at every event and gathered compliments!</p>
              </div>            
            </div>
            <div className="row" style={{margin:'0px'}}>
              <div className="col-xs-3"> 
                <img src="../images/pay-less-for-more-icon.png" className="payless"/>
              </div>
              <div className="col-xs-9">   
                <p className="whydresub">Pay less for more</p>
                <p className="whydresmal">Buy new dresses is expensive. Why not rent and save?</p>
              </div>
            </div>
            <div className="row" style={{margin:'0px'}}>
              <div className="col-xs-3"> 
                <img src="../images/make-money-icon.png" className="makemoney"/>          
              </div>
              <div className="col-xs-9">       
                  <p className="whydresub">Make extra cash</p>
                  <p className="whydresmal">Rent those dresses in closet and make extra cash.</p>               
              </div>
            </div>
          </div>
          <br/><br/><br/><br/><br/><br/>
          <div className="row" style={{margin:'0px'}}>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5"></div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <p className="benetext">GET ON IT</p>
                  <p className="whydrenttext">What's next?</p><br/>
                  <div className="row" style={{margin:'0px'}}>
                      <div className="col-sm-5 col-md-5 col-lg-5 divcolour">
                          <p className="smaltexthead">browse all available dresses and rent the right <br/>one for the next event</p>
                          <p className="whatsnewhead">Rent dresses</p>
                          <img src="../images/arrow.png" className="arrowimage" />
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2"></div>
                      <div className="col-sm-5 col-md-5 col-lg-5 divcolour">
                          <p className="smaltexthead">Sign up your account and put your dresses <br/>for rent to earn money</p>
                          <p className="whatsnewhead">Make cash</p>
                          <img src="../images/arrow.png" className="arrowimage" />
                      </div>
                  </div>
              </div>
              <div className="col-xs-1` col-sm-1 col-md-1 col-lg-1"></div>
          </div><br/><br/><br/><br/>
      </div>
    );

  }
}

export default Heading5;


          {/*<div className="Heading">
            <h1 className="headings">Our Happy users</h1>
            <img alt="" src='./images/bar.png'/>
          </div>
          <div className="container hidden-xs" style={{textAlign:'center'}}>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-4 col-sm-4 col-xs-12 mobi">
                  <div className="col-md-12 col-sm-12 col-xs-12 scrollbar border_custom" id="style-1">
                    <img alt="" src="./images/mark.png" className="mark"/>
                    <h4>Its Empowering</h4>
                    <p className="p_mark">Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-4 col-xs-12 mobi">
                  <div className="col-md-12 col-sm-12 col-xs-12 scrollbar border_custom" id="style-1">
                    <img alt="" src="./images/mark.png" className="mark"/>
                    <h4>Its Empowering</h4>
                    <p className="p_mark">Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 mobi">
                  <div className="col-md-12 col-sm-12 col-xs-12 scrollbar border_custom" id="style-1">
                    <img alt="" src="./images/mark.png" className="mark"/>
                    <h4>Its Empowering</h4>
                    <p className="p_mark">Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div>
            </div>
            
          </div>
          <div className="col-md-12">
            <hr/>
          </div>



          <div className="container visible-xs" style={{textAlign:'center'}}>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-4 col-sm-4 col-xs-12 mobi" style={{marginBottom: '5px'}}>
                  <div className="col-md-12 col-sm-12 col-xs-12 scrollbar border_custom" id="style-1">
                    <img alt="" src="./images/mark.png" className="mark"/>
                    <h4>Its Empowering</h4>
                    <p className="p_mark">Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-4 col-xs-12 mobi" style={{marginBottom: '5px'}}>
                  <div className="col-md-12 col-sm-12 col-xs-12 scrollbar border_custom" id="style-1">
                    <img alt="" src="./images/mark.png" className="mark"/>
                    <h4>Its Empowering</h4>
                    <p className="p_mark">Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 mobi" style={{marginBottom: '5px'}}>
                  <div className="col-md-12 col-sm-12 col-xs-12 scrollbar border_custom" id="style-1">
                    <img alt="" src="./images/mark.png" className="mark"/>
                    <h4>Its Empowering</h4>
                    <p className="p_mark">Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is it to make of scrambled to make a it to make a type simply dummy of scrambled type specimen book. essentially unchanged Lorem Ipsum is simply dummy of scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div>
            </div>
            
          </div>*/}

          
