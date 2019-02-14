import React, { Component } from 'react';
import ReviewsCard from './reviewsCard';
import Gallery from '../home/heading4';
import CommentCard from './commentCard';
import { Rate, DetailInput } from '../_components/myInput';
import { connect } from 'react-redux';

class SecondFold extends Component {
  state = {
      reviews: []
  }

  addReview = e => {
      // console.log(e, 'eeeeeeeeeeeeeeee')
      let { reviews } = this.state;
      reviews.push(e)
      this.setState({ reviews });
  }

  render() {
    console.log(this.props.user, 'iddddddddddd')
    return (
      <div className="App">         
          <div className="container">
              <div className="col-md-12"><hr/></div>
              <Gallery
                  label="You May Also Like"
                  data={this.props.location.state.data.slice(0, 3)}
              />    
              <div className="col-md-12"><hr/></div>              
              <Gallery
                  label="More Of Weddings" hrLine='true'
                  data={this.props.location.state.data.slice(2, 5)}
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
              {this.props.user !== undefined && this.props.user._id.length > 0 && <CommentCard addReview={this.addReview}/>}
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
