import{g as e}from"../@antv/@antv.821fe49b.js";import{h as t,i as r,b as a,j as s}from"../@babel/@babel.2f68c20c.js";import{r as o}from"../react/react.892b78e7.js";import{a as n}from"../classnames/classnames.be78d973.js";import{c}from"../rc-util/rc-util.79689080.js";var i={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},l=function(e){var t=e.map((function(){return o.exports.useRef()})),r=o.exports.useRef(null);return o.exports.useEffect((function(){var e=Date.now(),a=!1;Object.keys(t).forEach((function(s){var o=t[s].current;if(o){a=!0;var n=o.style;n.transitionDuration=".3s, .3s, .3s, .06s",r.current&&e-r.current<100&&(n.transitionDuration="0s, 0s")}})),a&&(r.current=Date.now())})),[t]},p=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],f=function(e){var s=e.className,c=e.percent,i=e.prefixCls,f=e.strokeColor,u=e.strokeLinecap,d=e.strokeWidth,k=e.style,h=e.trailColor,y=e.trailWidth,m=e.transition,v=t(e,p);delete v.gapPosition;var x=Array.isArray(c)?c:[c],g=Array.isArray(f)?f:[f],b=l(x),C=r(b,1)[0],W=d/2,D=100-d/2,E="M ".concat("round"===u?W:0,",").concat(W,"\n         L ").concat("round"===u?D:100,",").concat(W),L="0 0 100 ".concat(d),N=0;return o.exports.createElement("svg",a({className:n("".concat(i,"-line"),s),viewBox:L,preserveAspectRatio:"none",style:k},v),o.exports.createElement("path",{className:"".concat(i,"-line-trail"),d:E,strokeLinecap:u,stroke:h,strokeWidth:y||d,fillOpacity:"0"}),x.map((function(e,t){var r=1;switch(u){case"round":r=1-d/100;break;case"square":r=1-d/2/100;break;default:r=1}var a={strokeDasharray:"".concat(e*r,"px, 100px"),strokeDashoffset:"-".concat(N,"px"),transition:m||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},s=g[t]||g[g.length-1];return N+=e,o.exports.createElement("path",{key:t,className:"".concat(i,"-line-path"),d:E,strokeLinecap:u,stroke:s,strokeWidth:d,fillOpacity:"0",ref:C[t],style:a})})))};f.defaultProps=i,f.displayName="Line";var u=0,d=c();var k=function(e){var t=o.exports.useState(),a=r(t,2),s=a[0],n=a[1];return o.exports.useEffect((function(){var e;n("rc_progress_".concat((d?(e=u,u+=1):e="TEST_OR_SSR",e)))}),[]),e||s},h=["id","prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function y(e){return+e.replace("%","")}function m(e){var t=null!=e?e:[];return Array.isArray(t)?t:[t]}function v(e,t,r,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5?arguments[5]:void 0,n=50-a/2,c=0,i=-n,l=0,p=-2*n;switch(o){case"left":c=-n,i=0,l=2*n,p=0;break;case"right":c=n,i=0,l=-2*n,p=0;break;case"bottom":i=n,p=2*n}var f="M 50,50 m ".concat(c,",").concat(i,"\n   a ").concat(n,",").concat(n," 0 1 1 ").concat(l,",").concat(-p,"\n   a ").concat(n,",").concat(n," 0 1 1 ").concat(-l,",").concat(p),u=2*Math.PI*n,d={stroke:"string"==typeof r?r:void 0,strokeDasharray:"".concat(t/100*(u-s),"px ").concat(u,"px"),strokeDashoffset:"-".concat(s/2+e/100*(u-s),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:f,pathStyle:d}}var x=function(e){var c,i=e.id,p=e.prefixCls,f=e.strokeWidth,u=e.trailWidth,d=e.gapDegree,x=e.gapPosition,g=e.trailColor,b=e.strokeLinecap,C=e.style,W=e.className,D=e.strokeColor,E=e.percent,L=t(e,h),N=k(i),j="".concat(N,"-gradient"),S=v(0,100,g,f,d,x),O=S.pathString,_=S.pathStyle,w=m(E),A=m(D),P=A.find((function(e){return e&&"object"===s(e)})),R=l(w),M=r(R,1)[0];return o.exports.createElement("svg",a({className:n("".concat(p,"-circle"),W),viewBox:"0 0 100 100",style:C,id:i},L),P&&o.exports.createElement("defs",null,o.exports.createElement("linearGradient",{id:j,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(P).sort((function(e,t){return y(e)-y(t)})).map((function(e,t){return o.exports.createElement("stop",{key:t,offset:e,stopColor:P[e]})})))),o.exports.createElement("path",{className:"".concat(p,"-circle-trail"),d:O,stroke:g,strokeLinecap:b,strokeWidth:u||f,fillOpacity:"0",style:_}),(c=0,w.map((function(e,t){var r=A[t]||A[A.length-1],a=r&&"object"===s(r)?"url(#".concat(j,")"):"",n=v(c,e,r,f,d,x);return c+=e,o.exports.createElement("path",{key:t,className:"".concat(p,"-circle-path"),d:n.pathString,stroke:a,strokeLinecap:b,strokeWidth:f,opacity:0===e?0:1,fillOpacity:"0",style:n.pathStyle,ref:M[t]})}))).reverse())};x.defaultProps=i,x.displayName="Circle";var g={Line:f,Circle:x},b=e(Object.freeze(Object.defineProperty({__proto__:null,Line:f,Circle:x,default:g},Symbol.toStringTag,{value:"Module"})));export{b as r};
