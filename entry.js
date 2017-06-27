var Header = require('./modules/header.js');
var List = require('./modules/list.js');
var Banner = require('./modules/banner.js');
var FlashSale = require('./modules/flashSale.js');
var ExQuality = require('./modules/exQuality.js');
var Foot = require('./modules/footer.js');

var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
	render: function() {
		return(
			<div>
				<Header/>
				<List/>
				<Banner/>
				<FlashSale/>
				<ExQuality/>
				<Foot/>
			</div>
		)
	}
});

ReactDOM.render(<Main/>, document.getElementById("wrap"));