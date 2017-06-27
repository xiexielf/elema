var React = require('react');

var Remm = React.createClass({
	render: function() {
		var styHead = {
			'width': '96vw',
			'borderBottom': '1px solid grey',
			'height': '7vh',
			'lineHeight': '7vh',
			'color': '#747474',
			'fontSize': '0.3rem'
		}
		var styRight = {
			'width': '74vw',
			'height': '100%',
			'marginLeft': '22vw'
		}
		var wrap={
			'height': '25vh',
			'borderBottom': '1px solid grey', 
			'width': '96vw', 
			'paddingTop': '2vh'
		}
		var img={ 
			'width': '22vw', 
			'height': '12vh', 
			'display': 'inline-block', 
			'float': 'left'
		}
		var wrap1={ 
			'height': '15vh', 
			'borderBottom': '1px solid grey', 
			'width': '100%'
			}
		var p1={ 'width': '100%', 'height': '5vh'}
		var span1={ 'fontSize': '0.2rem', 'display': 'inline-block', 'width': '8vw', 'height': '3vh', 'background': '#ffdd38', 'color': 'black', 'borderRadius': '0.3rem', 'textAlign': 'center', 'lineHeight': '3vh', 'marginLeft': '0.1rem', 'float': 'left'}
		var span2={ 'fontSize': '0.3rem', 'fontWeight': 'bolder', 'float': 'left'}
		var span3={ 'display': 'inline-block', 'width': '0.2rem', 'height': '0.2rem', 'border': '1px solid grey', 'fontSize': '0.06rem', 'textAlign': 'center', 'lineHeight': '0.18rem', 'color': 'grey', 'float': 'left', 'marginTop': '0.1rem'}
		var p2={ 'height': '0.3rem', 'width': '100%', 'marginTop': '0.2rem'}
		var img2={ 'float': 'left', 'height': '0.3rem', 'width': '25vw'}
		var img3={ 'width': '22vw', 'height': '12vh', 'display': 'inline-block', 'float': 'left'}
		var span4={ 'fontSize': '0.1rem', 'color': 'red', 'float': 'left'}
		var span5={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'left'}
		var span6={ 'fontSize': '0.1rem', 'color': '#2395ff', 'float': 'left', 'width': '0.7rem', 'height': '0.3rem', 'border': '1px solid #2395ff', 'textAlign': 'center'}
		var span7={ 'fontSize': '0.1rem', 'color': 'white', 'float': 'left', 'width': '1rem', 'height': '0.3rem', 'textAlign': 'center', 'background': '#2395ff'}
		var p3={ 'height': '0.3rem', 'width': '100%', 'marginTop': '0.2rem'}
		var span8={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'left'}
		var span9={ 'fontSize': '0.1rem', 'color': 'blue', 'float': 'right'}
		var span10={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'right'}
		var span11={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'left', 'width': '0.1rem', 'height': '0.1rem', 'background': 'pink', 'color': 'white'}
		var span12={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'left', 'marginLeft': '0.2rem'}
		var span13={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'right', 'marginLeft': '0.1rem'}
		var wrap2={ 'height': '25vh', 'borderBottom': '1px solid grey', 'width': '96vw', 'paddingTop': '2vh'}
		var span14={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'right', 'marginRight': '0.5rem', 'marginTop': '0.04rem'}
		var span15={ 'fontSize': '0.1rem', 'color': 'grey', 'float': 'right', 'marginRight': '0.4rem', 'marginTop': '0.04rem'}
		return(
		<div>
			<header style={styHead}>推荐商家</header>
			<div className='list' style={wrap}>
				<div className='left'>
					<img src='../img/first.png' style={img}/>
				</div>
				<div className='right' style={styRight}>
					<div className='top' style={wrap1}>
						<p style={p1}>
							<span style={span1}>品牌</span>
							<span style={span2}>田师傅红烧肉　(郑州国奥店)</span>
							<span style={span3}>保</span>
						</p>
						<p style={p2}>
							<img src='../img/star.png' style={img2}/>
							<span style={span4}>4.7</span>
							<span style={span5}>月售1273单</span>
							<span style={span6}>准时达</span>
							<span style={span7}>蜂鸟专送</span>
						</p>
						<p style={p3}>
							<span style={span8}>20起送</span>
							<span style={span8}>配送费3</span>
							<span style={span8}>16/人</span>
							<span style={span9}>35分钟</span>
							<span style={span10}>1.0km</span>
						</p>
					</div>
					<div>
						<p style={p3}>
							<span style={span11}>减</span>
							<span style={span12}>满30减15</span>
							<span style={span13}>11个活动</span>
						</p>
						<p>
							<span style={span11}>5</span>
							<span style={span12}>五折美食</span>
						</p>
					</div>
				</div>
			</div>
			<div className='list' style={wrap2}>
				<div className='left'>
					<img src='../img/second.png' style={img3}/>
				</div>
				<div className='right' style={styRight}>
					<div className='top' style={wrap1}>
						<p style={p1}>
							<span style={span1}>品牌</span>
							<span style={span2}>汉堡王　(郑州天下城店)</span>
							<span style={span3}>保</span>
						</p>
						<p style={p3}>
							<img src='../img/star.png' style={img2}/>
							<span style={span4}>4.7</span>
							<span style={span8}>月售593单</span>
							<span style={span6}>准时达</span>
							<span style={span7}>蜂鸟专送</span>
						</p>
						<p style={p3}>
							<span style={span8}>20起送</span>
							<span style={span8}>配送费3</span>
							<span style={span8}>31/人</span>
							<span style={span9}>30分钟</span>
							<span style={span10}>1.2km</span>
						</p>
					</div>
					<div>
						<p style={p3}>
							<span style={span11}>减</span>
							<span style={span12}>饿了么独家汉堡全新...</span>
							<span style={span14}>饿了么独家汉堡全新无敌双鸡堡</span>
						</p>
						<p>
							<span style={span11}>5</span>
							<span style={span12}>五折美食</span>
						</p>
					</div>
				</div>
			</div>
			<div className='list' style={wrap2}>
				<div className='left'>
					<img src='../img/third.png' style={img3}/>
				</div>
				<div className='right' style={styRight}>
					<div className='top' style={wrap1}>
						<p style={p1}>
							<span style={span1}>品牌</span>
							<span style={span2}>造饭师　(国贸店)</span>
							<span style={span3}>保</span>
						</p>
						<p style={p3}>
							<img src='../img/star.png' style={img2}/>
							<span style={span4}>4.7</span>
							<span style={span8}>月售3173单</span>
							<span style={span6}>准时达</span>
							<span style={span7}>蜂鸟专送</span>
						</p>
						<p style={p3}>
							<span style={span8}>20起送</span>
							<span style={span8}>配送费3</span>
							<span style={span8}>16/人</span>
							<span style={span9}>35分钟</span>
							<span style={span10}>1.0km</span>
						</p>
					</div>
					<div>
						<p style={p3}>
							<span style={span11}>减</span>
							<span style={span12}>满30减15,满45减18,满65减25</span>
							<span style={span15}>满58送狮子头一份,满68送柠檬水</span>
						</p>
						<p>
							<span style={span11}>5</span>
							<span style={span12}>五折美食</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	) } });
	
module.exports=Remm;