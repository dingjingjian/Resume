window.onload = function(){
// 近两年用电量情况 js

    // 模拟数据
    // 年份
    var year = [2017,2018]
    // 用电量
    var bardata = {lastyear:[15,71,21,12,31,51,12,41,21,71,21,11],thisyear:[10,20,35,20,33,23,44],legend:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']}
    // 电量同比
    var linedata = {value:[-0.3,0.2,0.4,-0.1,0.3,0.2,0.1],legend:['1月','2月','3月','4月','5月','6月','7月']}
    // 用电量对比去年节约
    var piedata = [
        {value:11.8, name:'节约电量'},
        {value:88.2, name:'用电量'},
    ]
    //饼图标题
    $('.pie-title').text('用电量对比去年1-'+linedata.legend.length+'月节约'+piedata[0].value+'%')//动态数据，请根据实际情况做修改
    // echarts路径配置
    require.config({
        paths: {
            echarts: './src/echarts'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie'
        ],
        function (ec) {
            // 柱形图控件
            // 基于准备好的dom，初始化echarts图表
            var bar = ec.init(document.getElementById('bar'));        
            var baroption = {
                grid:{
                　　x:30,
                　　y:50,
                　　x2:20,
                　　y2:60,
                    borderWidth: 0,
            　　},        
                tooltip : {
                    trigger: 'axis',
                    formatter: "{b}<br/>{a0}年：{c0}<br/>{a1}年：{c1}"
                },
                legend: {
                    data: year,
                    y:'bottom',
                    // selectedMode: false
                },
                xAxis : [
                    {
                        type : 'category',
                        data : bardata.legend,
                        axisLabel : {
                            show:true,
                        },
                        axisTick : {
                            onGap : 0
                        },
                        splitLine : {
                            show : false
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitArea : {
                            show : true
                        },
                        splitLine : {
                            show : false
                        }
                    }
                ],
                series : [
                    {
                        name: year[0],
                        type:'bar',
                        barMaxWidth: '30',
                        data: bardata.lastyear,
                        itemStyle: {
                            emphasis: {
                                barBorderRadius: 5
                            },
                            normal: {
                                color:'#08BEC1',
                                barBorderRadius: 5
                            }
                        },
                    },
                    {
                        name: year[1],
                        type:'bar',
                        barMaxWidth: '30',
                        data: bardata.thisyear,
                        itemStyle: {
                            emphasis: {
                                barBorderRadius: 5
                            },
                            normal: {
                                color:'#B8A5DD',
                                barBorderRadius: 5
                            }
                        },
                    },
                ]
            };
            
            // 折线图控件
            var line = ec.init(document.getElementById('line'));        
            var lineoption = {
                grid:{
                    x:40,
                    y:50,
                    x2:20,
                    y2:80,
                    borderWidth: 0
            　　},
                tooltip: {
                    trigger: 'axis',
                    formatter: "{a} <br/>{c}"
                },
                xAxis : [
                    {
                        type : 'category',
                        data : linedata.legend,
                        axisTick : {
                            show:false
                        },
                        axisLabel : {
                            show:true
                        },
                        splitLine : {
                            show : false
                        },
                        // boundaryGap : false,
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitArea : {
                            show : true
                        },
                        splitLine : {
                            show : false
                        }
                    }
                ],
                series : [
                    {
                        name:'电量同比',
                        type:'line',
                        data: linedata.value,
                        // smooth:true,
                        itemStyle: { 
                            normal: { 
                                color:'#B8A5DD' 
                            } 
                        },
                        symbol:'emptyCircle'
                    }
                ]
            };
            // 饼形图控件
            var pie = ec.init(document.getElementById('pie'));
            var pieoption = {
                // calculable : true,
                series : [
                    {
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter: "{c}%",
                                    textStyle: {
                                        color: '#000'
                                    }
                                },
                                labelLine : {
                                    lineStyle: {
                                        color: '#000'
                                    }
                                },
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#08BEC1', '#B8A5DD'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        },
                        data: piedata
                    }
                ]
            };
            // 为echarts对象加载数据 
            bar.setOption(baroption);
            line.setOption(lineoption);
            pie.setOption(pieoption);
        }
    );
};