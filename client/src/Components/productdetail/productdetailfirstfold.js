import React, { Component } from 'react';
import Header from '../home/Header';
import Headingf8 from '../home/headingf8';
import './productdetail.css'

class Productdetailfirstfold extends Component {
	render() { 
		return( 
			<div className="App">
				<div className="">
					{/*<Header/>*/}
				</div>
				<div className="container" style={{marginTop:"130px"}} >
					<div className="row">
							<div className="col-md-2 hidden-xs hidden-sm">
								<img src="../images/productdetail/eid.jpeg" style={{width:"100%", height:"230px"}}/><br/>
								<img src="../images/productdetail/bridal 22.jpeg" style={{width:"100%", height:"230px"}}/><br/>
								<img src="../images/productdetail/bridal2.jpeg" style={{width:"100%", height:"230px"}}/>
							</div>
							<div className="col-md-5 hidden-xs hidden-sm">
                               <img src="../images/productdetail/bridal.jpeg" style={{width:"100%", height:"755px"}}/>
							</div>
							<div className="row visible-sm visible-xs">
								<div className="visible-sm visible-xs col-sm-12 col-xs-12">
									<img src="../images/productdetail/bridal.jpeg" style={{width:"100%", height:"100%"}}/>
								</div>
							</div><br/>
							<div className="row visible-sm visible-xs">
								<div className="col-sm-4 col-xs-4">
									<img src="../images/productdetail/eid.jpeg" style={{width:"100%", height:"230px"}}/>
								</div>
								<div className="col-sm-4 col-xs-4">
									<img src="../images/productdetail/bridal 22.jpeg" style={{width:"100%", height:"230px"}}/>
								</div>
								<div className="col-sm-4 col-xs-4">
									<img src="../images/productdetail/bridal2.jpeg" style={{width:"100%", height:"230px"}}/>
								</div>
							</div>
							<div className="col-md-5">
							    <div>
								 <font color="#c2073f"><h1 style={{fontFamily:"Qwigley",fontSize: "70px"}}>Pink Sharara</h1></font>
								 <p style={{marginTop:"-20px"}}>Red Heavy Embriodered Bridal <br/> Lehenga Choli With Dupatta
                                 </p>
                                 </div>
								<div className="row">
								 <div className="col-md-12">
								    <div className="col-md-4">
								      <font color="#c2073f"><h1 style={{fontFamily :"Qwigley"}}>wedding</h1></font>
								    </div>
								    <div className="col-md-2">
			                         
								    </div>
								    <div className="col-md-6" style={{marginTop: "18px"}}>
								    	<div className="row">
								    		<div className="col-md-8">
			                         			<i class="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
			                        			<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
			                        			<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
			                        			<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
			                        			<i class="fas fa-star-half-alt" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
			                        		</div>	
			                        		<div className="col-md-4">
			                        			<h4 style={{marginLeft:"0%"}}>4.5</h4>
			                       	 		</div>
			                        	</div>	
									</div>
                                  
                                <div className="row">
                                  	<div className="col-md-12">
                                  		<div className="col-md-3">
                                            <h3>$5999.99</h3>
                                  		</div>
                                  		<div className="col-md-3 name">
                                            <p><span className="hello">Rental Price</span></p>
                                  		</div>
                                   		<div className="col-md-3">
                    					</div>
                                  		<div className="col-md-3">
                                  		</div>
                                  	</div>
                                </div>


                                <div className="row">
                                	<div className="col-md-12">

                                	 	<div className="col-md-6 detail">
                                	 		<h1>Description</h1>
                                	 	</div>

                                	 	<div className="col-md-6">
                                	 	</div>

                                	</div>
                                </div>
			                    
			                    <div className="row">
			                     <div className="col-md-12 drn">
			                    	<p className="trend">Lorem Ipsum is simply dummy text of the 
			                        printing and typesetting industry.
			                        Lorem Ipsum has been the industry 
			                        dummy text ever since the ,
			                        when an unknown printer took a galley of type and 
			                        scrambled it to make a type specimen book. 
			                        It has survived not only five centuries,
			                        but also the leap into electronic typesetting,
			                        remaining essentially unchanged.</p>
			                   	</div>

						    </div>
						    </div>
								 
							    </div>
							</div>
						
					</div>
				</div>

			<Headingf8/>
		    </div>

    );

  }
}

export default Productdetailfirstfold;
