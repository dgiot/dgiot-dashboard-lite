import{g as e}from"../@antv/@antv.e579bdb9.js";import{P as t}from"../prop-types/prop-types.39fde81f.js";import{R as r}from"../react-dom/react-dom.1976bb8b.js";import{r as n,R as o}from"../react/react.fab41096.js";import{o as u,c as a,l as c}from"../dom-helpers/dom-helpers.a2e48930.js";import{u as i}from"../@restart/@restart.ec3b74dc.js";var f=function(e){var t;return"undefined"==typeof document?null:null==e?u().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};var l={container:t.any,onRendered:t.func},s=function(e){var t=e.container,u=e.children,a=function(e,t){var r=n.exports.useState((function(){return f(e)})),o=r[0],u=r[1];if(!o){var a=f(e);a&&u(a)}return n.exports.useEffect((function(){t&&o&&t(o)}),[t,o]),n.exports.useEffect((function(){var t=f(e);t!==o&&u(t)}),[e,o]),o}(t,e.onRendered);return a?o.createElement(o.Fragment,null,r.createPortal(u,a)):null};s.displayName="Portal",s.propTypes=l;var d=e(Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})));var p=function(e){return u(function(e){return e&&"setState"in e?r.findDOMNode(e):null!=e?e:null}(e))},m=function(){};var v=function(e){return e&&("current"in e?e.current:e)};var y=e(Object.freeze(Object.defineProperty({__proto__:null,default:function(e,t,r){var o=void 0===r?{}:r,u=o.disabled,f=o.clickTrigger,l=void 0===f?"click":f,s=n.exports.useRef(!1),d=t||m,y=n.exports.useCallback((function(t){var r,n=v(e);s.current=!(n&&(r=t,!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey))&&function(e){return 0===e.button}(t)&&!a(n,t.target))}),[e]),b=i((function(e){s.current||d(e)})),j=i((function(e){27===e.keyCode&&d(e)}));n.exports.useEffect((function(){if(!u&&null!=e){var t=window.event,r=p(v(e)),n=c(r,l,y,!0),o=c(r,l,(function(e){e!==t?b(e):t=void 0})),a=c(r,"keyup",(function(e){e!==t?j(e):t=void 0})),i=[];return"ontouchstart"in r.documentElement&&(i=[].slice.call(r.body.children).map((function(e){return c(e,"mousemove",m)}))),function(){n(),o(),a(),i.forEach((function(e){return e()}))}}}),[e,u,l,y,b,j])}},Symbol.toStringTag,{value:"Module"})));export{d as a,y as r};