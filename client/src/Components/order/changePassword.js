import React, { Component } from 'react';
import {
  Form, Input, Tooltip,Button, Icon
} from 'antd';
import { HttpUtils } from  '../../Service/HttpUtils';
import './uploadDress.css';

class ChangePassword extends Component {
    state = {
        confirmDirty: false,
        msg: '',
        correct: false,
        loader: false,
        showMsg: false
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newPassword')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    comparePasword = async(e) => {
        if(!this.state.loader){
            let obj = {
                email: this.props.user,
                password: e.target.value
            },
            res = await HttpUtils.post('comparepassword', obj);
            if(!res.Match){
                this.setState({msg: res.msg, correct: false});
            }else {
              this.setState({msg: '', correct: true});
            }
        }
    }

    changePassword = async(e) => {     
        this.setState({loader: true})
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {                
                this.changePasswordApi(values);
            }
        });
    }

    changePasswordApi = async(values) => {
        let obj = {
            currentPassword: values.currentPassword,
            newPassword: values.newPassword,
            email: this.props.user
        },
        res = await HttpUtils.post('changePassword', obj)
        if(res && res.code === 200){
            this.setState({ showMsg : true})                        
            setTimeout(() => {
              document.getElementById("changePassword").click();
              this.props.form.resetFields();
              this.setState({ loader: false, correct: false, showMsg: false })
            }, 4000)
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
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#changePassword" style={{marginTop:'28px',fontFamily:'none'}}>Change Password</button>

            {/*<!-- Modal -->*/}
            <div id="changePassword" className="modal fade" role="dialog" style={{marginTop:'5%'}}>
            <div className="modal-dialog">

            {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" style={{color:'white'}}>&times;</button>
                  <h4 className="modal-title" style={{color:'white',textAlign:'center'}}>Change Password</h4>
                </div>
                <div className="modal-body">
                  <Form onSubmit={this.comparePasword}>
                  <div className="row" style={{margin:'0px'}}>
                      <div className="col-md-5 col-sm-5 col-12">
                          <label style={{color: 'white'}}>
                              Current Password
                          </label>
                      </div>
                      <div className="col-md-4 col-sm-4 col-12">
                        <Form.Item>
                            {getFieldDecorator('currentPassword', {
                              rules: [{
                                required: true, message: 'Please input your current password!',
                              }, {
                                validator: this.validateToNextPassword,
                              }],
                            })(
                              <Input type="password" onBlur={(e) => this.comparePasword(e)}/>
                            )}
                        </Form.Item>
                        {!!this.state.msg && <span>{this.state.msg}</span>}
                      </div>
                      <div className="col-md-3 col-sm-3 col-12">
                        {this.state.correct && <Icon 
                            type="check-circle" theme="twoTone" 
                            twoToneColor="#52c41a" style={{float: 'right'}}/>}
                      </div>
                  </div>
                  <div className="row" style={{margin:'0px'}}>
                    <div className="col-md-5 col-sm-5 col-12">
                      <label style={{color: 'white'}}>
                        New Password
                      </label>
                    </div>
                      <div className="col-md-4 col-sm-4 col-12">
                          <Form.Item>
                              {getFieldDecorator('newPassword', {
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
                  <div className="col-md-5 col-sm-5 col-12">
                    <label style={{color: 'white'}}>
                      Confrim Password
                    </label>
                  </div>
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
                  <div className="row">
                      <div className="col-md-7 col-sm-8"></div>
                      <div className="col-md-5 col-sm-4">
                          <input 
                              type="submit" 
                              name="" 
                              className="button"
                              style={{backgroundColor: 'black', color: 'white', borderRadius: '50px', marginTop: '20px'}} 
                              value="Change Password" 
                              onClick={this.changePassword}
                          />
                      </div>
                  </div>
                  {this.state.showMsg && <div className="row" style={{textAlign: 'center', marginTop: '10px'}}>
                      Your password has been changed!!!
                  </div>}
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
