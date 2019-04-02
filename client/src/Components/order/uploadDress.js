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
import { Redirect } from 'react-router';
import moment from 'moment';

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
            'Special Occasion',
            'Family Dinner',
            'Causal',
            'Bridal',
            'Sami Formal',
            'Formal',
            'Heavy Formal',
        ],        
        sizeMsg: '',
        imgMsg: '' ,
        _id:''  ,
        showMsg: '' ,
        goDetail: false
    };

    async componentDidMount(){      
        const { elem } = this.props.location.state;
        for(var el in elem){
            this.setState({ [el]: elem[el] })
        }
        let data = await HttpUtils.get('getdresses');
        if(data.code && data.code === 200){
            this.setState({ data: data.allDress })
        }
    }

    handleSubmit = (e) => {        
        e.preventDefault();             
        const { productName, detailName, description, priceDay, bodyType, background,
              from, to, tags, weather, details, arr, fileList} = this.state,
        detail = details[0] === undefined ? 0 : details[0].name.length;  
        if(!!productName && !!detailName && !!description && !!priceDay && !!bodyType && 
            !!from && !!to && !!detail && !!arr.length && !!fileList.length && fileList.length === 3){
            this.setState({loader: true})
            this.funcForUpload()  
        }else if(arr.length == 0){
            this.setState({sizeMsg: "Select atleast one", imgMsg: ''})
        }else if(fileList.length < 3){
            this.setState({imgMsg: "Upload atleast three", sizeMsg: ''})
        }     
    };

    async funcForUpload(){
        const { fileList } = this.state;

        Promise.all(fileList.map((val) => {
            if(typeof(val) === "object"){
                return this.uploadFile(val).then((result) => {
                    return result.body.url
                })
            }
        })).then((results) => {
            this.postDressRecord(results)
        })
    }

    async postDressRecord(imageList){
        const { productName, detailName, description, priceDay, bodyType, background,
              from, to, tags, weather, details, arr, fileList, _id} = this.state;
        let imagesOne = fileList.filter((elem) => typeof(elem) === 'string'),
        imagesTwo = imageList.filter((elem) => typeof(elem) === 'string'), 
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
            fileList: [...imagesOne, ...imagesTwo],
            userId: this.props.user._id,
            userName: this.props.user.username,
            userEmail: this.props.user.email,
            postedOn: moment().format('LL'),
            _id
        }
        let resDressUpload = await HttpUtils.post('uploaddress',obj, this.props.user.token);
        if(resDressUpload.code && resDressUpload.code == 200){
            this.resetFields(resDressUpload, obj)
        }
    };

    resetFields(resDressUpload, elem){
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
            loader: false,
            showMsg: resDressUpload.data
        })
        setTimeout(() => {
            this.setState({ showMsg: '', goDetail: true, elem });
        }, 3000)
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
        fileList = fileList.filter((elem) => (elem.src !== e.src) || (elem !== e));
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
    const { previewVisible, previewImage, fileList, background, tags, details, goDetail, elem, data } = this.state;
    if(goDetail){
        return <Redirect to={{pathname: '/detail', state: {elem, data}}}/>
    }
    console.log(this.props.user, 'userrrrrrrrrrrrr')

    return (
      	<div>
          <Form onSubmit={this.handleSubmit}>
      		<div className="container-fluid">
      			<div className="col-md-12">
      				<div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-11">
                  <h1 style={{fontFamily: 'Qwigley',fontSize: '200%',color: '#c2073f'}}>Upload Dress</h1>
                </div>
      					
      				</div>
      				<div className="row">
                <div className="col-md-6 row">
      						{/*<TextInput2 
                      required
                      label="Product Name" 
                      id="productName" 
                      value={this.state.productName} 
                      className="input"
                      Change={this.inputHandleChange}
                    />*/}
                  <TextInput 
                      label="Product Name" 
                      id="productName" 
                      className="input"
                      col="col-md-4 col-sm-4"
                      col2="col-md-8 col-sm-8"
                     
                      value={this.state.productName} 
                      Change={this.inputHandleChange}
                    />
                </div>
                <div className="col-md-6 row">    
      						<TextInput 
                      required
                      

                      label="Detail Name" 
                      id="detailName" 
                      className="input"
                      col="col-md-4 col-sm-4"
                      col2="col-md-8 col-sm-8"
                      padding={{padding: '0px'}}
                      value={this.state.detailName} 

                      Change={this.inputHandleChange}
                    />
				        </div>
            </div>
					<div className="row">
            <div className="col-md-6 col-sm-12 row">
  						<Textarea 
                  required
                  title="Description" 
                  id="description"
                  value={this.state.description}
                  rows="6" style={{border: 'none'}}
                  className="col-md-12 col-sm-12"
                  padding={{padding: '0px'}}
                  maxLength="400" 
                  onChange={e => this.setState({description: e.target.value})}
                  style={{paddingLeft: '0px'}}/>
            </div>
            <div className="col-md-6 row">                         					
              <TextInput 
                  required
                    label="Price / Day" 
                    id="priceDay" 
                    className="input"
                    col="col-md-4 col-sm-4" 
                    col2="col-md-8 col-sm-8"
                    padding={{padding: '0px'}}
                    value={this.state.priceDay} 


                  pattern="^-?[0-9]\d*\.?\d*$"
                  Change={this.inputHandleChange}
                />
            </div>    
					</div>

          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-md-6 col-sm-12 row">
              <SelectInput                   
                  label="Body Type" 
                  id="bodyType" 
                  value={this.state.bodyType} 
                  className="input"
                  col="col-md-4 col-sm-4"
                  col2="col-md-8 col-sm-8"

                  options={this.state.typeArr}
                  Change={this.inputHandleChange}
                />
            </div>    
            <div className="col-md-2 col-sm-3"><span className="input"><h3 style={{fontSize: '23px', color: '#c2073f'}}>Color Picker</h3></span></div>
            <div className="col-md-4 col-sm-9">
              <div className="inputBox">
                  <div className="inputText"></div>
                  <SwatchesPicker 
                      required
                      color={ background }
                      onChangeComplete={ this.handleChangeComplete }
                      style = {{height: '20px'}}
                  />              
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-2"><span className="input">
                <h3 style={{fontSize: '23px',color: '#c2073f'}}>
                    From
                </h3></span>
            </div>
            <div className="col-md-4 col-sm-4" style={{marginTop: '1%'}}>
              <div className="inputBox">
                  <div className="inputText"></div>
                  <input 
                      required
                      type="date" 
                      id="from" 
                      value={this.state.from} 
                      onChange={this.inputHandleChange}
                      style={{border: 'none',borderBottom: '1px solid #c2073f'}}
                  />                
              </div>
            </div>
            <div className="col-md-1 col-sm-2"><span className="input">
                <h3 style={{fontSize: '23px',color: '#c2073f'}}>
                    To
                </h3></span>
            </div>
            <div className="col-md-4 col-sm-4" style={{marginTop: '1%'}}>
              <div className="inputBox">
                  <div className="inputText"></div>
                  <input 
                      required
                      type="date" 
                      id="to" 
                      value={this.state.to} 
                      onChange={this.inputHandleChange}
                      style={{border: 'none',borderBottom: '1px solid #c2073f'}}
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
            <div className="col-md-6 row">
                <SelectInput 
                    label="Weather" 
                    id="weather" 
                    value={this.state.weather} 
                    className="input"
                    col="col-md-4 col-sm-4"
                    col2="col-md-8 col-sm-8"
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
						<div className="col-md-2 col-sm-4"><span className="input"><h3 style={{fontSize: '22px',color: '#c2073f' }}>Sizes Available</h3></span></div>
						<div className="col-md-4 col-sm-8">
							<div className="col-md-6 col-sm-6" style={{marginTop: '5%'}}>
								<label className="container">
									<input value='xsmall' type="checkbox" id="XS" required 
                    style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}
                    onChange={this.handleSize}
                  />
									<span className="checkmark"></span>
									<h4 style={{color: '#c2073f'}}>X Small</h4>
								</label>
								<label className="container">
									<input value='small' type="checkbox" id="S"
                    onChange={this.handleSize}
                    style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4 style={{color: '#c2073f'}}>Small</h4>
								</label>
								<label className="container">
									<input value='Medium' type="checkbox" id="M" required
                  onChange={this.handleSize}
                   style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4 style={{color: '#c2073f'}}>Medium</h4>
								</label>
							</div>
							<div className="col-md-6 col-sm-6" style={{marginTop: '5%'}}>
								<label className="container">
									<input  type="checkbox" id="XL"
                  onChange={this.handleSize}
                  style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4 style={{color: '#c2073f'}}>X Large</h4>
								</label>
								<label className="container">
									<input type="checkbox" id="L"
                  onChange={this.handleSize}
                  style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4 style={{color: '#c2073f'}}>Large</h4>
								</label>
								<label className="container">
									<input type="checkbox" id="XXL"
                  onChange={this.handleSize}
                  style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4 style={{color: '#c2073f'}}>XX Large</h4>									
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
						<div className="col-md-2 col-sm-2"><span class="input"><h3 style={{fontSize: '23px', color : '#c2073f'}}>Pictures</h3><p style={{fontSize: '63%'}}>File size must not exceed to Mb</p></span></div>
							<div className="col-md-4 col-sm-5" style={{marginTop: '1%'}}>
								<label className="labelcustome" id="#bb" style={{background: 'none',color: '#c2073f',fontWeight: '500'}}> Choose File
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
          <div className="row">
              <div className="col-md-12">
                  {fileList.length > 0 && <UploadedImages 
                      fileList={fileList}
                      handlePreview={this.handlePreview}
                      deleteImage={this.deleteImage}/>
                  }
              </div>
          </div>
          {this.state.imgMsg.length > 0 && <span style={{fontSize:'16px'}}><u>{this.state.imgMsg}</u></span>}          

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
						<div className="col-md-9 col-sm-8" style={{textAlign: 'right'}}>{this.state.showMsg}</div>
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
