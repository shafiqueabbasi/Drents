import React, { Component } from 'react';
import Gallery from '../home/heading4';
import ReviewsCard from '../productdetail/reviewsCard';
import { HttpUtils } from  '../../Service/HttpUtils';
import { Rate } from '../_components/myInput';
import _ from 'underscore';
import './userprofile.css'

import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import sha1 from "sha1";
import superagent from "superagent";
import { isBrowser } from "react-device-detect";

class UserProfile extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	profile: [],
        	loading: true,
        	updatedImage: '',
        	bio: '',
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
			createdAt: '',
			dressData:'',
			rentals: [],
			rented: [],
			rentalTab: true,
			rentedTab: false,
			archivestatus:false,
			filterDresses: [
				'SORT BY',
				'Wedding',
	            'Party',
	            'Corporate',
	            'Special Ocasion',
	            'Family Dinner',
	            'Causal',
	            'Bridal',
	            'Sami Formal',
	            'Formal',
	            'Heavy Formal',
			],
			filterKey: 'SORT BY',
			rentalReviews: [],
			rentedReviews: []
        }
    }

    componentDidMount(){
    	window.scrollTo(0,0);
    	this.fetchUserData();
    }

    componentDidUpdate(prevProps, prevState){
    	if(this.props.match.params.value !== prevProps.match.params.value){
    		this.fetchUserData();
    	}
    }

	async fetchUserData(){
		let id = this.props.match.params.value,
		data = await HttpUtils.post('getprofiledress', {userId: id});

		 console.log(data , 'dress data')
		if(data.code && data.code == 200){
			this.ratingFunc(data, id);
			this.rentedRentals(data, id);
			for(var el in data.profile[0]){
		        this.setState({ [el]: data.profile[0][el] });
	        }

			this.setState({
				profile: data.profile,
				loading: false,
				userId: id,
			});
		}
	}

	rentedRentals(data, id){
		let rented = [],
		rentals = [];
		data.orderhistory.length > 0 && data.orderhistory.map((elem) => {
			elem.products.map((el) => {
				let isUser = el.userId === id;
				if(isUser && ['Completed', 'Dispatched', ''].includes(el.rentalStage)){
					rentals.push(this.easyObject(el, elem));
				}
			});
			if(elem.userId === id){
				elem.products.map((el) => {
					if(!['Completed', 'Available'].includes(el.rentalStage)){
						rented.push(this.easyObject(el, elem));
					}
				})
			}
		});
		this.setState({ orderhistory: data.orderhistory, rentals, rented });
		console.log(this.state.rentals,"reeennntaaaalllssss");
		console.log(this.state.rented,"renteeeeeedddddddddd")
	}

	ratingFunc(data, id){
        let review = 0,
        rentalReviews = [],
        rentedReviews = [],
        filterData = [],
        dressData = data.dress.length > 0 && data.dress.map((elem) => {
            return elem._id;
        });
        
        data.review.length > 0 && data.review.map((elem) => {
            if((elem.rentedId === id) || (elem.rentalId === id)){
                filterData.push(elem._id)
            }
        });
        if(dressData){
            data.review.map((elem) => {
                if(filterData.includes(elem._id)){
                    if(elem.rentalId === id){
                        rentalReviews.push({
                            userId: elem.rentedId,
                            name: elem.rentedName,
                            size: elem.rentedSize,
                            wear: elem.rentedWear,
                            rate: elem.rentedRate,
                            date: elem.rentedDate,
                            msg: elem.rentedMsg,
                            img: elem.rentedImg
                        });
                        review += +elem.rentedRate;
                    }else if(elem.rentedId === id){
                        rentedReviews.push({
                            userId: elem.rentalId,
                            name: elem.rentalName,
                            size: elem.rentalSize,
                            wear: elem.rentalWear,
                            rate: elem.rentalRate,
                            date: elem.rentalDate,
                            msg: elem.rentalMsg,
                            img: elem.rentalImg
                        });
                        review += isNaN(+elem.rentalRate) ? 0 : +elem.rentalRate;
                    }
                }
            })
            review = (review / filterData.length).toFixed(1);
        }
        if(!dressData){
            this.props.updateFooter(true);
        }
        this.setState({ review, dressData, rentalReviews, rentedReviews });
    }

	easyObject(el, elem){
		return {...el, ...{
			amount: elem.amount,
			date: elem.date,
			buyerEmail: elem.email,
			buyerName: elem.name,
			buyerId: elem.userId,
			dataId: elem._id
		}}
	}

	componentWillUnmount(){
		this.props.updateFooter(false)
	}

	onDelete = async (e) => {
		 let obj = {
			 _id:e._id,
			 archiveStatus:'Achived'
		 }
		let res = await HttpUtils.post('uploaddress',obj);
		if(res.code == 200){
			alert('Dress is deleted from Drent');
			this.setState({
				archivestatus:true
			})
		}
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
        const {email, bio, firstName, lastName, inputHeight, weight, bustSize, height, bodyType,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId, _id, createdAt} = this.state;
		let obj = {
			email, bio, firstName, lastName, inputHeight, weight, bustSize, height, bodyType,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId, updatedImage,
			profileId: _id, createdAt
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

    filterFunc(arr, key){
    	if(key === 'SORT BY') return arr;
    	return arr.filter((elem) => elem.bodyType == key);
    }

    //-----------------cloudnary function end ------------------

	render() {
		const { profile, review, dressData, orderhistory, updatedImage, rentals, rented, rentalTab, rentedTab, filterDresses, filterKey, archivestatus, bio, createdAt } = this.state,
		{ user } = this.props,
		id = this.props.match.params.value,
		userName = profile.length > 0 && profile[0].firstName.length > 0 ? profile[0].firstName : user && user.username;
		let userAvailable = false,
		arr = rentalTab ? rentals : rented,
		reviewsArr = rentalTab ? this.state.rentalReviews : this.state.rentedReviews,
		boo = rentalTab ? true : false;
		arr = this.filterFunc(arr, filterKey);
		// console.log(arr,'array in data')
		if(user && user._id && user._id === id){
			userAvailable = true;
		}
		// console.log(dressData,'dressData')
		return(
		<div>
			<div>
				{this.state.loading && <div class="loading">Loading&#8230;</div>}
				<div className="" style={{marginTop:'5%'}}>
					<div className="row alignset">
						<div className="col-xs-12 col-sm-2 col-md-3 col-lg-3 sami">
							<img src={updatedImage .length > 0 ? updatedImage : "../images/admin1.jpg"} alt="Avatar" className="image"/>
								<div className={userAvailable ? "overlayChange" : 'nothing'}>
									<label className="custom-file-upload samiLabel" style={{margin: '65px 0px 0px 51px'}}>
										<input type="file" onChange={e => this.handleImage(e)}/>
										<i class="fas fa-camera" style={{fontSize:'20px',padding: '0 22px 0', cursor: 'pointer'}}></i><br/>
									    <h5>Add Photo</h5>
									</label>
								</div>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-5 col-lg-6 rovil3">

							<div className="" style={{paddingLeft: '0px'}}>
								<h2><span className="rovil2">{userName}</span></h2>
							</div>
							<div className="rovil4" style={{paddingLeft: '0px'}}>
								<Rate initialRating={review} readonly classMd="col-sm-12 col-xs-10 col-md-10 col-lg-10" rate={review} classXS="col-sm-3 col-xs-2 col-md-2 col-lg-2" />
							</div>
							<div style={{paddingLeft: '0px'}}>
								<h4 className="promembertext">Member since {createdAt}</h4>
							</div><br/>
							<div className="shut2">
								<h4 className="desctext">{bio.length > 0 ? bio : 'No description added yet'}.</h4>
							</div>

						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 mac_user_margin">
								{userAvailable && <h4>
									<Link to={{pathname: `/userdetail`, state: { goTo: 'profile', profile }}}>
										<button className="btneditprofile2">Put a new dress on rent</button>
									</Link>
								</h4>}<br/><br/>
								{userAvailable && <h4>
									<Link to={{pathname: `/userdetail`, state: { goTo: 'profile', profile }}}>
										<button className="btneditprofile">Edit Profile</button>
									</Link>
								</h4>}
						</div>
					</div>

					<hr style={{border: '1px solid silver'}}/>

					<div className="row" style={{marginLeft: '0px', marginRight: '0px'}}>
						<div className="col-md-2 col-sm-2"></div>

						<div className="col-md-2 col-sm-2 btn_rental">
							<h3 style={rentalTab ? {color: '#cb9d6c', fontFamily: 'playfair display' , backgroundColor: 'rgb(71, 52, 99)', padding: '10px' } : {color: '#9A8888', fontFamily: 'playfair display', backgroundColor: '#E2D3D3', padding: '10px'}}
								onClick={() => this.setState({ rentalTab: true, rentedTab: false, filterKey: 'SORT BY'})}>
								Rentals
							</h3>
						</div>
						<div className="col-md-1 col-sm-1"></div>
						<div className="col-md-2 col-sm-2 btn_order_rent"
							onClick={() => this.setState({ rentalTab: false, rentedTab: true, filterKey: 'SORT BY'})}>
							<h3 style={rentedTab ? {color: '#cb9d6c', fontFamily: 'playfair display' , backgroundColor: 'rgb(71, 52, 99)', padding: '10px'} : {color: '#9A8888', fontFamily: 'playfair display', backgroundColor: '#E2D3D3', padding: '10px'}}>
								Rented
							</h3>
						</div>
						<div className="col-md-1 col-sm-1"></div>
						<div className="col-md-2 col-sm-2 btn_order_rent">
							{userAvailable && <Link to={{pathname: `/userdetail`, state: {goTo: 'currentRentals', orderhistory, id }}}>
								<h3 style={{color: '#9A8888', fontFamily: 'playfair display', backgroundColor: '#E2D3D3', padding: '10px'}}>Orders</h3>
							</Link>}
						</div>

						<div className="col-md-2 col-sm-2"></div>
					</div>

					<div className="row" style={{margin:'0px'}}>
						<div className="col-md-12 col-sm-9 col-xs-6">
							<div className="row" style={{margin:'0px'}}>
								{archivestatus && <div className="alert alert-success alert-dismissible">
									<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
		  						<strong>Success!</strong>Dress Deleted
								</div>}
								{dressData && <Gallery
									 label='Farzan Dresses'
									showEditDelete={boo}
									onDelete={this.onDelete}
									data={arr}
									profile={profile}
									colLg='col-lg-2'
									widthProps = '265%'
									imgtextstyle='absoul_userprofile'
							        imgheadtext='pinktext_userprofile'
							        margBotom='margbootom_userprofile'
							        featureFilter='featuresub_userprofile'
									showonhome={true}
									userAvailable={userAvailable}
								/>}

								{!dressData && <div style={{textAlign: 'center'}}>not uploaded any dress</div>}
							</div>
						</div>

						{userAvailable && <div className="hidden-lg hidden-md hidden-sm hidden-xs">&emsp;&emsp;&nbsp;

							<div class="dropdown" style={{marginTop: '-35px'}}>
							    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown"
							      style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f'}}>{filterKey} &emsp;
							      <span class="caret"></span></button>

							    <ul class="dropdown-menu">
							    	{filterDresses.map((el) => {
							    		return (
							    			<li onClick={() => this.setState({ filterKey: el})}>
						    					<a>{el}</a>
							    			</li>
							    		)
							    	})}
							    </ul>
							</div>


						</div>}

						{userAvailable && <div className="visible-sm col-sm-3">&emsp;&emsp;
							<div className="dropdown">
							    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown"
							      style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f'}}>{filterKey} BY &emsp;
							      <span class="caret"></span></button>

							    <ul class="dropdown-menu">
							    	{filterDresses.map((el) => {
							    		return (
							    			<li onClick={() => this.setState({ filterKey: el})}>
						    					<a>{el}</a>
							    			</li>
							    		)
							    	})}
							    </ul>
							</div>
						</div>}

						{userAvailable && <div className="col-xs-6 visible-xs">
							<div class="dropdown">
							    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown"
							      style={{background: '#ffffff', color: '#c2073f', borderRadius: '0', border: '1px solid #c2073f'}}>{filterKey} BY &emsp;
							      <span class="caret"></span></button>

							    <ul class="dropdown-menu">
							    	{filterDresses.map((el) => {
							    		return (
							    			<li onClick={() => this.setState({ filterKey: el})}>
						    					<a>{el}</a>
							    			</li>
							    		)
							    	})}
							    </ul>
							</div>
						</div>}



					</div>



					{/*{reviewsArr.length !== 0 && <div className="row">
						<div className="col-md-4"></div>

						<div className="col-md-4">
							<h3 style={{textAlign: 'center', color: '#c2073f', fontFamily: 'crimsontext'}}>Comments & Views</h3>
						</div>

						<div className="col-md-4"></div>
					</div>}
					{reviewsArr.length !== 0 && <hr style={{border: '1px solid #c2073f'}}/>}
					{reviewsArr.map((elem) => <ReviewsCard data={elem}/>)}*/}
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
