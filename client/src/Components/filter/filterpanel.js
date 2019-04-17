import React, { Component } from 'react';
import Gallery from '../home/heading4';
import { Filter, ButtonComponent, RadioInput } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';
import './filterpanel.css';
import { Slider } from 'antd';
import _ from "underscore";


class Filterpanel extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	data : [],
        	arr: [],
        	filtered: [],
        	loading: true,
        	mainFilter: '',
        	weather: '',
        	size: '',
        	label: 'All Products',
        	mainFilterArr: ["Wedding", "Party", "Corporate", "Special Ocasion", "Family Dinner"],
        	weatherArr: ["ColdWeather", "WarmWeather"],
        	weatherArrM: ["Cold Weather", "Warm Weather"],
        	sizesArr: ["XS", "S", "M", "XL", "L", "XXL"],
        	sizesArrM: ["XSM", "SM", "MM", "XLM", "LM", "XXLM"]
        }
    }

	async componentDidMount(){		
		let filter = this.props.location.state;
		window.scrollTo(0,0)	
		let data = await HttpUtils.get('getdresses');
		if(data.code && data.code === 200){
			this.setState({ data: data.allDress, arr: data.allDress, loading: false });
			if(filter && filter !== undefined){
				this.handleMainItems(null, filter);
			}
		}
	}

	handleMainItems = (e, item) => {	
		if(e !== null){
			e.preventDefault();			
		}	
		let { filtered, mainFilter, size, weather, weatherArr, sizesArr, weatherArrM, sizesArrM } = this.state;		
		if(item == ''){
			this.uncheckRadio(weatherArr);
			this.uncheckRadio(sizesArr);
			this.uncheckRadio(weatherArrM);
			this.uncheckRadio(sizesArrM);
		}					
		this.setState({ 
			mainFilter: item,
			weather: mainFilter.length > 0 ? weather : '',
			size: mainFilter.length > 0 ? size : '' 
		});
		this.handleConditions(filtered, mainFilter, item);
	}

	uncheckRadio(arr){
		arr.map((elem) => {
			document.getElementById(elem).checked = false;
		});
	}

	handleWeather = (item) => {
		let { filtered, weather } = this.state;	
		this.setState({ weather: item });
		this.handleConditions(filtered, weather, item);	
	}

	handleSize = (item) => {
		let { filtered, size } = this.state;		
		this.setState({ size: item });
		this.handleConditions(filtered, size, item);
	}

	handleConditions(filtered, filter, item){
		if(filtered.includes(filter)){
			filtered = filtered.filter((elem) => elem !== filter);
		}
		filtered.push(item);
		this.setState({ filtered }, () => {
			this.filteringData();
		});
	}

	filteringData(){
		const { arr, mainFilter, weather, size, filtered } = this.state;
		if(filtered.length === 0){
			this.setState({ data: arr });
		}else {
			let data = arr;
			data = !!mainFilter.length ? arr.filter((elem) => filtered.includes(elem.bodyType)) : data;
			data = !!weather.length ? data.filter((elem) => filtered.includes(elem.weather)) : data;
			data = !!size.length ? data.filter((elem) => filtered.some(r => elem.sizes.includes(r))): data;
			this.setState({ data });
		}
	}

	handleSort = e => {
		let { data } = this.state,
		target = e.target.id;
		if(target === 'newest' || target === 'newestM'){
			data = _.sortBy(data, 'postedOn')
		}else if(target === 'highAndLow' || target === 'highAndLowM'){
			// data = _.sortBy(data, 'priceDay')
			data = this.orderByDate(data, 'priceDay')
		}else{
			// data = (_.sortBy(data, 'priceDay')).reverse();
			data = (this.orderByDate(data, 'priceDay')).reverse()
		}
		this.setState({ data })
	}

	orderByDate(arr, dateProp) {
		return arr.slice().sort(function (a, b) {
		    return a[dateProp] < b[dateProp] ? -1 : 1;
		});
	}

  	render() {
  		const { size, weather, mainFilter, filtered, label } = this.state;
  		
	    return (
	    	<div className="App" style={{marginTop: '90px',backgroundImage: "url('./images/swrils.png')"}}>
	    		{this.state.loading && <div className="loading">Loading&#8230;</div>}
	    		<div  className="container-fluid">
	    			<div className="col-md-12 col-sm-12 hidden-xs">
	    				<div className="col-md-1 col-sm-1"></div>
	    				<div className="col-md-2 col-sm-2" style={{padding: 'initial'}}>
	    					<div className="more">
	    						<div className="row">
	    							<h3 style={{fontFamily: 'crimsontext'}}>Filters</h3><br/>
	    							<h5 id="" onClick={(e) => this.handleMainItems(e, "")} className="lH_filter"><a href="" className="C_P">All Products</a></h5><br/>
	    							<h5 id="Wedding" onClick={(e) => this.handleMainItems(e, "Wedding")} className="lH_filter"><a href="" className="C_P">Wedding</a></h5><br/>
	    							<h5 id="Party" onClick={(e) => this.handleMainItems(e, "Party")} className="lH_filter"><a href="" className="C_P">Party</a></h5><br/>
	    							<h5 id="Corporate" onClick={(e) => this.handleMainItems(e, "Corporate")} className="lH_filter"><a href="" className="C_P">Corporate</a></h5><br/>
	    							<h5 id="Special Ocasion" onClick={(e) => this.handleMainItems(e, "Special Ocasion")} className="lH_filter" ><a href="" className="C_P">Special Ocasion</a></h5><br/>
	    							<h5 id="Family Dinner" onClick={(e) => this.handleMainItems(e, "Family Dinner")} className="lH_filter"><a href="" className="C_P">Family Dinner</a></h5>
	    							<div className="col-md-9  col-sm-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
	    							<div className="row col-md-12" style={{padding: '0px'}}>

	    								<h3 style={{fontFamily: 'crimsontext'}}>Sort By&emsp;&nbsp;-</h3><br/>
	    									<RadioInput 
									        	label="Newest" 
									        	value="Newest" 
									        	for="newest" 
								        		name="sortBy" 
								        		onChange={this.handleSort}
							        		/>
											<RadioInput label="High and Low" value="highAndLow" for="highAndLow" name="sortBy" onChange={this.handleSort}/>
											<RadioInput label="Low and High" value="lowAndHigh" for="lowAndHigh" name="sortBy" onChange={this.handleSort}/>
	    								{/*<Filter id="newest" heading="Newest" onChange={this.handleClick}/>
	    								<Filter id="high and low" heading="High and Low" onChange={this.handleClick}/>
	    								<Filter id="low and high" heading="Low and High" onChange={this.handleClick}/>*/}
	    								<Slider range min={500} max={500} step={500} defaultValue={[1000, 3000]} onChange={this.onChange} />
										<div className="col-md-10 col-sm-10" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>




								{/*<div className="row">
									<h3 style={{fontFamily: 'crimsontext'}}>Colors&emsp;&emsp;&nbsp;-</h3><br/>
									<div className="circle">
	    								<a href=""><div className="circle1"></div></a>&nbsp;
	    								<a href=""><div className="circle2"></div></a>&nbsp;
	    								<a href=""><div className="circle3"></div></a>
	    							</div>
	    							<div className="circle">
	    								<a href=""><div className="circle4"></div></a>&nbsp;
	    								<a href=""><div className="circle5"></div></a>&nbsp;
	    								<a href=""><div className="circle6"></div></a>
	    							</div>
	    							<div className="col-md-7 col-sm-7" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
								</div>*/}
								<div className="row">
									<div className="row col-md-12 col-sm-12" style={{padding: '0px'}}>
	    								<h3 style={{fontFamily: 'crimsontext'}}>Weather&emsp;-</h3><br/>
	    								<RadioInput label="Cold Weather" for="ColdWeather" name="weather" onChange={(e) => this.handleWeather('Cold Weather')} />
	    								<RadioInput label="Warm Weather" for="WarmWeather" name="weather" onChange={(e) => this.handleWeather('Warm Weather')} />
										<div className="col-md-10 col-sm-10" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
								<div className="row">
									<div className="row col-md-12 col-sm-12" style={{padding: '0px'}}>
	    								<h3 style={{fontFamily: 'crimsontext'}}>Sizes&emsp;&nbsp;-</h3><br/>
	    								<RadioInput label="X Small" for="XS" name="sizes" onChange={(e) => this.handleSize(e.target.id)}/>
	    								<RadioInput label="Small" for="S" name="sizes" onChange={(e) => this.handleSize(e.target.id)}/>
	    								<RadioInput label="Medium" for="M" name="sizes" onChange={(e) => this.handleSize(e.target.id)}/>
	    								<RadioInput label="X Large" for="XL" name="sizes" onChange={(e) => this.handleSize(e.target.id)}/>
	    								<RadioInput label="Large" for="L" name="sizes" onChange={(e) => this.handleSize(e.target.id)}/>
	    								<RadioInput label="XX Large" for="XXL" name="sizes" onChange={(e) => this.handleSize(e.target.id)}/>
										<div className="col-md-10 col-sm-10" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
							</div>
						</div>
	    				<div className="col-md-8 col-sm-8">
	  						<Gallery label={mainFilter.length > 0 ? mainFilter : label} hrLine='false' data={this.state.data}/>
	  						<div className="form-group row">
							<label className="col-md-12 col-sm-12 col-xs-12 control-label" style={{textAlign: 'center'}}></label>
							<div className="col-md-5 col-sm-5 col-xs-5 row"></div>
							{/*{this.state.arr.length > 8 && <ButtonComponent label="More"/>}*/}
							{this.state.data.length === 0 &&
								<ButtonComponent
									className="col-md-12"
									label="Find More"
									onClick={() => this.setState({ data: this.state.arr })}
								/>
							}
							<div className="col-md-5"></div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " style={{textAlign: 'center', paddingLeft: '0px'}}><br/>
								<div className="col-md-4 col-sm-3"></div>
								{this.state.data.length === 0 && 
									<div className="col-md-4 col-sm-6 alert alert-danger">
	    								<strong> No record found.</strong>
									</div>
								}
								<div className="col-md-4 col-sm-3"></div>
							</div>
						</div>
	    				</div>
	    			</div>
	    		</div>





	    		<div className="col-xs-12 visible-xs">
	    				<div className="col-xs-1"></div>
	    				<div className="col-xs-11">
	    					<div className="more">
	    						<div className="row">

	    							<div className=" row col-xs-12">
		    							<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
												<h3 className="panel-title" style={{fontFamily: 'crimsontext'}}>
												    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
												        Filters
												    </a>
												</h3>
											</div>
											<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
												<div className="panel-body" style={{fontFamily: 'crimsontext'}}>
													<h4 id="" onClick={(e) => this.handleMainItems(e, "")} style={{fontFamily: 'crimsontext'}}>All Products</h4><br/>
												    <h4 id="Wedding" onClick={(e) => this.handleMainItems(e, "Wedding")} style={{fontFamily: 'crimsontext'}}>Wedding</h4><br/>
		    										<h4 id="Party" onClick={(e) => this.handleMainItems(e, "Party")} style={{fontFamily: 'crimsontext'}}>Party</h4><br/>
		    										<h4 id="Corporate" onClick={(e) => this.handleMainItems(e, "Corporate")} style={{fontFamily: 'crimsontext'}}>Corporate</h4><br/>
		    										<h4 id="Special Ocasion" onClick={(e) => this.handleMainItems(e, "Special Ocasion")} style={{fontFamily: 'crimsontext'}}>Special Ocasion</h4><br/>
		    										<h4 id="Family Dinner" onClick={(e) => this.handleMainItems(e, "Family Dinner")} style={{fontFamily: 'crimsontext'}}>Family Dinner</h4>
												</div>
											</div>
										</div>
									</div>


	    							<div className="col-xs-11" style={{paddingBottom: '15px', margin: '40px 15px 20px',borderBottom: '1px solid black'}}></div>
	    							<div className="row col-xs-12">



	    								<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
											    <h3 className="panel-title" style={{fontFamily: 'crimsontext'}}>
											       	<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											         	Sort By
											        </a>
											    </h3>
											</div>
											<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
											    <div className="panel-body" style={{fontFamily: 'crimsontext'}}>
											        <RadioInput 
											        	label="Newest" 
											        	value="Newest" 
											        	for="newestM" 
										        		name="sortBy" 
										        		onChange={this.handleSort}
									        		/>
	    											<RadioInput label="High and Low" value="highAndLow" for="highAndLowM" name="sortBy" onChange={this.handleSort}/>
	    											<RadioInput label="Low and High" value="lowAndHigh" for="lowAndHighM" name="sortBy" onChange={this.handleSort}/>
	    											{/*<Slider range min={500} max={500} step={500} defaultValue={[1000, 3000]} onChange={this.onChange} />*/}
											    </div>
											</div>
										</div>



										<div className="col-xs-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
								{/*<div className="row">
									<h3>Colors&emsp;&emsp;&nbsp;-</h3><br/>
									<div className="circle">
	    								<a href=""><div className="circle1"></div></a>&nbsp;
	    								<a href=""><div className="circle2"></div></a>&nbsp;
	    								<a href=""><div className="circle3"></div></a>
	    							</div>
	    							<div className="circle">
	    								<a href=""><div className="circle4"></div></a>&nbsp;
	    								<a href=""><div className="circle5"></div></a>&nbsp;
	    								<a href=""><div className="circle6"></div></a>
	    							</div>
	    							<div className="col-xs-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
								</div>*/}
								<div className="row">
									<div className="row col-xs-12">
									<div className="panel panel-default">
										<div className="panel-heading" role="tab" id="headingTwo">
											<h3 className="panel-title" style={{fontFamily: 'crimsontext'}}>
											    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
											        Weather
											    </a>
											</h3>
										</div>
										<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
											<div className="panel-body" style={{fontFamily: 'crimsontext'}}>
											    <RadioInput label="Cold Weather" for="Cold Weather" name="weather" onChange={(e) => this.handleWeather(e.target.id)} />
	    										<RadioInput label="Warm Weather" for="Warm Weather" name="weather" onChange={(e) => this.handleWeather(e.target.id)} />
											</div>
										</div>
									</div>
									<div className="col-xs-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
								<div className="row">
									<div className="row col-xs-12">
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
											    <h3 className="panel-title" style={{fontFamily: 'crimsontext'}}>
											       	<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
											         	Sizes
											        </a>
											    </h3>
											</div>
											<div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
											    <div className="panel-body" style={{fontFamily: 'crimsontext'}}>
											    	<RadioInput label="X Small" for="XSM" name="sizes" onChange={(e) => this.handleSize('XS')}/>
				    								<RadioInput label="Small" for="SM" name="sizes" onChange={(e) => this.handleSize('S')}/>
				    								<RadioInput label="Medium" for="MM" name="sizes" onChange={(e) => this.handleSize('M')}/>
				    								<RadioInput label="X Large" for="XLM" name="sizes" onChange={(e) => this.handleSize('XL')}/>
				    								<RadioInput label="Large" for="LM" name="sizes" onChange={(e) => this.handleSize('L')}/>
				    								<RadioInput label="XX Large" for="XXLM" name="sizes" onChange={(e) => this.handleSize('XXL')}/>
											    </div>
											</div>
										</div>
										<div className="col-xs-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
							</div>
						</div>
	    				<div className="col-xs-12">
	  						<Gallery label={mainFilter.length > 0 ? mainFilter : label} hrLine='false' data={this.state.data}/>
	  						<div className="form-group row">
							<label className="col-xs-12 control-label" style={{textAlign: 'center'}}></label>
							<div className="col-xs-12 row"></div>
							{/*{this.state.arr.length > 8 && <ButtonComponent label="More"/>}*/}
							{/*{this.state.data.length === 0 && <span>
								<ButtonComponent
									className="col-xs-12"
									label="Find More"
									onClick={() => this.setState({ data: this.state.arr })}
								/>
							</span>}*/}
							<div className="col-xs-12" style={{textAlign: 'center'}}><br/>
								{this.state.data.length === 0 && 
									<div className="alert alert-danger">
	    								<strong> No record found.</strong>
									</div>
								}
							</div>
						</div>
	    				</div>
	    			</div>
			</div>
	    );
  	}
}

export default Filterpanel;
