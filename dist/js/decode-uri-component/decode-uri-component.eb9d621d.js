var e=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function t(e,r){try{return decodeURIComponent(e.join(""))}catch(c){}if(1===e.length)return e;r=r||1;var n=e.slice(0,r),o=e.slice(r);return Array.prototype.concat.call([],t(n),t(o))}function n(r){try{return decodeURIComponent(r)}catch(c){for(var n=r.match(e),o=1;o<n.length;o++)n=(r=t(n,o).join("")).match(e);return r}}var o=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var o={"%FE%FF":"��","%FF%FE":"��"},c=r.exec(e);c;){try{o[c[0]]=decodeURIComponent(c[0])}catch(t){var a=n(c[0]);a!==c[0]&&(o[c[0]]=a)}c=r.exec(e)}o["%C2"]="�";for(var p=Object.keys(o),f=0;f<p.length;f++){var i=p[f];e=e.replace(new RegExp(i,"g"),o[i])}return e}(e)}};export{o as d};
