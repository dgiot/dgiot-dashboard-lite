import styles from "./style/product.module.less";
// import React from "react"
import axios from "axios";
import React, { Component } from 'react';


function Product(props) {
  console.log(props);

  
  return (
    <div className={styles.product}>
     <div className={styles.productWrap}>
      {
        props.list.map(item =>{
          return (
            <div className={styles.productItem} key={item.productid}>
              <div className={styles.itemName}>{item.productName}</div>
              <div className={styles.itemCount}>{item.deviceCount}</div>
            </div>
          )
        })
      }
     </div>
    </div>
  );
}

export default Product;