// 组件播放状态
var playState={    
    // 轮播播放状态
    swiperEnd:false,
    // 大地图播放状态
    mapEnd:false,
    // 确权划界成果播放状态
    qqhjEnd:false
}
// 组件加载方法
var render={
    isEnd:function(){
        if(playState.swiperEnd&&playState.mapEnd&&playState.qqhjEnd){
            // 所有播放结束后执行的操作
            // 播放结束后的相关操作和方法请下载该函数下

            // 地图切换
            var _mapActive = $('.main-map').not('.active');
            $('.main-map').removeClass('active');
            $(_mapActive).addClass('active');

            // 通过ajax获取数据，加载对应数据
            // data为示例数据，实际应通过ajax获取
            var data={
                // 河流影像
                imageAndVideo: [
                    {
                        type:'image',
                        url:'./dome/map1.png'
                    },
                    {
                        type:'image',
                        url:'./dome/1.png'
                    },
                    {
                        type:'image',
                        url:'./dome/map2.png'
                    },
                    {
                        type:'video',
                        url:'./dome/loading.mp4'
                    }
                ],
                // 年径流曲线
                njlqxData:{
                    title:'南营水库水文测站年径流曲线',
                    legend:['2018','2019'],
                    data1:[6, 8, 10, 6, 3, 2,6, 8, 10, 6, 3, 2],
                    data2:[4, 10, 6, 3, 5, 3,10, 4, 8, 6, 7, 5]
                }
            }

            // 调用方法渲染需要更新的板块
            // 这里是个例子，请根据实际情况调用
            // 例：更新显示 河流影像 和 年径流曲线 板块
            render.imageAndVideo(data.imageAndVideo,4000);
            render.njlqxChart(data.njlqxData);

            // 初始化播放状态
            playState={    
                // 轮播播放状态
                swiperEnd:false,
                // 大地图播放状态
                mapEnd:false,
                // 确权划界成果播放状态
                qqhjEnd:false
            }
            // 大地图播放状态
            // 大地图播放结束后，将播放状态改为true
            playState.mapEnd=true;

            // 确权划界成果播放状态同理，播放完成后，将播放状态改为true
            playState.qqhjEnd=true;
        }
        return false
    },
    imageAndVideo:function(data,time){
        // 参数 time 图片切换时间 ms
        var imageAndVideoStr='';
        data.map(function(item,index){
            if(item.type=='video'){
                imageAndVideoStr+='<div class="swiper-slide swiper-no-swiping"><video muted><source src="'+item.url+'" /></video></div>'
            }else{
                imageAndVideoStr+='<div class="swiper-slide swiper-no-swiping"><img src="'+item.url+'"></div>'
            }
        })
        $('#imageAndVideo .swiper-wrapper').html(imageAndVideoStr);
        // 河流影像轮播
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            on: {
                init: function(){
                    this.emit('slideChangeTransitionEnd');
                },
                slideChangeTransitionEnd: function(){
                    if($(this.el).find('.swiper-slide-active video').length>0){             
                        $(this.el).find('.swiper-slide-active video')[0].play();
                        $(this.el).find('.swiper-slide-active video').on('ended', function () { 
                            if(!playState.swiperEnd) {
                                swiper.slideNext();
                            }else{
                                render.isEnd()
                            }
                        });
                    }else{
                        setTimeout(function(){
                            if(!playState.swiperEnd) {
                                swiper.slideNext();
                            }else{
                                render.isEnd()
                            }
                        },time);
                    }
                },
                reachEnd: function(){
                    playState.swiperEnd=true;
                }
            },
        });
    },
    tableInit:function(data,row,time){
        // 参数 row 每次滚动行数
        // 参数 time 滚动间隔时间 ms
        var tableStr = '';
        var tableStr = '<h2 class="card-title">'+data.title+'<span class="card-title-bg"></span></h2><div class="card-container">'
        tableStr += '<div class="info-bar"><span>断面名称：'+data.info.name+'</span><span>检测单位：'+data.info.unit+'</span><span>采样时间：'+data.info.time+'</span></div>'
        tableStr += '<ul class="level-bar"><li class="level"><span class="badge-dot level1"></span><span> I类 ('+(data.level.level1||0)+'项)</span></li>'+
        '<li class="level"><span class="badge-dot level2"></span><span> II类 ('+(data.level.level2||0)+'项)</span></li>'+
        '<li class="level"><span class="badge-dot level3"></span><span> III类 ('+(data.level.level3||0)+'项)</span></li>'+
        '<li class="level"><span class="badge-dot level4"></span><span> IV类 ('+(data.level.level4||0)+'项)</span></li>'+
        '<li class="level"><span class="badge-dot level5"></span><span> V类 ('+(data.level.level5||0)+'项)</span></li></ul>'
        tableStr +='<div class="result-table"><table><thead><tr><th>序号</th><th>检测项目</th><th>单位</th><th>结果</th><th>序号</th><th>检测项目</th><th>单位</th><th>结果</th></tr></thead></table><div class="scroll"><div class="scroll-wrapper"><div class="scroll-slide"><table><tbody>'
        data.result.map(function(item,index){
            if(index%2==1){
                tableStr+='<td><div><span class="badge-dot level'+item.level+'"></span> '+(index+1)+'</div></td><td><div>'+item.item+'</div></td><td><div>'+item.unit+'</div></td><td><div>'+item.testValue+'</div></td></tr>'
            }else{
                tableStr+='<tr><td><div><span class="badge-dot level'+item.level+'"></span> '+(index+1)+'</div></td><td><div>'+item.item+'</div></td><td><div>'+item.unit+'</div></td><td><div>'+item.testValue+'</div></td>'
            }
        })
        if(data.result.length%2==1){
            tableStr+='<td></td><td></td></td><td></td></tr>'
        }
        tableStr+='</tbody></table></div></div></div></div></div>'
        $('#riverChart').html(tableStr);
        // 表格自动滚动
        var toScroll=0;
        setInterval(function () {
            if(toScroll>-$('.scroll table').height()+$('.scroll').height()){
                toScroll=toScroll-$('.scroll table tr').height()*row
            }else{
                toScroll=0
            }
            $('.scroll-wrapper').css('transform','translate3d(0px, '+toScroll+'px, 0px)')
        }, time);
    },
    njlqxChart:function(data){
        $('#riverChart').html('<h2 class="card-title">'+data.title+'<span class="card-title-bg"></span></h2> <div class="card-container"><div id="njlqx" style="height: 100%;"></div></div>')
        var njlqxChart = echarts.init(document.getElementById('njlqx'));
        render.chartOption.njlqx.legend.data=data.legend;
        render.chartOption.njlqx.series[0].name=data.legend[0];
        render.chartOption.njlqx.series[0].data=data.data1;
        render.chartOption.njlqx.series[1].name=data.legend[1];
        render.chartOption.njlqx.series[1].data=data.data2;
        njlqxChart.setOption(render.chartOption.njlqx);
    },
    zltjChart:function(data){
        var zltjChart = echarts.init(document.getElementById('zltj'));
        render.chartOption.pie.title[0].text='巡河事件总量统计'
        render.chartOption.pie.title[1].text=data.total;
        render.chartOption.pie.series[0].data=data.data;
        zltjChart.setOption(render.chartOption.pie);
    },
    clqkChart:function(data){
        var clqkChart = echarts.init(document.getElementById('clqk'));
        render.chartOption.pie.title[0].text='上月巡河事件处理情况'
        render.chartOption.pie.title[1].text=data.total;
        render.chartOption.pie.series[0].data=data.data;
        clqkChart.setOption(render.chartOption.pie);
    },
    zzjgChart:function(data){
        var zzjgChart = echarts.init(document.getElementById('zzjg'));
        render.chartOption.funnel.series[0].data=data.data;
        zzjgChart.setOption(render.chartOption.funnel);
    },
    xhsjChart:function(data){
        var xhsjChart = echarts.init(document.getElementById('xhsj'));
        render.chartOption.xhsj.xAxis[0].data=data.xAxis;
        render.chartOption.xhsj.series[0].data=data.data;
        xhsjChart.setOption(render.chartOption.xhsj);
    },
    gdpChart:function(data,time){
        // 参数 time 滚动间隔时间 ms
        var gdpChart = echarts.init(document.getElementById('gdp'));
        render.chartOption.rose.legend.data=data.legend;
        render.chartOption.rose.series[0].data=data.data;
        gdpChart.setOption(render.chartOption.rose);
        // 图例自动翻页
        var gdpScrollIndex = 0;
        setInterval(function(){ 
            if(gdpScrollIndex<render.chartOption.rose.legend.data.length){
                gdpScrollIndex=gdpScrollIndex+13;
                gdpChart.dispatchAction({
                    type: 'legendScroll',
                    scrollDataIndex: gdpScrollIndex
                })
            }else{
                gdpChart.dispatchAction({
                    type: 'legendScroll',
                    scrollDataIndex: 0
                })
                gdpScrollIndex=0;
            }
        }, time);
    },
    // ecahrt参数配置
    chartOption:{
        // 年径流曲线
        njlqx:{
            color:['#0092f6','#53f7ff'],
            grid: {
                left: '5%',
                right: '10%',
                top:'15%',
                bottom: '5%',
                containLabel: true
            },
            legend: {
                right: '5%',
                selectedMode :false,
                textStyle:{
                    color:'#bde2ff'
                },
                data:[]
            },
            xAxis : [
                {
                    type : 'category',
                    name : '月份',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'#bde2ff'
                        }
                    },
                    axisLabel:{
                        color: '#bde2ff'
                    },
                    axisTick:{
                        show:false,
                    },
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '流量 (m³/s)',
                    axisLabel : {
                        textStyle:{
                            color:'#bde2ff'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#bde2ff'
                        }
                    },
                    axisTick:{
                        show:false,
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#bde2ff'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'',
                    type:'line',
                    symbolSize: 6,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width:2
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#051e3e'
                                }, {
                                    offset: 1,
                                    color: '#33abff'
                                }]),
                            }
                        }
                    },
                    data:[]
                },
                {
                    name:'',
                    type:'line',
                    symbolSize: 6,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width:2
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#051e3e'
                                }, {
                                    offset: 1,
                                    color: '#40a1b2'
                                }]),
                            }
                        }
                    },
                    data:[]
                }
            ]
        },
        // 巡河事件数折线图
        xhsj:{
            color:['#0092f6'],
            title: {
                text: '近六个月巡河事件数',
                x: 'center',
                y: 'top',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#bde2ff',
                }
            },
            grid: {
                left: '5%',
                right: '10%',
                top:'20%',
                bottom: '5%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    name : '月份',
                    boundaryGap : false,
                    axisLine:{
                        lineStyle:{
                            color:'#bde2ff'
                        }
                    },
                    axisLabel:{
                        color: '#bde2ff'
                    },
                    axisTick:{
                        show:false,
                    },
                    data : []
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '事件数',
                    axisLabel : {
                        textStyle:{
                            color:'#bde2ff'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#bde2ff'
                        }
                    },
                    axisTick:{
                        show:false,
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#bde2ff'
                        }
                    }
                }
            ],
            series : [
                {
                    type:'line',
                    symbolSize: 6,
                    smooth: true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width:2
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#051e3e'
                                }, {
                                    offset: 1,
                                    color: '#33abff'
                                }]),
                            }
                        }
                    },
                    data:[]
                }
            ]
        },
        // 饼图
        pie:{
            title: [{
                text: '',
                x: 'center',
                y: 'top',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#bde2ff',
                }
            },{
                text: '',
                subtext: '总量 (件)',
                x: 'center',
                y: '45%',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#3fa7f7',
                    lineHeight:6
                },
                subtextStyle: {
                    fontSize: 10,
                    fontWeight: 'normal',
                    align:"center",
                    color:'#bde2ff',
                    lineHeight:5
                }
            }],
            series: [
                {
                    type: 'pie',
                    radius: ['40', '26'],
                    center: ['50%', '55%'],
                    color: ['#3fa7f7', '#f67657'],
                    silent : true,
                    itemStyle:{
                        normal: {
                            borderWidth: 3, 
                            borderColor: '#051e3e',
                        }
                    },
                    data: [],
                    labelLine: {
                        normal: {
                            show: true,
                            length: 20,
                            length2: 5
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{b|{b}}\n{c|{c}}',
                        rich: {
                                b: {
                                    align: 'left',
                                    fontSize: 10
                                },
                                c: {
                                    align: 'center',
                                    fontSize: 10
                                }
                            }
                        }
                    }
                }
            ]
            
        },
        // 漏斗图
        funnel:{
            color:['#3fa7f7', '#f67657', '#caa2f1'],
            title: {
                text: '组织架构',
                x: 'center',
                y: 'top',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#bde2ff',
                }
            },
            series: [
                {
                    type:'funnel',
                    left: '20%',
                    top: 60,
                    bottom: 40,
                    width: '60%',
                    min: 0,
                    max: 16,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter :'{b}{c}人',
                        color : '#fff'
                    },
                    itemStyle:{
                        borderColor:'transparent'
                    },
                    data: []
                }
            ]
        },
        // 玫瑰饼图
        rose:{
            color:['#f67657','#f5f570', '#b1f96a', '#48db48', '#3ffdfb','#3fa7f7',  '#4e4cff', '#caa2f1'],
            legend: {
                type : 'scroll',
                x : 'left',
                y : 'top',
                orient :'vertical',
                textStyle : {
                    color : '#fff'
                },
                pageIconColor :'#aaa',
                pageIconInactiveColor :'#2f4554',
                data:[]
            },
            series : [
                {
                    type:'pie',
                    radius : [30, 90],
                    center : ['60%', '50%'],
                    roseType : 'area',
                    label: {
                        normal: {
                            formatter: "{b} ({c})"
                        }
                    },
                    data:[]
                }
            ]
        }
    }
}

