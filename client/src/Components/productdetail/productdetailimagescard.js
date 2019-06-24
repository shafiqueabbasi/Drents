 import React, { Component } from 'react';
 import { isMobileOnly, isTablet } from "react-device-detect";
 import './productdetail.css'

 class Productdetailimagescard extends Component {
 	state = {
 		showImg: ''
 	}

 	componentDidMount(){
 		const { data } = this.props;
 		this.setState({ showImg: data[0] });
 	}

 	componentDidUpdate(prevProps, prevState){
 		const { data } = this.props;
 		if(data[0] !== prevProps.data[0]){
 			window.scrollTo(0, 0);
 			this.setState({ showImg: data[0] });
 		}
 	}

	render() { 
 		const { data } = this.props;

		return( 
			<div>
				<div className="hidden-xs hidden-sm">
					<div className="row">

						<div className="row col-lg-12 col-md-12 back_arrowdresses">
							<div className="col-md-4 col-lg-4">
							    <img src="../images/back-arrow.png" className="back_arrow"/>
							</div>
							<div className="">
								<p className="back_arrowtext">BACK TO ALL DRESSES</p>
							</div>
						</div><br/><br/>

						<div className="col-md-12">
							<img alt="" src={this.state.showImg} style={{width:"100%", height:"610px"}}/>
						</div>
					</div>
					<br/>
					<div className="row">	
						{/*<div className="col-md-4 hidden-xs hidden-sm">
						
							{data.map((elem) => {
								return (
									
										<img
											alt="image"
											src={elem} 
											style={{width:"100%", height:"230px"}} 
											onClick={
												() => this.setState({ showImg: elem })
											}
										/>
										
									
								)
							})}
						
						</div>*/}
						<div className="row" style={{margin:'0px'}}>	
            			{data.map((elem) => {
							return (
							<div className="col-md-3 hidden-xs hidden-sm">
								<img 
									alt="" 
									src={elem} 
									style={isTablet ? {height:"200px", width:'100%'} : {height:"155px" , width:'100%'}} 
									onClick={
										() => this.setState({ showImg: elem })
									}
								/>
							</div>
							)
						})}						
					</div>
					</div>
				</div> 	
            	<br/><br/><br/>
            	<div className="visible-sm visible-xs">

	            		<div className="row">

		            		<div className="col-sm-12 col-xs-12">
								<div className="col-sm-2 col-xs-2">
								    <img src="../images/back-arrow.png" className="back-arrow"/>
								</div>
								<div className="col-sm-10 col-xs-10">
									<p className="back_arrowtext">BACK TO ALL DRESSES</p>
								</div>
							</div>

	            			<div className="col-xs-12 col-sm-12">
	            				<img alt="" src={this.state.showImg} style={isTablet ? {width:"94%", height:"840px"} : {width:"85%", height:"400px", marginTop:'4%', marginLeft:'4%'}}/>
	            			</div>
	            		</div>
						
						<br />
						
            		<div className="row" style={{margin:'0px'}}>	
            			{data.map((elem) => {
							return (
							<div className="col-sm-4 col-xs-4">
								<img 
									alt="" 
									src={elem} 
									style={isTablet ? {height:"230px" , marginLeft:'-3%', width:'86%'} : {height:"70px" , width:'73%'}} 
									onClick={
										() => this.setState({ showImg: elem })
									}
								/>
							</div>
							)
						})}						
					</div>
				</div>
			</div>
    	);
    }
}

export default Productdetailimagescard;
