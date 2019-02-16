import React, { Component } from 'react';
import { Rate, DetailInput } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';

import sha1 from "sha1";
import superagent from "superagent";
import { connect } from 'react-redux';
import moment from 'moment';

class CommentCard extends Component {
	state = {
		rate: 0,
		name: '',
		email: '',
		size: '',
		wear: '',
		msg: '',
		fileList: []
	} 

	handleChange = e => {
	    this.setState({ rate : e })
	}

	handleInput = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	handleImage = (elem) => {     
        let { fileList } = this.state,        
        self = this,
        file = elem.target.files[0],
        reader = new FileReader();

        //Read the contents of Image File.
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            
            //Initiate the JavaScript Image object.
            var image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;
            
            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height,
                width = this.width;
                if (height > width) {
                    file.src = e.target.result;
                    fileList.push(file);
                    self.setState({ fileList });
                    return false;
                }
                alert("Image must be in portrait mode.");
                return true;
            };
        }
    }

    handleSubmit = e => {
    	const { fileList } = this.state;
    	Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postReview(results)
        });
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

    postReview = async (img) => {
    	const { name, email, size, wear, msg, rate } = this.state,
    	obj = {
    		name, email, size, wear, msg, rate, img,
    		userId: this.props.user._id,
    		written: moment().format('LL')
    	}
    	let res = await HttpUtils.post('postreview',obj, this.props.user.token);
    	if(res && res.code && res.code === 200){
    		this.props.addReview(obj);
    		this.setState = {
				rate: 0,
				name: '',
				email: '',
				size: '',
				wear: '',
				msg: '',
				fileList: []
			}
    	}    	
    }

	render(){
		
		return(
			<div className="row mouse">
                <div className="container" style={{padding:"22px"}}>
                    <div className="col-md-12">
	                    <div className="col-md-9 dec">
	                      	<div className="row">
		                        <div className="col-md-6">
		                            <DetailInput 
		                                label="Name:" 
		                                id="name" 
		                                value={this.state.name} 
		                                onChange={this.handleInput}
		                            />   
		                            <DetailInput 
		                                label="Size Worn:" 
		                                id="size" 
		                                value={this.state.size} 
		                                onChange={this.handleInput}
		                            />                                                 
		                        </div>
		                        <div className="col-md-6">
		                            <DetailInput 
		                                label="Email:" 
		                                id="email" 
		                                value={this.state.email} 
		                                onChange={this.handleInput}
		                            />   
		                            <DetailInput 
		                                label="Wearing In:" 
		                                id="wear" 
		                                value={this.state.wear} 
		                                onChange={this.handleInput}
		                            />                          
		                        </div>
	                      	</div>
	                      	<div className="form-group">
	                        	<label htmlFor="msg"><span className="hell5">Message</span></label>
	                            <textarea className="form-control position3" 
	                              	id="msg" 
	                              	style={{width:'96%'}}
	                              	value={this.state.msg}
	                              	onChange={this.handleInput}
		                        >
		                        </textarea>
	                      	</div>
	                        <div className="col-md-10"></div>
	                        <div className="col-md-2" style={{marginTop:'39px'}}>
	                        	<button 
	                        		type="button" 
	                        		className="btn buttonpost absolute3"
                        		>
                        			<span className="poststyle" onClick={this.handleSubmit}>Post</span>
                        		</button>                       
	                        </div>
	                    </div>{/*Col md  closed*/}
	                    <div className="col-md-0"></div>
	                    {/* Col md 4 Star Session for deskstop*/}
	                    <div className="col-md-3 dec">
	                      	<div className="row ronin">
								<Rate 
									  rate="Your Rating" 
									  initialRating={this.state.rate} 
									  onChange={this.handleChange}
								/>                                                                          
								<div className="row">
									<div className="col-md-2 col-sm-2 col-xs-2"></div>
									<div className="col-md-7 col-sm-8 col-xs-2" style={{borderBottom: '1px solid black' , width:'63%'}}></div>
									<div className="col-md-3 col-sm-2 col-xs-2"></div>
								</div>  
								<Rate rate="5.0 Stunner" initialRating={5} readonly/>
								<Rate rate="4.0 Good" initialRating={4} readonly/>
								<Rate rate="3.0 Average" initialRating={3} readonly/>
								<Rate rate="2.0 Okay" initialRating={2} readonly/>
								<Rate rate="1.0 Bad" initialRating={1} readonly/>                                                 
	                      	</div>{/*Row closed*/}
							<div className="row">
								<div className="col-md-12 dam2" >
									<h4>Upload Pictures Wearing </h4>
								</div>
								<div className="col-md-12" style={{backgroundColor: '#ffffff'}}>
									<div className="col-md-7" style={{paddingRight:'0'}}>
									  	<h6 style={{color: 'black', fontSize: '49%', marginTop: '10%',}}>
									    	File size not exceed from 1 MB
									  	</h6>
									</div>
									<label className="labelcustome" id="#bb" >
										<span className="dell5">Choose File</span>
								        <input type="file" id="File" size="60" onChange={e => this.handleImage(e)} />
									</label>
								</div>
							</div>
	                    </div> {/* Col md 2 Star Session*/}                        
                    </div>
                </div>  
            </div>
		)
	}
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedCommentCard = connect(mapStateToProps)(CommentCard);
export default connectedCommentCard;
