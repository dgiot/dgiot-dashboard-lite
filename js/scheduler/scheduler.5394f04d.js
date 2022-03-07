var n={exports:{}},e={};
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(n){var e,t,r,a,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,i=null,o=function(){if(null!==u)try{var e=n.unstable_now();u(!0,e),u=null}catch(t){throw setTimeout(o,0),t}},s=Date.now();n.unstable_now=function(){return Date.now()-s},e=function(n){null!==u?setTimeout(e,0,n):(u=n,setTimeout(o,0))},t=function(n,e){i=setTimeout(n,e)},r=function(){clearTimeout(i)},a=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var c=window.performance,f=window.Date,b=window.setTimeout,v=window.clearTimeout;if("undefined"!=typeof console){window.cancelAnimationFrame;window.requestAnimationFrame}if("object"==typeof c&&"function"==typeof c.now)n.unstable_now=function(){return c.now()};else{var w=f.now();n.unstable_now=function(){return f.now()-w}}var d=!1,m=null,p=-1,y=5,_=0;a=function(){return n.unstable_now()>=_},l=function(){},n.unstable_forceFrameRate=function(n){0>n||125<n||(y=0<n?Math.floor(1e3/n):5)};var x=new MessageChannel,T=x.port2;x.port1.onmessage=function(){if(null!==m){var e=n.unstable_now();_=e+y;try{m(!0,e)?T.postMessage(null):(d=!1,m=null)}catch(t){throw T.postMessage(null),t}}else d=!1},e=function(n){m=n,d||(d=!0,T.postMessage(null))},t=function(e,t){p=b((function(){e(n.unstable_now())}),t)},r=function(){v(p),p=-1}}function h(n,e){var t=n.length;n.push(e);n:for(;;){var r=t-1>>>1,a=n[r];if(!(void 0!==a&&0<P(a,e)))break n;n[r]=e,n[t]=a,t=r}}function k(n){return void 0===(n=n[0])?null:n}function g(n){var e=n[0];if(void 0!==e){var t=n.pop();if(t!==e){n[0]=t;n:for(var r=0,a=n.length;r<a;){var l=2*(r+1)-1,u=n[l],i=l+1,o=n[i];if(void 0!==u&&0>P(u,t))void 0!==o&&0>P(o,u)?(n[r]=o,n[i]=t,r=i):(n[r]=u,n[l]=t,r=l);else{if(!(void 0!==o&&0>P(o,t)))break n;n[r]=o,n[i]=t,r=i}}}return e}return null}function P(n,e){var t=n.sortIndex-e.sortIndex;return 0!==t?t:n.id-e.id}var I=[],C=[],M=1,F=null,L=3,D=!1,j=!1,q=!1;function A(n){for(var e=k(C);null!==e;){if(null===e.callback)g(C);else{if(!(e.startTime<=n))break;g(C),e.sortIndex=e.expirationTime,h(I,e)}e=k(C)}}function E(n){if(q=!1,A(n),!j)if(null!==k(I))j=!0,e(N);else{var r=k(C);null!==r&&t(E,r.startTime-n)}}function N(e,l){j=!1,q&&(q=!1,r()),D=!0;var u=L;try{for(A(l),F=k(I);null!==F&&(!(F.expirationTime>l)||e&&!a());){var i=F.callback;if(null!==i){F.callback=null,L=F.priorityLevel;var o=i(F.expirationTime<=l);l=n.unstable_now(),"function"==typeof o?F.callback=o:F===k(I)&&g(I),A(l)}else g(I);F=k(I)}if(null!==F)var s=!0;else{var c=k(C);null!==c&&t(E,c.startTime-l),s=!1}return s}finally{F=null,L=u,D=!1}}function R(n){switch(n){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var B=l;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(n){n.callback=null},n.unstable_continueExecution=function(){j||D||(j=!0,e(N))},n.unstable_getCurrentPriorityLevel=function(){return L},n.unstable_getFirstCallbackNode=function(){return k(I)},n.unstable_next=function(n){switch(L){case 1:case 2:case 3:var e=3;break;default:e=L}var t=L;L=e;try{return n()}finally{L=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=B,n.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=L;L=n;try{return e()}finally{L=t}},n.unstable_scheduleCallback=function(a,l,u){var i=n.unstable_now();if("object"==typeof u&&null!==u){var o=u.delay;o="number"==typeof o&&0<o?i+o:i,u="number"==typeof u.timeout?u.timeout:R(a)}else u=R(a),o=i;return a={id:M++,callback:l,priorityLevel:a,startTime:o,expirationTime:u=o+u,sortIndex:-1},o>i?(a.sortIndex=o,h(C,a),null===k(I)&&a===k(C)&&(q?r():q=!0,t(E,o-i))):(a.sortIndex=u,h(I,a),j||D||(j=!0,e(N))),a},n.unstable_shouldYield=function(){var e=n.unstable_now();A(e);var t=k(I);return t!==F&&null!==F&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<F.expirationTime||a()},n.unstable_wrapCallback=function(n){var e=L;return function(){var t=L;L=e;try{return n.apply(this,arguments)}finally{L=t}}}}(e),n.exports=e;export{n as s};