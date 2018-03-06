window.onload = function(){
    // 每户的用电情况 js
    // 模拟数据 仪表盘
    var data = [{value: 60.55, name: '百分比'}]
    // 模拟数据 表格
    var tabledata = [{
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "停用|离线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|离线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|离线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    },{
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    },{
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }, {
        "location": "环保产业园3栋3楼301"
        , "power": "65.2"
        , "contact": "李工"
        , "tel": "13545454545"
        , "state": "启用|在线"
        , "no": "119ED520BB"
    }]
    // echarts路径配置
    require.config({
        paths: {
            echarts: './src/echarts'
        }
    });
    // 仪表盘控件
    require(
        [
            'echarts',
            'echarts/chart/gauge'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var gauge = ec.init(document.getElementById('gauge'));
            var gaugeoption = {
                title:{
                    text:'电量：当月消耗占比今年总量',
                    x:'center',
                    textStyle:{
                        fontSize: 16,
                        fontWeight: 'normal'
                    }
                },
                series : [
                    {
                        name:'百分比',
                        type:'gauge',
                        splitNumber: 10,       // 分割段数，默认为5
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[0.2, '#2EC7C9'],[0.8, '#5AB1EF'],[1, '#D87A80']], 
                                width: 8
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            splitNumber: 10,   // 每份split细分多少段
                            length :12,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
                        },
                        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: 'auto'
                            }
                        },
                        splitLine: {           // 分隔线
                            show: true,        // 默认显示，属性show控制显示与否
                            length :30,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                color: 'auto'
                            }
                        },
                        pointer : {
                            width : 5
                        },
                        title : {
                            show : true,
                            offsetCenter: [0, '-40%']       // x, y，单位px
                        },
                        detail : {
                            formatter:'{value}%',
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: 'auto'
                            }
                        },
                        data: data
                    }
                ]
            };

            // 为echarts对象加载数据 
            gauge.setOption(gaugeoption); 
        }
    );

    layui.use(['form','table'], function(){
        //下拉框控件
        var form = layui.form;
        //表格控件
        var table = layui.table;
        //展示已知数据
        table.render({
            elem: '#table'
            , cols: [[ //标题栏
                { field: 'location', title: '房号', minWidth: 240, align: 'center', style:'text-align: center;'}
                , { field: 'power', title: '电量（度）', minWidth: 100, align: 'center', style:'text-align: center;' }
                , { field: 'contact', title: '联系人', minWidth: 140, align: 'center', style:'text-align: center;' }
                , { field: 'tel', title: '联系电话', minWidth: 140, align: 'center', style:'text-align: center;' }
                , { field: 'state', title: '状态', minWidth: 140, align: 'center', style:'text-align: center;', templet: '#state' }
                , { field: 'no', title: '设备号', minWidth: 160, align: 'center', style:'text-align: center;' }
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
};