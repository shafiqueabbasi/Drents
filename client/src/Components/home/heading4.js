import React, { Component } from 'react';

class Heading4 extends Component {
  render() {
  	const { label, hrLine } = this.props;
    
    return (
    	<div className="App" style={{backgroundImage: "url('./images/swrils.png')"}}>
    		{label && label.length > 0 && <div className="Heading">
      			<h1 className="headings">{label}</h1>
      			<img src='./images/bar.png'/>
      		</div>}
      		<div className="container-fluid">
	    		<div className="container-fluid">
	    			<div className="col-md-12">
	    				<div className="row" style={{textAlign:'center'}}>
	    					<div className="col-md-4">
	    						<img src="./images/dress1.jpg" className="dress1" style={{width:'100%'}} />
	    							<div>
	    								<h2 className="h_dress">Sheta</h2>
	    								<h3 className="h_dress">Lase Trim Shirts</h3>
	    								<h3 className="h_dress">$ 400</h3>
	    							</div>
	    					</div>
	    					<div className="col-md-4">
	    						<img src="./images/dress2.jpg" className="dress2" style={{width:'100%'}}/>
	    							<div>
	    								<h2 className="h_dress">Sheta</h2>
	    								<h3 className="h_dress">Lase Trim Shirts</h3>
	    								<h3 className="h_dress">$ 400</h3>
	    							</div>
	    					</div>
	    					<div className="col-md-4">
	    						<img src="./images/dress3.jpg" className="dress3" style={{width:'100%'}}/>
	    						<div>
		    						<div>
		    							<h2 className="h_dress">Sheta</h2>
		    							<h3 className="h_dress">Lase Trim Shirts</h3>
		    							<h3 className="h_dress">$ 400</h3>
		    						</div>
		    					</div>
	    					</div>
	    					
	    					{hrLine && <div className="col-md-12">
	    						<hr/>
	    					</div>}
	    				</div>
	    			</div>

	    		</div>
	    	</div>
    	</div>
    );

  }
}

export default Heading4;