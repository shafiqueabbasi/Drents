 import React, { Component } from 'react';
 import './productdetail.css'

 class Productdetailimagescard extends Component {
	render() { 
 	const { data } = this.props;

		return( 
			<div>
				<div className="hidden-xs hidden-sm">
					<div className="row">
						<div  className="col-md-3 hidden-xs hidden-sm">							
							<img alt="" src={data[0]} style={{width:"100%", height:"230px"}}/><br/><br/>
							<img alt="" src={data[0]} style={{width:"100%", height:"230px"}}/><br/><br/>
							<img alt="" src={data[0]} style={{width:"100%", height:"230px"}}/>
						</div>
						<div className="col-md-9">
							<img alt="" src={data[0]} style={{width:"100%", height:"875px"}}/>
						</div>
					</div>
				</div> 	
            	<br/><br/><br/>
            	<div className="visible-sm visible-xs">
            		<div className="row">
            			<div className="col-xs-12 col-sm-12">
            				<img alt="" src={data[0]} style={{width:"100%", height:"400px"}}/>
            			</div>
            		</div><br />
            		<div className="row">	
						<div className="col-sm-4 col-xs-4">
							<img alt="" src={data[0]} style={{width:"100%", height:"230px"}}/>
						</div>
						<div className="col-sm-4 col-xs-4">
							<img alt="" src={data[0]} style={{width:"100%", height:"230px"}}/>
						</div>
						<div className="col-sm-4 col-xs-4">
							<img alt="" src={data[0]} style={{width:"100%", height:"230px"}}/>
						</div>
					</div>	
				</div>
			</div>
    );

  }
}

export default Productdetailimagescard;
