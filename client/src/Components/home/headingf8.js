import React, { Component } from 'react';
import './headingf8.css';

class Headingf8 extends Component {
  render() {
    
    return (
    	<div>
    		<div className="hidden-xs">
    			<div id="footer">
    				<div className="col-md-12 col-sm-12 bgc">
    					<div className="col-md-1 "></div>
    					<div className="col-md-3 col-sm-4">
    						<ul class="ul_list">
                                <h3 className="footer_h3">Quick links</h3>
                                <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>HOME</a></li>
                                <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>PRODUCT</a></li>
                                <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>TESTIMONIALS</a></li>
                                <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>MY PROFILE</a></li>
                            </ul>
    					</div>
    					<div className="col-md-4 col-sm-4" style={{color: '#ffffff'}}>
    						<h3 className="footer_h3">Social Media</h3>
                            <ul class="list-unstyled list-inline social">
                                <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fab fa-pinterest"></i></a></li>
                                <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-google-plus-g"></i></a></li>
                            </ul>
    				    </div>
    					<div className="col-md-4 col-sm-4" style={{color: '#ffffff'}}>
    						<a href="#"><img src="./images/Drent-logo-white.png" style={{width: '100%'}}/></a>
    					</div>
    				</div>
    			</div>
    		</div>

            <div className="visible-xs">
                <div className="footer">
                    <div className="col-xs-12 bgc">
                        <div className="col-xs-2"></div>
                            <div className="row">
                                <div className="col-xs-7">
                                <ul class="ul_list">
                                    <h3 className="footer_h3">Quick links</h3>
                                    <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>HOME</a></li>
                                    <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>PRODUCT</a></li>
                                    <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>TESTIMONIALS</a></li>
                                    <li><a href="javascript:void();" className="li_list"><i class="fa fa-angle-double-right"></i>MY PROFILE</a></li>
                                </ul>
                                </div>
                            </div>
                                
                            <div className=" row" style={{fontSize:'10px'}}>
                                <div className="col-xs-2"></div>
                                <div className="col-xs-9">
                                    <h3 className="footer_h3">Social Media</h3>
                                    <ul class="list-unstyled list-inline social">
                                        <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fab fa-pinterest"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-instagram"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="col-xs-4"></div>
                        <div className="col-xs-4">
                            <a href="#"><img src="./images/Drent-logo-white.png" style={{width: '120%'}}/></a>
                        </div>
                    </div>
                </div>
            </div>
            

    	</div>
    );

  }
}

export default Headingf8;