var React = require('react');

var Head = React.createClass({
	render: function() {
		var sty = {
			sty1: {
				'height': '1rem',
				'fontSize': '.5rem',
				'lineHeight': '1rem',
				'color': '#fff',
				'fontStyle': '黑体',
				'width': '50%',
				'overflow': 'hidden'
			},
			sty2: {
				'height': '3rem',
				'background': '#0398ff',
			},
			sty3: {
				'height': '1rem',
				'background': '#fff',
				'borderRadius': '.5rem',
				'fontSize': '.4rem',
				'lineHeight': '1rem'
			},
			sty4: {
				'fontSize': '.3rem',
				'lineHeight': '1rem',
				'color': '#fff',
				'padding': '0 .22rem'
			},
			sty5: {
				'fontSize': '.3rem',
				'lineHeight': '1rem',
				'color': '#fff',
				'float': 'right'
			},
			sty6: {
				'height': '1rem',
				'fontSize': '.8rem',
				'lineHeight': '.8rem',
				'color': '#fff',
				'fontStyle': '黑体'
			}

		}
		return(
			<header id="header" className="mui-bar mui-bar-nav" style={sty.sty2}>
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
});

module.exports = Head;