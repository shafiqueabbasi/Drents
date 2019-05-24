import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Header from './Header';
import Banner from './Banner';
import Heading from './heading';
import Heading2 from './heading2';
import Heading3 from './heading3';
import Gallery from './heading4';
import Heading5 from './heading5';
import Heading6 from './heading6';
import Heading7 from './heading7';
import Headingf8 from './headingf8';
import { HttpUtils } from  '../../Service/HttpUtils';

class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
        	data : [],
          loading:true
        }
    }
  async componentDidMount () {
    //console.log(filter, 'propsssssssssssss')
    window.scrollTo(0,0)
    let data = await HttpUtils.get('getdresses');
    if(data.code && data.code === 200){
      this.setState({ data: data.allDress, loading: false});
    }
  }
  render() {
    const { data,loading } = this.state;
    return (
      <div className="App">
        {/*<Header/>*/}
        {loading && <div className="loading">Loading&#8230;</div>}
        <Banner/>
        
        {/*<Headingf8/>*/}

      </div>
    );

  }
}

export default Home;
