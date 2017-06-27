var React=require('react');
var Sale=React.createClass({
render:function(){
	var sty1={"height":"30vh","width":"100vw","overflow":"hidden"}
	var sty2={"width":"94vw","height":"30vh","margin":"0 2.7vw","marginTop":"2.6vh"}
	var sty3={"display":"flex","height":"4vh"}
	var sty4={"width":"18.5vw","fontSize":"2vh","height":"4vh","color":"#a3a3a3","marginLeft":"4.6vw"}
	var sty5={"display":"flex","height":"4vh","width":"27vw"}
	var h3={"fontSize":"2vh","height":"4vh","width":"18vw"}
	var spn={"display":"block","fontSize":"2vh","width":"6.4vw","height":"3.2vh","background":"#242424","color":"#fff","textAlign":"center","lineHeight":"3.2vh","borderRadius":".06rem"}
	var sty6={"width":"12vw","fontSize":"2vh","height":"4vh","lineHeight":"4vh","marginLeft":"16vw"}
	var sty7={"width":"94vw","height":"21vh","display":"flex","overflow":"hidden"}
	var dl={"width":"24vw","height":"21vh"}
	var dl1={"width":"24vw","height":"21vh","marginLeft":"1.8vw"}
	var dt={"width":"24vw","height":"14vh","background":"url(../img/lb1_03.png)","backgroundSize":"cover"}
	var dt2={"width":"24vw","height":"14vh","background":"url(../img/lb1_05.png)","backgroundSize":"cover"}
	var dt3={"width":"24vw","height":"14vh","background":"url(../img/lb1_07.png)","backgroundSize":"cover"}
	var dt4={"width":"24vw","height":"14vh","background":"url(../img/lb2_05.png)","backgroundSize":"cover"}
	var dd={"width":"24vw","height":"7vh"}
	var p1={"height":"3vh","lineHeight":"3vh","fontSize": "2vh","textAlign": "center"}
	var span1={"color":"#ff5a00","fontSize":"2vh","marginLeft":"0.8vw"}
	var span2={"fontSize":"2vh","marginLeft":"0.8vw","textDecoration": "line-through","color":"#d0d0d0"}
	return(	
		<div style={sty1}>
			<div style={sty2}>
				<div style={sty3}>
					<h3 style={h3}>限时抢购</h3>
					<p style={sty4}>距离时间</p>
					<p style={sty5}><span style={spn}>03</span><span style={{"display":"block"}}>:</span><span style={spn}>32</span><span style={{"display":"block"}}>:</span><span style={spn}>59</span></p>
					<p style={sty6}>更多 </p>
				</div>	
				<div style={sty7}>
					<dl style={dl}>
						<dt style={dt}></dt>
						<dd style={dd}>
							<p style={p1}>单人餐</p>
							<p>
								<span style={span1}>￥9.9</span>
								<span style={span2}>￥25</span>
							</p>
						</dd>
					</dl>
					<dl style={dl1}>
						<dt style={dt2}></dt>
						<dd style={dd}>
							<p style={p1}>煮酒论剑...</p>
							<p>
								<span style={span1}>￥19.9</span>
								<span style={span2}>￥60</span>
							</p>
						</dd>
					</dl>
					<dl style={dl1}>
						<dt style={dt3}></dt>
						<dd style={dd}>
							<p style={p1}>纵酒狂歌...</p>
							<p>
								<span style={span1}>￥19.9</span>
								<span style={span2}>￥60</span>
							</p>
						</dd>
					</dl>
					<dl style={dl1}>
						<dt style={dt4}></dt>
						<dd style={dd}>
							<p style={p1}>浪漫双人餐</p>
							<p>
								<span style={span1}>￥19.9</span>
								<span style={span2}>￥60</span>
								</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		)}
	}
)
	
module.exports=Sale;