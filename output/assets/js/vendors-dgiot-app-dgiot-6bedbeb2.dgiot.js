/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 11:26:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors-dgiot-app-dgiot-6bedbeb2"],{"0064":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("28e9"),r=n("cb4a");const o={clipboard:{writeText:r["g"]||document.queryCommandSupported&&document.queryCommandSupported("copy")||!!(navigator&&navigator.clipboard&&navigator.clipboard.writeText),readText:r["g"]||!!(navigator&&navigator.clipboard&&navigator.clipboard.readText)},keyboard:(()=>r["g"]||i["i"]?0:navigator.keyboard||i["h"]?1:2)(),touch:"ontouchstart"in window||navigator.maxTouchPoints>0,pointerEvents:window.PointerEvent&&("ontouchstart"in window||window.navigator.maxTouchPoints>0||navigator.maxTouchPoints>0)}},"0310":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s}));var i=n("8df7");const r={RESOURCES:"ResourceURLs",DOWNLOAD_URL:"DownloadURL",FILES:"Files",TEXT:i["a"].text,TERMINALS:"Terminals"};class o{constructor(t){this.data=t}update(){}getData(){return this.data}}const s={CurrentDragAndDropData:void 0}},"28e9":function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"l",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return a})),n.d(e,"g",(function(){return l})),n.d(e,"j",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"h",(function(){return m})),n.d(e,"k",(function(){return g})),n.d(e,"e",(function(){return y})),n.d(e,"i",(function(){return p}));var i=n("f295");class r{constructor(){this._zoomLevel=0,this._lastZoomLevelChangeTime=0,this._onDidChangeZoomLevel=new i["b"],this.onDidChangeZoomLevel=this._onDidChangeZoomLevel.event,this._zoomFactor=1}getZoomLevel(){return this._zoomLevel}getTimeSinceLastZoomLevelChanged(){return Date.now()-this._lastZoomLevelChangeTime}getZoomFactor(){return this._zoomFactor}getPixelRatio(){let t=document.createElement("canvas").getContext("2d"),e=window.devicePixelRatio||1,n=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return e/n}}function o(){return r.INSTANCE.getZoomLevel()}function s(){return r.INSTANCE.getTimeSinceLastZoomLevelChanged()}function u(t){return r.INSTANCE.onDidChangeZoomLevel(t)}function d(){return r.INSTANCE.getZoomFactor()}function a(){return r.INSTANCE.getPixelRatio()}r.INSTANCE=new r;const c=navigator.userAgent,l=c.indexOf("Firefox")>=0,f=c.indexOf("AppleWebKit")>=0,h=c.indexOf("Chrome")>=0,m=!h&&c.indexOf("Safari")>=0,g=!h&&!m&&f,y=c.indexOf("Android")>=0,p=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches},d208:function(t,e,n){"use strict";n.d(e,"t",(function(){return h})),n.d(e,"N",(function(){return m})),n.d(e,"i",(function(){return y})),n.d(e,"o",(function(){return _})),n.d(e,"n",(function(){return E})),n.d(e,"g",(function(){return S})),n.d(e,"h",(function(){return b})),n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return T})),n.d(e,"T",(function(){return R})),n.d(e,"V",(function(){return k})),n.d(e,"l",(function(){return A})),n.d(e,"A",(function(){return C})),n.d(e,"z",(function(){return x})),n.d(e,"b",(function(){return M})),n.d(e,"G",(function(){return U})),n.d(e,"X",(function(){return W})),n.d(e,"D",(function(){return I})),n.d(e,"f",(function(){return F})),n.d(e,"I",(function(){return H})),n.d(e,"C",(function(){return V})),n.d(e,"B",(function(){return G})),n.d(e,"H",(function(){return Z})),n.d(e,"L",(function(){return j})),n.d(e,"x",(function(){return q})),n.d(e,"J",(function(){return z})),n.d(e,"O",(function(){return Y})),n.d(e,"F",(function(){return J})),n.d(e,"y",(function(){return $})),n.d(e,"w",(function(){return Q})),n.d(e,"v",(function(){return it})),n.d(e,"Q",(function(){return rt})),n.d(e,"M",(function(){return ot})),n.d(e,"d",(function(){return st})),n.d(e,"c",(function(){return ut})),n.d(e,"U",(function(){return dt})),n.d(e,"S",(function(){return at})),n.d(e,"Y",(function(){return lt})),n.d(e,"q",(function(){return ft})),n.d(e,"P",(function(){return ht})),n.d(e,"R",(function(){return mt})),n.d(e,"a",(function(){return wt})),n.d(e,"W",(function(){return _t})),n.d(e,"K",(function(){return Et})),n.d(e,"E",(function(){return St})),n.d(e,"u",(function(){return bt})),n.d(e,"Z",(function(){return vt})),n.d(e,"p",(function(){return Tt})),n.d(e,"s",(function(){return Rt})),n.d(e,"r",(function(){return kt})),n.d(e,"e",(function(){return Lt})),n.d(e,"m",(function(){return Kt}));var i=n("28e9"),r=n("0064"),o=n("be5d"),s=n("ce14"),u=n("4b4a"),d=n("f123"),a=n("f295"),c=n("92db"),l=n("dbd6"),f=n("cb4a");function h(t){while(t.firstChild)t.firstChild.remove()}function m(t){var e;return null!==(e=null===t||void 0===t?void 0:t.isConnected)&&void 0!==e&&e}class g{constructor(t,e,n,i){this._node=t,this._type=e,this._handler=n,this._options=i||!1,this._node.addEventListener(this._type,this._handler,this._options)}dispose(){this._handler&&(this._node.removeEventListener(this._type,this._handler,this._options),this._node=null,this._handler=null)}}function y(t,e,n,i){return new g(t,e,n,i)}function p(t){return function(e){return t(new s["a"](e))}}function w(t){return function(e){return t(new o["a"](e))}}let _=function(t,e,n,i){let r=n;return"click"===e||"mousedown"===e?r=p(n):"keydown"!==e&&"keypress"!==e&&"keyup"!==e||(r=w(n)),y(t,e,r,i)},E=function(t,e,n){let i=p(e);return S(t,i,n)};function S(t,e,n){return y(t,f["c"]&&r["a"].pointerEvents?st.POINTER_DOWN:st.MOUSE_DOWN,e,n)}function b(t,e,n){return y(t,f["c"]&&r["a"].pointerEvents?st.POINTER_UP:st.MOUSE_UP,e,n)}function v(t,e){return y(t,"mouseout",n=>{let i=n.relatedTarget;while(i&&i!==t)i=i.parentNode;i!==t&&e(n)})}function T(t,e){return y(t,"pointerout",n=>{let i=n.relatedTarget;while(i&&i!==t)i=i.parentNode;i!==t&&e(n)})}let R,k,L=null;function K(t){if(!L){const t=t=>setTimeout(()=>t((new Date).getTime()),0);L=self.requestAnimationFrame||self.msRequestAnimationFrame||self.webkitRequestAnimationFrame||self.mozRequestAnimationFrame||self.oRequestAnimationFrame||t}return L.call(self,t)}class N{constructor(t,e=0){this._runner=t,this.priority=e,this._canceled=!1}dispose(){this._canceled=!0}execute(){if(!this._canceled)try{this._runner()}catch(t){Object(d["f"])(t)}}static sort(t,e){return e.priority-t.priority}}(function(){let t=[],e=null,n=!1,i=!1,r=()=>{n=!1,e=t,t=[],i=!0;while(e.length>0){e.sort(N.sort);let t=e.shift();t.execute()}i=!1};k=(e,i=0)=>{let o=new N(e,i);return t.push(o),n||(n=!0,K(r)),o},R=(t,n)=>{if(i){let i=new N(t,n);return e.push(i),i}return k(t,n)}})();const O=8,D=function(t,e){return e};class P extends c["a"]{constructor(t,e,n,i=D,r=O){super();let o=null,s=0,d=this._register(new u["g"]),a=()=>{s=(new Date).getTime(),n(o),o=null};this._register(y(t,e,t=>{o=i(o,t);let e=(new Date).getTime()-s;e>=r?(d.cancel(),a()):d.setIfNotSet(a,r-e)}))}}function A(t,e,n,i,r){return new P(t,e,n,i,r)}function C(t){return document.defaultView.getComputedStyle(t,null)}function x(t){if(t!==document.body)return new M(t.clientWidth,t.clientHeight);if(f["c"]&&window.visualViewport)return new M(window.visualViewport.width,window.visualViewport.height);if(window.innerWidth&&window.innerHeight)return new M(window.innerWidth,window.innerHeight);if(document.body&&document.body.clientWidth&&document.body.clientHeight)return new M(document.body.clientWidth,document.body.clientHeight);if(document.documentElement&&document.documentElement.clientWidth&&document.documentElement.clientHeight)return new M(document.documentElement.clientWidth,document.documentElement.clientHeight);throw new Error("Unable to figure out browser width and height")}class B{static convertToPixels(t,e){return parseFloat(e)||0}static getDimension(t,e,n){let i=C(t),r="0";return i&&(r=i.getPropertyValue?i.getPropertyValue(e):i.getAttribute(n)),B.convertToPixels(t,r)}static getBorderLeftWidth(t){return B.getDimension(t,"border-left-width","borderLeftWidth")}static getBorderRightWidth(t){return B.getDimension(t,"border-right-width","borderRightWidth")}static getBorderTopWidth(t){return B.getDimension(t,"border-top-width","borderTopWidth")}static getBorderBottomWidth(t){return B.getDimension(t,"border-bottom-width","borderBottomWidth")}static getPaddingLeft(t){return B.getDimension(t,"padding-left","paddingLeft")}static getPaddingRight(t){return B.getDimension(t,"padding-right","paddingRight")}static getPaddingTop(t){return B.getDimension(t,"padding-top","paddingTop")}static getPaddingBottom(t){return B.getDimension(t,"padding-bottom","paddingBottom")}static getMarginLeft(t){return B.getDimension(t,"margin-left","marginLeft")}static getMarginTop(t){return B.getDimension(t,"margin-top","marginTop")}static getMarginRight(t){return B.getDimension(t,"margin-right","marginRight")}static getMarginBottom(t){return B.getDimension(t,"margin-bottom","marginBottom")}}class M{constructor(t,e){this.width=t,this.height=e}with(t=this.width,e=this.height){return t!==this.width||e!==this.height?new M(t,e):this}static is(t){return"object"===typeof t&&"number"===typeof t.height&&"number"===typeof t.width}static lift(t){return t instanceof M?t:new M(t.width,t.height)}static equals(t,e){return t===e||!(!t||!e)&&(t.width===e.width&&t.height===e.height)}}function U(t){let e=t.offsetParent,n=t.offsetTop,i=t.offsetLeft;while(null!==(t=t.parentNode)&&t!==document.body&&t!==document.documentElement){n-=t.scrollTop;const r=X(t)?null:C(t);r&&(i-="rtl"!==r.direction?t.scrollLeft:-t.scrollLeft),t===e&&(i+=B.getBorderLeftWidth(t),n+=B.getBorderTopWidth(t),n+=t.offsetTop,i+=t.offsetLeft,e=t.offsetParent)}return{left:i,top:n}}function W(t,e,n){"number"===typeof e&&(t.style.width=e+"px"),"number"===typeof n&&(t.style.height=n+"px")}function I(t){let e=t.getBoundingClientRect();return{left:e.left+F.scrollX,top:e.top+F.scrollY,width:e.width,height:e.height}}const F=new class{get scrollX(){return"number"===typeof window.scrollX?window.scrollX:document.body.scrollLeft+document.documentElement.scrollLeft}get scrollY(){return"number"===typeof window.scrollY?window.scrollY:document.body.scrollTop+document.documentElement.scrollTop}};function H(t){let e=B.getMarginLeft(t)+B.getMarginRight(t);return t.offsetWidth+e}function V(t){let e=B.getBorderLeftWidth(t)+B.getBorderRightWidth(t),n=B.getPaddingLeft(t)+B.getPaddingRight(t);return t.offsetWidth-e-n}function G(t){let e=B.getBorderTopWidth(t)+B.getBorderBottomWidth(t),n=B.getPaddingTop(t)+B.getPaddingBottom(t);return t.offsetHeight-e-n}function Z(t){let e=B.getMarginTop(t)+B.getMarginBottom(t);return t.offsetHeight+e}function j(t,e){while(t){if(t===e)return!0;t=t.parentNode}return!1}function q(t,e,n){while(t&&t.nodeType===t.ELEMENT_NODE){if(t.classList.contains(e))return t;if(n)if("string"===typeof n){if(t.classList.contains(n))return null}else if(t===n)return null;t=t.parentNode}return null}function z(t,e,n){return!!q(t,e,n)}function X(t){return t&&!!t.host&&!!t.mode}function Y(t){return!!J(t)}function J(t){while(t.parentNode){if(t===document.body)return null;t=t.parentNode}return X(t)?t:null}function $(){let t=document.activeElement;while(null===t||void 0===t?void 0:t.shadowRoot)t=t.shadowRoot.activeElement;return t}function Q(t=document.getElementsByTagName("head")[0]){let e=document.createElement("style");return e.type="text/css",e.media="screen",t.appendChild(e),e}let tt=null;function et(){return tt||(tt=Q()),tt}function nt(t){var e,n;return(null===(e=null===t||void 0===t?void 0:t.sheet)||void 0===e?void 0:e.rules)?t.sheet.rules:(null===(n=null===t||void 0===t?void 0:t.sheet)||void 0===n?void 0:n.cssRules)?t.sheet.cssRules:[]}function it(t,e,n=et()){n&&e&&n.sheet.insertRule(t+"{"+e+"}",0)}function rt(t,e=et()){if(!e)return;let n=nt(e),i=[];for(let r=0;r<n.length;r++){let e=n[r];-1!==e.selectorText.indexOf(t)&&i.push(r)}for(let r=i.length-1;r>=0;r--)e.sheet.deleteRule(i[r])}function ot(t){return"object"===typeof HTMLElement?t instanceof HTMLElement:t&&"object"===typeof t&&1===t.nodeType&&"string"===typeof t.nodeName}const st={CLICK:"click",AUXCLICK:"auxclick",DBLCLICK:"dblclick",MOUSE_UP:"mouseup",MOUSE_DOWN:"mousedown",MOUSE_OVER:"mouseover",MOUSE_MOVE:"mousemove",MOUSE_OUT:"mouseout",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",MOUSE_WHEEL:"wheel",POINTER_UP:"pointerup",POINTER_DOWN:"pointerdown",POINTER_MOVE:"pointermove",CONTEXT_MENU:"contextmenu",WHEEL:"wheel",KEY_DOWN:"keydown",KEY_PRESS:"keypress",KEY_UP:"keyup",LOAD:"load",BEFORE_UNLOAD:"beforeunload",UNLOAD:"unload",ABORT:"abort",ERROR:"error",RESIZE:"resize",SCROLL:"scroll",FULLSCREEN_CHANGE:"fullscreenchange",WK_FULLSCREEN_CHANGE:"webkitfullscreenchange",SELECT:"select",CHANGE:"change",SUBMIT:"submit",RESET:"reset",FOCUS:"focus",FOCUS_IN:"focusin",FOCUS_OUT:"focusout",BLUR:"blur",INPUT:"input",STORAGE:"storage",DRAG_START:"dragstart",DRAG:"drag",DRAG_ENTER:"dragenter",DRAG_LEAVE:"dragleave",DRAG_OVER:"dragover",DROP:"drop",DRAG_END:"dragend",ANIMATION_START:i["j"]?"webkitAnimationStart":"animationstart",ANIMATION_END:i["j"]?"webkitAnimationEnd":"animationend",ANIMATION_ITERATION:i["j"]?"webkitAnimationIteration":"animationiteration"},ut={stop:function(t,e){t.preventDefault?t.preventDefault():t.returnValue=!1,e&&(t.stopPropagation?t.stopPropagation():t.cancelBubble=!0)}};function dt(t){let e=[];for(let n=0;t&&t.nodeType===t.ELEMENT_NODE;n++)e[n]=t.scrollTop,t=t.parentNode;return e}function at(t,e){for(let n=0;t&&t.nodeType===t.ELEMENT_NODE;n++)t.scrollTop!==e[n]&&(t.scrollTop=e[n]),t=t.parentNode}class ct extends c["a"]{constructor(t){super(),this._onDidFocus=this._register(new a["b"]),this.onDidFocus=this._onDidFocus.event,this._onDidBlur=this._register(new a["b"]),this.onDidBlur=this._onDidBlur.event;let e=j(document.activeElement,t),n=!1;const i=()=>{n=!1,e||(e=!0,this._onDidFocus.fire())},r=()=>{e&&(n=!0,window.setTimeout(()=>{n&&(n=!1,e=!1,this._onDidBlur.fire())},0))};this._refreshStateHandler=()=>{let n=j(document.activeElement,t);n!==e&&(e?r():i())},this._register(y(t,st.FOCUS,i,!0)),this._register(y(t,st.BLUR,r,!0))}}function lt(t){return new ct(t)}function ft(t,...e){if(t.append(...e),1===e.length&&"string"!==typeof e[0])return e[0]}function ht(t,e){return t.insertBefore(e,t.firstChild),e}function mt(t,...e){t.innerText="",ft(t,...e)}const gt=/([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;var yt;function pt(t,e,n,...i){let r=gt.exec(e);if(!r)throw new Error("Bad use of emmet");n=Object.assign({},n||{});let o,s=r[1]||"div";return o=t!==yt.HTML?document.createElementNS(t,s):document.createElement(s),r[3]&&(o.id=r[3]),r[4]&&(o.className=r[4].replace(/\./g," ").trim()),Object.keys(n).forEach(t=>{const e=n[t];"undefined"!==typeof e&&(/^on\w+$/.test(t)?o[t]=e:"selected"===t?e&&o.setAttribute(t,"true"):o.setAttribute(t,e))}),o.append(...i),o}function wt(t,e,...n){return pt(yt.HTML,t,e,...n)}function _t(...t){for(let e of t)e.style.display="",e.removeAttribute("aria-hidden")}function Et(...t){for(let e of t)e.style.display="none",e.setAttribute("aria-hidden","true")}function St(t){return Array.prototype.slice.call(document.getElementsByTagName(t),0)}function bt(t){const e=window.devicePixelRatio*t;return Math.max(1,Math.floor(e))/window.devicePixelRatio}function vt(t){window.open(t,"_blank","noopener")}function Tt(t){const e=()=>{t(),n=k(e)};let n=k(e);return Object(c["i"])(()=>n.dispose())}function Rt(t){return t?`url('${l["a"].asBrowserUri(t).toString(!0).replace(/'/g,"%27")}')`:"url('')"}function kt(t){return`'${t.replace(/'/g,"%27")}'`}(function(t){t["HTML"]="http://www.w3.org/1999/xhtml",t["SVG"]="http://www.w3.org/2000/svg"})(yt||(yt={})),wt.SVG=function(t,e,...n){return pt(yt.SVG,t,e,...n)},l["b"].setPreferredWebSchema(/^https:/.test(window.location.href)?"https":"http");class Lt extends a["b"]{constructor(){super(),this._subscriptions=new c["b"],this._keyStatus={altKey:!1,shiftKey:!1,ctrlKey:!1,metaKey:!1},this._subscriptions.add(y(window,"keydown",t=>{if(t.defaultPrevented)return;const e=new o["a"](t);if(6!==e.keyCode||!t.repeat){if(t.altKey&&!this._keyStatus.altKey)this._keyStatus.lastKeyPressed="alt";else if(t.ctrlKey&&!this._keyStatus.ctrlKey)this._keyStatus.lastKeyPressed="ctrl";else if(t.metaKey&&!this._keyStatus.metaKey)this._keyStatus.lastKeyPressed="meta";else if(t.shiftKey&&!this._keyStatus.shiftKey)this._keyStatus.lastKeyPressed="shift";else{if(6===e.keyCode)return;this._keyStatus.lastKeyPressed=void 0}this._keyStatus.altKey=t.altKey,this._keyStatus.ctrlKey=t.ctrlKey,this._keyStatus.metaKey=t.metaKey,this._keyStatus.shiftKey=t.shiftKey,this._keyStatus.lastKeyPressed&&(this._keyStatus.event=t,this.fire(this._keyStatus))}},!0)),this._subscriptions.add(y(window,"keyup",t=>{t.defaultPrevented||(!t.altKey&&this._keyStatus.altKey?this._keyStatus.lastKeyReleased="alt":!t.ctrlKey&&this._keyStatus.ctrlKey?this._keyStatus.lastKeyReleased="ctrl":!t.metaKey&&this._keyStatus.metaKey?this._keyStatus.lastKeyReleased="meta":!t.shiftKey&&this._keyStatus.shiftKey?this._keyStatus.lastKeyReleased="shift":this._keyStatus.lastKeyReleased=void 0,this._keyStatus.lastKeyPressed!==this._keyStatus.lastKeyReleased&&(this._keyStatus.lastKeyPressed=void 0),this._keyStatus.altKey=t.altKey,this._keyStatus.ctrlKey=t.ctrlKey,this._keyStatus.metaKey=t.metaKey,this._keyStatus.shiftKey=t.shiftKey,this._keyStatus.lastKeyReleased&&(this._keyStatus.event=t,this.fire(this._keyStatus)))},!0)),this._subscriptions.add(y(document.body,"mousedown",()=>{this._keyStatus.lastKeyPressed=void 0},!0)),this._subscriptions.add(y(document.body,"mouseup",()=>{this._keyStatus.lastKeyPressed=void 0},!0)),this._subscriptions.add(y(document.body,"mousemove",t=>{t.buttons&&(this._keyStatus.lastKeyPressed=void 0)},!0)),this._subscriptions.add(y(window,"blur",()=>{this.resetKeyStatus()}))}get keyStatus(){return this._keyStatus}resetKeyStatus(){this.doResetKeyStatus(),this.fire(this._keyStatus)}doResetKeyStatus(){this._keyStatus={altKey:!1,shiftKey:!1,ctrlKey:!1,metaKey:!1}}static getInstance(){return Lt.instance||(Lt.instance=new Lt),Lt.instance}dispose(){super.dispose(),this._subscriptions.dispose()}}function Kt(t,e){const n=window.matchMedia(t);"function"===typeof n.addEventListener?n.addEventListener("change",e):n.addListener(e)}}}]);