import React, { Component } from 'react';
import Heading4 from '../home/heading4';
import './userprofile.css'

class Userprofile extends Component {
	render() { 
		return( 
			<div  style={{backgroundImage: "url('./images/swrils.png')"}}>
					<div>
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div className="rovil1">
										<img src="../images/admin1.jpg" className="rovilimg img-circle"/>
									</div>
								</div>
								<div className="col-md-6 rovil3">
									<div className="row">
										<div className="col-md-5 col-xs-7">
											<h2><span className="rovil2">Alicia Diamond</span></h2>
										</div>
										<div className="col-md-5 col-xs-5 rovil4">
											<i className="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
											<i className="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
											<i className="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
											<i className="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
											<i className="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
										</div>
										<div className="col-md-2 rovil6">
											<h4><span className="rovil5">Ratings</span></h4>	
										</div>
									</div>
									<div className="row rovil1">
										<h5>London</h5>
									</div>
									<div className="row rovil1">
										<h4><span className="rovil7">Bio</span></h4>
									</div>
									<div className="row">
										<div>
										<h4>Working as a brand name as Alicia Diamond very good rent</h4>
										</div>
									</div>
									<div className="row">
										<div className="col-md-5" style={{marginLeft:'-15px'}}>
											<h4>member since 2019-04-18</h4>
										</div>
										<div className="col-md-5">
											<h4>Size Wear :M</h4>
										</div>
									</div>
									<div className="row">
										<div>
										<h4>Rent Till 5 Date</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Heading4 />
					</div>
			</div>
    );

  }
}

export default Userprofile;
