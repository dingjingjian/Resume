//warn js
window.onload = function(){
    // 模拟数据 图
    var data = [
        {value:5, name:'电流预警'},
        {value:12, name:'漏电预警'},
        {value:8, name:'过压预警'},
        {value:1, name:'欠压预警'},
        {value:3, name:'欠压报警'},
        {value:18, name:'打火报警'},
        {value:15, name:'过压报警'},
        {value:9, name:'过流报警'},
        {value:25, name:'漏电报警'},
        {value:8, name:'温度报警'},
        {value:10, name:'过载报警'},
        {value:4, name:'浪涌报警'},
        {value:9, name:'短路报警'}
    ]
    // 条形图数据处理
    function barhandle(data) {
        var bardata = {value:[],legend:[],markpoint:[]}
        data.forEach(function(v,i){
            bardata.value[i]=v.value
            bardata.legend[i]=v.name
            bardata.markpoint[i]= {name: '报警数量', value: v.value, xAxis: v.name, yAxis: v.value}
        })
        return bardata
    }
    var bardata = barhandle(data)
    // 模拟数据 表格
    var tabledata = [{
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 16:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 17:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 18:00"
        },{
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 16:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 17:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 18:00"
        },{
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 16:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 17:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "短路报警"
            , "date": "2018-02-05 18:00"
        }]
    layui.use(['laydate','table'], function () {
        // 时间控件
        var laydate = layui.laydate;
        var today = new Date();//初始值设为今天
        // 常规用法
        laydate.render({
            elem: '#date'
            //初始值设定
            ,value: today
        });
        //表格控件
        var table = layui.table;
        //展示已知数据
        table.render({
            elem: '#table'
            , cols: [[ //标题栏
                { field: 'location', title: '地点', minWidth: 240, align: 'center', style:'text-align: center;'}
                , { field: 'line', title: '线路', minWidth: 120, align: 'center', style:'text-align: center;' }
                , { field: 'type', title: '报警类型', minWidth: 140, align: 'center', style:'text-align: center;' }
                , { field: 'date', title: '报警时间', minWidth: 160, align: 'center', style:'text-align: center;' }
            ]]
            , data: tabledata
            //,skin: 'line' //表格风格
            , even: true
            ,page: true //是否显示分页
            ,limits: [10, 20, 30]//分页选择
            ,limit: 10 //每页默认显示的数量
            ,text: {
                none: '暂无相关数据' //默认：无数据。
            }
        });
    });
    
    // echarts路径配置
    require.config({
        paths: {
            echarts: './src/echarts'
        }
    });
    // 柱状图控件      
    require(
        [
            'echarts',
            'echarts/chart/bar'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('bar'));        
            var option = {
                grid:{
                　　x:30,
                　　y:50,
                　　x2:20,
                　　y2:60,
                    borderWidth: 0,
            　　},
                xAxis : [
                    {
                        type : 'category',
                        data : bardata.legend,
                        axisLabel : {
                            show:true,
                            rotate: 45,
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
                        name:'报警数量',
                        type:'bar',
                        barMaxWidth: '30',
                        data: bardata.value,
                        markPoint : {
                            data : bardata.markpoint,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
                                            '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
                                            '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
                                            '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
                                        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
                                        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
                                        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
                                    ];
                                    return colorList[params.dataIndex]
                                },
                            }
                        },
                    },
                ]
            };                                    

            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
    // 饼形图控件
    require(
        [
            'echarts',
            'echarts/chart/pie'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('pie'));
            function legend(data) {
                var legend = []
                var total = 0
                data.forEach(function(v,i){
                    legend[i]=v.name+' '+v.value+' '
                    total+=v.value
                })
                legend.forEach(function(v,i){
                    legend[i]=v+'('+(data[i].value/total*100).toFixed(2)+'%)'
                    data[i].name=legend[i]
                })
                return legend
            }
            var legend = legend(data)
            var option = {
                legend: {
                    orient : 'vertical',
                    x : '60%',
                    y : 'center',
                    textStyle: {
                        fontSize: '14',
                    },
                    //selectedMode: false,
                    data: legend,
                },                
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}"
                },
                calculable : true,
                series : [
                    {
                        name:'用电报警饼形图',
                        type:'pie',
                        center : ['30%', '50%'],
                        radius : ['40%', '55%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '14',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data: data
                    }
                ]
            };
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
};