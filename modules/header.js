var React = require('react');

var sty = {
	sty1: { 'height': '1rem', 'font-size': '.5rem', 'line-height': '1rem', 'color': '#fff', 'font-style': '����', 'width': '50%', 'overflow': 'hidden' },
	sty2: { 'height': '1rem', 'background': '#0398ff', 'margin-top': '.8rem' },
	sty3: { 'height': '1rem', 'background': '#fff', 'border-radius': '.5rem', 'font-size': '.4rem', 'line-height': '1rem' },
	sty4: { 'font-size': '.3rem', 'line-height': '1rem', 'color': '#fff', 'padding': '0 .22rem' },
	sty5: { 'font-size': '.3rem', 'line-height': '1rem', 'color': '#fff', 'float': 'right' },
	sty6: { 'height': '1rem', 'font-size': '.8rem', 'line-height': '.8rem', 'color': '#fff', 'font-style': '����' }

}
var Head = React.createClass({
	render: function() {
		return(
			<header className="mui-bar mui-bar-nav" style={sty.sty2}>
				<b className="mui-icon mui-icon-location mui-pull-left" style={sty.sty6}></b>
			    <b className="mui-pull-left" style={sty.sty1}>���Ͻ���ѧԺ(γ��·����·)</b>
			    <b className="mui-pull-right" style={sty.sty5}>33�� ����</b>
			    <div className="mui-input-row mui-search">
				    <input type="search" className="mui-input-clear" placeholder="�����̼ҡ��̼�����" style={sty.sty3}></input>
				</div>
				<div><i style={sty.sty4}>������</i><i style={sty.sty4}>��������</i><i style={sty.sty4}>����</i><i style={sty.sty4}>Ϻβ</i><i style={sty.sty4}>�ҵĲ�</i><i style={sty.sty4}>����</i><i style={sty.sty4}>����С��Ϻ</i></div>
			</header>
		)
	}
})
ReactDOM.render(<Head/>, document.getElementById('header'))