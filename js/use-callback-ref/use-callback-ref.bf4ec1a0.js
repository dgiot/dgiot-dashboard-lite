import{r}from"../react/react.892b78e7.js";function e(e,t){return a=t,n=function(r){return e.forEach((function(e){return function(r,e){return"function"==typeof r?r(e):r&&(r.current=e),r}(e,r)}))},(u=r.exports.useState((function(){return{value:a,callback:n,facade:{get current(){return u.value},set current(r){var e=u.value;e!==r&&(u.value=r,u.callback(r,e))}}}}))[0]).callback=n,u.facade;var a,n,u}export{e as u};