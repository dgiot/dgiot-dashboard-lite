var r,t={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/r=t,function(){var t={}.hasOwnProperty;function e(){for(var r=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var s=typeof o;if("string"===s||"number"===s)r.push(o);else if(Array.isArray(o)){if(o.length){var n=e.apply(null,o);n&&r.push(n)}}else if("object"===s)if(o.toString===Object.prototype.toString)for(var i in o)t.call(o,i)&&o[i]&&r.push(i);else r.push(o.toString())}}return r.join(" ")}r.exports?(e.default=e,r.exports=e):window.classNames=e}();var e=t.exports;export{e as a,t as c};
