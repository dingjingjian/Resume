//warn js
window.onload = function(){
    // 模拟数据 图
    var data = {value:[3,1,6,5,4,1,8,10,2,1,3,2,6,2,4,1,2,6,4,5,1,9,2,3],legend:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
    
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
                    formatter: "{a}：{c}"
                },
                xAxis : [
                    {
                        type : 'category',
                        data : data.legend,
                        axisLabel : {
                            show:true,
                        },
                        // axisTick : {
                        //     onGap : 0
                        // },
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
                        type:'bar',
                        name:'报警数量',
                        barMaxWidth: '30',
                        data: data.value,
                        itemStyle: {
                            normal: {
                                color:'#08BEC1',
                                // label : {
                                //     show: true,  
                                //     position: 'top', 
                                //     textStyle: {
                                //         color: '#000'
                                //     }
                                // }
                            }
                        }                       
                    }
                ]
            };
            
            // 为echarts对象加载数据 
            bar.setOption(baroption);
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
            var pie = ec.init(document.getElementById('pie'));
            var piedata = []
            function legend(data) {
                var legend = []                
                var total = 0
                data.value.forEach(function(v,i){
                    legend[i]=data.legend[i]+'点 '+v+' '
                    piedata[i] = {}
                    piedata[i].value=v
                    total+=v
                })
                legend.forEach(function(v,i){
                    legend[i]=v+'('+(data.value[i]/total*100).toFixed(2)+'%)'
                    piedata[i].name=legend[i]
                    piedata[i].value=data.value[i]
                })
                return legend
            }
            var legend = legend(data)
            console.log(piedata)
            var option = {
                legend: {
                    orient : 'vertical',
                    x : '320px',
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
                        center : ['160px', '50%'],
                        radius : ['70px', '120px'],
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
                        data: piedata
                    }
                ]
            };
            // 为echarts对象加载数据 
            pie.setOption(option); 
        }
    );
};