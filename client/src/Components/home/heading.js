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
      <div className="App">
      		<div className="container">
	            <div className="Heading22">
	                <h1 className="headings22">Choose Your Occasion</h1>
	                <img src='./images/bar.png' style={{marginTop:'-1%'}}/>
	            </div>
            </div>
            <div className="container googleapp">
                <div className="row">
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src='./images/productdetail/bridal 22 - Copy.jpeg' className="img22" onClick={this.checkingFilter.bind(this,'Causal')}/>
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Causal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src='./images/productdetail/bridal - Copy.jpeg' className="img22" onClick={this.checkingFilter.bind(this,'Bridal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Bridal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src='./images/productdetail/dress3.jpg' className="img22" onClick={this.checkingFilter.bind(this,'Semi Formal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Semi Formal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-12 google2">
                          <img src='./images/productdetail/bridal2.jpeg' className="img22" onClick={this.checkingFilter.bind(this,'Formal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Formal</h3>
                          </div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12 google2">
                          <img src='./images/productdetail/party.jpg' className="img22" onClick={this.checkingFilter.bind(this,'Heavy Formal')} />
                          <div style={{textAlign: 'center'}}>
                            <h3 className="pichead22">Heavy Formal</h3>
                          </div>
                    </div>
                </div>
            </div>


      </div>
    );

  }
}

export default Heading;






      	{/*<div className="container-fluid">
		    <div className="container-fluid">
		      	<div className="Heading">
		      		<h1 className="headings">Choose Your Occasion</h1>
		      		<img alt="" src='./images/bar.png'/>
		      	</div>

		      	<div className="container-fluid">
		      		<div className="col-md-12 hidden-sm">
		      			<div className="col-md-6">
		      				<div className="col-md-6">
		      					<div className="row" style={{margin: '0'}}>
		  							<div className="col-md-12 col-xs-12">
		  								<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="img"/>
		  							</div>
		  							<div className="col-md-12 col-xs-12">
		  								<div style={{textAlign: 'center'}}>
		  									<h3 className="pichead">Wedding</h3>
		  								</div>
		  							</div>
		      					</div>
		      				</div>
		      				<div className="col-md-6">
		      					<div className="row" style={{margin: '0'}}>
		      						<div className="col-md-12 col-sm-12">
		      							<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="imgs"/>
		      						</div>
		      						<div className="col-md-12">
		      							<div style={{width: '160px', textAlign: 'center'}}>
		      								<h3 className="pichead">Party</h3>
		      							</div>
		      						</div>
		      					</div>
		      				</div>

		      			</div>
		      			<div className="col-md-6">

		      				<div className="col-md-6">
		      					<div className="row" style={{margin: '0'}}>
		  							<div className="col-md-12 col-xs-12">
		  								<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="img"/>
		  							</div>
		  							<div className="col-md-12 col-xs-12">
		  								<div style={{width: '165px',textAlign: 'center'}}>
		  									<h3 className="pichead">Corporate Event</h3>
		  								</div>
		  							</div>
		      					</div>
		      				</div>
		      				<div className="col-md-6">
		      					<div className="row" style={{margin: '0'}}>
		      						<div className="col-md-12">
		      							<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="imgs"/>
		      						</div>
		      						<div className="col-md-12">
		      							<div style={{width: '200px', textAlign: 'center'}}>
		      								<h3 className="pichead">Spacial Occasion</h3>
		      							</div>
		      						</div>
		      					</div>
		      				</div>
		      			</div>
		      		</div>

		      		<div className="visible-sm">
		      			<div className="row">
		      				<div className="col-sm-6">
		      					<div className="row">
			      					<div className="col-sm-6">
			      						<div className="col-sm-12">
		  									<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="img"/>
		  								</div>
		  								<div className="col-sm-12">
			  								<div style={{width: '165px',textAlign: 'center'}}>
			  									<h3 className="pichead">Wedding</h3>
			  								</div>
		  								</div>
			      					</div>
			      					<div className="col-sm-6">
			      						<div className="col-sm-12">
		      								<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="imgs"/>
		      							</div>
		      							<div className="col-sm-12">
			      							<div style={{width: '160px', textAlign: 'center'}}>
			      								<h3 className="pichead">Party</h3>
			      							</div>
		      							</div>
			      					</div>
		      					</div>
		      				</div>
		      				<div className="col-sm-6">
		      					<div className="row">
		      						<div className="col-sm-6">
		      							<div className="col-sm-12">
		  									<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="img"/>
		  								</div>
		  								<div className="col-sm-12">
			  								<div style={{width: '165px',textAlign: 'center'}}>
			  									<h3 className="pichead">Corporate Event</h3>
			  								</div>
		  								</div>
		      						</div>
		      						<div className="col-sm-6">
		      							<div className="col-sm-12">
		      								<img alt="" src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1550646990/admin1_w8m7wf.jpg" className="imgs"/>
		      							</div>
			      						<div className="col-sm-12">
			      							<div style={{width: '200px', textAlign: 'center'}}>
			      								<h3 className="pichead">Spacial Occasion</h3>
			      							</div>
			      						</div>
		      						</div>
		      					</div>
		      				</div>
	      				</div>
	      			</div>
		      		</div>
		      		<div className="col-md-12"><hr/></div>
				</div>
			</div>

*/}
