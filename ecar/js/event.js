// 联动select
$('#cnMap').cxSelect({ 
	url: 'js/cityData.min.json', 
	selects: ['province', 'city'], 
	nodata: 'none' 
}); 
//选择样式重复调用
$("#city").bind("change",function(){
    $('#city').each(
        function(){
            $("#city").css({
                "background-image": "none",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "none"
            });
        });
    $('#city').each(
        function(){
            $("#city").css({
                "color":"rgb(102, 255, 255)",
                "background-image": "radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-o-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-ms-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-moz-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-webkit-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "-webkit-background-clip": "text",
                // "-webkit-text-fill-color": "transparent"
            });
        });
});
//选择样式重复调用
$("#province").bind("change",function(){
    $('#province').each(
        function(){
            $("#province").css({
                "background-image": "none",
                "-webkit-background-clip": "none",
                "-webkit-text-fill-color": "none"
            });
        });
    $('#province').each(
        function(){
            $("#province").css({
                "color":"rgb(102, 255, 255)",
                "background-image": "radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-o-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-ms-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-moz-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "background-image": "-webkit-radial-gradient(left bottom , ellipse cover , rgb(59, 206, 255) , rgb(52, 204, 255) 39% , rgb(55, 255, 255) 68% , rgb(52, 255, 255) 97%)",
                "-webkit-background-clip": "text",
                // "-webkit-text-fill-color": "transparent"
            });
        });
});
//表单验证start 
// $("#subBut").click(function(){ 
// 	if (!$("#cnMap .province").val() && !$("#cnMap .province").attr('disabled')) 
// 	{ 
// 		alert('请选择省份 :)'); 
// 		$("#cnMap .province").focus(); 
// 		return false; 
// 	} else if (!$("#cnMap .city").val() && !$("#cnMap .city").attr('disabled')) { 
// 		alert('请选择市 :)'); 
// 		$("#cnMap .city").focus(); 
// 		return false; 
// 	} else if (!$("#cnMap .region").val() && !$("#cnMap .region").attr('disabled')) { 
// 		alert('请选择县区 :)'); 
// 		$("#cnMap .region").focus(); 
// 		return false; 
// 	} else { 
// 		return true; 
// 	} 
// }); 
//表单验证end
//electricity-echart
var myChart = echarts.init(document.getElementById('electricity-echart'));
option = {
	title:{
		top:'12%',
		right:'6%',
		text:'单位:万度',
		textStyle:{
			color:'#60F8FB',
			fontSize:'12',
			fontStyle:'normal',
		},
	},
	backgroundColor: 'rgba(0,0,0,0)',
	color: ['#60F8FD'],
	tooltip : {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	left: '3%',
    	right: '4%',
    	bottom: '3%',
    	containLabel: true
    },
    xAxis : [
    {
    	type : 'category',
    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},
    	data : ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15','7.16'],
    	axisTick: {show: false},
    }

    ],
    yAxis : [
    {   

    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},

    	axisTick: {
    		alignWithLabel: true,
    	}
    }
    ],
    series : [
    {
    	name:'总电量度数',
    	type:'bar',
    	barWidth: '40%',
    	data:[5, 6.5, 7, 8, 4,7, 5]
    },

    ],
    label: {
    	normal: {
    		show:true,
    		position: 'top',
    		formatter: '{c}',
    		color:'yellow',
    	}
    },
    itemStyle: {
    	normal: {
    		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    			offset: 0,
    			color: 'rgba(94, 247,250, 1)'
    		}, {
    			offset: 1,
    			color: 'rgba(94,208,245,1)'
    		}]),
    		shadowColor: 'rgba(0, 0, 0, 0.1)',
    		shadowBlur: 10
    	}
    }
};
myChart.setOption(option);
//money-echart
var myChart = echarts.init(document.getElementById('money-echart'));
option = {
	title:{
		top:'12%',
		right:'6%',
		text:'单位:万元',
		textStyle:{
			color:'#60F8FB',
			fontSize:'12',
			fontStyle:'normal',
		},
	},
	backgroundColor: 'rgba(0,0,0,0)',
	color: ['#60F8FD'],
	tooltip : {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	left: '3%',
    	right: '4%',
    	bottom: '3%',
    	containLabel: true
    },
    xAxis : [
    {
    	type : 'category',
    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},
    	data : ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15','7.16'],
    	axisTick: {show: false},
    }

    ],
    yAxis : [
    {   

    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},
    	axisTick: {
    		alignWithLabel: true,
    	}
    }
    ],
    series : [
    {
    	name:'总电量度数',
    	type:'bar',
    	barWidth: '40%',
    	data:[5, 6.5, 7, 8, 4,7, 5]
    },

    ],
    label: {
    	normal: {
    		show: true,
    		position: 'top',
    		formatter: '{c}',
    		color:'yellow',

    	}
    },
    itemStyle: {
    	normal: {
    		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    			offset: 0,
    			color: 'rgba(94, 247,250, 1)'
    		}, {
    			offset: 1,
    			color: 'rgba(94,208,245,1)'
    		}]),
    		shadowColor: 'rgba(0, 0, 0, 0.1)',
    		shadowBlur: 10
    	}
    }
};
myChart.setOption(option);
//device-echart
var myChart = echarts.init(document.getElementById('device-echart'));
option = {
	backgroundColor: 'rgba(0,0,0,0)',
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {d}%"
	},
	series : [
	{
		name: '设备正常运行状态比率',
		type: 'pie',
		radius : '55%',
		center: ['50%', '50%'],
		color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: 'rgba(94, 247,250, 1)'
		}, {
			offset: 1,
			color: 'rgba(94,208,245,1)'
		}]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: 'rgba(38,92,109, 1)'
		}, {
			offset: 1,
			color: 'rgba(38,86,109,1)'
		}]),],
		data:[
		{
			value:90, name:'正常运行占比',
			labelLine: {
				normal: {
					lineStyle: {
						color: '#60F8FB'
					},
					smooth: 0.2,
					length: 10,
					length2: 5
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						formatter: "{b}" 
					}
				}
			},
			label: {
				normal: {
					textStyle: {
						color: '#60F8FB',
						fontSize:'16'
					}
				}
			},
		},
		{
			value:10, name:'异常运行占比',
			labelLine: {
				normal: {
					lineStyle: {
						color: 'rgba(0,0,0,0)'
					},
					length: 2,
					length2: 20
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						formatter: "{b}" 
					}
				}
			},
			label: {
				normal: {
					textStyle: {
						color: 'rgba(0,0,0,0)',
						fontSize:'10'
					}
				}
			},
		}
		],
	}
	]
};
myChart.setOption(option);

