import{j as e,a as s,S as t,T as a,ah as i,ai as m}from"../@arco-design/@arco-design.c1e19da8.js";import{a as c}from"../classnames/classnames.29e4295e.js";var o={"message-item":"_message-item_r05tj_1","message-item-footer":"_message-item-footer_r05tj_7","message-item-actions":"_message-item-actions_r05tj_12","message-item-actions-item":"_message-item-actions-item_r05tj_16","message-item-collected":"_message-item-collected_r05tj_34","message-item-actions-collect":"_message-item-actions-collect_r05tj_34"};function l(l){const{data:r={}}=l,n=c(o["message-item"],{[o["message-item-collected"]]:r.isCollect});return e("div",{className:n,children:s(t,{size:4,direction:"vertical",style:{width:"100%"},children:[e(a.Text,{type:"warning",children:r.username}),e(a.Text,{children:r.content}),s("div",{className:o["message-item-footer"],children:[e("div",{className:o["message-item-time"],children:e(a.Text,{type:"secondary",children:r.time})}),s("div",{className:o["message-item-actions"],children:[e("div",{className:o["message-item-actions-item"],children:e(i,{})}),e("div",{className:c(o["message-item-actions-item"],o["message-item-actions-collect"]),children:e(m,{})})]})]})]})})}var r=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));export{l as M,r as i,o as s};
