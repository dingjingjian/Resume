function main(data){
    //数据渲染    
    $('[data]').each(function () {
        $(this).text(data[$(this).attr('data')])
    })
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        // allowSlidePrev : false, //是否允许上拉返回
    })
    //进入画像
    $('.btn1').click(function () {
        swiper.slideNext();
    })
    //用户排行条形图
    $('.people_bar .progress').width(data['data-5'])
    //服务排行饼形图
    var legend = ""
    var piedata = []
    var piePatternImg = []
    for (var i = 0; i < 6; i++) {
        piePatternImg.push(
            new Image()
        )
        piePatternImg[i].src = './img/pie-' + (i + 1) + '.png'
    }
    data['data-pie-1'].forEach(function (item, index) {
        legend += '<div class="item"><span class="text"><span class="icon"></span>' + item.name + '</span><span class="value">' + item.value + '</span></div>'
        piedata.push({
            value: item.value, name: item.name, itemStyle: {
                color: {
                    image: piePatternImg[index],
                    repeat: 'repeat'
                }
            }
        })
    })
    $('.legend').append(legend)
    var pie_1 = echarts.init(document.getElementById('pie_1'));
    var option1 = {
        textStyle: {
            color: '#333',
            fontSize: 14
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['30%', '80%'],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: piedata
            }
        ]
    };
    // 为echarts对象加载数据 
    pie_1.setOption(option1);
    //办事习惯饼形图
    var pie_2 = echarts.init(document.getElementById('pie_2'));
    var option2 = {
        textStyle: {
            color: '#333',
            fontSize: 12
        },
        series: [
            {
                name: '访问方式',
                type: 'pie',
                radius: ['45%', '75%'],
                hoverAnimation: false,
                label: {
                    formatter: [
                        '{b|{b}}',
                        '{label|}{d|{d}%}'
                    ].join('\n'),
                    rich: {
                        b: {
                            align: 'left',
                            padding: [2, 5, 0, 5],
                            fontSize: 14
                        },
                        label: {
                            height: 25,
                            align: 'left',
                            backgroundColor: {
                                image: './img/pc_label.png'
                            },
                        },
                        d: {
                            verticalAlign: 'bottom',
                            padding: [2, 2, 0, 2]
                        }
                    }
                },
                labelLine: {
                    length2: 5,
                    lineStyle: {
                        color: '#d1d1d1'
                    }
                },
                data: [
                    {
                        name: '手机端访问',
                        itemStyle: {
                            color: {
                                image: piePatternImg[0],
                                repeat: 'repeat'
                            }
                        },
                        label: {
                            formatter: [
                                '{b|{b}}',
                                '{d|{d}%}{label|}'
                            ].join('\n'),
                            rich: {
                                b: {
                                    align: 'right',
                                    padding: [2, 5, 0, 5]
                                },
                                label: {
                                    align: 'right',
                                    backgroundColor: {
                                        image: './img/phone_label.png'
                                    },
                                },
                                d: {
                                    align: 'right'
                                }
                            }
                        },
                    },
                    {
                        name: 'PC端访问', itemStyle: {
                            color: {
                                image: piePatternImg[5],
                                repeat: 'repeat'
                            }
                        }
                    }
                ]
            }
        ]
    };
    //数据载入
    option2.series[0].data[0].value = data['data-pie-2'][0]
    option2.series[0].data[1].value = data['data-pie-2'][1]
    // 为echarts对象加载数据 
    pie_2.setOption(option2);
    // 申请服务时间折线图
    var lineImg = new Image()
    lineImg.src = './img/line-1.png'
    var line_1 = echarts.init(document.getElementById('line_1'));
    var option3 = {
        color: '#45dbeb',
        grid: {
            top: 10,
            left: 60
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: false,
            axisLine: {
                lineStyle: {
                    color: '#45dbeb'
                }
            },
            axisLabel: {
                color: '#000',
                interval: 5,
                showMaxLabel: true
            },
            data: ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点', '23点']
        },
        yAxis: {
            type: 'value',
            axisTick: false,
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    color: '#45dbeb'
                }
            },
            axisLabel: {
                color: '#000',
                formatter: '{value} 次',
                showMinLabel: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            data: [{ value: 0, symbol: 'roundRect' }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0, symbol: 'roundRect' }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0, symbol: 'roundRect' }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0, symbol: 'roundRect' }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0, symbol: 'roundRect' }],
            markPoint: {
                symbol: 'circle',
                symbolSize: 5,
                label: {
                    show: false
                },
                itemStyle: {
                    color: '#84be33',
                    borderColor: '#45dbeb',
                    borderWidth: 1,
                    shadowColor: '#84be33',
                    shadowBlur: 10
                },
                data: [
                    {
                        name: '最大值',
                        type: 'max'
                    }
                ]
            },
            type: 'line',
            areaStyle: {
                color: {
                    image: lineImg,
                    repeat: 'repeat'
                }
            }
        }]
    };
    //数据载入
    data['data-line-1'].forEach(function (item, index) {
        option3.series[0].data[index].value = item
    })
    // 为echarts对象加载数据 
    line_1.setOption(option3);
    //办事评价条形图
    var starBar = ""
    var starImg = '<img class="star" src="./img/star.png">'
    data['data-bar-1'].forEach(function (item, index) {
        var stars = ""
        for (i = 5; i - index > 0; i--) {
            stars += starImg
        }
        starBar += '<div class="star_bar"><div class="bar"><div class="progress" style="width:' + item + '"></div><div class="stars">' + stars + '</div><div class="text">' + item + '</div></div></div>'
    })
    $('.starBar').append(starBar)
    //排名前三的服务图片、办理时间、服务名称
    var projects = ""
    data['data-13'].forEach(function (item, index) {
        projects += '<div class="project"><div class="img"><img src="' + item.imgsrc + '"></div><div class="text"><em>' + item.day + '</em>天</div><div class="item">' + item.name + '</div></div>'
    })
    $('.projects').append(projects)
    //再看一次
    $('.btn2').click(function () {
        swiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
    })
}   