
// import React, { Component } from 'react'
import React, { useState, useEffect, useRef } from 'react'
// 引入：// 引入 ECharts 主模块
// import echarts from "echarts/lib/echarts";
import * as echarts from 'echarts';
// import china from '@/assets/china.json'



// import type { EChartInstance} from './type';
// 原文链接：https://blog.csdn.net/weixin_45582052/article/details/105164153


function DeviceMap(props) {
  const data = [
    //多条飞线就多组数据
    {
      fromName: "北京",//飞线起点名字
      toName: "上海",//飞线终点名字
      coords: [
        [116.4551, 40.2539],//飞线起点经纬度
        [121.4648, 31.2891]//飞线终点经纬度
      ]
    }
  ]
  
//地图中心点      
let startPoint = {
  x: 104.114129,
  y: 37.550339
};

// 创建百度地图
let bmap = {
  center: [startPoint.x, startPoint.y],
  zoom: 5,
  roam: true,
  mapStyleV2: {
  //设置地图自定义样式
     styleId: "1c9508432f1bd060b4485d79045d5bdd",
     },
  }
     //飞线图标
let planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
let series = [
  //飞线数据
  {
    name: 'wha Top2',
    type: 'lines',
    coordinateSystem: 'bmap',
    zlevel: 2,
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      symbol: planePath,
      symbolSize: 15
    },
    lineStyle: {
      normal: {
        color: '#a6c84c',
        width: 1,
        opacity: 0.4,
        curveness: 0.2
      }
    },
    data: [{
      fromName: "北京",
      toName: "上海",
      coords:[[116.4551, 40.2539],[121.4648, 31.2891]]
    }]
  }
];
let option = {
  bmap: bmap,
  tooltip: {
    trigger: 'item'
  },
  series: series
};
  // echarts.registerMap('china', china);
  const [chartInstance, setChartInstance] = useState(null);
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = chartInstance;
    if (!myChart) {

      myChart = echarts.init(document.getElementById('map'));
      setChartInstance(myChart);
    }


    // console.log(option);

    myChart.setOption(option)
    myChart.on('click', function(params) {
      // 控制台打印数据的名称
      console.log("数据",params);
    });
  })

  useEffect(() => () => chartInstance?.dispose(), [chartInstance]);
  return (
    <div id="map" style={{ width: '100%', height: '50%' }}></div>
  )



}

export default DeviceMap;
