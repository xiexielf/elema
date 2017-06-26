var React=require('react');
var Con=React.createClass({
	render:function(){
	var sty={
	sty1:{
			
			'width':'90vw',
			'height':'10vh',
			'display':'flex',
			'justifyContent':'space-around',
			'flexWrap':'wrap',
			'fontSize':'.4rem'
			
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
			'width':'22vw',
			'height':'25vh',
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
			'height':'45vh',
			'display':'flex',
			'justifyContent':'space-around',
			'flexWrap':'wrap',
			'fontSize':'.4rem'
	},
	sty8:{'fontSize':'.4rem'},
	sty9:{
			
			'width':'45vw',
			'fontSize':'.4rem',
			'position':'relative'
	},
	sty10:{
			
			'width':'100vw',
			'height':'30vh',
			'display':'flex',
			'justifyContent':'space-between',
			'fontSize':'.4rem',
			'margin-top':'8vh'
	},
}
		
		return(
			<div>
				<div id="con" style={sty.sty1}>
					<i style={sty.sty2}></i>
		    		<h3 style={sty.sty5}>-品质优选-</h3>
		    		<i style={sty.sty2}>更多</i>
				</div>
				<div id="con1" style={sty.sty7}>
					<dl style={sty.sty3}>
						<dt ><img style={sty.sty6} src="images/eX01.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="images/eX02.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="images/eX03.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="images/eX04.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="images/eX05.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="images/eX06.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="images/eX07.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
					<dl style={sty.sty3}>
						<dt><img style={sty.sty6} src="images/eX08.png"/></dt>
						<dd>
							<h3>麦当劳</h3>
							<p style={sty.sty4}>大牌精选</p>
						</dd>
					</dl>
				</div>
				<div id="con2" style={sty.sty10}>
					<dl style={sty.sty9}>
						<dd style={{'position':'absolute','left':'5vw','top':'0'}}>
							<h3 style={sty.sty8}>推荐有奖</h3>
							<p style={{'fontSize':'.3rem'}}>5元红包拿不停</p>
						</dd>
						<dt style={{'position':'absolute','right':'5vw','top':'0'}}><img style={{'width':'12vw'}} src="images/eX09.png"/></dt>
					</dl>
					<dl style={sty.sty9}>
						<dd style={{'position':'absolute','left':'5vw','top':'0'}}>
							<h3 style={sty.sty8}>加入会员</h3>
							<p style={{'fontSize':'.3rem','color':'#999'}}>5元红包拿不停</p>
						</dd>
						<dt style={{'position':'absolute','right':'5vw','top':'0'}}><img style={{'width':'12vw'}} src="images/eX10.png"/></dt>
					</dl>
				</div>
			</div>
			
		)
	}
})
ReactDOM.render(<Con/>,document.getElementById("out"));
module.exports=Con;