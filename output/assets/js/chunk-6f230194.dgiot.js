/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 11:26:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f230194"],{"0589":function(t,e,i){"use strict";i("750e")},"09be":function(t,e,i){},"0b0b":function(t,e,i){},"0e1e5":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return n})),i.d(e,"addAttrs",(function(){return r})),i.d(e,"cleanParentAttr",(function(){return a}));i("3dec"),i("9c6a"),i("f1e1");function n(t){var e=[];return t.forEach((function(t,i){Vue.set(t,"_index",i),e.push(t)})),e}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.parent,n=void 0===i?null:i,a=e.preIndex,o=void 0!==a&&a,l=e.level,s=void 0===l?0:l,c=e.expand,d=void 0===c||c,u=e.children,f=void 0===u?"children":u,h=e.show,p=void 0===h||h,m=e.select,v=void 0!==m&&m;t.forEach((function(t,e){var i=(o?"".concat(o,"-").concat(e):e)+"";Vue.set(t,"_id",i),Vue.set(t,"_level",s),Vue.set(t,"_expand",d),Vue.set(t,"_parent",n),Vue.set(t,"_show",p),Vue.set(t,"_select",v),t[f]&&t[f].length>0&&r(t[f],{parent:t,level:s+1,expand:d,preIndex:i,children:f,status:status,select:v})}))}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children";return t.forEach((function(t){t._parent=null,t[e]&&t[e].length>0&&r(t[e],e)})),t}},1131:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dropdown",{staticClass:"international",attrs:{trigger:"click"},on:{command:t.handleSetLanguage}},[i("div",[i("dgiot-icon",{attrs:{"class-name":"international-icon","icon-class":"language"}})],1),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"zh",disabled:"zh"===t.language}},[t._v(" 中文 ")]),i("el-dropdown-item",{attrs:{command:"en",disabled:"en"===t.language}},[t._v(" English ")])],1)],1)],1)},r=[],a={name:"LangSelect",computed:{language:function(){return this.$store.getters.language}},methods:{handleSetLanguage:function(t){this.$i18n.locale=t,this.$store.dispatch("setLanguage",t),this.$message({message:"Switch Language Success",type:"success",duration:1e3})}}},o=a,l=(i("1cc3"),i("bdd7")),s=Object(l["a"])(o,n,r,!1,null,"5482142c",null);e["default"]=s.exports},"1cc3":function(t,e,i){"use strict";i("8054")},2550:function(t){t.exports=JSON.parse('{"name":"图层","layer":{"backColor":"#eee","backgroundImage":"","widthHeightRatio":"","width":800,"height":600},"components":[{"type":"rect","action":[{"type":"click","action":"visible","showItems":["459e668d-74cb-9da0-83de-0344ca2e0bfd"],"hideItems":[]}],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":101,"y":146,"w":82,"h":49},"backColor":"transparent","foreColor":"grey","zIndex":1,"transform":0,"radius":0,"visible":true,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":101,"y":146}}},"identifier":"4e1ddf24-3b3b-b13c-a7c5-d0137067b1ae","name":"rect0"},{"type":"text","action":[],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":132,"y":39,"w":552,"h":51},"backColor":"transparent","foreColor":"#fc0808","zIndex":1,"transform":0,"text":"Web组态功能","textAlign":"center","fontSize":"28","fontFamily":{"label":"微软雅黑","value":"微软雅黑"},"visible":true,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":132,"y":39}}},"identifier":"fcf270c6-2079-c81b-26ef-d4e06bbd11de","name":"text1"},{"type":"circular","action":[],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":220,"y":177,"w":60,"h":58},"backColor":"transparent","foreColor":"grey","zIndex":1,"transform":0,"visible":true,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":220,"y":177}}},"identifier":"459e668d-74cb-9da0-83de-0344ca2e0bfd","name":"circular2"},{"type":"rect","action":[{"type":"click","action":"visible","showItems":[],"hideItems":["459e668d-74cb-9da0-83de-0344ca2e0bfd"]}],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":100,"y":220,"w":82,"h":49},"backColor":"transparent","foreColor":"grey","zIndex":1,"transform":0,"radius":0,"visible":true,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":100,"y":220}}},"identifier":"4358bf28-8cd9-73ef-ddae-4b4c1908b4e1","name":"rect3"},{"type":"text","action":[],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":154,"y":114,"w":109,"h":30},"backColor":"transparent","foreColor":"#000000","zIndex":1,"transform":0,"text":"点击显示圆形","textAlign":"center","fontSize":14,"fontFamily":"Arial","visible":true,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":226,"y":327}}},"identifier":"09bc6147-33dd-cbae-b7d2-1bb80cda0c86","name":"text4"},{"type":"text","action":[],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":152,"y":272,"w":109,"h":30},"backColor":"transparent","foreColor":"#000000","zIndex":1,"transform":0,"text":"点击隐藏圆形","textAlign":"center","fontSize":14,"fontFamily":"Arial","visible":true,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":179,"y":139}}},"identifier":"6fb64872-9222-0f12-a89f-91233521ec32","name":"text5"},{"type":"line-arrow","action":[],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":68,"y":367,"w":300,"h":80},"backColor":"transparent","foreColor":"grey","zIndex":1,"transform":0,"lineWidth":2,"visible":true,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","points":[{"x":0,"y":0},{"x":0,"y":80},{"x":150,"y":80},{"x":150,"y":40},{"x":300,"y":40}],"temp":{"position":{"x":235,"y":420}}},"identifier":"38ba8693-04c0-2021-dcde-6520757d1690","name":"line-arrow6"},{"type":"chart-gauge","action":[],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":451,"y":103,"w":300,"h":300},"backColor":"white","zIndex":1,"visible":true,"transform":0,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":549,"y":203}}},"identifier":"eb896e39-0027-fb07-97be-932fc3d7efa1","name":"chart-gauge8"},{"type":"image","action":[],"dataBind":{"sn":"","title":"","biz":"","queryParam":{}},"style":{"position":{"x":439,"y":415,"w":205,"h":115},"backColor":"transparent","zIndex":1,"url":"statics/topo/office/chair1.png","visible":true,"transform":0,"borderWidth":0,"borderStyle":"solid","borderColor":"#ccccccff","temp":{"position":{"x":574,"y":497}}},"identifier":"c4f8aa7d-cdbd-896e-2a19-e2ef39a0e949","name":"image8"}]}')},"255f":function(t,e,i){"use strict";i("ec7f")},"27c3":function(t,e,i){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"2db0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"runData"},[t._tableDict?i("div",{staticClass:"devicedetail"},[i("el-row",{staticClass:"runData_row"},t._l(t._tableDict,(function(e,n){return i("el-col",{key:n,staticClass:"runData_col",attrs:{span:4}},[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(e.name))]),i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{icon:"el-icon-refresh",type:"text"}})],1),i("div",{staticClass:"text item"},[t._v(" "+t._s(e.identifier)+" "+t._s(t.devicedetail[""+e.identifier])+" ")])])],1)})),1),t._tableParser.formDesc?i("f-render",{attrs:{config:t._tableParser,pure:""},model:{value:t._tableParser,callback:function(e){t._tableParser=e},expression:"_tableParser"}}):i("vab-empty")],1):i("vab-empty")],1)},r=[],a=i("e97b"),o=i("5880"),l={name:"DeviceState",props:{devicedetail:{type:Object,default:function(){}}},data:function(){return{}},computed:Object(a["a"])(Object(a["a"])({},Object(o["mapGetters"])({_tableDict:"global/_tableDict"})),{},{_tableParser:{get:function(){return dgiotlog.log(this.$store.state.global._tableParser),this.$store.state.global._tableParser},set:function(t){this.$emit("ParserSave",t)}}}),methods:Object(a["a"])({},Object(o["mapMutations"])({set_tableDict:"global/set_tableDict",set_tableParser:"global/set_tableParser"}))},s=l,c=(i("e79f"),i("bdd7")),d=Object(c["a"])(s,n,r,!1,null,"4cd3e230",null);e["default"]=d.exports},4381:function(t,e,i){"use strict";i.r(e);var n=i("e799"),r=function(t){t.directive("permission",n["default"])};window.Vue&&(window["permission"]=n["default"],Vue.use(r)),n["default"].install=r,e["default"]=n["default"]},4825:function(t,e,i){"use strict";i("fa53")},"5c83":function(t,e,i){"use strict";i.r(e);var n=i("f362"),r=function(t){t.directive("el-drag-dialog",n["default"])};window.Vue&&(window["el-drag-dialog"]=n["default"],Vue.use(r)),n["default"].install=r,e["default"]=n["default"]},"5d93":function(t,e,i){"use strict";i("8bab")},"62ce":function(t,e,i){"use strict";i.r(e);var n=i("71bc"),r=function t(e,i){if(!(this instanceof t))return new t(e,i);this.options=this.extend({noPrint:".no-print"},i),"string"===typeof e?this.dom=document.querySelector(e):(this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el),this.init()};r.prototype={init:function(){var t=this.getStyle()+this.getHtml();this.writeIframe(t)},extend:function(t,e){for(var i in e)t[i]=e[i];return t},getStyle:function(){for(var t="",e=document.querySelectorAll("style,link"),i=0;i<e.length;i++)t+=e[i].outerHTML;return t+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",t},getHtml:function(){for(var t=document.querySelectorAll("input"),e=document.querySelectorAll("textarea"),i=document.querySelectorAll("select"),n=0;n<t.length;n++)"checkbox"==t[n].type||"radio"==t[n].type?1==t[n].checked?t[n].setAttribute("checked","checked"):t[n].removeAttribute("checked"):(t[n].type,t[n].setAttribute("value",t[n].value));for(var r=0;r<e.length;r++)"textarea"==e[r].type&&(e[r].innerHTML=e[r].value);for(var a=0;a<i.length;a++)if("select-one"==i[a].type){var o=i[a].children;for(var l in o)"OPTION"==o[l].tagName&&(1==o[l].selected?o[l].setAttribute("selected","selected"):o[l].removeAttribute("selected"))}var s=this.wrapperRefDom(this.dom).outerHTML;return s},wrapperRefDom:function(t){var e=null,i=t;if(!this.isInBody(i))return i;while(i){if(e){var n=i.cloneNode(!1);n.appendChild(e),e=n}else e=i.cloneNode(!0);i=i.parentElement}return e},writeIframe:function(t){var e,i,n=document.createElement("iframe"),r=document.body.appendChild(n);n.id="myIframe",n.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),e=r.contentWindow||r.contentDocument,i=r.contentDocument||r.contentWindow.document,i.open(),i.write(t),i.close();var a=this;n.onload=function(){a.toPrint(e),setTimeout((function(){document.body.removeChild(n)}),100)}},toPrint:function(t){try{setTimeout((function(){t.focus();try{t.document.execCommand("print",!1,null)||t.print()}catch(e){t.print()}t.close()}),10)}catch(e){dgiotlog.log("err",e)}},isInBody:function(t){return t!==document.body&&document.body.contains(t)},isDOM:"object"===("undefined"===typeof HTMLElement?"undefined":Object(n["a"])(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===Object(n["a"])(t)&&1===t.nodeType&&"string"===typeof t.nodeName}},e["default"]=r},6613:function(t,e,i){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},6724:function(t,e,i){"use strict";i.r(e);var n=i("c7a7"),r=function(t){t.directive("waves",n["default"])};window.Vue&&(window.waves=n["default"],Vue.use(r)),n["default"].install=r,e["default"]=n["default"]},"750e":function(t,e,i){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},8054:function(t,e,i){},8325:function(t,e,i){"use strict";i.r(e);var n=i("fc6f"),r=function(t){t.directive("Clipboard",n["default"])};window.Vue&&(window.clipboard=n["default"],Vue.use(r)),n["default"].install=r,e["default"]=n["default"]},8920:function(t,e,i){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"8a9a":function(t,e,i){"use strict";i("8920")},"8ad4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",t._g(t._b({ref:"multipleTable",attrs:{data:t.tableData,"row-key":"objectId","row-style":t.showRow}},"el-table",t.$attrs,!1),t.$listeners),[t._t("selection"),t._t("pre-column"),t._l(t.columns,(function(e){return i("el-table-column",{key:e.key,attrs:{align:e.align||"center","header-align":e.headerAlign,label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.row,a=n.$index;return[t._t(e.key,(function(){return[e.expand?[i("span",{style:{"padding-left":"20px"}}),i("span",{directives:[{name:"show",rawName:"v-show",value:t.showSperadIcon(r),expression:"showSperadIcon(row)"}],staticClass:"tree-ctrl",on:{click:function(e){return t.toggleExpanded(a)}}}),r._expand||r.children?t._e():i("i",{staticClass:"el-icon-minus",staticStyle:{"margin-right":"5px"}})]:t._e(),e.checkbox?[r[t.defaultChildren]&&r[t.defaultChildren].length>0?i("el-checkbox",{style:{"padding-left":+r._level*t.indent+"px"},attrs:{indeterminate:r._select},on:{change:function(e){return t.handleCheckAllChange(r)}},model:{value:r._select,callback:function(e){t.$set(r,"_select",e)},expression:"row._select"}}):i("el-checkbox",{style:{"padding-left":+r._level*t.indent+"px"},on:{change:function(e){return t.handleCheckAllChange(r)}},model:{value:r._select,callback:function(e){t.$set(r,"_select",e)},expression:"row._select"}})]:t._e(),t._v(" "+t._s(r[e.key])+" ")]}),{scope:t.scope})]}}],null,!0)})}))],2)],1)},r=[],a=(i("d6a4"),i("e170"),i("c4bc"),i("3dec"),i("b037"),i("1d17"),i("4c87"),i("0e1e5")),o={name:"TreeTable",props:{data:{type:Array,required:!0,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},defaultExpandAll:{type:Boolean,default:!1},defaultChildren:{type:String,default:"children"},indent:{type:Number,default:50}},data:function(){return{guard:1,initData:this.data}},computed:{children:function(){return this.defaultChildren},tableData:function(){var t=this.initData;if(0===this.initData.length)return[];Object(a["addAttrs"])(t,{expand:this.defaultExpandAll,children:this.defaultChildren});var e=Object(a["default"])(t,this.defaultChildren);return e}},mounted:function(){dgiotlog.log(this.defaultExpandAll)},methods:{addBrother:function(t,e){t._parent?t._parent.children.push(e):this.initData.push(e)},addChild:function(t,e){t.children||this.$set(t,"children",[]),t.children.push(e)},delete:function(t){var e=t._index,i=t._parent;i?i.children.splice(e,1):this.initData.splice(e,1)},getData:function(){return this.tableData},showRow:function(t){var e=t.row,i=e._parent,n=!i||i._expand&&i._show;return e._show=n,n?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},showSperadIcon:function(t){return t[this.children]&&t[this.children].length>0},toggleExpanded:function(t){var e=this.tableData[t],i=!e._expand;e._expand=i},handleCheckAllChange:function(t){this.selcetRecursion(t,t._select,this.defaultChildren),this.isIndeterminate=t._select},selcetRecursion:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children";e&&(this.$set(t,"_expand",!0),this.$set(t,"_show",!0));var r=t[n];r&&r.length>0&&r.map((function(t){t._select=e,i.selcetRecursion(t,e,n)}))},updateTreeNode:function(t){var e=this;return new Promise((function(i){var n=t._id,r=t._parent,a=n.split("-").slice(-1)[0];r?(r.children.splice(a,1,t),i(e.initData)):(e.initData.splice(a,1,t),i(e.initData))}))}}},l=o,s=(i("c7b6"),i("bdd7")),c=Object(s["a"])(l,n,r,!1,null,null,null);e["default"]=c.exports},"8bab":function(t,e,i){},"8d41":function(t,e,i){},a46e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-scrollbar",{ref:"scrollContainer",staticClass:"scroll-container",attrs:{vertical:!1},nativeOn:{wheel:function(e){return e.preventDefault(),t.handleScroll.apply(null,arguments)}}},[t._t("default")],2)},r=[],a=(i("a9d4"),4),o={name:"ScrollPane",data:function(){return{left:0}},methods:{handleScroll:function(t){var e=t.wheelDelta||40*-t.deltaY,i=this.$refs.scrollContainer.$refs.wrap;i.scrollLeft=i.scrollLeft+e/4},moveToTarget:function(t){var e=this.$refs.scrollContainer.$el,i=e.offsetWidth,n=this.$refs.scrollContainer.$refs.wrap,r=this.$parent.$refs.tag,o=null,l=null;if(r.length>0&&(o=r[0],l=r[r.length-1]),o===t)n.scrollLeft=0;else if(l===t)n.scrollLeft=n.scrollWidth-i;else{var s=r.findIndex((function(e){return e===t})),c=r[s-1],d=r[s+1],u=d.$el.offsetLeft+d.$el.offsetWidth+a,f=c.$el.offsetLeft-a;u>n.scrollLeft+i?n.scrollLeft=u-i:f<n.scrollLeft&&(n.scrollLeft=f)}}}},l=o,s=(i("255f"),i("bdd7")),c=Object(s["a"])(l,n,r,!1,null,"f9eac436",null);e["default"]=c.exports},a832:function(t,e,i){"use strict";i("6613")},a8bc:function(t,e,i){"use strict";i("d774")},ad5f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABd1BMVEUAAAAz/8w547M94K093q863q094bA+3q0+3a4+3q0+3q4/3q4+3q4546pA368+3q4+3q0+3a4z5rM/3q4/3a0+3q0+3q0/3q0/3a4/3q493a8+3q0/3a4+3q0/3q493q893q0+364+3q4/3q4z3ao+3a484a8/364+3a4956o63K4/3a0+3a1A3608368+3a1A5rM+4Kw/3a5Az489368/3q0/3a4/4K9DzphCz5VC0JU+360/3q0/3rBB0pZCz5VCz5U/3q5D0ZZDz5VCz5ZD0JU/3q5Bz5RDz5VDzpZDz5ZDz5VDz5VCzpVBz5RA1ZVCzpZDzpZEz5dA0ZZCzpZCzpdD05ZAzJlCzpVDzpZDzpVDzpVEzJlCzpZDzpVA/4BDzpVCz5ZDz5ZCz5VDzpZBzpZBzpdBz5ZCz5ZCzpZCzpRCz5dCzpVCz5U325JC0JVCz5ZAz5c5445BzpVDzpZCz5VCzpU51ZxDz5VB0ZQ/3q5Dz5b///9RxxHiAAAAenRSTlMABRsyNh8qjM39/r9eCSDA7XgKVfOsg/fDdVNOcqjvbFSddLcP1TOO4hUWao84QMQUSvsQUPz4SSrobFf0PTPvZWU99P5X6E/4/FBb/ftKGPfCQDiSaS4U543W7A+2cwSdVe2pck5TdcSDH3+t8w6M8iAJXqjqzRI1NywcbtAAAAABYktHRHzRtiBfAAAAB3RJTUUH5QoMBBo1a6wRrAAAAT5JREFUOMtjYBjWgJGJmYWVkZAqNnYOziog4OLm4cWjjI+/CgEEBIVwqRMWqUIBojjUiaEqqxJnxa9OQlJKWkZWrqpKHrs6BbAqLkU2qN+VlLGrUxEAqVNVIxh66iB1GpoE1WmJg1zPRjg6tEEG6hBSpaunpw8y0ICQQkMjaMgYCWPIGaPwTEzB6szMMdRZWFqh8K25gOpsbDHU2dlXVzugiDhWVclhhqGTc3V1tYsripi8G2bYuHtUg4CnF2rUYKjz9qmGAF8/QsHhHwBUFhgUFExIYQjIvFDC0RUGcmNAOEF14REgAyMJqrOLAqmLjsEuGxsXD42SBBewjxOxq7Oqrk5KTklNS8+AhkwmdnVZAdWoIBuHs3JQleUm4nJ/Xn4BkrrAQjxeLSouKQUp8inLtyAYLuUVQZVFw7sgBgAb/3xXjRnKcgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0xMlQwNDoyMzo1NSswMDowMBfvnsMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMTJUMDQ6MjM6NTMrMDA6MDAFYhNFAAAAAElFTkSuQmCC"},b1c5:function(t,e,i){},b690:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wresize-panel-3",on:{mousemove:function(e){return t.onMousemove(e)},mouseup:function(e){return t.onMouseup(e)}}},[i("div",{staticClass:"wresize-panel-left",style:{width:t.divLeft.width+"px"}},[t._t("left")],2),i("div",{staticClass:"wresize-handler-left",style:{left:t.divLeftHandler.left+"px"},on:{mousedown:function(e){return t.onMouseDownLeft(e)}}}),i("div",{staticClass:"wresize-panel-center",style:{left:t.divCenter.left+"px",right:t.divCenter.right+"px"}},[t._t("center")],2),i("div",{staticClass:"wresize-handler-right",style:{right:t.divRightHandler.right+"px"},on:{mousedown:function(e){return t.onMouseDownRight(e)}}}),i("div",{staticClass:"wresize-panel-right",style:{width:t.divRight.width+"px"}},[t._t("right")],2)])},r=[],a=(i("d6a4"),{name:"WresizePanel3",props:{leftWidth:{type:Number,default:235},rightWidth:{type:Number,default:265},onResize:{type:Function,default:void 0}},data:function(){return{flag:"",disx:0,divLeft:{width:this.leftWidth,temp:0},divCenter:{left:this.leftWidth+5,right:this.rightWidth+5,temp:0},divRight:{width:this.rightWidth,temp:0},divLeftHandler:{left:this.leftWidth,temp:0},divRightHandler:{right:this.rightWidth,temp:0}}},methods:{onMouseDownLeft:function(t){this.flag="left";t.currentTarget;this.disx=t.pageX,this.divLeftHandler.temp=this.divLeftHandler.left,this.divLeft.temp=this.divLeft.width,this.divCenter.temp=this.divCenter.left},onMouseDownRight:function(t){this.flag="right";t.currentTarget;this.disx=t.pageX,this.divRightHandler.temp=this.divRightHandler.right,this.divRight.temp=this.divRight.width,this.divCenter.temp=this.divCenter.right},onMouseup:function(t){""!=this.flag&&(this.onResize&&this.onResize(this.flag),this.flag="")},onMousemove:function(t){if(1==t.which){if(this.flag){var e=t.pageX-this.disx;"left"==this.flag?(this.divLeftHandler.left=this.divLeftHandler.temp+e,this.divLeft.width=this.divLeft.temp+e,this.divCenter.left=this.divCenter.temp+e):"right"==this.flag&&(this.divRightHandler.right=this.divRightHandler.temp-e,this.divRight.width=this.divRight.temp-e,this.divCenter.right=this.divCenter.temp-e)}}else""!=this.flag&&(this.flag="")}}}),o=a,l=(i("0589"),i("bdd7")),s=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},c00a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("svg",{class:t.svgClass,attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":t.iconName}})])])},r=[],a={name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""}},computed:{iconName:function(){return"#icon-".concat(this.iconClass)},svgClass:function(){return this.className?"dgiot-icon "+this.className:"dgiot-icon"}}},o=a,l=(i("5d93"),i("bdd7")),s=Object(l["a"])(o,n,r,!1,null,"11a8d33c",null);e["default"]=s.exports},c4e6:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",{staticClass:"mailtable",staticStyle:{width:"100%"},attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[i("tr",[i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("konva.id")+":")+" ")]),i("td",[t._v(t._s(t.devicedetail.objectId))]),i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.devicenumber")+":")+" ")]),i("td",[t._v(t._s(t.devicedetail.devaddr))]),i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.installationlocation")+":")+" ")]),i("td",[t._v(" "+t._s(t.devicedetail.detail?t.devicedetail.detail.address:"")+" ")]),i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.state")+":")+" ")]),i("td",{staticClass:"ACTIVE"},[t._v(" "+t._s(t.$translateTitle("product.active"))+" ")])]),i("tr",[i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.ipaddress")+":")+" ")]),i("td",[t._v(t._s(t.devicedetail.ip||"-"))]),i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.createdAt")+":")+" ")]),i("td",[t._v(" "+t._s(t.$moment(t.devicedetail.createdAt).format("YYYY-MM-DD HH:mm:ss"))+" ")]),i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.lastonlinetime")+":")+" ")]),i("td",[t._v(" "+t._s(t.$moment(t.devicedetail.updatedAt).format("YYYY-MM-DD HH:mm:ss"))+" ")]),i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.nodetype")+":")+" ")]),0==t.devicedetail.nodeType?i("td",[t._v(" "+t._s(t.$translateTitle("product.equipment"))+" ")]):i("td",[t._v(" "+t._s(t.$translateTitle("product.gateway"))+" ")])]),i("tr",[i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("developer.describe")+":")+" ")]),i("td",[t._v(t._s(t.devicedetail.desc))]),i("td",{staticClass:"cloumn"},[t._v(" "+t._s(t.$translateTitle("equipment.Failure analysis")+":")+" ")]),i("td",[t._v(t._s(t.devicedetail.lastOnlineTime||"-"))])])]),i("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:t.devicedetail.topicData}},[i("el-table-column",{attrs:{label:"Topic"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("span",[t._v(" "+t._s(n.topic.replace("${ProductId}/${DevAddr}",t.devicedetail.productid+"/"+t.devicedetail.devaddr))+" ")])]}}])}),i("el-table-column",{attrs:{align:"center",label:t.$translateTitle("equipment.operationauthority")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return["pub"==n.type?i("span",[t._v(" "+t._s(t.$translateTitle("product.pub"))+" ")]):t._e(),"sub"==n.type?i("span",[t._v(" "+t._s(t.$translateTitle("product.sub"))+" ")]):t._e()]}}])}),i("el-table-column",{attrs:{align:"center",label:t.$translateTitle("developer.describe"),prop:"desc"}})],1)],1)},r=[],a={name:"CardInfo",props:{devicedetail:{type:Object,default:function(){}}},data:function(){return{}},created:function(){}},o=a,l=(i("4825"),i("bdd7")),s=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},c6b8:function(t,e,i){},c7a7:function(t,e,i){"use strict";i.r(e);i("8d41");e["default"]={bind:function(t,e){t.addEventListener("click",(function(i){var n=Object.assign({},e.value),r=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),a=r.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var o=a.getBoundingClientRect(),l=a.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",a.appendChild(l)),r.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(i.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(i.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=r.color,l.className="waves-ripple z-active",!1}}),!1)}}},c7b6:function(t,e,i){"use strict";i("c6b8")},cbb8:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wresize-panel-2",on:{mousemove:function(e){return t.onMousemove(e)},mouseup:function(e){return t.onMouseup(e)}}},["left"==t.fixedWidthMode?[i("div",{staticClass:"wresize-panel-left",style:{width:t.divLeft.width+"px"}},[t._t("left")],2),i("div",{staticClass:"wresize-handler",style:{left:t.divHandler.left+"px"},on:{mousedown:function(e){return t.onMouseDownLeft(e)}}}),i("div",{staticClass:"wresize-panel-right",style:{left:t.divRight.left+"px"}},[t._t("right")],2)]:[i("div",{staticClass:"wresize-panel-left",style:{right:t.divLeft.right+"px"}},[t._t("left")],2),i("div",{staticClass:"wresize-handler",style:{left:t.divHandler.right+"px"},on:{mousedown:function(e){return t.onMouseDownRight(e)}}}),i("div",{staticClass:"wresize-panel-right",style:{width:t.divRight.width+"px"}},[t._t("right")],2)]],2)},r=[],a=(i("d6a4"),{name:"WresizePanel2",props:{fixedWidth:{type:Number,default:200},fixedWidthMode:{type:String,default:"left"},onResize:{type:Function,default:void 0}},data:function(){return{flag:!1,disx:0,divLeft:{width:this.fixedWidth,right:this.fixedWidth+5,temp:0},divRight:{width:this.fixedWidth,left:this.fixedWidth+5,temp:0},divHandler:{left:this.fixedWidth,right:this.fixedWidth,temp:0}}},methods:{onMouseDownLeft:function(t){this.flag=!0;t.currentTarget;this.disx=t.pageX,this.divHandler.temp=this.divHandler.left,this.divLeft.temp=this.divLeft.width,this.divRight.temp=this.divRight.left},onMouseDownRight:function(t){this.flag=!0;t.currentTarget;this.disx=t.pageX,this.divHandler.temp=this.divHandler.right,this.divRight.temp=this.divRight.width,this.divLeft.temp=this.divLeft.right},onMouseup:function(t){this.flag=!1,this.onResize&&this.onResize()},onMousemove:function(t){if(1==t.which){if(this.flag){var e=t.pageX-this.disx;"left"==this.fixedWidthMode?(this.divHandler.left=this.divHandler.temp+e,this.divLeft.width=this.divLeft.temp+e,this.divRight.left=this.divRight.temp+e):(this.divHandler.right=this.divHandler.temp-e,this.divRight.width=this.divRight.temp-e,this.divLeft.right=this.divLeft.temp-e)}}else""!=this.flag&&(this.flag="")}}}),o=a,l=(i("8a9a"),i("bdd7")),s=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},cc0f:function(t,e,i){"use strict";i.r(e);i("f1e1");var n,r={};r.install=function(t){t.directive("sticky",{inserted:function(t,e){var i=e.value||{},r=i.stickyTop||0,a=i.zIndex||1e3,o=t.style;o.position="-webkit-sticky",o.position="sticky";var l=t.getBoundingClientRect().height,s=t.getBoundingClientRect().width;o.cssText="top: ".concat(r,"px; z-index: ").concat(a);var c=t.parentNode||document.documentElement,d=document.createElement("div");d.style.display="none",d.style.width="".concat(s,"px"),d.style.height="".concat(l,"px"),c.insertBefore(d,t);var u=!1,f=function(t,e){var i=e?"pageYOffset":"pageXOffset",n=e?"scrollTop":"scrollLeft",r=t[i];return"number"!==typeof r&&(r=window.document.documentElement[n]),r},h=function(){u||(o.height||(o.height="".concat(t.offsetHeight,"px")),o.position="fixed",o.width="".concat(s,"px"),d.style.display="inline-block",u=!0)},p=function(){u&&(o.position="",d.style.display="none",u=!1)},m=function(){var e=f(window,!0),i=t.getBoundingClientRect().top;i<r?h():e<l+r&&p()};n=function(){m()},window.addEventListener("scroll",n)},unbind:function(){window.removeEventListener("scroll",n)}})},e["default"]=r},d078:function(t,e,i){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},d774:function(t,e,i){},e251:function(t,e,i){},e799:function(t,e,i){"use strict";i.r(e);i("3dec"),i("f764"),i("5662");var n=i("4360");e["default"]={inserted:function(t,e,i){var r=e.value,a=n["default"].getters&&n["default"].getters.roles;if(!(r&&r instanceof Array&&r.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var o=r,l=a.some((function(t){return o.includes(t)}));l||t.parentNode&&t.parentNode.removeChild(t)}}},e79f:function(t,e,i){"use strict";i("0b0b")},e81d:function(t,e,i){},e886:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1==t.isscreen?i("svg",{staticClass:"screenfull-svg",attrs:{height:"32","p-id":"2069",t:"1508738709248",version:"1.1",viewBox:"0 0 1024 1024",width:"32",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.click}},[i("path",{attrs:{d:"M333.493443 428.647617 428.322206 333.832158 262.572184 168.045297 366.707916 64.444754 64.09683 64.444754 63.853283 366.570793 167.283957 262.460644Z","p-id":"2070"}}),i("path",{attrs:{d:"M854.845439 760.133334 688.61037 593.95864 593.805144 688.764889 759.554142 854.56096 655.44604 958.161503 958.055079 958.161503 958.274066 656.035464Z","p-id":"2071"}}),i("path",{attrs:{d:"M688.535669 428.550403 854.31025 262.801405 957.935352 366.921787 957.935352 64.34754 655.809313 64.081481 759.919463 167.535691 593.70793 333.731874Z","p-id":"2072"}}),i("path",{attrs:{d:"M333.590658 594.033341 167.8171 759.804852 64.218604 655.67219 64.218604 958.270996 366.342596 958.502263 262.234493 855.071589 428.421466 688.86108Z","p-id":"2073"}})]):t._e(),0==t.isscreen?i("svg",{staticClass:"screenfull-svg",attrs:{height:"32","p-id":"5283",t:"1563880671008",version:"1.1",viewBox:"0 0 1028 1024",width:"32",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.click}},[i("path",{attrs:{d:"M984.626 274.883l-161.96-0.592 181.72-180.643c19.868-20.084 19.868-52.605 0-72.634-19.975-20.03-52.281-20.03-72.15 0L748.74 203.54l1.238-165.19c0.485-20.73-15.883-38.767-36.505-38.282h-26.114c-20.622 0.538-37.69 12.868-38.12 33.598l-1.078 286.606c0 0.377 1.346 0.646 1.346 1.023l-1.992 18.791c-0.161 10.338 2.262 19.653 8.938 26.275 6.569 6.73 15.83 10.769 26.114 10.5l18.63-0.377c0.43 0 0.7-0.162 1.076-0.216l286.983 1.616c20.622-0.485 37.637-17.607 38.175-38.39v-26.33c-3.123-24.444-22.237-38.766-42.805-38.282z m40.867 436.936l-0.054-26.33c-0.485-20.783-17.445-37.905-37.96-38.39l-285.475 1.562c-0.43 0-0.7-0.162-1.077-0.162l-18.575-0.43c-10.23-0.323-19.438 3.769-26.007 10.445-6.622 6.677-9.045 15.991-8.83 26.383l1.992 18.791c0 0.377-1.346 0.646-1.346 1.023l1.077 284.399c0.43 20.73 17.391 33.06 37.96 33.544l27.675 0.054c20.514 0.484 36.774-17.607 36.29-38.336l-1.185-161.852 182.743 181.397c19.76 20.03 51.959 20.03 71.773 0s19.814-52.551 0-72.635L821.966 749.024l160.883-0.592c20.46 0.538 39.52-12.169 42.644-36.613zM369.04 658.568c-6.57-6.677-15.83-10.769-26.114-10.446l-18.684 0.431c-0.323 0-0.646 0.162-1.023 0.162l-283.16-1.616c-20.568 0.485-37.636 17.607-38.12 38.39l-0.054 26.33c3.122 24.444 22.237 37.097 42.805 36.72l159.698 0.593L21.16 931.336c-19.922 20.084-19.922 52.605 0 72.634s52.174 20.03 72.096 0l183.497-182.473-1.239 160.882c-0.484 20.73 15.884 38.767 36.452 38.283h26.168c20.622-0.539 37.69-12.815 38.12-33.598l1.077-282.353c0-0.377-1.346-0.646-1.346-1.023l2.046-18.79c0.108-10.339-2.315-19.654-8.991-26.33z m8.237-338.295l-1.076-286.606C375.824 12.937 358.809 0.553 338.295 0.015H310.62c-20.514-0.43-36.775 17.607-36.29 38.282l1.238 164.06L92.88 21.014c-19.868-20.03-52.012-20.03-71.826 0s-19.815 52.55 0 72.634L201.965 274.29l-159.375 0.592C22.13 274.4 3.123 288.721 0 313.165l0.054 26.33c0.484 20.783 17.445 37.905 37.96 38.39l285.474-1.616c0.377 0.054 0.647 0.216 1.023 0.216l18.576 0.43c10.23 0.27 19.491-3.768 26.006-10.499 6.623-6.676 9.046-15.991 8.83-26.383l-2.045-18.791c0-0.377 1.4-0.592 1.4-0.97z","p-id":"5284"}})]):t._e()])},r=[],a=(i("d6a4"),i("d745")),o=i.n(a),l={name:"ScreenfullM",props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},data:function(){return{isFullscreen:!0,isscreen:!0}},mounted:function(){this.$dgiotBus.$emit("isshow","全屏")},methods:{click:function(){if(1==o.a.isFullscreen?(this.isscreen=!0,this.$dgiotBus.$emit("isshow","全屏")):(this.isscreen=!1,this.$dgiotBus.$emit("isshow","退出全屏")),!o.a.enabled)return this.$message({message:"you browser can not work",type:"warning"}),!1;screenfull.toggle()}}},s=l,c=(i("a8bc"),i("bdd7")),d=Object(c["a"])(s,n,r,!1,null,"9be0231a",null);e["default"]=d.exports},ec7f:function(t,e,i){},f362:function(t,e,i){"use strict";i.r(e);i("f764"),i("5662"),i("1d17"),i("98da"),i("f1e1");e["default"]={bind:function(t,e,i){var n=t.querySelector(".el-dialog__header"),r=t.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",r.style.cssText+=";top:0px;";var a=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();n.onmousedown=function(t){var e=t.clientX-n.offsetLeft,i=t.clientY-n.offsetTop,o=r.offsetWidth,l=r.offsetHeight,s=document.body.clientWidth,c=document.body.clientHeight,d=r.offsetLeft,u=s-r.offsetLeft-o,f=r.offsetTop,h=c-r.offsetTop-l,p=a(r,"left"),m=a(r,"top");p.includes("%")?(p=+document.body.clientWidth*(+p.replace(/\%/g,"")/100),m=+document.body.clientHeight*(+m.replace(/\%/g,"")/100)):(p=+p.replace(/\px/g,""),m=+m.replace(/\px/g,"")),document.onmousemove=function(t){var n=t.clientX-e,a=t.clientY-i;-n>d?n=-d:n>u&&(n=u),-a>f?a=-f:a>h&&(a=h),r.style.cssText+=";left:".concat(n+p,"px;top:").concat(a+m,"px;")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}}},f46d:function(t,e){t.exports={proxy:[{path:"iotapi",target:"https://dev.iotn2n.com"},{path:"dgiot_dashboard",target:"http://dev.iotn2n.com"},{path:"baidubce",target:"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock"}]}},f553:function(t,e,i){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},f5b7:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:24}},[i("vab-query-form",[i("vab-query-form-top-panel",[i("el-form",{attrs:{inline:!0,"label-width":"0"},nativeOn:{submit:function(t){t.preventDefault()}}},[i("el-form-item",{attrs:{label:""}},[i("el-input",{model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),i("el-form-item",{attrs:{"label-width":"0"}},[i("el-button",{attrs:{"native-type":"submit",type:"primary"},on:{click:t.queryData}},[t._v(" 查询 ")])],1)],1)],1)],1)],1),t._l(t.queryIcon,(function(e,n){return i("el-col",{key:n,attrs:{span:6}},[i("el-card",{attrs:{shadow:"hover"},nativeOn:{click:function(i){return t.handleIcon(e)}}},[i("dgiot-icon",{attrs:{icon:e}})],1)],1)})),i("el-col",{attrs:{span:24}},[i("el-pagination",{attrs:{background:t.background,"current-page":t.queryForm.pageNo,layout:t.layout,"page-size":t.queryForm.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],2)},r=[],a=i("fb07"),o=i("d0d7"),l=i.n(o),s=i("c333"),c={name:"VabIconSelector",data:function(){return{icon:"24-hours-fill",layout:"total, prev, next",total:0,background:!0,height:0,selectRows:"",queryIcon:[],queryForm:{pageNo:1,pageSize:16,title:""}}},created:function(){this.fetchData()},methods:{handleSizeChange:function(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.queryForm.pageNo=t,this.fetchData()},queryData:function(){this.queryForm.pageNo=1,this.fetchData()},fetchData:function(){var t=this;return Object(a["a"])(l.a.mark((function e(){var i,n,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["getIconList"])(t.queryForm);case 2:i=e.sent,n=i.data,r=i.totalCount,t.queryIcon=n,t.total=r;case 7:case"end":return e.stop()}}),e)})))()},handleIcon:function(t){this.icon=t,this.queryForm.title=t,this.$emit("handle-icon",t)}}},d=c,u=(i("a832"),i("bdd7")),f=Object(u["a"])(d,n,r,!1,null,null,null);e["default"]=f.exports},fa53:function(t,e,i){},fc6f:function(t,e,i){"use strict";if(i.r(e),!Clipboard)throw new Error("you should npm install `clipboard` --save at first ");e["default"]={bind:function(t,e){if("success"===e.arg)t._v_clipboard_success=e.value;else if("error"===e.arg)t._v_clipboard_error=e.value;else{var i=new Clipboard(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"}});i.on("success",(function(e){var i=t._v_clipboard_success;i&&i(e)})),i.on("error",(function(e){var i=t._v_clipboard_error;i&&i(e)})),t._v_clipboard=i}},update:function(t,e){"success"===e.arg?t._v_clipboard_success=e.value:"error"===e.arg?t._v_clipboard_error=e.value:(t._v_clipboard.text=function(){return e.value},t._v_clipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){"success"===e.arg?delete t._v_clipboard_success:"error"===e.arg?delete t._v_clipboard_error:(t._v_clipboard.destroy(),delete t._v_clipboard)}}}}]);