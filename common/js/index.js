layui.use(['element', 'code', 'layer','util'], function () {
    //基本元素
    var element = layui.element;
    //代码修饰器
    layui.code({
        encode:true,
        about:false
    });
    //弹窗
    var layer = layui.layer;
    $('#about').on('click', function () {
        layer.open({
            type: 1
            , title: false
            , closeBtn: false
            , area: '300px;'
            , shade: 0.8
            , btn: ['知道啦']
            , btnAlign: 'c'
            , content: '<div style="padding: 50px 20px 40px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><p class="me-h2 me-p">丁璟剑</p><p class="me-p">电话：13545171767</p><p class="me-p">邮箱：dingjingjian@qq.com</p><img style="width: 145px;margin: 20px auto 0;display: block;" src="common/images/me.jpg"></div>'
            , success: function (layero) {
            }
        });
    });
    //固定工具栏
    var util = layui.util;
    util.fixbar({
        bar1: true
        , click: function (type) {
            if (type === 'bar1') {
                var ua = navigator.userAgent;
                var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
                    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
                    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
                    isMobile = isIphone || isAndroid;
                if (isMobile) {
                    window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=464759011&version=1&src_type=web&web_src=oicqzone.com"
                } else {
                    window.location.href = "tencent://message/?uin=464759011&Site=http://vps.shuidazhe.com&Menu=yes"
                }
            }
        }
    });
});
//console 输出
if (window.console) {
    var cons = console;
    if (cons) {
        cons.log("%c\n       ", "font-size:100px;background:url('https://dingjingjian.github.io/Resume/common/images/me.jpg') no-repeat;background-size:100px;");
        cons.log('我的名字是 %c丁璟剑', "font-weight:bold;");
        cons.log("联系电话: %c13545171767", "color:#45B97C;font-weight:bold;");
        cons.log("电子邮箱: %cdingjingjian@qq.com", "color:#45B97C;font-weight:bold;");
    }
}