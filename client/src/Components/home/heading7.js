import React, { Component } from 'react';

class Heading7 extends Component {
  render() {
    
    return (
    	<div className="App" style={{backgroundImage: "url('./images/swrils.png')"}}>
    		<div className="container-fluid">
    			<div className="Heading">
    				<div className="container-fluid"></div>
	      			<h1 className="headings">Benifits</h1>
	      			<img src='./images/bar.png'/>
	      		</div>
	      		<div className="col-md-12 col-sm-12">
	      			<div className="col-md-2 col-sm-2"></div>
	      			<div className="col-md-4 col-sm-4">
	      				<ul>
	      					<li className="benifits">KRL Creatives</li><br/>
	      					<li className="benifits">KRL Creatives</li><br/>
	      					<li className="benifits">KRL Creatives</li><br/>
	      				</ul>
	      			</div>
	      			<div className="col-md-1 col-sm-1"></div>
	      			<div className="col-md-4 col-sm-4">
	      				<ul>
	      					<li className="benifits">KRL Creatives</li><br/>
	      					<li className="benifits">KRL Creatives</li><br/>
	      					<li className="benifits">KRL Creatives</li><br/>
	      				</ul>
	      			</div>
	      			<div className="col-md-1 col-sm-1"></div>
	      		</div>
	      	</div>
	      	
    	</div>
     );

  }
}

export default Heading7;