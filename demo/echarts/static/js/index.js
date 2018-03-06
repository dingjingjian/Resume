window.onload = function(){
　　/*地图 */
    var map = new BMap.Map("main");          // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别 
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_TOP_RIGHT}));
    //map.addControl(new BMap.MapTypeControl());
    //警报图标
    var myIcon_0 = new BMap.Icon("./static/img/wIcon.png", new BMap.Size(21, 34), {
        // 指定定位位置。   
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
        // 图标中央下端的尖角位置。    
        anchor: new BMap.Size(11.5, 31)
    });
    //正常图标
    var myIcon_1 = new BMap.Icon("./static/img/nIcon.png", new BMap.Size(21, 34), {
        // 指定定位位置。   
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
        // 图标中央下端的尖角位置。    
        anchor: new BMap.Size(11.5, 31)
    });
    /** 地图点数据*/
    var json_data = [
        {
            lng: 116.404,
            lat: 39.915,
            type:true
        },
        {
            lng: 116.383752,
            lat: 39.91334,
            type: false
        },
        {
            lng: 116.384502,
            lat: 39.932241,
            type: true
        }
    ];
    var pointArray = new Array();
    for (var i = 0; i < json_data.length; i++) {
        var mIcon = json_data[i].type ? myIcon_1 : myIcon_0;
        var marker = new BMap.Marker(new BMap.Point(json_data[i].lng, json_data[i].lat),{icon:mIcon}); // 创建点
        map.addOverlay(marker);    //增加点
        pointArray[i] = new BMap.Point(json_data[i].lng, json_data[i].lat);
        marker.addEventListener("click", attribute);
    }
    //让所有点在视野范围内
    //map.setViewport(pointArray);
    //获取覆盖物位置
    function attribute(e) {
        console.log($(e.target.V).index());
        var p = e.target;
        console.log("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);
    }
    
    //下拉框控件
    layui.use('form', function(){
        var form = layui.form;
    });
    //饼形图控件
    //饼形图模拟数据
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
    // 饼形图数据处理
    function pielegend(data) {
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
    var legend = pielegend(data)
    // 路径配置
    require.config({
        paths: {
            echarts: './src/echarts'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/pie'
        ],
        function (ec) {
            console.log(data)
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('pie'));         
            var option = {
                legend: {
                    orient : 'vertical',
                    x : '55%',
                    y : 'center',
                    textStyle: {
                        fontSize: '12',
                    },
                    // selectedMode: false,
                    data: legend,
                },
                backgroundColor:'#fff',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}"
                },
                calculable : true,
                series : [
                    {
                        name:'今日警报占比情况',
                        type:'pie',
                        center : ['28%', '50%'],
                        radius : ['30%', '45%'],
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
                                        fontSize : '12',
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
    //侧边栏显示隐藏
    function indexSide () {
        $('.index-side-btn').click(function () {
            if($('body').hasClass('index-side-hide')){
                $('body').removeClass('index-side-hide')
                $('.index-side-btn .layui-icon').html('&#xe603;')
            }else{
                $('body').addClass('index-side-hide')
                $('.index-side-btn .layui-icon').html('&#xe602;')
            }                
        })
    }
    indexSide()
}; 