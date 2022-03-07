import{r}from"../react-dom/react-dom.fd66ae9b.js";import{s as e,g as n,h as t,R as o,o as a,j as u,t as i}from"../mobx/mobx.55f70ff4.js";import{r as c,R as f}from"../react/react.892b78e7.js";if(!c.exports.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!e)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var s=globalThis&&globalThis.__read||function(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,a=n.call(r),u=[];try{for(;(void 0===e||e-- >0)&&!(t=a.next()).done;)u.push(t.value)}catch(i){o={error:i}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return u};function l(){var r=s(c.exports.useState(0),2)[1];return c.exports.useCallback((function(){r((function(r){return r+1}))}),[])}var d={};var p,v=(p="observerBatching","function"==typeof Symbol?Symbol.for(p):"__$mobx-react "+p+"__");function y(r){r()}function b(r){r||(r=y),n({reactionScheduler:r}),("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:d)[v]=!0}var h=!1;function m(r){h=r}function w(){return h}function g(r){return t(r)}var x,O=1e4,j=new Set;function S(){void 0===x&&(x=setTimeout(_,1e4))}function _(){x=void 0;var r=Date.now();j.forEach((function(e){var n=e.current;n&&r>=n.cleanAt&&(n.reaction.dispose(),e.current=null,j.delete(e))})),j.size>0&&S()}var E=!1,T=[];var R={};function k(r){return"observer"+r}function D(r,e,n){if(void 0===e&&(e="observed"),void 0===n&&(n=R),w())return r();var t,a=function(r){return function(){E?T.push(r):r()}}((n.useForceUpdate||l)()),u=f.useRef(null);if(!u.current){var i=new o(k(e),(function(){c.mounted?a():(i.dispose(),u.current=null)})),c=function(r){return{cleanAt:Date.now()+O,reaction:r}}(i);u.current=c,t=u,j.add(t),S()}var s=u.current.reaction;return f.useDebugValue(s,g),f.useEffect((function(){var r;return r=u,j.delete(r),u.current?u.current.mounted=!0:(u.current={reaction:new o(k(e),(function(){a()})),cleanAt:1/0},a()),function(){u.current.reaction.dispose(),u.current=null}}),[]),function(r){E=!0,T=[];try{var e=r();E=!1;var n=T.length>0?T:void 0;return f.useLayoutEffect((function(){n&&n.forEach((function(r){return r()}))}),[n]),e}finally{E=!1}}((function(){var e,n;if(s.track((function(){try{e=r()}catch(t){n=t}})),n)throw n;return e}))}var N=globalThis&&globalThis.__assign||function(){return N=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},N.apply(this,arguments)};function P(r,e){if(w())return r;var n,t,o,a=N({forwardRef:!1},e),u=r.displayName||r.name,i=function(e,n){return D((function(){return r(e,n)}),u)};return i.displayName=u,n=a.forwardRef?c.exports.memo(c.exports.forwardRef(i)):c.exports.memo(i),t=r,o=n,Object.keys(t).forEach((function(r){A[r]||Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})),n.displayName=u,n}var A={$$typeof:!0,render:!0,compare:!0,type:!0};function $(r){var e=r.children,n=r.render,t=e||n;return"function"!=typeof t?null:D(t)}function q(r,e,n,t,o){var a="children"===e?"render":"children",u="function"==typeof r[e],i="function"==typeof r[a];return u&&i?new Error("MobX Observer: Do not use children and render in the same time in`"+n):u||i?null:new Error("Invalid prop `"+o+"` of type `"+typeof r[e]+"` supplied to `"+n+"`, expected `function`.")}$.propTypes={children:q,render:q},$.displayName="Observer";var U=globalThis&&globalThis.__read||function(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,a=n.call(r),u=[];try{for(;(void 0===e||e-- >0)&&!(t=a.next()).done;)u.push(t.value)}catch(i){o={error:i}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return u};function z(r,e){if(!e||void 0!==r){var n=U(f.useState((function(){return a(r,{},{deep:!1})})),1)[0];return u((function(){Object.assign(n,r)})),n}}function B(r){return z(r,!1)}function C(r,e){var n=z(e,!0);return f.useState((function(){var e=a(r(n));return function(r){if(!r||"object"!=typeof r)return!1;var e=Object.getPrototypeOf(r);return!e||e===Object.prototype}(e)&&u((function(){Object.keys(e).forEach((function(r){var n,t,o=e[r];"function"==typeof o&&(e[r]=(n=o,t=e,function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return i((function(){return n.apply(t,r)}))}))}))})),e}))[0]}b(r.exports.unstable_batchedUpdates);export{$ as O,b as a,C as b,D as c,m as d,w as i,P as o,B as u};
