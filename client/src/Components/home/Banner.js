import React, { Component } from 'react';

class SecondPage extends Component {

  render() {

    return (
    <div>
        <div>

              <img src="../images/drent-purple-header.png" className="banneralign" />
             
              <div className="relationtext container">
                  <img src="../images/header-welcome-leaf.png" className="banerleaf"/><br/>  
                  <p className="weltext">WELCOME</p>
                  <p className="lartext">Luxury <br/>clothing <br/>for rent.</p><br/>
                <div className="row">
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <img src="../images/arrow.png" className="arrowimg"/>
                  </div>
                  <div className="col-xs-9 col-sm-3 col-md-2 col-lg-2">
                    <p className="smaltext">SHOW CATALOG</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{textAlign:'center'}}>
                    <img src="../images/scroll-logo.png" className="scrollimag"/>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
              </div>
        </div>
    </div>
    );

  }
}

export default SecondPage;


{/*<div className="row App B_H hidden-xs">
        <div className="row Banner">
          <img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1555483736/banner-2_krkshp.jpg" style={{width: '100%'}}/>
        </div>
      </div>
      <div className="App B_H visible-xs">
        <div className="Banner">

          <img alt="" src="./images/Banner-2.jpg" style={{width: '100%'}}/>

          <img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1555483736/banner-2_krkshp.jpg" style={{width: '100%'}}/>
        </di>
      </div>*/}