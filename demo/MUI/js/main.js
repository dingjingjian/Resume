/*全局*/
// 监听tap事件，解决 a标签 不能跳转页面问题
mui('body').on('tap','a',function(){document.location.href=this.href;});
//内容过长是可以滚动
(function($){
	$(".mui-scroll-wrapper").scroll({
	bounce: false,//滚动条是否有弹力默认是true
	indicators: false, //是否显示滚动条,默认是true
	});
})(mui);
//轮播自动翻页
mui(".mui-slider").slider({
	interval: 5000
});
/*侧边栏*/
//取消滑动出现侧边栏
var offCanvasWrapper = mui('.mui-off-canvas-wrap');
if(mui('.mui-off-canvas-wrap').length>0){
	var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
	offCanvasInner.addEventListener('drag', function(event) {
	    event.stopPropagation();
	});
	//点击汉堡出现侧边栏
	$('.fix-btn').on('tap',function(e){
	    e.stopPropagation();
	    mui('.mui-off-canvas-wrap').offCanvas('show');
	});
	//点击侧边栏外收回
	$('.mui-inner-wrap').on('tap',function(){
	    if(mui('.mui-off-canvas-wrap').offCanvas().isShown()){
	    	mui('.mui-off-canvas-wrap').offCanvas('close');
	    }
	});
}
//侧边栏地址设置
//志愿者活动
$('.mui-scroll').on('tap','.Vactivities',function(){document.location.href="Vactivities.html";});
//志愿者编号
$('.mui-scroll').on('tap','.Vnumber',function(){document.location.href="Vnumber.html";});
//小记者编号
$('.mui-scroll').on('tap','.Rnumber',function(){document.location.href="";});
//参观路线
$('.mui-scroll').on('tap','.route',function(){document.location.href="route.html";});
//活动回顾
$('.mui-scroll').on('tap','.review',function(){document.location.href="review.html";});
//活动概述
$('.mui-scroll').on('tap','.xiaochi',function(){document.location.href="";});
//活动时间
$('.mui-scroll').on('tap','.qiye',function(){document.location.href="";});
//活动安排
$('.mui-scroll').on('tap','.lvyou',function(){document.location.href="";});
//活动须知
$('.mui-scroll').on('tap','.yijia',function(){document.location.href="";});
//活动通知
$('.mui-scroll').on('tap','.huimin',function(){document.location.href="";});
