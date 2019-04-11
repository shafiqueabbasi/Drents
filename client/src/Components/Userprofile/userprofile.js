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

class UserProfile extends Component {
	constructor(props) {
        super(props);
        this.state = {
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
	}

	ratingFunc(data, id){
        let review = 0,
        rentalReviews = [],
        rentedReviews = [],
        dressData = data.dress.length > 0 && data.dress.map((elem) => {
            return elem._id;
        }),
        filterData = data.review.length > 0 && data.review.map((elem) => {
            if((elem.rentedId === id) || (elem.rentalId === id)){
                return elem._id
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
                        review += +elem.rentalRate;
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

    filterFunc(arr, key){
    	if(key === 'SORT BY') return arr;
    	return arr.filter((elem) => elem.bodyType == key);
    }

    //-----------------cloudnary function end ------------------

	render() {
		const { profile, review, dressData, orderhistory, updatedImage, rentals, rented, rentalTab, rentedTab, filterDresses, filterKey,archivestatus } = this.state,
		{ user } = this.props,
		id = this.props.match.params.value,
		userName = profile.length > 0 && profile[0].firstName.length > 0 ? profile[0].firstName : user && user.username;
		let userAvailable = false,
		arr = rentalTab ? rentals : rented,
		reviewsArr = rentalTab ? this.state.rentalReviews : this.state.rentedReviews,
		boo = rentalTab ? true : false;
		arr = this.filterFunc(arr, filterKey);
		if(user && user._id && user._id === id){
			userAvailable = true;
		}
		
		return(
			<div>
					<div>
						{this.state.loading && <div class="loading">Loading&#8230;</div>}
						<div className="container" style={{marginTop:'9%'}}>

							<div className="row" style={{marginTop:'21px', marginLeft: '0px', marginRight:'0px'}}>
								<div className="col-md-5 col-lg-5 hidden-sm hidden-xs sami">
									<img src={updatedImage .length > 0 ? updatedImage : "../images/admin1.jpg"} alt="Avatar" className="image"/>
									<div className={userAvailable ? "overlayChange" : 'nothing'}>
										<label className="custom-file-upload samiLabel" style={{margin: '150px 0px 0px 150px'}}>
											<input type="file" onChange={e => this.handleImage(e)}/>
											<i class="fas fa-camera" style={{fontSize:'20px',padding: '0 22px 0', cursor: 'pointer'}}></i><br/>
										    <h5>Add Photo</h5>
										</label>
									</div>
								</div>

								<div className="col-md-1 col-lg-1 hidden-sm hidden-xs"></div>

								<div className="visible-sm col-sm-5 hidden-xs sami_1" style={{marginTop: '6%'}}>
									<img src="../images/admin1.jpg" alt="Avatar" className="image_1"/>
									<div className={userAvailable ? "overlay_1" : 'nothing'} style={{left: '15px', width: '100%'}}>
										<label className="custom-file-upload samiLabel_1" style={{padding: '0 36%',marginTop:'40%'}}>
											<input type="file" onChange={e => this.handleImage(e)}/>
											<i class="fas fa-camera" style={{fontSize:'20px',padding: '0 22px 0', cursor: 'pointer'}}></i><br/>
										    <h5>Add Photo</h5>
										</label>
									</div>
								</div>

								<div className="visible-xs sami_2">
									<img src="../images/admin1.jpg" alt="Avatar" className="image_2"/>
									<div className={userAvailable ? "overlay_2" : 'nothing'}>
										<label className="custom-file-upload samiLabel_2" style={{margin: '10px 0',padding: '37%'}}>
											<input type="file" onChange={e => this.handleImage(e)}/>
											<i class="fas fa-camera" style={{fontSize:'20px', cursor: 'pointer'}}></i><br/>
										    <h5>Add Photo</h5>
										</label>
									</div>
								</div>

								<div className="col-md-6 col-lg-7 col-sm-6 col-xs-12 rovil3">
									<div className="row" style={{marginRight:'0px',marginLeft: '0px'}}>
										<div className="col-md-5 hidden-sm hidden-xs" style={{paddingLeft: '0px'}}>
											<h2><span className="rovil2">{userName}</span></h2>
										</div>

										<div className="row visible-sm" style={{paddingLeft: '0px'}}>
											<div className="col-sm-5">
												<h2><span className="rovil2">{userName}</span></h2>
											</div>
											<div className="col-sm-7">												
												<div className="col-sm-12 visible-sm rovil4">
													<Rate initialRating={review} readonly classMd="col-sm-12" rate={review} classXS="col-sm-3" />
												</div>
											</div>
										</div>

										<div className="col-xs-12 visible-xs" style={{paddingLeft: '0px'}}>
											<h2><span className="rovil2">{userName}</span></h2>
										</div>

										<div className="col-md-5 hidden-sm hidden-xs rovil4">
											<Rate initialRating={review} readonly classMd="col-md-10" rate={review} classXS="col-md-2" />
										</div>

										<div className="col-xs-9 visible-xs rovil4" style={{paddingLeft: '0px'}}>
											<Rate initialRating={review} readonly classMd="col-xs-10" rate={review} classXS="col-xs-2" />
										</div>

										<div className="col-md-2 hidden-sm hidden-xs rovil6">
											{userAvailable && <h4>
												<Link to={{pathname: `/userdetail`, state: { goTo: 'profile', profile }}}>
													<i className="glyphicon glyphicon-pencil pencilss">
														<p style={{fontSize: '15px', color: 'gray'}}>Edit</p>
													</i>
												</Link>
											</h4>}
										</div>

										<div className="col-sm-2 visible-sm" style={{margin: '0px 0px 0px 182px' , marginTop:'-18%'}}>
											{userAvailable && <h4 style={{marginLeft:'300%'}}>
												<Link to={{pathname: `/userdetail`, state: { goTo: 'profile', profile }}}>
													<i className="glyphicon glyphicon-pencil pencilss">
														<p style={{fontSize: '15px', color: 'gray'}}>Edit</p>
													</i>
												</Link>
											</h4>}
										</div>

										<div className="visible-xs rovil6" style={{paddingLeft: '0px'}}>
											{userAvailable && <h4>
												<Link to={{pathname: `/userdetail`, state: { goTo: 'profile', profile }}}>
													<i className="glyphicon glyphicon-pencil pencilss">
														<p style={{fontSize: '15px', color: 'gray'}}>Edit</p>
													</i>
												</Link>
											</h4>}
										</div>
									</div>

									<div className="rovil1" style={{paddingLeft: '0px'}}>
										<h4 style={{fontFamily: 'crimsontext'}}>London</h4>
									</div>

									<div className="rovil1" style={{paddingLeft: '0px'}}>
										<h4><span className="rovil7">Bio</span></h4>
									</div>

									<div className="col-md-12 shut2">
										<h4 style={{fontFamily: 'crimsontext'}}>Working as a Designer want to rent every thing which is in my wardrobe.</h4>
									</div>

									<div>
										<div className="col-md-7 col-sm-8" style={{paddingLeft: '0px'}}>
											<h4 style={{fontFamily: 'crimsontext'}}>member since 2019-04-18</h4>
										</div>
										<div className="col-md-5 col-sm-4" style={{paddingLeft: '0px'}}>
											<h4 style={{fontFamily: 'crimsontext'}}>Size Wear :M</h4>
										</div>
									</div>

									{/*<div className="row">
										<div>
										<h4>Rent Till 5 Date</h4>
										</div>
									</div>*/}
								</div>
							</div>



							<div className="row" style={{marginLeft: '0px', marginRight: '0px'}}>
								<div className="col-md-3 col-sm-3"></div>

								<div className="col-md-2 col-sm-2">
									<h3 style={rentalTab ? {color: '#c2073f', textDecorationLine: 'underline', fontFamily: 'crimsontext'} : {color: '#c2073f', fontFamily: 'crimsontext'}}
										onClick={() => this.setState({ rentalTab: true, rentedTab: false, filterKey: 'SORT BY'})}>
										Rentals
									</h3>
								</div>

								<div className="col-md-2 col-sm-2"
									onClick={() => this.setState({ rentalTab: false, rentedTab: true, filterKey: 'SORT BY'})}>
									<h3 style={rentedTab ? {color: '#c2073f', textDecorationLine: 'underline', fontFamily: 'crimsontext'} : {color: '#c2073f', fontFamily: 'crimsontext'}}>
										Rented
									</h3>
								</div>

								<div className="col-md-2 col-sm-2">
									{userAvailable && <Link to={{pathname: `/userdetail`, state: {goTo: 'currentRentals', orderhistory, id }}}>
										<h3 style={{color: '#c2073f', fontFamily: 'crimsontext'}}>Orders</h3>
									</Link>}
								</div>

								<div className="col-md-3 col-sm-3"></div>
							</div>

							<hr style={{border: '1px solid #c2073f'}}/>

							<div className="row">
								<div className="col-md-10 col-sm-9 col-xs-6">
									<div className="row" style={{margin:'0px'}}>
										{/*<div className="col-md-6"><h2>GALLERY</h2></div>*/}
										{archivestatus && <div className="alert alert-success alert-dismissible">
											<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
				  						<strong>Success!</strong>Dress Deleted
										</div>}
										{dressData && <Gallery
											// label='Gallery'
											showEditDelete={boo}
											onDelete={this.onDelete}
											data={arr}
											profile={profile}
											widthProps = '265%'
											userAvailable={userAvailable}
										/>}

										{!dressData && <div style={{textAlign: 'center'}}>not uploaded any dress</div>}
									</div>
								</div>

								{userAvailable && <div className="col-md-2 hidden-sm hidden-xs">&emsp;&emsp;&nbsp;

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



							<div className="row">
								<div className="col-md-4"></div>

								<div className="col-md-4">
									<h3 style={{textAlign: 'center', color: '#c2073f', fontFamily: 'crimsontext'}}>Comments & Views</h3>
								</div>

								<div className="col-md-4"></div>
							</div>
							<hr style={{border: '1px solid #c2073f'}}/>
							{reviewsArr.map((elem) => <ReviewsCard data={elem}/>)}
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
