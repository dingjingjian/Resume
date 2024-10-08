layui.use(function () {
  //基本元素
  var element = layui.element,
    layer = layui.layer,
    util = layui.util,
    $ = layui.$
  //代码修饰器
  layui.code({
    elem: '.layui-code',
    encode: true,
    about: false
  })
  //联系我弹窗
  $('#about').on('click', function () {
    meLayer()
  })
  function meLayer() {
    layer.open({
      type: 1
      , title: false
      , closeBtn: false
      , area: '300px;'
      , shade: 0.8
      , btn: ['知道啦']
      , btnAlign: 'c'
      , content: '<div style="padding: 50px 20px 40px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><p class="me-h2 me-p">丁璟剑</p><p class="me-p">电话：13545171767</p><p class="me-p">邮箱：dingjingjian@qq.com</p><img style="width: 145px;margin: 20px auto 0;display: block;" src="assets/images/me.jpg"></div>'
      , success: function (layero) {
      }
    })
  }
  //固定工具栏
  util.fixbar({
    bar1: true
    , click: function (type) {
      if (type === 'bar1') {
        var ua = navigator.userAgent
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
          isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
          isAndroid = ua.match(/(Android)\s+([\d.]+)/),
          isMobile = isIphone || isAndroid
        if (isMobile) {
          meLayer()
        } else {
          window.location.href = "tencent://message/?uin=464759011"
        }
      }
    }
  })
  //项目信息加载
  $.ajax({
    url: './index.min.json?t=2024.08.14',
    success: function (data) {
      renderData(data.data)
    }
  })
  function renderData(data) {
    var timelineHtml = ''
    var urlListHtml = ''
    var siteDirHtml = ''
    var yearArr = []
    if (data && data.length) {
      for (var i = 0; i < data.length; i++) {
        var item = data[i]
        var dateHtml = ''
        if (item.startDate == item.endDate) {
          dateHtml = item.startDate
        } else {
          dateHtml = item.startDate + ' -- ' + item.endDate
        }
        var badgeHtml = ''
        if (item.badge) {
          if (typeof item.badge === 'string') {
            badgeHtml = ' <span class="layui-badge layui-bg-blue">' + item.badge + '</span>'
          } else {
            item.badge.map(function (badge) {
              badgeHtml += ' <span class="layui-badge layui-bg-blue">' + badge + '</span>'
            })
          }

        }
        var urlHtml = ''
        if (item.url) {
          urlHtml = '<p class="me-p"><b>项目预览：</b><a href="' + item.url + '" target="_blank">' + item.url + '</a></p>'
          urlListHtml += '<dd><a href="' + item.url + '" target="_blank">' + item.title + '</a></dd>'
        }
        var yaerId = ''
        if (yearArr[yearArr.length - 1] != item.startDate.split('/')[0]) {
          var yearTemp = item.startDate.split('/')[0]
          yearArr.push(yearTemp)
          siteDirHtml += '<li data-year="' + yearTemp + '"><a href="javascript:;"><cite>' + yearTemp + '年</cite></a></li>'
          yaerId = ' id="year_' + yearTemp + '"'
        }
        timelineHtml += '<li class="layui-timeline-item"' + yaerId + '>'
          + '<i class="layui-icon layui-timeline-axis layui-icon-circle"></i>'
          + '<div class="layui-timeline-content layui-text">'
          + '<h3 class="layui-timeline-title">' + dateHtml + '：' + item.title + badgeHtml + '</h3>'
          + '<p class="me-p"><b>项目简述：</b>' + item.brief + '</p>'
          + urlHtml
          + '</div>'
          + '</li>'
      }
      siteDirHtml = '<ul class="site-dir">' + siteDirHtml + '</ul>'
    }
    timelineHtml += '<li class="layui-timeline-item">'
      + '<i class="layui-icon layui-timeline-axis layui-icon-radio"></i>'
      + '<div class="layui-timeline-content layui-text">'
      + '<h3 class="layui-timeline-title">起点</h3>'
      + '</div>'
      + '</li>'
    $('#timeline').html(timelineHtml)
    $('#urlList').html(urlListHtml)
    renderSiteDir(siteDirHtml, yearArr)
  }
  //时间轴导航加载
  function renderSiteDir(siteDirHtml, yearArr) {
    if (siteDirHtml && $(window).width() > 750) {
      layer.ready(function () {
        layer.open({
          type: 1
          , content: siteDirHtml
          , skin: 'layui-layer-dir'
          , area: 'auto'
          , maxHeight: $(window).height() - 300
          , title: '项目经验 • 时间轴'
          , closeBtn: false
          , offset: 'r'
          , shade: false
          , success: function (layero, index) {
            layer.style(index, {
              marginLeft: -15
            })
            var yearHeightArr = []
            yearArr.map(function (item) {
              yearHeightArr.push($('#year_' + item).offset().top - 90)
            })
            $('.site-dir').find('li').on('click', function () {
              var othis = $(this)
              $('html').animate({ scrollTop: yearHeightArr[othis.index()] }, 500)
            })
            $(document).scroll(function () {
              yearHeight()
            })
            function yearHeight() {
              if ($('html').scrollTop() < yearHeightArr[0] - 50) {
                $('.site-dir li').find('a').removeClass('layui-this')
              } else {
                for (var i = 0; i < yearHeightArr.length; i++) {
                  if ($('html').scrollTop() > yearHeightArr[i] - 50) {
                    $('.site-dir li').eq(i).find('a').addClass('layui-this')
                    $('.site-dir li').eq(i).siblings().find('a').removeClass('layui-this')
                  } else {
                    break
                  }
                }
              }
            }
            yearHeight()
          }
        })
      })
    }
  }
  //彩蛋
  $('body').on('click', '#shuttle', function () {
    if ($('.solar-syst').length < 1) {
      $('body').prepend('<div class="solar-syst"><div class="sun"></div><div class="mercury"></div><div class="venus"></div><div class="earth"></div><div class="mars"></div><div class="jupiter"></div><div class="saturn"></div><div class="uranus"></div><div class="neptune"></div><div class="pluto"></div><div class="asteroids-belt"></div></div>')
    }
    $('.shuttle').addClass('active')
    $('.solar-syst').addClass('active')
    $('html , body').animate({ scrollTop: 0 }, 3000, function () {
      $('.shuttle').removeClass('active')
      $('body').addClass('active')
    })
  })
  $('body').on('click', '.solar-syst', function () {
    $('body').removeClass('active')
    $('.solar-syst').removeClass('active')
  })
})
//console 输出
if (window.console) {
  var cons = console
  if (cons) {
    cons.log("%c\n       ", "font-size:100px;background:url('https://dingjingjian.github.io/Resume/assets/images/me.jpg') no-repeat;background-size:100px;")
    cons.log('我的名字是 %c丁璟剑', "font-weight:bold;")
    cons.log("联系电话: %c13545171767", "color:#45B97C;font-weight:bold;")
    cons.log("电子邮箱: %cdingjingjian@qq.com", "color:#45B97C;font-weight:bold;")
  }
}