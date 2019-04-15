import React, { Component } from 'react';
import { Form, Input } from 'antd';
import './profile.css'

const { TextArea } = Input;

class Report extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	handleSubmit(e){
		e.preventDefault();
		const { data, ind } = this.props;
		this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                this.resetAll();
            }
        });
	}

	resetAll(){
		const { resetFields } = this.props.form;
		resetFields();
		document.getElementById(`${this.props.screen}${this.props.ind}`).click();
	}

	updateProps = (rule, value, callback) => {
		this.props.onClick();
		callback();
	}

	render(){
		const { getFieldDecorator } = this.props.form;

		return(
			<div>
				<h4 data-toggle="modal" data-target={`#${this.props.screen}${this.props.ind}`}>Report</h4>
				<div className="modal fade" id={`${this.props.screen}${this.props.ind}`} role="dialog">
	                <div className="modal-dialog">
	                    <div className="modal-content">
		                    <div className="modal-header">
			                    <button
			                    	type="button"
			                    	className="close"
			                    	onClick={(e) => this.resetAll()}
		                    	>
		                    		&times;
	                    		</button>
			                    <h4
			                    	className="modal-title"
			                    	style={{textAlign:'center', color: 'white'}}
		                    	>
			                    	Report this dress
		                    	</h4>
		                    </div>
		                    <div className="modal-body" style={{textAlign:'center', color: 'white'}}>
		                    	<Form onSubmit={(e) => this.handleSubmit(e)}>
			                    	<div className="row">
			                    		<div className="col-md-2 col-sm-3 col-xs-1"></div>
			                    		<div className="col-md-8 col-sm-6 col-xs-10 get_form_inner">
					                    	<div className="group">
					                    		<Form.Item>
					                                {getFieldDecorator('firstname', {
					                                	rules: [{ required: true, message: 'Please input your FirstName!', whitespace: true }],
					                                })(
					                                	<Input placeholder="FirstName" />
					                                )}
					                            </Form.Item>
					                    	</div>
					                    	<div className="group">
					                            <Form.Item>
					                                {getFieldDecorator('email', {
					                                    rules: [{
					                                    	type: 'email', message: 'The input is not valid E-mail!',
					                                    }, {
					                                    	required: true, message: 'Please input your E-mail!',
					                                    }, {
							                                validator: this.updateProps,
							                            }],
					                                })(
					                                   <Input placeholder="Email" />
					                                )}
					                            </Form.Item>
					                        <span className="highlight"></span>
					                        </div>
				                        	<h4 style={{float: 'inherit'}}>Message</h4>
				                    		<Form.Item>
				                                {getFieldDecorator('message', {
				                                	rules: [{ required: true, message: 'Please input your Message!', whitespace: true }],
				                                })(
				                                	<TextArea rows={4} className="textAreaFont"/>
				                                )}
				                        </Form.Item>
				                        </div>
				                        <div className="col-md-2 col-sm-3 col-xs-1"></div>
			                    	</div>
		                    	</Form>
		                        <div className="row" style={{marginTop: '10px'}}>
		                        	<div className="col-md-6 col-sm-6"></div>
		                        	<div className="col-md-3 col-sm-3">
		                        		<button className="btn btn-sm"
		                        			style={{color:'black', backgroundColor:'white', width: '100%'}}
		                        			onClick={(e) => this.handleSubmit(e)}
		                    			>Confirm</button>
		                        	</div>
		                        	<div className="col-md-3 col-sm-3">
		                        		<button className="btn btn-sm"
		                        			style={{color:'black', backgroundColor:'white', width: '100%'}}
		                        			onClick={(e) => this.resetAll()}
		                    			>Cancel</button>
		                        	</div>
		                        </div>
		                    </div>
	                    </div>
	                </div>
	            </div>
			</div>
		)
	}
}

// export default Report;

const WrappedReport = Form.create()(Report);
export default WrappedReport;
