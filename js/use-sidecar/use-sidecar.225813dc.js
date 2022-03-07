import"../react/react.892b78e7.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(){return n=Object.assign||function(n){for(var r,t=1,e=arguments.length;t<e;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(n[u]=r[u]);return n},n.apply(this,arguments)};function r(n){return n}function t(n,t){void 0===t&&(t=r);var e=[],u=!1;return{read:function(){if(u)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return e.length?e[e.length-1]:n},useMedium:function(n){var r=t(n,u);return e.push(r),function(){e=e.filter((function(n){return n!==r}))}},assignSyncMedium:function(n){for(u=!0;e.length;){var r=e;e=[],r.forEach(n)}e={push:function(r){return n(r)},filter:function(){return e}}},assignMedium:function(n){u=!0;var r=[];if(e.length){var t=e;e=[],t.forEach(n),r=e}var i=function(){var t=r;r=[],t.forEach(n)},o=function(){return Promise.resolve().then(i)};o(),e={push:function(n){r.push(n),o()},filter:function(n){return r=r.filter(n),e}}}}}function e(n,e){return void 0===e&&(e=r),t(n,e)}function u(r){void 0===r&&(r={});var e=t(null);return e.options=n({async:!0,ssr:!1},r),e}export{u as a,e as c};
