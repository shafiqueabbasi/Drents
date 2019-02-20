import React, { Component } from 'react';
import {
  Form,Icon, Input, Select, Button, AutoComplete,
} from 'antd';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login-component';
// import $ from 'jquery';
import './SignIn.css'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicked: false,
          setEmail: '',
          showEmailButton: false,
          name: '',
          userId: '',
          err: ''          
        }
        // reset login status
        this.props.dispatch(userActions.logout());
    }

  handleSubmit = (e) => {
     e.preventDefault();
     this.props.form.validateFieldsAndScroll((err, values) => {
       if (!err) {
         this.props.dispatch(userActions.login(values, (token) => {
          console.log(token, 'tokennnnnnnn')
          if(typeof(token) == 'string'){
            this.setState({ err: token })
            setTimeout(() => {
              this.setState({ err: '' })
            }, 4000)
          }else {
            localStorage.setItem('user', JSON.stringify(token));
          }
        }));
       }
     });
   }

   handleEmail = e => {
      const { setEmail, name, userId } = this.state,
      obj = {
        userId, name,
        email: setEmail 
      }
      this.props.dispatch(userActions.login(obj, (token) => {
        if(typeof(token) == 'string'){
          this.setState({ err: token })
          setTimeout(() => {
            this.setState({ err: '' })
          }, 4000)
        }else {
          localStorage.setItem('user', JSON.stringify(token));
        }
      }));
   }

   handleConfirmBlur = (e) => {
     const value = e.target.value;
     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
   }

   responseFacebook = response =>{
      const { clicked } = this.state;
      if(clicked){
        if(response && response.id && response.id.length){
          if(!response.email || response.email == undefined){
            this.setState({ 
              showEmailButton: true, 
              name: response.name, 
              userId: response.userID 
            })
          }else {
              this.setState({
                name: response.name,
                userId: response.userID,
                setEmail: response.email
              })
          }
        }
      }
   }

   componentClicked = () =>{
    this.setState({ clicked: true })
   }

    responseGoogle = (googleUser) =>{
        let id_token = googleUser.getAuthResponse(),
        googleId = googleUser.getId();

        this.setState({
            userId: googleUser.w3.Eea,
            name: googleUser.w3.ig,
            setEmail: googleUser.w3.U3
        }, () => {
          this.handleEmail()
        })
    }

    pickEmail = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

  render() {
    const { showEmailButton } = this.state,
    { getFieldDecorator } = this.props.form;
    return (
      	<div style={{backgroundColor: '#c2073f'}}>
      		<div className="container-fluid">
      			<div className="row">
      				<div className="col-md-2 col-sm-4 col-xs-3"></div>
      				<div className="col-md-8 col-sm-4 col-xs-6" style={{textAlign:'center'}}>
      					<a href="#"><img src="./images/Drent-logo-white.png" style={{width: '47%'}}/></a>
      				</div>
      				<div className="col-md-2 col-sm-4 col-xs-3"></div>
      			</div>
      			<div className="row">
      				<div className="col-md-4 col-sm-4 col-xs-2"></div>
      				<div className="col-md-4 col-sm-4 col-xs-8">
      					<h3 style={{color: '#ffffff',textAlign: 'center'}}>{!showEmailButton ? 'Sign In' : 'Email'}</h3>
      				</div>
      				<div className="col-md-4 col-sm-4 col-xs-2"></div>
      			</div>


				{!showEmailButton && <div className="row">
					<div className="col-md-2 col-sm-3 col-xs-2"></div>
					<div className="col-md-8 col-sm-6 col-xs-8 get_form_inner">
		    			<Form onSubmit={this.handleSubmit}>
                			<div className="group">
                          <Form.Item>
                               {getFieldDecorator('email', {
                                 rules: [{
                                   type: 'email', message: 'The input is not valid E-mail!',
                                 }, {
                                   required: true, message: 'Please input your E-mail!',
                                 }],
                               })(
                                 <Input placeholder="Email" />
                               )}
                          </Form.Item>
		                  <span className="highlight"></span>
		                  </div>

							       <div className="group">
                         <Form.Item>
                             {getFieldDecorator('password', {
                               rules: [{
                                 required: true, message: 'Please input your password!',
                               }, {
                                 validator: this.validateToNextPassword,
                               }],
                             })(
                               <Input type="password" placeholder="Password" />
                             )}
                         </Form.Item>
		                <span className="highlight"></span>
		                </div>
		                </Form>
					</div>
					<div className="col-md-2 col-sm-3 col-xs-2"></div>
				</div>}

        {showEmailButton && <div className="row">
          <div className="col-md-2 col-sm-3 col-xs-2"></div>
          <div className="col-md-8 col-sm-6 col-xs-8 get_form_inner">
              <Form onSubmit={this.handleEmail}>
                  <div className="group">
                      {/*<Form.Item>
                           {getFieldDecorator('email', {
                             rules: [{
                               type: 'email', message: 'The input is not valid E-mail!',
                             }, {
                               required: true, message: 'Please input your E-mail!',
                             }],
                           })(
                             <Input placeholder="Email" />
                           )}
                      </Form.Item>*/}
                      <input type="email" id="setEmail" placeholder="Email" value={this.state.setEmail} onChange={this.pickEmail}/>
                      <span className="highlight"></span>
                  </div>
              </Form>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-2"></div>
        </div>}

        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3"></div>
          <div className="col-md-6 col-sm-6 col-xs-6" style={{textAlign: 'center'}}>
            {this.state.err}
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3"></div>
        </div>

				{!showEmailButton && <div className="row">
					<div className="col-md-4 col-sm-4 col-xs-3"></div>
					<div className="col-md-4 col-sm-4 col-xs-6" style={{textAlign: 'center'}}>
						<button type="submit" className="login" onClick={this.handleSubmit}>Login</button>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-3"></div>
				</div>}

        {showEmailButton && <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3"></div>
          <div className="col-md-6 col-sm-6 col-xs-6" style={{textAlign: 'center'}}>
            We need your Email for further login
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3"></div>
        </div>}

        {showEmailButton && <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3"></div>
          <div className="col-md-6 col-sm-6 col-xs-6" style={{textAlign: 'center'}}>
            <button type="submit" className="login" onClick={this.handleEmail}>Confirm Email</button>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3"></div>
        </div>}<br/><br/><br/>

				{!showEmailButton && <div className="row">
					<div className="col-md-2 col-sm-2 col-xs-1"></div>
					<div className="col-md-8 col-sm-8 col-xs-10" style={{textAlign: 'center'}}>
						{/*<button className="loginBtn loginBtn--facebook">
  							Login with Facebook
						</button>*/}
            <FacebookLogin 
                appId="644559659253564"
                autoLoad={true}
                cssClass="loginBtn loginBtn--facebook"
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />

						{/*<button class="loginBtn loginBtn--google">
						  Login with Google
						</button>*/}
            <GoogleLogin 
                socialId="873832275515-3oclgfb5n1ie7inhfa16a6uu7crbab2a.apps.googleusercontent.com"                            
                scope="profile"
                fetchBasicProfile={true}
                responseHandler={this.responseGoogle}
                className = "loginBtn loginBtn--google"
                buttonText="Login With Google"
            />
					</div>
					<div className="col-md-2 col-sm-2 col-xs-1"></div>
				</div>}

				{!showEmailButton && <div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<h3 style={{color: '#ffffff', textAlign: 'center'}}>Create an Account</h3>
					</div>
					<div className="col-md-3"></div>
				</div>}
			</div>
      <div className="modal fade" id="emailFor" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title" style={{textAlign:'center'}}>Sign In</h4>
            </div>
            <div className="modal-body">
              <div>
                <input type="email" id="setEmail" value={this.state.setEmail} onChange={this.pickEmail}/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      	</div>
    );

  }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const WrappedNormalSignInForm = Form.create()(SignIn);
const connectedLoginPage = connect(mapStateToProps)(WrappedNormalSignInForm);
export default connectedLoginPage;
