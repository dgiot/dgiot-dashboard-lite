import React, { useState, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, InfoWindow, APILoader } from '@uiw/react-baidu-map';
import "./style/maps.less"
import big from "./img/map/放大.png";
import small from "./img/map/缩小.png";

function Maps(props) {

  // console.log("这是传参", props);
  const handleToDetail = (id) => {
    console.log('点击事件', id);

  }
  const [visiable, setVisiable] = useState(false);
  const [isinfoFlag, setinfoFlag] = useState(false);
  const [showAll, setshowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [content, setContent] = useState("");
  const [nowPn, setnowPosition] = useState({ lng: 120.161324, lat: 30.262441 });

  //打开设备位置气泡查看基本信息
  const handleOpen = (item) => {
    console.log("悬浮marker", item);
    setinfoFlag(false)
    setVisiable(true)
    setIsOpen(true)
    setnowPosition(item.location)
    setContent(`<span>名称:${item.deviceName}</span> <br/><span>经度:${item.location.lng}</span><br/><span>纬度:${item.location.lat}</span>`)
    setinfoFlag(true)
    // new BMap.InfoWindow(steelContent, steelOpts);
  }
  //
  const changeShow = () => {
    showAll ? setshowAll(false) : setshowAll(true)
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
  return (
    <div className={["left_item", showAll === true ? "mapactive" : 'mapunactive'].join(' ')}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map

          ref={(props) => {
            if (props && props.map) {
              // 启用滚轮放大缩小，默认禁用
              props.map.enableScrollWheelZoom();
              props.map.setMapStyle({
                style: "dark",
                features: []
              });
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
          <div className='map_sh' onClick={() => {
            return changeShow()
          }}>
            {
              showAll ? <img className="sh_img" src={big} /> : <img className="sh_img" src={small} />
            }
          </div>
          {/* <Marker ref={markerRef} animation={2} position={{ lng: 121.411535, lat: 31.222965 }} /> */}
          {
            props.marklist.map((item, index) => {
              return (
                <Marker key={index} position={item.location} onDblClick={() => {
                  return handleToDetail(item.objectId)
                }} onClick={() => {
                  return handleOpen(item)
                }} type="loc_red" />
              )
            })
          }
          {
            isinfoFlag ? <InfoWindow
              visiable={visiable}
              isOpen={isOpen}
              onClose={() => {
                console.log(':onClose');
              }}
              position={nowPn}
              content={content}
              title="设备信息"
            /> : ''
          }


        </Map>
      </APILoader>
    </div>
  );
  // }
  // return <Demo markerlist ={props?.marklist} />;
}
function areEqual(prevProps, newxProps) {
  if (prevProps.markerlist == newxProps.markerlist) {
    return true
  }
  return false
}
export default React.memo(Maps, areEqual);