$(function () {
  //柱子数据
  var yAxisData1 = ['192.168.0.111:8080192.168.0.111:8080', '192.168.0.112:8080', '192.168.0.113:8080']
  var yAxisData2 = ['192.168.0.114:8080', '192.168.0.115:8080']
  var xAxisData1 = [16230, 9321, 5635];
  var xAxisData2 = [2341, 1877];
  var maxData = 20000
  var leftChart = echarts.init(document.getElementById('leftChart'))
  var rightChart = echarts.init(document.getElementById('rightChart'))
  //颜色
  var myColor = ['rgba(96,249,255,1)', 'rgba(248,173,27,1)', 'rgba(43,157,255,1)'];
  var myBgColor = ['rgba(96,249,255,0.3)', 'rgba(248,173,27,0.3)', 'rgba(43,157,255,0.3)'];

  var barChartOption = {
    grid: [
      {
        left: 60,
        top: 45,
        right: 60,
        height: 405,
        containLabel: false
      },
      {
        left: 60,
        right: 60,
        bottom: 30,
        height: 235,
        containLabel: false
      }
    ],
    xAxis: [
      {
        gridIndex: 0,
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      {
        gridIndex: 1,
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        type: 'category',
        inverse: true,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: yAxisData1
      }, {
        gridIndex: 0,
        type: 'category',
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        data: yAxisData1
      },
      {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: yAxisData2
      }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        data: yAxisData2
      },
    ],
    series: [
      {
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            show: true,
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            barBorderRadius: 50,
            borderWidth: 0,
            borderColor: '#333',
          }
        },
        label: {
          normal: {
            width: 200,
            align: 'right',
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            show: true,
            position: ['795px', '-60px'],
            formatter: function (a, b) {
              return '{a|' + formatNum(a.value) +'}{b|次}'
            },
            rich: {
              a: {
                fontFamily: 'Num-Font',
                align: 'right',
                fontSize: 42
              },
              b: {
                fontSize: 36,
                padding:[0,0,6,4]
              }
            }
          }
        },
        barWidth: '24px',
        data: xAxisData1
      },
      {
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            show: true,
            color: function (params) {
              var num = myBgColor.length;
              return myBgColor[params.dataIndex % num]
            },
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        label: {
          normal: {
            show: true,
            position: [0, '-80px'],
            formatter: function (a, b) {
              var icon = 'icon' + a.dataIndex
             
              return '{'+icon+'|}{a|' + cutString(a.name,25) + '}'
            },
            rich: {
              a: {
                color: '#fff',
                fontFamily: 'Num-Font',
                fontSize: 44,
                padding:[0,0,15,8]
              },
              icon0: {
                backgroundColor: {
                  image: './images/screen_3_1.png'
                },
                height: 68
              },
              icon1: {
                backgroundColor: {
                  image: './images/screen_3_2.png'
                },
                height: 68
              },
              icon2: {
                backgroundColor: {
                  image: './images/screen_3_3.png'
                },
                height: 68
              },
            }
          }
        },
        barWidth: '24px',
        data: [maxData, maxData, maxData]
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 2,
        itemStyle: {
          normal: {
            show: true,
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            barBorderRadius: 25,
            borderWidth: 0,
            borderColor: '#333',
          }
        },
        label: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            show: true,
            position: ['795px', '-58px'],
            formatter: function (a, b) {
              return '{a|' + formatNum(a.value) +'}{b|次}'
            },
            width:200,
            align: 'right',
            rich: {
              a: {
                fontFamily: 'Num-Font',
                align: 'right',
                fontSize: 38
              },
              b: {
                fontSize: 32,
                padding:[0,0,6,0]
              }
            }
          }
        },
        barWidth: '14px',
        data: xAxisData2
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 3,
        itemStyle: {
          normal: {
            show: true,
            color: function (params) {
              var num = myBgColor.length;
              return myBgColor[params.dataIndex % num]
            },
            barBorderRadius: 25,
            borderWidth: 0,
          }
        },
        label: {
          normal: {
            color: '#fff',
            show: true,
            position: [0, '-55px'],
            formatter: function (a, b) {
              var icon = 'icon' + a.dataIndex
              return '{'+icon+'|}{a|' + cutString(a.name,25) + '}'
            },
            rich: {
              a: {
                color: '#fff',
                fontFamily: 'Num-Font',
                fontSize: 38,
                padding:[0,0,2,10]
              },
              icon0: {
                backgroundColor: {
                  image: './images/screen_3_4.png'
                },
                height: 32
              },
              icon1: {
                backgroundColor: {
                  image: './images/screen_3_5.png'
                },
                height: 32
              },
            }
          }
        },
        barWidth: '14px',
        data: [maxData, maxData, maxData]
      },
    ]
  };
  leftChart.setOption(barChartOption)
  rightChart.setOption(barChartOption)
})