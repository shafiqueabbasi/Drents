import React, { Component } from 'react';
import Rating from 'react-rating';
import { Link } from "react-router-dom";

class ReviewsCard extends Component {
  render() {
    const { data } = this.props;
    
    return(
          <div>
              <div className="row">
                  <div className="col-xs-12 col-sm-10 col-md-9 col-lg-9">
                      <div className="row">
                          <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                              <Link to={`/profile/${data.userId}`}>
                                  <h4 className="comment_username">{data.name} <span style={{fontSize:'15px'}}>(Renter)</span></h4><br/>
                              </Link>
                          </div>
                          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                            <p className="">{data.date}</p>
                          </div>
                      </div>    
                      <div className="row" style={{margin:'0px'}}>
                          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3" style={{backgroundColor:'#e1e1e1'}}>
                            <p className="comment_dress_size">Size worn: {data.size}</p>
                          </div>
                          <div className="col-xs-12 col-sm-3 col-md-4 col-lg-5"></div>
                          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4 marg_mobile">
                              <Rating className="col-md-8" 
                                emptySymbol="glyphicon glyphicon-star-empty"
                                fullSymbol="glyphicon glyphicon-star"
                                initialRating={data.rate} 
                                readonly
                                style={{color: '#cb9d6c'}}
                              />                          
                              <p className="card">4.5</p>
                              <span style={{marginLeft:"10px"}}><sub className="dar"></sub></span>
                          </div>
                      </div>   
                      <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <p className="comment_dress_details">{data.msg}</p>
                          </div>
                      </div>
                          <br/>
                          {/*<p className="">{data.wear}</p>*/}
                  </div>
                  <div className="col-xs-12 col-sm-2 col-md-3 col-lg-3">
                      <img src={data.img}/>
                  </div>             
              </div>
              <br/>
          </div>
          );

    }
}

export default ReviewsCard;
