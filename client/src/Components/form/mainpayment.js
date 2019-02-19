import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import {HttpUtils} from "../../Service/HttpUtils";

class MainPayment extends Component {
  constructor(props){
      super(props)
      this.state = {
          stripe :null,
          receivedData: {
            email: 'email@gmail.com',
            total: 250,
            firstName: 'brother'
          }
      }
  }

  componentDidMount(){
      this.capturedKeys();
      // this.props.onRef(this);
  }

  // componentDidUpdate(prevProps, prevState){
  //     if(prevProps.data !== this.props.data){
  //         this.setState({receivedData: this.props.data});
  //     }
  // }

  // componentWillUnmount() {
  //     this.props.onRef(undefined);
  // }

  // mainPayment = (e) => {
  //     this.child.submit();
  // }
  
  async capturedKeys (){
      let res = await HttpUtils.get('key');
      if (window.Stripe) {
          this.setState({stripe: window.Stripe(res.keys)});
      } else {
          document.querySelector('#stripe-js').addEventListener('load', () => {
            this.setState({stripe: window.Stripe(res.keys)});
          });
      }
  } 

  changeHandler(data){
      this.props.onChange(data);
      console.log(data, 'dataaaaaaa success')
  }

  handleError = (msg) => {
      this.props.onError(msg);
      console.log(msg, 'msgggggggg')
  }

  render() {
      const { stripe } = this.state;
      return (
          <StripeProvider stripe={stripe}>
              <div className="example">
                  <Elements style={{boxSizing: 'border-box'}}>
                      <CheckoutForm 
                          onRef={ref => (this.child = ref)} 
                          onError={this.handleError} 
                          receivedData={this.state.receivedData}
                          onChange={this.changeHandler.bind(this)}
                      />
                  </Elements>
              </div>
          </StripeProvider>
      );
  }
}

export default MainPayment;
