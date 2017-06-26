var React=require('react');
var Head=React.createClass({ render:function(){ var styHead={'width':'96vw','border-bottom':'1px solid grey','height':'7vh','line-height':'7vh','color':'#747474','font-size':'0.3rem'} var styRight={'width':'74vw','height':'100%','margin-left':'22vw'} return(
		<div>
			<header style={styHead}>推荐商家</header>
			<div className='list' style={{ 'height': '25vh', 'border-bottom': '1px solid grey', 'width': '96vw', 'padding-top': '2vh'}}>
				<div className='left'>
					<img src='imgs/first.png' style={{ 'width': '22vw', 'height': '12vh', 'display': 'inline-block', 'float': 'left'}}/>

				</div>
				<div className='right' style={styRight}>
					<div className='top' style={{ 'height': '15vh', 'border-bottom': '1px solid grey', 'width': '100%'}}>
						<p style={{ 'width': '100%', 'height': '5vh'}}>
							<span style={{ 'font-size': '0.2rem', 'display': 'inline-block', 'width': '8vw', 'height': '3vh', 'background': '#ffdd38', 'color': 'black', 'borderRadius': '0.3rem', 'textAlign': 'center', 'lineHeight': '3vh', 'marginLeft': '0.1rem', 'float': 'left'}}>品牌</span>
							<span style={{ 'font-size': '0.3rem', 'font-weight': 'bolder', 'float': 'left'}}>田师傅红烧肉　(郑州国奥店)</span>
							<span style={{ 'display': 'inline-block', 'width': '0.2rem', 'height': '0.2rem', 'border': '1px solid grey', 'font-size': '0.06rem', 'text-align': 'center', 'line-height': '0.18rem', 'color': 'grey', 'float': 'left', 'margin-top': '0.1rem'}}>保</span>
						</p>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<img src='imgs/star.png' style={{ 'float': 'left', 'height': '0.3rem', 'width': '25vw'}}/>
							<span style={{ 'font-size': '0.1rem', 'color': 'red', 'float': 'left'}}>4.7</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>月售1273单</span>
							<span style={{ 'font-size': '0.1rem', 'color': '#2395ff', 'float': 'left', 'width': '0.7rem', 'height': '0.3rem', 'border': '1px solid #2395ff', 'text-align': 'center'}}>准时达</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'white', 'float': 'left', 'width': '1rem', 'height': '0.3rem', 'text-align': 'center', 'background': '#2395ff'}}>蜂鸟专送</span>

						</p>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>20起送</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>配送费3</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>16/人</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'blue', 'float': 'right'}}>35分钟</span>

							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'right'}}>1.0km</span>
						</p>
					</div>

					<div>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'width': '0.1rem', 'height': '0.1rem', 'background': 'pink', 'color': 'white'}}>减</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'margin-left': '0.2rem'}}>满30减15</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'right', 'margin-left': '0.1rem'}}>11个活动</span>
						</p>
						<p>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'width': '0.1rem', 'height': '0.1rem', 'background': 'pink', 'color': 'white'}}>5</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'margin-left': '0.2rem'}}>五折美食</span>

						</p>
					</div>

				</div>

			</div>

			<div className='list' style={{ 'height': '25vh', 'border-bottom': '1px solid grey', 'width': '96vw', 'padding-top': '2vh'}}>
				<div className='left'>
					<img src='imgs/second.png' style={{ 'width': '22vw', 'height': '12vh', 'display': 'inline-block', 'float': 'left'}}/>

				</div>
				<div className='right' style={styRight}>
					<div className='top' style={{ 'height': '15vh', 'border-bottom': '1px solid grey', 'width': '100%'}}>
						<p style={{ 'width': '100%', 'height': '5vh'}}>
							<span style={{ 'font-size': '0.2rem', 'display': 'inline-block', 'width': '8vw', 'height': '3vh', 'background': '#ffdd38', 'color': 'black', 'borderRadius': '0.3rem', 'textAlign': 'center', 'lineHeight': '3vh', 'marginLeft': '0.1rem', 'float': 'left'}}>品牌</span>
							<span style={{ 'font-size': '0.3rem', 'font-weight': 'bolder', 'float': 'left'}}>汉堡王　(郑州天下城店)</span>
							<span style={{ 'display': 'inline-block', 'width': '0.2rem', 'height': '0.2rem', 'border': '1px solid grey', 'font-size': '0.06rem', 'text-align': 'center', 'line-height': '0.18rem', 'color': 'grey', 'float': 'left', 'margin-top': '0.1rem'}}>保</span>
						</p>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<img src='imgs/star.png' style={{ 'float': 'left', 'height': '0.3rem', 'width': '25vw'}}/>
							<span style={{ 'font-size': '0.1rem', 'color': 'red', 'float': 'left'}}>4.7</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>月售593单</span>
							<span style={{ 'font-size': '0.1rem', 'color': '#2395ff', 'float': 'left', 'width': '0.7rem', 'height': '0.3rem', 'border': '1px solid #2395ff', 'text-align': 'center'}}>准时达</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'white', 'float': 'left', 'width': '1rem', 'height': '0.3rem', 'text-align': 'center', 'background': '#2395ff'}}>蜂鸟专送</span>

						</p>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>20起送</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>配送费3</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>31/人</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'blue', 'float': 'right'}}>30分钟</span>

							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'right'}}>1.2km</span>
						</p>
					</div>

					<div>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'width': '0.1rem', 'height': '0.1rem', 'background': 'pink', 'color': 'white'}}>减</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'margin-left': '0.2rem'}}>饿了么独家汉堡全新...</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'right', 'margin-right': '0.5rem', 'margin-top': '0.04rem'}}>饿了么独家汉堡全新无敌双鸡堡</span>
						</p>
						<p>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'width': '0.1rem', 'height': '0.1rem', 'background': 'pink', 'color': 'white'}}>5</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'margin-left': '0.2rem'}}>五折美食</span>

						</p>
					</div>

				</div>

			</div>

			<div className='list' style={{ 'height': '25vh', 'border-bottom': '1px solid grey', 'width': '96vw', 'padding-top': '2vh'}}>
				<div className='left'>
					<img src='imgs/third.png' style={{ 'width': '22vw', 'height': '12vh', 'display': 'inline-block', 'float': 'left'}}/>

				</div>
				<div className='right' style={styRight}>
					<div className='top' style={{ 'height': '15vh', 'border-bottom': '1px solid grey', 'width': '100%'}}>
						<p style={{ 'width': '100%', 'height': '5vh'}}>
							<span style={{ 'font-size': '0.2rem', 'display': 'inline-block', 'width': '8vw', 'height': '3vh', 'background': '#ffdd38', 'color': 'black', 'borderRadius': '0.3rem', 'textAlign': 'center', 'lineHeight': '3vh', 'marginLeft': '0.1rem', 'float': 'left'}}>品牌</span>
							<span style={{ 'font-size': '0.3rem', 'font-weight': 'bolder', 'float': 'left'}}>造饭师　(国贸店)</span>
							<span style={{ 'display': 'inline-block', 'width': '0.2rem', 'height': '0.2rem', 'border': '1px solid grey', 'font-size': '0.06rem', 'text-align': 'center', 'line-height': '0.18rem', 'color': 'grey', 'float': 'left', 'margin-top': '0.1rem'}}>保</span>
						</p>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<img src='imgs/star.png' style={{ 'float': 'left', 'height': '0.3rem', 'width': '25vw'}}/>
							<span style={{ 'font-size': '0.1rem', 'color': 'red', 'float': 'left'}}>4.7</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>月售3173单</span>
							<span style={{ 'font-size': '0.1rem', 'color': '#2395ff', 'float': 'left', 'width': '0.7rem', 'height': '0.3rem', 'border': '1px solid #2395ff', 'text-align': 'center'}}>准时达</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'white', 'float': 'left', 'width': '1rem', 'height': '0.3rem', 'text-align': 'center', 'background': '#2395ff'}}>蜂鸟专送</span>

						</p>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>20起送</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>配送费3</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left'}}>16/人</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'blue', 'float': 'right'}}>35分钟</span>

							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'right'}}>1.0km</span>
						</p>
					</div>

					<div>
						<p style={{ 'height': '0.3rem', 'width': '100%', 'margin-top': '0.2rem'}}>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'width': '0.1rem', 'height': '0.1rem', 'background': 'pink', 'color': 'white'}}>减</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'margin-left': '0.2rem'}}>满30减15,满45减18,满65减25</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'right', 'margin-right': '0.4rem', 'margin-top': '0.04rem'}}>满58送狮子头一份,满68送柠檬水</span>
						</p>
						<p>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'width': '0.1rem', 'height': '0.1rem', 'background': 'pink', 'color': 'white'}}>5</span>
							<span style={{ 'font-size': '0.1rem', 'color': 'grey', 'float': 'left', 'margin-left': '0.2rem'}}>五折美食</span>

						</p>
					</div>

				</div>

			</div>

		</div>
		) } });
		ReactDOM.render(<Head/>,document.getElementById('out'));
		module.exports=Head;