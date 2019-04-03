import React, { Component } from 'react';
import Gallery from '../home/heading4';
import { Filter, ButtonComponent } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';
import './filterpanel.css';
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
		let filter = this.props.location.state;
		console.log(filter, 'propsssssssssssss')		
		let data = await HttpUtils.get('getdresses');
		if(data.code && data.code === 200){
			this.setState({ data: data.allDress, arr: data.allDress, loading: false });
			if(filter && filter !== undefined){
				this.handleClick(filter);
			}
		}
	}

	handleClick = e => {
		let { filtered } = this.state,
		target = e.target !== undefined ? e.target.id : e;
		if(filtered.includes(target)){
			filtered = filtered.filter((elem) => elem !== target);
		}else{
			filtered.push(target);
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
		if(filtered.length === 0){
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
	    	<div className="App" style={{marginTop: '90px',backgroundImage: "url('./images/swrils.png')"}}>
	    		{this.state.loading && <div className="loading">Loading&#8230;</div>}
	    		<div  className="container-fluid">
	    			<div className="col-md-12 col-sm-12 hidden-xs">
	    				<div className="col-md-1 col-sm-1"></div>
	    				<div className="col-md-2 col-sm-2" style={{padding: 'initial'}}>
	    					<div className="more">
	    						<div className="row">
	    							<h3>Filters</h3><br/>
	    							<h5 id="Wedding" onClick={this.handleClick} className="lH_filter">Wedding</h5><br/>
	    							<h5 id="Party" onClick={this.handleClick} className="lH_filter">Party</h5><br/>
	    							<h5 id="Corporate" onClick={this.handleClick} className="lH_filter">Corporate</h5><br/>
	    							<h5 id="Special Ocasion" onClick={this.handleClick} className="" >Special Ocasion</h5><br/>
	    							<h5 id="Family Dinner" onClick={this.handleClick} className="lH_filter">Family Dinner</h5>
	    							<div className="col-md-9  col-sm-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
	    							<div className="row col-md-12" style={{padding: '0px'}}>

	    								<h3>Sort By&emsp;&nbsp;-</h3><br/>
	    								<Filter id="newest" heading="Newest" onChange={this.handleClick}/>
	    								<Filter id="high and low" heading="High and Low" onChange={this.handleClick}/>
	    								<Filter id="low and high" heading="Low and High" onChange={this.handleClick}/>

	    								{/*<Filter id="newest" heading="Newest" onChange={this.handleClick}/>
	    								<Filter id="high and low" heading="High and Low" onChange={this.handleClick}/>
	    								<Filter id="low and high" heading="Low and High" onChange={this.handleClick}/>*/}
	    								<Slider range min={500} max={500} step={500} defaultValue={[1000, 3000]} onChange={this.onChange} />
										<div className="col-md-10 col-sm-10" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
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
	    							<div className="col-md-7 col-sm-7" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
								</div>*/}
								<div className="row">
									<div className="row col-md-12 col-sm-12" style={{padding: '0px'}}>
	    								<h3>Weather&emsp;-</h3><br/>
	    								<Filter id="Cold Weather" heading="Cold Weather" onChange={this.handleClick}/>
	    								<Filter id="Warm Weather" heading="Warm Weather" onChange={this.handleClick}/>
										<div className="col-md-10 col-sm-10" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
								<div className="row">
									<div className="row col-md-12 col-sm-12" style={{padding: '0px'}}>
	    								<h3>Sizes&emsp;&nbsp;-</h3><br/>
	    								<Filter id="XS" heading="X Small" onChange={this.handleClick}/>
	    								<Filter id="S" heading="Small" onChange={this.handleClick}/>
	    								<Filter id="M" heading="Medium" onChange={this.handleClick}/>
	    								<Filter id="XL" heading="X Large" onChange={this.handleClick}/>
	    								<Filter id="L" heading="Large" onChange={this.handleClick}/>
	    								<Filter id="XXL" heading="XX Large" onChange={this.handleClick}/>
										<div className="col-md-10 col-sm-10" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
							</div>
						</div>
	    				<div className="col-md-8 col-sm-8">
	  						<Gallery label='Wedding' hrLine='false' data={this.state.data}/>
	  						<div className="form-group row">
							<label className="col-md-12 col-sm-12 col-xs-12 control-label" style={{textAlign: 'center'}}></label>
							<div className="col-md-5 col-sm-5 col-xs-5 row"></div>
							{/*{this.state.arr.length > 8 && <ButtonComponent label="More"/>}*/}
							{this.state.data.length === 0 && <span>No record found
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





	    		<div className="col-xs-12 visible-xs">
	    				<div className="col-xs-1"></div>
	    				<div className="col-xs-11">
	    					<div className="more">
	    						<div className="row">

	    							<div className=" row col-xs-12">
		    							<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
												<h3 className="panel-title">
												    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
												        Filters
												    </a>
												</h3>
											</div>
											<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
												<div className="panel-body">
												    <h4 id="Wedding" onClick={this.handleClick}>Wedding</h4><br/>
		    										<h4 id="Party" onClick={this.handleClick}>Party</h4><br/>
		    										<h4 id="Corporate" onClick={this.handleClick}>Corporate</h4><br/>
		    										<h4 id="Special Ocasion" onClick={this.handleClick}>Special Ocasion</h4><br/>
		    										<h4 id="Family Dinner" onClick={this.handleClick}>Family Dinner</h4>
												</div>
											</div>
										</div>
									</div>


	    							<div className="col-xs-11" style={{paddingBottom: '15px', margin: '40px 15px 20px',borderBottom: '1px solid black'}}></div>
	    							<div className="row col-xs-12">



	    								<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
											    <h3 className="panel-title">
											       	<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											         	Sort By
											        </a>
											    </h3>
											</div>
											<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
											    <div className="panel-body">
											        {/*<Filter id="newest" heading="Newest" onChange={this.handleClick}/>
	    											<Filter id="high and low" heading="High and Low" onChange={this.handleClick}/>
	    											<Filter id="low and high" heading="Low and High" onChange={this.handleClick}/>*/}
	    											<Slider range min={500} max={500} step={500} defaultValue={[1000, 3000]} onChange={this.onChange} />
											    </div>
											</div>
										</div>



										<div className="col-xs-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
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
	    							<div className="col-xs-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
								</div>*/}
								<div className="row">
									<div className="row col-xs-12">
									<div className="panel panel-default">
										<div className="panel-heading" role="tab" id="headingTwo">
											<h3 className="panel-title">
											    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
											        Weather
											    </a>
											</h3>
										</div>
										<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
											<div className="panel-body">
											    <Filter id="Cold Weather" heading="Cold Weather" onChange={this.handleClick}/>
	    										<Filter id="Warm Weather" heading="Warm Weather" onChange={this.handleClick}/>
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
											    <h3 className="panel-title">
											       	<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
											         	Sizes
											        </a>
											    </h3>
											</div>
											<div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
											    <div className="panel-body">
											    	<Filter id="XS" heading="X Small" onChange={this.handleClick}/>
	    											<Filter id="S" heading="Small" onChange={this.handleClick}/>
	    											<Filter id="M" heading="Medium" onChange={this.handleClick}/>
	    											<Filter id="XL" heading="X Large" onChange={this.handleClick}/>
	    											<Filter id="L" heading="Large" onChange={this.handleClick}/>
	    											<Filter id="XXL" heading="XX Large" onChange={this.handleClick}/>
											    </div>
											</div>
										</div>
										<div className="col-xs-12" style={{paddingBottom: '15px', margin: '40px 0 20px',borderBottom: '1px solid black'}}></div>
									</div>
								</div>
							</div>
						</div>
	    				<div className="col-xs-12">
	  						<Gallery label='Wedding' hrLine='false' data={this.state.data}/>
	  						<div className="form-group row">
							<label className="col-xs-12 control-label" style={{textAlign: 'center'}}></label>
							<div className="col-xs-12 row"></div>
							{/*{this.state.arr.length > 8 && <ButtonComponent label="More"/>}*/}
							{this.state.data.length === 0 && <span>No record found
								<ButtonComponent
									className="col-xs-12"
									label="Find More"
									onClick={() => this.setState({ data: this.state.arr })}
								/>
							</span>}
							<div className="col-xs-12"></div>
						</div>
	    				</div>
	    			</div>
			</div>
	    );
  	}
}

export default Filterpanel;
