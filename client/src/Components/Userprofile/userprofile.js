import React, { Component } from 'react';
import Gallery from '../home/heading4';
import { HttpUtils } from  '../../Service/HttpUtils';
import { Rate } from '../_components/myInput';
import './userprofile.css'

import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class UserProfile extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	arr : [],
        	profile: [],
        	loading: true
        }
    }

	async componentDidMount(){
		let id = this.props.match.params.value,
		data = await HttpUtils.post('getprofiledress', {userId: id}),
		rate = 0;
		if(data.code && data.code == 200){
			let dressData = data.dress.length > 0 && data.dress.map((elem) => {
				return elem._id;
			}) 
			if(dressData){
				data.review.map((elem) => {
					if(dressData.includes(elem.productId)){
						rate += +elem.rate
					}
				})
				rate = rate / data.review.length;
			}			
			this.setState({ arr: data.dress, profile: data.profile, review: rate, loading: false, dressData });
		}
	}

	onDelete = e => {
		console.log(e, 'editttttt')
	}

	render() {
		const { profile, arr, review, dressData } = this.state,
		{ user } = this.props,
		id = this.props.match.params.value,
		userName = profile.length > 0 ? profile[0].firstName : "User Name";
		let userAvailable = false;
		console.log(profile, 'rateeeeeeee')
		if(user && user._id && user._id === id){
			userAvailable = true;
		}
		return(
			<div style={{backgroundImage: "url('./images/swrils.png')"}}>
					<div>
						{this.state.loading && <div class="loading">Loading&#8230;</div>}
						<div className="container" style={{marginTop:'6%'}}>
							<div className="row" style={{marginTop:'21px'}}>
								<div className="col-md-3">
									<div className="rovil1 shah2">
										<img src="../images/admin1.jpg" className="rovilimg img-circle streetb2"/>
									</div>
									<div id="shah1">
										<div className="streetb1">	
											<label className="custom-file-upload">
											    <input type="file"/>
											    <i class="fas fa-camera" style={{fontSize:'20px'}}></i><br/>
											    <h5>Add Photo</h5>
											</label>
										</div>
									</div>
								</div>
								<div className="col-md-9 rovil3">
									<div className="row">
										<div className="col-md-5 col-xs-7">
											<h2><span className="rovil2">{userName}</span></h2>
										</div>
										<div className="col-md-5 col-xs-5 rovil4">
											<Rate initialRating={this.state.review} readonly classMd="col-md-8" classXS="col-md-4" />
										</div>
										<div className="col-md-2 rovil6">
											{userAvailable && <h4>
												<Link to={{pathname: `/userdetail`, state: {goTo: 'profile', profile, arr }}}><i className="glyphicon glyphicon-pencil"></i></Link>
											</h4>}
										</div>
									</div>
									<div className="row rovil1">
										<h5>London</h5>
									</div>
									{/*<div className="row rovil1">
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
									</div>*/}
								</div>
							</div>
						</div>
						<div className="row" style={{margin:'0px'}}>
							{/*<div className="col-md-6"><h2>GALLERY</h2></div>*/}
							{dressData && <Gallery
								label='Gallery'
								showEditDelete={true}
								onDelete={this.onDelete}
								data={arr}
								profile={profile}
								userAvailable={userAvailable}
							/>}
							{!dressData && <div style={{textAlign: 'center'}}>not uploaded any dress</div>}
						</div>
					</div>
			</div>
    	);
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedUserProfile = connect(mapStateToProps)(UserProfile);
export default connectedUserProfile;
