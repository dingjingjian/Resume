window.onload = function(){
    // 模拟数据 图
    var linedata = {value:[3,0,1,5,4,1,8,0,2,1,3,2,6,2,4,1,2,6,4,5,1,9,2,3],legend:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
    // 模拟数据 表格
    var tabledata = [{
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 16:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 17:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 18:00"
        },{
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 16:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 17:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 18:00"
        },{
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 15:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 16:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
            , "date": "2018-02-05 17:00"
        }, {
            "location": "环保产业园3栋3楼301"
            , "line": "总线"
            , "type": "浪涌报警"
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
        // 表格控件
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
            ,limits: [10, 20, 30]
            ,limit: 10 //每页默认显示的数量
            ,text: {
                none: '暂无相关数据' //默认：无数据。
            }
        });
    });
    //柱状图控件        
    // 路径配置
    require.config({
        paths: {
            echarts: './src/echarts'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/line'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('line'));       
            var option = {
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
                    data:['浪涌报警数量（单位：条）'],
                    y:'bottom',
                    padding:10,
                    selectedMode: false
                },
                xAxis : [
                    {
                        type : 'category',
                        data : linedata.legend,
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
                        name:'浪涌报警数量（单位：条）',
                        type:'line',
                        data: linedata.value,
                        // smooth:true,
                        itemStyle: { 
                            normal: { 
                                areaStyle: { 
                                    type: 'default' 
                                },
                                color:'#08BEC1' 
                            } 
                        },
                        symbol:'emptyCircle'
                    }
                ]
            };                                    

            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
};