import React, { Component } from 'react';
import Rating from 'react-rating';

class ReviewsCard extends Component {
  render() {
    const { data } = this.props;
    
    return(
          <div>
            <div className="row dell hidden-xs hidden-sm">
                <div className="container" style={{padding:"22px"}}>
                  <div className="col-md-12">
                    <div className="col-md-3">
                      <h4 className="tissue">{data.name}</h4><br/>
                      <div className="row">
                          <div className="col-md-7">
                            <p className="tissue">Size worn:<br/>Rented For:</p>
                          </div>
                          <div className="col-md-3">
                            <p><span className="dec">{data.size}</span><br/><span className="dec">{data.wear}</span></p>
                          </div>
                      </div><br/>
                      <p className="tissue">More Detail</p>

                    </div>{/*Col md 3 close*/}
                    <div className="col-md-6 tissue2">
                      <div className="row">
                        <div className="col-md-6 sung" >
                          <Rating className="col-md-7" 
                              emptySymbol="glyphicon glyphicon-star-empty"
                              fullSymbol="glyphicon glyphicon-star"
                              initialRating={data.rate} 
                              readonly
                              style={{color: 'yellow'}}
                          />
                          {/*<i className="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>*/}
                          <span style={{marginLeft:"10px"}}><sub className="dar">5.0</sub></span>
                        </div>
                        <div className="col-md-6 sung"><span>{data.written}</span></div>
                      </div><br/><br/>{/*Inner Row Closed*/}

                      <div className="row">
                        {/*<div className="col-md-6 sungg">
                          <h4>Stunning I enjoyed</h4>
                        </div>*/}
                      </div>{/*inner row*/}
                       <br/><br/>
                       <p className="sung">{data.msg}</p>
                    </div>
                    <div className="col-md-3 shift">
                        <img src={data.img[0]} style={{width:"90%" , height:"387px"}}/>
                    </div>{/*Col md 3 close*/}                
                  </div>{/*col-md-12 closed*/}
                </div>{/*Main Row Div container Closed*/}
              </div>{/*Main Row closed*/}
              <br/>
              


              {/*First Panel for Mobile and Tab*/}
              <div className="row action visible-sm visible-xs">
                <div className="container">
                  <div className="row">
                    <h4 className="sungg">{data.name}</h4><br/>
                     <div className="row">
                        <div className="col-sm-6 col-xs-6">
                          <p className="tissue">Size worn:<br/>Rented For:</p>
                        </div>
                        <div className="col-sm-3 col-xs-3">
                          <p><span className="dec">{data.size}</span><br/><span className="dec">{data.wear}</span></p>
                        </div>
                     </div><br/>

                    <div className="row">
                      <div className="col-sm-6 col-xs-6">
                        <div className="derr">
                          <i className="fas fa-star" style={{fontSize :"20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <i className="fas fa-star" style={{fontSize : "20px" , "color":'#FFC400'}}></i>
                          <span style={{marginLeft:"10px"}}><sub className="dar">5.0</sub></span>
                        </div><br/>     
                        <div className="sungg">
                          <h4>Stunning I enjoyed</h4>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="col-md-6 sung"><span>{data.written}</span></div>
                      </div><br/><br/><br/>
                      <div className="row"><br/><br/>
                        <div className= "container-fluid point">
                          <p className="point">{data.msg}</p>
                        </div>      
                      </div><br/>{/*row closed*/}
                      <div className="row derr">
                        <img src={data.img[0]} style={{ height:"290px"}}/> 
                      </div>  
                    </div>{/*Row Closed*/}
                  </div>{/*row closed*/}
                </div>{/*main container row closed*/}
              </div>{/*Main row Closed*/}
              </div>
          );

    }
}

export default ReviewsCard;
