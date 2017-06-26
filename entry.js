var Header=require('./modules/header.js');
var ListCallery=('./modules/listCallery.js');
var Banner=require('./modules/banner.js');
var FlashSale=require('./modules/flashSale.js');
var ExQuality=require('./modules/exQuality.js');
var RemMerchant=('./modules/remMerchant.js');

var React=require('react');
var ReactDOM=require('react-dom');

var Main=React.createClass({
	render:function(){
		return(
			<div>
				<Header/>
				<ListCallery/>
				<Banner/>
				<FlashSale/>
				<ExQuality/>
				<RemMerchant/>
			</div>
		)
	}
})

ReactDOM.render(<Main/>,document.getElementById("body"));
