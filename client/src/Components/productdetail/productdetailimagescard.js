 import React, { Component } from 'react';
 import './productdetail.css'

 class Productdetailimagescard extends Component {
	render() { 
		return( 
			<div>

					<div className="hidden-xs hidden-sm">
						<div className="row">
							<div  className="col-md-3 hidden-xs hidden-sm">							
								<img src="../images/productdetail/eid.jpeg" style={{width:"100%", height:"230px"}}/><br/><br/>
								<img src="../images/productdetail/bridal 22.jpeg" style={{width:"100%", height:"230px"}}/><br/><br/>
								<img src="../images/productdetail/bridal2.jpeg" style={{width:"100%", height:"230px"}}/>
							</div>
							<div className="col-md-9">
								<img src="../images/productdetail/bridal.jpeg" style={{width:"100%", height:"875px"}}/>
							</div>
						</div>
					</div> 	
                    	<br/><br/><br/>
                    	<div className="visible-sm visible-xs">
                    		<div className="row">
                    			<div className="col-xs-12 col-sm-12">
                    				<img src="../images/productdetail/bridal.jpeg" style={{width:"100%", height:"400px"}}/>
                    			</div>
                    		</div><br />
                    		<div className="row">	
								<div className="col-sm-4 col-xs-4">
									<img src="../images/productdetail/eid.jpeg" style={{width:"100%", height:"230px"}}/>
								</div>
								<div className="col-sm-4 col-xs-4">
									<img src="../images/productdetail/bridal 22.jpeg" style={{width:"100%", height:"230px"}}/>
								</div>
								<div className="col-sm-4 col-xs-4">
									<img src="../images/productdetail/bridal2.jpeg" style={{width:"100%", height:"230px"}}/>
								</div>
							</div>	
						</div>{/*mobile & tab 3 images div close*/}

			</div>
    );

  }
}

export default Productdetailimagescard;
