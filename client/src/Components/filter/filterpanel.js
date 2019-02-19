import React, { Component } from 'react';
import Gallery from '../home/heading4';
import { Filter, ButtonComponent } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';

import { Slider } from 'antd';

class Filterpanel extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	data : [],
        	arr: [],
        	filtered: [],
        	loading: true
        }
    }

	async componentDidMount(){
		let data = await HttpUtils.get('getdresses');
		if(data.code && data.code == 200){
			this.setState({ data: data.allDress, arr: data.allDress, loading: false })
		}
	}

	handleClick = e => {
		let { filtered } = this.state;
		if(filtered.includes(e.target.id)){
			filtered = filtered.filter((elem) => elem !== e.target.id);
		}else{
			filtered.push(e.target.id);
		}		
		this.setState({ filtered }, () => {
			this.filteringData();
		});
	}

	onChange = (e) => {
		console.log(e, 'eeeeeeeeee')
	}

	filteringData(){
		const { filtered, arr } = this.state;
		if(filtered.length == 0){
			this.setState({ data: arr });
		}else {
			let data = arr.filter((elem) => {
				return filtered.includes(elem.weather) || filtered.includes(elem.bodyType) ||
				filtered.some(r => elem.sizes.includes(r))
			})
			this.setState({ data })
		}
	}
 
  	render() {      		
	    return (
	    	<div className="App" style={{marginTop: '110px'}}>
	    		{this.state.loading && <div class="loading">Loading&#8230;</div>}
	    		<div  className="container-fluid">
	    			<div className="col-md-12" style={{backgroundImage: "url('./images/swrils.png')"}}>
	    				<div className="col-md-1"></div>
	    				<div className="col-md-2">
	    					<div className="panel" style={{backgroundImage: "url('./images/swrils.png')"}}>
	    						<div className="row">	    					
	    							<h3>Filters</h3><br/>
	    							<h5 id="Wedding" onClick={this.handleClick} className="lH_filter">Wedding</h5><br/>
	    							<h5 id="Party" onClick={this.handleClick} className="lH_filter">Party</h5><br/>
	    							<h5 id="Corporate" onClick={this.handleClick} className="lH_filter">Corporate</h5><br/>
	    							<h5 id="Special Ocasion" onClick={this.handleClick} className="lH_filter">Special Ocasion</h5><br/>
	    							<h5 id="Family Dinner" onClick={this.handleClick} className="lH_filter">Family Dinner</h5>
	    							<div className="col-md-7" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
	    							<div className="row col-md-12">
	    								<h3>Sort By&emsp;&emsp;-</h3><br/>
	    								{/*<Filter id="newest" heading="Newest" onChange={this.handleClick}/>
	    								<Filter id="high and low" heading="High and Low" onChange={this.handleClick}/>
	    								<Filter id="low and high" heading="Low and High" onChange={this.handleClick}/>*/}	
	    								<Slider range min={500} max={500} step={500} defaultValue={[1000, 3000]} onChange={this.onChange} />								
										<div className="col-md-8" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
								{/*<div className="row">
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
								</div>*/}
								<div className="row">
									<div className="row col-md-12">
	    								<h3>Weather&emsp;&nbsp;-</h3><br/>
	    								<Filter id="Cold Weather" heading="Cold Weather" onChange={this.handleClick}/>
	    								<Filter id="Warm Weather" heading="Warm Weather" onChange={this.handleClick}/>    								
										<div className="col-md-8" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
								<div className="row">
									<div className="row col-md-12">
	    								<h3>Sizes&emsp;&nbsp;-</h3><br/>
	    								<Filter id="XS" heading="X Small" onChange={this.handleClick}/>
	    								<Filter id="S" heading="Small" onChange={this.handleClick}/>
	    								<Filter id="M" heading="Medium" onChange={this.handleClick}/>
	    								<Filter id="XL" heading="X Large" onChange={this.handleClick}/>
	    								<Filter id="L" heading="Large" onChange={this.handleClick}/>
	    								<Filter id="XXL" heading="XX Large" onChange={this.handleClick}/>    								
										<div className="col-md-8" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>							
							</div>
						</div>    					
	    				<div className="col-md-8">    					    					
	  						<Gallery label='Wedding' hrLine='false' data={this.state.data}/>
	  						<div className="form-group row">
							<label className="col-md-12 col-xs-12 control-label" style={{textAlign: 'centers'}}></label>
							<div className="col-md-5 col-xs-5 row"></div>
							{this.state.arr.length > 8 && <ButtonComponent label="More"/>}
							{this.state.data.length == 0 && <span>No record found
								<ButtonComponent 
									className="col-md-12" 
									label="Find More" 
									onClick={() => this.setState({ data: this.state.arr })}
								/>
							</span>}				
							<div className="col-md-5"></div>
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

{/*<div className="row">
	<h3>More Filter</h3><br/>
	<h4>Filter&emsp;&emsp;&emsp;&emsp;<i className="fas fa-plus"></i></h4><br/>
	<h4>Filter&emsp;&emsp;&emsp;&emsp;<i className="fas fa-plus"></i></h4><br/>
	<h4>Filter&emsp;&emsp;&emsp;&emsp;<i className="fas fa-plus"></i></h4><br/>
	<h4>Filter&emsp;&emsp;&emsp;&emsp;<i className="fas fa-plus"></i></h4>
</div>*/}


{/*<div className="row" style={{height: '100%',padding:'3%', backgroundColor: '#c2073f'}}>
	<div className="form-group row">
		<label className="col-md-1 control-label"></label>
		<div className="col-md-4">
			<select className="form-control">
				<option>Rental Period</option>
				<option></option>
				<option></option>
				<option></option>
				<option></option>
			</select>
		</div>
			<label className="col-md-1 control-label"></label>
		<div className="col-md-2">
			<select className="form-control">
				<option>Sizes</option>
				<option></option>
				<option></option>
			</select>
		</div>
	</div>
</div>*/}