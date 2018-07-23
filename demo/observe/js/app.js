var app = {
    index:function(){

    },
    observe:function(){
        // 模拟数据 24小时温度曲线
        var linedata1 = {value1:[30,24,13,55,46,17,89,40,23,13,35,27,68,29,43,16,28,60,45,52,15,96,27,32],value2:[36,27,12,55,46,18,89,42,24,15,34,25,66,21,34,41,32,26,44,55,21,93,22,33],value3:[33,42,21,55,64,21,86,43,22,16,33,62,32,24,34,21,25,63,14,55,21,39,42,53],legend:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
        // 模拟数据 24小时湿度曲线
        var linedata2 = {value:[83,80,81,85,74,81,88,90,82,71,83,82,86,82,74,81,92,86,74,85,71,89,72,73],legend:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}
        // 折线图图控件
        var option1 = {
            grid:{
                x:40,
                y:50,
                x2:20,
                y2:80,
                borderWidth: 0
        　　},
            tooltip: {
                trigger: 'axis',
                formatter: "{a0}：{c0}℃<br>{a1}：{c1}℃<br>{a2}：{c2}℃"
            },
            legend: {
                data:['T1','T2','T3'],
                y:'bottom',
                padding:10,
                selectedMode: false,
            },
            xAxis : [
                {
                    type : 'category',
                    data : linedata1.legend,
                    axisLabel : {
                        show:true,
                        rotate: 0,
                    },
                    axisTick : {
                        onGap : 0,
                    },
                    splitLine : {
                        show : false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',                
                    splitLine : {
                        show : false
                    },
                    axisLabel : {
                        show:true
                    },
                    splitArea : {
                        show : true
                    }
                }
            ],
            series : [
                {
                    name:'T1',
                    type:'line',
                    data: linedata1.value1,
                    smooth:true,
                    itemStyle: { 
                        normal: {
                            color:'#19a7f0' 
                        } 
                    }
                },
                {
                    name:'T2',
                    type:'line',
                    data: linedata1.value2,
                    smooth:true,
                    itemStyle: { 
                        normal: {
                            color:'#5eb95e' 
                        } 
                    }
                },
                {
                    name:'T3',
                    type:'line',
                    data: linedata1.value3,
                    smooth:true,
                    itemStyle: { 
                        normal: {
                            color:'#F37B1D' 
                        } 
                    }
                }
            ]
        };
        var option2 = {
            grid:{
                x:40,
                y:50,
                x2:20,
                y2:80,
                borderWidth: 0
        　　},
            tooltip: {
                trigger: 'axis',
                formatter: "{a}：{c}%"
            },
            legend: {
                data:['湿度'],
                y:'bottom',
                padding:10,
                selectedMode: false,
            },
            xAxis : [
                {
                    type : 'category',
                    data : linedata2.legend,
                    axisLabel : {
                        show:true,
                        rotate: 0,
                    },
                    axisTick : {
                        onGap : 0,
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
                    },
                    axisLabel : {
                        show:true
                    }
                }
            ],
            series : [
                {
                    name:'湿度',
                    type:'line',
                    data: linedata2.value,
                    smooth:true,
                    itemStyle: { 
                        normal: {
                            color:'#0e90d2' 
                        } 
                    },
                    symbol:'emptyCircle'
                }
            ]
        };
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
                var myChart1 = ec.init(document.getElementById('line1'));
                var myChart2 = ec.init(document.getElementById('line2'));
                
                // 为echarts对象加载数据 
                myChart1.setOption(option1); 
                myChart2.setOption(option2); 
            }
        );
    },
    table:function(){
        //回到顶部
        $('.main-content').scroll(function(){
            if($('.main-content').scrollTop()>0){
                $('#goTop').show()
            }else{
                $('#goTop').hide()
            }
        });
        $('#goTop').click(function(){
            $('.main-content').animate({scrollTop: 0}, '500');
        });
        //报表切换
        $('#navTabs').on('click','li',function(){
            if(!$(this).hasClass('am-active')){
                $('#navTabs .am-active').removeClass('am-active');
                $(this).addClass('am-active');
                var tableTh=""
                var tableStr=""
                if($(this).index()==0){
                    //日报表
                    $('#datepicker_d').show();
                    $('#datepicker_w').hide();
                    $('#datepicker_m').hide();
                    //模拟数据载入
                    tableTh="<tr><th>记录时间</th><th>筒体温度1</th><th>筒体温度2</th><th>筒体温度3</th><th>平均温度</th><th>湿度</th><th>主轴转速</th><th>上料量</th></tr>"
                    for(i=0;i<24;i++){
                        tableStr+="<tr><td>"+ $('#datepicker_d').val()+" "+ (i<10?("0"+i):i) +":00</td><td>45</td><td>85</td><td>56</td><td>60</td><td>87</td><td>2000</td><td>2</td></tr>"           
                    };
                    tableStr+="<tr><td></td><td></td><td><strong>日产量</strong></td><td>12</td><td><strong>总产量</strong></td><td>88</td><td><strong>总上料量</strong></td><td>48</td></tr>";
                    $('.am-table thead').html(tableTh);
                    $('#table1 tbody').html(tableStr);
                    $('#table2 tbody').html(tableStr);
                    $('#table3 tbody').html(tableStr);
                    $('#table4 tbody').html(tableStr);
                    $('#table5 tbody').html(tableStr);
                }else if($(this).index()==1){
                    //周报表
                    $('#datepicker_w').show();
                    $('#datepicker_d').hide();
                    $('#datepicker_m').hide();
                    //模拟数据载入
                    var timeTd = ["6:00","12:00","18:00","24:00"]
                    tableTh="<tr><th>日期</th><th>时间</th><th>平均温度</th><th>湿度</th><th>主轴转速</th><th>日上料量</th></tr>"
                    for(i=0;i<7;i++){
                        for(j=0;j<4;j++){
                            if(j==0){
                                tableStr+="<tr><td rowspan='4'>"+ $('#datepicker_d').val()+"</td><td>"+ timeTd[j] +"</td><td>85</td><td>56</td><td>2000</td><td rowspan='4'>24</td></tr>"
                            }else{
                                tableStr+="<tr><td>"+ timeTd[j] +"</td><td>85</td><td>56</td><td>2000</td></tr>"
                            }
                        };
                    };
                    tableStr+="<tr><td></td><td></td><td><strong>周产量</strong></td><td>88</td><td><strong>周上料量</strong></td><td>48</td></tr>";
                    $('.am-table thead').html(tableTh);
                    $('#table1 tbody').html(tableStr);
                    $('#table2 tbody').html(tableStr);
                    $('#table3 tbody').html(tableStr);
                    $('#table4 tbody').html(tableStr);
                    $('#table5 tbody').html(tableStr);
                }else if($(this).index()==2){
                    //月报表
                    $('#datepicker_m').show().on('changeDate.datepicker.amui', function(ev) {
                        $('#datepicker_m').datepicker('close');
                    });
                    $('#datepicker_d').hide();
                    $('#datepicker_w').hide();
                    //模拟数据载入
                    tableTh="<tr><th>序号</th><th>日期</th><th>平均温度</th><th>湿度</th><th>主轴转速</th><th>日上料量</th></tr>"
                    for(i=0;i<7;i++){
                        tableStr+="<tr><td>"+ (i+1) +"</td><td>"+ $('#datepicker_d').val()+"</td><td>85</td><td>56</td><td>2000</td><td>24</td></tr>"
                    };
                    tableStr+="<tr><td></td><td></td><td><strong>月产量</strong></td><td>88</td><td><strong>月上料量</strong></td><td>48</td></tr>";
                    $('.am-table thead').html(tableTh);
                    $('#table1 tbody').html(tableStr);
                    $('#table2 tbody').html(tableStr);
                    $('#table3 tbody').html(tableStr);
                    $('#table4 tbody').html(tableStr);
                    $('#table5 tbody').html(tableStr);
                }
            };
        });
        //时间初始化
        var todayDate = new Date();
        $('#datepicker_d,#datepicker_w,#datepicker_m').datepicker('setValue', todayDate);
        //初始数据载入（模拟数据）
        var tableStr="";
        for(i=0;i<24;i++){
            tableStr+="<tr><td>"+ $('#datepicker_d').val()+" "+ (i<10?("0"+i):i) +":00</td><td>45</td><td>85</td><td>56</td><td>60</td><td>87</td><td>2000</td><td>2</td></tr>"           
        };
        tableStr+="<tr><td></td><td></td><td><strong>日产量</strong></td><td>12</td><td><strong>总产量</strong></td><td>88</td><td><strong>总上料量</strong></td><td>48</td></tr>";
        $('#table1 tbody').html(tableStr);
        $('#table2 tbody').html(tableStr);
        $('#table3 tbody').html(tableStr);
        $('#table4 tbody').html(tableStr);
        $('#table5 tbody').html(tableStr);
    },
    userset:function(){
        $('#checkbox').change(function(){
            if($(this).prop('checked')){
                $('.am-form-set').removeClass('am-hide');
            }else{
                $('.am-form-set').addClass('am-hide');
            }
        });
    }
}