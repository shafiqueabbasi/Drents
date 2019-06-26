import React, { Component } from 'react';
import { Icon } from 'antd';

export class Shareholder extends Component {
	state = {
		shareholders: [{ name: "" }],
	}

	handleAddShareholder = () => {
        this.setState({
          shareholders: this.state.shareholders.concat([{ name: "" }])
        }, () => {
        	this.props.onChange(this.props.id, this.state.shareholders) 
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
          shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        }, () => {
        	this.props.onChange(this.props.id, this.state.shareholders) 
        });
    };

    handleShareholderNameChange = idx => evt => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders }); 
        this.props.onChange(this.props.id, newShareholders)       
    };

    render(){
	  	return(
	  		<div>
	  			<div className="col-md-6 col-lg-6 col-sm-4"><span className="input">
	                <h3 className="input_form_Profile">
	                    {this.props.label}
	                </h3></span>
	            </div>
	            <div className="col-md-10 col-lg-10 col-sm-12">
	                <div className="inputBox">
	                    <div className="inputText"></div>
	                    {this.props.value.map((shareholder, idx) => (
	                        <div className="shareholder" style={{marginTop: '2.5%'}}>
		                        <input
		                        	required={this.props.required}
									type="text"
									// placeholder={`Shareholder #${idx + 1} name`}
									value={shareholder.name}
									id={this.props.id}
									onChange={this.handleShareholderNameChange(idx)}
                                    style={{border: 'none', width: '100%',
                                                            border: 'none',
                                                            backgroundColor: 'rgb(225, 225, 225)',
                                                            padding: '9px',
                                                            marginTop:'-1%'}}
		                        />
		                        <button
			                        type="button"
			                        onClick={this.handleRemoveShareholder(idx)}
			                        className="btn btn-sm"
	                        		
                        		>
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
	  		</div>
	    )
    }
}

export class UploadedImages extends Component {
	render(){
	  	return(
	  		<div >
            {this.props.fileList.map((elem, key) => {
                let src = elem.src || elem;
                return(
                    <div key={key} className='insideDiv col-md-3'>
                        <a className="imgContainer">
                        <img alt='img1' 
                            className="imgDiv"
                            src={src}   
                            style={{height: '100%', width: '100%'}}                          
                        />
                        <span className="middle" style={{position: 'absolute', marginLeft: '-11%'}}>
                            
                                <Icon 
                                    title='Preview file' 
                                    onClick={() => this.props.handlePreview(src)}
                                    type="eye" 
                                    data-toggle="modal" 
                                    data-target="#myModal"
                                    theme="outlined"
                                    className="inner" 
                                />
                            
                            <Icon 
                                title='Remove file' 
                                type='delete' 
                                className="inner"
                                onClick={() => this.props.deleteImage(elem)}
                            />
                        </span>
                        </a>
                    </div>
                )
            })}
        </div>
	    )
	}
}
