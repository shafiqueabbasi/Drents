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
        	profile: []
        }
    }

	async componentDidMount(){
		let id = this.props.match.params.value,
		data = await HttpUtils.post('getprofiledress', {userId: id}),
		rate = 0;
		console.log(data);
		if(data.code && data.code == 200){
			data.review.map((elem) => rate += +elem.rate)
			console.log(rate, 'ratee')
			rate = rate / data.review.length;
			console.log(rate, 'your rate')
			this.setState({ arr: data.dress, profile: data.profile, review: rate });
		}
	}

	onDelete = e => {
		console.log(e, 'editttttt')
	}

	render() {
		const { profile, arr, review } = this.state,
		{ user } = this.props,
		id = this.props.match.params.value;
		let userAvailable = false;
		console.log(review, 'rateeeeeeee')
		if(user && user._id && user._id === id){
			userAvailable = true;
		}
		return(
			<div style={{backgroundImage: "url('./images/swrils.png')"}}>
					<div>
						<div className="container" style={{marginTop:'6%'}}>
							<div className="row" style={{marginTop:'21px'}}>
								<div className="col-md-3">
									<div className="rovil1">
										<img src="../images/admin1.jpg" className="rovilimg img-circle" style={{width:'60%',height:'133px'}}/>
									</div>
								</div>
								<div className="col-md-9 rovil3">
									<div className="row">
										<div className="col-md-5 col-xs-7">
											<h2><span className="rovil2">Alicia Diamond</span></h2>
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
							<Gallery
								label='Gallery'
								showEditDelete={true}
								onDelete={this.onDelete}
								data={arr}
								profile={profile}
								userAvailable={userAvailable}
							/>
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
