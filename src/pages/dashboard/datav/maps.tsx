import React, { useState, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, InfoWindow, APILoader } from '@uiw/react-baidu-map';
import "./style/maps.less"
function Maps(props) {

  console.log("这是传参", props);
  const handleToDetail = (id) => {
    console.log('点击事件', id);

  }
  const [visiable, setVisiable] = useState(false);
  const [isinfoFlag, setinfoFlag] = useState(false);
  const [ isOpen, setIsOpen ] = useState(true);
  const [ content, setContent ] = useState("");
  const [ nowPn, setnowPosition ] = useState({ lng: 120.161324, lat: 30.262441 });
//   var steelContent = `<div><p style="margin:0;line-height:'20px';font-size:13px;text-indent:2em"><br/>经度:longitude[i]<br/>纬度:latitude[i]<br/></p></div>`;
// var steelOpts = {
// 	width : 260,     //信息窗口宽度
// 	height: 200,     //信息窗口高度
// 	title : "<b>车辆信息</b>" , //信息窗口标题
// 	enableMessage:true	//设置允许信息窗发送短息
// };
  const handleOpen = (item)=>{
    console.log("悬浮marker",item);
      setinfoFlag(false)
      setVisiable(true)
      setIsOpen(true)
      setnowPosition(item.location)
      setContent(`<span>名称:${item.deviceName}</span> <br/><span>经度:${item.location.lng}</span><br/><span>纬度:${item.location.lat}</span>`)
      setinfoFlag(true)
    // new BMap.InfoWindow(steelContent, steelOpts);
  }
  const mapstyle = {
    styleJson: [{
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#000'
      }
    }]
  }
  function infoWindowRef(props) {
    if (props && props.infoWindow) {
      console.log('infoWindow:', props.infoWindow, props.map, props.BMap);
    }
  }
  return (
    <div style={{ width: '100%', height: '50%' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map

          ref={(props) => {
            if (props && props.map) {
              // 启用滚轮放大缩小，默认禁用
              props.map.enableScrollWheelZoom();

            }
          }}
          center={nowPn}
          widget={[
            'GeolocationControl',
            {
              name: 'OverviewMapControl',
              options: {
                isOpen: true,
              }
            },
            {
              name: 'CopyrightControl',
              control: (BMap, map) => {
                // 设置版权控件位置
                const cr = new BMap.CopyrightControl({ anchor: BMAP_ANCHOR_TOP_RIGHT });
                // 返回地图可视区域
                const bs = map.getBounds();
                cr.removeCopyright(1);
                // cr.addCopyright({
                //   id: 1,
                //   content: "<a href='#' style='font-size:20px;background:yellow'>我是自定义版权控件呀</a>",
                //   // bounds: bs,
                // });
                return cr;
              },
            },
            {
              name: 'NavigationControl',
              options: (BMap) => {
                return {
                  offset: new BMap.Size(150, 5),
                  showZoomInfo: false,
                  enableGeolocation: true,
                }
              }
            }
          ]}
        // mapStyleV={{style:'midnight'}}

        >
       
          {/* <Marker ref={markerRef} animation={2} position={{ lng: 121.411535, lat: 31.222965 }} /> */}
          {
            props.marklist.map((item, index) => {
              return (
                <Marker key={index} position={item.location} onDblClick={() => {
                  return handleToDetail(item.objectId)
                }} onClick={()=>{
                  return handleOpen(item)
                }} type="loc_red" /> 
                



              )
            })
          }
          {
            isinfoFlag? <InfoWindow
            visiable={visiable}
            isOpen={isOpen}
            onClose={() => {
              console.log(':onClose');
            }}
            position={nowPn}
            content={content}
            title="设备信息"
          />:''
          }
           

        </Map>
      </APILoader>
    </div>
  );
  // }
  // return <Demo markerlist ={props?.marklist} />;
}

export default Maps;