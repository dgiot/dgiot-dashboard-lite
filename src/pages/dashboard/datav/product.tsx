import styles from "./style/product.module.less";
// import React from "react"
import axios from "axios";
import React, { Component } from 'react';
import {

  Spin
} from '@arco-design/web-react';

function Product(props) {
  // console.log(props);

  if(props.list.length>0){
    // console.log("111111");
    return (
      <div className={styles.product}>
       <div className={styles.productWrap}>
        {
          props.list.map((item,index) =>{
            return (
              <div className={styles.productItem} key={index}>
                <div style={{position: 'absolute',borderLeft: '3px solid #03cbfe', borderTop:'3px solid #03cbfe', width: '20px', height: '20px', left: '-2px', top: '-2px'}}></div>
                <div style={{position: 'absolute',borderRight: '3px  solid #03cbfe', borderTop:'3px  solid #03cbfe', width: '20px', height: '20px', right: '-2px', top: '-2px'}}></div>
                <div style={{position: 'absolute',borderRight: '3px  solid #03cbfe', borderBottom:'3px  solid #03cbfe', width: '20px', height: '20px', right: '-2px', bottom: '-2px'}}></div>
                <div style={{position: 'absolute',borderLeft: '3px  solid #03cbfe', borderBottom:'3px  solid #03cbfe', width: '20px', height: '20px', left: '-2px', bottom: '-2px'}}></div>
                <div className={styles.ItemWrap}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemCount}>{item.devicecount}</div>
                </div>
                
              </div>
            )
          })
        }
       </div>
      </div>
    );
   
  }else{
    return (
      <div>
        <Spin  style={{backgroundColor: 'rgba(0, 200, 200, 0.8)'}} tip="拼命加载中" loading="true" className={styles.loading}>
        <div className={styles.product}></div>
      </Spin>
      </div>
    )
  }
 
}
function areEqual(prevProps, newxProps) {
  if (prevProps.list == newxProps.list) {
    return true
  }
  return false
}

export default React.memo(Product,areEqual) ;