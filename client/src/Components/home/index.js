import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Header from './Header';
import Banner from './Banner';
import Scrollimage from './scrollimage';
import Heading from './heading';
import Heading2 from './heading2';
import Heading3 from './heading3';
import Gallery from './heading4';
import Heading4New from './heading4new';
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
    console.log(this.props.header)
  }
  render() {
    const { data,loading } = this.state;
    return (
      <div className="App">
        {/*<Header/>*/}
        {loading && <div className="loading">Loading&#8230;</div>}
        <Scrollimage/>
        <Heading />
        <Heading2/>
        <Heading3/>
        <Gallery label="Featured Rentals"
        data={data.slice(0, 5)}
        widthProps=''
        colLg='col-lg-2'
        imgtextstyle='absoul'
        imgheadtext='pinktext'
        margBotom=''
        featureFilter='featuresub'
        showonhome={false}
        />
        <Heading5/>
      </div>
    );

  }
}

export default Home;
