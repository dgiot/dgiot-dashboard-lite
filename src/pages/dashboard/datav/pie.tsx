
// import React, { Component } from 'react'
import React, { useState, useEffect, useRef } from 'react'
// 引入：// 引入 ECharts 主模块
// import echarts from "echarts/lib/echarts";
import * as echarts from 'echarts';
//导入饼图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
// import type { EChartInstance} from './type';
// 原文链接：https://blog.csdn.net/weixin_45582052/article/details/105164153

function Pie(props) {
  const [chartInstance, setChartInstance] = useState(null);
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = chartInstance;
    if(!myChart){
       myChart = echarts.init(document.getElementById('main'));
       setChartInstance(myChart);
    }
    
  //   if (myChart != null && myChart != undefined) {
  //     myChart.dispose();//销毁
  // }
    // 绘制图表
    // 原文链接：https://blog.csdn.net/weixin_45582052/article/details/105164153);
    myChart.setOption({
      // backgroundColor: 'rgba(2, 36, 150, 0.1)',
      //图表标题
      title: {
        text: '设备状态',
        left: 1,
        top: 1,
        width: '12rem',
        height: '24rem',
        textStyle: {
          color: '#fff',
          textBorderColor: 'red',
          fontSize:28,
          fontWeight:600,
        }
      },
      legend: {
        orient: 'vertical',
        top: '20%',
        left:"left",
        textStyle: {
          color: "#fff", // 文字的颜色。
          fontStyle: "normal", // 文字字体的风格
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: '数量',
          //图表类型
          type: 'pie',
          radius: ['30%', '50%'],
          //图表位置
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          data: props.devicelist.sort(function (a, b) { return a.value - b.value; }),
          // roseType: 'radius',  //设置不同的半径
          label: {
            color: '#fff',
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
           
          },
          // itemStyle: {
          //   color: '#fff',
          //   shadowBlur: 200,
          //   shadowColor: 'rgba(0, 0, 0, 0.5)'
          // },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          // animationType: 'scale',
          // animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
		})
  })
  // 原文链接：https://blog.csdn.net/rock_23/article/details/107885306
  // console.log(props);
  useEffect(() => () => chartInstance?.dispose(), [chartInstance]);
  return (
    <div id="main" style={{ width: '100%', height: 300 }}></div>
  )
  // return <datav.ScrollBoard  config={config} style={{ width: '100%', height: '400px'}} />



}
function areEqual(prevProps, newxProps) {
  if (prevProps.devicelist == newxProps.devicelist) {
    return true
  }
  return false
}

export default React.memo(Pie,areEqual);