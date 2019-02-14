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
import SignUp from './Components/login/SignUp';
import HttpUtils from './Service/HttpUtils';

import { Router, Route, BrowserRouter } from 'react-router-dom';

import { history } from './_helpers';
import Header from './Components/home/Header';
import Footer from './Components/home/headingf8';
import MainPage from './Components/filter/index';
import Product from './Components/productdetail/productdetailfirstfold';
import Userprofile from './Components/Userprofile/userprofile';


class App extends Component {
	state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  render() {
    return (
      <div className="App">
			<BrowserRouter>
	          <div>
	          <Header/>
				{/*<PrivateRoute exact path="/" component={HomePage} />
	              <PrivateRoute exact path="/about" component={AboutPage} />*/}
	              <Route path="/" exact component={Home} />
								<PrivateRoute path="/profile" exact component={Profile} />
	              {/*<Route path="/register" component={RegisterPage} />*/}
                <Route path="/product" component={MainPage} />
                <Route path="/detail" component={Product} />
            {/*<Userprofile/>*/}
	           <Footer />

	          </div>
			</BrowserRouter>
      </div>
    );
  }
}

export default App;
