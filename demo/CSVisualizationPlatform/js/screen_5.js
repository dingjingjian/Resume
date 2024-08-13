$(function () {
  //模拟数据
  var data = {
    code: 0,
    data: {
      source: [{
        name: 'CN', value: 36538284
      }, {
        name: 'US', value: 2364986
      }, {
        name: 'CA', value: 130978
      }, {
        name: 'DE', value: 86302
      }, {
        name: 'PK', value: 76764
      }, {
        name: 'NL', value: 52254
      }],
      target:[{
        name: 'CN', value: 40449202
      }]
    }
  }
  var myColor = ['rgba(96,249,255,1)', 'rgba(248,173,27,1)', 'rgba(43,157,255,1)'];
  var myBgColor = ['rgba(96,249,255,0.3)', 'rgba(248,173,27,0.3)', 'rgba(43,157,255,0.3)'];

  var leftChart = echarts.init(document.getElementById('leftChart'))
  var rightChart = echarts.init(document.getElementById('rightChart'))
  let chartdata = [
    [0, 0, 0],
    ['-', '-', '-'],
  ];

  var name = chartdata[1];
  var value = chartdata[0];
  var max = 10000
  var maxArr = [{ value: max, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: max, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: max, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }];
  var barChartOption = {
    animation: false,
    grid: [
      {
        left: 340,
        top: 45,
        right: 250,
        height: 400,
        containLabel: false
      },
      {
        left: 340,
        bottom: 0,
        right: 250,
        height: 305,
        containLabel: false
      },
    ],
    xAxis: [
      {
        gridIndex: 0,
        type: 'value',
        axisLabel: {
          show: false,
        },
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      {
        gridIndex: 1,
        type: 'value',
        axisLabel: {
          show: false,
        },
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        type: 'category',
        inverse: true,
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: name,
      },
      {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: name,
      },
    ],
    series: [
      {
        xAxisIndex: 0,
        yAxisIndex: 0,
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
          },
        },
        symbolRepeat: 'fixed',
        symbolMargin: 4,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [6, 45],
        symbolPosition: 'start',
        symbolOffset: [-1, -32],
        data: value,
        label: {
          normal: {
            width: 200,
            align: 'right',
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            show: true,
            position: [500, 0],
            formatter: function (a, b) {
              return '{a|' + formatNum(a.value) + '}{b|次}'
            },
            rich: {
              a: {
                fontFamily: 'Num-Font',
                align: 'right',
                fontSize: 42
              },
              b: {
                fontSize: 36,
                padding: [0, 0, 6, 4]
              }
            }
          }
        },
        z: 66,
      },
      {
        // 分隔
        xAxisIndex: 0,
        yAxisIndex: 0,
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myBgColor.length;
              return myBgColor[params.dataIndex % num]
            },
          },
        },
        symbolRepeat: 'fixed',
        symbolMargin: 4,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [6, 45],
        symbolPosition: 'start',
        symbolOffset: [-1, -32],
        data: maxArr,
        label: {
          normal: {
            show: true,
            position: [-305, -30],
            formatter: function (a, b) {
              var icon = 'icon' + a.dataIndex
              var flag = 'flag' + a.dataIndex
              return '{' + icon + '|}{' + flag + '|}{a|' + cutString(a.name, 2) + '}'
            },
            rich: {
              a: {
                color: '#fff',
                fontFamily: 'Num-Font',
                fontSize: 40,
                padding: [0, 0, 6, 8]
              },
              icon0: {
                backgroundColor: {
                  image: './images/screen_5_1.png'
                },
                height: 106
              },
              icon1: {
                backgroundColor: {
                  image: './images/screen_5_2.png'
                },
                height: 106
              },
              icon2: {
                backgroundColor: {
                  image: './images/screen_5_3.png'
                },
                height: 106
              },
              flag0: {
                backgroundColor: {
                  image: './images/flag/NULL.jpg'
                },
                height: 38,
              },
              flag1: {
                backgroundColor: {
                  image: './images/flag/NULL.jpg'
                },
                height: 38,
              },
              flag2: {
                backgroundColor: {
                  image: './images/flag/NULL.jpg'
                },
                height: 38,
              }
            }
          }
        },
        z: 0,
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
          },
        },
        symbolRepeat: 'fixed',
        symbolMargin: 4,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [6, 30],
        symbolPosition: 'start',
        symbolOffset: [-1, -52],
        data: value,
        label: {
          normal: {
            width: 200,
            align: 'right',
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num]
            },
            show: true,
            position: [500, -30],
            formatter: function (a, b) {
              return '{a|' + formatNum(a.value) + '}{b|次}'
            },
            rich: {
              a: {
                fontFamily: 'Num-Font',
                align: 'right',
                fontSize: 38
              },
              b: {
                fontSize: 32,
                padding: [0, 0, 6, 4]
              }
            }
          }
        },
        z: 66,
      },
      {
        // 分隔
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            color: function (params) {
              var num = myBgColor.length;
              return myBgColor[params.dataIndex % num]
            },
          },
        },
        symbolRepeat: 'fixed',
        symbolMargin: 4,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [6, 30],
        symbolPosition: 'start',
        symbolOffset: [-1, -52],
        data: maxArr,
        label: {
          normal: {
            show: true,
            position: [-260, -30],
            formatter: function (a, b) {
              var icon = 'icon' + a.dataIndex
              var flag = 'flag' + a.dataIndex
              return '{' + icon + '|}{b|}{' + flag + '|}{a|' + cutString(a.name, 4) + '}'
            },
            rich: {
              a: {
                color: '#fff',
                fontFamily: 'Num-Font',
                fontSize: 32,
                padding: [0, 0, 0, 10]
              },
              b: {
                padding: [0, 0, 0, 20]
              },
              icon0: {
                backgroundColor: {
                  image: './images/screen_5_4.png'
                },
                height: 46
              },
              icon1: {
                backgroundColor: {
                  image: './images/screen_5_5.png'
                },
                height: 46
              },
              icon2: {
                backgroundColor: {
                  image: './images/screen_5_6.png'
                },
                height: 46
              },
              flag0: {
                backgroundColor: {
                  image: './images/flag/NULL.jpg'
                },
                height: 25,
              },
              flag1: {
                backgroundColor: {
                  image: './images/flag/NULL.jpg'
                },
                height: 25,
              },
              flag2: {
                backgroundColor: {
                  image: './images/flag/NULL.jpg'
                },
                height: 25,
              }
            }
          }
        },
        z: 0,
      },
    ],
  };
  leftChart.setOption(barChartOption)
  rightChart.setOption(barChartOption)
  function loadDada() {
    var source_yAxisData1 = ['-', '-', '-']
    var source_yAxisData2 = ['-', '-', '-']
    var source_xAxisData1 = [0, 0, 0]
    var source_xAxisData2 = [0, 0, 0]
    var source_maxData = 10000
    var source_maxDataArr1 = [{ value: source_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: source_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: source_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }]
    var source_maxDataArr2 = [{ value: source_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: source_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: source_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }]
    var source_flagArr1 = ['./images/flag/NULL.jpg', './images/flag/NULL.jpg', './images/flag/NULL.jpg']
    var source_flagArr2 = ['./images/flag/NULL.jpg', './images/flag/NULL.jpg', './images/flag/NULL.jpg']
    var target_yAxisData1 = ['-', '-', '-']
    var target_yAxisData2 = ['-', '-', '-']
    var target_xAxisData1 = [0, 0, 0]
    var target_xAxisData2 = [0, 0, 0]
    var target_maxData = 10000
    var target_maxDataArr1 = [{ value: target_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: target_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: target_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }]
    var target_maxDataArr2 = [{ value: target_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: target_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }, { value: target_maxData, label: { normal: { show: false } }, itemStyle: { normal: { opacity: 0 } } }]
    var target_flagArr1 = ['./images/flag/NULL.jpg', './images/flag/NULL.jpg', './images/flag/NULL.jpg']
    var target_flagArr2 = ['./images/flag/NULL.jpg', './images/flag/NULL.jpg', './images/flag/NULL.jpg']
    if (data.code == 0 && data.data) {
      if (data.data.source) {
        data.data.source.map(function (item, index) {
          if (index == 0) {
            source_maxData = item.value
          }
          if (index <= 2) {
            if (countryName[item.name]) {
              source_yAxisData1[index] = (countryName[item.name].name || '未知')
            } else {
              source_yAxisData1[index] = (item.name || '未知')
            }
            source_xAxisData1[index] = item.value
            if (countryName[item.name] && countryName[item.name].flag) {
              source_flagArr1[index] = './images/flag/' + item.name + '.jpg'
            }
            source_maxDataArr1[index] = source_maxData
          } else {
            if (countryName[item.name]) {
              source_yAxisData2[index - 3] = (countryName[item.name].name || '未知')
            } else {
              source_yAxisData2[index - 3] = (item.name || '未知')
            }
            source_xAxisData2[index - 3] = item.value
            if (countryName[item.name] && countryName[item.name].flag) {
              source_flagArr2[index - 3] = './images/flag/' + item.name + '.jpg'
            }
            source_maxDataArr2[index - 3] = source_maxData
          }
        })
      }
      if (data.data.target) {
        data.data.target.map(function (item, index) {
          if (index == 0) {
            target_maxData = item.value
          }
          if (index <= 2) {
            if (countryName[item.name]) {
              target_yAxisData1[index] = (countryName[item.name].name || '未知')
            } else {
              target_yAxisData1[index] = (item.name || '未知')
            }
            target_xAxisData1[index] = item.value
            if (countryName[item.name] && countryName[item.name].flag) {
              target_flagArr1[index] = './images/flag/' + item.name + '.jpg'
            }
            target_maxDataArr1[index] = target_maxData
          } else {
            if (countryName[item.name]) {
              target_yAxisData2[index - 3] = (countryName[item.name].name || '未知')
            } else {
              target_yAxisData2[index - 3] = (item.name || '未知')
            }
            target_xAxisData2[index - 3] = item.value
            if (countryName[item.name] && countryName[item.name].flag) {
              target_flagArr2[index - 3] = './images/flag/' + item.name + '.jpg'
            }
            target_maxDataArr2[index - 3] = target_maxData
          }
        })
      }
    }
    var option = {
      xAxis: [{
        max: 10000,
        interval: 10000 / 5
      }, {
        max: 10000,
        interval: 10000 / 5
      }],
      yAxis: [
        {
          data: []
        }, {
          data: []
        }
      ],
      series: [
        {
          data: []
        }, {
          data: []
        }, {
          data: []
        }, {
          data: []
        },
      ]
    }
    barChartOption.xAxis[0].max = source_maxData
    barChartOption.xAxis[0].interval = source_maxData / 5
    barChartOption.xAxis[1].max = source_maxData
    barChartOption.xAxis[1].interval = source_maxData / 5
    barChartOption.yAxis[0].data = source_yAxisData1
    barChartOption.yAxis[1].data = source_yAxisData2
    barChartOption.series[0].data = source_xAxisData1
    barChartOption.series[1].data = source_maxDataArr1
    source_flagArr1.map(function (item, index) {
      barChartOption.series[1].label.normal.rich['flag' + index].backgroundColor.image = item
    })
    barChartOption.series[2].data = source_xAxisData2
    barChartOption.series[3].data = source_maxDataArr2
    source_flagArr2.map(function (item, index) {
      barChartOption.series[3].label.normal.rich['flag' + index].backgroundColor.image = item
    })
    leftChart.setOption(option)
    leftChart.setOption(barChartOption)
    barChartOption.xAxis[0].max = target_maxData
    barChartOption.xAxis[0].interval = target_maxData / 5
    barChartOption.xAxis[1].max = target_maxData
    barChartOption.xAxis[1].interval = target_maxData / 5
    barChartOption.yAxis[0].data = target_yAxisData1
    barChartOption.yAxis[1].data = target_yAxisData2
    barChartOption.series[0].data = target_xAxisData1
    barChartOption.series[1].data = target_maxDataArr1
    target_flagArr1.map(function (item, index) {
      barChartOption.series[1].label.normal.rich['flag' + index].backgroundColor.image = item
    })
    barChartOption.series[2].data = target_xAxisData2
    barChartOption.series[3].data = target_maxDataArr2
    target_flagArr2.map(function (item, index) {
      barChartOption.series[3].label.normal.rich['flag' + index].backgroundColor.image = item
    })
    rightChart.setOption(option)
    rightChart.setOption(barChartOption)
  }
  //首次载入
  loadDada()
})