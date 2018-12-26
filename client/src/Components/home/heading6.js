import React, { Component } from 'react';

class Heading6 extends Component {
  render() {
    
    return (
    	<div className="App" style={{backgroundImage: "url('./images/swrils.png')"}}>
    		<div className="container-fluid">
	    		<div className="Heading">
	      			<h1 className="headings">Subscription Plan</h1>
	      			<img src='./images/bar.png'/>
	      		</div>
	      		<div className="container-fluid" style={{textAlign: 'center'}}>
		      		<div className="col-md-2"></div>
		      		<div className="col-md-3 col-xs-12" style={{height: '431px', border:'2px solid #c2073f'}}>
		      			<div className="row">
		      				<div className="col-md-12" style={{textAlign:'center'}}>	
			      				<h2>New User Plan</h2><br/>
			      			</div>{/*col-md-12*/}
			      		</div>{/*row*/}
			      		<div className="row">
			      			<div className="col-md-2 col-xs-2">
			      				<img src="./images/dot.png" style={{height:'100%',width:'100%'}}/>
      						</div>
      						<div className="col-md-10 col-xs-10" style={{marginTop:'-10px'}}>
      							<h4 style={{textAlign:'left'}}>Rent 2 cloth per month</h4>
      						</div>{/*col-md-12*/}
			      		</div>{/*row*/}<br/>
			      		<div className="row">
			      			<div className="col-md-2 col-xs-2" style={{paddingTop:'10px'}}>
			      				<img src="./images/dot.png" style={{height:'100%',width:'100%'}}/>
      						</div>
      						<div className="col-md-10 col-xs-10">
      							<h4 style={{textAlign:'left'}}>Ordinary cloths</h4>
      						</div>{/*col-md-12*/}
			      		</div>{/*row*/}<br/>
			      		<div className="row">
			      			<div className="col-md-2 col-xs-2" style={{paddingTop:'10px'}}>
			      				<img src="./images/dot.png" style={{height:'100%',width:'100%'}}/>
      						</div>
      						<div className="col-md-10 col-xs-10">
      							<h4 style={{textAlign:'left'}}>5 brands</h4>
      						</div>{/*col-md-12*/}
			      		</div>{/*row*/}<br/>
			      				{/*<ul>
			      					<li>Rent 2 cloth per month</li>
			      				</ul>*/}
			      			<div className="row">
				      			<div className="col-md-12 col-xs-12" style={{backgroundColor:'#c2073f',marginTop:'61px'}}>
					      			<h1 className="free">Free</h1>
					      		</div>
				      		</div>
			      	</div>
		      		<div className="col-md-2"></div>
		      			<div className="col-md-3 col-xs-12" style={{height: '420px', widht: '150px', border:'2px solid #c2073f'}}>
		      				<div className="row">
			      				<div className="col-md-12">
			      					<div className="row">
			      						<div className="col-md-12">
			      							<h2>New User Plan</h2><br/>
			      							<div className="col-md-2 col-xs-2" style={{paddingTop:'8px'}}>
			      								<img src="./images/dot.png" style={{height:'100%',width:'116%'}}/>	
			      							</div>
			      							<div className="col-md-10">
			      								<h4 style={{textAlign:'left'}}>Rent 10 cloth per month</h4>
			      							</div><br/>
			      							<div className="col-md-2 col-xs-2" style={{paddingTop:'8px'}}>
			      								<img src="./images/dot.png" style={{height:'100%',width:'116%'}}/>
			      							</div>
			      							<div className="col-md-10">
			      								<h4 style={{textAlign:'left'}}>Brandeds Cloths</h4>
			      							</div><br/>
			      							<div className="col-md-2 col-xs-2" style={{paddingTop:'8px'}}>
			      								<img src="./images/dot.png" style={{height:'100%',width:'116%'}}/>
			      							</div>
			      							<div className="col-md-10">
			      								<h4 style={{textAlign:'left'}}>50 brands</h4>
			      							</div><br/>
			      							<div className="col-md-2 col-xs-2" style={{paddingTop:'8px'}}>
			      								<img src="./images/dot.png" style={{height:'100%',width:'116%'}}/>
			      							</div>
			      							<div className="col-md-10">
			      								<h4 style={{textAlign:'left'}}>Disscount Offers</h4>
			      							</div><br/>
			      						</div>
			      					</div>
			      				</div>
			      				<div className="col-md-12" style={{backgroundColor:'#c2073f',height:'50%'}}>
			      					<h1 className="free">Free</h1>
			      				</div>
			      			</div>	
		      			</div>
		      		<div className="col-md-2"></div>
		      		<div className="col-md-12"><hr/></div>
    			</div>
    		</div>
    	</div>
     );

  }
}

export default Heading6;