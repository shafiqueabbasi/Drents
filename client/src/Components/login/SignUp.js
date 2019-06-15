import React, { Component } from 'react';
import {
  Form,Icon, Input, Select, Button, AutoComplete,
} from 'antd';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import './SignIn.css';

const AutoCompleteOption = AutoComplete.Option;
const { Option } = Select;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                  this.props.dispatch(userActions.register(values, (token) => {
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
        const { getFieldDecorator } = this.props.form;

        return (
    	      <div style={{backgroundColor: '#ffffff'}}>
          		  <div className="container-fluid">
              			<div className="row">
                				<div className="col-md-2 col-sm-4 col-xs-3"></div>
                				<div className="col-md-2 col-sm-4 col-xs-3"></div>
              			</div>
            				<div className="row">
                  					<div className="col-lg-12 col-md-12 col-sm-6 col-xs-8 get_form_inner">
                  		    			<Form onSubmit={this.handleSubmit}>
                              			<div className="group">
                                        <p className="formtextup">First Name</p>
                                        <Form.Item>
                                            {getFieldDecorator('firstname', {
                                              rules: [{ required: true, message: 'Please input your FirstName!', whitespace: true }],
                                            })(
                                                <Input placeholder=""/>
                                            )}
                                        </Form.Item>
                                        <span className="highlight"></span>
                                    </div>
                                    <div className="group" style={{padding:'none'}}>
                                        <p className="formtextup">LastName</p>
                                        <Form.Item>
                                            {getFieldDecorator('lastname', {
                                              rules: [{ required: true, message: 'Please input your LastName!', whitespace: true }],
                                            })(
                                                <Input placeholder=""/>
                                            )}
                                        </Form.Item>
                                        <span className="highlight"></span>
                                    </div>
                                    <div className="group">
                                        <p className="formtextup">Email</p>
                                        <Form.Item>
                                             {getFieldDecorator('email', {
                                               rules: [{
                                                 type: 'email', message: 'The input is not valid E-mail!',
                                               }, {
                                                 required: true, message: 'Please input your E-mail!',
                                               }],
                                             })(
                                                  <Input placeholder="" />
                                             )}
                                        </Form.Item>
                                        <span className="highlight"></span>
                                    </div>                            
                                    <div className="group">
                                        <p className="formtextup">Password</p>
                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                              rules: [{
                                                required: true, message: 'Please input your password!',
                                              }, {
                                                validator: this.validateToNextPassword,
                                              }],
                                            })(
                                                <Input type="password" placeholder="" />
                                            )}
                                        </Form.Item>
                                    <span className="highlight"></span>
                                    </div>
              							        <div className="group">
                                        <p className="formtextup">Retype Password</p>
                                        <Form.Item>
                                            {getFieldDecorator('confirm', {
                                              rules: [{
                                                required: true, message: 'Please confirm your password!',
                                              }, {
                                                validator: this.compareToFirstPassword,
                                              }],
                                            })(
                                                <Input type="password" placeholder="" onBlur={this.handleConfirmBlur} />
                                            )}
                                        </Form.Item>
                                        <span className="highlight"></span>
                                    </div>
                                    <div className="row">
                                        
                                        <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign: 'center'}}>
                                            <button type="submit" className="login" onClick={this.handleSubmit}>Sign up</button>
                                        </div>
                                        
                                    </div><br/>
                  		          </Form>
                  					</div>
            				</div>
                    <div className="container">
                        <div className="btnalignup">
                          <p className="alacountup">I already have an account</p>  
                        </div>
                    </div>
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
