import React, { Component } from 'react';
import {
  Form,Icon, Input, Select, Button, AutoComplete,
} from 'antd';
import { userActions } from '../../_actions';
import { HttpUtils } from "../../Service/HttpUtils";
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
          err: '',
          loader: false,
          forgotPassword:false,
          errMessage:'',
          emailSent:false

        }
        // reset login status
        this.props.dispatch(userActions.logout());
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loader: true })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              this.props.dispatch(userActions.login(values, 'signin', (token) => {
                  if(typeof(token) == 'string'){
                      this.setState({ err: token, loader: false })
                      setTimeout(() => {
                          this.setState({ err: '', loader: false })
                      }, 4000)
                  }else {
                      localStorage.setItem('user', JSON.stringify(token));
                  }
              }));
            }
        });
    }

    handleEmail = e => {
        this.setState({ loader: true })
        const { setEmail, name, userId } = this.state,
        obj = {
            userId, name,
            email: setEmail
        }
        this.props.dispatch(userActions.login(obj, 'socialauth', (token) => {
            if(typeof(token) == 'string'){
                this.setState({ err: token, loader: false })
                setTimeout(() => {
                    this.setState({ err: '', loader: false })
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

    handleforgotpassword = (e) => {
        e.preventDefault();
        this.setState({
           loader:true
        })

        this.props.form.validateFieldsAndScroll( async (err, values) => {
            if(!err){
                let obj = {
                    email:values.email
                }
                let res = await HttpUtils.post('forgotpassword',obj);
                if(res.code == 403){
                    this.setState({
                        loader:false,
                        errMessage:res.message
                    });
                    setTimeout(() => {
                        this.setState({
                            loader:false,
                            errMessage:''
                        });
                    }, 3000);
                }//end if code 403
                else if(res.code == 200){
                  this.setState({
                      loader:false,
                      emailSent:true,
                      errMessage:res.message
                  });
                }
            }
        });
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
                    });
                }else {
                    this.setState({
                        name: response.name,
                        userId: response.userID,
                        setEmail: response.email
                    }, () => {
                        this.handleEmail()
                    });
                }
            }
        }
    }

    forgotpassword = () => {
        this.setState({
            forgotPassword:true
        })
    }

    backSignIn = () => {
        this.setState({
            forgotPassword:false
        })
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
    const { showEmailButton,forgotPassword,errMessage,emailSent } = this.state,
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
      					<h3 style={{color: '#ffffff',textAlign: 'center'}}>{!showEmailButton || forgotPassword ? 'Email' : 'Sign In'}</h3>
      				</div>
      				<div className="col-md-4 col-sm-4 col-xs-2"></div>
      			</div>


				{!showEmailButton && <div className="row">
					<div className="col-md-2 col-sm-3 col-xs-2"></div>
					<div className="col-md-8 col-sm-6 col-xs-8 get_form_inner">
		    			{!forgotPassword && <Form onSubmit={this.handleSubmit}>
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
                    <span onClick={this.forgotpassword}><a style={{color:'white'}}>Forgot Password</a></span>
		                </div>
                    {!showEmailButton && <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-3"></div>
                      {!forgotPassword && <div className="col-md-4 col-sm-4 col-xs-6" style={{textAlign: 'center'}}>
                        <button type="submit" className="login" onClick={this.handleSubmit}>Login</button>
                      </div>}
                      <div className="col-md-4 col-sm-4 col-xs-3"></div>
                    </div>}

		                </Form>}
                    {forgotPassword && <Form onSubmit={this.handleforgotpassword}>
                        <div>
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

                          {forgotPassword && <div>
                            <h5 onClick={this.backSignIn}>Back to Sign In</h5>
                          </div>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12" style={{textAlign:'center'}}>
                              <button className="btn btn-sm" style={{color:'black',backgroundColor:'white'}}>Send Email</button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <span style={{textAlign:'center',fontWeight:'bold'}}>{errMessage}</span>
                          </div>
                        </div>
                    </Form>}

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
            {!forgotPassword && <FacebookLogin
                appId="644559659253564"
                autoLoad={true}
                cssClass="loginBtn loginBtn--facebook"
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />}

						{/*<button class="loginBtn loginBtn--google">
						  Login with Google
						</button>*/}
            {!forgotPassword && <GoogleLogin
                socialId="873832275515-3oclgfb5n1ie7inhfa16a6uu7crbab2a.apps.googleusercontent.com"
                scope="profile"
                fetchBasicProfile={true}
                responseHandler={this.responseGoogle}
                className = "loginBtn loginBtn--google"
                buttonText="Login With Google"
            />}
					</div>
					<div className="col-md-2 col-sm-2 col-xs-1"></div>
				</div>}

				{!showEmailButton && <div className="row">
					<div className="col-md-3"></div>
					{!forgotPassword && <div className="col-md-6">
						<h3 style={{color: '#ffffff', textAlign: 'center'}}>Create an Account</h3>
					</div>}

					<div className="col-md-3"></div>
				</div>}
        {this.state.loader && <div class="loading">Loading&#8230;</div>}
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
