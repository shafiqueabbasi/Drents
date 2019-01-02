import React, { Component } from 'react';

class SeeChart extends Component {
  render() {
    
    return (
      	<div>
			<span>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4">
							<h3>Measurements</h3>
						</div>
						<div className="col-md-4"></div>
						<div className="col-md-1"></div>
					</div>
					
						<table class="table">
							<tr>
								<th>Size</th>
								<th>Bust</th>
								<th>Hips</th>
								<th>Waist</th>
								<th>Front length</th>
								<th>Back length</th>
							</tr>
							<tr>
								<td>X Small</td>
								
							</tr>
							<tr>
								<td>Small</td>
								<td>39"</td>
								<td>33"</td>
								<td>36"</td>
								<td>23"</td>
								<td>22"</td>
							</tr>
							<tr>
								<td>Medium</td>
								<td>39"</td>
								<td>33"</td>
								<td>36"</td>
								<td>23"</td>
								<td>22"</td>
							</tr>
							<tr>
								<td>Large</td>
								<td>39"</td>
								<td>33"</td>
								<td>36"</td>
								<td>23"</td>
								<td>22"</td>
							</tr>
							<tr>
								<td>X Large</td>
								<td>39"</td>
								<td>33"</td>
								<td>36"</td>
								<td>23"</td>
								<td>22"</td>
							</tr>
							<tr>
								<td>XX Large</td>
								<td>39"</td>
								<td>33"</td>
								<td>36"</td>
								<td>23"</td>
								<td>22"</td>
							</tr>
						</table>
					
				</div>
			</span>	
      	</div>
    );

  }
}

export default SeeChart;
