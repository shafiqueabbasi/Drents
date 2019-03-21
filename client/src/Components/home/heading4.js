import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Heading4 extends Component {
  render() {
  	const { label, hrLine, data, showEditDelete, onDelete, profile, userAvailable, orderhistory } = this.props;
    console.log(this.props,'proppsssss')
    return (
    	<div className="App">
    		{label && label.length > 0 && <div className="Heading">
      			<h1 className="headings">{label}</h1>
      			<img src='../images/bar.png' style={{marginTop:'-1%'}}/>
      		</div>}
      		<div className="container-fluid">
	    		<div className="container-fluid">
	    			<div className="col-md-12 col-sm-12">
	    				<div className="row" style={{textAlign:'center'}}>
	    					{data && data.map((elem, key) => {
	    						return(
	    							<div className="col-md-3">
			    						<Link key={key} to={{pathname: `/detail`, state: {elem, data}}}>
			    							<img src={elem.fileList[0]} className="zoom" style={{height: '307px'}} />
		    							</Link>
		    							<div>
		    								{showEditDelete && userAvailable && <div className="row">
		    									<div className="col-md-6">
		    										<Link to={{pathname: `/userdetail`, state: {goTo: 'uploadDress', elem, profile, orderhistory}}}>
		    											<h2 className="h_dress">Edit</h2>
		    										</Link>
		    									</div>
		    									<div className="col-md-6">
		    										<h2 className="h_dress" onClick={() => onDelete(elem)}>Delete</h2>
		    									</div>
		    								</div>}
		    								<h2 className="h_dress" style={{color:'#c2073f'}}>{elem.productName}</h2>
		    								<h3 className="h_dress">{elem.detailName}</h3>
		    								<h3 className="h_dress">$ {" " + elem.priceDay}</h3>
		    							</div>
			    					</div>
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
