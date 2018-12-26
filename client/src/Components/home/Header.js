import React, { Component } from 'react';
import  './mobileheader.css';
class FirstPage extends Component {
  openNav = ()=>{
    document.getElementById("myNav").style.width = "100%";
  }
  closeNav = () =>{
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <div>
      	<div className="nav navbar navbar-fixed-top bgc hidden-xs">
      		<div className="container-fluid">
      			<div className="col-md-4">
      				<div className="navbar-header">
      					<a href="#"><img src="./images/Drent-logo-white.png" style={{width: '40%'}}/></a>
      				</div>
      			</div>
      		<div className="container-fluid">
      			<div className="col-md-8  container customhover">
      				<ul className="nav navbar-nav navbar-right customhover">
      					<li className="head"><a href="#" className="nav">HOME</a></li>
        				<li className="head"><a href="#" className="nav">PRODUCT</a></li>
        				<li className="head"><a href="#" className="nav">TESTIMONIALS</a></li>
        				<li className="head"><a href="#" className="nav">MY PROFILE</a></li>
                {this.props.displayIcon && <li className="head"><a href="#" className="nav"><img src="./images/bag.png" style={{marginTop:'-5px'}}/></a></li>}
      				</ul>
      			</div>
      		</div>
      		</div>
      	</div>

        
        
        <div id="myNav" className="overlay visible-xs" style={{background:'#c2073fcf'}}>
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <div className="overlay-content">
            <a href="#">HOME</a>
            <a href="#">PRODUCT</a>
            <a href="#">TESTIMONIALS</a>
            <a href="#">MY PROFILE</a>
          </div>
        </div>
        <div className="row visible-xs" style={{background:'#c2073f'}}>
          <div className="col-md-4 col-xs-4">
            <i onClick={this.openNav} className="fas fa-bars" style={{color:'white',marginLeft:'8px',fontSize:'24px',marginTop:'10px'}}></i>
          </div>
          <div className="col-md-4 col-xs-4">
              <img src="./images/Drent-logo-white.png" style={{width:'80%'}} />
          </div>
          <div className="col-md-4 col-xs-4">
            {/*<i class="fas fa-search"></i>*/}
          </div>
        </div>
      </div>
    );

  }
}

export default FirstPage;
