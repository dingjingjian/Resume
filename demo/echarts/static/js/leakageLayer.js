window.onload = function(){
    // 模拟数据 图
    var bardata = {value:[100,120,200,305,80,110,150,280,550,600,1500,800,290,80,260,290,310,1500,580,300,430,300,200,260],legend:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
    // 条形图数据处理
    function barhandle(data) {
        var bardata = data
        bardata.colorList=[]
        data.value.forEach(function(v,i){
            // 根据数据选定不同颜色
            if(v<300){
                bardata.colorList[i]="#5FB878"
            }else if(v>=300&&v<1500){
                bardata.colorList[i]="#FFB800"
            }else{
                bardata.colorList[i]="#FF5722"
            }
        })
        return bardata
    }
    bardata = barhandle(bardata)
    // 模拟数据 表格
    var tabledata = [{
        "date": "0点"
        , "leakage": "1"
    }, {
        "date": "1点"
        , "leakage": "6"
    }, {
        "date": "2点"
        , "leakage": "6"
    }, {
        "date": "3点"
        , "leakage": "6"
    }, {
        "date": "4点"
        , "leakage": "6"
    }, {
        "date": "5点"
        , "leakage": "6"
    }, {
        "date": "6点"
        , "leakage": "6"
    }, {
        "date": "7点"
        , "leakage": "6"
    }, {
        "date": "8点"
        , "leakage": "6"
    }, {
        "date": "9点"
        , "leakage": "6"
    }, {
        "date": "10点"
        , "leakage": "6"
    }, {
        "date": "11点"
        , "leakage": "6"
    }, {
        "date": "12点"
        , "leakage": "6"
    }, {
        "date": "13点"
        , "leakage": "6"
    }, {
        "date": "14点"
        , "leakage": "6"
    }, {
        "date": "15点"
        , "leakage": "6"
    }, {
        "date": "16点"
        , "leakage": "6"
    }, {
        "date": "17点"
        , "leakage": "6"
    }, {
        "date": "18点"
        , "leakage": "6"
    }, {
        "date": "19点"
        , "leakage": "6"
    }, {
        "date": "20点"
        , "leakage": "6"
    }, {
        "date": "21点"
        , "leakage": "6"
    }, {
        "date": "22点"
        , "leakage": "6"
    }, {
        "date": "23点"
        , "leakage": "6"
    }]
    layui.use(['laydate','table'], function () {
        // 时间插件
        var laydate = layui.laydate;
        laydate.render({
            elem: '#layerdate' //指定元素  
            ,value: '2018-03-01'
        });
        // 表格控件
        var table = layui.table;
        //展示已知数据
        table.render({
            elem: '#table'
            , cols: [[ //标题栏
                { field: 'date', title: '时间', width: '50%', align: 'center', style:'text-align: center;'}
                , { field: 'leakage', title: '漏电流（单位：毫安）', width: '50%', align: 'center', style:'text-align: center;' }
            ]]
            , data: tabledata
            //,skin: 'line' //表格风格
            , even: true
            // ,page: true //是否显示分页
            //,limits: [5, 7, 10]
            ,limit: 24 //每页默认显示的数量
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
            'echarts/chart/bar'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('bar'));        
            var option = {
                grid:{
                　　x:40,
                　　y:50,
                　　x2:20,
                　　y2:60
            　　},
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{c}"
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
                        name:'漏电流值',
                        type:'bar',
                        data: bardata.value,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = bardata.colorList
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
}; 