import{a as e,j as r,T as t,S as o,C as s,z as i,B as a,af as c,i as l,ag as d}from"../@arco-design/@arco-design.c1e19da8.js";import{r as m}from"../react/react.fab41096.js";import{a as p}from"../axios/axios.e3c711b9.js";import{u as n}from"../../assets/index.c8ee26a4.js";import{l as j}from"../index/index.35cd57bd.js";import f from"../message-list/index.c3ed95a8.js";import{s as b}from"../index.module/index.module.5f77f3c5.js";import"../react-transition-group/react-transition-group.0e52fa94.js";import"../@babel/@babel.531a568e.js";import"../@antv/@antv.e579bdb9.js";import"../tslib/tslib.1f186554.js";import"../gl-matrix/gl-matrix.3f6b1ae9.js";import"../detect-browser/detect-browser.556ffa10.js";import"../d3-regression/d3-regression.f9841a0b.js";import"../size-sensor/size-sensor.44bb8d5e.js";import"../pdfast/pdfast.128ad0fb.js";import"../fmin/fmin.afbf8cca.js";import"../d3-ease/d3-ease.4d18a477.js";import"../d3-interpolate/d3-interpolate.dc231877.js";import"../d3-color/d3-color.faffe2b1.js";import"../d3-timer/d3-timer.4e4017f8.js";import"../fecha/fecha.0e01055d.js";import"../dom-helpers/dom-helpers.a2e48930.js";import"../react-dom/react-dom.1976bb8b.js";import"../object-assign/object-assign.87c3a955.js";import"../b-tween/b-tween.c8bf9237.js";import"../lodash/lodash.6c6ad5fa.js";import"../dayjs/dayjs.e2e50c8f.js";import"../react-focus-lock/react-focus-lock.5791b103.js";import"../focus-lock/focus-lock.bf4c439a.js";import"../use-sidecar/use-sidecar.ae4dfeb5.js";import"../use-callback-ref/use-callback-ref.d47c05d2.js";import"../react-clientside-effect/react-clientside-effect.ee0dd2c7.js";import"../scroll-into-view-if-needed/scroll-into-view-if-needed.4300b938.js";import"../b-validate/b-validate.ecd80725.js";import"../lodash.isequal/lodash.isequal.eb8c3814.js";import"../number-precision/number-precision.3fda1362.js";import"../resize-observer-polyfill/resize-observer-polyfill.fe6172be.js";import"../color/color.201ab09e.js";import"../color-string/color-string.e3a56614.js";import"../color-name/color-name.dbb20fcb.js";import"../simple-swizzle/simple-swizzle.4a366496.js";import"../color-convert/color-convert.57bf91ba.js";import"../redux/redux.2d97c158.js";import"../react-redux/react-redux.bda4861f.js";import"../hoist-non-react-statics/hoist-non-react-statics.8b0a481d.js";import"../react-is/react-is.2bbd2090.js";import"../react-router-dom/react-router-dom.3108d60a.js";import"../react-router/react-router.f1c29d1f.js";import"../history/history.4f7c6d9c.js";import"../resolve-pathname/resolve-pathname.a42ed942.js";import"../value-equal/value-equal.35b3f58f.js";import"../tiny-invariant/tiny-invariant.6dcf2c5d.js";import"../mini-create-react-context/mini-create-react-context.922f61d1.js";import"../prop-types/prop-types.39fde81f.js";import"../path-to-regexp/path-to-regexp.aa5a1809.js";import"../isarray/isarray.1454ffe5.js";import"../classnames/classnames.29e4295e.js";import"../query-string/query-string.e55073e7.js";import"../strict-uri-encode/strict-uri-encode.d44e34ea.js";import"../decode-uri-component/decode-uri-component.eb9d621d.js";import"../split-on-first/split-on-first.45c82b3d.js";import"../filter-obj/filter-obj.b76b4699.js";import"../nprogress/nprogress.52dac772.js";import"../js-cookie/js-cookie.431252a9.js";import"../copy-to-clipboard/copy-to-clipboard.1aafa92e.js";import"../toggle-selection/toggle-selection.22e2cb2c.js";import"../react-color/react-color.bac86bcb.js";import"../tinycolor2/tinycolor2.be226c49.js";import"../reactcss/reactcss.9c4b0d3d.js";import"../lodash-es/lodash-es.2283400a.js";import"../material-colors/material-colors.521d3d63.js";import"../@icons/@icons.53e50692.js";import"../@loadable/@loadable.505519e8.js";import"../mockjs/mockjs.a6054849.js";import"../item/item.d8242094.js";function h(){const h=n(j),[u,g]=m.exports.useState([]),[y,x]=m.exports.useState(!1);return m.exports.useEffect((()=>{x(!0),p.get("/api/chatList").then((e=>{g(e.data||[])})).finally((()=>{x(!1)}))}),[]),e("div",{className:b["chat-panel"],children:[e("div",{className:b["chat-panel-header"],children:[r(t.Title,{style:{marginTop:0,marginBottom:16},heading:6,children:h["monitor.title.chatPanel"]}),e(o,{size:8,children:[r(s,{style:{width:80},defaultValue:"all",children:r(s.Option,{value:"all",children:h["monitor.chat.options.all"]})}),r(i.Search,{placeholder:h["monitor.chat.placeholder.searchCategory"]}),r(a,{type:"text",iconOnly:!0,children:r(c,{})})]})]}),r("div",{className:b["chat-panel-content"],children:r(l,{loading:y,style:{width:"100%"},children:r(f,{data:u})})}),r("div",{className:b["chat-panel-footer"],children:e(o,{size:8,children:[r(i,{suffix:r(d,{})}),r(a,{type:"primary",children:h["monitor.chat.update"]})]})})]})}export{h as default};
