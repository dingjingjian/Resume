$(function () {
  var data = [
    {
      name: "信息泄露",
      value: 1134,
      max: 1200,
    },
    {
      name: "扫描行为",
      value: 531,
      max: 1200,
    },
    {
      name: "缓冲区域",
      value: 128,
      max: 1200,
    },
    {
      name: "命令执行",
      value: 225,
      max: 1200,
    },
    {
      name: "其他",
      value: 175,
      max: 1200,
    },
  ];
  var data2 = [
    {
      name: "信息泄露",
      value: 1259,
      max: 1500,
    },
    {
      name: "扫描行为",
      value: 1354,
      max: 1500,
    },
    {
      name: "缓冲区域",
      value: 1599,
      max: 1500,
    },
    {
      name: "命令执行",
      value: 997,
      max: 1500,
    },
    {
      name: "其他",
      value: 998,
      max: 1500,
    },
  ];
  var data3 = [
    {
      name: "信息泄露",
      value: 4587,
      max: 4600,
    },
    {
      name: "扫描行为",
      value: 2574,
      max: 4600,
    },
    {
      name: "缓冲区域",
      value: 1579,
      max: 4600,
    },
    {
      name: "命令执行",
      value: 1966,
      max: 4600,
    },
    {
      name: "其他",
      value: 1337,
      max: 4600,
    },
  ];
  let dataArr = [];
  let dataArr2 = [];
  let dataArr3 = [];
  data.forEach((item) => {
    dataArr.push(item.value);
  });
  data2.forEach((item) => {
    dataArr2.push(item.value);
  });
  data3.forEach((item) => {
    dataArr3.push(item.value);
  });
  var highChart = echarts.init(document.getElementById('highChart'))
  var middleChart = echarts.init(document.getElementById('middleChart'))
  var lowChart = echarts.init(document.getElementById('lowChart'))
  var radarChartOption = {
    radar: {
      center: ['50%', 225],
      radius: 112.5,
      splitNumber: 4,
      name: {
        formatter: function (value, indicator) {
          console.log(value, indicator)
            return '【' + value + '】';
        },
        formatter: function (value, indicator) {
          return  [
            '{a|' + value + '}',
            '{b|' + formatNum(indicator.value) + '}{c|次}'
          ].join('\n')
        },
        rich: {
          align:'center',
          a: {
            color: "#fff",
            fontSize: 32,
            lineHeight: 48,
          },
          b: {
            color: "rgba(255,79,62, 1)",
            fontSize: 36,
            fontFamily: "Num-Font"
          },
          c: {
            color: "rgba(255,79,62, 1)",
            fontSize: 32,
            padding: [0, 0, 3, 2]
          }
        }
      },
      shape: 'circle',
      startAngle: 342,
      nameGap: 36,
      indicator: data,
      // 圈圈网颜色
      splitLine: {
        show: true,
        lineStyle: {
          color: [
            'rgba(213,237,255, 0)', 'rgba(213,237,255, 0.2)', 'rgba(213,237,255, 0.2)',
            'rgba(213,237,255, 0.2)', 'rgba(213,237,255, 0.2)'
          ],
          width: '2'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(213,237,255,0.07)', 'transparent',].reverse(),
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(213,237,255, 0.2)",
          width: '2'
        },
      },
    },
    series: [{
      type: "radar",
      symbol: "circle",
      symbolSize: "8",
      label: {
        show: false,
        // 让它的点没有显示格式
        formatter: "",
        color: "#fff",
        fontStyle: {
          fontSize: 33,
        },
      },
      data: [{
        value: dataArr,
        lineStyle: { //网调线 
          color: "rgba(255,79,62, 1)",
          background: "radial-gradient(circle, rgba(255,79,62, 0) 0%, rgba(255,79,62, 0.4) 100%)"
        },
        symbolSize: 8, //圆圈大小
        itemStyle: { //调点的样式
          show: true,
          color: "rgba(255,79,62, 1)",
          fontSize: 28,
        },
        areaStyle: {
          // 内网颜色
          normal: {
            color: {
              type: 'radial',
              colorStops: [{
                offset: 0,
                color: 'rgba(255,79,62, 0)'
              }, {
                offset: 1,
                color: 'rgba(255,79,62, 0.4)'
              }],
              globalCoord: false
            },
            opacity: 1,
          }
        },
      },],
    },],
  }
  highChart.setOption(radarChartOption)
  //样式
  radarChartOption.radar.name.rich.b.color= "rgba(250,161,27, 1)"
  radarChartOption.radar.name.rich.c.color= "rgba(250,161,27, 1)"
  radarChartOption.series[0].data[0].lineStyle.color = "rgba(250,161,27, 1)"
  radarChartOption.series[0].data[0].lineStyle.background = "radial-gradient(circle, rgba(250,161,27, 0) 0%, rgba(250,161,27, 0.4) 100%)"
  radarChartOption.series[0].data[0].itemStyle.color = "rgba(250,161,27, 1)"
  radarChartOption.series[0].data[0].areaStyle.normal.color = {
    colorStops: [{
      offset: 0,
      color: 'rgba(250,161,27, 0)'
    }, {
      offset: 1,
      color: 'rgba(250,161,27, 0.4)'
    }],
  }
  //数据
  radarChartOption.radar.indicator = data2
  radarChartOption.series[0].data[0].value = dataArr2

  middleChart.setOption(radarChartOption)


  //样式
  radarChartOption.radar.name.rich.b.color= "rgba(87,239,245, 1)"
  radarChartOption.radar.name.rich.c.color= "rgba(87,239,245, 1)"
  radarChartOption.series[0].data[0].lineStyle.color = "rgba(87,239,245, 1)"
  radarChartOption.series[0].data[0].lineStyle.background = "radial-gradient(circle, rgba(87,239,245, 0) 0%, rgba(87,239,245, 0.4) 100%)"
  radarChartOption.series[0].data[0].itemStyle.color = "rgba(87,239,245, 1)"
  radarChartOption.series[0].data[0].areaStyle.normal.color = {
    colorStops: [{
      offset: 0,
      color: 'rgba(87,239,245, 0)'
    }, {
      offset: 1,
      color: 'rgba(87,239,245, 0.4)'
    }],
  }
  //数据
  radarChartOption.radar.indicator = data3
  radarChartOption.series[0].data[0].value = dataArr3
  lowChart.setOption(radarChartOption)
})