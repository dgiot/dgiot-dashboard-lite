/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 13:54:19
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors-dgiot-app-dgiot-0de50db7"],{"450b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WrapperRenderer=void 0;var n=a("6b14"),r=(0,n.__importDefault)(a("9cd5")),i=a("daa2"),o=a("79fb"),s=(0,n.__importDefault)(a("db63")),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t.prototype.renderBody=function(){var e=this.props,t=e.children,a=e.body,n=e.render;return t?"function"===typeof t?t(this.props):t:a?n("body",a):null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.size,n=e.classnames,i=e.style,l=e.data,d=e.wrap;if(!1===d)return this.renderBody();var p="string"===typeof i?(0,o.resolveVariable)(i,l)||{}:(0,s.default)(i,(function(e){return(0,o.resolveVariable)(e,l)||e}));return r.default.createElement("div",{className:n("Wrapper",a&&"none"!==a?"Wrapper--"+a:"",t),style:p},this.renderBody())},t.propsList=["body","className","children","size"],t.defaultProps={className:"",size:"md"},t}(r.default.Component);t.default=l;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t=(0,n.__decorate)([(0,i.Renderer)({type:"wrapper"})],t),t}(l);t.WrapperRenderer=d},"985b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WizardRenderer=void 0;var n=a("6b14"),r=(0,n.__importDefault)(a("9cd5")),i=a("2a8c"),o=a("daa2"),s=a("bb21"),l=a("c54a"),d=a("55c0"),p=a("a853"),c=a("d0ac"),u=a("e06b"),f=a("4f3d"),m=a("ca1e"),h=a("8383"),y=a("79fb"),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.affixDom=r.default.createRef(),t.footerDom=r.default.createRef(),t.initalValues={},t.state={currentStep:-1,completeStep:-1},t}var a,o,s,v,_;return(0,n.__extends)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,a=t.initApi,n=t.initFetch,r=t.initAsyncApi,i=t.initFinishedField,o=t.store,s=t.messages,l=s.fetchSuccess,d=s.fetchFailed,u=t.onInit;(0,c.isEffectiveApi)(a,o.data,n)?o.fetchInitData(a,o.data,{successMessage:l,errorMessage:d,onSuccess:function(){if((0,c.isEffectiveApi)(r,o.data)&&!o.data[i||"finished"])return(0,p.until)((function(){return o.checkRemote(r,o.data)}),(function(e){return e&&e[i||"finished"]}),(function(t){return e.asyncCancel=t}))}}).then((function(t){u&&u(o.data);var a={currentStep:"string"===typeof e.props.startStep?parseInt((0,y.tokenize)(e.props.startStep,e.props.data)):1};return t&&t.data&&("number"===typeof t.data.step||"string"===typeof t.data.step&&/^\d+$/.test(t.data.step))&&(a.currentStep=parseInt(t.data.step,10)),e.setState(a,(function(){t&&t.data&&(t.data.submiting||t.data.submited)&&e.checkSubmit()})),t})):this.setState({currentStep:"string"===typeof this.props.startStep?parseInt((0,y.tokenize)(this.props.startStep,this.props.data)):1},(function(){return u&&u(o.data)}));var f=(0,m.findDOMNode)(this);if(f instanceof Element){var v=f?(0,p.getScrollParent)(f):null;v&&v!==document.body||(v=window),this.parentNode=v,v.addEventListener("scroll",this.affixDetect),this.unSensor=(0,h.resizeSensor)(f,this.affixDetect),this.affixDetect()}},t.prototype.componentDidUpdate=function(e){var t=this.props,a=t.store,n=t.fetchSuccess,r=t.fetchFailed;(0,c.isApiOutdated)(e.initApi,t.initApi,e.data,t.data)&&a.fetchData(t.initApi,a.data,{successMessage:n,errorMessage:r})},t.prototype.componentWillUnmount=function(){this.asyncCancel&&this.asyncCancel();var e=this.parentNode;e&&e.removeEventListener("scroll",this.affixDetect),this.unSensor&&this.unSensor()},t.prototype.affixDetect=function(){if(this.props.affixFooter&&this.affixDom.current&&this.footerDom.current){var e=this.affixDom.current,t=this.footerDom.current,a=!1;if(t.offsetWidth&&(e.style.cssText="width: "+t.offsetWidth+"px;"),"always"===this.props.affixFooter)a=!0,t.classList.add("invisible2");else{var n=t.getBoundingClientRect(),r=window.innerHeight;a=n.top+n.height/2>r}a?e.classList.add("in"):e.classList.remove("in")}},t.prototype.gotoStep=function(e){var t=this.props.steps||[];e=Math.max(Math.min(t.length,e),1),e!=this.state.currentStep&&this.setState({currentStep:e,completeStep:Math.max(this.state.completeStep,e-1)})},t.prototype.formRef=function(e){if(e){while(e&&e.getWrappedInstance)e=e.getWrappedInstance();this.form=e}else this.form=void 0},t.prototype.submitToTarget=function(e,t){throw new Error("Please implements this!")},t.prototype.reloadTarget=function(e,t){throw new Error("Please implements this!")},t.prototype.reload=function(e,t,a){var n=this;if(t)return this.receive(t);var r=this.props,i=r.initApi,o=r.initAsyncApi,s=r.initFinishedField,l=r.store,d=r.messages,u=d.fetchSuccess,f=d.fetchFailed;(0,c.isEffectiveApi)(i,l.data)&&1===this.state.currentStep&&l.fetchInitData(i,l.data,{successMessage:u,errorMessage:f,onSuccess:function(){if((0,c.isEffectiveApi)(o,l.data)&&!l.data[s||"finished"])return(0,p.until)((function(){return l.checkRemote(o,l.data)}),(function(e){return e&&e[s||"finished"]}),(function(e){return n.asyncCancel=e}))}}).then((function(e){var t={currentStep:1};return e&&e.data&&("number"===typeof e.data.step||"string"===typeof e.data.step&&/^\d+$/.test(e.data.step))&&(t.currentStep=parseInt(e.data.step,10)),n.setState(t,(function(){e&&e.data&&(e.data.submiting||e.data.submited)&&n.checkSubmit()})),e}))},t.prototype.receive=function(e){var t=this.props.store;t.updateData(e),this.reload()},t.prototype.domRef=function(e){this.dom=e},t.prototype.getPopOverContainer=function(){return this.dom},t.prototype.checkSubmit=function(){var e,t=this,a=this.props,n=a.store,r=a.steps,i=a.asyncApi,o=a.finishedField,s=a.env,l=r[this.state.currentStep-1],d=l&&l.asyncApi||this.state.currentStep===r.length&&i;l&&(0,c.isEffectiveApi)(d,n.data)&&(n.markSaving(!0),n.updateData((e={},e[o||"finished"]=!1,e)),(0,p.until)((function(){return n.checkRemote(d,n.data)}),(function(e){return e&&e[o||"finished"]}),(function(e){return t.asyncCancel=e})).then((function(){n.markSaving(!1),t.gotoStep(t.state.currentStep+1)})).catch((function(e){s.notify("error",e.message),n.markSaving(!1)})))},t.prototype.handleAction=function(e,t,a,r,i){var o=this;void 0===r&&(r=!1);var s=this.props,l=s.onAction,c=s.store,u=s.env;if("next"===t.actionType||"submit"===t.type)this.form.doAction((0,n.__assign)((0,n.__assign)({},t),{actionType:"submit"}),a);else if("prev"===t.actionType)this.gotoStep(this.state.currentStep-1);else if("reset"===t.type)this.form.reset();else if("dialog"===t.actionType)c.setCurrentAction(t),c.openDialog(a);else{if("ajax"===t.actionType)return t.api?c.saveRemote(t.api,a,{successMessage:t.messages&&t.messages.success,errorMessage:t.messages&&t.messages.failed}).then((function(){return(0,n.__awaiter)(o,void 0,void 0,(function(){var e;return(0,n.__generator)(this,(function(a){switch(a.label){case 0:return this.form&&this.form.isValidated()&&this.form.validate(!0),t.feedback&&(0,p.isVisible)(t.feedback,c.data)?[4,this.openFeedback(t.feedback,c.data)]:[3,2];case 1:a.sent(),a.label=2;case 2:return e=t.redirect&&(0,d.filter)(t.redirect,c.data),e&&u.jumpTo(e,t),t.reload&&this.reloadTarget(t.reload,c.data),[2]}}))}))})).catch((function(){})):u.alert("当 actionType 为 ajax 时，请设置 api 属性");"reload"===t.actionType?t.target&&this.reloadTarget(t.target,a):l&&l(e,t,a,r,i||this.context)}},t.prototype.handleQuery=function(e){var t,a;this.props.initApi?this.receive(e):null===(a=(t=this.props).onQuery)||void 0===a||a.call(t,e)},t.prototype.openFeedback=function(e,t){var a=this;return new Promise((function(n){var r=a.props.store;r.setCurrentAction({type:"button",actionType:"dialog",dialog:e}),r.openDialog(t,void 0,(function(e){n(e)}))}))},t.prototype.handleChange=function(e){var t=this.props.store;t.updateData(e)},t.prototype.handleInit=function(e){var t=this.state.currentStep;this.initalValues[t]=this.initalValues[t]||e;var a=this.props.store;a.updateData(e)},t.prototype.handleReset=function(e){var t=this.props.store,a=this.initalValues[this.state.currentStep],n={};Object.keys(e).forEach((function(e){n[e]=a.hasOwnProperty(e)?a[e]:void 0})),t.updateData(n)},t.prototype.handleSubmit=function(e,t){var a,r,i=this,o=this.props,s=o.store,l=o.steps,u=o.api,f=o.asyncApi,m=o.finishedField,h=o.target,y=o.redirect,v=o.reload,g=o.env,_=o.onFinished,b=l[this.state.currentStep-1];if(s.updateData(e),this.state.currentStep<l.length){var x=t.asyncApi||b.asyncApi;(0,c.isEffectiveApi)(x,s.data)&&s.updateData((a={},a[m||"finished"]=!1,a)),(0,c.isEffectiveApi)(t.api||b.api,s.data)?s.saveRemote(t.api||b.api,s.data,{onSuccess:function(){if((0,c.isEffectiveApi)(x,s.data)&&!s.data[m||"finished"])return(0,p.until)((function(){return s.checkRemote(x,s.data)}),(function(e){return e&&e[m||"finished"]}),(function(e){return i.asyncCancel=e}))},onFailed:function(e){422===e.status&&e.errors&&i.form&&i.form.props.store.handleRemoteError(e.errors)}}).then((function(e){return i.gotoStep(e&&"number"===typeof e.step?e.step:i.state.currentStep+1)})).catch((function(){})):this.gotoStep(this.state.currentStep+1)}else if(h)this.submitToTarget(h,s.data),this.setState({completeStep:l.length});else if(t.api||b.api||u){var S=t.asyncApi||b.asyncApi||f;(0,c.isEffectiveApi)(S,s.data)&&s.updateData((r={},r[m||"finished"]=!1,r));var E=this.form?this.form.props.store:s;s.markSaving(!0),E.saveRemote(t.api||b.api||u,s.data,{onSuccess:function(){if((0,c.isEffectiveApi)(S,s.data)&&!s.data[m||"finished"])return(0,p.until)((function(){return s.checkRemote(S,s.data)}),(function(e){return e&&e[m||"finished"]}),(function(e){return i.asyncCancel=e}))}}).then((function(e){if(i.setState({completeStep:l.length}),s.updateData((0,n.__assign)((0,n.__assign)({},s.data),e)),s.markSaving(!1),e&&"number"===typeof e.step)i.gotoStep(e.step);else if(_&&!1===_(e,t))return e;var a=(t.redirect||b.redirect||y)&&(0,d.filter)(t.redirect||b.redirect||y,s.data);return a?g.jumpTo(a,t):(t.reload||b.reload||v)&&i.reloadTarget(t.reload||b.reload||v,s.data),e})).catch((function(e){s.markSaving(!1),console.error(e)}))}else _&&_(s.data,t),this.setState({completeStep:l.length});return!1},t.prototype.handleDialogConfirm=function(e,t,a){var n=this.props.store;t.mergeData&&1===e.length&&e[0]&&"form"===a[0].props.type&&n.updateData(e[0]),n.closeDialog()},t.prototype.handleDialogClose=function(){var e=this.props.store;e.closeDialog()},t.prototype.renderSteps=function(){var e=this,t=this.props,a=t.steps,n=t.store,i=(t.mode,t.classPrefix),o=t.classnames,s=this.state,l=s.currentStep,d=s.completeStep;return r.default.createElement("div",{className:i+"Wizard-steps",id:"form-wizard"},Array.isArray(a)&&a.length?r.default.createElement("ul",null,a.map((function(t,a){var i=g(t,a,l,n.data),s=i||a<d,p=l===a+1;return r.default.createElement("li",{key:a,className:o({"is-complete":s,"is-active":p}),onClick:function(){return i?e.gotoStep(a+1):null}},r.default.createElement("span",{className:o("Badge",{"is-complete":s,"is-active":p||i&&l!=a+1})},s&&!p?r.default.createElement(f.Icon,{icon:"check",className:"icon"}):a+1),t.title||t.label||"第 "+(a+1)+" 步")}))):null)},t.prototype.renderActions=function(){var e=this,t=this.props,a=t.steps,n=t.store,i=t.readOnly,o=t.disabled,s=t.actionClassName,l=t.actionPrevLabel,d=t.actionNextLabel,p=t.actionNextSaveLabel,c=t.actionFinishLabel,u=t.render,f=t.translate;if(!Array.isArray(a))return null;var m=this.state.currentStep,h=a[m],y=a[m-2],v=n.loading,_=a[m-1];if(!_)return null;var b=!!y&&g(y,m-2,m,n.data);return _.actions&&Array.isArray(_.actions)?_.actions.length?r.default.createElement(r.default.Fragment,null,_.actions.map((function(t,a){return u("action/"+a,t,{key:a,onAction:e.handleAction,disabled:t.disabled||v||o||"prev"===t.actionType&&!b||"next"===t.actionType&&i&&(!!_.api||!h)})}))):null:r.default.createElement(r.default.Fragment,null,u("prev-btn",{type:"button",label:f(l),actionType:"prev",className:s},{disabled:v||!b||o,onAction:this.handleAction}),u("next-btn",{type:"button",label:h?_.api?f(p):f(d):f(c),actionType:"next",primary:!h||!!_.api,className:s},{disabled:v||o||i&&(!!_.api||!h),onAction:this.handleAction}))},t.prototype.renderFooter=function(){var e=this.renderActions();if(!e)return e;var t=this.props,a=t.classnames,n=t.affixFooter;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{role:"wizard-footer",ref:this.footerDom,className:a("Panel-footer Wizard-footer")},e),n?r.default.createElement("div",{ref:this.affixDom,className:a("Panel-fixedBottom Wizard-footer")},r.default.createElement("div",{className:a("Panel-footer")},e)):null)},t.prototype.renderWizard=function(){var e=this.props,t=e.className,a=e.steps,i=e.render,o=e.store,s=e.classPrefix,l=e.classnames,d=e.popOverContainer,p=e.mode,c=e.translate,f=this.state.currentStep,m=Array.isArray(a)?a[f-1]:null;return r.default.createElement("div",{ref:this.domRef,className:l(s+"Panel "+s+"Panel--default "+s+"Wizard "+s+"Wizard--"+p,t)},r.default.createElement("div",{className:s+"Wizard-step"},this.renderSteps(),r.default.createElement("div",{role:"wizard-body",className:s+"Wizard-stepContent clearfix"},m?i("body",(0,n.__assign)((0,n.__assign)({},m),{type:"form",wrapWithPanel:!1,api:null}),{key:this.state.currentStep,ref:this.formRef,onInit:this.handleInit,onReset:this.handleReset,onSubmit:this.handleSubmit,onAction:this.handleAction,onQuery:this.handleQuery,disabled:o.loading,popOverContainer:d||this.getPopOverContainer,onChange:this.handleChange,formStore:void 0}):-1===f?c("loading"):r.default.createElement("p",{className:"text-danger"},c("Wizard.configError"))),this.renderFooter()),i("dialog",(0,n.__assign)((0,n.__assign)({},o.action&&o.action.dialog),{type:"dialog"}),{key:"dialog",data:o.dialogData,onConfirm:this.handleDialogConfirm,onClose:this.handleDialogClose,show:o.dialogOpen}),r.default.createElement(u.Spinner,{size:"lg",overlay:!0,key:"info",show:o.loading}))},t.prototype.render=function(){return this.renderWizard()},t.defaultProps={mode:"horizontal",readOnly:!1,messages:{},actionClassName:"",actionPrevLabel:"Wizard.prev",actionNextLabel:"Wizard.next",actionNextSaveLabel:"Wizard.saveAndNext",actionFinishLabel:"Wizard.finish",startStep:"1"},t.propsList=["steps","mode","messages","actionClassName","actionPrevLabel","actionNextLabel","actionNextSaveLabel","actionFinishLabel","onFinished","affixFooter","startStep"],(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"affixDetect",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"formRef",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"domRef",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"getPopOverContainer",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object,"function"===typeof(a="undefined"!==typeof l.Action&&l.Action)?a:Object,Object,Boolean,"function"===typeof(o="undefined"!==typeof i.IScopedContext&&i.IScopedContext)?o:Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleAction",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleQuery",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleChange",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleInit",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleReset",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Object,"function"===typeof(s="undefined"!==typeof l.Action&&l.Action)?s:Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleSubmit",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Array,"function"===typeof(v="undefined"!==typeof l.Action&&l.Action)?v:Object,"function"===typeof(_="undefined"!==typeof Array&&Array)?_:Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleDialogConfirm",null),(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleDialogClose",null),t}(r.default.Component);function g(e,t,a,n){var r=!1;return r=e&&e.hasOwnProperty("jumpable")?e.jumpable:e&&e.jumpableOn?(0,d.evalExpression)(e.jumpableOn,(0,p.createObject)(n,{currentStep:a})):t+1<a,r}t.default=v;var _=function(e){function t(t,a){var n=e.call(this,t)||this,r=a;return r.registerComponent(n),n}var a,r,d;return(0,n.__extends)(t,e),t.prototype.componentWillUnmount=function(){var t=this.context;t.unRegisterComponent(this),e.prototype.componentWillUnmount.call(this)},t.prototype.doAction=function(e,t,a){return void 0===a&&(a=!1),this.handleAction(void 0,e,t)},t.prototype.submitToTarget=function(e,t){var a=this.context;a.send(e,t)},t.prototype.reloadTarget=function(e,t){var a=this.context;a.reload(e,t)},t.prototype.handleDialogConfirm=function(t,a,n){e.prototype.handleDialogConfirm.call(this,t,a,n);var r=this.props.store,i=this.context;a.reload?i.reload(a.reload,r.data):r.action&&r.action.reload&&i.reload(r.action.reload,r.data)},t.contextType=i.ScopedContext,(0,n.__decorate)([p.autobind,(0,n.__metadata)("design:type",Function),(0,n.__metadata)("design:paramtypes",[Array,"function"===typeof(a="undefined"!==typeof l.Action&&l.Action)?a:Object,"function"===typeof(r="undefined"!==typeof Array&&Array)?r:Object]),(0,n.__metadata)("design:returntype",void 0)],t.prototype,"handleDialogConfirm",null),t=(0,n.__decorate)([(0,o.Renderer)({type:"wizard",storeType:s.ServiceStore.name,isolateScope:!0}),(0,n.__metadata)("design:paramtypes",[Object,"function"===typeof(d="undefined"!==typeof i.IScopedContext&&i.IScopedContext)?d:Object])],t),t}(v);t.WizardRenderer=_},"9f6f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VBoxRenderer=void 0;var n=a("6b14"),r=(0,n.__importDefault)(a("9cd5")),i=a("daa2"),o=(0,n.__importDefault)(a("11bc")),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t.prototype.renderChild=function(e,t){var a=this.props.render;return a(e,t)},t.prototype.renderCell=function(e,t){var a=this.props.classPrefix;return r.default.createElement("div",{className:(0,o.default)(a+"Vbox-cell",e.cellClassName)},this.renderChild("row/"+t,e))},t.prototype.render=function(){var e=this,t=this.props,a=t.className,n=t.rows,i=t.classPrefix;return r.default.createElement("div",{className:(0,o.default)(i+"Vbox",a)},Array.isArray(n)?n.map((function(t,a){return r.default.createElement("div",{className:(0,o.default)("row-row",t.rowClassName),key:a},e.renderCell(t,a))})):null)},t.propsList=["rows"],t.defaultProps={},t}(r.default.Component);t.default=s;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t=(0,n.__decorate)([(0,i.Renderer)({type:"vbox"})],t),t}(s);t.VBoxRenderer=l},b3c1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VideoRenderer=t.HlsSource=t.FlvSource=void 0;var n=a("6b14"),r=(0,n.__importDefault)(a("9cd5")),i=a("9c5e"),o=a("a853"),s=a("daa2"),l=a("79fb"),d=a("55c0");a("340c");var p=function(e){return e.indexOf(":")?e.split(":").reverse().reduce((function(e,t,a){return e+(parseInt(t,10)||0)*Math.pow(60,a)}),0):parseInt(e,10)},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loaded=!1,t}return(0,n.__extends)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.src,a=e.video,n=e.config,r=e.manager,i=e.isLive,o=e.autoPlay,s=e.actions,l=e.setError;this.initFlv({video:a,manager:r,src:t,isLive:i,config:n,actions:s,setError:l,autoPlay:o})},t.prototype.componentDidUpdate=function(e){var t,a,n=this.props,r=n.autoPlay,i=n.actions,o=n.src,s=n.setError,l=n.isLive,d=n.config,p=n.video,c=n.manager;o!==e.src&&(s(""),null===(t=this.mpegtsPlayer)||void 0===t||t.destroy(),null===(a=this.unsubscribe)||void 0===a||a.call(this),this.loaded=!1,this.initFlv({video:p,manager:c,src:o,isLive:l,config:d,actions:i,setError:s,autoPlay:r}))},t.prototype.componentWillUnmount=function(){var e,t;this.mpegtsPlayer&&(this.mpegtsPlayer.destroy(),null===(t=(e=this.props).setError)||void 0===t||t.call(e,""))},t.prototype.initFlv=function(e){var t=this,r=e.video,i=e.manager,o=e.src,s=e.isLive,l=e.config,d=e.actions,p=e.setError,c=e.autoPlay;Promise.resolve().then((function(){return new Promise((function(e){a.e("chunk-2d0d3a95").then((function(){var t=[a("5e5d")];(function(t){e(n.__importStar(t))}).apply(null,t)})).catch(a.oe)}))})).then((function(e){r=r||i.video&&i.video.video;var a=e.createPlayer({type:"flv",url:o,isLive:s},l);a.attachMediaElement(r),t.mpegtsPlayer=a,t.unsubscribe=i.subscribeToOperationStateChange((function(e){var n=e.operation.action;"play"===n?(clearTimeout(t.timer),t.loaded||(t.loaded=!0,a.load()),a.play()):"pause"===n&&(a.pause(),s&&(t.timer=setTimeout((function(){d.seek(0),a.unload(),t.loaded=!1}),3e4)))})),a.on(e.Events.RECOVERED_EARLY_EOF,(function(){p("直播已经结束")})),a.on(e.Events.ERROR,(function(){p("视频加载失败"),a.unload()})),c&&setTimeout((function(){return d.play()}),200)}))},t.prototype.render=function(){return r.default.createElement("source",{src:this.props.src,type:this.props.type||"video/x-flv"})},t}(r.default.Component);t.FlvSource=c;var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loaded=!1,t}return(0,n.__extends)(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.src,a=e.video,n=(e.config,e.manager),r=(e.isLive,e.autoPlay),i=e.actions;this.initHls({video:a,manager:n,src:t,autoPlay:r,actions:i})},t.prototype.componentWillUnmount=function(){this.hls&&(this.hls.stopLoad(),this.hls.detachMedia())},t.prototype.componentDidUpdate=function(e){var t,a,n,r=this.props,i=r.autoPlay,o=r.actions,s=r.src,l=(r.isLive,r.config,r.video),d=r.manager;s!==e.src&&(null===(t=this.hls)||void 0===t||t.stopLoad(),null===(a=this.hls)||void 0===a||a.detachMedia(),null===(n=this.unsubscribe)||void 0===n||n.call(this),this.loaded=!1,this.initHls({video:l,manager:d,src:s,autoPlay:i,actions:o}))},t.prototype.initHls=function(e){var t=this,r=e.video,i=e.manager,o=e.src,s=e.autoPlay,l=e.actions;Promise.resolve().then((function(){return new Promise((function(e){a.e("chunk-2d0e9b34").then((function(){var t=[a("8f3c")];(function(t){e(n.__importStar(t))}).apply(null,t)})).catch(a.oe)}))})).then((function(e){var a=e.default;if(a.isSupported()){r=r||i.video&&i.video.video;var n=t.hls=new a({autoStartLoad:!1});n.attachMedia(r),n.loadSource(o),t.unsubscribe=i.subscribeToOperationStateChange((function(e){var a=e.operation.action;"play"===a?(t.loaded||(t.loaded=!0,n.startLoad()),r.play()):"pause"===a&&(r.pause(),n.stopLoad(),t.loaded=!1)})),s&&setTimeout(l.play,200)}}))},t.prototype.render=function(){return r.default.createElement("source",{src:this.props.src,type:this.props.type||"application/x-mpegURL"})},t}(r.default.Component);t.HlsSource=u;var f=function(e){function t(t){var a=e.call(this,t)||this;return a.state={posterInfo:null,videoState:{}},a.frameRef=a.frameRef.bind(a),a.cursorRef=a.cursorRef.bind(a),a.playerRef=a.playerRef.bind(a),a.onImageLoaded=a.onImageLoaded.bind(a),a.onClick=a.onClick.bind(a),a.setError=a.setError.bind(a),a}return(0,n.__extends)(t,e),t.prototype.onImageLoaded=function(e){var t=this,a=new Image;a.onload=function(){t.setState({posterInfo:{width:a.width,height:a.height}}),a=a.onload=null},a.src=e.target.getAttribute("src")},t.prototype.frameRef=function(e){this.frameDom=e},t.prototype.cursorRef=function(e){this.cursorDom=e},t.prototype.playerRef=function(e){var t=this;this.player=e,e&&e.subscribeToStateChange((function(e){if(t.setState({videoState:e}),t.frameDom&&t.times){var a=t.props.jumpBufferDuration||0,n=0,r=t.times,i=r.length;while(n<i-1){if(r[n+1]&&e.currentTime<r[n+1]-a)break;n++}t.currentIndex!==n&&t.moveCursorToIndex(n)}}))},t.prototype.moveCursorToIndex=function(e){var t=this.props.classPrefix;if(this.frameDom&&this.cursorDom){var a=this.frameDom.querySelectorAll("."+t+"Video-frame");if(a&&a.length&&a[e]){this.currentIndex=e;var n=a[e],r=this.frameDom.getBoundingClientRect(),i=n.getBoundingClientRect();this.cursorDom.setAttribute("style","width: "+(i.width-4)+"px; height: "+(i.height-4)+"px; left: "+(i.left+2-r.left)+"px; top: "+(i.top+2-r.top)+"px;")}}},t.prototype.jumpToIndex=function(e){if(this.times&&this.player&&this.props.jumpFrame){var t=this.props.jumpBufferDuration||0,a=this.times,n=this.player;n.seek(a[e]-t),n.play()}},t.prototype.onClick=function(e){e.preventDefault()},t.prototype.setError=function(e){var t=this.player;this.setState({error:e}),null===t||void 0===t||t.pause()},t.prototype.renderFrames=function(){var e=this,t=this.props,a=t.frames,n=t.framesClassName,i=t.columnsCount,s=t.data,d=t.jumpFrame,c=t.classPrefix,u=t.classnames;if("string"===typeof a&&"$"===a[0]&&(a=(0,l.resolveVariable)(a,s)),!a)return null;var f=[],m=this.times=[];return Object.keys(a).forEach((function(e){m.push(p(e)),f.push({time:e,src:a[e]})})),f.length?r.default.createElement("div",{className:u("pos-rlt Video-frameList",n),ref:this.frameRef},(0,o.padArr)(f,i).map((function(t,a){var n=i-t.length,o=[];while(n--)o.push("");return r.default.createElement("div",{className:"pull-in-xxs",key:a},r.default.createElement("div",{className:c+"Hbox "+c+"Video-frameItem"},t.map((function(t,n){return r.default.createElement("div",{className:c+"Hbox-col Wrapper--xxs "+c+"Video-frame",key:n,onClick:function(){return e.jumpToIndex(a*i+n)}},t.src?r.default.createElement("img",{className:"w-full",alt:"poster",src:t.src}):null,r.default.createElement("div",{className:c+"Video-frameLabel"},t.time))})),n?o.map((function(e,t){return r.default.createElement("div",{className:c+"Hbox-col Wrapper--xxs",key:"blank_"+t})})):null))})),d?r.default.createElement("span",{ref:this.cursorRef,className:c+"Video-cursor"}):null):null},t.prototype.renderPlayer=function(){var e,t=this.props,a=t.poster,n=t.autoPlay,s=t.muted,l=(t.name,t.data),p=(t.amisConfig,t.locals,t.isLive),f=t.minVideoDuration,m=t.videoType,h=t.playerClassName,y=t.classPrefix,v=t.aspectRatio,g=t.rates,_=t.classnames,b=(0,d.filter)(this.props.src,l,"| raw")||(0,o.getPropValue)(this.props),x=this.state.videoState,S=x.duration&&f&&x.duration<f,E=(0,d.filter)(b,l,"| raw"),C=this.state.error;return e=E&&/\.flv(?:$|\?)/.test(E)&&p||"video/x-flv"===m?r.default.createElement(c,{autoPlay:n,order:999,isLive:p,src:E,setError:this.setError}):E&&/\.m3u8(?:$|\?)/.test(E)||"application/x-mpegURL"===m?r.default.createElement(u,{autoPlay:n,order:999,src:E}):r.default.createElement("source",{src:E}),r.default.createElement("div",{className:_("Video-player",h)},r.default.createElement(i.Player,{ref:this.playerRef,poster:(0,d.filter)(a,l,"| raw"),src:E,autoPlay:n,muted:s,aspectRatio:v},g&&g.length?r.default.createElement(i.ControlBar,null,r.default.createElement(i.PlaybackRateMenuButton,{rates:g,order:7.1})):null,r.default.createElement(i.BigPlayButton,{position:"center"}),e,r.default.createElement(i.Shortcut,{disabled:!0})),C?r.default.createElement("div",{className:_("Video-error")},C):null,S?r.default.createElement("p",{className:"m-t-xs "+y+"Text--danger"},"视频时长小于 ",f," 秒"):null)},t.prototype.renderPosterAndPlayer=function(){var e=this.props,t=e.poster,a=e.data,n=(e.locals,e.minPosterDimension),i=e.classnames,o=this.state.posterInfo||{},s="";return o&&n&&(n.width||n.height)&&(n.width>o.width||n.height>o.height)&&(s="Text--danger"),r.default.createElement("div",{className:"pull-in-xs"},r.default.createElement("div",{className:i("Hbox")},r.default.createElement("div",{className:i("Hbox-col")},r.default.createElement("div",{className:i("Wrapper Wrapper--xs")},r.default.createElement("img",{onLoad:this.onImageLoaded,className:"w-full",alt:"poster",src:(0,d.filter)(t,a,"| raw")}),r.default.createElement("p",{className:"m-t-xs"},"封面"," ",r.default.createElement("span",{className:s},o.width||"-"," x ",o.height||"-"),s?r.default.createElement("span",null," ","封面尺寸小于"," ",r.default.createElement("span",{className:i("Text--danger")},n.width||"-"," x"," ",n.height||"-")):null))),r.default.createElement("div",{className:i("Hbox-col")},r.default.createElement("div",{className:i("Wrapper Wrapper--xs")},this.renderPlayer()))))},t.prototype.render=function(){var e=this.props,t=e.splitPoster,a=e.className,n=(e.classPrefix,e.classnames);return r.default.createElement("div",{className:n("Video",a),onClick:this.onClick},this.renderFrames(),t?this.renderPosterAndPlayer():this.renderPlayer())},t.defaultProps={columnsCount:8,isLive:!1,jumpFrame:!0,aspectRatio:"auto"},t}(r.default.Component);t.default=f;var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t=(0,n.__decorate)([(0,s.Renderer)({type:"video"})],t),t}(f);t.VideoRenderer=m},d8a6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("6b14"),r=a("daa2"),i=a("a853");(0,r.addSchemaFilter)((function(e,t,a){var r,o;return e&&"input-kv"===e.type?(0,n.__assign)((0,n.__assign)({},e),{multiple:!0,pipeIn:function(e){if(!(0,i.isObject)(e))return[];var t=[];return Object.keys(e).forEach((function(a){var n=typeof e[a];t.push({key:a||"",value:"string"===n||"number"===n||"boolean"===n?e[a]:JSON.stringify(e[a])})})),t},pipeOut:function(e){if(!Array.isArray(e))return e;var t={};return e.forEach((function(e){var a=e.key||"",n=e.value;try{n=JSON.parse(n)}catch(r){}t[a]=n})),t},items:[{placeholder:null!==(r=e.keyPlaceholder)&&void 0!==r?r:"Key",type:"input-text",unique:!0,name:"key",required:!0},{placeholder:null!==(o=e.valuePlaceholder)&&void 0!==o?o:"Value",type:e.valueType||"input-text",name:"value"}]}):e}))},de3a:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebComponentRenderer=void 0;var n=a("6b14"),r=(0,n.__importDefault)(a("9cd5")),i=a("daa2"),o=a("79fb"),s=(0,n.__importDefault)(a("db63")),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t.prototype.renderBody=function(){var e=this.props,t=e.body,a=e.render;return t?a("body",t):null},t.prototype.render=function(){var e=this.props,t=e.tag,a=e.props,i=e.data,l=(0,s.default)(a,(function(e){return"string"===typeof e&&(0,o.resolveVariableAndFilter)(e,i,"| raw")||e})),d=t||"div";return r.default.createElement(d,(0,n.__assign)({},l),this.renderBody())},t}(r.default.Component);t.default=l;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t=(0,n.__decorate)([(0,i.Renderer)({type:"web-component"})],t),t}(l);t.WebComponentRenderer=d},e571:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TplRenderer=t.Tpl=void 0;var n=a("6b14"),r=(0,n.__importDefault)(a("9cd5")),i=a("daa2"),o=a("55c0"),s=a("a853"),l=a("79fb"),d=a("9f4d"),p=function(e){function t(t){var a=e.call(this,t)||this;return a.htmlRef=a.htmlRef.bind(a),a}return(0,n.__extends)(t,e),t.prototype.componentDidUpdate=function(e){(0,s.anyChanged)(["data","tpl","html","text","raw","value"],this.props,e)&&this._render()},t.prototype.htmlRef=function(e){this.dom=e,this._render()},t.prototype.getContent=function(){var e=this.props,t=e.tpl,a=e.html,n=e.text,r=e.raw,i=e.data,d=e.placeholder,p=(0,s.getPropValue)(this.props);return r||(a?(0,o.filter)(a,i):t?(0,o.filter)(t,i):n?(0,l.escapeHtml)((0,o.filter)(n,i)):null==p||""===p?'<span class="text-muted">'+d+"</span>":"string"===typeof p?p:JSON.stringify(p))},t.prototype._render=function(){this.dom&&(this.dom.firstChild.innerHTML=this.getContent())},t.prototype.render=function(){var e=this.props,t=e.className,a=e.wrapperComponent,n=e.inline,i=e.classnames,o=e.style,s=a||(n?"span":"div");return r.default.createElement(s,{ref:this.htmlRef,className:i("TplField",t),style:o},r.default.createElement("span",null,this.getContent()))},t.defaultProps={inline:!0,placeholder:""},t}(r.default.Component);t.Tpl=p;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t=(0,n.__decorate)([(0,i.Renderer)({test:/(^|\/)(?:tpl|html)$/,name:"tpl"}),d.withBadge],t),t}(p);t.TplRenderer=c}}]);