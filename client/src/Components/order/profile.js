import React, { Component } from 'react';
import { Form } from 'antd';
import ChangePassword from './changePassword';
import { Textarea, TextInput, RadioInput, SelectInput } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';
import { connect } from 'react-redux';
import './profile.css';


class Profile extends Component {
	state = {
		email: '',
		firstName: '',
		lastName: '',
		bio: '',
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
		updatedImage: '',
		loading: false,
		showMsg: '',
		createdAt: '',
		sizeWear: [
			'X Small',
			'Small',
			'Medium',
			'X Large',
			'Large',
			'XX Large'
		]
	};

	componentDidMount(){
		const { _id, email } = this.props.user;
		const { profile } = this.props.location.state;
	      for(var el in profile[0]){
	          this.setState({ [el]: profile[0][el] })
	      }
		this.setState({ userId: _id })
	}

	inputHandleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
	}

	radioHandleChange = (e) => {
		let target = e.target.id.slice(0, e.target.id.length - 1);
		this.setState({ [target]: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const {email, firstName, lastName, inputHeight, weight, bustSize, height, bodyType, bio,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId, _id, createdAt} = this.state;
		let obj = {
			email, firstName, lastName, bio, inputHeight, weight, bustSize, height, bodyType,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId,
			profileId: _id, createdAt
		}
		this.submit(obj)
	}

	async submit(obj){
		let res = await HttpUtils.post('uploadprofile', obj, this.props.user.token);
		if(res && res.code && res.code == 200){
			this.setState({ loading : false, showMsg : res.msg })
		}
		setTimeout(() => {
			this.setState({ showMsg: '' })
		}, 3000)
	}

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.state.typicalJeanSize, 'sizeeeeeee')
    return (
      	<div>
      		<div className="container-fluid">
      			<div className="row" style={{margin:'0px'}}>
	      			<div className="col-xs-12 col-sm-1 col-md-2 col-lg-2"></div>
	      			<div className="col-xs-12 col-sm-10 col-md-8 col-lg-8">	      				
	      				<div className="col-sm-12 col-md-12 col-lg-12">
	      					<h1 className="form_heading">Personal</h1>
	      				</div>
	  					<Form onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
									<TextInput
										label="First Name"
										id="firstName"
										value={this.state.firstName}
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										Change={this.inputHandleChange}
									/>
								</div>	
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">	
									<TextInput
										label="Last Name"
										id="lastName"
										value={this.state.lastName}
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										Change={this.inputHandleChange}
									/>
								</div>	
							</div>
							<div className="row">
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">	
									<TextInput
										label="Email"
										id="email"
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										value={this.state.email}
										Change={this.inputHandleChange}
									/>
								</div>	
								<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">	
										<div className="col-lg-6 col-md-6 col-sm-10 col-xs-12">
											<h3 className="input_form_Profile">Change Password</h3>
										</div>
										<div className="col-lg-10 col-md-11 col-sm-10 col-xs-12">
											
										    <ChangePassword user={this.props.user.email}/>
										</div>
								</div>									
							</div>

							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-6">
									<h3 className="input_form_Profile" style={{paddingLeft:'13px'}}>Bio</h3>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div>
					 					<textarea
						                    required
						                    id="bio"
						                    className="textarea_profile"
						                    placeholder="Enter here bio" 
						                    name="Bio"
						                    value={this.state.bio} 
						                    onChange={e => this.setState({bio: e.target.value})}
						                    >
						                </textarea>
					 				</div>
								</div>							
							</div>

							<div className="col-lg-12 col-md-12 col-sm-12">
	  							<h1 className="form_heading">Mearsurments</h1>
	  						</div>

							<div className="row" style={{margin:'0px'}}>
		  						<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: '0px'}}>
		  							<TextInput
										label="Height"
										id="inputHeight"
										value={this.state.inputHeight}
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										Change={this.inputHandleChange}
									/>
								</div>
								<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: '0px'}}>
									<TextInput
										label="Weight"
										id="weight" 
										value={this.state.weight}
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										Change={this.inputHandleChange}
									/>
								</div>
							</div>{/*row closed*/}
							<div className="row" style={{margin:'0px'}}>
								<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: '0px'}}>
									<TextInput
										label="Bust Size"
										id="bustSize"
										value={this.state.bustSize}
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										className="input"
										Change={this.inputHandleChange}
									/>
								</div>
								<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: '0px'}}>
									<SelectInput
										label="Body Type"
										id="bodyType"
										value={this.state.bodyType}
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										options={[1,2,3,4,5]}
										Change={this.inputHandleChange}
									/>
								</div>
							</div>{/*row closed*/}
							<div className="row" style={{margin:'0px'}}>
								<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: '0px'}}>
									<SelectInput
										label="Event Atend Most"
										id="ocassionAttendMost"
										value={this.state.ocassionAttendMost}
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										options={['Causal','Bridal','Semi Formal','Formal','Heavy Formal']}
										Change={this.inputHandleChange}
									/>
								</div>
								<div className="col-md-6 col-sm-6 col-xs-12" style={{padding: '0px'}}>
									<SelectInput
										label="Size Wear"
										id="typicalJeanSize"
										value={this.state.typicalJeanSize}
										className="input"
										col="col-lg-6 col-md-6 col-sm-6"
										col2="col-lg-10 col-md-11 col-sm-10"
										options={this.state.sizeWear}
										Change={this.inputHandleChange}
									/>
								</div>
							</div>{/*row closed*/}
							<div className="col-lg-12 col-md-12 col-sm-12">
	  							<h1 className="form_heading">Our Smart Fit</h1>
	  						</div>
	  						<div className="row" style={{margin:'0px'}}>
	  							<div className="col-md-4 col-sm-4">
	  								<h2 className="input_form_Profile">Bust</h2>
	  								<RadioInput
	  									label="Small Bust"
	  									for="bust1"
										name="bust-checkbox"
										value="Small Bust"
										onChange={this.radioHandleChange}
									/>
	  								<RadioInput
		  								label="Large Bust"
		  								for="bust2"
										name="bust-checkbox"
										value="Large Bust"
										onChange={this.radioHandleChange}
									/>
	  								<RadioInput
	  									label="Average"
	  									for="bust3"
										name="bust-checkbox"
										value="Average"
										onChange={this.radioHandleChange}
									/>
								</div>
	  							<div className="col-md-4 col-sm-4">
	  								<h2 className="input_form_Profile">Hips</h2>
	  								<RadioInput
	  									label="Narrow Hips"
	  									for="hips1"
										name="hips-checkbox"
										value="Narrow Hips"
										onChange={this.radioHandleChange}
									/>
	  								<RadioInput
	  									label="Wide Hips"
	  									for="hips2"
										name="hips-checkbox"
										value="Wide Hips"
										onChange={this.radioHandleChange}
									/>
	  								<RadioInput
		  								label="Average"
		  								for="hips3"
	  									name="hips-checkbox"
	  									value="Average"
	  									onChange={this.radioHandleChange}
	  								/>
								</div>
	  							<div className="col-md-4 col-sm-4">
	  								<h2 className="input_form_Profile">Torso</h2>
	  								<RadioInput
		  								label="Short Torso"
		  								for="torso1"
	  									name="torso-checkbox"
	  									value="Short Torso"
	  									onChange={this.radioHandleChange}
	  								/>
	  								<RadioInput
		  								label="Large Torso"
		  								for="torso2"
	  									name="torso-checkbox"
	  									value="Large Torso"
	  									onChange={this.radioHandleChange}
	  								/>
	  								<RadioInput
		  								label="Average"
		  								for="torso3"
	  									name="torso-checkbox"
	  									value="Average"
	  									onChange={this.radioHandleChange}
	  								/>
	  							</div>
								<div className="col-md-4 col-sm-4">
	  								<h2 className="input_form_Profile">Ribcage</h2>
	  								<RadioInput
		  								label="Narrow Ribcage"
		  								for="ribcage1"
	  									name="ribcage-checkbox"
	  									value="Narrow Ribcage"
	  									onChange={this.radioHandleChange}
	  								/>
	  								<RadioInput
		  								label="Wide Ribcage"
		  								for="ribcage2"
	  									name="ribcage-checkbox"
	  									value="Wide Ribcage"
	  									onChange={this.radioHandleChange}
	  								/>
	  								<RadioInput
		  								label="Average"
		  								for="ribcage3"
	  									name="ribcage-checkbox"
	  									value="Average"
	  									onChange={this.radioHandleChange}
	  								/>
								</div>
								<div className="col-md-4 col-sm-4">
	  								<h2 className="input_form_Profile">Height</h2>
	  								<RadioInput
		  								label="Petite"
		  								for="height1"
	  									name="height-checkbox"
	  									value="Petite"
	  									onChange={this.radioHandleChange}
	  								/>
	  								<RadioInput
		  								label="Tall"
		  								for="height2"
	  									name="height-checkbox"
	  									value="Tall"
	  									onChange={this.radioHandleChange}
	  								/>
	  								<RadioInput
		  								label="Average"
		  								for="height3"
	  									name="height-checkbox"
	  									value="Average"
	  									onChange={this.radioHandleChange}
	  								/>
								</div>
								<div className="col-md-4 col-sm-4"></div>
							</div>
							<div className="row"  style={{margin:'0px'}}>
								<div className="col-lg-5 col-md-5 col-sm-4"></div>
								<div className="col-lg-3 col-md-3 col-sm-4">
									<input type="submit" name="" className="buttonsave" value="Save Changes" onClick={this.handleSubmit}/>
								</div>
								<div className="col-md-3 col-md-3 col-sm-4">
									<button className="btn buttoncancel" type="">Cancel</button>
								</div>
							</div>
							{this.state.loading && <div class="loading">Loading&#8230;</div>}
							<div className="row">
								<div className="col-md-2 col-sm-4"></div>
								<div className="col-md-8 col-sm-4">{this.state.showMsg}</div>
								<div className="col-md-2 col-sm-4"></div>
							</div><br/>
						</Form>
					</div>
					<div className="col-xs-12 col-sm-1 col-md-2 col-lg-2"></div>
				</div>
      		</div>
      	</div>
    );
  }
}

const WrappedNormalProfileForm = Form.create()(Profile);

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedProfilePage = connect(mapStateToProps)(WrappedNormalProfileForm);
export default connectedProfilePage;
