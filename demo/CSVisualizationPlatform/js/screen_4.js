$(function () {
  var itemStyle = [
    {
      "itemStyle": {
        "color": {
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "type": "linear",
          "global": false,
          "colorStops": [{
            "offset": 0,
            "color": "rgba(239,71,32,1)"
          }, {
            "offset": 1,
            "color": "rgba(239,71,32,0)"
          }]
        }
      },
      "max": {
        "color": '#3F3141'
      },
      "pictorial": {
        "color": '#FF7454'
      },
    },
    {
      "itemStyle": {
        "color": {
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "type": "linear",
          "global": false,
          "colorStops": [{
            "offset": 0,
            "color": "rgba(214,140,26,1)"
          }, {
            "offset": 1,
            "color": "rgba(214,140,26,0)"
          }]
        }
      },
      "max": {
        "color": '#454239'
      },
      "pictorial": {
        "color": '#FCB548'
      },
    },
    {
      "itemStyle": {
        "color": {
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "type": "linear",
          "global": false,
          "colorStops": [{
            "offset": 0,
            "color": "rgba(47,212,220,1)"
          }, {
            "offset": 1,
            "color": "rgba(47,212,220,0)"
          }]
        }
      },
      "max": {
        "color": '#1D5168'
      },
      "pictorial": {
        "color": '#7AF4F8'
      },
    },
  ]
  var data = [
    {
      name: "扫描行为",
      value: 5000,
      "itemStyle": itemStyle[0].itemStyle
    },
    {
      name: "命令执行",
      value: 4000,
      "itemStyle": itemStyle[1].itemStyle
    },
    {
      name: "扫描行为",
      value: 3000,
      "itemStyle": itemStyle[2].itemStyle
    },
    {
      name: "信息泄露",
      value: 2500,
      "itemStyle": itemStyle[0].itemStyle
    },
    {
      name: "木马攻击",
      value: 2000,
      "itemStyle": itemStyle[0].itemStyle
    },
    {
      name: "缓冲区域",
      value: 1500,
      "itemStyle": itemStyle[0].itemStyle
    },
    {
      name: "请求类型",
      value: 1000,
      "itemStyle": itemStyle[0].itemStyle
    },
  ]
  var pictorialData = [
    {
      name: "扫描行为",
      value: 5000,
      "itemStyle": itemStyle[0].pictorial
    },
    {
      name: "命令执行",
      value: 4000,
      "itemStyle": itemStyle[1].pictorial
    },
    {
      name: "扫描行为",
      value: 3000,
      "itemStyle": itemStyle[2].pictorial
    },
    {
      name: "信息泄露",
      value: 2500,
      "itemStyle": itemStyle[0].pictorial
    },
    {
      name: "木马攻击",
      value: 2000,
      "itemStyle": itemStyle[0].pictorial
    },
    {
      name: "缓冲区域",
      value: 1500,
      "itemStyle": itemStyle[0].pictorial
    },
    {
      name: "请求类型",
      value: 1000,
      "itemStyle": itemStyle[0].pictorial
    },
  ]
  var max = 5500
  var maxData = [
    {
      name: "扫描行为",
      value: max,
      "itemStyle": itemStyle[0].max
    },
    {
      name: "命令执行",
      value: max,
      "itemStyle": itemStyle[1].max
    },
    {
      name: "扫描行为",
      value: max,
      "itemStyle": itemStyle[2].max
    },
    {
      name: "信息泄露",
      value: max,
      "itemStyle": itemStyle[0].max
    },
    {
      name: "木马攻击",
      value: max,
      "itemStyle": itemStyle[0].max
    },
    {
      name: "缓冲区域",
      value: max,
      "itemStyle": itemStyle[0].max
    },
    {
      name: "请求类型",
      value: max,
      "itemStyle": itemStyle[0].max
    },
  ]
  var xAxisData = ["扫描行为", "命令执行", "扫描行为", "信息泄露", "木马攻击", "缓冲区域", "请求类型"]
  var barChart = echarts.init(document.getElementById('barChart'))
  var barChartOption = {
    "grid": {
      "containLabel": true,
      "left": 100,
      "right": 100,
      "bottom": 200,
      "top": 70
    },
    "xAxis": {
      "axisLabel": {
        "color": "#fff",
        formatter: function (value, index) {
          var icon = 'icon' + index
          return '{'+icon+'|}\n{a|' + value + '}'
        },
        rich: {
          a: {
            color: '#fff',
            fontSize: 32,
            lineHeight: 68
          },
          icon0: {
            backgroundColor: {
              image: './images/screen_4_1.png'
            },
            height: 68,
            lineHeight: 68,
          },
          icon1: {
            backgroundColor: {
              image: './images/screen_4_2.png'
            },
            height: 68,
            lineHeight: 68,
          },
          icon2: {
            backgroundColor: {
              image: './images/screen_4_3.png'
            },
            height: 68,
            lineHeight: 68,
          },
          icon3: {
            backgroundColor: {
              image: './images/screen_4_4.png'
            },
            verticalAlign: 'bottom',
            height: 50,
            lineHeight: 68,
          },
          icon4: {
            backgroundColor: {
              image: './images/screen_4_5.png'
            },
            verticalAlign: 'bottom',
            height: 50,
            lineHeight: 68,
          },
          icon5: {
            backgroundColor: {
              image: './images/screen_4_6.png'
            },
            verticalAlign: 'bottom',
            height: 50,
            lineHeight: 68,
          },
          icon6: {
            backgroundColor: {
              image: './images/screen_4_7.png'
            },
            verticalAlign: 'bottom',
            height: 50,
            lineHeight: 68,
          },
        }
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "lineStyle": {
          "color": "#fff",
          "width": 4,
        },
        "show": true
      },
      "data": xAxisData,
      "type": "category"
    },
    "yAxis": {
      "name": "次",
      "nameTextStyle": {
        "color": "#fff",
        "fontSize": 32,
      },
      "axisLabel": {
        "margin": 30,
        "color": "#fff",
        "fontSize": 38,
        "fontFamily": 'Num-Font',
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "#3D526B",
          "width": 4,
          "type": "dashed"
        }
      },
      "axisLine": {
        "lineStyle": {
          "color": "#fff",
          "width": 4,
        },
        "show": true
      },
      // "max":max,
      "minInterval": 1,
      "splitNumber": 5
    },
    "series": [
      {
        "data": data,
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 44
      },
      {
        "data": pictorialData,
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [44, 22],
        "zlevel": 2
      },
      {
        "data": maxData,
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 44,
        "barGap": "-100%",
        "zlevel": -1
      },
      {
        "data": maxData,
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [44, 22],
        "zlevel": -1
      }]
  }
  barChart.setOption(barChartOption)
})