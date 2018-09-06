 //下拉元素
 layui.use('element', function(){
    var element = layui.element;
  });

//弹窗

layui.use('layer', function(){ //独立版的layer无需执行这一句
  var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
  
  $('#about').bind('click', function(){
    layer.open({
        type: 1
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,area: '300px;'
        ,shade: 0.8
        ,btn: ['知道啦']
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><p class="me-h2 me-p">丁璟剑</p><p class="me-p">电话：13545171767</p><p class="me-p">邮箱：dingjingjian@qq.com</p></div>'
        ,success: function(layero){
          var btn = layero.find('.layui-layer-btn');
          btn.css('text-align', 'center');
          btn.find('.layui-layer-btn0').attr({
            target: '_blank'
          });
        }
      });
    });
  
});

//固定栏
layui.use('util', function () {
    var util = layui.util;

    //执行
    util.fixbar({
        bar1: true
        , click: function (type) {
            if (type === 'bar1') {
                var ua = navigator.userAgent;
                var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
                    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
                    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
                    isMobile = isIphone || isAndroid;
                    if(isMobile) {
                        window.location.href="mqqwpa://im/chat?chat_type=wpa&uin=464759011&version=1&src_type=web&web_src=oicqzone.com"
                    }else{
                        window.location.href="tencent://message/?uin=464759011&Site=http://vps.shuidazhe.com&Menu=yes"
                    }
            }
        }
    });
});