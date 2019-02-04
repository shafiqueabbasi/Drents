import React, { Component } from 'react';
import {
  Form, Input, Checkbox, Button,Radio
} from 'antd';
import { HttpUtils } from  '../../Service/HttpUtils';
import './uploadDress.css';

class UploadDress extends Component {
  state = {
    confirmDirty: false,
    name: "",
    shareholders: [{ name: "" }],
    arr: [],
    arrImage:[]
  };
  handleSubmit = (e) => {
    const { arr, shareholders, arrImage } = this.state;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let obj = {
          productName:values.productname,
          detailName:values.detailname,
          Description:values.description,
          Price:values.price,
          Sizes:arr,
          Details:shareholders,
          img:arrImage
        }
        console.log(obj, 'objjjjjjjjjjjjj')
        this.postDressRecord(obj);
      }
    });
  }
  async postDressRecord(obj){
       //let response = await HttpUtils.get('allusers');
      const resDressUpload = await HttpUtils.post('uploaddress',obj)
      console.log(resDressUpload,'sadasdsadsad');
     }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };
  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
    //console.log(this.state.shareholder)
  };
  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };


  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
    console.log(newShareholders, 'llllllllllllll')
  };
  handleSize = e => {
    let { arr } = this.state,
    target = e.target.id;
    if(arr.includes(target)){
      arr = arr.filter((elem) => elem !== target);
    }else {
      arr.push(target);
    }
    this.setState({arr});

  //arr.push()

   }
render() {
    const { getFieldDecorator,name, shareholders  } = this.props.form;

    //const { autoCompleteResult } = this.state;
    return (
      	<div>
          <Form onSubmit={this.handleSubmit}>
      		<div className="container-fluid">
      			<div className="col-md-12">
      				<div className="row">
      					<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Upload Dress</h1>
      				</div>
      				<div className="row">
						<div className="col-md-2 "><span class="input"><h3 style={{fontSize: '23px'}}>Product Name</h3></span></div>
							<div className="col-md-4">
								<div className="inputBox">
									<div className="inputText"></div>
                    <Form.Item>
                      {getFieldDecorator('productname', {
                        rules: [{ required: true, message: 'Please input your productname!', whitespace: true }],
                      })(
                        <Input />
                      )}
                    </Form.Item>
								</div>
							</div>
						<div className="col-md-2"><span className="input"><h3 style={{fontSize: '23px'}}>Detail Name</h3></span></div>
						<div className="col-md-4">
							<div className="inputBox">
								<div className="inputText"></div>
                  <Form.Item>
                    {getFieldDecorator('detailname', {
                      rules: [{ required: true, message: 'Please input your detailname!', whitespace: true }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2 "><span class="input"><h3 style={{fontSize: '23px'}}>Discription</h3></span></div>
							<div className="col-md-4">
								<div className="inputBox ">
									<div className="inputText"></div>
                    <Form.Item>
                      {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Please input your description!', whitespace: true }],
                      })(
                        <Input />
                      )}
                    </Form.Item>
								</div>
							</div>
						<div className="col-md-2"><span className="input"><h3 style={{fontSize: '23px'}}>Price / Day</h3></span></div>
						<div className="col-md-4">
							<div className="inputBox">
								<div className="inputText"></div>
                  <Form.Item>
                    {getFieldDecorator('price', {
                      rules: [{ required: true, message: 'Please input your price!', whitespace: true }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2 "><span className="input"><h3 style={{fontSize: '23px'}}>Detail</h3></span></div>
							<div className="col-md-4">
								<div className="inputBox ">
									<div className="inputText"></div>
                  {this.state.shareholders.map((shareholder, idx) => (
                      <div className="shareholder">
                        <input
                          type="text"
                          placeholder={`Shareholder #${idx + 1} name`}
                          value={shareholder.name}
                          id="shareholder"
                          onChange={this.handleShareholderNameChange(idx)}
                        />
                        <button
                          type="button"
                          onClick={this.handleRemoveShareholder(idx)}
                          className="btn btn-sm"
                        style={{margin:'11px'}}>
                          X
                        </button>
                      </div>
                ))}
                <button
                  type="button"
                  onClick={this.handleAddShareholder}
                  className="button_add"
                >
                Add
              </button>
								</div>
							</div>
						<div className="col-md-2 col-sm-4"><span className="input"><h3 style={{fontSize: '22px'}}>Sizes Available</h3></span></div>
						<div className="col-md-4 col-sm-8">
							<div className="col-md-6 col-sm-6" style={{marginTop: '5%'}}>
								<label className="container">
									<input value='xsmall' type="checkbox" id="XS"
                    style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}
                    onChange={this.handleSize}
                  />
									<span className="checkmark"></span>
									<h4>X Small</h4>
								</label>
								<label className="container">
									<input value='small' type="checkbox" id="S"
                    onChange={this.handleSize}
                   style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>Small</h4>
								</label>
								<label className="container">
									<input value='Medium' type="checkbox" id="M"
                  onChange={this.handleSize}
                   style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>Medium</h4>
								</label>
							</div>
							<div className="col-md-6 col-sm-6" style={{marginTop: '5%'}}>
								<label className="container">
									<input  type="checkbox" id="XL"
                  onChange={this.handleSize}
                  style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>X Large</h4>
								</label>
								<label className="container">
									<input type="checkbox" id="L"
                  onChange={this.handleSize}
                  style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>Large</h4>
								</label>
								<label className="container">
									<input type="checkbox" id="XXL"
                  onChange={this.handleSize}
                  style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>XX Large</h4>
									<span style={{fontSize:'12px'}}><u>See Chart</u></span>
								</label>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2 col-sm-2"><span class="input"><h3 style={{fontSize: '23px'}}>Pictures</h3><p style={{fontSize: '63%'}}>File size must not exceed to Mb</p></span></div>
							<div className="col-md-4 col-sm-5" style={{marginTop: '1%'}}>
								<label className="labelcustome" id="#bb"> Choose File
    								<input type="file" id="File"   size="60" />
    							</label><br/>
								<label className="labelcustome" id="#bb"> Choose File
    								<input type="file" id="File"   size="60" />
    							</label><br/>
								<label className="labelcustome" id="#bb"> Choose File
    								<input type="file" id="File"   size="60" />
    							</label>
							</div>
							<div className="col-md-4 col-sm-5" style={{marginTop: '1%'}}>
								<label className="labelcustome" id="#bb"> Choose File
    								<input type="file" id="File"   size="60" />
    							</label><br/>
								<label className="labelcustome" id="#bb"> Choose File
    								<input type="file" id="File"   size="60" />
    							</label>
							</div>
						<div className="col-md-2"></div>
					</div>

					<div className="row">
						<div className="col-md-9 col-sm-8"></div>
						<div className="col-md-3 col-sm-4">
							<input type="submit" name="" class="button" value="post"/>
						</div>
					</div>

      			</div>
			</div>
      </Form>
      	</div>
    );

  }
}
const WrappedNormaluploadDressForm = Form.create()(UploadDress);
export default WrappedNormaluploadDressForm;
