
import View from './view';
import Product from "./product";
import ActiveRing from "./activeRing";
import Scroll from "./scroll";
import Maps from './maps';
import DeviceMap from './deviceMap'

import Pie from "./pie";
import LineDiv from './linediv'
import { Switch, Route, Link, withRouter, useHistory } from 'react-router-dom';
import {
  Form,
  Select,
  DatePicker,
  Button,
  Carousel
} from '@arco-design/web-react';
import styles from "./style/index.module.less";
import "./style/index.less"
import * as datav from '@jiaminghi/data-view-react';
// import React from "react"
import React, { useState, useEffect, useRef } from 'react'
// import { useHistory } from "react-router-dom";
// import axios from "axios";

import { Loading } from 'element-react';
import 'element-theme-default';

import img1 from "./img/tleft/组 5350@2x(1).png";
import img2 from "./img/tleft/组 5350@2x(2).png";
import img3 from "./img/tleft/组 5350@2x(3).png";
import img4 from "./img/tleft/产品.png";
import { HttpService } from "@/utils/request";
const httpService = new HttpService()

const FormItem = Form.Item;
const Option = Select.Option;

function Datav() {
  const history = useHistory();
  function formatZero(num, len) {
    if (String(num).length > len) return num;
    return (Array(len).join("0") + num).slice(-len);
  }
  //原文链接：https://blog.csdn.net/qq_40492771/article/details/115463015
  const option1 = {
    title: {
      text: '状态对比图',
      left: 'center',
      top: '10%',
      width: '12rem',
      height: '24rem',
      textStyle: {
        color: '#fff',
        textBorderColor: 'red',
        fontSize: 28,
        fontWeight: 600,
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b0} <br ?>{a0}: {c0}<br />{a1}: {c1}'
    },
    legend: {
      type: 'plain',
      // left: true,
      icon: "roundRect",
      orient: 'vertical',
      top: '20%',
      left: "left",
      textStyle: {
        color: "#fff", // 文字的颜色。
        fontStyle: "normal", // 文字字体的风格
      }
    },
    grid: {
      left: '8%',
      right: '8%',
      top: '40%',
      containLabel: true,
      // width:'100%',
      height: "50%"
    },
    xAxis: [
      {
        name: "时间",
        show: "true",
        type: 'category',
        axisLabel: {
          formatter: function (value, idx) {
            var date = new Date(value);
            return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
          },

        },
        nameTextStyle: {
          color: "#fff"
        },
        boundaryGap: false,
        data: ['12-13', '12-20', '12-27', '1-03', '1-10']
      }
    ],
    yAxis: [
      {
        name: "数量",
        show: "true",
        type: 'value',
        nameTextStyle: {
          color: "#fff"
        },
      }
    ],
    series: [
      {
        //图表位置
        center: ['50%', '50%'],
        name: '在线',
        type: 'line',
        areaStyle: {
          color: '#6699FF'
        },
        itemStyle: {
          color: '#6699FF',
        },
        lineStyle: {
          color: '#6699FF',
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        emphasis: {
          focus: 'series'
        },
        // lineArea: {
        //   show: true,
        //   gradient: ['#fff', '#146fc0'],
        // },
        data: [20, 150, 100, 360, 50]
      },
      {
        name: '全部',
        type: 'line',
        areaStyle: {
          color: '#A1E6CE'
        },
        itemStyle: {
          color: '#A1E6CE',
        },
        lineStyle: {
          color: '#A1E6CE',
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        emphasis: {
          focus: 'series'
        },
        data: [1500, 1000, 1300, 1200, 1800]
      },
    ]
  }
  // const deviceCount = [
  //   0, 0, 1, 2, 3
  // ]

  const [deviceCount, setdeviceCount] = useState([0, 0, 0, 0, 0]);
  const [deviceList, setdeviceList] = useState([]);
  const [productList, setproductList] = useState([]);
  let interval = useRef(null)
  let currentTime = useRef(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [MarkerList, setMarkerList] = useState([])
  const [header, setHeader] = useState([])
  const [errorlist, setErrorList] = useState([])
  const [flag, setFlag] = useState(false)
  // let [dvflag, setdvFlag] = useState(false)
  let dvflag = false
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])
  const [coltitle, setColTitle] = useState([])
  const [chartType, setChartType] = useState("line")
  const [options, setOptions] = useState([])
  const [nowTime, setNowTime] = useState("")

  // const defaultDevice = options[0];

  const [device, setPickDevice] = useState("");
  const [dvObjectid, setDvobjectId] = useState("");


  const fetchData = () => {
    setLoading(true);
    httpService.getClict({
      url: '/iotapi/big_screen', // /datav/iotapi/big_screen  /mock/device/getproduct
      // headers: {
      //   "sessionToken": localStorage.getItem("sessionToken")//
      // }
    }).then(({ data }) => {
      console.log(data);
      // setData(res.data);
      let numlist = formatZero(data.deviceCountAndProductCount.deviceCount, 5).toString().split("")
      //  console.log(numlist);
      setFlag(true)
      setdeviceCount(numlist)
      setdeviceList(data.deviceStatus)
      setproductList(data.productDevice.Records)
      setMarkerList(data.deviceLocationRecords.records)
      setHeader(data.errorList.header) //告警台头
      setErrorList(data.errorList.data) //告警内容
      setOptions(data.deviceStatusRecords.Records) //告警内容
      setPickDevice(data.deviceStatusRecords.Records[0].name)
      setDvobjectId(data.deviceStatusRecords.Records[0].objectid)
      // console.log("1111111", dvflag);

      if (!dvflag) {
        console.log("这是图表的初次渲染");
        dvflag = true
        let nowDate = new Date().getTime()
        let lastDate = new Date().getTime() - 24 * 60 * 60 * 1000 * 7
        getEcharts(data.deviceStatusRecords.Records[18].objectid, lastDate, nowDate)

      }


    })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (interval) {
      clearInterval(interval.current)
      interval.current = setInterval(fetchData, 6000);
      // interval = setInterval(fetchData, 6000);
    } else {
      interval.current = setInterval(fetchData, 6000);
    }

    // fetchData()

    return () => clearInterval(interval.current)

  }, []);
  const clickist = [
    {
      id: 1,
      name: "大屏展示",
      img: img1,
      src:''
    },
    {
      id: 2,
      name: "产品管理",
      img: img4,
      src:'/dashboard/productlist'
    },
    {
      id: 3,
      name: "设备管理",
      img: img3,
      src:'/dashboard/devicelist'
    }
  ]
  //获取图表数据
  const getEcharts = (objectid, date1, date2) => {
    let params = {
      // deviceid:v.objectid
      starttime: date1,
      endtime: date2,
      style: 'line',
      interval: '1h',
      keys: '*',
      function: 'last'
      // where:[
      //   {"createdat": {"$gte": date1}},   
      //     {"createdat": {"$lte":date2}}]
    }
    httpService.getClict({
      url: `/iotapi/echart/${objectid}`, ///datav
      params,
      // headers: {
      //   "sessionToken": "r:2f2ca7e8899ac2efa2697194c853ac80" //
      // }
      // /datav/iotapi/big_screen  /mock/device/getproduct
    }).then(({ chartData }) => {
      // console.log("111", chartData);
      let xData = []
      let yData = []
      let flag = true
      if (chartData) {
        if (chartData?.rows != []) {
          chartData.rows.forEach((item, index) => {
            let i = 0
            // let ylist = []
            if (flag) {
              for (let key in item) {
                console.log("值", key);
                if (key != "日期")
                  yData.push([])
              }
              flag = false
            }
            for (let key in item) {
              if (i == 0) {
                xData.push(item[key])
              } else {
                yData[i - 1].push(item[key])
              }
              i++
            }
          })
          console.log("历史数据", xData, yData);
          chartData.columns.splice(0, 1)
          setRows(xData)
          setColumns(yData)
          setColTitle(chartData.columns)
        }else{
            setRows([])
            setColumns([])
            setColTitle([])
        }
      }
      else {
        setRows([])
        setColumns([])
        setColTitle([])
      }


    })
  }
  //选择头部类型
  const handleIndex = (index,item) => {
    setcurrentIndex(index)
   if(index!=0)
    history.push(item.src);
  }
  //获取设备历史数据
  const getHisData = (v) => {
    console.log(v);
    let date1 = new Date(v.date[0]).getTime()
    let date2 = new Date(v.date[1]).getTime()
    getEcharts(v.objectid, date1, date2)
   
  }
  //选择器
  const types = [
    {
      name: '折线图',
      type: 'line'
    }, {
      name: '柱状图',
      type: 'bar'
    }
  ]
  //图片轮播地址
  const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'
  ];
  const getNow = () => {
    //获取当前时间并打印
    var _this = this
    let yy = new Date().getFullYear()
    let mm = new Date().getMonth() + 1
    let dd = new Date().getDate()
    let hh = new Date().getHours()
    let mf =
      new Date().getMinutes() < 10
        ? '0' + new Date().getMinutes()
        : new Date().getMinutes()
    let ss =
      new Date().getSeconds() < 10
        ? '0' + new Date().getSeconds()
        : new Date().getSeconds()
    setNowTime(yy + '/' + mm + '/' + dd + ' ' + hh + ':' + mf + ':' + ss)
    // return yy + '/' + mm + '/' + dd + ' ' + hh + ':' + mf + ':' + ss
  }
  const [form] = Form.useForm();
  if (flag) {
    return (
      <div className="datav">
        <div className="dv_top">
          <div className="top_left">
            {
              clickist.map((item, index) => {
                return (
                  <div
                    className={["left_item", index === currentIndex ? "active" : null].join(' ')}
                    onClick={() => {
                      return handleIndex(index,item)
                     
                      // history.push('/dashboard/monitor');

                    }}
                  >
                    <img className="iteminfo img" src={item.img} />
                    <span className="iteminfo">{item.name}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="top_center">
            IOT设备大屏
          </div>
        </div>
        <div className="dv_content">
          <div className="ct_left">
            <div className="cleft_top">
              <div className="lt_title">
              <div className='title_left'>
                  <img className='left_img left_tol' src={img1} alt="" />
                  <span className='left_name left_tol'>设备状况</span>
                </div>
              </div>
              <div className='dvItem'>
                <div className='dvitem_name'>
                  设备总数
                </div>
                <div className='dvitem_count'>
                  {
                    // toString().split("")
                    deviceCount.map((item, index) => {
                      if (item != 0) {
                        return (
                          <div className='count_col' key={index}>
                            <div className='col_item'>
                              {item}
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div className='count_col' key={index}>
                            <div className='col_item2'>
                              {item}
                            </div>
                          </div>
                        )
                      }

                    })
                  }
                </div>
              </div>
              <Pie devicelist={deviceList}></Pie>

            </div>
            <div className="cleft_bottom">
              <div className="lt_title">
                <div className='title_left'>
                  <img className='left_img left_tol' src={img1} alt="" />
                  <span className='left_name left_tol'>设备分布</span>
                </div>
              </div>
              <div className='lt_data'>
                <Product list={productList} ></Product>
              </div>
            </div>
          </div>
          <div className="ct_center">
            <Maps marklist={MarkerList}></Maps>
            <div className='ctr_search'>
              <Form
                form={form}
                style={{ width: '100%' }}
                onSubmit={(v) => {
                  return getHisData(v)
                }}
                className="f_wrap">
                <FormItem className="f_item"
                  field='objectid'
                  rules={[{ required: true, message: '请选择设备' }]}
                >
                  <Select
                    style={{ width: '100%' }}
                    placeholder='选择设备'
                    defaultValue={options[0]}
                  >
                    {options.map((option, index) => (
                      <Option key={option.objectid} value={option.objectid}>
                        {option.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem className="f_item"
                  field='type'
                >
                  <Select
                    style={{ width: '100%' }}
                    placeholder='选择图表类型'
                    defaultValue={chartType}
                    onChange={(value) => {
                      setChartType(value)
                    }}
                  >
                    {types.map((option, index) => (
                      <Option key={index} value={option.type}>
                        {option.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem
                  className="f_item2"
                  style={{ color: '#fff' }}
                  field='date'
                  rules={[{ required: true, message: '请选择时间' }]}
                >
                  <DatePicker.RangePicker
                    format='YYYY-MM-DD HH:mm:ss'
                    allowClear
                    style={{ width: '100%' }}
                  />
                </FormItem>
                <FormItem
                  className="f_item"

                >
                  <Button htmlType='submit' type='primary' className="f_item_btn" >
                    搜索
                  </Button>
                </FormItem>
              </Form>

            </div>
            <LineDiv chartType={chartType} rows={rows} columns={columns} coltitle={coltitle}></LineDiv>
          </div>
          <div className="ct_right">
            <div className="cright_top">
              <div className="rt_title">
                <div className='title_left'>
                  <span className='left_name left_tol'>告警列表</span>
                  <img className='left_img left_tol' src={img3} alt="" />
                </div>
              </div>
              <Scroll header={header} scrollData={errorlist} ></Scroll>
            </div>
            <div className="cright_bottom">
              <div className="rt_title">
              <div className='title_left'>
                  <span className='left_name left_tol'>视频分区</span>
                  <img className='left_img left_tol' src={img2} alt="" />
                </div>
              </div>
              <Carousel
                className="rt_content"
                autoPlay={true}
              >
                {imageSrc.map((src, index) => (
                  <div key={index}>
                    <img
                      src={src}
                      style={{
                        width: '100%',
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.datav}>
        <Loading style={{ backgroundColor: 'rgba(0, 200, 200, 0.8)' }} text="拼命加载中" className={styles.loading}>
          <div style={{ width: '100%', height: '100vh' }}></div>
        </Loading>
      </div>
    )
  }

  // if (flag) {
  //   return (
  //     <div classNameName={styles.dataview}>
  //       <div classNameName={styles.topHeader}>
  //         <div id={styles.header}>
  //           <datav.Decoration5 classNameName={styles.headerCenterDecoration} />
  //           <div classNameName={styles.centerTitle}>二次供水监控平台</div>
  //         </div>
  //       </div>
  //       <div classNameName={styles.mainHeader}>
  //         <div classNameName={styles.mhMiddle}><datav.Decoration3 /></div>
  //       </div>
  //       <datav.BorderBox1 classNameName={styles.mainContainer}>
  //         <datav.BorderBox8 classNameName={styles.leftChartContainer}>
  //           <div classNameName='wrap'>
  //             <Product list={list} ></Product>
  //             <datav.BorderBox10 classNameName='dvItem'>
  //               <div classNameName='dvItem'>
  //                 <div classNameName='dvitem_name'>
  //                   设备总数
  //                 </div>
  //                 <div classNameName='dvitem_count'>
  //                   {
  //                     deviceCount.toString().split("").map((item, index) => {
  //                       return (
  //                         <div classNameName='count_col' key={index}>
  //                           {item}
  //                         </div>
  //                       )
  //                     })
  //                   }
  //                 </div>
  //               </div>
  //             </datav.BorderBox10>
  //             <ActiveRing config={config}></ActiveRing>
  //           </div>
  //         </datav.BorderBox8>
  //         <datav.BorderBox8 classNameName={styles.centerChartContainer}>
  //           <div classNameName='centerContainer'>
  //           <Maps></Maps>
  //           <Scroll header={header} style={{marginTop:'10px'}} scrollData={scrollData} />
  //           </div>

  //         </datav.BorderBox8>
  //         <datav.BorderBox8 classNameName={styles.rightChartContainer}>
  //           <View></View>
  //         </datav.BorderBox8>
  //       </datav.BorderBox1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div classNameName={styles.dataview}>
  //       <Loading style={{ backgroundColor: 'rgba(0, 200, 200, 0.8)' }} text="拼命加载中" classNameName={styles.loading}>
  //         <div style={{ width: '100%', height: '100vh' }}></div>
  //       </Loading>
  //     </div>
  //   )
  // }

}

export default Datav;