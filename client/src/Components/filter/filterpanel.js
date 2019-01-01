import React, { Component } from 'react';
import Gallery from '../home/heading4';

class Filterpanel extends Component {
  render() {
    
    return (
    	<div className="App" style={{marginTop: '110px'}}>
    		<div  className="container-fluid">
    			<div className="col-md-12" style={{backgroundImage: "url('./images/swrils.png')"}}>
    				<div className="col-md-1"></div>
    				<div className="col-md-2">
    					<div className="panel" style={{backgroundImage: "url('./images/swrils.png')"}}>
    						<div className="row">
    							<h3>Filters</h3><br/>
    							<h4>Wedding</h4><br/>
    							<h4>Party</h4><br/>
    							<h4>Corporate</h4><br/>
    							<h4>Special Ocasion</h4><br/>
    							<h4>Family Dinner</h4>
    							<div className="col-md-7" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
    							<div className="row col-md-12">
    								<h3>Sort By&emsp;&emsp;-</h3><br/>
    								<label className="container">
									  <input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Newest</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>High and Low</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Low and High</h4>
									</label>
									<div className="col-md-8" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
								</div>
							</div>
							<div className="row">
								<h3>Colors&emsp;&emsp;&nbsp;-</h3><br/>
								<div className="circle">
    								<a href="#"><div className="circle1"></div></a>&nbsp;
    								<a href="#"><div className="circle2"></div></a>&nbsp;
    								<a href="#"><div className="circle3"></div></a>
    							</div>
    							<div className="circle">
    								<a href="#"><div className="circle4"></div></a>&nbsp;
    								<a href="#"><div className="circle5"></div></a>&nbsp;
    								<a href="#"><div className="circle6"></div></a>
    							</div>
    							<div className="col-md-7" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
							</div>
							<div className="row">
								<div className="row col-md-12">
    								<h3>Weather&emsp;&nbsp;-</h3><br/>
    								<label className="container">
									  <input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Cold Weather</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Warm Weather</h4>
									</label>
									<div className="col-md-8" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
								</div>
							</div>
							<div className="row">
								<h3>More Filter</h3><br/>
								<h4>Filter&emsp;&emsp;&emsp;&emsp;<i class="fas fa-plus"></i></h4><br/>
								<h4>Filter&emsp;&emsp;&emsp;&emsp;<i class="fas fa-plus"></i></h4><br/>
								<h4>Filter&emsp;&emsp;&emsp;&emsp;<i class="fas fa-plus"></i></h4><br/>
								<h4>Filter&emsp;&emsp;&emsp;&emsp;<i class="fas fa-plus"></i></h4>
							</div>
						</div>
					</div>
    					

    				<div className="col-md-8">
    					<div className="row" style={{height: '100%',padding:'3%', backgroundColor: '#c2073f'}}>
    						<div class="form-group row">
								<label class="col-md-1 control-label"></label>
								<div className="col-md-2">
									<select className="form-control">
										<option>Rental Period</option>
										<option></option>
										<option></option>
										<option></option>
										<option></option>
									</select>
								</div>
									<label class="col-md-1 control-label"></label>
								<div className="col-md-2">
									<select className="form-control">
										<option>Sizes</option>
										<option></option>
										<option></option>
									</select>
								</div>
							</div>
    					</div>
    					
  						<Gallery label='Wedding' hrLine='false'/>
  						<Gallery/>
  						<Gallery/>

  						<div className="form-group row">
						<label className="col-md-12 col-xs-12 control-label" style={{textAlign: 'centers'}}></label>
						<div class="col-md-5 col-xs-5"></div>
						<div className="col-md-2">
							<button className="btn btn-danger btn-lg col-md-12"><h2 style={{margin: '0'}}>More</h2></button>
						</div>
						<div class="col-md-5"></div>
					</div>
    				</div>
    			</div>
    		</div>
    	</div>

    );

  }
}

export default Filterpanel;


// <div className="Heading">
//   							<h1 className="headings">About Drent</h1>
//   							<img src='./images/bar.png'/>
//   						</div>