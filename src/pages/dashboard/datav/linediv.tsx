
// import React, { Component } from 'react'
import React, { useState, useEffect, useRef } from 'react'
// 引入：// 引入 ECharts 主模块
import * as echarts from 'echarts';
// import echarts from "echarts/lib/echarts";

//引入css样式
// import styles from './Echarts.module.less'
// 原文链接：https://blog.csdn.net/weixin_45582052/article/details/105164153
function LineDiv(props) {
  console.log("折线",props);
  
  let { columns } = props
  const [chartInstance, setChartInstance] = useState(null);
  // const [dvData, setdeviceData] = useState([]);
 
  useEffect(() => {
    let  deviceData = []
    if(columns){
     
      columns.forEach((element,index)=>{
        console.log("数据",element);
        
        let col =  {
          name: props.coltitle[index],
          type: props.chartType,
          // stack: 'Total',
          data: element,
          smooth:"true",
          lineStyle: {
            lineWidth: 1,

          },
        }
        deviceData.push(col)
      })
      // setdeviceData(deviceData)
    }
    
    // 基于准备好的dom，初始化echarts实例
    let myChart = chartInstance;
    if (!myChart) {
      myChart = echarts.init(document.getElementById('line'));
      setChartInstance(myChart);
    }
    myChart.setOption({
      title: {
        text: '设备历史数据',
        left: 'center',
        top: '2%',
        width: '12rem',
        height: '24rem',
        textStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 600,
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      legend: {
        type: 'plain',
        top: '10%',
        left: "left",
        textStyle: {
          color: "#fff", // 文字的颜色。
          fontStyle: "normal", // 文字字体的风格
        },
        data: props.coltitle ||[]
      },
      grid: {
        left: '4%',
        right: '6%',
        top: '20%',
        containLabel: true,
        // width:'100%',
        height: "65%"
      },
      xAxis: {
        name: '时间',
        type: 'category',
        boundaryGap: true,
        offset:1,
        nameTextStyle: {
          color: "#fff"
        },
        axisLine: {
            stroke: '#fff',
            lineWidth: 1,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 10,
            rotate: 0,
        },
        splitLine: {
          show: false,
        },
        data: props.rows || []
      },
      yAxis: {
        type: 'value',
        nameTextStyle:{
          color:'#fff'
        },
        axisLabel: {
            color: '#fff',
            fontSize: 10,
            rotate: 0,
        },
        splitLine: {
          show: true,
        },
      },
      dataZoom: [
        {
          type: 'slider',
          start: 0,
          end: 100
        },{
          type:'inside',
          start:0,
          end:100
        }
      ],
      series:deviceData || []
    });
    // var myChart = echarts.init(document.getElementById('eline'));
    // 绘制图表

  })
  // 原文链接：https://blog.csdn.net/rock_23/article/details/107885306
  // console.log(props);
  // useEffect(() => () => chartInstance?.dispose(), [chartInstance]);
  return (
    <div id='line' style={{ width: "100%", height: "50%" }}  >

    </div>
  )
  // return <datav.ScrollBoard  config={config} style={{ width: '100%', height: '400px'}} />



}

export default LineDiv;