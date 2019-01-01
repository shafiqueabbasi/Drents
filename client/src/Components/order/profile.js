import React, { Component } from 'react';

class Profile extends Component {
  render() {
    
    return (
      	<div>
      		<div className="container-fluid">
      			<div className="col-md-12">
      				<div className="row">
      					<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Profile</h1>
      				</div>
      					<form>
							<div class="row">
						    	<div class="col-md-2 col-sm-2"><span class="input"><h3>Email</h3></span></div>
								<div class="col-sm-4 col-sm-4">
									<div class="inputBox ">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
								<div className="col-md-2 col-sm-2"><span class="input"><h3>Change Password</h3></span></div>
								<div class="col-md-4 col-sm-4">
									<div class="inputBox">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
							</div>

							<div class="row">
						    	<div class="col-md-2 col-sm-2"><span class="input"><h3>First Name</h3></span></div>
								<div class="col-sm-4 col-sm-4">
									<div class="inputBox ">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
								<div className="col-md-2 col-sm-2"><span class="input"><h3>Last Name</h3></span></div>
								<div class="col-md-4 col-sm-4">
									<div class="inputBox">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
							</div>

							<div class="row">
								<div className="col-md-9 col-sm-8"></div>
								<div class="col-md-3 col-sm-4">
									<input type="submit" name="" class="button" value="Save Changes"/>
								</div>
							</div>
							<div className="row">
      							<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Fil Details</h1>
      						</div>

      						<div class="row">
						    	<div class="col-md-2 col-sm-2"><span class="input"><h3>Height</h3></span></div>
								<div class="col-sm-4 col-sm-4">
									<div class="inputBox ">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
								<div className="col-md-2 col-sm-2"><span class="input"><h3>Weight</h3></span></div>
								<div class="col-md-4 col-sm-4">
									<div class="inputBox">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
							</div>

							<div class="row">
						    	<div class="col-md-2 col-sm-2"><span class="input"><h3>Bust Size</h3></span></div>
								<div class="col-sm-4 col-sm-4">
									<div class="inputBox ">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
								<div className="col-md-2 col-sm-2"><span class="input"><h3>Body Type</h3></span></div>
								<div class="col-md-4 col-sm-4">
									<div class="inputBox">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
								<div className="col-md-2 col-sm-2"><span class="input"><h3>Occasion Atend Most</h3></span></div>
								<div class="col-md-4 col-sm-4">
									<div class="inputBox">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
								<div className="col-md-2 col-sm-2"><span class="input"><h3>Typical Jean Size</h3></span></div>
								<div class="col-md-4 col-sm-4">
									<div class="inputBox">
										<div class="inputText"></div>
										<input type="text" name="" class="input"/>
									</div>
								</div>
							</div>

							<div class="row">
								<div className="col-md-9 col-sm-8"></div>
								<div class="col-md-3 col-sm-4">
									<input type="submit" name="" class="button" value="Save Changes"/>
								</div>
							</div>
							<div className="row">
      							<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>Our All fit</h1>
      						</div>
      						<div className="row">
      							<div className="col-md-4 col-sm-4">
      								<h2>Bust</h2>
      								<label className="container">
									  <input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Small Bust</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Large Bust</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Average</h4>
									</label>
								</div>

      							<div className="col-md-4 col-sm-4">
      								<h2>Hips</h2>
      								<label className="container">
									  <input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Narrow Hips</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Wide Hips</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Average</h4>
									</label>
								</div>

      							<div className="col-md-4 col-sm-4">
      								<h2>Torso</h2>
      								<label className="container">
									  <input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Short Torso</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Large Torso</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Average</h4>
									</label>
									
      							</div>
    								
							</div>
							<div className="row">
								<div className="col-md-4 col-sm-4">
      								<h2>Ribcage</h2>
      								<label className="container">
									  <input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Narrow Ribcage</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Wide Ribcage</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Average</h4>
									</label>
								</div>

								<div className="col-md-4 col-sm-4">
      								<h2>Height</h2>
      								<label className="container">
									  <input type="checkbox" id="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Petite</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Tall</h4>
									</label>
									<label className="container">
									  <input type="checkbox" style={{position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0'}}/>
									  <span className="checkmark"></span>
									  <h4>Average</h4>
									</label>
								</div>

								<div className="col-md-4 col-sm-4"></div>
							</div>

							<div class="row">
								<div className="col-md-9 col-sm-8"></div>
								<div class="col-md-3 col-sm-4">
									<input type="submit" name="" class="button" value="Save Changes"/>
								</div>
							</div>

						</form>
				</div>
      		</div>

      	</div>
    );

  }
}

export default Profile;