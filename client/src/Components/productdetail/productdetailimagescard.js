 import React, { Component } from 'react';
 import './productdetail.css'

 class Productdetailimagescard extends Component {
 	state = {
 		showImg: ''
 	}

 	componentDidMount(){
 		const { data } = this.props;
 		this.setState({ showImg: data[0] });
 	}

	render() { 
 		const { data } = this.props;

		return( 
			<div>
				<div className="hidden-xs hidden-sm">
					<div className="row">
						<div  className="col-md-3 hidden-xs hidden-sm">
							{data.map((elem) => {
								return (
									<span>
										<img 
											alt="" 
											src={elem} 
											style={{width:"100%", height:"230px"}} 
											onClick={
												() => this.setState({ showImg: elem })
											}
										/>
										<br/><br/>
									</span>
								)
							})}
						</div>
						<div className="col-md-9">
							<img alt="" src={this.state.showImg} style={{width:"100%", height:"875px"}}/>
						</div>
					</div>
				</div> 	
            	<br/><br/><br/>
            	<div className="visible-sm visible-xs">
            	<div className="container">
            		<div className="row">
            			<div className="col-xs-12 col-sm-12">
            				<img alt="" src={this.state.showImg} style={{width:"100%", height:"875px"}}/>
            			</div>
            		</div><br />
            		<div className="row">	
            			{data.map((elem) => {
							return (
								<div className="col-sm-4 col-xs-4">
									<img 
										alt="" 
										src={elem} 
										style={{width:"100%", height:"230px"}} 
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
			</div>
    	);
    }
}

export default Productdetailimagescard;
