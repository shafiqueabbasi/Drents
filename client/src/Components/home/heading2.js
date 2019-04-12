import React, { Component } from 'react';
import './home.css';

class Heading2 extends Component {
  	render() {
    return (
    	<div className="App">
	    		<div className="Heading">
	      			<h1 className="headings" style={{fontFamily:'Stalemate cursive'}}>About Drent</h1>
	      			<img src='./images/bar.png' style={{marginTop:'-1%'}}/>
	      		</div>
	    		<div className="container">
	    			<div className="col-md-12 col-sm-12">
	    				<div className="col-md-7 col-sm-6 scrollbar custom_border" id="style-1">
	    					<p className="paraghraph">Lorem Ipsum is simply dummy. It has survived not only five centuries, Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	    					Lorem Ipsum is simply dummy.  Lorem Ipsum has been the industry's standard dummy text ever since. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	    				</div>
	    				<div className="col-md-5 col-sm-6 col-xs-11">
	    					<img src="./images/how-work.png" className="panel2how" />
	    				</div>
	    			</div>
	    		</div><br/>
    	</div>
    	);

  }
}

export default Heading2;
