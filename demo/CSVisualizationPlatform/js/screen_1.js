$(function () {
  //时间生成
  // setTimeout(function () {
  setInterval(function () {
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "周日";
    weekday[1] = "周一";
    weekday[2] = "周二";
    weekday[3] = "周三";
    weekday[4] = "周四";
    weekday[5] = "周五";
    weekday[6] = "周六";

    var year = date.getFullYear();    //获取当前年份   
    var mon = date.getMonth() + 1;      //获取当前月份   
    var da = date.getDate();          //获取当前日   
    var day = weekday[date.getDay()]; //获取当前星期几   
    var h = date.getHours();          //获取小时   
    var m = date.getMinutes();        //获取分钟   
    var s = date.getSeconds();        //获取秒
    $('#timeBox .date').html(year + '-' + mon + '-' + da + '<b>' + day + '</b>')
    $('#timeBox .time').html((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s))
  }, 1000)

  var points = [{
    value: [-116.8062, 44.9208],
    itemStyle: {
      color: '#FF5129'
    }
  }, {
    value: [116.8062, 44.9208],
    itemStyle: {
      color: '#FF5129'
    }
  }, {
    value: [127.9688, 45.368],
    itemStyle: {
      color: '#F8A21B'
    }
  }, {
    value: [103.5901, 36.3043],
    itemStyle: {
      color: '#55EFF5'
    }
  }, {
    value: [119.4543, 25.9222],
    itemStyle: {
      color: '#55EFF5'
    }
  }]
  var lines = [{
    coords: [[-116.8062, 44.9208],
    [119.4543, 25.9222]],
    itemStyle: {
      color: '#FF5129'
    }
  }, {
    coords: [
      [116.8062, 44.9208],
      [119.4543, 25.9222]
    ],
    lineStyle: {
      color: '#FF5129'
    }
  }, {
    coords: [
      [127.9688, 45.368],
      [119.4543, 25.9222]
    ],
    lineStyle: {
      color: '#F8A21B'
    }
  }, {
    coords: [
      [103.5901, 36.3043],
      [119.4543, 25.9222]
    ],
    lineStyle: {
      color: '#55EFF5'
    }
  }]
  // 地图加载
  var mapChart = echarts.init(document.getElementById('mapChart'))
  var mapChartOption = {
    animation: false,
    geo: {
      show: true,
      map: 'world',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false,
        }
      },
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#0d70b3',
          shadowColor: '#0d70b3',
          shadowOffsetX: -4,
          shadowOffsetY: 12
        }
      }
    },
    series: [
      {
        type: 'map',
        map: 'world',
        geoIndex: 1,
        aspectScale: 0.75, //长宽比
        silent: true,
        showLegendSymbol: false, // 存在legend时显示
        roam: false,
        itemStyle: {
          normal: {
            borderColor: '#B8ECFF',
            borderWidth: 2,
            areaColor: '#023253',
            shadowColor: '#37729D',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 30
          }
        },
      }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        zlevel: 1,
        rippleEffect: {
          // brushType: 'fill',
          brushType: 'stroke',
          period: 12,
          scale: 4,
        },
        symbolSize: 10,
        data: points
      },
      //地图线的动画效果
      {
        type: 'lines',
        animation: false,
        zlevel: 2,
        effect: {
          show: true,
          period: 6, //箭头指向速度，值越小速度越快
          trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
          symbolSize: [8, 6], //图标大小
        },
        lineStyle: {
          normal: {
            color: '#1DE9B6',
            type: 'dashed',
            width: 2, //线条宽度
            opacity: 0.3, //尾迹线条透明度
            curveness: .3 //尾迹线条曲直度
          }
        },
        data: lines
      }
    ]
  }
  mapChart.setOption(mapChartOption)
})