// 页面首次载入

// 通过ajax获取数据
// data为示例数据，实际应通过ajax获取
var data={
    // 河流影像
    imageAndVideo: [
        {
            type:'video',
            url:'./dome/loading.mp4'
        },
        {
            type:'image',
            url:'./dome/map1.png'
        },
        {
            type:'image',
            url:'./dome/1.png'
        },
        {
            type:'image',
            url:'./dome/map2.png'
        }
    ],
    // 地面水水质监测结果
    tableData:{
        title:'地表水水质检测结果表',
        //基本信息
        info:{
            name:'扎子沟',
            unit:'武威市环境保护监测站',
            time:'2019年12月12日'
        },
        //等级统计
        level:{
            level1:1,
            level3:3,
            level5:5,
        },
        //表格数据
        result:[
            { item:'水温',name:'WT',unit:'℃',testValue:'30',level:0 },
            { item:'PH',name:'PH',unit:'-',testValue:'7',level:0 },
            { item:'溶解氧',name:'DO',unit:'毫克/升',testValue:'1000',level:2 },
            { item:'高锰酸盐指数',name:'CODMN',unit:'毫克/升',testValue:'1.2e-3',level:0 },
            { item:'化学需氧量',name:'COD',unit:'毫克/升',testValue:'5e+3',level:1 },
            { item:'生化需氧量',name:'BOD',unit:'毫克/升',testValue:'6.8e-3',level:3 },
            { item:'氨氮',name:'NH3N',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'总磷',name:'TP',unit:'毫克/升',testValue:'1e+10',level:4 },
            { item:'总氮',name:'TN',unit:'毫克/升',testValue:'1e+10',level:5 },
            { item:'铜',name:'CU',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'锌',name:'ZN',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'氟化物',name:'F',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'硒',name:'SE',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'砷',name:'ARS',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'汞',name:'HG',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'镉',name:'CD',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'六价铬',name:'CR6',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'铅',name:'PB',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'氰化物',name:'CN',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'挥发酚',name:'VLPH',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'石油类',name:'OIL',unit:'毫克/升',testValue:'1e+10',level:1 },
            { item:'阴离子表面活性剂',name:'LAS',unit:'毫克/升',testValue:'1e+10',level:0 },
            { item:'硫化物',name:'S2',unit:'毫克/升',testValue:'1e+10',level:2 },
            { item:'粪大肠杆菌',name:'FCG',unit:'个/升',testValue:'1e+10',level:0 }
        ]
    },
    // 巡河时间总量统计
    zltjData:{
        total:260,// 饼形图中间总数
        data:[{ value: 200,name: '已处理'}, { value: 60, name: '未处理' }]
    },
    // 上月巡河事件处理情况
    clqkData:{
        total:200,// 饼形图中间总数
        data:[{ value: 100,name: '已处理'}, { value: 100, name: '未处理' }]
    },
    // 组织架构
    zzjgData:{
        data:[{value: 54, name: '乡镇河长'}, {value: 8, name: '区级河长'}, {value: 2, name: '总河长'}]
    },
    // 近六个月巡河事件
    xhsjData:{
        xAxis:['1','2','3','4','5','6'],
        data:[6, 8, 10, 6, 3, 2]
    },
    // GDP饼图数据
    gdpData:{
        legend:['test1','test2','test3','test4','test5','test6','test7','test8','test9','test10','test11','test12','test13','test14','test15','test16','test17','test18','test19','test20','test21','test22','test23','test24','test25','test26','test27','test28','test29','test30'],
        data:[{value:10, name:'test1'},{value:45, name:'test2'},{value:15, name:'test3'},{value:25, name:'test4'},{value:20, name:'test5'},{value:35, name:'test6'},{value:30, name:'test7'},{value:40, name:'test8'},{value:10, name:'test9'},{value:25, name:'test10'},{value:15, name:'test11'},{value:25, name:'test12'},{value:20, name:'test13'},{value:35, name:'test14'},{value:30, name:'test15'},{value:10, name:'test16'},{value:45, name:'test17'},{value:15, name:'test18'},{value:25, name:'test19'},{value:20, name:'test20'},{value:35, name:'test21'},{value:30, name:'test22'},{value:40, name:'test23'},{value:10, name:'test24'},{value:25, name:'test25'},{value:15, name:'test26'},{value:25, name:'test27'},{value:20, name:'test28'},{value:35, name:'test29'},{value:30, name:'test30'}]
    }
}

// ajax数据获取后，调用对应板块的方法进行数据显示

// 河流影像加载
render.imageAndVideo(data.imageAndVideo,4000);

// 表格数据载入
render.tableInit(data.tableData,5,5000);

// 年径流曲线
// render.njlqxChart(data.njlqxData);

// 巡河时间总量统计
render.zltjChart(data.zltjData);

// 上月巡河事件处理情况
render.clqkChart(data.clqkData);

// 组织架构
render.zzjgChart(data.zzjgData);

// 近六个月巡河事件数
render.xhsjChart(data.xhsjData);

// GDP饼图
render.gdpChart(data.gdpData,3000);


// 播放状态监控

// 大地图播放状态
// 大地图播放结束后，将播放状态改为true
playState.mapEnd=true;

// 确权划界成果播放状态同理，播放完成后，将播放状态改为true
playState.qqhjEnd=true;

// 判断播放状态 写到结束回调中
console.log(render.isEnd())