import React, { Component } from 'react';
import {
  Form,Icon, Input, Select, Button, AutoComplete,
} from 'antd';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import './SignIn.css'

class SignIn extends Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout(() => {
        //   this.setState({ })
        // }));
    }

  handleSubmit = (e) => {
     e.preventDefault();
     this.props.form.validateFieldsAndScroll((err, values) => {
       if (!err) {
         console.log('Received values of form: ', values);
         this.props.dispatch(userActions.login(values, (token) => {
          localStorage.setItem('user', JSON.stringify(token));
        }));
       }
     });
   }

   handleConfirmBlur = (e) => {
     const value = e.target.value;
     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
   }


  render() {
    const { getFieldDecorator } = this.props.form;
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
      					<h3 style={{color: '#ffffff',textAlign: 'center'}}>Sign In</h3>
      				</div>
      				<div className="col-md-4 col-sm-4 col-xs-2"></div>
      			</div>


				<div className="row">
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
				</div>

				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-3"></div>
					<div className="col-md-4 col-sm-4 col-xs-6" style={{textAlign: 'center'}}>
						<button type="submit" className="login" onClick={this.handleSubmit}>Login</button>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-3"></div>
				</div><br/><br/><br/>

				<div className="row">
					<div className="col-md-2 col-sm-2 col-xs-1"></div>
					<div className="col-md-8 col-sm-8 col-xs-10" style={{textAlign: 'center'}}>
						<button className="loginBtn loginBtn--facebook">
  							Login with Facebook
						</button>

						<button class="loginBtn loginBtn--google">
						  Login with Google
						</button>
					</div>
					<div className="col-md-2 col-sm-2 col-xs-1"></div>
				</div>

				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<h3 style={{color: '#ffffff', textAlign: 'center'}}>Create an Account</h3>
					</div>
					<div className="col-md-3"></div>
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
