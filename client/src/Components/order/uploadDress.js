import React, { Component } from 'react';
import { Form } from 'antd';
import { Textarea, SelectInput, TextInput } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';
import { Shareholder, UploadedImages } from '../productdetail/ColorPicker';
import SeeChart from './seeChart';

import { SwatchesPicker } from 'react-color';
import sha1 from "sha1";
import superagent from "superagent";
import { connect } from 'react-redux';

class UploadDress extends Component {
    state = {
        productName: '',
        detailName: '',
        description: '',
        priceDay: '',
        bodyType: 'Wedding',
        background: '#fff',  
        from: '',
        to: '',   
        tags: [{ name: "" }],   
        weather: 'Cold Weather',
        details: [{ name: "" }],
        arr: [],
        previewVisible: false,
        loader: false,
        previewImage: '',
        fileList: [],
        typeArr: [
            'Wedding',
            'Party',
            'Corporate',
            'Special Ocasion',
            'Family Dinner',
        ],        
        sizeMsg: '',
        imgMsg: ''    
    };

    handleSubmit = (e) => {        
        e.preventDefault();        
        const { productName, detailName, description, priceDay, bodyType, background,
              from, to, tags, weather, details, arr, fileList} = this.state,
        detail = details[0] === undefined ? 0 : details[0].name.length;        
        if(!!productName && !!detailName && !!description && !!priceDay && !!bodyType && 
            !!from && !!to && !!detail && !!arr.length && !!fileList.length){
            this.setState({loader: true})
            this.funcForUpload()      
        }else if(arr.length == 0){
            this.setState({sizeMsg: "Select atleast one", imgMsg: ''})
        }else if(fileList.length == 0){
            this.setState({imgMsg: "Upload atleast one", sizeMsg: ''})
        }     
    };

    async funcForUpload(){
        const { fileList } = this.state;

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postDressRecord(results)
        })
    }

    async postDressRecord(imageList){
        const { productName, detailName, description, priceDay, bodyType, background,
              from, to, tags, weather, details, arr, fileList} = this.state,
        obj = {
            productName,
            detailName,
            description,
            priceDay,
            bodyType,
            background,
            from,
            to,
            tags,
            weather,
            details,
            sizes: arr,
            fileList: imageList,
            userId: this.props.user._id
        }
        console.log(obj, 'objjjjjjjjjjjjj')
        let resDressUpload = await HttpUtils.post('uploaddress',obj, this.props.user.token);
        console.log(resDressUpload, 'lllllllllllllll')
        if(resDressUpload.code && resDressUpload.code == 200){
            this.resetFields()
            console.log('resssssssssssssssssssss')
        }
        // console.log(resDressUpload,'sadasdsadsad');
    };

    resetFields(){
        this.setState({
            productName: '',
            detailName: '',
            description: '',
            priceDay: '',
            bodyType: 'Wedding',
            background: '',
            from: '',
            to: '',
            tags: [{ name: "" }],
            weather: 'Cold Weather',
            details: [{ name: "" }],
            arr: [],
            fileList: [],
            loader: false
        })
    }

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

    handlePreview = (file) => {
        this.setState({
            previewImage: file,
            previewVisible: true,
        });
    }

    deleteImage = (e) => {
        let { fileList } = this.state;
        fileList = fileList.filter((elem) => elem.src !== e.src);
        this.setState({ fileList });
    }

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

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    inputHandleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleCard = (e, f) => {
      this.setState({ [e]: f })
    }

