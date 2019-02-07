import React, { Component } from 'react';
import {
  Form, Input, Tooltip,Button,
} from 'antd';
import './uploadDress.css';

class ChangePassword extends Component {
  state = {
    confirmDirty: false,
    //autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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

    render(){
      const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
      const { getFieldDecorator } = this.props.form;
      return(
        <div>
        {/*<!-- Trigger the modal with a button -->*/}
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{marginTop:'28px',fontFamily:'none'}}>Change Password</button>

            {/*<!-- Modal -->*/}
            <div id="myModal" className="modal fade" role="dialog" style={{marginTop:'5%'}}>
            <div className="modal-dialog">

            {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" style={{color:'white'}}>&times;</button>
                  <h4 className="modal-title" style={{color:'white',textAlign:'center'}}>Change Password</h4>
                </div>
                <div className="modal-body">
                  <Form onSubmit={this.handleSubmit}>
                  <div className="row" style={{margin:'0px'}}>
                    <div className="col-md-5 col-sm-5 col-12"><label>Current Password</label></div>
                      <div className="col-md-4 col-sm-4 col-12">
                        <Form.Item>
                            {getFieldDecorator('currentpassword', {
                              rules: [{
                                required: true, message: 'Please input your current password!',
                              }, {
                                validator: this.validateToNextPassword,
                              }],
                            })(
                              <Input type="password" onBlur={() => console.log('hello brotherrrrrrrr')}/>
                            )}
                        </Form.Item>
                      </div>
                      <div className="col-md-3 col-sm-3 col-12"></div>
                  </div>
                  <div className="row" style={{margin:'0px'}}>
                    <div className="col-md-5 col-sm-5 col-12"><label>New Password</label></div>
                      <div className="col-md-4 col-sm-4 col-12">
                          <Form.Item>
                              {getFieldDecorator('password', {
                                rules: [{
                                  required: true, message: 'Please input your password!',
                                }, {
                                  validator: this.validateToNextPassword,
                                }],
                              })(
                                <Input type="password" />
                              )}
                          </Form.Item>
                      </div>
                      <div className="col-md-3 col-sm-3 col-12"></div>
                  </div>
                  <div className="row" style={{margin:'0px'}}>
                  <div className="col-md-5 col-sm-5 col-12"><label>Confrim Password</label></div>
                  <div className="col-md-4 col-sm-4 col-12">
                  <Form.Item>
                    {getFieldDecorator('confirm', {
                      rules: [{
                        required: true, message: 'Please confirm your password!',
                      }, {
                        validator: this.compareToFirstPassword,
                      }],
                    })(
                      <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                  </Form.Item>
                  </div>
                  </div>
                  </Form>
                </div>

              </div>

            </div>
            </div>
        </div>
      )
    }
}
const WrappedNormalchangepasswordForm = Form.create()(ChangePassword);
export default WrappedNormalchangepasswordForm;
