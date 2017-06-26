var React = require('react');
var Nav = React.createClass({
	render: function() {
		var sty = { 'width': '100vw', 'height': '26vh' }
		var sty1 = { 'width': '25vw', 'height': '13vh', 'float': 'left' }
		var sty2 = { 'width': '20vw', 'height': '10vh', 'marginLeft': '2.5vw' }
		var sty3 = { 'font-size': '24px', 'marginLeft': '8vw' }
		return(
			<div>
	 			<nav style={sty}>
	 			   <dl style={sty1}>
	 			      <dt><img src="images/1.png" style={sty2}/></dt>
	 			      <dd style={sty3}>美食</dd>
	 			   </dl>
	 			   <dl style={sty1}>
	 			      <dt><img src="images/2.png" style={sty2}/></dt>
	 			      <dd style={sty3}>下午茶</dd>
	 			   </dl>
	 			   
	 			   <dl style={sty1}>
	 			      <dt><img src="images/3.png" style={sty2}/></dt>
	 			      <dd style={sty3}>商超便利</dd>
	 			   </dl>
	 			   
	 			   <dl style={sty1}>
	 			      <dt><img src="images/4.png" style={sty2}/></dt>
	 			      <dd style={sty3}>果蔬生鲜</dd>
	 			   </dl>
	 			   
	 			   
	 			    <dl style={sty1}>
	 			      <dt><img src="images/5.png" style={sty2}/></dt>
	 			      <dd style={sty3}>新店特惠</dd>
	 			   </dl>
	 			   <dl style={sty1}>
	 			      <dt><img src="images/6.png" style={sty2}/></dt>
	 			      <dd style={sty3}>准时达</dd>
	 			   </dl>
	 			   
	 			   <dl style={sty1}>
	 			      <dt><img src="images/7.png" style={sty2}/></dt>
	 			      <dd style={sty3}>午餐</dd>
	 			   </dl>
	 			   
	 			   <dl style={sty1}>
	 			      <dt><img src="images/1.png" style={sty2}/></dt>
	 			      <dd style={sty3}>汉堡薯条</dd>
	 			   </dl>
	 			</nav>
 			</div>
		)
	}
})
module.exports = Nav;