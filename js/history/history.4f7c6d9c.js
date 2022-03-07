import{b as n}from"../@babel/@babel.531a568e.js";import{r as t}from"../resolve-pathname/resolve-pathname.a42ed942.js";import{v as e}from"../value-equal/value-equal.35b3f58f.js";import{i as o}from"../tiny-invariant/tiny-invariant.6dcf2c5d.js";function i(n){return"/"===n.charAt(0)?n:"/"+n}function a(n){return"/"===n.charAt(0)?n.substr(1):n}function r(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function c(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function s(n){var t=n.pathname,e=n.search,o=n.hash,i=t||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(i+="#"===o.charAt(0)?o:"#"+o),i}function f(e,o,i,a){var r;"string"==typeof e?(r=function(n){var t=n||"/",e="",o="",i=t.indexOf("#");-1!==i&&(o=t.substr(i),t=t.substr(0,i));var a=t.indexOf("?");return-1!==a&&(e=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===e?"":e,hash:"#"===o?"":o}}(e),r.state=o):(void 0===(r=n({},e)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==o&&void 0===r.state&&(r.state=o));try{r.pathname=decodeURI(r.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return i&&(r.key=i),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=t(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}function u(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&e(n.state,t.state)}function h(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,o,i){if(null!=n){var a="function"==typeof n?n(t,e):n;"string"==typeof a?"function"==typeof o?o(a,i):i(!0):i(!1!==a)}else i(!0)},appendListener:function(n){var e=!0;function o(){e&&n.apply(void 0,arguments)}return t.push(o),function(){e=!1,t=t.filter((function(n){return n!==o}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];t.forEach((function(n){return n.apply(void 0,e)}))}}}var d=!("undefined"==typeof window||!window.document||!window.document.createElement);function l(n,t){t(window.confirm(n))}function v(){try{return window.history.state||{}}catch(n){return{}}}function p(t){void 0===t&&(t={}),d||o(!1);var e,a=window.history,u=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,p=!(-1===window.navigator.userAgent.indexOf("Trident")),m=t,w=m.forceRefresh,g=void 0!==w&&w,y=m.getUserConfirmation,P=void 0===y?l:y,x=m.keyLength,O=void 0===x?6:x,b=t.basename?c(i(t.basename)):"";function k(n){var t=n||{},e=t.key,o=t.state,i=window.location,a=i.pathname+i.search+i.hash;return b&&(a=r(a,b)),f(a,o,e)}function T(){return Math.random().toString(36).substr(2,O)}var A=h();function L(t){n(B,t),B.length=a.length,A.notifyListeners(B.location,B.action)}function E(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||U(k(n.state))}function S(){U(k(v()))}var C=!1;function U(n){if(C)C=!1,L();else{A.confirmTransitionTo(n,"POP",P,(function(t){t?L({action:"POP",location:n}):function(n){var t=B.location,e=R.indexOf(t.key);-1===e&&(e=0);var o=R.indexOf(n.key);-1===o&&(o=0);var i=e-o;i&&(C=!0,M(i))}(n)}))}}var I=k(v()),R=[I.key];function H(n){return b+s(n)}function M(n){a.go(n)}var j=0;function F(n){1===(j+=n)&&1===n?(window.addEventListener("popstate",E),p&&window.addEventListener("hashchange",S)):0===j&&(window.removeEventListener("popstate",E),p&&window.removeEventListener("hashchange",S))}var q=!1;var B={length:a.length,action:"POP",location:I,createHref:H,push:function(n,t){var e="PUSH",o=f(n,t,T(),B.location);A.confirmTransitionTo(o,e,P,(function(n){if(n){var t=H(o),i=o.key,r=o.state;if(u)if(a.pushState({key:i,state:r},null,t),g)window.location.href=t;else{var c=R.indexOf(B.location.key),s=R.slice(0,c+1);s.push(o.key),R=s,L({action:e,location:o})}else window.location.href=t}}))},replace:function(n,t){var e="REPLACE",o=f(n,t,T(),B.location);A.confirmTransitionTo(o,e,P,(function(n){if(n){var t=H(o),i=o.key,r=o.state;if(u)if(a.replaceState({key:i,state:r},null,t),g)window.location.replace(t);else{var c=R.indexOf(B.location.key);-1!==c&&(R[c]=o.key),L({action:e,location:o})}else window.location.replace(t)}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(n){void 0===n&&(n=!1);var t=A.setPrompt(n);return q||(F(1),q=!0),function(){return q&&(q=!1,F(-1)),t()}},listen:function(n){var t=A.appendListener(n);return F(1),function(){F(-1),t()}}};return B}var m={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+a(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:a,decodePath:i},slash:{encodePath:i,decodePath:i}};function w(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function g(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function y(n){window.location.replace(w(window.location.href)+"#"+n)}function P(t){void 0===t&&(t={}),d||o(!1);var e=window.history;window.navigator.userAgent.indexOf("Firefox");var a=t,u=a.getUserConfirmation,v=void 0===u?l:u,p=a.hashType,P=void 0===p?"slash":p,x=t.basename?c(i(t.basename)):"",O=m[P],b=O.encodePath,k=O.decodePath;function T(){var n=k(g());return x&&(n=r(n,x)),f(n)}var A=h();function L(t){n(B,t),B.length=e.length,A.notifyListeners(B.location,B.action)}var E=!1,S=null;function C(){var n,t,e=g(),o=b(e);if(e!==o)y(o);else{var i=T(),a=B.location;if(!E&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(S===s(i))return;S=null,function(n){if(E)E=!1,L();else{var t="POP";A.confirmTransitionTo(n,t,v,(function(e){e?L({action:t,location:n}):function(n){var t=B.location,e=H.lastIndexOf(s(t));-1===e&&(e=0);var o=H.lastIndexOf(s(n));-1===o&&(o=0);var i=e-o;i&&(E=!0,M(i))}(n)}))}}(i)}}var U=g(),I=b(U);U!==I&&y(I);var R=T(),H=[s(R)];function M(n){e.go(n)}var j=0;function F(n){1===(j+=n)&&1===n?window.addEventListener("hashchange",C):0===j&&window.removeEventListener("hashchange",C)}var q=!1;var B={length:e.length,action:"POP",location:R,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=w(window.location.href)),e+"#"+b(x+s(n))},push:function(n,t){var e="PUSH",o=f(n,void 0,void 0,B.location);A.confirmTransitionTo(o,e,v,(function(n){if(n){var t=s(o),i=b(x+t);if(g()!==i){S=t,function(n){window.location.hash=n}(i);var a=H.lastIndexOf(s(B.location)),r=H.slice(0,a+1);r.push(t),H=r,L({action:e,location:o})}else L()}}))},replace:function(n,t){var e="REPLACE",o=f(n,void 0,void 0,B.location);A.confirmTransitionTo(o,e,v,(function(n){if(n){var t=s(o),i=b(x+t);g()!==i&&(S=t,y(i));var a=H.indexOf(s(B.location));-1!==a&&(H[a]=t),L({action:e,location:o})}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(n){void 0===n&&(n=!1);var t=A.setPrompt(n);return q||(F(1),q=!0),function(){return q&&(q=!1,F(-1)),t()}},listen:function(n){var t=A.appendListener(n);return F(1),function(){F(-1),t()}}};return B}function x(n,t,e){return Math.min(Math.max(n,t),e)}function O(t){void 0===t&&(t={});var e=t,o=e.getUserConfirmation,i=e.initialEntries,a=void 0===i?["/"]:i,r=e.initialIndex,c=void 0===r?0:r,u=e.keyLength,d=void 0===u?6:u,l=h();function v(t){n(P,t),P.length=P.entries.length,l.notifyListeners(P.location,P.action)}function p(){return Math.random().toString(36).substr(2,d)}var m=x(c,0,a.length-1),w=a.map((function(n){return f(n,void 0,"string"==typeof n?p():n.key||p())})),g=s;function y(n){var t=x(P.index+n,0,P.entries.length-1),e=P.entries[t];l.confirmTransitionTo(e,"POP",o,(function(n){n?v({action:"POP",location:e,index:t}):v()}))}var P={length:w.length,action:"POP",location:w[m],index:m,entries:w,createHref:g,push:function(n,t){var e="PUSH",i=f(n,t,p(),P.location);l.confirmTransitionTo(i,e,o,(function(n){if(n){var t=P.index+1,o=P.entries.slice(0);o.length>t?o.splice(t,o.length-t,i):o.push(i),v({action:e,location:i,index:t,entries:o})}}))},replace:function(n,t){var e="REPLACE",i=f(n,t,p(),P.location);l.confirmTransitionTo(i,e,o,(function(n){n&&(P.entries[P.index]=i,v({action:e,location:i}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(n){var t=P.index+n;return t>=0&&t<P.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return P}export{f as a,s as b,O as c,p as d,P as e,u as l};
