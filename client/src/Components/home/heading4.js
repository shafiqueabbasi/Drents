import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Heading4 extends Component {
  render() {
  	const { label, hrLine, data } = this.props;
  	// console.log(data, 'data portion')
    
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
	    					{data && data.map((elem, key) => {
	    						return(
		    						<Link key={key} to={{pathname: `/detail`, state: {elem, data}}}>
		    							<div className="col-md-4">
				    						<img src={elem.fileList[0]} className="dress1" style={{width:'100%'}} />
			    							<div>
			    								<h2 className="h_dress">{elem.productName}</h2>
			    								<h3 className="h_dress">{elem.detailName}</h3>
			    								<h3 className="h_dress">$ {" " + elem.priceDay}</h3>
			    							</div>
				    					</div>
			    					</Link>
	    						)
	    					})}	    						    					
	    				</div>
	    			</div>
	    		</div>
	    	</div>
    	</div>
    );

  }
}

export default Heading4;


{/*<div className="col-md-4">
	    						<img src="./images/productdetail/dress2.jpg" className="dress2" style={{width:'100%'}}/>
	    							<div>
	    								<h2 className="h_dress">Sheta</h2>
	    								<h3 className="h_dress">Lase Trim Shirts</h3>
	    								<h3 className="h_dress">$ 400</h3>
	    							</div>
	    					</div>
	    					<div className="col-md-4">
	    						<img src="./images/productdetail/dress3.jpg" className="dress3" style={{width:'100%'}}/>
	    						<div>
		    						<div>
		    							<h2 className="h_dress">Sheta</h2>
		    							<h3 className="h_dress">Lase Trim Shirts</h3>
		    							<h3 className="h_dress">$ 400</h3>
		    						</div>
		    					</div>
	    					</div>*/}
	    					
	    					{/*{hrLine && <div className="col-md-12">
	    						<hr/>
	    					</div>}*/}