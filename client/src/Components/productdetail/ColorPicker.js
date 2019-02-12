import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class Testing extends Component {
  render(){
  	return(
  		<DateRangePicker startDate="1/1/2014" endDate="3/1/2014">
          <span>Click Me To Open Picker!</span>
        </DateRangePicker>
        )
  }
}

  export default Testing;