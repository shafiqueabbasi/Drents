import React, { Component } from 'react';
import Footer from '../home/headingf8';

class Filterpanel extends Component {
  render() {
    
    return (
    	<div style={{marginTop: '110px'}}>
    		<div  className="container-fluid">
    			<div className="col-md-12">
    				<div className="col-md-1"></div>
    				<div className="col-md-2">
    					<div className="panel">
    						<div className="row">
    							<h2>Filters</h2><br/>
    							<h4>Wedding</h4><br/>
    							<h4>Party</h4><br/>
    							<h4>Corporate</h4><br/>
    							<h4>Special Ocasion</h4><br/>
    							<h4>Family Dinner</h4>
    							<div className="col-md-7" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
    							<div className="row col-md-12">
    								<h2>Sort By</h2><br/>
  									
							    </div>
    							
    							
    						</div>
    					</div>
    				</div>
    				<div className="col-md-9">
    				<div className="row" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div></div>
    			</div>
    		</div>
    		
    	</div>
    );

  }
}

export default Filterpanel;