import{a as r}from"../@babel/@babel.531a568e.js";import{R as e}from"../react/react.fab41096.js";var t={error:null},o=function(o){function n(){for(var r,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return(r=o.call.apply(o,[this].concat(n))||this).state=t,r.updatedWithError=!1,r.resetErrorBoundary=function(){for(var e,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];null==r.props.onReset||(e=r.props).onReset.apply(e,o),r.reset()},r}r(n,o),n.getDerivedStateFromError=function(r){return{error:r}};var a=n.prototype;return a.reset=function(){this.updatedWithError=!1,this.setState(t)},a.componentDidCatch=function(r,e){var t,o;null==(t=(o=this.props).onError)||t.call(o,r,e)},a.componentDidUpdate=function(r){var e,t,o,n,a=this.state.error,s=this.props.resetKeys;null===a||this.updatedWithError?null!==a&&(void 0===(o=r.resetKeys)&&(o=[]),void 0===(n=s)&&(n=[]),o.length!==n.length||o.some((function(r,e){return!Object.is(r,n[e])})))&&(null==(e=(t=this.props).onResetKeysChange)||e.call(t,r.resetKeys,s),this.reset()):this.updatedWithError=!0},a.render=function(){var r=this.state.error,t=this.props,o=t.fallbackRender,n=t.FallbackComponent,a=t.fallback;if(null!==r){var s={error:r,resetErrorBoundary:this.resetErrorBoundary};if(e.isValidElement(a))return a;if("function"==typeof o)return o(s);if(n)return e.createElement(n,s);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},n}(e.Component);export{o as E};
