var React = require('react');

var sty = {
	sty1: { 'height': '1rem', 'font-size': '.5rem', 'line-height': '1rem', 'color': '#fff', 'font-style': '黑体', 'width': '50%', 'overflow': 'hidden' },
	sty2: { 'height': '1rem', 'background': '#0398ff', 'margin-top': '.8rem' },
	sty3: { 'height': '1rem', 'background': '#fff', 'border-radius': '.5rem', 'font-size': '.4rem', 'line-height': '1rem' },
	sty4: { 'font-size': '.3rem', 'line-height': '1rem', 'color': '#fff', 'padding': '0 .22rem' },
	sty5: { 'font-size': '.3rem', 'line-height': '1rem', 'color': '#fff', 'float': 'right' },
	sty6: { 'height': '1rem', 'font-size': '.8rem', 'line-height': '.8rem', 'color': '#fff', 'font-style': '黑体' }

}
var Head = React.createClass({
	render: function() {
		return(
			<header className="mui-bar mui-bar-nav" style={sty.sty2}>
				<b className="mui-icon mui-icon-location mui-pull-left" style={sty.sty6}></b>
			    <b className="mui-pull-left" style={sty.sty1}>河南教育学院(纬五路经六路)</b>
			    <b className="mui-pull-right" style={sty.sty5}>33° 晴天</b>
			    <div className="mui-input-row mui-search">
				    <input type="search" className="mui-input-clear" placeholder="输入商家、商家名称" style={sty.sty3}></input>
				</div>
				<div><i style={sty.sty4}>麻辣烫</i><i style={sty.sty4}>大脸鸡排</i><i style={sty.sty4}>鱿鱼</i><i style={sty.sty4}>虾尾</i><i style={sty.sty4}>我的菜</i><i style={sty.sty4}>意面</i><i style={sty.sty4}>麻辣小龙虾</i></div>
			</header>
		)
	}
})
ReactDOM.render(<Head/>, document.getElementById('header'))