import React, { Component } from 'react';
import ReviewsCard from './reviewsCard';
import Gallery from '../home/heading4';
import CommentCard from './commentCard';
import { Rate, DetailInput } from '../_components/myInput';
import { HttpUtils } from  '../../Service/HttpUtils';

import { connect } from 'react-redux';

class SecondFold extends Component {
  state = {
      reviews: []
  }

  async componentDidMount(){
    window.scrollTo(0, 0);
      let data = await HttpUtils.get('getreview'),
      obj = this.props.location.state.elem;
      if(data.code && data.code == 200){
          // let reviews = data.allreview.filter((elem) => elem.productId == obj._id);
          let reviews = [];
          data.allreview.map((elem) => {
            if(elem.productId == obj._id){
              reviews.push({
                userId: elem.rentedId,
                name: elem.rentedName,
                size: elem.rentedSize,
                wear: elem.rentedWear,
                rate: elem.rentedRate,
                date: elem.rentedDate,
                msg: elem.rentedMsg,
                img: elem.rentedImg                        
              });
            }
          })
          this.setState({ reviews });
          this.props.ratingReview(reviews);
      }
  }

  addReview = e => {
      let { reviews } = this.state;
      reviews.push(e)
      this.setState({ reviews });
      this.props.ratingReview(reviews);
  }

  render() {
    let obj = this.props.location.state.elem;
    console.log(this.state.reviews.length , 'length')
    console.log(this.state.reviews , 'state')

    return (
      <div className="App">
          <div className="row" style={{margin:'0px'}}>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-8 marg_left_product">
              <Gallery
                  label="You May Also Like"
                  data={this.props.location.state.data.slice(0, 4)}
                  widthProps=''
                  colLg='col-lg-3'
                  imgtextstyle='absoulFilter'
                  imgheadtext='pinktextFilter'
                  imgSmalltext='pinksmaltext_pro'
                  margBotom='margbootom'
                  featureFilter='featureFilterdresses'
                  featureArrow='featFilterarrow'
                  featText='productarrowtext'
                  headLable='productheadlable'
                  tpmrgin='proTopmargin'
                  rowmainmargin='row_ProMarg'
              />
            </div>
          </div>
          <div className="row" style={{margin:'0px'}}>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-8 marg_left_review">    
              <hr/>
                     
              {this.state.reviews.length > 0 && <div className="row derr">
                <h1 className="comment_review_heading">Rating & Comments</h1>
              </div>}
              {this.state.reviews.map((elem) => {
                 return <ReviewsCard data={elem}/>
              })}
              <br/>
              {/*this.props.user !== undefined && <CommentCard addReview={this.addReview} obj={obj}/>*/}
              <br/>
            </div>
          </div>              
      </div>
    );

  }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedSecondFold = connect(mapStateToProps)(SecondFold);
export default connectedSecondFold;
