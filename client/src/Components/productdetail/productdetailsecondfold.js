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
    
    return (
      <div className="App">
          <div className="container">
              <div className="col-md-12"><hr/></div>
              <Gallery
                  label="You May Also Like"
                  data={this.props.location.state.data.slice(0, 3)}
                  widthProps=''
              />
              <div className="col-md-12"><hr/></div>
              <Gallery
                  label="More Of Weddings" hrLine='true'
                  data={this.props.location.state.data.slice(2, 5)}
                   widthProps=''
              />
              <div className="col-md-12"><hr/></div>
              {this.state.reviews.length > 0 && <div className="row derr">
                <h1 className="headings">Comment & Reviews</h1>
                <img src="../images/bar.png"/>
              </div>}
              {this.state.reviews.map((elem) => {
                 return <ReviewsCard data={elem}/>
              })}
              <br/>
              {/*this.props.user !== undefined && <CommentCard addReview={this.addReview} obj={obj}/>*/}
              <br/>
          </div>{/*Container Div Close*/}
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
