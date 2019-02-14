import React, { Component } from 'react';

class SeeChart extends Component {
  render() {
    
    return (
      	<div>
			<span>
				<div className="hidden-xs">
					<div className="row">
						<div className="col-md-4 col-sm-4">
							
						</div>
						<div className="col-md-7 col-sm-7"></div>
						<div className="col-md-1 col-sm-1">
							<a href="#" class="close" data-dismiss="alert" style={{fontSize: '160%'}}>-</a>
						</div>
					</div>
					    <table class="table table-striped" style={{width:'0px'}}>
							<thead>
							    <tr className="active">
									<th>Size</th>
									<th>Bust</th>
									<th>Hips</th>
									<th>Waist</th>
									<th>Front length</th>
									<th>Back length</th>
								</tr>
				    		</thead>
				   			 <tbody>
				      			
					 	   		<tr style={{backgroundColor: '#ffffff'}}>
									<td>X Small</td>
									<td>39"</td>
									<td>33"</td>
									<td>36"</td>
									<td>23"</td>
									<td>22"</td>
								</tr>
								<tr className="active">
									<td>Small</td>
									<td>41"</td>
									<td>36"</td>
									<td>38"</td>
									<td>24"</td>
									<td>23"</td>
								</tr>
								<tr style={{backgroundColor: '#ffffff'}}>
									<td>Medium</td>
									<td>43"</td>
									<td>38"</td>
									<td>40"</td>
									<td>24"</td>
									<td>23"</td>
								</tr>
								<tr className="active">
									<td>Large</td>
									<td>45"</td>
									<td>40"</td>
									<td>42"</td>
									<td>25"</td>
									<td>24"</td>
								</tr>
								<tr style={{backgroundColor: '#ffffff'}}>
									<td>X Large</td>
									<td>48"</td>
									<td>43"</td>
									<td>45"</td>
									<td>25"</td>
									<td>24"</td>
								</tr>
								<tr className="active">
									<td>XX Large</td>
									<td>51"</td>
									<td>46"</td>
									<td>48"</td>
									<td>26"</td>
									<td>25"</td>
								</tr>
	    					</tbody>
	  					</table>
  					<div>
  						<p style={{color:'white'}}>Our Model, Erin, is 5'8 and wears a size small. She has a 32" bust, 26" waist, and 32" hips. </p>
  					</div>
				</div>
			</span>
			<span>
				<div className="container visible-xs" style={{fontSize: '15px'}}>
					<div className="row">
						<div className="col-xs-12">
							<h4>Measurements<a href="#" class="close" data-dismiss="alert">-</a></h4>
						</div>
					</div>
					<div style={{overflowX:'auto'}}>
                        <table className="table table-striped-bordered">
							<thead>
								<tr className="active">
									<th>Size</th>
									<th>Bust</th>
									<th>Hip</th>
									<th>Waist</th>
									<th>Front length</th>
									<th>Back length</th>
								</tr>
							</thead>
							<tbody>
								<tr style={{backgroundColor: '#ffffff'}}>
									<td>X Small</td>
									<td>39"</td>
									<td>33"</td>
									<td>36"</td>
									<td>23"</td>
									<td>22"</td>
								</tr>
								<tr className="active">
									<td>Small</td>
									<td>41"</td>
									<td>36"</td>
									<td>38"</td>
									<td>24"</td>
									<td>23"</td>
								</tr>
								<tr style={{backgroundColor: '#ffffff'}}>
									<td>Medium</td>
									<td>43"</td>
									<td>38"</td>
									<td>40"</td>
									<td>24"</td>
									<td>23"</td>
								</tr>
								<tr className="active">
									<td>Large</td>
									<td>45"</td>
									<td>40"</td>
									<td>42"</td>
									<td>25"</td>
									<td>24"</td>
								</tr>
								<tr style={{backgroundColor: '#ffffff'}}>
									<td>X Large</td>
									<td>48"</td>
									<td>43"</td>
									<td>45"</td>
									<td>25"</td>
									<td>24"</td>
								</tr>
								<tr className="active">
									<td>XX Large</td>
									<td>51"</td>
									<td>46"</td>
									<td>48"</td>
									<td>26"</td>
									<td>25"</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-md-12">
  						<p style={{fontSize: '15px'}}>Our Model, Erin, is 5'8 and wears a size small. She has a 32" bust, 26" waist, and 32" hips. </p>
  					</div>
				</div>	
			</span>	
		</div>
    );

  }
}

export default SeeChart;