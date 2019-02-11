import React, { Component } from 'react';
import {
  Form, Input, Checkbox, Button, Radio, Upload, Icon, Modal
} from 'antd';
import { HttpUtils } from  '../../Service/HttpUtils';
import sha1 from "sha1";
import superagent from "superagent";
import './uploadDress.css';

class UploadDress extends Component {
    state = {
        confirmDirty: false,
        name: "",
        shareholders: [{ name: "" }],
        arr: [],
        previewVisible: false,
        loader: false,
        previewImage: '',
        fileList: [],
    };

    handleSubmit = (e) => {        
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({loader: true})
                this.funcForUpload(values);
            }
        });
    };

    async funcForUpload(values){
        const { fileList } = this.state;

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postDressRecord(values, results)
        })
    }

    async postDressRecord(values, imageList){
        const { arr, shareholders, price } = this.state,
        obj = {
            productName: values.productname,
            detailName: values.detailname,
            description: values.description,
            price: price,
            sizes: arr,
            details: shareholders,
            img: imageList
        }
        const resDressUpload = await HttpUtils.post('uploaddress',obj)
        console.log(resDressUpload,'sadasdsadsad');
    };

    //--------------function for cloudnary url ---------------
    uploadFile = (files) =>{        
        const image = files,
        cloudName = 'dxk0bmtei',
        url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload',
        timestamp = Date.now()/1000,
        uploadPreset = 'toh6r3p2',
        paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'U8W4mHcSxhKNRJ2_nT5Oz36T6BI',
        signature = sha1(paramsStr),
        params = {
            'api_key':'878178936665133',
            'timestamp':timestamp,
            'upload_preset':uploadPreset,
            'signature':signature
        };

        return new Promise((res, rej) => {
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', image)
            Object.keys(params).forEach((key) =>{
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) =>{
                err ? rej(err) : res(resp);
            })
        })
    }

    //-----------------cloudnary function end ------------------

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleAddShareholder = () => {
        this.setState({
          shareholders: this.state.shareholders.concat([{ name: "" }])
        });
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
    }

    updateNumber = (e) => {
    const val = e.target.value;
    // If the current value passes the validity test then apply that to state
    if (e.target.validity.valid) this.setState({price: e.target.value});
    // If the current val is just the negation sign, or it's been provided an empty string,
    // then apply that value to state - we still have to validate this input before processing
    // it to some other component or data structure, but it frees up our input the way a user
    // would expect to interact with this component
    else if (val === '' || val === '-') this.setState({price: val});
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
      console.log(file, 'file 123456')
        this.setState({
            previewImage: file,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    handleImage = (elem) => {     
        let { fileList } = this.state,
        self = this,
        file = elem.target.files[0],
        reader = new FileReader();

        //Read the contents of Image File.
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            
            //Initiate the JavaScript Image object.
            var image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;
            
            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height,
                width = this.width;
                if (height > width) {
                    file.src = e.target.result;
                    fileList.push(file);
                    self.setState({ fileList });
                    return false;
                }
                alert("Image must be in portrait mode.");
                return true;
            };
        }
    }
     
    deleteImage = (e) => {
        let { fileList } = this.state;
        fileList = fileList.filter((elem) => elem.src !== e.src);
        this.setState({ fileList });
    } 

render() {
    const { getFieldDecorator,name, shareholders  } = this.props.form,
    { previewVisible, previewImage, fileList } = this.state;
    
    const uploadedImages = (
        <div >
            {this.state.fileList.map((elem) => {
                return(
                    <div className='insideDiv col-md-3'>
                        <a className="imgContainer">
                        <img alt='img1' 
                            className="imgDiv"
                            src={elem.src}                             
                        />
                        <span className="middle" style={{position: 'absolute', marginLeft: '-11%'}}>
                            <a >
                                <Icon 
                                    title='Preview file' 
                                    onClick={() => this.handlePreview(elem.src)}
                                    type="eye" 
                                    data-toggle="modal" 
                                    data-target="#myModal"
                                    theme="outlined"
                                    className="inner" 
                                />
                            </a>
                            <Icon 
                                title='Remove file' 
                                type='delete' 
                                className="inner"
                                onClick={() => this.deleteImage(elem)}
                            />
                        </span>
                        </a>
                    </div>
                )
            })}
        </div>
    )

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
                <Input id="price" type='tel'
                    value={this.state.price}
                    onChange={this.updateNumber}
                    pattern="^-?[0-9]\d*\.?\d*$"
                />
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
    								<input type="file" id="File" size="60" onChange={e => this.handleImage(e)}/>
    							</label><br/>		
                  	                  					
							</div>							
						<div className="col-md-2"></div>
					</div>
          <div className="row">
              <div className="col-md-12">
                  {fileList.length > 0 && uploadedImages}
              </div>
          </div>

          {/* Modal Start */}
          <div id="myModal" className="modal fade" role="dialog" style={{marginTop:'5%'}}>
            <div className="modal-dialog">
              <div className="modal-content" style={{width:'66%'}}>
                <div className="modal-header">
                  <span className="title" style={{color: 'white', textAlign: 'center'}}>
                    Preview
                  </span>
                  <button type="button" className="close" data-dismiss="modal" style={{color:'white'}}>&times;</button>
                </div>
                <div className="modal-body">
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </div>
              </div>
            </div>
          </div>
        {/* Modal End */}          
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
