import{c as r}from"../color-string/color-string.e3a56614.js";import{c as t}from"../color-convert/color-convert.57bf91ba.js";var o=r.exports,n=t,e=[].slice,a=["keyword","gray","hex"],i={};Object.keys(n).forEach((function(r){i[e.call(n[r].labels).sort().join("")]=r}));var h={};function l(r,t){if(!(this instanceof l))return new l(r,t);if(t&&t in a&&(t=null),t&&!(t in n))throw new Error("Unknown model: "+t);var s,c;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof l)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var u=o.get(r);if(null===u)throw new Error("Unable to parse color from string: "+r);this.model=u.model,c=n[this.model].channels,this.color=u.value.slice(0,c),this.valpha="number"==typeof u.value[c]?u.value[c]:1}else if(r.length){this.model=t||"rgb",c=n[this.model].channels;var v=e.call(r,0,c);this.color=f(v,c),this.valpha="number"==typeof r[c]?r[c]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var p=Object.keys(r);"alpha"in r&&(p.splice(p.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var b=p.sort().join("");if(!(b in i))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=i[b];var m=n[this.model].labels,g=[];for(s=0;s<m.length;s++)g.push(r[m[s]]);this.color=f(g)}if(h[this.model])for(c=n[this.model].channels,s=0;s<c;s++){var d=h[this.model][s];d&&(this.color[s]=d(this.color[s]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function s(r,t,o){return(r=Array.isArray(r)?r:[r]).forEach((function(r){(h[r]||(h[r]=[]))[t]=o})),r=r[0],function(n){var e;return arguments.length?(o&&(n=o(n)),(e=this[r]()).color[t]=n,e):(e=this[r]().color[t],o&&(e=o(e)),e)}}function c(r){return function(t){return Math.max(0,Math.min(r,t))}}function u(r){return Array.isArray(r)?r:[r]}function f(r,t){for(var o=0;o<t;o++)"number"!=typeof r[o]&&(r[o]=0);return r}l.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var t=this.model in o.to?this:this.rgb(),n=1===(t=t.round("number"==typeof r?r:1)).valpha?t.color:t.color.concat(this.valpha);return o.to[t.model](n)},percentString:function(r){var t=this.rgb().round("number"==typeof r?r:1),n=1===t.valpha?t.color:t.color.concat(this.valpha);return o.to.rgb.percent(n)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},t=n[this.model].channels,o=n[this.model].labels,e=0;e<t;e++)r[o[e]]=this.color[e];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new l(this.color.map(function(r){return function(t){return function(r,t){return Number(r.toFixed(t))}(t,r)}}(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new l(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:s("rgb",0,c(255)),green:s("rgb",1,c(255)),blue:s("rgb",2,c(255)),hue:s(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:s("hsl",1,c(100)),lightness:s("hsl",2,c(100)),saturationv:s("hsv",1,c(100)),value:s("hsv",2,c(100)),chroma:s("hcg",1,c(100)),gray:s("hcg",2,c(100)),white:s("hwb",1,c(100)),wblack:s("hwb",2,c(100)),cyan:s("cmyk",0,c(100)),magenta:s("cmyk",1,c(100)),yellow:s("cmyk",2,c(100)),black:s("cmyk",3,c(100)),x:s("xyz",0,c(100)),y:s("xyz",1,c(100)),z:s("xyz",2,c(100)),l:s("lab",0,c(100)),a:s("lab",1),b:s("lab",2),keyword:function(r){return arguments.length?new l(r):n[this.model].keyword(this.color)},hex:function(r){return arguments.length?new l(r):o.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,t=[],o=0;o<r.length;o++){var n=r[o]/255;t[o]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var t=this.luminosity(),o=r.luminosity();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)},level:function(r){var t=this.contrast(r);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten:function(r){var t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken:function(r){var t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate:function(r){var t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate:function(r){var t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten:function(r){var t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken:function(r){var t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale:function(){var r=this.rgb().color,t=.3*r[0]+.59*r[1]+.11*r[2];return l.rgb(t,t,t)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var t=this.hsl(),o=t.color[0];return o=(o=(o+r)%360)<0?360+o:o,t.color[0]=o,t},mix:function(r,t){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var o=r.rgb(),n=this.rgb(),e=void 0===t?.5:t,a=2*e-1,i=o.alpha()-n.alpha(),h=((a*i==-1?a:(a+i)/(1+a*i))+1)/2,s=1-h;return l.rgb(h*o.red()+s*n.red(),h*o.green()+s*n.green(),h*o.blue()+s*n.blue(),o.alpha()*e+n.alpha()*(1-e))}},Object.keys(n).forEach((function(r){if(-1===a.indexOf(r)){var t=n[r].channels;l.prototype[r]=function(){if(this.model===r)return new l(this);if(arguments.length)return new l(arguments,r);var o="number"==typeof arguments[t]?t:this.valpha;return new l(u(n[this.model][r].raw(this.color)).concat(o),r)},l[r]=function(o){return"number"==typeof o&&(o=f(e.call(arguments),t)),new l(o,r)}}}));var v=l;export{v as c};