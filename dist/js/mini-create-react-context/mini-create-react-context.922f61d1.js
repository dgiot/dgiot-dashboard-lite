import{R as t,r as e}from"../react/react.fab41096.js";import{a as n}from"../@babel/@babel.531a568e.js";import{P as o}from"../prop-types/prop-types.39fde81f.js";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,o){t=n,e.forEach((function(e){return e(t,o)}))}}}var s=t.createContext||function(t,s){var u,a,p,c="__create-react-context-"+((r[p="__global_unique_id__"]=(r[p]||0)+1)+"__"),f=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).emitter=i(e.props.value),e}n(e,t);var o=e.prototype;return o.getChildContext=function(){var t;return(t={})[c]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,n=this.props.value,o=t.value;((r=n)===(i=o)?0!==r||1/r==1/i:r!=r&&i!=i)?e=0:(e="function"==typeof s?s(n,o):1073741823,0!==(e|=0)&&this.emitter.set(t.value,e))}var r,i},o.render=function(){return this.props.children},e}(e.exports.Component);f.childContextTypes=((u={})[c]=o.object.isRequired,u);var l=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}n(o,e);var r=o.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},o}(e.exports.Component);return l.contextTypes=((a={})[c]=o.object,a),{Provider:f,Consumer:l}};export{s as i};
