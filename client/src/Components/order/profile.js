import React, { Component } from 'react';
import { Form, Input, Button, AutoComplete, Modal, Radio } from 'antd';
import ChangePassword from './changePassword';
import { TextInput, RadioInput, SelectInput } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';
import { connect } from 'react-redux';
import './profile.css';

const AutoCompleteOption = AutoComplete.Option;

class Profile extends Component {
	state = {
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
		loading: false,
		showMsg: ''
	};

	componentDidMount(){
		const { _id, email } = this.props.user;
		const { profile } = this.props.location.state;
		console.log(profile, 'profileeeeeeeeeee')
	      for(var el in profile[0]){
	          this.setState({ [el]: profile[0][el] })
	      }
		this.setState({ userId: _id })
	}

	inputHandleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
	}

	radioHandleChange = (e) => {
		console.log(e.target, 'targettttttttttt')
		this.setState({ [e.target.id]: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const {email, firstName, lastName, inputHeight, weight, bustSize, height, bodyType,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId, _id} = this.state;
		let obj = {
			email, firstName, lastName, inputHeight, weight, bustSize, height, bodyType,
			ocassionAttendMost, typicalJeanSize, bust, hips, torso, ribcage, userId, 
			profileId: _id
		}	
		this.submit(obj)
	}

	async submit(obj){
		let res = await HttpUtils.post('uploadprofile', obj, this.props.user.token);
		console.log(res, 'resssssssssss')
		if(res && res.code && res.code == 200){
			this.setState({ loading : false, showMsg : res.msg })
		}
		setTimeout(() => {
			this.setState({ showMsg: '' })
		}, 3000)
	}

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      	<div>
      		<div className="container-fluid">
      			<div className="col-md-12">
      				<div className="row">
      					<h1 style={{fontFamily:'Qwigley',fontSize:'200%'}}>Profile</h1>
      				</div>
  					<Form onSubmit={this.handleSubmit}>
						<div className="row">
							<TextInput 
								label="Email" 
								id="email" 
								className="input"
								col="col-md-2 col-sm-2"
								col2="col-md-4 col-sm-4"
								value={this.state.email} 
								Change={this.inputHandleChange}
							/>							
							<div className="col-md-2 col-sm-2"><span className="input"><h3>Change Password</h3></span></div>
							<div className="col-md-4 col-sm-4">
								<div className="inputBox">
									<div className="inputText"></div>
								    <ChangePassword user={this.props.user.email}/>
								</div>
							</div>							
							<TextInput 
								label="First Name" 
								id="firstName" 
								value={this.state.firstName} 
								className="input"
								col="col-md-2 col-sm-2"
								col2="col-md-4 col-sm-4"
								Change={this.inputHandleChange}
							/>
							<TextInput 
								label="Last Name" 
								id="lastName" 
								value={this.state.lastName} 
								className="input"
								col="col-md-2 col-sm-2"
								col2="col-md-4 col-sm-4"
								Change={this.inputHandleChange}
							/>							
						</div>							
						<div className="row">
  							<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Fil Details</h1>
  						</div>
  						<div className="row">
	  						<div className="col-md-6">
	  							<TextInput 
									label="Height" 
									id="inputHeight" 
									value={this.state.inputHeight} 
									className="input"
									col="col-md-4 col-sm-2"
									col2="col-md-8 col-sm-4"
									Change={this.inputHandleChange}
								/>
							</div>
							<div className="col-md-6">
								<TextInput 
									label="Weight" 
									id="weight" 
									value={this.state.weight} 
									className="input"
									col="col-md-4 col-sm-2"
									col2="col-md-8 col-sm-4"
									Change={this.inputHandleChange}
								/>	
							</div>
						</div>{/*row closed*/}
						<div className="row">
							<div className="col-md-6">					    
								<TextInput 
									label="Bust Size" 
									id="bustSize" 
									value={this.state.bustSize} 
									col="col-md-4 col-sm-2"
									col2="col-md-8 col-sm-4"
									className="input"
									Change={this.inputHandleChange}
								/>
							</div>
							<div className="col-md-6">		
								<SelectInput 
									label="Body Type" 
									id="bodyType" 
									value={this.state.bodyType} 
									className="input"
									col="col-md-4 col-sm-2"
									col2="col-md-8 col-sm-4"
									options={[1,2,3,4,5]}
									Change={this.inputHandleChange}

								/>
							</div>	
						</div>{/*row closed*/}
						<div className="row">
							<div className="col-md-6">	
								<SelectInput 
									label="Occasion Atend Most" 
									id="ocassionAttendMost" 
									value={this.state.ocassionAttendMost} 
									className="input"
									col="col-md-4 col-sm-2"
									col2="col-md-8 col-sm-4"
									options={[1,2,3,4,5]}
									Change={this.inputHandleChange}
								/>
							</div>
							<div className="col-md-6">		
								<SelectInput 
									label="Typical Jean Size" 
									id="typicalJeanSize" 
									value={this.state.typicalJeanSize} 
									className="input"
									col="col-md-4 col-sm-2"
									col2="col-md-8 col-sm-4"
									options={[1,2,3,4,5]}
									Change={this.inputHandleChange}
								/>
							</div>		
						</div>{/*row closed*/}           						
						<div className="row">
  							<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Our All fit</h1>
  						</div>
  						<div className="row">
  							<div className="col-md-4 col-sm-4">      								
  								<h2>Bust</h2>
  								<RadioInput 
  									label="Small Bust" 
  									for="bust" 
									name="bust-checkbox"
									value="Small Bust"
									onChange={this.radioHandleChange}
								/>
  								<RadioInput 
	  								label="Large Bust" 
	  								for="bust" 
									name="bust-checkbox"
									value="Large Bust"
									onChange={this.radioHandleChange}
								/>
  								<RadioInput 
  									label="Average" 
  									for="bust" 
									name="bust-checkbox"
									value="Average"
									onChange={this.radioHandleChange}
								/>      								
							</div>
  							<div className="col-md-4 col-sm-4">
  								<h2>Hips</h2>
  								<RadioInput 
  									label="Narrow Hips" 
  									for="hips" 
									name="hips-checkbox"
									value="Narrow Hips"
									onChange={this.radioHandleChange}
								/>
  								<RadioInput 
  									label="Wide Hips" 
  									for="hips" 
									name="hips-checkbox"
									value="Wide Hips"
									onChange={this.radioHandleChange}
								/>
  								<RadioInput 
	  								label="Average" 
	  								for="hips" 
  									name="hips-checkbox"
  									value="Average"
  									onChange={this.radioHandleChange}
  								/>       								
							</div>
  							<div className="col-md-4 col-sm-4">
  								<h2>Torso</h2>
  								<RadioInput 
	  								label="Short Torso" 
	  								for="torso" 
  									name="torso-checkbox"
  									value="Short Torso"
  									onChange={this.radioHandleChange}
  								/>
  								<RadioInput 
	  								label="Large Torso" 
	  								for="torso" 
  									name="torso-checkbox"
  									value="Large Torso"
  									onChange={this.radioHandleChange}
  								/>
  								<RadioInput 
	  								label="Average" 
	  								for="torso" 
  									name="torso-checkbox"
  									value="Average"
  									onChange={this.radioHandleChange}
  								/>     								
  							</div>							
							<div className="col-md-4 col-sm-4">
  								<h2>Ribcage</h2>
  								<RadioInput 
	  								label="Narrow Ribcage" 
	  								for="ribcage" 
  									name="ribcage-checkbox"
  									value="Narrow Ribcage"
  									onChange={this.radioHandleChange}
  								/>
  								<RadioInput 
	  								label="Wide Ribcage" 
	  								for="ribcage" 
  									name="ribcage-checkbox"
  									value="Wide Ribcage"
  									onChange={this.radioHandleChange}
  								/>
  								<RadioInput 
	  								label="Average" 
	  								for="ribcage" 
  									name="ribcage-checkbox"
  									value="Average"
  									onChange={this.radioHandleChange}
  								/>      								
							</div>
							<div className="col-md-4 col-sm-4">
  								<h2>Height</h2>
  								<RadioInput 
	  								label="Petite" 
	  								for="height" 
  									name="height-checkbox"
  									value="Petite"
  									onChange={this.radioHandleChange}
  								/>
  								<RadioInput 
	  								label="Tall" 
	  								for="height" 
  									name="height-checkbox"
  									value="Tall"
  									onChange={this.radioHandleChange}
  								/>
  								<RadioInput 
	  								label="Average" 
	  								for="height" 
  									name="height-checkbox"
  									value="Average"
  									onChange={this.radioHandleChange}
  								/>      								
							</div>
							<div className="col-md-4 col-sm-4"></div>
						</div>
						<div className="row">
							<div className="col-md-9 col-sm-8"></div>
							<div className="col-md-3 col-sm-4">
								<input type="submit" name="" className="button" value="Save Changes" onClick={this.handleSubmit}/>
							</div>
						</div>
						{this.state.loading && <div class="loading">Loading&#8230;</div>}
						<div className="row">
							<div className="col-md-4 col-sm-4"></div>
							<div className="col-md-4 col-sm-4">{this.state.showMsg}</div>
							<div className="col-md-4 col-sm-4"></div>
						</div>
					</Form>
				</div>
      		</div>
      	</div>
    );
  }
}

const WrappedNormalProfileForm = Form.create()(Profile);

function mapStateToProps(state) {
	// console.log(state, 'stateeeeeee')
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedProfilePage = connect(mapStateToProps)(WrappedNormalProfileForm);
export default connectedProfilePage;
