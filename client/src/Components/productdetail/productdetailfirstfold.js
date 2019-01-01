import React, { Component } from 'react';
import Header from '../home/Header';
import Headingf8 from '../home/headingf8';
import Secondfold from './productdetailsecondfold';
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


						{/*div 3 desktop images*/}

                        {/*div single middle image desktop*/}

						<div className="col-md-7 hidden-xs hidden-sm">
							<div className="row">
								<div  className="col-md-3 hidden-xs hidden-sm">
								
									<img src="../images/productdetail/eid.jpeg" style={{width:"100%", height:"230px"}}/><br/>
									<img src="../images/productdetail/bridal 22.jpeg" style={{width:"100%", height:"230px"}}/><br/>
									<img src="../images/productdetail/bridal2.jpeg" style={{width:"100%", height:"230px"}}/>

								</div>
								<div className="col-md-9">
									<img src="../images/productdetail/bridal.jpeg" style={{width:"100%", height:"875px"}}/>
								</div>
							</div>
                            	<br/><br/><br/>
                            		<h4>Measurements</h4>

                             	     <table className="table table-bordered">
									    <thead>
									      <tr>
									        <th>Size</th>
									        <th>Bust</th>
									        <th>Hip</th>
									        <th>Waist</th>
									        <th>Front length</th>
									        <th>Back length</th>
									      </tr>
									    </thead>
									    <tbody>
									      <tr>
									        <td>Small</td>
									        <td>34<sup>o</sup></td>
									        <td>40<sup>o</sup></td>
									        <td>26<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									      </tr>
									      <tr>
									        <td>Medium</td>
									        <td>36<sup>o</sup></td>
									        <td>42<sup>o</sup></td>
									        <td>28<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									      </tr>
									      <tr>
									        <td>Large</td>
									        <td>38<sup>o</sup></td>
									        <td>46<sup>o</sup></td>
									        <td>30<sup>o</sup></td>
									        <td>59<sup>o</sup></td>
									        <td>59<sup>o</sup></td>
									      </tr>
									    </tbody>
									  </table>

									<p className="glass">Our Model,lolly is 5'9" and wear a size small.She Has a 32<sup>o</sup> bust
									,24<sup>o</sup> Waist and 33<sup>o</sup> hips</p>    
						</div> 

					   {/*div single middle image desktop*/}


					    {/*Mobile and tab single image div*/}

						<div className="row visible-sm visible-xs">

								<div className="visible-sm visible-xs col-sm-12 col-xs-12">
									<img src="../images/productdetail/bridal.jpeg" style={{width:"100%", height:"100%"}}/>
								</div>

						</div><br/>{/*mobile & tab div close*/}


                        {/*mobile & tab 3 images div*/}

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

						</div>{/*mobile & tab 3 images div close*/}


				<div className="col-md-5">{/*/*main col-md-5 right possion div deskstop*/}

						    <div>
								 <font color="#c2073f"><h1 style={{fontFamily:"Qwigley",fontSize: "70px"}}>Pink Sharara</h1></font>
								 <p style={{marginTop:"-20px"}}>Red Heavy Embriodered Bridal <br/> Lehenga Choli With Dupatta
                                 </p>
                            </div>{/* div close*/}

						<div className="row">
							<div className="col-md-12">

								    <div className="col-md-4">
								      <font color="#c2073f"><h1 style={{fontFamily :"Qwigley"}}>wedding</h1></font> 
								    </div>{/*div close*/}

								    <div className="col-md-2">
			                        {/*empty div*/} 
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

	                       	 			</div>{/*inner row close*/}
	                       	 		</div>{/*Div close*/}	

		                    </div>{/*Div Close Col-md-12*/}	

						</div>{/*Row Close*/}
                                  

                            <div className="row">
                              		<div className="col-md-12">

                                  			<div className="col-md-3">
                                            	<h3>$5999.99</h3>
                                  			</div>

                                  			<div className="col-md-3 name">
                                            	<p><span className="hello">Rental Price</span></p>
                                  			</div>

                                   			<div className="col-md-3">
                                            	{/*empty div*/}
                    						</div>

                                  			<div className="col-md-3">
                                  		   	 	{/*empty div*/}
                                  			</div>

                              		</div>{/*div col-md-12 Close*/}
                            </div>{/*Row Close*/}


                            <div className="row">
                                	<div className="col-md-12">

                                	 	<div className="col-md-6 detail">
                                	 		<h1>Description</h1>
                                	 	</div>

                                	 	<div className="col-md-6">
                                	 	{/*Empty Div*/}
                                	 	</div>

                                	</div>{/*Row Col-md-12 Close*/}
                            </div>{/*Row Close*/}
			                    
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

		                   			</div>{/*Div col-md-12 Close*/}

				        	</div>{/*Row Close*/}
                            

				        	<div className="row">

				        		<div className="fly"><h1>Size Available</h1></div>

				        	</div>{/*Div Row Close*/}

				        	{/*sizes of Deskstop*/}
                            <div className="row">

  								<div className="col-md-12 hidden-xs hidden-sm round">
  									<div className="col-md-2"></div>
                            		<div className="col-md-2 flu"><h3>S</h3></div>
                            		<div className="col-md-1"></div>
                            		<div className="col-md-2 flu"><h3>M</h3></div>
                            		<div className="col-md-1"></div>
                            		<div className="col-md-2 flu"><h3>L</h3></div>
                            		<div className="col-md-2"></div>
                            	</div>

                            </div>{/*Div Row Close*/}

                        	{/*Sizes For XS*/}
                            <div className="row">

  								<div className="visible-xs">
  									<div className="col-xs-0"></div>
                            		<div className="col-xs-2 flu"><h3>S</h3></div>
                            		<div className="col-xs-1"></div>
                            		<div className="col-xs-2 flu"><h3>M</h3></div>
                            		<div className="col-xs-1"></div>
                            		<div className="col-xs-2 flu"><h3>L</h3></div>
                            		<div className="col-xs-2"></div>
                            	</div>

                            </div>{/*Row Div Close*/}

                            {/*Sizes For SM*/}
                            <div className="row">

  								<div className="visible-sm">
  									<div className="col-sm-2"></div>
                            		<div className="col-sm-2 fluu"><h3>S</h3></div>
                            		<div className="col-sm-2"></div>
                            		<div className="col-sm-2 fluu"><h3>M</h3></div>
                            		<div className="col-sm-2"></div>
                            		<div className="col-sm-2 fluu"><h3>L</h3></div>
                            		<div className="col-sm-0"></div>
                            	</div>

                            </div>{/*Row Div Close*/}

                            <div className="row">
                            	
                            		<div className="col-md-2 detail1"><h1>Detail</h1></div>
                            		<div className="col-md-5"></div>
                            		<div className="col-md-5"></div>

                            </div>{/*detail Row Closed*/}

                            <div className="row">
                            	<div className="col-md-5">
                            	 <ul>
                            	 <li>Party Wear</li>
                            	 </ul>
                            	</div>
                            	<div className="col-md-6">
                                <ul>
                                <li>Comfort Fabric</li>
                                </ul>
                            	</div>

                            </div>{/*Div List Row Closed*/}
                            
                            <div className="row">
                            	<div className="col-md-5">
                            	 <ul>
                            	 <li>Fish Tail</li>
                            	 </ul>
                            	</div>
                            	<div className="col-md-6">
                                <ul>
                                <li>More Detail</li>
                                </ul>
                            	</div>

                            </div>{/*Div List Row Closed*/}


                            <div className="row">
                            	<div className="rental1"><h1>Rental Period</h1></div>
                            </div>{/*Div Row Closed*/}

                            <div className="row">
	                            	<div className="col-md-4">
	                            		<label className="container">
	                                      	<input type="checkbox"/>
	                                      		<span className="checkmark"></span>
	                                      	<h4>3 Days</h4>
	                                    </label>
	                            	</div>{/*Col-md-6 div close*/}

	                            	<div className="col-md-6">
	                            		<label className="container">
	                                      	<input type="checkbox"/>
	                                      		<span className="checkmark"></span>
	                                      	<h4>6 Days</h4>
	                                    </label>
	                            	</div>{/*Col-md-6 div close*/}

                            </div>{/*Row Closed*/}


                            <div className="row">
                            	<div className="col-md-12 hidden-xs hidden-sm sams">
                            		<div className="col-md-10"><h4>Occasion Date</h4></div>
                            		<div className="col-md-1 sand"><i class="fa fa-calendar sam"></i></div>
                            		<div className="col-md-1"></div>
                            	</div>
                            </div>{/*Row Closed*/}

                            <div className="row">
                            	<div className="visible-xs sams">
                            		<div className="col-xs-10"><h4>Occasion Date</h4></div>
                            		<div className="col-xs-1 suum"><i class="fa fa-calendar sam"></i></div>
                            		<div className="col-xs-1"></div>
                            	</div>
                            </div>{/*Row Closed*/}

                            <div className="row">
                            	<div className="visible-sm sams">
                            		<div className="col-sm-10"><h4>Occasion Date</h4></div>
                            		<div className="col-sm-1 "></div>
                            		<div className="col-sm-1 sum"><i class="fa fa-calendar sam"></i></div>
                            	</div>
                            </div><br/>{/*Row Closed*/}

                            <div className="row">
                            <button type="button" className="btn bravoo"><h1>Rent Now</h1></button>
                            </div>

                            <div className="visible-sm visible-xs">
                            	<div style={{overflowX:'auto'}}>
                            		<table className="table table-bordered">
									    <thead>
									      <tr>
									        <th>Size</th>
									        <th>Bust</th>
									        <th>Hip</th>
									        <th>Waist</th>
									        <th>Front length</th>
									        <th>Back length</th>
									      </tr>
									    </thead>
									    <tbody>
									      <tr>
									        <td>Small</td>
									        <td>34<sup>o</sup></td>
									        <td>40<sup>o</sup></td>
									        <td>26<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									      </tr>
									      <tr>
									        <td>Medium</td>
									        <td>36<sup>o</sup></td>
									        <td>42<sup>o</sup></td>
									        <td>28<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									        <td>57<sup>o</sup></td>
									      </tr>
									      <tr>
									        <td>Large</td>
									        <td>38<sup>o</sup></td>
									        <td>46<sup>o</sup></td>
									        <td>30<sup>o</sup></td>
									        <td>59<sup>o</sup></td>
									        <td>59<sup>o</sup></td>
									      </tr>
									    </tbody>
									  </table>
								</div>

								<p className="glass">Our Model,lolly is 5'9" and wear a size small.She Has a 32<sup>o</sup> bust
									,24<sup>o</sup> Waist and 33<sup>o</sup> hips</p>
									
                            </div>{/*div close of visible-sm visible-xs*/}

			    </div>{/*main col-md-5 right possion div deskstop*/}

			</div>{/*main row*/}
		</div>{/*main container div*/}

			<Secondfold/>


			<Headingf8/>
		    </div>

    );

  }
}

export default Productdetailfirstfold;
