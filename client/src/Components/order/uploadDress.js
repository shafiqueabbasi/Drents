import React, { Component } from 'react';

class UploadDress extends Component {
  render() {
    
    return (
      	<div>
      		<div className="container-fluid">
      			<div className="col-md-12">
      				<div className="row">
      					<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Upload Dress</h1>
      				</div>
      				<div className="row">
						<div className="col-md-2 "><span class="input"><h3 style={{fontSize: '23px'}}>Product Name</h3></span></div>
							<div className="col-md-4">
								<div className="inputBox ">
									<div className="inputText"></div>
									<input type="text" name="" class="input"/>
								</div>
							</div>
						<div className="col-md-2"><span class="input"><h3 style={{fontSize: '23px'}}>Detail Name</h3></span></div>
						<div className="col-md-4">
							<div className="inputBox">
								<div class="inputText"></div>
								<input type="text" name="" class="input"/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2 "><span class="input"><h3 style={{fontSize: '23px'}}>Discription</h3></span></div>
							<div className="col-md-4">
								<div className="inputBox ">
									<div className="inputText"></div>
									<input type="text" name="" class="input"/>
								</div>
							</div>
						<div className="col-md-2"><span class="input"><h3 style={{fontSize: '23px'}}>Price / Day</h3></span></div>
						<div className="col-md-4">
							<div className="inputBox">
								<div class="inputText"></div>
								<input type="text" name="" class="input"/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2 "><span class="input"><h3 style={{fontSize: '23px'}}>Detail</h3></span></div>
							<div className="col-md-4">
								<div className="inputBox ">
									<div className="inputText"></div>
									<input type="text" name="" class="input"/>
									<input type="text" name="" class="input"/>
									<input type="text" name="" class="input"/>
								</div>
							</div>
						<div className="col-md-2 col-sm-4"><span className="input"><h3 style={{fontSize: '22px'}}>Sizes Available</h3></span></div>
						<div className="col-md-4 col-sm-8">
							<div className="col-md-6 col-sm-6" style={{marginTop: '5%'}}>
								<label className="container">
									<input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>X Small</h4>
								</label>
								<label className="container">
									<input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>Small</h4>
								</label>
								<label className="container">
									<input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>Medium</h4>
								</label>
							</div>
							<div className="col-md-6 col-sm-6" style={{marginTop: '5%'}}>
								<label className="container">
									<input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>X Large</h4>
								</label>
								<label className="container">
									<input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									<span className="checkmark"></span>
									<h4>Large</h4>
								</label>
								<label className="container">
									<input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
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
      	</div>
    );

  }
}

export default UploadDress;