render() {
    const { previewVisible, previewImage, fileList, background, tags, details } = this.state;
    
    return (
      	<div>
          <Form onSubmit={this.handleSubmit}>
      		<div className="container-fluid">
      			<div className="col-md-12">
      				<div className="row">
      					<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Upload Dress</h1>
      				</div>
      				<div className="row">
                <div className="col-md-6">
      						<TextInput 
                      required
                      label="Product Name" 
                      id="productName" 
                      value={this.state.productName} 
                      className="input"
                      Change={this.inputHandleChange}
                    />
                </div>
                <div className="col-md-6">    
      						<TextInput 
                      required
                      label="Detail Name" 
                      id="detailName" 
                      value={this.state.detailName} 
                      className="input"
                      Change={this.inputHandleChange}
                    />
				        </div>
            </div>
					<div className="row">
            <div className="col-md-6">
  						<Textarea 
                  required
                  title="Description" 
                  id="description"
                  value={this.state.description}
                  rows="4"
                  maxLength="400" 
                  onChange={e => this.setState({description: e.target.value})}
                  style={{paddingLeft: '0px'}}/> 
            </div>
            <div className="col-md-6">                         					
              <TextInput 
                  required
                  label="Price / Day" 
                  id="priceDay" 
                  value={this.state.priceDay} 
                  className="input"
                  pattern="^-?[0-9]\d*\.?\d*$"
                  Change={this.inputHandleChange}
                />
            </div>    
					</div>

          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6">
              <SelectInput                   
                  label="Body Type" 
                  id="bodyType" 
                  value={this.state.bodyType} 
                  className="input"
                  options={this.state.typeArr}
                  Change={this.inputHandleChange}
                />
            </div>    
            <div className="col-md-2"><span className="input"><h3 style={{fontSize: '23px'}}>Color Picker</h3></span></div>
            <div className="col-md-4">
              <div className="inputBox">
                  <div className="inputText"></div>
                  <SwatchesPicker 
                      required
                      color={ background }
                      onChangeComplete={ this.handleChangeComplete }
                  />              
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2"><span className="input">
                <h3 style={{fontSize: '23px'}}>
                    From
                </h3></span>
            </div>
            <div className="col-md-4">
              <div className="inputBox">
                  <div className="inputText"></div>
                  <input 
                      required
                      type="date" 
                      id="from" 
                      value={this.state.from} 
                      onChange={this.inputHandleChange}
                  />                
              </div>
            </div>
            <div className="col-md-2"><span className="input">
                <h3 style={{fontSize: '23px'}}>
                    To
                </h3></span>
            </div>
            <div className="col-md-4">
              <div className="inputBox">
                  <div className="inputText"></div>
                  <input 
                      required
                      type="date" 
                      id="to" 
                      value={this.state.to} 
                      onChange={this.inputHandleChange}
                  />                
              </div>
            </div>
          </div>

          <div className="row">          
            <Shareholder 
                label="Tags" 
                id="tags" 
                value={this.state.tags}
                onChange={this.handleCard}
              />
            <div className="col-md-6">
                <SelectInput 
                    label="Weather" 
                    id="weather" 
                    value={this.state.weather} 
                    className="input"
                    options={["Cold Weather", "Warm Weather"]}
                    Change={this.inputHandleChange}
                />
            </div>
          </div>

					<div className="row">					
            <Shareholder 
                required
                label="Details" 
                id="details" 
                value={this.state.details}
                onChange={this.handleCard}
            />
						<div className="col-md-2 col-sm-4"><span className="input"><h3 style={{fontSize: '22px'}}>Sizes Available</h3></span></div>
						<div className="col-md-4 col-sm-8">
							<div className="col-md-6 col-sm-6" style={{marginTop: '5%'}}>
								<label className="container">
									<input value='xsmall' type="checkbox" id="XS" required 
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
									<input value='Medium' type="checkbox" id="M" required
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
								</label>
                <span style={{fontSize:'12px'}} 
                    data-toggle="modal" 
                    data-target="#chartModal">
                    <u>See Chart</u>
                </span>                  
							</div>
              {this.state.sizeMsg.length > 0 && <span style={{fontSize:'16px'}}><u>{this.state.sizeMsg}</u></span>}
						</div>
					</div>

					<div className="row">
						<div className="col-md-2 col-sm-2"><span class="input"><h3 style={{fontSize: '23px'}}>Pictures</h3><p style={{fontSize: '63%'}}>File size must not exceed to Mb</p></span></div>
							<div className="col-md-4 col-sm-5" style={{marginTop: '1%'}}>
								<label className="labelcustome" id="#bb"> Choose File
    								<input 
                        type="file" 
                        id="File" 
                        size="60" 
                        onChange={e => this.handleImage(e)}
                      />
    							</label><br/>		                  	                  					
							</div>							
						<div className="col-md-2"></div>
					</div>
          {this.state.imgMsg.length > 0 && <span style={{fontSize:'16px'}}><u>{this.state.imgMsg}</u></span>}
          <div className="row">
              <div className="col-md-12">
                  {fileList.length > 0 && <UploadedImages 
                      fileList={fileList}
                      handlePreview={this.handlePreview}
                      deleteImage={this.deleteImage}/>
                  }
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
        {/* Chart Modal Start */}
          <div id="chartModal" className="modal fade" role="dialog" style={{marginTop:'5%'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="title" style={{color: 'white', textAlign: 'center'}}>
                    Measurement
                  </span>
                  <button type="button" className="close" data-dismiss="modal" style={{color:'white'}}>&times;</button>
                </div>
                <div className="modal-body">
                  <SeeChart />
                </div>
              </div>
            </div>
          </div>
        {/* Chart Modal End */}     
					<div className="row">
						<div className="col-md-9 col-sm-8"></div>
						<div className="col-md-3 col-sm-4">
							<button type="submit" 
                     name="" className="button"
                     value="post" 
                     disabled={this.state.loader}
                     onClick={this.handleSubmit}>
                     post
                     </button>
              {this.state.loader && <div class="loading">Loading&#8230;</div>}
						</div>
					</div>
  			</div>
			</div>
      </Form>
      	</div>
    );

  }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedUploadDress = connect(mapStateToProps)(UploadDress);
export default connectedUploadDress;
