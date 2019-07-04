import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Heading extends Component {
      state = {
        toProduct: false,
        filter:''
      }
  checkingFilter = (filter) => {
    this.setState({
      toProduct:true,
      filter:filter
    })
  }

  render() {
    if (this.state.toProduct === true) {
      return <Redirect to={{pathname:'/product', state:this.state.filter}} />
    }
    return (
      <div className="" style={{ backgroundImage: "url('../images/welcome-background-left.png')", 
      backgroundSize: '',
      backgroundRepeat: 'no-repeat'
    }}>
          <div className="row" style={{margin:'0px'}}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{textAlign:'center'}}>
                    <img src="../images/scroll-logo.png" className="scrollimag"/>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          </div><br/><br/><br/>
          <p className="weldrent">Welcome to Drent</p><br/>
          <p className="subtext hidden-xs">With Drent, you can get your perfect dress at a fraction of the cost!</p><br/><br/>
          <p className="subtext visible-xs">With Drent, you can get your perfect dress <br/>at a fraction of the cost!</p><br/><br/> <br/><br/>     
      </div>
    );

  }
}

export default Heading;

      		{/*<div className="container">
	            <div className="Heading22">
	                <h1 className="headings22">Choose Your Occasion</h1>
	                <img src='../images/bar.png' style={{marginTop:'-1%'}}/>
	            </div>
            </div>
            <div className="container googleapp">
                <div className="row">
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1555483262/Casual_g8ji04.jpg" className="img22" onClick={this.checkingFilter.bind(this,'Causal')}/>
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Causal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1555483365/Bridal_dataye.jpg" className="img22" onClick={this.checkingFilter.bind(this,'Bridal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Bridal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1555483262/Semi_Formal_sbotgt.jpg" className="img22" onClick={this.checkingFilter.bind(this,'Semi Formal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Semi Formal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1555483262/Formal_kqspui.jpg" className="img22" onClick={this.checkingFilter.bind(this,'Formal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Formal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12 google2">
                          <img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1555483262/Heavy_Formal_fksvpf.jpg" className="img22" onClick={this.checkingFilter.bind(this,'Heavy Formal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Heavy Formal</h3>
                          </div>
                    </div>
                </div>
            </div><br/><br/>*/}