//leakage js
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
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
    }, {
        "location": "环保产业园3栋3楼301"
        , "leakage": "6"
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
                , { field: 'leakage', title: '漏电流（单位：毫安）', width: '30%', align: 'center', style:'text-align: center;' }
                , { title: '历史趋势', width: '30%', align: 'center', style:'text-align: center;', toolbar: '#toolbar' }
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
            var area = ['480px', '680px']//弹窗大小
            if( $(window).width() < 480){//小屏弹窗大小
                area = ['360px', '560px']
            }
            layer.open({
                type: 2
                , title: data.location + '漏电流历史趋势'//标题
                , resize: false //是否允许调整大小
                , content: 'leakageLayer.html'
                , shade: 0 //不显示遮罩
                ,area: area
                ,success: function(layero, index){//layer弹出成功执行的方法
                    if( $(window).width() < 480){//小屏幕弹窗全屏显示
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