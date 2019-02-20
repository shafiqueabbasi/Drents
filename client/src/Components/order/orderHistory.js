import React, { Component } from 'react';

class OrderHistory extends Component {
  render() {
    const { orderhistory } = this.props.location.state;
    console.log(orderhistory, 'eeeeeeeeeeeeeeee')
    
    return (
      	<div>
      		<div className="row hidden-sm hidden-xs">
      			<div className="col-md-2">
      				<img src="./images/pinksharara.jpg" style={{width: '165px'}}/>
				    </div>
      			<div className="col-md-10">
      				<div className="row">
      					<div className="col-md-4">
      						<h1 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>Pink Sharara</h1>
      					</div>
      					<div className="col-md-2" style={{padding: '0px',marginTop: '2.5%',textAlign: 'left'}}>&emsp;&emsp;
                     		<i class="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star-half-alt" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    	</div>
                    	<div className="col-md-1" style={{padding:"0",marginTop: '2.5%'}}>
                    		<h4>4.5</h4>
                   	 	</div>
                    </div>
                    <div className="row">
                    	<div className="col-md-6">
                    		<h4 style={{color: '#070707'}}>Size: M</h4>
                    	</div>
                    	<div className="col-md-6"></div>
                    </div>
                    <div className="row">
                    	<div className="col-md-4"></div>
                    	<div className="col-md-8">
                    		<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>&nbsp;&nbsp;&nbsp;Rent Used & Returned Succesfully</h1>
                    	</div>
                    </div>
                    <div className="row">
                    	<div className="col-md-6">
                    		<h4 style={{color: '#070707'}}>$5999.99 X 3 Days=&emsp;9999.99 </h4>
                    	</div>
                    	<div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <hr className="hidden-xs hidden-sm" style={{borderTop:'2px solid #c2073f'}}/>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row hidden-sm hidden-xs">
      			<div className="col-md-2">
      				<img src="./images/pinksharara.jpg" style={{width: '165px'}}/>
				    </div> 
      			<div className="col-md-10">
      				<div className="row">
      					<div className="col-md-4">
      						<h1 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>Pink Sharara</h1>
      					</div>
      					<div className="col-md-2" style={{padding: '0px',marginTop: '2.5%',textAlign: 'left'}}>&emsp;&emsp;
                     		<i class="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    		<i class="fas fa-star-half-alt" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                    	</div>
                    	<div className="col-md-1" style={{padding:"0",marginTop: '2.5%'}}>
                    		<h4>4.5</h4>
                   	 	</div>
                    </div>
                    <div className="row">
                    	<div className="col-md-6">
                    		<h4 style={{color: '#070707'}}>Size: M</h4>
                    	</div>
                    	<div className="col-md-6"></div>
                    </div>
                    <div className="row">
                    	<div className="col-md-4"></div>
                    	<div className="col-md-8">
                    		<h1 style={{fontFamily: 'Qwigley',fontSize: '200%'}}>&nbsp;&nbsp;&nbsp;Rent Used & Returned Succesfully</h1>
                    	</div>
                    </div>
                    <div className="row">
                    	<div className="col-md-6">
                    		<h4 style={{color: '#070707'}}>$5999.99 X 3 Days=&emsp;9999.99 </h4>
                    	</div>
                    	<div className="col-md-6"></div>
                    </div>
                </div>
            </div>


            <div className="row visible-sm">
              <div className="row">
                <div className="col-sm-3">
                   <img src="./images/pinksharara.jpg" style={{width: '165px'}}/>
                </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-4">
                        <h2 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>Pink Sharara</h2>
                      </div>
                      <div className="col-sm-4" style={{padding: '0px',marginTop: '3.5%',textAlign: 'left'}}>&emsp;&emsp;&emsp;&emsp;
                        <i class="fas fa-star" style={{fontSize :"17px" , "color":'#FFC400'}}></i>
                        <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                        <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                        <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                        <i class="fas fa-star-half-alt" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                      </div>
                      <div className="col-sm-1" style={{padding:"0",marginTop: '3.5%'}}>
                        <h5>4.5</h5>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <h5 style={{color: '#070707'}}>Size: M</h5>
                        </div>
                        <div className="col-sm-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-7">
                          <h2 style={{fontFamily: 'Qwigley',fontSize: '130%'}}>&emsp;Rent Used & Returned Succesfully</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <h5 style={{color: '#070707'}}>$5999.99 X 3 Days=&emsp;9999.99</h5>
                        </div>
                        <div className="col-sm-6"></div>
                      </div>
                    </div>
                  </div>
                <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <hr className="hidden-xs" style={{borderTop:'2px solid #c2073f'}}/>
                </div>
                <div className="col-sm-2"></div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <img src="./images/pinksharara.jpg" style={{width: '165px'}}/>
                </div>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-sm-4">
                      <h2 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>Pink Sharara</h2>
                    </div>
                    <div className="col-sm-4" style={{padding: '0px',marginTop: '3.5%',textAlign: 'left'}}>&emsp;&emsp;&emsp;&emsp;
                      <i class="fas fa-star" style={{fontSize :"17px" , "color":'#FFC400'}}></i>
                      <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                      <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                      <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                      <i class="fas fa-star-half-alt" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
                    </div>
                    <div className="col-sm-1" style={{padding:"0",marginTop: '3.5%'}}>
                      <h5>4.5</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 style={{color: '#070707'}}>Size: M</h5>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-7">
                      <h2 style={{fontFamily: 'Qwigley',fontSize: '130%'}}>&emsp;Rent Used & Returned Succesfully</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 style={{color: '#070707'}}>$5999.99 X 3 Days=&emsp;9999.99 </h5>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
            </div>
        </div>
        <div className="row visible-xs">
          <div className="visible-xs ">
            <div className="col-xs-2"></div>
              <div className="col-xs-6">
                <img src="./images/pinksharara.jpg" style={{height: '240px'}}/>
              </div>
            </div>

            <div className="visible-xs col-xs-12">
              <div className="col-xs-2"></div>
              <div className="row">
              <div className="col-xs-"></div>
              <div className="col-xs-8">
                <h2 style={{fontFamily: 'Qwigley',fontSize: '42px'}}>Pink Sharara</h2>
              </div>
              <div className="col-xs-3"></div>
            </div>

            <div className="col-xs-3"></div>
            <div className="col-xs-4">
              <div className="row">
                <h5 style={{color: '#070707'}}>Size: M</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-7" style={{padding: '0px',marginTop: '3.5%',textAlign: 'left'}}>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fas fa-star" style={{fontSize :"17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star-half-alt" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
            </div>
            <div className="col-xs-5" style={{padding:"0",marginTop: '3.5%'}}>
              <h5>4.5</h5>
            </div>
          </div>
          <div className="row">
            <h2 style={{fontFamily: 'Qwigley',fontSize: '130%'}}>&emsp;Rent Used & Returned Succesfully</h2>
          </div>
          <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <h5 style={{color: '#070707'}}>$5999.99 X 3 Days=&emsp;9999.99 </h5>
            </div>
            <div className="col-xs-2"></div>
          </div>
          <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <hr style={{borderTop:'2px solid #c2073f'}}/>
            </div>
            <div className="col-xs-2"></div>
          </div>

           <div className="visible-xs">
            <div className="col-xs-2"></div>
              <div className="col-xs-6">
                <img src="./images/pinksharara.jpg" style={{height: '240px'}}/>
              </div>
            </div>

            <div className="visible-xs col-xs-12">
              <div className="col-xs-2"></div>
              <div className="row">
              <div className="col-xs-"></div>
              <div className="col-xs-8">
                <h2 style={{fontFamily: 'Qwigley',fontSize: '42px'}}>Pink Sharara</h2>
              </div>
              <div className="col-xs-3"></div>
            </div>

            <div className="col-xs-3"></div>
            <div className="col-xs-4">
              <div className="row">
                <h5 style={{color: '#070707'}}>Size: M</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-7" style={{padding: '0px',marginTop: '3.5%',textAlign: 'left'}}>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fas fa-star" style={{fontSize :"17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
              <i class="fas fa-star-half-alt" style={{fontSize : "17px" , "color":'#FFC400'}}></i>
            </div>
            <div className="col-xs-5" style={{padding:"0",marginTop: '3.5%'}}>
              <h5>4.5</h5>
            </div>
          </div>
          <div className="row">
            <h2 style={{fontFamily: 'Qwigley',fontSize: '130%'}}>&emsp;Rent Used & Returned Succesfully</h2>
          </div>
          <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <h5 style={{color: '#070707'}}>$5999.99 X 3 Days=&emsp;9999.99 </h5>
            </div>
            <div className="col-xs-2"></div>
          </div>
        </div>  


          
              
            
            


      	</div>
    );

  }
}

export default OrderHistory;
