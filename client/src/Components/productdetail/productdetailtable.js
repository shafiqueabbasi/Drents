import React, { Component } from 'react';
import { isMobileOnly, isTablet } from "react-device-detect";
 import './productdetail.css'

 class Productdetailtable extends Component {
	render() { 
		return( 
			<div>
					<div className="sizestable shadow">
	                    		<h4 style={{fontFamily: 'Playfair Display'}}>Size Chart</h4>
	                    		<button type="button" class="close" style={{marginTop: '-9%'}}>x</button>
	                     	    <table className="table">
								    <thead>
								      <tr>
								        <th className="r8clor">Size</th>
								        <th className="r8clor">Bust</th>
								        <th className="r8clor">Hip</th>
								        <th className="r8clor">Waist</th>
								        <th className="r8clor">Front</th>
								        <th className="r8clor1">Back</th>
								      </tr>
								    </thead>
								    <tbody>
								    <tr>
								        <td className="r8clor">X Small</td>
								        <td className="r8clor">39<sup>o</sup></td>
								        <td className="r8clor">33<sup>o</sup></td>
								        <td className="r8clor">36<sup>o</sup></td>
								        <td className="r8clor">23<sup>o</sup></td>
								        <td className="r8clor1">22<sup>o</sup></td>
								      </tr>
								      <tr>
								        <td className="r8clor">Small</td>
								        <td className="r8clor">41<sup>o</sup></td>
								        <td className="r8clor">36<sup>o</sup></td>
								        <td className="r8clor">38<sup>o</sup></td>
								        <td className="r8clor">24<sup>o</sup></td>
								        <td className="r8clor1">23<sup>o</sup></td>
								      </tr>
								      <tr>
								        <td className="r8clor">Medium</td>
								        <td className="r8clor">43<sup>o</sup></td>
								        <td className="r8clor">36<sup>o</sup></td>
								        <td className="r8clor">40<sup>o</sup></td>
								        <td className="r8clor">24<sup>o</sup></td>
								        <td className="r8clor1">23<sup>o</sup></td>
								      </tr>
								      <tr>
								        <td className="r8clor">Large</td>
								        <td className="r8clor">45<sup>o</sup></td>
								        <td className="r8clor">40<sup>o</sup></td>
								        <td className="r8clor">42<sup>o</sup></td>
								        <td className="r8clor">25<sup>o</sup></td>
								        <td className="r8clor1">24<sup>o</sup></td>
								      </tr>
								      <tr>
								        <td className="r8clor">X Large</td>
								        <td className="r8clor">48<sup>o</sup></td>
								        <td className="r8clor">43<sup>o</sup></td>
								        <td className="r8clor">45<sup>o</sup></td>
								        <td className="r8clor">25<sup>o</sup></td>
								        <td className="r8clor1">24<sup>o</sup></td>
								      </tr>
								      <tr>
								        <td className="r8clor">XX Large</td>
								        <td className="r8clor">51<sup>o</sup></td>
								        <td className="r8clor">46<sup>o</sup></td>
								        <td className="r8clor">48<sup>o</sup></td>
								        <td className="r8clor">26<sup>o</sup></td>
								        <td className="r8clor1">25<sup>o</sup></td>
								      </tr>
								    </tbody>

								</table>
								{/*<p className="glass">Our Model,lolly is 5'9" and wear a size small.She Has a 32<sup>o</sup> bust
								,24<sup>o</sup> Waist and 33<sup>o</sup> hips</p>*/}
					</div>
					


			</div>
    );

  }
}

export default Productdetailtable;