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
    
    return (
      	<div>      		      	
              {historyData.map((elem) => {
                let rating = elem.productRate == undefined || elem.productRate == '' ? 0 : +elem.productRate;

                return (
                  <div className="row hidden-sm hidden-xs">
                    <div className="col-md-2">
                      <img alt="" src={elem.fileList[0]} style={{width: '165px'}}/>
                    </div>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col-md-4">
                          <h1 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>{elem.productName}</h1>
                        </div>
                        <div className="col-md-2" style={{padding: '0px',textAlign: 'left'}}>&emsp;&emsp;
                          <Rate col-md-2 rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
                        </div>                        
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h4 style={{color: '#070707'}}>Size: {elem.sizes.join(", ")}</h4>
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
                          <h4 style={{color: '#070707'}}>${elem.priceDay} X {+elem.rentDay +1} Days = ${elem.amount}</h4>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <hr className="hidden-xs hidden-sm" style={{borderTop:'2px solid #c2073f'}}/>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                  </div>
                )
              })}    				
          {historyData.map((elem) => {
            let rating = elem.productRate == undefined || elem.productRate == '' ? 0 : +elem.productRate;

            return(
            <div className="row visible-sm">
              <div className="row">
                <div className="col-sm-3">
                   <img alt="" src={elem.fileList[0]} style={{width: '165px'}}/>
                </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-4">
                        <h2 style={{fontFamily: 'Qwigley',fontSize: '42px',color: '#c2o72f'}}>{elem.productName}</h2>
                      </div>
                      <div className="col-sm-4" style={{padding: '0px',marginTop: '3.5%',textAlign: 'left'}}>&emsp;&emsp;&emsp;&emsp;
                        <Rate rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <h5 style={{color: '#070707'}}>Size: {elem.sizes.join(", ")}</h5>
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
                          <h5 style={{color: '#070707'}}>${elem.priceDay} X {elem.rentDay +1} Days = ${(+elem.priceDay) * (+elem.rentDay + 1)}</h5>
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
            </div>
            )
          })}

        {historyData.map((elem) => {
          let rating = elem.productRate == undefined || elem.productRate == '' ? 0 : +elem.productRate;
          return(
              <div className="row visible-xs">
                <div className="visible-xs ">
                  <div className="col-xs-2"></div>
                    <div className="col-xs-6">
                      <img alt="" src={elem.fileList[0]} style={{height: '240px'}}/>
                    </div>
                  </div>

                  <div className="visible-xs col-xs-12">
                    <div className="col-xs-2"></div>
                    <div className="row">
                    <div className="col-xs-"></div>
                    <div className="col-xs-8">
                      <h2 style={{fontFamily: 'Qwigley',fontSize: '42px'}}>{elem.productName}</h2>
                    </div>
                    <div className="col-xs-3"></div>
                  </div>

                  <div className="col-xs-3"></div>
                  <div className="col-xs-4">
                    <div className="row">
                      <h5 style={{color: '#070707'}}>Size: {elem.sizes.join(", ")}</h5>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-7" style={{padding: '0px',marginTop: '3.5%',textAlign: 'left'}}>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Rate rate={rating == 0 ? '' : rating} initialRating={rating} readonly/>
                  </div>
                </div>
                <div className="row">
                  <h2 style={{fontFamily: 'Qwigley',fontSize: '130%'}}>&emsp;Rent Used & Returned Succesfully</h2>
                </div>
                <div className="row">
                  <div className="col-xs-2"></div>
                  <div className="col-xs-8">
                    <h5 style={{color: '#070707'}}>${elem.priceDay} X {elem.rentDay +1} Days = ${(+elem.priceDay) * (+elem.rentDay + 1)}</h5>
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
