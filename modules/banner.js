var React = require('react');
var Banner = React.createClass({
	render: function() {
		var styBan = {
			"padding": "6vh 3vw",
		};
		var styBan2={
			'height':'4vh',
			'lineHeight':'4vh',
			'fontSize':'2.5vh'
		}
		var styBan3 = {
			"width": "46.4vw",
			"height": "9.6vh",
			"borderRight": "1px solid #cecece",
			"borderBottom": "1px solid #cecece",
			"liststyle": "none",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var styBan4 = {
			"width": "46.5vw",
			"height": "9.6vh",
			"liststyle": "none",
			"borderBottom": "1px solid #cecece",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var styBan5 = {
			"width": "46.4vw",
			"height": "9.6vh",
			"liststyle": "none",
			"borderRight": "1px solid #cecece",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var styBan6 = {
			"width": "46.5vw",
			"height": "9.6vh",
			"liststyle": "none",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var styBan7 = {
			"width": "30vw",
			"height": "5.6vh",
			"float": "left"
		};
		var styBan8 = {
			"float": "left",
			"width": "13vw"
		}
		return(
			<div style={{"marginTop":"1rem"}}>
				<ul>
					<li style={styBan3}>
					   <div style={styBan7}>
						   <h3 style={styBan2}>热卖套餐</h3>
						   <p style={styBan2}>附近畅销美食</p>
					   </div>
					   <img style={styBan8} src="../img/banner03.png" />
					</li>
					<li style={styBan4}>
						 <div style={styBan7}>
							   <h3 style={styBan2}>霸王餐</h3>
							   <p style={styBan2}>领20元红包</p>
						   </div>
						 <img style={styBan8} src="../img/banner01.png" />
					</li>
					<li style={styBan5}>
					   <div style={styBan7}>
						   <h3 style={styBan2}>营养快餐</h3>
						   <p style={styBan2}>15元吃饱</p>
					   </div>
					    <img style={styBan8} src="../img/banner02.png"/>
					</li>
					<li style={styBan6}>
					   <div style={styBan7}>
						   <h3 style={styBan2}>半价下午茶</h3>
						   <p style={styBan2}>喝点好的</p>
					   </div>
					   <img style={styBan8} src="../img/banner04.png"/>
					</li>
				</ul>
			</div>
		)
	}
})
module.exports = Banner;