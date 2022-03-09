
import View from './view';
import Product from "./product";
import styles from "./style/index.module.less";
import "./style/index.less"
import * as datav from '@jiaminghi/data-view-react';
import React from "react"
import axios from "axios";


const list=[
  {
    productid:1,
    productName:"产品1",
    deviceCount:10
  },
  {
    productid:2,
    productName:"产品2",
    deviceCount:10
  },
  {
    productid:3,
    productName:"产品3",
    deviceCount:60
  },
  {
    productid:4,
    productName:"产品4",
    deviceCount:100
  }, 
  {
    productid:5,
    productName:"产品5",
    deviceCount:60
  }, 
  {
    productid:6,
    productName:"产品6",
    deviceCount:50
  }
]

function Datav() {
    // this.state={
    //   productlist:[],
    //   isLoaded:false
    // }
  // axios({
  //   url:"/datav/getProductAndMachineCount"
  // }).then(res=>{
  //   flag = false
  //   productlist = res.data.data
  //   flag = true
  // })

  return (
    <div className={styles.dataview}>
      <div className={styles.topHeader}>
        <div id={styles.header}>
          <datav.Decoration5 className={styles.headerCenterDecoration}  />
          <div className={styles.centerTitle}>二次供水监控平台</div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.mhMiddle}><datav.Decoration3 /></div>
      </div>
      <datav.BorderBox1 className={styles.mainContainer}>
        <datav.BorderBox8 className={styles.leftChartContainer}>
        <div className='wrap'>
        <Product list={list} ></Product>
        <View></View>
        </div>
        </datav.BorderBox8>
        <datav.BorderBox8 className={styles.centerChartContainer}>
        
        </datav.BorderBox8>
        <datav.BorderBox8 className={styles.rightChartContainer}>
        
        </datav.BorderBox8>
      </datav.BorderBox1>
    </div>
  );
}

export default Datav;