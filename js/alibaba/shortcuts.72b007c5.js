import{j as e,g as t,ac as o,p as r,ad as i,ae as s,a as c,a5 as a,T as n,a0 as l,D as m,M as d}from"../@arco-design/@arco-design.94e981f9.js";import{u as p}from"../../assets/index.bbd1f4d7.js";import{i as j}from"../index/index.f476e017.js";import"../react/react.892b78e7.js";import"../object-assign/object-assign.87c3a955.js";import"../react-transition-group/react-transition-group.3933b04b.js";import"../@babel/@babel.2f68c20c.js";import"../@antv/@antv.821fe49b.js";import"../tslib/tslib.e198ab3e.js";import"../gl-matrix/gl-matrix.c68b2961.js";import"../detect-browser/detect-browser.223b8fcd.js";import"../d3-regression/d3-regression.f8c26cb1.js";import"../size-sensor/size-sensor.6f188b19.js";import"../pdfast/pdfast.128ad0fb.js";import"../fmin/fmin.afbf8cca.js";import"../d3-ease/d3-ease.4d18a477.js";import"../d3-interpolate/d3-interpolate.dc231877.js";import"../d3-color/d3-color.faffe2b1.js";import"../d3-timer/d3-timer.4e4017f8.js";import"../fecha/fecha.0e01055d.js";import"../dom-helpers/dom-helpers.a2e48930.js";import"../react-dom/react-dom.fd66ae9b.js";import"../b-tween/b-tween.c8bf9237.js";import"../lodash/lodash.0d6091f6.js";import"../dayjs/dayjs.4a1bb60b.js";import"../react-focus-lock/react-focus-lock.9383c1ee.js";import"../focus-lock/focus-lock.bf4c439a.js";import"../use-sidecar/use-sidecar.225813dc.js";import"../use-callback-ref/use-callback-ref.bf4ec1a0.js";import"../react-clientside-effect/react-clientside-effect.f7aa7cb4.js";import"../scroll-into-view-if-needed/scroll-into-view-if-needed.4300b938.js";import"../b-validate/b-validate.6dd99022.js";import"../lodash.isequal/lodash.isequal.b3b1df76.js";import"../number-precision/number-precision.3fda1362.js";import"../resize-observer-polyfill/resize-observer-polyfill.fe6172be.js";import"../color/color.78825cf5.js";import"../color-string/color-string.aa3c1294.js";import"../color-name/color-name.dbb20fcb.js";import"../simple-swizzle/simple-swizzle.d9b74cbe.js";import"../color-convert/color-convert.57bf91ba.js";import"../redux/redux.95552b01.js";import"../react-redux/react-redux.095f689b.js";import"../hoist-non-react-statics/hoist-non-react-statics.764d549c.js";import"../react-is/react-is.57e87986.js";import"../react-router-dom/react-router-dom.341fc71d.js";import"../react-router/react-router.a66c2c4f.js";import"../history/history.c1904649.js";import"../resolve-pathname/resolve-pathname.a42ed942.js";import"../value-equal/value-equal.35b3f58f.js";import"../tiny-invariant/tiny-invariant.6dcf2c5d.js";import"../mini-create-react-context/mini-create-react-context.f2cde24b.js";import"../prop-types/prop-types.e06977de.js";import"../path-to-regexp/path-to-regexp.aa5a1809.js";import"../isarray/isarray.1454ffe5.js";import"../axios/axios.e3c711b9.js";import"../classnames/classnames.be78d973.js";import"../query-string/query-string.0d84b52c.js";import"../strict-uri-encode/strict-uri-encode.d44e34ea.js";import"../decode-uri-component/decode-uri-component.eb9d621d.js";import"../split-on-first/split-on-first.45c82b3d.js";import"../filter-obj/filter-obj.b76b4699.js";import"../nprogress/nprogress.5c3c9fd9.js";import"../js-cookie/js-cookie.431252a9.js";import"../copy-to-clipboard/copy-to-clipboard.1aafa92e.js";import"../toggle-selection/toggle-selection.22e2cb2c.js";import"../react-color/react-color.71865935.js";import"../tinycolor2/tinycolor2.be226c49.js";import"../reactcss/reactcss.adc8cc6e.js";import"../lodash-es/lodash-es.2283400a.js";import"../material-colors/material-colors.521d3d63.js";import"../@icons/@icons.2986e83a.js";import"../@loadable/@loadable.73243b5e.js";import"../mockjs/mockjs.c0012bce.js";var b="_shortcuts_f9b1x_1",f="_item_f9b1x_5",u="_icon_f9b1x_14",k="_title_f9b1x_20",h="_recent_f9b1x_41";function g(){const g=p(j),y=[{title:g["workplace.contentMgmt"],key:"Content Management",icon:e(t,{})},{title:g["workplace.contentStatistic"],key:"Content Statistic",icon:e(o,{})},{title:g["workplace.advancedMgmt"],key:"Advanced Management",icon:e(r,{})},{title:g["workplace.onlinePromotion"],key:"Online Promotion",icon:e(i,{})},{title:g["workplace.marketing"],key:"Marketing",icon:e(s,{})}],v=[{title:g["workplace.contentStatistic"],key:"Content Statistic",icon:e(o,{})},{title:g["workplace.contentMgmt"],key:"Content Management",icon:e(t,{})},{title:g["workplace.advancedMgmt"],key:"Advanced Management",icon:e(r,{})}];function x(t){d.info({content:c("span",{children:["You clicked ",e("b",{children:t})]})})}return c(a,{children:[c("div",{style:{display:"flex",justifyContent:"space-between"},children:[e(n.Title,{heading:6,children:g["workplace.shortcuts"]}),e(l,{children:g["workplace.seeMore"]})]}),e("div",{className:b,children:y.map((t=>c("div",{className:f,onClick:()=>x(t.key),children:[e("div",{className:u,children:t.icon}),e("div",{className:k,children:t.title})]},t.key)))}),e(m,{}),e("div",{className:h,children:g["workplace.recent"]}),e("div",{className:b,children:v.map((t=>c("div",{className:f,onClick:()=>x(t.key),children:[e("div",{className:u,children:t.icon}),e("div",{className:k,children:t.title})]},t.key)))})]})}export{g as default};
