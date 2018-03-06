layui.use('element', function () {
    var element = layui.element;
});

// 移动端侧边栏显示隐藏
function sideMobile () {
    $('.site-tree-mobile').click(function () {
        $('body').addClass('site-mobile')
    })
    $('.site-mobile-shade').click(function () {
        $('body').removeClass('site-mobile')
    })
}
sideMobile ()