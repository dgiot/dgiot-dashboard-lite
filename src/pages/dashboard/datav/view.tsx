import React, { useState, useEffect, ReactNode } from 'react';
import * as datav from '@jiaminghi/data-view-react'
// import { CapsuleChart } from '@jiaminghi/data-view-react'
const config = {
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 71
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 35
    },
    {
      name: '漯河',
      value: 15
    }
  ],
  img: [
    'http://datav-react.jiaminghi.com//img/conicalColumnChart/1st.png',
    'http://datav-react.jiaminghi.com//img/conicalColumnChart/2st.png',
    'http://datav-react.jiaminghi.com//img/conicalColumnChart/3st.png',
    'http://datav-react.jiaminghi.com//img/conicalColumnChart/4st.png',
    'http://datav-react.jiaminghi.com//img/conicalColumnChart/5st.png',
    'http://datav-react.jiaminghi.com//img/conicalColumnChart/6st.png',
    'http://datav-react.jiaminghi.com//img/conicalColumnChart/7st.png'
  ],
  showValue: true
}
function View() {
  return (
    <datav.ConicalColumnChart config={config} style={{ width: '400px', height: '44vh' }} />
  );
}

export default View;
