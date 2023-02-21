$(function () {
  var layer = layui.layer
  // tips
  var zjlTips = null
  $('#zjl-tips').on('mouseenter', function () {
    var that = this;
    zjlTips = layer.tips('数据库所有记录条数', that, {
      skin: 'tips',
      tips: 1,
      time: 0
    });
  });
  $('#zjl-tips').on('mouseleave', function () {
    layer.close(zjlTips)
  });
  var wtjlTips = null
  $('#wtjl-tips').on('mouseenter', function () {
    var that = this;
    wtjlTips = layer.tips('来源为奥一爆料、深圳论坛、领导留言板的数据总数', that, {
      skin: 'tips',
      tips: 1,
      time: 0
    });
  });
  $('#wtjl-tips').on('mouseleave', function () {
    layer.close(wtjlTips)
  });
  var hbbhTips = null
  $('#hbbh-tips').on('mouseenter', function () {
    var that = this;
    hbbhTips = layer.tips('所有记录的相同时间尺度的环比变化', that, {
      skin: 'tips',
      tips: 1,
      time: 0
    });
  });
  $('#hbbh-tips').on('mouseleave', function () {
    layer.close(hbbhTips)
  });

  // 基于准备好的dom，初始化echarts实例
  var yqlbChart = echarts.init(document.getElementById('yqlbChart'));

  // 指定图表的配置项和数据
  var yqlbChartOption = {
    color: ['#2BA3FD', '#2DC6C6', '#52C41A', '#FAAE13', '#F6663E'],
    legend: {
      bottom: '0',
      left: '0',
      icon: 'circle',
      itemHeight: 7,
      itemWidth: 7,
      padding: 0,
      formatter: function (name) {
        if (name == '排污与水质') {
          return '{a|' + name + '}';
        } else {
          return '{b|' + name + '}';
        }
      },
      textStyle: {
        fontFamily: 'PingFang SC',
        rich: {
          a: {
            backgroundColor: 'transparent',
            fontSize: 14,
            width: 70,
            padding: [6, 0, 5, 0]
          },
          b: {
            backgroundColor: 'transparent',
            fontSize: 14,
            width: 70,
            padding: [6, 41, 5, 0]
          },
        },
      }
    },
    series: [
      {
        name: '舆情类别',
        seriesIndex: 0,
        type: 'pie',
        center: ['50%', '40%'],
        radius: [65, 89],
        avoidLabelOverlap: false,
        legendHoverLink: false,
        label: {
          show: false,
          fontSize: 16,
          fontFamily: 'PingFang SC',
          fontWeight: 'bold',
          position: 'center'
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
          },
          itemStyle: {
            shadowColor: '#7b7b7b',
            opacity: 0.71,
            shadowBlur: 6
          }
        },
        data: [
          { value: 1048, name: '用水与供水' },
          { value: 735, name: '水费与服务' },
          { value: 580, name: '排污与水质' },
          { value: 300, name: '积水与内涝' },
          { value: 484, name: '管道问题' }
        ]
      },
      {
        name: '舆情类别',
        type: 'pie',
        center: ['50%', '40%'],
        radius: [65, 89],
        avoidLabelOverlap: false,
        silent: true,
        legendHoverLink: false,
        label: {
          color: '#333',
          formatter: '{d}%',
          fontFamily: 'Helvetica Neue',
          fontSize: 16
        },
        labelLine: {
          length: 8,
          length2: 16,
          lineStyle: {
            color: '#C9CBCD'
          }
        },
        itemStyle: {
          color: 'rgba(0,0,0,0)',
        },
        data: [
          { value: 1048, name: '用水与供水' },
          { value: 735, name: '水费与服务' },
          { value: 580, name: '排污与水质' },
          { value: 300, name: '积水与内涝' },
          { value: 484, name: '管道问题' }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  yqlbChart.setOption(yqlbChartOption);


  // 用定时器控制饼图高亮
  var chartActionObj = {}
  function yqlbChartAction() {
    chartActionObj['yqlbChart'] = {
      index: -1,
      dataLength: yqlbChart.getOption().series[0].data.length,
      timer: null
    }
    chartActionObj['yqlbChart'].timer = setInterval(() => {
      // 清除之前的高亮
      yqlbChart.dispatchAction({
        type: 'downplay',
        dataIndex: chartActionObj['yqlbChart'].index,
        seriesIndex: 0
      })
      chartActionObj['yqlbChart'].index = (chartActionObj['yqlbChart'].index + 1) % chartActionObj['yqlbChart'].dataLength
      // 当前下标高亮
      yqlbChart.dispatchAction({
        type: 'highlight',
        dataIndex: chartActionObj['yqlbChart'].index,
        seriesIndex: 0
      })
      if (chartActionObj['yqlbChart'].index > chartActionObj['yqlbChart'].dataLength) {
        chartActionObj['yqlbChart'].index = 0
      }
    }, 2000)
  }
  // 鼠标划入
  yqlbChart.on('mouseover', () => {
    // 停止定时器，清除之前的高亮
    clearInterval(chartActionObj['yqlbChart'].timer)
    yqlbChart.dispatchAction({
      type: 'downplay',
      dataIndex: chartActionObj['yqlbChart'].index,
      seriesIndex: 0
    })
  })
  //鼠标划出
  yqlbChart.on('mouseout', () => {
    yqlbChartAction()
  })
  yqlbChartAction()

  // 基于准备好的dom，初始化echarts实例
  var gqqxChart = echarts.init(document.getElementById('gqqxChart'));

  // 指定图表的配置项和数据
  var gqqxChartOption = {
    color: ['#52C41A', '#2DC6C6', '#FAAE13'],
    legend: {
      bottom: '0',
      left: '0',
      icon: 'circle',
      itemHeight: 7,
      itemWidth: 7,
      padding: 0,
      formatter: function (name) {
        if (name == '负面') {
          return '{a|' + name + '}';
        } else {
          return '{b|' + name + '}';
        }
      },
      textStyle: {
        fontFamily: 'PingFang SC',
        rich: {
          a: {
            backgroundColor: 'transparent',
            fontSize: 14,
            width: 30,
            padding: [6, 0, 5, 0]
          },
          b: {
            backgroundColor: 'transparent',
            fontSize: 14,
            width: 30,
            padding: [6, 102, 5, 0]
          },
        },
      }
    },
    series: [
      {
        name: '情感倾向',
        type: 'pie',
        center: ['50%', '40%'],
        radius: [0, 89],
        avoidLabelOverlap: false,
        label: {
          color: '#333',
          formatter: '{d}%',
          fontFamily: 'Helvetica Neue',
          fontSize: 16
        },
        labelLine: {
          length: 8,
          length2: 16,
          lineStyle: {
            color: '#C9CBCD'
          }
        },
        emphasis: {
          itemStyle: {
            shadowColor: '#7b7b7b',
            opacity: 0.71,
            shadowBlur: 6
          }
        },
        data: [
          { value: 1048, name: '正面' },
          { value: 735, name: '中性' },
          { value: 580, name: '负面' }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  gqqxChart.setOption(gqqxChartOption);

  // 基于准备好的dom，初始化echarts实例
  var yqqsChart = echarts.init(document.getElementById('yqqsChart'));

  // 指定图表的配置项和数据
  var yqqsChartOption = {
    color: ['#2BA3FD', '#2DC6C6', '#52C41A', '#FAAE13', '#F6663E'],
    legend: {
      left: 0,
      padding: [5, 5, 5, 0],
      itemWidth: 16,
      itemHeight: 9,
      textStyle: {
        fontFamily: 'PingFang SC',
        fontSize: 14,
        padding: [0, 20, 0, 0],
        backgroundColor: 'transparent'
      },
      data: ['用水与供水', '水费与服务', '排污与水质', '积水与内涝', '管道问题']
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#f8f8f8',
      borderColor: '#ccc',
      extraCssText: 'box-shadow: none;border-radius: 0'
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        interval: 0,
        formatter: function (value, index) {
          var valueDate = value.split(' 至 ')[0].split('-')
          return '{a|' + valueDate[1] + '-' + valueDate[2] + '}{b|周}';
        },
        rich: {
          a: {
            backgroundColor: 'transparent',
            fontSize: 14,
            fontFamily: 'Helvetica Neue',
            padding: [4, 4, 0, 0],
            color: '#333'
          },
          b: {
            backgroundColor: '#EEE',
            fontSize: 14,
            fontFamily: 'PingFang SC',
            lineHeight: 14,
            borderRadius: 18,
            padding: [4, 3, 2, 3],
            color: '#666'
          },
        }
      },
      data: ['2022-01-01 至 2022-10-23', '2022-01-08 至 2022-10-23', '2022-01-15 至 2022-10-23', '2022-01-22 至 2022-10-23', '2022-01-29 至 2022-10-23', '2022-02-05 至 2022-10-23', '2022-02-19 至 2022-10-23', '2022-02-26 至 2022-10-23', '2022-03-01 至 2022-10-23', '2022-03-08 至 2022-10-23']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'Helvetica Neue'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#ccc',
        }
      },
    },
    series: [
      {
        name: '用水与供水',
        type: 'line',
        symbol: 'circle',
        showSymbol: false,
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90]
      },
      {
        name: '水费与服务',
        type: 'line',
        symbol: 'circle',
        showSymbol: false,
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290]
      },
      {
        name: '排污与水质',
        type: 'line',
        symbol: 'circle',
        showSymbol: false,
        smooth: true,
        data: [150, 232, 201, 154, 190, 330, 410, 201, 154, 190]
      },
      {
        name: '积水与内涝',
        type: 'line',
        symbol: 'circle',
        showSymbol: false,
        smooth: true,
        data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290]
      },
      {
        name: '管道问题',
        type: 'line',
        symbol: 'circle',
        showSymbol: false,
        smooth: true,
        data: [320, 332, 301, 334, 390, 330, 320, 301, 334, 390]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。

  window.onresize = function () {
    yqqsChart.resize();
    yqqsChartInt()
  };

  function yqqsChartInt() {
    if ($(window).width() > 1050) {
      yqqsChartOption.xAxis.axisLabel.interval = 0
    } else {
      yqqsChartOption.xAxis.axisLabel.interval = 'auto'
    }
    yqqsChart.setOption(yqqsChartOption);
  }
  yqqsChartInt()

  // 1. 创建地图实例
  var map = new BMapGL.Map('map_container', {
    minZoom: 11,
    enableDblclickZoom: false
  });
  var point = new BMapGL.Point(114.159988, 22.629175);

  map.centerAndZoom(point, 11); // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);

  var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
  map.addControl(scaleCtrl);
  var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
  map.addControl(zoomCtrl);
  var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
  map.addControl(navi3DCtrl);

  var bd = new BMapGL.Boundary();

  var areaLabel = [];
  function areaInit(areaName, point, strokeColor, fillColor) {
    areaLabel.push({
      geometry: {
        type: 'Point',
        coordinates: point
      },
      properties: {
        text: areaName
      }
    });
    if (areaName == '龙华区') {
      areaName = '深圳市深圳市龙华区'
    }
    bd.get(areaName, function (rs) {
      const count = rs.boundaries.length;
      if (count === 0) {
        return
      }
      var polygon = new BMapGL.Polygon(rs.boundaries, {
        strokeColor: strokeColor,
        strokeOpacity: 1,
        fillColor: fillColor,
        fillOpacity: 0.6
      });
      map.addOverlay(polygon);
    });
  }
  areaInit('宝安区', [113.826033, 22.65879], '#2BA3FD', '#2BA3FD')
  areaInit('光明区', [113.922511, 22.766129], '#2DC6C6', '#2DC6C6')
  areaInit('南山区', [113.922619, 22.523183], '#52C41A', '#52C41A')
  areaInit('龙华区', [114.024703, 22.696285], '#FAAE13', '#FAAE13')
  areaInit('福田区', [114.03684, 22.541251], '#F6663E', '#F6663E')
  areaInit('罗湖区', [114.131036, 22.568035], '#2DC6C6', '#2DC6C6')
  areaInit('盐田区', [114.263842, 22.591002], '#FAAE13', '#FAAE13')
  areaInit('龙岗区', [114.259987, 22.717551], '#2BA3FD', '#2BA3FD')
  areaInit('坪山区', [114.349724, 22.676499], '#52C41A', '#52C41A')
  $.ajax({
    url: './js/custom_map_config.json',
    async: false,
    success: function (data) {
      map.setMapStyleV2({ styleJson: data });
    }
  });

  // 2. 创建MapVGL图层管理器
  var view = new mapvgl.View({
    map: map
  });

  var textLayer = new mapvgl.TextLayer({
    color: '#666',
    fontSize: 18,
    offset: [15, -10]
  });
  view.addLayer(textLayer);
  textLayer.setData(areaLabel);
  var data = [];

  var randomCount = 100;

  // 构造数据（模拟数据）
  while (randomCount--) {
    data.push({
      geometry: {
        type: 'Point',
        coordinates: [114.059953 + 0.4 * (Math.random() - 0.7), 22.623737 + 0.2 * (Math.random() - 0.6)],
      },
      properties: {
        icon: 'data:image/png;base64,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',
        width: 154 / 10,
        height: 200 / 10,
        offset: [0, -200 / 15],
        title: '测试标题测试标题',
        content: '测试内容测试内容测试内容',
        time: '2021年1月17日',
        palce: '地点信息'
      },
    });
  }

  var clusterLayer = new mapvgl.ClusterLayer({
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    minSize: 30, // 聚合点显示的最小直径
    gradient: {
      0.0: '#EAF6FF',
      1.0: '#EAF6FF'
    }, // 聚合点颜色梯度
    maxZoom: 14, // 聚合的最大级别，当地图放大级别高于此值将不再聚合
    minZoom: 4, // 聚合的最小级别，当地图放大级别低于此值将不再聚合
    // 是否显示文字
    showText: true,
    // 开始聚合的最少点数，点数多于此值才会被聚合
    minPoints: 5,
    // 设置文字样式
    textOptions: {
      color: '#000'
    },
    enablePicked: true,
    onClick(e) {
      if (e.dataItem) {
        // 可通过dataItem下面的children属性拿到被聚合的所有点
        var lng = e.dataItem.geometry.coordinates[0]
        var lat = e.dataItem.geometry.coordinates[1]
        var point = new BMapGL.Point(lng, lat);
        var zoom = 14
        if (map.getZoom() < 14) {
          zoom = 14
        } else if (map.getZoom() < 16) {
          zoom = 16
        } else {
          zoom = map.getZoom()
        }
        map.centerAndZoom(point, zoom);
      }
    },
    onMousemove(e) {
      if (e.dataItem) {
        // 可通过dataItem下面的children属性拿到被聚合的所有点
        if (e.dataItem.children) {
          return false
        }
        // 创建添加点标记
        var lng = e.dataItem.geometry.coordinates[0]
        var lat = e.dataItem.geometry.coordinates[1]
        var sContent = '<div style="padding:0 10px;"><h4 style="margin:0 0 5px 0;font-size:16px;font-weight:bold;">' + e.dataItem.properties.title + '</h4>'
          + '<p style="margin:0;line-height:1.5;font-size:14px;">' + e.dataItem.properties.content + '</p>'
          + '<p style="margin:0;line-height:1.5;font-size:13px;">' + e.dataItem.properties.time + '</p>'
          + '<p style="margin:0 0 15px 0;line-height:1.5;font-size:13px;">' + e.dataItem.properties.palce + '</p>'
          + '</div>';
        var infoWindow = new BMapGL.InfoWindow(sContent);
        // marker添加点击事件
        map.openInfoWindow(infoWindow, new BMapGL.Point(lng, lat));
      }
    }
  });

  view.addLayer(clusterLayer);
  clusterLayer.setData(data);

  var laydate = layui.laydate

  laydate.render({
    elem: '#date'
  });

  // 详情展开关闭
  $('.detail-box').on('click', '.detail-item', function () {
    if ($(this).hasClass('detail-show')) {
      $(this).removeClass('detail-show')
    } else {
      $(this).addClass('detail-show')
    }
  })
})