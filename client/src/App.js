import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home/index';
import FilterPage from './Components/filter/index';
import Productdetailfirstfold from './Components/productdetail/productdetailfirstfold';
import Headingf8 from './Components/home/headingf8';
import Profile from './Components/order/index';
//import {BrowserRouter} from 'react-router-dom';
import SeeChart from './Components/order/seeChart';
import Filterpanel from './Components/filter/filterpanel';
import { PrivateRoute } from './_components';
//import Profile from './Components/order/'
import LogIn from './Components/login/SignIn';
import ResetPassword from './Components/login/resetPassword';
import SignUp from './Components/login/SignUp';
import HttpUtils from './Service/HttpUtils';

import { Router, Route, BrowserRouter } from 'react-router-dom';

import { history } from './_helpers';
import Header from './Components/home/Header';
import Footer from './Components/home/headingf8';
import MainPage from './Components/filter/index';
import Product from './Components/productdetail/productdetailfirstfold';
import UserProfile from './Components/Userprofile/userprofile';
import Checkout from './Components/Checkout/cartData';

class App extends Component {
  constructor(props){
    super(props);
  	this.state = {
      response: '',
      post: '',
      responseToPost: '',
      arr: [],
      footer: false
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  updateCart = arr => {
    this.setState({ arr })
  }

  updateFooter = e => {
    this.setState({ footer: e })
  }

  render() {
    console.log(this.props,'asdsadsadsad')
    return (
      <div className="App">
       
			<BrowserRouter>
	          <div>
	              <Header arr={this.state.arr}/>
	              <Route path="/" exact component={Home} />
                <Route path="/profile/:value" render={props => <UserProfile {...props} updateFooter={this.updateFooter}/>} />
                <Route path="/product" component={MainPage} />
                <Route path="/userdetail" component={Profile} />
                <Route path="/reset/:token" component={ResetPassword} />
                <Route path="/detail" render={props => { return <Product {...props} updateCart={this.updateCart}/>}} />
                <Route path="/checkout" render={props => { return <Checkout {...props} updateCart={this.updateCart}/>}} />
	              {/*<Footer showFooter={this.state.footer}/>*/}
               {/*<Userprofile/>*/} 
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

