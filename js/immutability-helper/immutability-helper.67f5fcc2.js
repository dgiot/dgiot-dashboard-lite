var t={exports:{}};!function(t,e){function n(t){return"object"!=typeof t||"toString"in t?t:Object.prototype.toString.call(t).slice(8,-1)}Object.defineProperty(e,"__esModule",{value:!0});var r="object"==typeof process&&!0;function o(t,e){if(!t){if(r)throw new Error("Invariant failed");throw new Error(e())}}e.invariant=o;var a=Object.prototype.hasOwnProperty,u=Array.prototype.splice,c=Object.prototype.toString;function i(t){return c.call(t).slice(8,-1)}var p=Object.assign||function(t,e){return s(e).forEach((function(n){a.call(e,n)&&(t[n]=e[n])})),t},s="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function f(t){return Array.isArray(t)?p(t.constructor(t.length),t):"Map"===i(t)?new Map(t):"Set"===i(t)?new Set(t):t&&"object"==typeof t?p(Object.create(Object.getPrototypeOf(t)),t):t}var d=function(){function t(){this.commands=p({},y),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var n=this,r="function"==typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(r)||o(!Array.isArray(r),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),o("object"==typeof r&&null!==r,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var u=t;return s(r).forEach((function(e){if(a.call(n.commands,e)){var o=t===u;u=n.commands[e](r[e],u,r,t),o&&n.isEquals(u,t)&&(u=t)}else{var c="Map"===i(t)?n.update(t.get(e),r[e]):n.update(t[e],r[e]),p="Map"===i(u)?u.get(e):u[e];n.isEquals(c,p)&&(void 0!==c||a.call(t,e))||(u===t&&(u=f(t)),"Map"===i(u)?u.set(e,c):u[e]=c)}})),u},t}();e.Context=d;var y={$push:function(t,e,n){return h(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return h(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,r,a){return function(t,e){o(Array.isArray(t),(function(){return"Expected $splice target to be an array; got "+n(t)})),b(e.$splice)}(e,r),t.forEach((function(t){b(t),e===a&&t.length&&(e=f(a)),u.apply(e,t)})),e},$set:function(t,e,n){return function(t){o(1===Object.keys(t).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),t},$toggle:function(t,e){g(t,"$toggle");var n=t.length?f(e):e;return t.forEach((function(t){n[t]=!e[t]})),n},$unset:function(t,e,n,r){return g(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===r&&(e=f(r)),delete e[t])})),e},$add:function(t,e,n,r){return v(e,"$add"),g(t,"$add"),"Map"===i(e)?t.forEach((function(t){var n=t[0],o=t[1];e===r&&e.get(n)!==o&&(e=f(r)),e.set(n,o)})):t.forEach((function(t){e!==r||e.has(t)||(e=f(r)),e.add(t)})),e},$remove:function(t,e,n,r){return v(e,"$remove"),g(t,"$remove"),t.forEach((function(t){e===r&&e.has(t)&&(e=f(r)),e.delete(t)})),e},$merge:function(t,e,r,a){var u,c;return u=e,o((c=t)&&"object"==typeof c,(function(){return"update(): $merge expects a spec of type 'object'; got "+n(c)})),o(u&&"object"==typeof u,(function(){return"update(): $merge expects a target of type 'object'; got "+n(u)})),s(t).forEach((function(n){t[n]!==e[n]&&(e===a&&(e=f(a)),e[n]=t[n])})),e},$apply:function(t,e){var r;return o("function"==typeof(r=t),(function(){return"update(): expected spec of $apply to be a function; got "+n(r)+"."})),t(e)}},l=new d;function h(t,e,r){o(Array.isArray(t),(function(){return"update(): expected target of "+n(r)+" to be an array; got "+n(t)+"."})),g(e[r],r)}function g(t,e){o(Array.isArray(t),(function(){return"update(): expected spec of "+n(e)+" to be an array; got "+n(t)+". Did you forget to wrap your parameter in an array?"}))}function b(t){o(Array.isArray(t),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+n(t)+". Did you forget to wrap your parameters in an array?"}))}function v(t,e){var r=i(t);o("Map"===r||"Set"===r,(function(){return"update(): "+n(e)+" expects a target of type Set or Map; got "+n(r)}))}e.isEquals=l.update.isEquals,e.extend=l.extend,e.default=l.update,e.default.default=t.exports=p(e.default,e)}(t,t.exports);export{t as i};