import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {HttpUtils} from "../../Service/HttpUtils";

class CheckoutForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        msg: 'hello'
      }
      this.submit = this.submit.bind(this);
  }

  componentDidMount(){
      this.props.onRef(this);
  }

  componentWillUnmount() {
     this.props.onRef(undefined);
  }

  async submit(ev) {
    this.setState({ loader: true })
      const { receivedData } = this.props;
      let { token, error } = await this.props.stripe.createToken({name: receivedData.name});
      if(error === undefined || token){
          let response = await HttpUtils.post("charge", {
              method: "POST",
              headers: {"Content-Type": "text/plain"},
              body: {
                  token: token.id,
                  email: receivedData.email,
                  amount: receivedData.amount,
                  name: receivedData.name
              }
          });
          this.props.onChange(response);
          this.setState({ loader: false })
      }else {
          this.props.onError(error.message);
          this.setState({ loader: false })
      }  
  }

  render() {
      return (
          <div className="checkout">
              <CardElement />
              <button onClick={this.submit}>Send</button>
              {this.state.loader && <div class="loading">Loading&#8230;</div>}
          </div>
      );
  }
}

export default injectStripe(CheckoutForm);
