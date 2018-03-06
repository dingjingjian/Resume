window.onload = function(){
    // 模拟数据 图
    var bardata = {valueA:[14,15,71,21,12,31,51,51,1,41,21,71,21,31,51,16,12,61,13,15,31,12,51,21],valueB:[43,23,31,15,42,98,48,45,23,54,66,87,25,21,31,54,53,21,54,24,54,22,32,24],valueC:[10,10,20,10,52,62,41,45,60,58,96,85,48,78,56,56,52,51,50,14,41,54,14,25,45],legend:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
    // 条形图数据处理
    function barhandle(data) {
        var bardata = data
        bardata.colorListA = []
        bardata.colorListB = []
        bardata.colorListC = []
        data.legend.forEach(function(v,i){
            // 根据数据选定不同颜色
            if(data.valueA[i]<50){
                bardata.colorListA[i]="#5FB878"
            }else if(data.valueA[i]>=50&&data.valueA[i]<70){
                bardata.colorListA[i]="#FFB800"
            }else{
                bardata.colorListA[i]="#FF5722"
            }
            if(data.valueB[i]<50){
                bardata.colorListB[i]="#5FB878"
            }else if(data.valueB[i]>=50&&data.valueB[i]<70){
                bardata.colorListB[i]="#FFB800"
            }else{
                bardata.colorListB[i]="#FF5722"
            }
            if(data.valueC[i]<50){
                bardata.colorListC[i]="#5FB878"
            }else if(data.valueC[i]>=50&&data.valueC[i]<70){
                bardata.colorListC[i]="#FFB800"
            }else{
                bardata.colorListC[i]="#FF5722"
            }
        })
        return bardata
    }
    var bardata = barhandle(bardata)
    // 模拟数据 表格
    var tabledata = [{
            "date": "0点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "1点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "2点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "3点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "4点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "5点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "6点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "7点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "8点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "9点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "10点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "11点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "12点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "13点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "14点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "15点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "16点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "17点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "18点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "19点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "20点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "21点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "22点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "date": "23点"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }]
    layui.use(['laydate','table'], function () { 
        // 时间控件
        var laydate = layui.laydate;
        var today = new Date();//初始值设为今天
        // 常规用法
        laydate.render({
            elem: '#layerdate'
            //初始值设定
            ,value: today
        });
        // 表格控件
        var table = layui.table;
        //展示已知数据
        table.render({
            elem: '#table'
            , cols: [[ //标题栏
                { field: 'date', title: '时间', align: 'center', style:'text-align: center;'}
                , { field: 'temperatureA', title: '温度A（单位：摄氏度）', width: '25%', align: 'center', style:'text-align: center;' }
                , { field: 'temperatureA', title: '温度B（单位：摄氏度）', width: '25%', align: 'center', style:'text-align: center;' }
                , { field: 'temperatureA', title: '温度C（单位：摄氏度）', width: '25%', align: 'center', style:'text-align: center;' }
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
                        name:'温度值A',
                        type:'bar',
                        data: bardata.valueA,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = bardata.colorListA
                                    return colorList[params.dataIndex]
                                },
                            }
                        },
                    },
                    {
                        name:'温度值B',
                        type:'bar',
                        data: bardata.valueB,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = bardata.colorListB
                                    return colorList[params.dataIndex]
                                },
                            }
                        },
                    },
                    {
                        name:'温度值C',
                        type:'bar',
                        data: bardata.valueC,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    var colorList = bardata.colorListC
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