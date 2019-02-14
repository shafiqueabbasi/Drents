import React, { Component } from 'react';

class App extends Component {  
  render() {
    return (
      <div className="App">
         
         <div className="container">
           <div className="col-md-12">
              <hr/>
            </div>{/*Div closed horzontil line*/}
            <div className="row derr">
                <h1 className="headings">You May Also Like</h1>
                <img src="../images/bar.png"/> 
            </div>{/*div row closed of heading*/}
              <div className="row" style={{textAlign:'center'}}>
                  <div className="col-md-12">
                       <div className="col-md-4">
                          <img src="../images/productdetail/eid.jpeg" style={{height:"386px"}}/>
                              <h2 className="h_dress" style={{color:"#c2073f"}}>Bridal Red Lehenga</h2>
                              <h3 className="h_dress">Best Trim Shirts</h3>
                              <h3 className="h_dress">$ 400</h3>
                       </div>
                       <div className="col-md-4">
                          <img src="../images/productdetail/bridal 22.jpeg" style={{ height:"386px"}}/>
                              <h2 className="h_dress" style={{color:"#c2073f"}}>Bridal Red Lehenga</h2>
                              <h3 className="h_dress">Best Trim Shirts</h3>
                              <h3 className="h_dress">$ 400</h3>
                       </div>
                       <div className="col-md-4">
                          <img src="../images/productdetail/bridal2.jpeg" style={{ height:"387px"}}/>
                              <h2 className="h_dress" style={{color:"#c2073f"}}>Bridal Red Lehenga</h2>
                              <h3 className="h_dress">Best Trim Shirts</h3>
                              <h3 className="h_dress">$ 400</h3>
                       </div>
                  </div>{/*Div Closed Of Col -Md - 12*/}       
              </div>{/*Div Row Closed*/}

              <div className="col-md-12">
                <hr/>
              </div>{/*Div closed horzontil line*/}

              <div className="row derr">
                <h1 className="headings">More Of Weddings</h1>
                <img src="../images/bar.png"/> 
              </div>{/*div row closed of heading*/}  

              <div className="row" style={{textAlign:'center'}}>
                  <div className="col-md-12">
                       <div className="col-md-4">
                          <img src="../images/productdetail/eid.jpeg" style={{height:"386px"}}/>
                              <h2 className="h_dress" style={{color:"#c2073f"}}>Bridal Red Lehenga</h2>
                              <h3 className="h_dress">Best Trim Shirts</h3>
                              <h3 className="h_dress">$ 400</h3>
                       </div>
                       <div className="col-md-4">
                          <img src="../images/productdetail/bridal 22.jpeg" style={{height:"386px"}}/>
                              <h2 className="h_dress" style={{color:"#c2073f"}}>Bridal Red Lehenga</h2>
                              <h3 className="h_dress">Best Trim Shirts</h3>
                              <h3 className="h_dress">$ 400</h3>
                       </div>
                       <div className="col-md-4">
                          <img src="../images/productdetail/bridal2.jpeg" style={{height:"387px"}}/>
                              <h2 className="h_dress" style={{color:"#c2073f"}}>Bridal Red Lehenga</h2>
                              <h3 className="h_dress">Best Trim Shirts</h3>
                              <h3 className="h_dress">$ 400</h3>
                       </div>
                  </div>{/*Div Closed Of Col -Md - 12*/}       
              </div>{/*Div Row Closed*/}

              <div className="row derr">
                <h1 className="headings">Comment & Reviews</h1>
                <img src="../images/bar.png"/>  
              </div>{/*div row closed of heading*/} 

              
              <div className="row dell hidden-xs hidden-sm">
                <div className="container" style={{padding:"22px"}}>
                  <div className="col-md-12">
                    <div className="col-md-3">
                      <h4 className="tissue">Alacia Deccel</h4><br/>
                      <div className="row">
                          <div className="col-md-7">
                            <p className="tissue">Size worn:<br/>Rented For:</p>
                          </div>
                          <div className="col-md-3">
                            <p><span className="dec">8R</span><br/><span className="dec">Party</span></p>
                          </div>
                      </div><br/>
                      <p className="tissue">More Detail</p>

                    </div>{/*Col md 3 close*/}
                    <div className="col-md-6 tissue2">
                      <div className="row">
                        <div className="col-md-6 sung" >
                          <i class="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <span style={{marginLeft:"10px"}}><sub className="dar">5.0</sub></span>
                        </div>
                        <div className="col-md-6 sung"><span>Datee of Review</span></div>
                      </div><br/><br/>{/*Inner Row Closed*/}

                      <div className="row">
                        <div className="col-md-6 sungg">
                          <h4>Stunning I enjoyed</h4>
                        </div>
                      </div>{/*inner row*/}
                       <br/><br/>
                       <p className="sung">Lorem ipsum dolor sit amet, in vis illud zril theophrastus. 
                              Eu periculis conceptam duo, quo ad eripuit invidunt persecuti.
                              Possit scaevola mediocritatem has ei,
                              possim mandamus omittantur pro et, an alii idque ornatus eam.
                              Lucilius invenire salutatus per eu.</p>
                    </div>
                    <div className="col-md-3 shift">
                        <img src="../images/productdetail/bridal2.jpeg" style={{width:"90%" , height:"387px"}}/>
                    </div>{/*Col md 3 close*/}                
                  </div>{/*col-md-12 closed*/}
                </div>{/*Main Row Div container Closed*/}
              </div>{/*Main Row closed*/}
              <br/>
              


              {/*First Panel for Mobile and Tab*/}
              <div className="row action visible-sm visible-xs">
                <div className="container">
                  <div className="row">
                    <h4 className="sungg">Alacia Deccel</h4><br/>
                     <div className="row">
                        <div className="col-sm-6 col-xs-6">
                          <p className="tissue">Size worn:<br/>Rented For:</p>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                          <p><span className="dec">8R</span><br/><span className="dec">Party</span></p>
                        </div>
                     </div><br/>

                    <div className="row">
                      <div className="col-sm-6 col-xs-6">
                        <div className="derr">
                          <i class="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <span style={{marginLeft:"10px"}}><sub className="dar">5.0</sub></span>
                        </div><br/>     
                        <div className="sungg">
                          <h4>Stunning I enjoyed</h4>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="col-md-6 sung"><span>Datee of Review</span></div>
                      </div><br/><br/><br/>
                      <div className="row"><br/><br/>
                        <div className= "container-fluid point">
                          <p className="point">Lorem ipsum dolor sit amet, in vis illud zril theophrastus.
                              Eu periculis conceptam duo, quo ad eripuit invidunt persecuti.
                              Possit scaevola mediocritatem has ei,
                              possim mandamus omittantur pro et, an alii idque ornatus eam.
                              Lucilius invenire salutatus per eu.</p>
                        </div>      
                      </div><br/>{/*row closed*/}
                      <div className="row derr">
                        <img src="../images/productdetail/bridal2.jpeg" style={{ height:"290px"}}/> 
                      </div>  
                    </div>{/*Row Closed*/}
                  </div>{/*row closed*/}
                </div>{/*main container row closed*/}
              </div>{/*Main row Closed*/}

              {/*second panel*/}

              <div className="row dell hidden-xs hidden-sm">
                <div className="container" style={{padding:"22px"}}>
                  <div className="col-md-12">
                    <div className="col-md-3">
                      <h4 className="tissue">Name</h4><br/>
                        <div className="row">
                          <div className="col-md-7">
                            <p className="tissue"></p>
                          </div>
                          <div className="col-md-3">
                            
                          </div>
                      </div><br/>
                         <p className="tissue">More Detail</p>

                    </div>{/*Col md 3 close*/}
                    <div className="col-md-6 tissue2">
                      <div className="row">
                        <div className="col-md-6 sung" >
                          <i class="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <span style={{marginLeft:"10px"}}><sub className="dar">Rating</sub></span>
                        </div>
                        <div className="col-md-6 sung"><span>Datee of Review</span></div>
                      </div><br/><br/>{/*Inner Row Closed*/}

                      <div className="row">
                        <div className="col-md-6 sungg">
                          <h4>Stunning I enjoyed</h4>
                        </div>
                      </div>{/*inner row*/}
                       <br/><br/>
                       <div className="container-fluid" >
                       <p className="sung">
                       Lorem ipsum dolor sit amet, in vis illud zril theophrastus. 
                        Eu periculis conceptam duo, quo ad eripuit invidunt persecuti.
                        Possit scaevola mediocritatem has ei,
                      possim mandamus omittantur pro et, an alii idque ornatus eam.
                      Lucilius invenire salutatus per eu.</p>
                      </div>
                    </div>
                    <div className="col-md-3 shift">
                        
                    </div>{/*Col md 3 close*/}                
                  </div>{/*col-md-12 closed*/}
                </div>{/*Main Row Div container Closed*/}
              </div>{/*Main Row closed*/}
              <br/>

              {/*Second Panel For Mobile And TabS*/}

              <div className="row reaction visible-sm visible-xs">
                <div className="container">
                  <div className="row">
                    <h4 className="spoon">Name</h4><br/>
                     <div className="row">
                        <p className="spoon">More Detail</p>
                     </div><br/>

                    <div className="row">
                      <div className="col-sm-6 col-xs-6">
                        <div className="derr">
                          <i class="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <span style={{marginLeft:"10px"}}><sub className="dar">Rating</sub></span>
                        </div><br/>     
                        <div className="sungg">
                          <h4>Stunning I enjoyed</h4>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="col-md-6 sung"><span>Datee of Review</span></div>
                      </div><br/><br/>
                      <div className="row"><br/><br/>
                        <div className="container-fluid point"><br/><br/>
                          <p className="point">Lorem ipsum dolor sit amet, in vis illud zril theophrastus.
                              Eu periculis conceptam duo, quo ad eripuit invidunt persecuti.
                              Possit scaevola mediocritatem has ei,
                              possim mandamus omittantur pro et, an alii idque ornatus eam.
                              Lucilius invenire salutatus per eu.</p>
                        </div>      
                      </div><br/>{/*row closed*/}
                  
                    </div>{/*Row Closed*/}
                  </div>{/*row closed*/}
                </div>{/*main container row closed*/}
              </div>{/*Main row Closed*/}
              <br/>


              <div className="row mouse">
                <div className="container" style={{padding:"22px"}}>
                  <div className="col-md-12">
                    <div className="col-md-9 dec">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="contain"><span className="hell5">Name:</span></label>
                            <input className="form-control" type="text"/>
                          </div>
                          <div className="form-group">
                            <label for="contain"><span className="hell5">Size Worn:</span></label>
                            <input className="form-control" type="text"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="contain"><span className="hell5">Email:</span></label>
                            <input className="form-control" type="text"/>
                          </div>
                          <div className="form-group">
                            <label for="contain"><span className="hell5">Wearing In:</span></label>
                            <input className="form-control" type="text"/>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea3"><span className="hell5">Message</span></label>

                          <textarea class="form-control position3" id="exampleFormControlTextarea3" style={{width:'96%'}}>
                          </textarea>



                      </div>

                        <div className="col-md-10"></div>
                        <div className="col-md-2" style={{marginTop:'39px'}}>
                          <button type="button" className="btn buttonpost absolute3"><span className="poststyle">Post</span></button>
                       
                      </div>

                     

                    </div>{/*Col md  closed*/}

                    <div className="col-md-0"></div>

                    {/* Col md 4 Star Session for deskstop*/}

                    <div className="col-md-3 dec">
                      <div className="row ronin">
                        
                          <div className="col-md-6 col-xs-6 starright">
                           <i class="fa fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                          </div>
                          
                        <div className="col-md-6 col-xs-6" style={{padding: '0'}}>
                          <h5>Your Rating</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-2 col-sm-2 col-xs-2"></div>
                          <div className="col-md-7 col-sm-8 col-xs-2" style={{borderBottom: '1px solid black' , width:'63%'}}></div>
                          <div className="col-md-3 col-sm-2 col-xs-2"></div>
                        </div>  
                        
                          <div className="col-md-6 col-xs-6 starright">
                            <i class="fas fa-star checked dell3"></i>
                            <i class="fas fa-star checked dell3"></i>
                            <i class="fas fa-star checked dell3"></i>
                            <i class="fas fa-star checked dell3"></i>
                            <i class="fas fa-star checked dell3"></i>
                          </div>  
                          <div className="col-md-6 col-xs-6" style={{padding: '0'}}>
                            <h5>5.0 Stunner</h5>
                          </div>
                         
                          <div className="col-md-6 col-xs-6 starright">
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                          </div>
                          <div className="col-md-6 col-xs-6" style={{padding: '0'}}>
                            <h5>4.0 Good</h5>
                          </div>
                         
                          <div className="col-md-6 col-xs-6 starright">
                           <i class="fa fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                          </div>
                          <div className="col-md-6 col-xs-6" style={{padding: '0'}}>
                            <h5>3.0 Average</h5>
                          </div>
                        
                          <div className="col-md-6 col-xs-6 starright">
                           <i class="fa fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                          </div>
                          <div className="col-md-6 col-xs-6" style={{padding: '0'}}>
                            <h5>2.0 Okay</h5>
                          </div>
                        
                         
                          <div className="col-md-6 col-xs-6 starright">
                           <i class="fa fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                           <i class="fas fa-star checked dell3"></i>
                          </div> 
                          <div className="col-md-6 col-xs-6" style={{padding: '0'}}>
                            <h5>1.0 Bad</h5>
                          </div>
                          
                      </div>{/*Row closed*/}
                      <div className="row">
                      <div className="col-md-12 dam2" >
                        <h4>Upload Pictures Wearing </h4>
                      </div>
                      <div className="col-md-12" style={{backgroundColor: '#ffffff'}}>
                        <div className="col-md-7" style={{paddingRight:'0'}}><h6 style={{color: 'black', fontSize: '49%', marginTop: '10%',}}>File size not exceed from 1 MB</h6>
                        </div>
                        <label className="labelcustome" id="#bb" ><span className="dell5">Choose File</span>
                          <input type="file" id="File"   size="60" />
                        </label>
                      </div>
                      </div>
                    </div> {/* Col md 2 Star Session*/}    
                    


                  </div>{/*col md  closed*/}
                </div>{/*Whole Row Main Container Div*/}  
              </div>{/*Main Row Closed*/}
             <br/>

          </div>{/*Container Div Close*/}
        
      </div>
    );

  }
}

export default App;
