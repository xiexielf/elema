var React = require('react');
var Banner = React.createClass({
	render: function() {
		var sty = {
			"padding": "6vh 3vw",
		};
		var sty2 = {
			"width": "94vw",
			"height": "13vh"
		};
		var sty3 = {
			"width": "46.4vw",
			"height": "9.6vh",
			"borderRight": "1px solid #cecece",
			"borderBottom": "1px solid #cecece",
			"listStyle": "none",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var sty4 = {
			"width": "46.5vw",
			"height": "9.6vh",
			"listStyle": "none",
			"borderBottom": "1px solid #cecece",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var sty5 = {
			"width": "46.4vw",
			"height": "9.6vh",
			"listStyle": "none",
			"borderRight": "1px solid #cecece",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var sty6 = {
			"width": "46.5vw",
			"height": "9.6vh",
			"listStyle": "none",
			"float": "left",
			"paddingLeft": "3vw",
			"paddingTop": "3vw"
		};
		var sty7 = {
			"width": "30vw",
			"height": "5.6vh",
			"float": "left"
		};
		var sty8 = {
			"float": "left",
			"width": "13vw"
		}
		return(
			<div id="inner">
					<div style={sty}>
					<img style={sty2} src="../img/5.png" />
					</div>
					<div >
					<ul>
						<li style={sty3}>
						   <div style={sty7}>
							   <h3>热卖套餐</h3>
							   <p>附近畅销美食</p>
						   </div>
						   <img style={sty8} src="../img/3.png" />
						</li>
						<li style={sty4}>
							 <div style={sty7}>
								   <h3>霸王餐</h3>
								   <p>领20元红包</p>
							   </div>
							 <img style={sty8} src="../img/1.png" />
						</li>
						<li style={sty5}>
						   <div style={sty7}>
							   <h3>营养快餐</h3>
							   <p>15元吃饱</p>
						   </div>
						    <img style={sty8} src="../img/2.png"/>
						</li>
						<li style={sty6}>
						   <div style={sty7}>
							   <h3>半价下午茶</h3>
							   <p>喝点好的</p>
						   </div>
						   <img style={sty8} src="../img/4.png"/>
						</li>
					</ul>
					</div>
				</div>
		)
	}
})
module.exports = Banner;