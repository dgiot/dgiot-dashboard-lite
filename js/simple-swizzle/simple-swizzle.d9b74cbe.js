var r={exports:{}},t=function(r){return!(!r||"string"==typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))},n=Array.prototype.concat,e=Array.prototype.slice,o=r.exports=function(r){for(var o=[],c=0,a=r.length;c<a;c++){var i=r[c];t(i)?o=n.call(o,e.call(i)):o.push(i)}return o};o.wrap=function(r){return function(){return r(o(arguments))}};export{r as s};