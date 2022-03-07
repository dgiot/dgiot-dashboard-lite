import React, { useState, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Map, APILoader } from '@uiw/react-baidu-map';

function View() {
  const Demo = () => (
    <div style={{ width: '100%', height: '44vh' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map center="杭州" />
        <Map center="上海">
          {({ BMap, map, container }) => {
            return;
          }}
        </Map>
      </APILoader>
    </div>
  );
  return (
    <Demo />
  );
}

export default View;
