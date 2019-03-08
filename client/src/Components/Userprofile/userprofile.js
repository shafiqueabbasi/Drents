import React, { Component } from 'react';
import Gallery from '../home/heading4';
import { HttpUtils } from  '../../Service/HttpUtils';
import { Rate } from '../_components/myInput';
import _ from 'underscore';
import './userprofile.css'

import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import sha1 from "sha1";
import superagent from "superagent";

class UserProfile extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	arr : [],
        	profile: [],
        	loading: true,
        	updatedImage: '',
        	email: '',
			firstName: '',
			lastName: '',
			inputHeight:'',
			weight:'',
			bustSize:'',
			bodyType:'',
			ocassionAttendMost:'',
			typicalJeanSize:'',
			bust: '',
			hips: '',
			torso: '',
			ribcage: '',
			height: '',
			userId: '',
			_id: '',
        }
    }

    componentDidMount(){
    	this.fetchUserData();
    }

	async fetchUserData(){
		let id = this.props.match.params.value,
		data = await HttpUtils.post('getprofiledress', {userId: id}),
		rate = 0;
		if(data.code && data.code == 200){
			let dressData = data.dress.length > 0 && data.dress.map((elem) => {
				return elem._id;
			}) 
			let historyData = data.orderhistory.length > 0 && data.orderhistory.map((elem) => {
				return elem.products;
			})
			for(var el in data.profile[0]){
		        this.setState({ [el]: data.profile[0][el] })
	        }
			let orderhistory = _.flatten(historyData)
			if(dressData){
				data.review.map((elem) => {
					if(dressData.includes(elem.productId)){
						rate += +elem.rate
					}
				})
				rate = rate / data.review.length;
			}		
			if(!dressData){
				this.props.updateFooter(true)
			}	
			this.setState({ 
				arr: data.dress, 
				profile: data.profile, 
				review: rate, 
				loading: false, 
				dressData,
				orderhistory,
				userId: this.props.user._id 
			});
		}
	}

	componentWillUnmount(){
		this.props.updateFooter(false)
	}

	onDelete = e => {
		console.log(e, 'editttttt')
	}

	handleImage = elem => {
		let { fileList } = this.state,        
        self = this,
        file = elem.target.files[0],
        reader = new FileReader();

        //Read the contents of Image File.
        reader.readAsDataURL(file);
        reader.onload = function (e) {
        	var image = new Image();
        	file.src = e.target.result;
        	self.forUpload(file);
        }
	}

	forUpload = async e => {
		let updatedImage = await this.uploadFile(e).then((result) => {
            return result.body.url
        });
        const {email, firstName, lastName, inputHeight, weight, bustSize, height, bodyType,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId, _id} = this.state;
		let obj = {
			email, firstName, lastName, inputHeight, weight, bustSize, height, bodyType,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId, updatedImage,
			profileId: _id
		}
        let res = await HttpUtils.post('uploadprofile', obj, this.props.user.token);
		if(res && res.code && res.code == 200){
			this.setState({ updatedImage });
			this.fetchUserData();
		}        
	}

	//--------------function for cloudnary url ---------------
    uploadFile = (files) =>{        
        const image = files,
        cloudName = 'dxk0bmtei',
        url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload',
        timestamp = Date.now()/1000,
        uploadPreset = 'toh6r3p2',
        paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'U8W4mHcSxhKNRJ2_nT5Oz36T6BI',
        signature = sha1(paramsStr),
        params = {
            'api_key':'878178936665133',
            'timestamp':timestamp,
            'upload_preset':uploadPreset,
            'signature':signature
        };

        return new Promise((res, rej) => {
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', image)
            Object.keys(params).forEach((key) =>{
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) =>{
                err ? rej(err) : res(resp);
            })
        })
    }

    //-----------------cloudnary function end ------------------

	render() {
		const { profile, arr, review, dressData, orderhistory, updatedImage } = this.state,
		{ user } = this.props,
		id = this.props.match.params.value,
		userName = profile.length > 0 && profile[0].firstName.length > 0 ? profile[0].firstName : user && user.username;
		let userAvailable = false;
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
										<img src={updatedImage.length > 0 ? updatedImage : "../images/admin1.jpg"} className="rovilimg img-circle streetb2"/>
									</div>
									<div id="shah1">
										<div className="streetb1">	
											<label className="custom-file-upload inner">
											    <input type="file" onChange={e => this.handleImage(e)}/>
											    <i class="fas fa-camera" style={{fontSize:'20px', cursor: 'pointer'}}></i><br/>
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
												<Link to={{pathname: `/userdetail`, state: {goTo: 'profile', profile, arr, orderhistory }}}><i className="glyphicon glyphicon-pencil"></i></Link>
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
								orderhistory={orderhistory}
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
