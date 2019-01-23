import React, { Component } from 'react';
import './SignIn.css'

class SignIn extends Component {
  render() {
    
    return (
      	<div style={{backgroundColor: '#c2073f'}}>
      		<div className="container-fluid">
      			<div className="row">
      				<div className="col-md-2 col-sm-4 col-xs-3"></div>
      				<div className="col-md-8 col-sm-4 col-xs-6">
      					<a href="#"><img src="./images/Drent-logo-white.png" style={{width: '100%'}}/></a>
      				</div>
      				<div className="col-md-2 col-sm-4 col-xs-3"></div>
      			</div>
      			<div className="row">
      				<div className="col-md-4 col-sm-4 col-xs-2"></div>
      				<div className="col-md-4 col-sm-4 col-xs-8">
      					<h3 style={{color: '#ffffff',textAlign: 'center'}}>Sign In</h3>
      				</div>
      				<div className="col-md-4 col-sm-4 col-xs-2"></div>
      			</div>

      			
				<div className="row">
					<div className="col-md-2 col-sm-3 col-xs-2"></div>
					<div className="col-md-8 col-sm-6 col-xs-8 get_form_inner">
		    			<form name="registerForm" method="post" action="">
                			<div className="group">
				    			<input type="email" placeholder="Email" name="Email" required=""></input>
		                    	<span className="smessage"></span>
		                    	<span className="highlight"></span>
		                    </div>
													
							<div className="group">
								<input type="password" name="password" placeholder="Password" required="required"></input>
								<input type="hidden" name="profile" value="Trainer"></input>	
		                    	<span className="highlight"></span>
		                	</div>
		                </form>
					</div>
					<div className="col-md-2 col-sm-3 col-xs-2"></div>
				</div>
			
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-3"></div>
					<div className="col-md-4 col-sm-4 col-xs-6" style={{textAlign: 'center'}}>
						<button type="submit" className="login">Login</button>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-3"></div>
				</div><br/><br/><br/>

				<div className="row">
					<div className="col-md-2 col-sm-2 col-xs-1"></div>
					<div className="col-md-8 col-sm-8 col-xs-10" style={{textAlign: 'center'}}>
						<button className="loginBtn loginBtn--facebook">
  							Login with Facebook
						</button>

						<button class="loginBtn loginBtn--google">
						  Login with Google
						</button>
					</div>
					<div className="col-md-2 col-sm-2 col-xs-1"></div>
				</div>

				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<h3 style={{color: '#ffffff', textAlign: 'center'}}>Create an Account</h3>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
      	</div>
    );

  }
}

export default SignIn;