import React, { Component } from 'react';
import { isMobileOnly, isTablet } from "react-device-detect";
 import './productdetail.css'

 class Productdetailtable extends Component {
	render() { 
		return( 
			<div>
					<div className="hidden-xs hidden-sm">
	                    		<h4>Measurements</h4>
	                     	    <table className="table table-bordered">
								    <thead>
								      <tr>
								        <th>Size</th>
								        <th>Bust</th>
								        <th>Hip</th>
								        <th>Waist</th>
								        <th>Front length</th>
								        <th>Back length</th>
								      </tr>
								    </thead>
								    <tbody>
								      <tr>
								        <td>Small</td>
								        <td>34<sup>o</sup></td>
								        <td>40<sup>o</sup></td>
								        <td>26<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								      </tr>
								      <tr>
								        <td>Medium</td>
								        <td>36<sup>o</sup></td>
								        <td>42<sup>o</sup></td>
								        <td>28<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								      </tr>
								      <tr>
								        <td>Large</td>
								        <td>38<sup>o</sup></td>
								        <td>46<sup>o</sup></td>
								        <td>30<sup>o</sup></td>
								        <td>59<sup>o</sup></td>
								        <td>59<sup>o</sup></td>
								      </tr>
								    </tbody>
								</table>
								<p className="glass">Our Model,lolly is 5'9" and wear a size small.She Has a 32<sup>o</sup> bust
								,24<sup>o</sup> Waist and 33<sup>o</sup> hips</p>    
					</div>
					<div className="visible-sm visible-xs">
						<div className="container tablemargin">
						<h4 style={isMobileOnly ? {marginLeft:'-2%'} : {marginLeft:'3%'}}>Measurements</h4>
                    	<div style={{overflowX:'auto'}}>
                    		<table className="table table-bordered" style={isMobileOnly ? {width:'83%' ,marginLeft:'0%'} : {width:'83%' , marginLeft:'3%'}}>
							    <thead>
							    <tr>
							        <th>Size</th>
							        <th>Bust</th>
							        <th>Hip</th>
							        <th>Waist</th>
							        <th>Front length</th>
							        <th>Back length</th>
							    </tr>
							    </thead>
							    <tbody>
								    <tr>
								        <td>Small</td>
								        <td>34<sup>o</sup></td>
								        <td>40<sup>o</sup></td>
								        <td>26<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								    </tr>
								      <tr>
								        <td>Medium</td>
								        <td>36<sup>o</sup></td>
								        <td>42<sup>o</sup></td>
								        <td>28<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								        <td>57<sup>o</sup></td>
								    </tr>
								    <tr>
								        <td>Large</td>
								        <td>38<sup>o</sup></td>
								        <td>46<sup>o</sup></td>
								        <td>30<sup>o</sup></td>
								        <td>59<sup>o</sup></td>
								        <td>59<sup>o</sup></td>
								    </tr>
							    </tbody>
							</table>
						</div>
						<p className="glass" style={isMobileOnly ? {marginLeft:'-2%'} : {marginLeft:'3%'}}>Our Model,lolly is 5'9" and wear a size small.She Has a 32<sup>o</sup> bust
								,24<sup>o</sup> Waist and 33<sup>o</sup> hips</p>
						</div>											
                    </div>{/*div close of visible-sm visible-xs*/}


			</div>
    );

  }
}

export default Productdetailtable;