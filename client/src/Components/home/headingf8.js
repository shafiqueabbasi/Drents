import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './headingf8.css';

class Headingf8 extends Component {
    state = {
        showFooter: false
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.showFooter !== prevProps.showFooter){
            this.setState({ showFooter: this.props.showFooter})
        }
    }

  render() {

    return (
    	<div>
    		<div className="hidden-xs">
    			<div id="footer" style={this.state.showFooter ? {position: "fixed"} : {}}>
    				<div className="col-md-12 col-sm-12 bgc">
    					<div className="col-md-1 "></div>

                        <div className="col-md-3 col-sm-4">
    						<ul className="ul_list">
                                <h4 className="footer_h3">Quick links</h4>
                                <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>HOME</a></li>
                                <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>PRODUCT</a></li>
                                <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>TESTIMONIALS</a></li>
                                <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>MY PROFILE</a></li>
                            </ul>
    					</div>

                        <div className="col-md-4 col-sm-4" style={{color: '#ffffff'}}>
    						<h4 className="footer_h3">Social Media</h4>
                            <ul className="list-unstyled list-inline social">
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-google-plus-g"></i></a></li>
                            </ul>
    				    </div>

                        <div className="col-md-4 col-sm-4" style={{color: '#ffffff'}}>
    						<a href="#"><img src="../images/Drent-logo-white.png" style={{width: '62%'}}/></a>
    					</div>
                        <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center"style={{color: '#ffffff'}}>
                    <p className="h6 text-white">© Copy All right Reversed.<a className="text-green ml-2" href="https://www.krlcreatives.com" target="_blank">Drent</a></p>
                </div>

            </div>
    				</div>

    			</div>

    		</div>


            <div className="visible-xs">
                <div className="footer" style={{width:'100%'}}>
                    <div className="col-xs-12 bgc">
                        <div className="col-xs-2"></div>
                            <div className="row">
                                <div className="col-xs-7">
                                <ul className="ul_list">
                                    <h3 className="footer_h3">Quick links</h3>
                                    <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>HOME</a></li>
                                    <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>PRODUCT</a></li>
                                    <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>TESTIMONIALS</a></li>
                                    <li><a href="javascript:void();" className="li_list"><i className="fa fa-angle-double-right"></i>MY PROFILE</a></li>
                                </ul>
                                </div>
                            </div>

                            <div className=" row" style={{fontSize:'10px'}}>
                                <div className="col-xs-2"></div>
                                <div className="col-xs-9">
                                    <h3 className="footer_h3">Social Media</h3>
                                    <ul className="list-unstyled list-inline social">
                                        <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fab fa-pinterest"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void();"><i className="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="col-xs-4"></div>
                        <div className="col-xs-4">
                            <a href="#"><img src="../images/Drent-logo-white.png" style={{width: '120%'}}/></a>
                        </div>
                        <div className="col-xs-12 text-center"style={{color: '#ffffff'}}>
                            <p className="h6 text-white">© Copy All right Reversed.<a className="text-green ml-2" href="https://www.krlcreatives.com" target="_blank">Drent</a></p>
                        </div>
                    </div>
                </div>
            </div>


    	</div>
    );

  }
}

export default withRouter(Headingf8);
