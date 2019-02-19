import React, { Component } from 'react';
import {
  Form,Icon, Input, Select, Button, AutoComplete,
} from 'antd';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';

const AutoCompleteOption = AutoComplete.Option;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                  this.props.dispatch(userActions.register(values, (token) => {
                    console.log(token,'ressssssppppponnsss')
                  localStorage.setItem('user', JSON.stringify(token));
                }));

            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

  render() {
    console.log(this.props, 'propsssssssss')
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
      					<h3 style={{color: '#ffffff',textAlign: 'center'}}>Sign Up</h3>
      				</div>
      				<div className="col-md-4 col-sm-4 col-xs-2"></div>
      			</div>


				<div className="row">
					<div className="col-md-2 col-sm-3 col-xs-2"></div>
					<div className="col-md-8 col-sm-6 col-xs-8 get_form_inner">
		    			<Form onSubmit={this.handleSubmit}>
                			<div className="group">
                          <Form.Item>
                              {getFieldDecorator('firstname', {
                                rules: [{ required: true, message: 'Please input your FirstName!', whitespace: true }],
                              })(
                                <Input placeholder="FirstName" />
                              )}
                            </Form.Item>
                          <span className="highlight"></span>
                      </div>
                      <div className="group" style={{padding:'none'}}>
                            <Form.Item>
                                  {getFieldDecorator('lastname', {
                                    rules: [{ required: true, message: 'Please input your LastName!', whitespace: true }],
                                  })(
                                    <Input placeholder="LastName" />
                                  )}
                            </Form.Item>
                            <span class="highlight"></span>
                      </div>
                      <div class="group">
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
                            {getFieldDecorator('phone', {
                              rules: [{ required: true, message: 'Please input your phone number!' }],
                            })(
                              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                          </Form.Item>
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

							        <div className="group">
                        <Form.Item>
                            {getFieldDecorator('confirm', {
                              rules: [{
                                required: true, message: 'Please confirm your password!',
                              }, {
                                validator: this.compareToFirstPassword,
                              }],
                            })(
                              <Input type="password" placeholder="confrim password" onBlur={this.handleConfirmBlur} />
                            )}
                      </Form.Item>
                      <span class="highlight"></span>
                      </div>
		           </Form>
					</div>
					<div className="col-md-2 col-sm-3 col-xs-2"></div>
				</div>

				<div className="row">
					<div className="col-md-3 col-sm-4 col-xs-3"></div>
					<div className="col-md-6 col-sm-4 col-xs-6" style={{textAlign: 'center'}}>
						<button type="submit" className="login" onClick={this.handleSubmit}>Next</button>
					</div>
					<div className="col-md-3 col-sm-4 col-xs-3"></div>
				</div><br/><br/><br/>


			</div>
      	</div>
    );

  }
}

const WrappedNormalSignupForm = Form.create()(SignUp);
// export default WrappedNormalSignupForm;

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(WrappedNormalSignupForm);
export default connectedRegisterPage;
