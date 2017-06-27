var React=require('react');
var Con=React.createClass({
	render:function(){
	var sty={
	sty1:{
			'width':'90vw',
			'height':'6vh',
			"lineHeight":'6vh',
			'display':'flex',
			'justifyContent':'space-around',
			'flexWrap':'wrap',
			'fontSize':'2vh'
	},
	sty2:{
			'width':'30vw',
			'height':'10vh',
			'color':'#999',
			'fontStyle':'normal',
			'lineHeight':'10vh',
			'textAlign':'right',
			'fontSize':'.4rem'
	},
	sty3:{
			'width':'21vw',
			'height':'20vh',
			'textAlign':'center'
	},
	sty4:{
			'width':'15vw',
			'height':'4vh',
			'border':'1px solid #92ebff',
			'color':'#92ebff',
			'textAlign':'center',
			'lineHeight':'4vh',
			'borderRadius':'10px',
			'margin':'2vw 0 0 3vw',
			'fontSize':'.28rem'
	},
	sty5:{
			'width':'30vw',
			'height':'10vh',
			'fontStyle':'normal',
			'lineHeight':'10vh',
			'textAlign':'center',
			'fontSize':'.4rem'
	},
	sty6:{
			'width':'20vw',
	},
	sty7:{
			'width':'100vw',
			'height':'42vh',
			'display':'flex',
			'justifyContent':'space-around',
			'flexWrap':'wrap',
			'fontSize':'.4rem'
	},
	sty8:{'fontSize':'.4rem',
		"height":"4vh",
		"lineHeight":"4vh"},
	sty9:{
			'width':'45vw',
			'fontSize':'.4rem',
			'position':'relative'
	},
	sty10:{
			'width':'100vw',
			'height':'10vh',
			'display':'flex',
			'justifyContent':'space-between',
			'fontSize':'.4rem',
			'marginTop':'3vh'
	},
	sty11:{
		"height":"3vh",
		"lineHeight":"3vh",
		"fontSize":"2vh"
	},
	sty12:{
		"height":"6vh",
		"lineHeight":"6vh",
		"fontSize":"3vh"
	},
	sty13:{
		'position':'absolute',
		'left':'5vw',
		'top':'0'
	},
	sty14:{
		'position':'absolute',
		'right':'5vw',
		'top':'0'
	},
	sty15:{
		'fontSize':'.3rem',
		"height":"3vh",
		"lineHeight":"3vh",
	}
}
		return(
			<div>
				<div id="con" style={sty.sty1}>
					<i style={sty.sty2}></i>
		    		<h3 style={sty.sty12}>麦当劳</h3>
					<p style={sty.sty4}>大牌精选</p>
				</div>
				<div id="con1" style={sty.sty7}>
					<dl style={sty.sty3}>
						<dt ><img style={sty.sty6} src="../img/eX01.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="../img/eX02.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="../img/eX03.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="../img/eX04.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="../img/eX05.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="../img/eX06.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="../img/eX07.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="../img/eX08.png"/></dt>
						<dd>
							<h3 style={sty.sty11}>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
				</div>
				<div id="con2" style={sty.sty10}>
					<dl style={sty.sty9}>
						<dd style={sty.sty13}>
							<h3 style={sty.sty8}>推荐有奖</h3>
							<p style={sty.sty15}>5元红包拿不停</p>
						</dd>
						<dt style={sty.sty14}><img style={{'width':'12vw'}} src="../img/eX09.png"/></dt>
					</dl>
					<dl style={sty.sty9}>
						<dd style={sty.sty13}>
							<h3 style={sty.sty8}>加入会员</h3>
							<p style={sty.sty15}>5元红包拿不停</p>
						</dd>
						<dt style={sty.sty14}><img style={{'width':'12vw'}} src="../img/eX10.png"/></dt>
					</dl>
				</div>
			</div>
			
		)
	}
})
module.exports=Con;