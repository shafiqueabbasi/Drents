import React, { Component } from 'react';
import Rating from 'react-rating';
import { Link } from "react-router-dom";

class ReviewsCard extends Component {
  render() {
    const { data } = this.props;
    
    return(
          <div>
            <div className="row dell hidden-xs hidden-sm">
                <div className="container" style={{padding:"22px"}}>
                  <div className="col-md-12">
                    <div className="col-md-3">
                      <Link to={`/profile/${data.userId}`}>
                          <h4 className="tissue" style={{fontFamily: 'Sacramento',fontSize: '30px'}}>{data.name}</h4><br/>
                      </Link>
                      <div className="row">
                          <div className="col-md-7 row" style={{padding: '0px'}}>
                            <p className="tissue">Size worn:<br/>Rented For:</p>
                          </div>
                          <div className="col-md-3 d_size">
                            <p><span className="dec">{data.size}</span><br/><span className="dec">{data.wear}</span></p>
                          </div>
                      </div><br/>
                      <p className="tissue">more <br/> detail</p>

                    </div>{/*Col md 3 close*/}
                    <div className="col-md-6 tissue2">
                      <div className="row">
                        <div className="col-md-7 sung" >
                          <Rating className="col-md-8" 
                              emptySymbol="glyphicon glyphicon-star-empty"
                              fullSymbol="glyphicon glyphicon-star"
                              initialRating={data.rate} 
                              readonly
                              style={{color: 'white'}}
                          />                          
                          <span className="card">Ratings</span>
                          <span style={{marginLeft:"10px"}}><sub className="dar"></sub></span>

                        </div>
                        <div className="col-md-5 sung"><span>{data.date}</span></div>
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
                        <img src={data.img} style={{width:"90%" ,padding: '10%'}}/>
                        
                    </div>{/*Col md 3 close*/}                
                  </div>{/*col-md-12 closed*/}
                </div>{/*Main Row Div container Closed*/}
              </div>{/*Main Row closed*/}
              <br/>
              


              {/*First Panel for Mobile and Tab*/}
              <div className="row action visible-sm visible-xs">
                <div className="container">
                  <div className="row">
                    <h4 className="sungg" style={{fontFamily: 'Sacramento',fontSize: '30px'}}>{data.name}</h4><br/>
                     <div className="row">
                        <div className="col-sm-3 col-xs-7">
                          <p className="tissue">Size worn:<br/>Rented For:</p>
                        </div>
                        <div className="col-sm-2 col-xs-5 d_size">
                          <p><span className="dec">{data.size}</span><br/><span className="dec">{data.wear}</span></p>
                        </div>
                        <div className="col-sm-12 col-xs-12">
                          <p className="tissue">more <br/> detail</p>
                        </div>
                        
                     </div>

                     

                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="derr">
                          <Rating className="col-md-7 col-xs-8" 
                              emptySymbol="glyphicon glyphicon-star-empty"
                              fullSymbol="glyphicon glyphicon-star"
                              initialRating={data.rate} 
                              readonly
                              style={{color: 'white'}}
                          />
                          <span className="card">Ratings</span>
                          <span style={{marginLeft:"10px"}}><sub className="dar"></sub></span>
                        </div><br/>     
                        <div className="sungg">
                        </div> 
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="col-md-6 sung"><span>{data.date}</span></div>
                      </div><br/><br/><br/>
                      <div className="row"><br/><br/>
                        <div className= "container-fluid point">
                          <p className="point">{data.msg}</p>
                        </div>      
                      </div><br/>{/*row closed*/}
                      <div className="row derr">
                        <img src={data.img}/> 
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
