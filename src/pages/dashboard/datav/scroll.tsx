
import React, { useState, useEffect, ReactNode } from 'react';
import * as datav from '@jiaminghi/data-view-react';
// import { Loading } from 'element-react';
  // const config1 ={
  //   header: [],
  //   data:[],
  //   index: true,
  //   columnWidth: [50],
  //   align: ['center']
  // }
  function Scroll(props) {
    console.log(props);
    if(props!={}){
      let config = {
        header: props.header,
        data:props.scrollData,
        index: true,
        columnWidth: [50],
        align: ['center']
      }
      return <datav.ScrollBoard  config={config} style={{ width: '100%', height: '400px'}} />
    }
    else{
      return (
        <div>
          {/* <Loading  style={{backgroundColor: 'rgba(0, 200, 200, 0.8)'}} text="拼命加载中"  >
          <div style={{width:'100%',height:'100%'}}></div>
        </Loading> */}
        </div>
      )
    }
    console.log("输出",props);
   
    // if(props.config!={}){
    //   console.log("111");
      
     
    // }else{
    //   return <datav.ActiveRingChart  config={config1} style={{ width: '300px', height: '300px'}} />
    // }
    
  }
  
  export default Scroll;