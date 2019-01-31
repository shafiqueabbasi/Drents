import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home/index';
import FilterPage from './Components/filter/index';
import Productdetailfirstfold from './Components/productdetail/productdetailfirstfold';
import Headingf8 from './Components/home/headingf8';
import Order from './Components/order/index';
import SeeChart from './Components/order/seeChart';
import Filterpanel from './Components/filter/filterpanel';
import LogIn from './Components/login/SignIn';
import SignUp from './Components/login/SignUp';
import HttpUtils from './Service/HttpUtils';

import { Router, Route } from 'react-router-dom';

import { history } from './_helpers';
import Header from './Components/home/Header';
import Footer from './Components/home/headingf8';


class App extends Component {
	state = {
    response: '',
    post: '',
    responseToPost: '',
  };

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



  render() {
    return (
      <div className="App">
      <Header/>
      <Router history={history}>
          <div>
              {/*<PrivateRoute exact path="/" component={HomePage} />
              <PrivateRoute exact path="/about" component={AboutPage} />*/}
              <Route path="/" component={Home} />
              {/*<Route path="/register" component={RegisterPage} />*/}
          </div>
      </Router>
      <Footer/>
      </div>
    );

  }
}

export default App;
