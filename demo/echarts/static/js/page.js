window.onload = function(){    
    // 模拟数据 用户登录详情 表格
    var usersdata = [{
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 16:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 17:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 18:00"
    },{
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 16:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 17:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 18:00"
    },{
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 15:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 16:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 17:00"
    }, {
        "user": "admin"
        , "time": "99"
        , "date": "2018-02-05 18:00"
    }]
    // 模拟数据 用户登录详情 表格
    var pagedata = [
        {
            "page": "首页"
            , "time": "350"
            , "ratio": "35.7%"
        }, {
            "page": "报警详情"
            , "time": "120"
            , "ratio": "12.3%"
        }, {
            "page": "电气安全监管"
            , "time": "200"
            , "ratio": "20.4%"
        }, {
            "page": "智慧能源管理"
            , "time": "310"
            , "ratio": "31.6%"
        }
    ]
    // 条形图 数据处理
    function barhandle(data) {
        var bardata = {'value':[],'legend':[]}
        data.forEach(function(v,i){
            bardata.value[i]=v.time
            bardata.legend[i]=v.page
        })
        return bardata
    }
    bardata = barhandle(pagedata)

    layui.use(['form','table'], function(){
        // 下拉框控件
        var form = layui.form;
        // 表格控件
        var userstable = layui.table;
        var pagetable = layui.table;
        // 展示已知数据
        userstable.render({
            elem: '#users'
            , cols: [[ //标题栏
                { field: 'user', title: '用户', minWidth: 120, align: 'center', style:'text-align: center;'}
                , { field: 'time', title: '登陆次数', minWidth: 100, align: 'center', style:'text-align: center;' }
                , { field: 'date', title: '最后登录时间', minWidth: 140, align: 'center', style:'text-align: center;' }
            ]]
            , data: usersdata
            //,skin: 'time' //99风格
            , even: true
            ,page: true //是否显示分页
            ,limits: [10, 20, 30]
            ,limit: 10 //每页默认显示的数量
            ,text: {
                none: '暂无相关数据' //默认：无数据。
            }
        });
        pagetable.render({
            elem: '#page'
            , cols: [[ //标题栏
                { field: 'page', title: '页面', minWidth: 120, align: 'center', style:'text-align: center;'}
                , { field: 'time', title: '访问次数', minWidth: 80, align: 'center', style:'text-align: center;' }
                , { field: 'ratio', title: '占比', minWidth: 80, align: 'center', style:'text-align: center;' }
            ]]
            , data: pagedata
            //,skin: 'time' //99风格
            // ,page: true //是否显示分页
            // ,limits: [10, 20, 30]
            // ,limit: 10 //每页默认显示的数量
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
    require(
        [
            'echarts',
            'echarts/chart/bar'
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
                },
                xAxis : [
                    {
                        type : 'category',
                        data : bardata.legend,
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
                        name: '访问次数',
                        type:'bar',
                        barMaxWidth: '100',
                        data: bardata.value,
                        itemStyle: {
                            normal: {
                                color:'#08BEC1',
                            }
                        },
                    }
                ]
            };
            
            // 为echarts对象加载数据 
            bar.setOption(baroption);
        }
    );
};