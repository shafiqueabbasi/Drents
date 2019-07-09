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
import HeaderNew from './Components/home/HeaderNew';
import Header2New from './Components/home/Header2New';
import FooterNew from './Components/home/footerNew';
import Footer from './Components/home/headingf8';
import Catelog from './Components/filter/index';
import Product from './Components/productdetail/productdetailfirstfold';
import UserProfile from './Components/Userprofile/userprofile';
import Checkout from './Components/Checkout/cartData';
import { browserName } from 'react-device-detect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      arr: [],
      footer: false,
      header : false,
      header: false
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
  changingHeader = (val) => {
    if (val == 'calling true') {
      this.setState({
        header: true
      })
    }
    else if (val == 'calling false') {
      this.setState({
        header: false
      })
    }
    // console.log('function call')
    console.log(val)
  }

  render() {
    console.log(history , 'path')
    // console.log(browserHistory , ';;;;;;;;')
    const { header } = this.state
    console.log(this.state.header, 'aaaaaaa')
    return (
      <div className="App">
        <BrowserRouter>
          <div>
                
            {header ?
              <Header2New arr={this.state.arr} />
              :
              <HeaderNew arr={this.state.arr} />
            }
            {/* <Route path="/" exact component={Home} changingHeader={this.changingHeader} /> */}
            <Route path="/" exact render={props => <Home {...props} changingHeader={this.changingHeader} />} />
            <Route path="/profile/:value" render={props => <UserProfile {...props} updateFooter={this.updateFooter} changingHeader={this.changingHeader} />} />
            <Route path="/product" 
            render={props => <Catelog {...props} changingHeader={this.changingHeader} />} />
            <Route path="/userdetail" render={props => <Profile {...props} changingHeader={this.changingHeader} />} />
            <Route path="/reset/:token" render={props => <ResetPassword {...props} changingHeader={this.changingHeader} />} />
            <Route path="/detail" render={props => { return <Product {...props} updateCart={this.updateCart} changingHeader={this.changingHeader} /> }} />

            {/* <Route path="/detail" render={props => { return <Product {...props} updateCart={this.updateCart} changingHeader={this.changingHeader}/> }} /> */}

            <Route path="/checkout" render={props => { return <Checkout {...props} updateCart={this.updateCart} changingHeader={this.changingHeader}/> }} />
            <FooterNew showFooter={this.state.footer} arr={this.state.arr}/>
            {/*<Userprofile/>*/}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


