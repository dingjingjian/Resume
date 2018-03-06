//temperature js
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
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
            , "temperatureA": "6"
            , "temperatureB": "8"
            , "temperatureC": "16"
        }, {
            "location": "环保产业园3栋3楼301"
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
                { field: 'location', title: '地点', minWidth: 260, align: 'center', style:'text-align: center;'}
                , { field: 'temperatureA', title: '温度A（单位：摄氏度）', minWidth: 90, align: 'center', style:'text-align: center;' }
                , { field: 'temperatureA', title: '温度B（单位：摄氏度）', minWidth: 90, align: 'center', style:'text-align: center;' }
                , { field: 'temperatureA', title: '温度C（单位：摄氏度）', minWidth: 90, align: 'center', style:'text-align: center;' }
                , { title: '历史趋势', minWidth: 90, align: 'center', style:'text-align: center;', toolbar: '#toolbar' }
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
        //监听工具条
        table.on('tool(tool)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var area = ['700px', '680px']//弹窗大小
            if( $(window).width() < 700){//小屏弹窗大小
                area = ['360px', '560px']
            }
            layer.open({
                type: 2
                , title: data.location + '温度历史趋势'//标题
                , resize: false //是否允许调整大小
                , content: 'temperatureLayer.html'
                , shade: 0 //不显示遮罩
                ,area: area
                ,success: function(layero, index){//layer弹出成功执行的方法
                    if( $(window).width() < 700){//小屏幕弹窗全屏显示
                        layer.full(index)
                    }
                }
                ,end : function(){
                    $('.layui-table-click').removeClass('layui-table-click')//取消表格选中状态
                }
            });
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
                　　y2:60,
                    borderWidth: 0
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