import{g as e}from"../@antv/@antv.821fe49b.js";import{d as r,b as t,a as n}from"../@babel/@babel.2f68c20c.js";import{r as o,R as a}from"../react/react.892b78e7.js";import{p as i}from"../react-lifecycles-compat/react-lifecycles-compat.ffb70398.js";import{b as c}from"../invariant/invariant.c849b228.js";var u=function(){};function f(e,r){return void 0!==e[r]}function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function p(e,r,t){var n=o.exports.useRef(void 0!==e),a=o.exports.useState(r),i=a[0],c=a[1],u=void 0!==e,f=n.current;return n.current=u,!u&&f&&i!==r&&c(r),[u?e:i,o.exports.useCallback((function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(n)),c(e)}),[t])]}var v=Object.freeze(Object.defineProperty({__proto__:null,useUncontrolled:function(e,n){return Object.keys(n).reduce((function(o,a){var i,c=o,u=c[s(a)],f=c[a],v=r(c,[s(a),a].map(l)),m=n[a],d=p(f,u,e[m]),y=d[0],b=d[1];return t({},v,((i={})[a]=y,i[m]=b,i))}),e)},useUncontrolledProp:p,uncontrollable:function e(o,l,p){void 0===p&&(p=[]);var v,m=o.displayName||o.name||"Component",d=!!(v=o)&&("function"!=typeof v||v.prototype&&v.prototype.isReactComponent),y=Object.keys(l),b=y.map(s);!d&&p.length&&c(!1);var h=function(e){function i(){for(var r,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];(r=e.call.apply(e,[this].concat(o))||this).handlers=Object.create(null),y.forEach((function(e){var n=l[e];r.handlers[n]=function(o){if(r.props[n]){var a;r._notifying=!0;for(var i=arguments.length,c=new Array(i>1?i-1:0),u=1;u<i;u++)c[u-1]=arguments[u];(a=r.props)[n].apply(a,[o].concat(c)),r._notifying=!1}r.unmounted||r.setState((function(r){var n,a=r.values;return{values:t(Object.create(null),a,(n={},n[e]=o,n))}}))}})),p.length&&(r.attachRef=function(e){r.inner=e});var i=Object.create(null);return y.forEach((function(e){i[e]=r.props[s(e)]})),r.state={values:i,prevProps:{}},r}n(i,e);var c=i.prototype;return c.shouldComponentUpdate=function(){return!this._notifying},i.getDerivedStateFromProps=function(e,r){var n=r.values,o=r.prevProps,a={values:t(Object.create(null),n),prevProps:{}};return y.forEach((function(r){a.prevProps[r]=e[r],!f(e,r)&&f(o,r)&&(a.values[r]=e[s(r)])})),a},c.componentWillUnmount=function(){this.unmounted=!0},c.render=function(){var e=this,n=this.props,i=n.innerRef,c=r(n,["innerRef"]);b.forEach((function(e){delete c[e]}));var u={};return y.forEach((function(r){var t=e.props[r];u[r]=void 0!==t?t:e.state.values[r]})),a.createElement(o,t({},c,u,this.handlers,{ref:i||this.attachRef}))},i}(a.Component);i(h),h.displayName="Uncontrolled("+m+")",h.propTypes=t({innerRef:function(){}},function(e,r){var t={};return Object.keys(e).forEach((function(e){t[s(e)]=u})),t}(l)),p.forEach((function(e){h.prototype[e]=function(){var r;return(r=this.inner)[e].apply(r,arguments)}}));var j=h;return a.forwardRef&&((j=a.forwardRef((function(e,r){return a.createElement(h,t({},e,{innerRef:r,__source:{fileName:"/Users/jquense/src/uncontrollable/src/uncontrollable.js",lineNumber:128},__self:this}))}))).propTypes=h.propTypes),j.ControlledComponent=o,j.deferControlTo=function(r,n,o){return void 0===n&&(n={}),e(r,t({},l,n),o)},j}},Symbol.toStringTag,{value:"Module"})),m=e(v);export{m as r};