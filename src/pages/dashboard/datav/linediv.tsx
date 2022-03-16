
// import React, { Component } from 'react'
import React, { useState, useEffect, useRef } from 'react'
// 引入：// 引入 ECharts 主模块
import * as echarts from 'echarts';
// import echarts from "echarts/lib/echarts";

//引入css样式
// import styles from './Echarts.module.less'
// 原文链接：https://blog.csdn.net/weixin_45582052/article/details/105164153
function LineDiv(props) {
  const { option } = props
  // console.log(option);
  // let [id,setId] = useState("")
  const [chartInstance, setChartInstance] = useState(null);
  // useEffect(() => {
  //     let aid = ('_' + Math.random()).replace('.', '_');
  //     setId(aid)
  // },[])
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = chartInstance;
    if (!myChart) {
      myChart = echarts.init(document.getElementById('line'));
      setChartInstance(myChart);
    }
    myChart.setOption(option);
    // var myChart = echarts.init(document.getElementById('eline'));
    // 绘制图表

  })
  // 原文链接：https://blog.csdn.net/rock_23/article/details/107885306
  // console.log(props);
  useEffect(() => () => chartInstance?.dispose(), [chartInstance]);
  return (
    <div id='line' style={{ width: "100%", height: "50%" }}  >

    </div>
  )
  // return <datav.ScrollBoard  config={config} style={{ width: '100%', height: '400px'}} />



}

export default LineDiv;