/* 音乐播放和暂停 */
function openmusic() {
	autoPlayMusic();
	audioAutoPlay();
}
function pauseAuto() {
	var audio = document.getElementById('bg-music');
	audio.pause();
}

function audioAutoPlay() {
	if(sessionStorage.getItem("music")=="stop"){
		if ($('.music').hasClass('musicPlay')) {
			$('.music').removeClass('musicPlay');
			$('.music').addClass('musicStop');
			pauseAuto();
		}
	}else{
		var audio = document.getElementById('bg-music');
		audio.load();
		audio.play();
		var UA = navigator.userAgent;
        if (UA.match(/iPad/) || UA.match(/iPhone/) || UA.match(/iPod/)) {
            document.addEventListener("WeixinJSBridgeReady", function() {
				audio.load();
				audio.play();
			}, false);
        }
		
		//jsp IOS 音乐不能自动循环的问题
		// setInterval(function(){
		// 	if ($('.music').hasClass('musicPlay')) {
		// 		var audio = document.getElementById('bg-music');
		// 		audio.load();
		// 		audio.play();
		// 	}
		// },"112000");
	}
}
// 音乐播放
function autoPlayMusic() {
	if(sessionStorage.getItem("music")!="stop"){
		// 自动播放音乐效果，解决浏览器或者APP自动播放问题
		function musicInBrowserHandler() {
			musicPlay(true);
			document.body.removeEventListener('touchstart', musicInBrowserHandler);
		}
		document.body.addEventListener('touchstart', musicInBrowserHandler);
		// 自动播放音乐效果，解决微信自动播放问题
		function musicInWeixinHandler() {
			musicPlay(true);
			document.addEventListener("WeixinJSBridgeReady", function() {
				musicPlay(true);
			}, false);
			document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
		}
		document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
	}
}
function musicPlay(isPlay) {
	var audio = document.querySelector('#bg-music');
	if (isPlay && audio.paused) {
		audio.load();
		audio.play();
	}
	if (!isPlay && !audio.paused) {
		audio.pause();
	}
}
$('.music').click(function() {
	if ($(this).hasClass('musicPlay')) {
		$(this).removeClass('musicPlay');
		$(this).addClass('musicStop');
		sessionStorage.setItem("music", "stop");
		pauseAuto();
	} else {
		$(this).removeClass('musicStop');
		$(this).addClass('musicPlay');
		sessionStorage.setItem("music", "play");
		openmusic();
	}
});