// 7天前
//electricity-echart
var myChart = echarts.init(document.getElementById('electricity-echart-week'));
option = {
	title:{
		top:'12%',
		right:'6%',
		text:'单位:万度',
		textStyle:{
			color:'#60F8FB',
			fontSize:'12',
			fontStyle:'normal',
		},
	},
	backgroundColor: 'rgba(0,0,0,0)',
	color: ['#60F8FD'],
	tooltip : {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	left: '3%',
    	right: '4%',
    	bottom: '3%',
    	containLabel: true
    },
    xAxis : [
    {
    	type : 'category',
    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},
    	data : ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15','7.16'],
    	axisTick: {show: false},
    }

    ],
    yAxis : [
    {   

    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},

    	axisTick: {
    		alignWithLabel: true,
    	}
    }
    ],
    series : [
    {
    	name:'总电量度数',
    	type:'bar',
    	barWidth: '40%',
    	data:[5, 6.5, 7, 8, 4,7, 5]
    },

    ],
    label: {
    	normal: {
    		show: true,
    		position: 'top',
    		formatter: '{c}',
    		color:'yellow',
    	}
    },
    itemStyle: {
    	normal: {
    		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    			offset: 0,
    			color: 'rgba(94, 247,250, 1)'
    		}, {
    			offset: 1,
    			color: 'rgba(94,208,245,1)'
    		}]),
    		shadowColor: 'rgba(0, 0, 0, 0.1)',
    		shadowBlur: 10
    	}
    }
};
myChart.setOption(option);
//money-echart
var myChart = echarts.init(document.getElementById('money-echart-week'));
option = {
	title:{
		top:'12%',
		right:'6%',
		text:'单位:万元',
		textStyle:{
			color:'#60F8FB',
			fontSize:'12',
			fontStyle:'normal',
		},
	},
	backgroundColor: 'rgba(0,0,0,0)',
	color: ['#60F8FD'],
	tooltip : {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	left: '3%',
    	right: '4%',
    	bottom: '3%',
    	containLabel: true
    },
    xAxis : [
    {
    	type : 'category',
    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},
    	data : ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15','7.16'],
    	axisTick: {show: false},
    }

    ],
    yAxis : [
    {   

    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},

    	axisTick: {
    		alignWithLabel: true,
    	}
    }
    ],
    series : [
    {
    	name:'总电量度数',
    	type:'bar',
    	barWidth: '40%',
    	data:[5, 6.5, 7, 8, 4,7, 5]
    },

    ],
    label: {
    	normal: {
    		show: true,
    		position: 'top',
    		formatter: '{c}',
    		color:'yellow',
    	}
    },
    itemStyle: {
    	normal: {
    		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    			offset: 0,
    			color: 'rgba(94, 247,250, 1)'
    		}, {
    			offset: 1,
    			color: 'rgba(94,208,245,1)'
    		}]),
    		shadowColor: 'rgba(0, 0, 0, 0.1)',
    		shadowBlur: 10
    	}
    }
};
myChart.setOption(option);
//device-echart
var myChart = echarts.init(document.getElementById('device-echart-week'));
option = {
	backgroundColor: 'rgba(0,0,0,0)',
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {d}%"
	},
	series : [
	{
		name: '设备正常运行状态比率',
		type: 'pie',
		radius : '55%',
		center: ['50%', '50%'],
		color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: 'rgba(94, 247,250, 1)'
		}, {
			offset: 1,
			color: 'rgba(94,208,245,1)'
		}]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: 'rgba(38,92,109, 1)'
		}, {
			offset: 1,
			color: 'rgba(38,86,109,1)'
		}]),],
		data:[
		{
			value:90, name:'正常运行占比',
			labelLine: {
				normal: {
					lineStyle: {
						color: '#60F8FB'
					},
					smooth: 0.2,
					length: 10,
					length2: 5
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						formatter: "{b}" 
					}
				}
			},
			label: {
				normal: {
					textStyle: {
						color: '#60F8FB',
						fontSize:'16'
					}
				}
			},
		},
		{
			value:10, name:'异常运行占比',
			labelLine: {
				normal: {
					lineStyle: {
						color: 'rgba(0,0,0,0)'
					},
					length: 2,
					length2: 20
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						formatter: "{b}" 
					}
				}
			},
			label: {
				normal: {
					textStyle: {
						color: 'rgba(0,0,0,0)',
						fontSize:'10'
					}
				}
			},
		}
		],
	}
	]
};
myChart.setOption(option);
// 30天前
//electricity-echart
var myChart = echarts.init(document.getElementById('electricity-echart-month'));
option = {
	title:{
		top:'12%',
		right:'6%',
		text:'单位:万度',
		textStyle:{
			color:'#60F8FB',
			fontSize:'12',
			fontStyle:'normal',
		},
	},
	backgroundColor: 'rgba(0,0,0,0)',
	color: ['#60F8FD'],
	tooltip : {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	left: '3%',
    	right: '4%',
    	bottom: '3%',
    	containLabel: true
    },
    xAxis : [
    {
    	type : 'category',
    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},
    	data : ['7.1', '7.1', '7.2', '7.3', '7.4', '7.5','7.6','7.7','7.8','7.9','7.10', '7.11', '7.12', '7.13', '7.14', '7.15','7.16','7.17','7.18','7.19','7.20','7.21','7.22', '7.23', '7.24', '7.25','7.26','7.27','7.28','7.29','7.30'],
    	axisTick: {show: false},
    }

    ],
    yAxis : [
    {   

    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},

    	axisTick: {
    		alignWithLabel: true,
    	}
    }
    ],
    series : [
    {
    	name:'总电量度数',
    	type:'bar',
    	barWidth: '40%',
    	data:[5, 6.5, 7, 8, 4,7,5,5, 6.5, 7, 8, 4,7,5,5, 6.5, 7, 8, 4,7,5,5, 6.5, 7, 8, 4,7,5,8,9]
    },

    ],
    label: {
    	normal: {
    		show: true,
    		position: 'top',
    		formatter: '{c}',
    		color:'yellow',
    	}
    },
    itemStyle: {
    	normal: {
    		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    			offset: 0,
    			color: 'rgba(94, 247,250, 1)'
    		}, {
    			offset: 1,
    			color: 'rgba(94,208,245,1)'
    		}]),
    		shadowColor: 'rgba(0, 0, 0, 0.1)',
    		shadowBlur: 10
    	}
    }
};
myChart.setOption(option);
//money-echart
var myChart = echarts.init(document.getElementById('money-echart-month'));
option = {
	title:{
		top:'12%',
		right:'6%',
		text:'单位:万元',
		textStyle:{
			color:'#60F8FB',
			fontSize:'12',
			fontStyle:'normal',
		},
	},
	backgroundColor: 'rgba(0,0,0,0)',
	color: ['#60F8FD'],
	tooltip : {
		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'cross'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
    	left: '3%',
    	right: '4%',
    	bottom: '3%',
    	containLabel: true
    },
    xAxis : [
    {
    	type : 'category',
    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},
    	data : ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15','7.16'],
    	axisTick: {show: false},
    }

    ],
    yAxis : [
    {   

    	axisLine:{
    		lineStyle:{
    			color:'#60F8FB',
    			width:1,
    		}
    	},
    	axisLabel: {
    		textStyle: {
    			color: '#60F8FB',
    			fontSize:'16'
    		},
    	},
    	splitLine:{show: false},

    	axisTick: {
    		alignWithLabel: true,
    	}
    }
    ],
    series : [
    {
    	name:'总电量度数',
    	type:'bar',
    	barWidth: '40%',
    	data:[5, 6.5, 7, 8, 4,7, 5]
    },

    ],
    label: {
    	normal: {
    		show: true,
    		position: 'top',
    		formatter: '{c}',
    		color:'yellow',
    	}
    },
    itemStyle: {
    	normal: {
    		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    			offset: 0,
    			color: 'rgba(94, 247,250, 1)'
    		}, {
    			offset: 1,
    			color: 'rgba(94,208,245,1)'
    		}]),
    		shadowColor: 'rgba(0, 0, 0, 0.1)',
    		shadowBlur: 10
    	}
    }
};
myChart.setOption(option);
//device-echart
var myChart = echarts.init(document.getElementById('device-echart-month'));
option = {
	backgroundColor: 'rgba(0,0,0,0)',
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {d}%"
	},
	series : [
	{
		name: '设备正常运行状态比率',
		type: 'pie',
		radius : '55%',
		center: ['50%', '50%'],
		color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: 'rgba(94, 247,250, 1)'
		}, {
			offset: 1,
			color: 'rgba(94,208,245,1)'
		}]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0,
			color: 'rgba(38,92,109, 1)'
		}, {
			offset: 1,
			color: 'rgba(38,86,109,1)'
		}]),],
		data:[
		{
			value:90, name:'正常运行占比',
			labelLine: {
				normal: {
					lineStyle: {
						color: '#60F8FB'
					},
					smooth: 0.2,
					length: 10,
					length2: 5
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						formatter: "{b}" 
					}
				}
			},
			label: {
				normal: {
					textStyle: {
						color: '#60F8FB',
						fontSize:'16'
					}
				}
			},
		},
		{
			value:10, name:'异常运行占比',
			labelLine: {
				normal: {
					lineStyle: {
						color: 'rgba(0,0,0,0)'
					},
					length: 2,
					length2: 20
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						formatter: "{b}" 
					}
				}
			},
			label: {
				normal: {
					textStyle: {
						color: 'rgba(0,0,0,0)',
						fontSize:'10'
					}
				}
			},
		}
		],
	}
	]
};
myChart.setOption(option);