import React, { Component } from 'react';
import { Rate } from '../_components/myInput';
import { footerActions } from '../../_actions';
import { connect } from 'react-redux';

class OrderHistory extends Component {
  componentDidMount(){
      const { historyData, showFooter } = this.props;
      if(historyData.length == 0){
          showFooter();
      }
      
  }

  componentWillUnmount(){
      this.props.hideFooter();
  }

  render() {
    const { historyData } = this.props;
    if(historyData.length === 0){
        return (
          <div style={{textAlign: 'center'}}>
            <h3>no dress</h3>
          </div>
        )
    }
    
    return (
      	<div>      		      	
              {historyData.map((elem) => {
                let rating = elem.productRate == undefined || elem.productRate == '' ? 0 : +elem.productRate;

                return (
              <div className="container">    
                  <div className="row" style={{margin:'0px'}}>
                    <div className="col-xs-12 col-sm-1 col-md-2 col-lg-2"></div>
                    <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2" style={{paddingTop: '2%'}}>
                      <img alt="" src={elem.fileList[0]} className="current_image"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div className="row" style={{margin:'0px'}}>
                        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                          <h1 className="current_dress_name">{elem.productName}</h1>
                        </div>
                        <div  className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{marginTop:'-3%'}}>&emsp;&emsp;
                          <Rate OH={true} rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
                        </div>                        
                      </div>
                      <div className="row" style={{margin:'0px'}}>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">
                          <h4 className="orderHistory_sizes">Size: {elem.sizes.join(", ")}</h4>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-6"></div>
                      </div>
                      <div className="row" style={{margin:'0px'}}>
                        <div className="col-xs-12 col-sm-11 col-md-8 col-lg-8">
                          <h1 className="order_history_command">&nbsp;&nbsp;&nbsp;Rent Used & Returned Succesfully</h1>
                        </div>
                        <div className="col-xs-12 col-sm-1 col-md-4 col-lg-4"></div>
                      </div>
                      <div className="row" style={{margin:'0px'}}>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">
                          <h4 className="current_total_price">${elem.priceDay} X {+elem.rentDay +1} Days = ${elem.amount}</h4>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-6 col-lg-6"></div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
                    
                  </div>
                  <div className="row" style={{margin:'0px'}}>
                        <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                            <hr style={{borderTop:'2px solid rgb(203, 157, 108)'}}/>
                        </div>
                        <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
                  </div>
              </div>    
                )
              })}    				

        


          
              
            
            


      	</div>
    );

  }
}

// export default OrderHistory;

function mapDispatchToProps(dispatch) {
    return {
        showFooter: () => dispatch({ type: 'SHOW_FOOTER' }),
        hideFooter: () => dispatch({ type: 'HIDE_FOOTER' })
    };
}

const connectedOrderHistory = connect(null, mapDispatchToProps)(OrderHistory);
export default connectedOrderHistory;
