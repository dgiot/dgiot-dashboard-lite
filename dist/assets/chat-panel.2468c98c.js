import{r as l,a as t,j as e,T as u,S as o,P as n,O as r,B as c,bR as g,i as y,bS as x,l as S}from"./vendor.ed5b4e33.js";import{u as L}from"./index.1165590a.js";import{l as v}from"./index.662e0e1f.js";import N from"./index.02701985.js";import{s}from"./index.module.7b1a989f.js";import"./item.8da64d42.js";function O(){const a=L(v),[h,d]=l.exports.useState([]),[p,i]=l.exports.useState(!1);function m(){i(!0),S.get("/api/chatList").then(f=>{d(f.data||[])}).finally(()=>{i(!1)})}return l.exports.useEffect(()=>{m()},[]),t("div",{className:s["chat-panel"],children:[t("div",{className:s["chat-panel-header"],children:[e(u.Title,{style:{marginTop:0,marginBottom:16},heading:6,children:a["monitor.title.chatPanel"]}),t(o,{size:8,children:[e(n,{style:{width:80},defaultValue:"all",children:e(n.Option,{value:"all",children:a["monitor.chat.options.all"]})}),e(r.Search,{placeholder:a["monitor.chat.placeholder.searchCategory"]}),e(c,{type:"text",iconOnly:!0,children:e(g,{})})]})]}),e("div",{className:s["chat-panel-content"],children:e(y,{loading:p,style:{width:"100%"},children:e(N,{data:h})})}),e("div",{className:s["chat-panel-footer"],children:t(o,{size:8,children:[e(r,{suffix:e(x,{})}),e(c,{type:"primary",children:a["monitor.chat.update"]})]})})]})}export{O as default};