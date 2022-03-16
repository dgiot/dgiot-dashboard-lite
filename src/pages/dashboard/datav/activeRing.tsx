import React, { useState, useEffect, ReactNode } from 'react';
import * as datav from '@jiaminghi/data-view-react';
import  "./style/activering.less";

// const config1 ={
//   radius: '40%',
//   activeRadius: '45%',
//   data: [
//     {
//       name: '暂无数据',
//       value: 55
//     }
//   ],
//   digitalFlopStyle: {
//     fontSize: 20
//   },
//   showOriginValue: true
// }
function ActiveRing(props) {
  // console.log(props.realdata);
  console.log("输出",props);
  return <datav.ActiveRingChart  config={props.config} style={{ width: '100%', height: '300px'}} />
  // if(props.config!={}){
  //   console.log("111");
    
   
  // }else{
  //   return <datav.ActiveRingChart  config={config1} style={{ width: '300px', height: '300px'}} />
  // }
  
}

export default ActiveRing;