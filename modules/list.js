var React = require('react');
var Navigagor = React.createClass({
	render: function() {
		var styNav = { 'width': '100vw', 'height': '26vh' ,"marginTop":"3.5rem"}
		var styNav1 = { 'width': '25vw', 'height': '15vh', 'float': 'left' }
		var styNav2 = { 'width': '20vw', 'height': '10vh', 'marginLeft': '2.5vw' }
		var styNav3 = { 'fontSize': '.3rem', 'marginLeft': '7.5vw' }
		var styNav4 = {"width": "94vw","height": "13vh","margin":"0 3vw"}
		var styNav5={"height":"10vh"}
		return(
			<div>
	 			<nav style={styNav}>
	 			   <dl style={styNav1}>
	 			      <dt><img src="../img/list01.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>美食</dd>
	 			   </dl>
	 			   <dl style={styNav1}>
	 			      <dt><img src="../img/list02.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>下午茶</dd>
	 			   </dl>
	 			   
	 			   <dl style={styNav1}>
	 			      <dt><img src="../img/list03.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>商超便利</dd>
	 			   </dl>
	 			   
	 			   <dl style={styNav1}>
	 			      <dt><img src="../img/list04.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>果蔬生鲜</dd>
	 			   </dl>
	 			    <dl style={styNav1}>
	 			      <dt><img src="../img/list05.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>新店特惠</dd>
	 			   </dl>
	 			   <dl style={styNav1}>
	 			      <dt><img src="../img/list06.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>准时达</dd>
	 			   </dl>
	 			   
	 			   <dl style={styNav1}>
	 			      <dt><img src="../img/list07.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>午餐</dd>
	 			   </dl>
	 			   
	 			   <dl style={styNav1}>
	 			      <dt><img src="../img/list08.png" style={styNav2} /></dt>
	 			      <dd style={styNav3}>汉堡薯条</dd>
	 			   </dl>
	 			</nav>
	 			<div style={styNav5}>
					<img style={styNav4} src="../img/banner05.png" />
				</div>
 			</div>
		)
	}
});

module.exports = Navigagor;