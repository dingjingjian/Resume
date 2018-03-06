window.onload = function(){
    // 模拟数据
    // 近两天的负载情况
    var linedata1 = {yesterday:[3,3,1,5,4,1,8,2,2,1,3,2,6,2,4,1,2,6,4,5,1,9,2,3],today:[0,2,1,4,5,2,3,4,2,1,1,4],legend:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
    // 近两周的负载情况
    var linedata2 = {lastweek:[35,20,31,45,34,21,12],thisweek:[31,45,34,21,12],legend:['周一','周二','周三','周四','周五','周六','周日']}
    // 今年和去年各月负载情况
    var bardata = {lastyear:[15,71,21,12,31,51,12,41,21,71,21,48],thisyear:[10,20,35,20,33,23,44],legend:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']}

    // 折线图图控件        
    // 路径配置
    require.config({
        paths: {
            echarts: './src/echarts'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var line1 = ec.init(document.getElementById('line1'));
            var line2 = ec.init(document.getElementById('line2'));        
            var option1 = {
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
                legend: {
                    data:['昨日负载（单位：千瓦）','今日负载（单位：千瓦）'],
                    y:'bottom',
                    padding:5,
                    // selectedMode: false
                },
                xAxis : [
                    {
                        type : 'category',
                        data : linedata1.legend,
                        axisLabel : {
                            show:true,
                        },
                        splitLine : {
                            show : false
                        },
                        boundaryGap : false,
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
                        name:'昨日负载（单位：千瓦）',
                        type:'line',
                        data: linedata1.yesterday,
                        smooth:true,
                        itemStyle: { 
                            normal: {
                                color:'#08BEC1' 
                            } 
                        },
                        symbol:'emptyCircle'
                    },
                    {
                        name:'今日负载（单位：千瓦）',
                        type:'line',
                        data: linedata1.today,
                        smooth:true,
                        itemStyle: { 
                            normal: {
                                color:'#B8A5DD' 
                            } 
                        },
                        symbol:'emptyCircle'
                    }
                ]
            };
            var option2 = {
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
                legend: {
                    data:['上周负载（单位：千瓦）','本周负载（单位：千瓦）'],
                    y:'bottom',
                    padding:5,
                    // selectedMode: false
                },
                xAxis : [
                    {
                        type : 'category',
                        data : linedata2.legend,
                        axisLabel : {
                            show:true,
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
                        name:'上周负载（单位：千瓦）',
                        type:'line',
                        data: linedata2.lastweek,
                        smooth:true,
                        itemStyle: { 
                            normal: {
                                color:'#08BEC1' 
                            } 
                        },
                        symbol:'emptyCircle'
                    },
                    {
                        name:'本周负载（单位：千瓦）',
                        type:'line',
                        data: linedata2.thisweek,
                        smooth:true,
                        itemStyle: { 
                            normal: {
                                color:'#B8A5DD' 
                            } 
                        },
                        symbol:'emptyCircle'
                    }
                ]
            };
            
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
                    formatter: "{b}<br/>{a0}：{c0}<br/>{a1}：{c1}"
                },
                legend: {
                    data: ['去年负载（单位：千瓦）','今年负载（单位：千瓦）'],
                    y:'bottom',
                    padding:0,
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
                        name: '去年负载（单位：千瓦）',
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
                        name: '今年负载（单位：千瓦）',
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
            // 为echarts对象加载数据 
            line1.setOption(option1); 
            line2.setOption(option2);
            bar.setOption(baroption);
        }
    );
};