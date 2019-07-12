import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './home.css';
import { isMobileOnly, isTablet } from "react-device-detect";

class Heading4 extends Component {
  render() {

  	const { label, hrLine, data, showEditDelete, onDelete, profile, userAvailable, showDropdown,showonhome } = this.props;

    return (
    	<div className="col-md-12 App">
    		<div className="row feat">
				<p className={`${this.props.featureFilter}`}>FEATURED</p>
			</div>
    		{label && label.length > 0 && <div className="Heading col-md-9 col-sm-10">
      			<h1 className={`${this.props.headLable}`}>&nbsp;&nbsp;{label}</h1>
      		</div>}
    		<div className="col-md-3 col-sm-2 row">
    			{showonhome && <div className="dropdown" style={{marginTop: '20px', marginBottom:'20px'}}>

					<button className="btn dropdown-toggle cloth" type="button" data-toggle="dropdown">Sort by...
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
					<span className="down"><i className="down"></i></span></button>
					<ul class="dropdown-menu cloth1">
				    	<li className="cloth2"><a href="#" className="cloth3">Latest</a></li>
				    	<li className="cloth2"><a href="#" className="cloth3">highest rating</a></li>
				    	<li className="cloth2"><a href="#" className="cloth3">Price: Low to high</a></li>
				    	<li className="cloth2"><a href="#" className="cloth3">Price: High to low</a></li>
				    </ul>
				</div>}
    		</div>

	    		<div className="container-fluid">
	    			<div className="col-md-12 col-sm-12 col-xs-12">
	    				<div className={`row ${this.props.rowmainmargin}`}>
	    					{data && data.map((elem, key) => {
	    						// console.log(elem,'elem')
	    						return(
	    							<div className={`col-xs-6 col-sm-3 relat ${this.props.tpmrgin} ${this.props.colLg} ${this.props.margBotom}`}>
			    						<Link key={key} to={{pathname: `/detail`, state: {elem, data}}}>
			    							<div className={`${this.props.hoVerUp}`}>
			    								<div className="shadow_head">
				    							<img src={elem.fileList[0]} className="imgwidth"/>	
				    							</div>
				    							<div className={`${this.props.imgtextstyle}`}>
							    					
							    				</div>
							    			</div>
							    			<div className={`${this.props.alignRoww}`} style={{margin:'0px'}}>
			    								<div className={`${this.props.colLgMd} ${this.props.styClass}`}>
			    									<br/>
		    										<p className={`${this.props.imgheadtext}`}>{elem.productName}</p>
							    					<p className={`${this.props.imgSmalltext}`}>$ {" " + elem.priceDay}</p>
			    								</div>
	    									</div>	
		    							</Link>
	    								{/*<div>
	    									{showEditDelete && userAvailable && <div className="row">
		    									<div className="col-md-6 col-xs-6">
		    										<Link to={{pathname: `/userdetail`, state: {goTo: 'uploadDress', elem, profile}}}>
		    											<h2 className="h_btn">Edit</h2>
		    										</Link>
		    									</div>
		    									<div className="col-md-6 col-xs-6">
		    										<h2 className="h_delet" onClick={() => onDelete(elem)}>Delete</h2>
		    									</div>
		    								</div>}
		    								<h2 className="h_dress" style={isMobileOnly ? {width:this.props.widthProps} : {width:''}}>{elem.productName}</h2>
		    								<h3 className="h_dress tophead" style={isMobileOnly ? {width:this.props.widthProps} : {width:''}}>{elem.detailName}</h3>
		    								<h3 className="h_dress tophead" style={isMobileOnly ? {width:this.props.widthProps} : {width:''}} >$ {" " + elem.priceDay}</h3>
		    							</div>*/}
			    					</div>
			    					
	    						)
	    					})}
	    				</div>
	    			</div>
	    		</div><br/><br/>
	    		<div className="container hidden-xs">
	    			<div className="row">
	    				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	    					<img src="../images/arrow.png" className={`${this.props.featureArrow}`}/>
	    				</div>
	    				<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
	    					<Link to={`/product`}><p className={`${this.props.featText}`}>SHOW ALL FEATURED DRESSES</p></Link>
	    				</div>
	    			</div>
	    		</div><br/><br/><br/><br/>	
    	</div>
    );

  }
}

export default Heading4;
