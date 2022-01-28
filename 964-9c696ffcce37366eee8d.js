(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[964],{80964:(e,t,n)=>{"use strict";n.d(t,{Y:()=>M,Z:()=>P});var i=n(93646),r=n(24246),a=n(27378),u=n(60042),o=n.n(u),s=n(52074),p=n(9828),l=n.n(p),c=n(27036),m=n(82285),v=n(85883),d=n(77125),h=n(1348);function f(e,t,n){return e>=n?e:t<=n?t:n}function x(e){var t=function(e){return"number"!=typeof e||Number.isNaN(e)?Number.MAX_SAFE_INTEGER:f(Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,e)}(e.max),n=function(e){return"number"!=typeof e||Number.isNaN(e)?Number.MIN_SAFE_INTEGER:f(Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,e)}(e.min);return n>t?(function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i]}(!1,"max is smaller than min"),{min:t,max:n}):{min:n,max:t}}function b(e,t,n,r){var a,u,o=null;null==e?(a=null,o=""):"string"==typeof e?a=parseInt(e,10)||0:Number.isNaN(e)?(a=0,o=""):a=Math.floor(e),null!==a&&(a<t?r&&(u={visible:!0,type:"min",text:String(t)}):a>n&&r&&(u={visible:!0,text:String(n),type:"max"}),a=Math.min(n,a),a=Math.max(t,a)),null===o&&(o=String(a));var s=u&&r?{pop:u}:{};return(0,i.pi)((0,i.pi)({},s),{value:a,input:o})}function g(e,t,n){if(null===e)return{canDec:!1,canInc:!1};var i=!0,r=!0;return t>=e&&(i=!1),n<=e&&(r=!1),{canDec:i,canInc:r}}function N(e){return e.startsWith("+")?e.substring(1):e}var w=new(l())(0);function S(e){return""===e||"."===e||"-"===e||"+"===e}function I(e){return/^[-+]?\d*\.?\d*$/.test(e)}function y(e,t){return Number.isFinite(t)?new(l())(t):new(l())(1).div(Math.pow(10,e))}function C(e){return I(e=String(e))?new(l())(N(e)):null}function z(e){return{min:C(e.min),max:C(e.max)}}function T(e,t,n,r,a){var u;if(null==e)return{input:"",value:w};if(S(e=String(e))||!I(e))return{input:"",value:w};if(""===e||S(e))return{input:e,value:w};var o=new(l())(N(e));null!==t&&1===t.cmp(o)&&(o=t,a&&(u={visible:!0,text:String(t),type:"min"})),null!==n&&-1===n.cmp(o)&&(o=n,a&&(u={visible:!0,text:String(n),type:"max"}));var s=u&&a?{pop:u}:{};return(0,i.pi)({input:o.toFixed(r),value:o},s)}function E(e,t,n){var i=!0,r=!0;return null!==t&&(i=-1===t.cmp(e)),null!==n&&(r=1===n.cmp(e)),{canDec:i,canInc:r}}var F=n(72551),_=Object.is;function j(e,t){var n=e.showTooltip?{pop:{visible:!1,type:"",text:""}}:{};if(!0===e.integer){var r=x(e),a=r.min,u=r.max;return(0,i.pi)((0,i.pi)((0,i.pi)({},n),{prevProps:e,min:a,max:u,delta:(o=e.step,Number.isFinite(o)?Math.round(o):1)}),t?b(e.value,a,u):{})}var o,s=z(e);return a=s.min,u=s.max,(0,i.pi)((0,i.pi)((0,i.pi)({},n),{prevProps:e,min:a,max:u,delta:y(e.decimal,e.step)}),t?T(e.value,a,u,e.decimal):{})}var M=function(e){function t(t){var n=e.call(this,t)||this;return n.focused=!1,n.timer=null,n.inputRef=(0,a.createRef)(),n.inputContext={renderInner:function(e){return n.renderChild(e)}},n.onUserInput=function(e){var t=e.target.value;if(!1===n.props.integer){var i=n.props.onInput;S(t)?n.setState({input:t,value:w}):I(t)&&(n.setState({input:t,value:new(l())(N(t))}),i&&i(t))}else if(i=n.props.onInput,function(e){return""===e||"-"===e||"+"===e}(t))n.setState({input:t,value:null}),i&&i(t);else if(function(e){return/^[-+]?\d*$/.test(e.toString())}(t)){var r=parseInt(t,10)||0;n.setState({input:t,value:r}),i&&i(t)}},n.onFocus=function(e){n.focused=!0;var t=n.props.onFocus;t&&t(e)},n.hideTooltip=function(){n.timer&&clearTimeout(n.timer),n.timer=setTimeout((function(){n.setState({pop:{visible:!1,text:"",type:""}})}),1500)},n.onBlur=function(e){if(n.focused=!1,!0===n.props.integer){var t=n.props,i=t.onChange,r=t.showTooltip,a=n.state,u=b(a.value,a.min,a.max,r);null==i||i(u.value),n.setState(u,(function(){r&&n.state.pop.visible&&n.hideTooltip()})),null==(o=n.props.onBlur)||o(e)}else{var o,s=n.props,p=(i=s.onChange,s.decimal),l=s.showTooltip,c=n.state;u=T(c.input,c.min,c.max,p,l),null==i||i(u.input),n.setState(u,(function(){l&&n.state.pop.visible&&n.hideTooltip()})),(o=n.props.onBlur)&&o(e)}},n.inc=function(){n.step("inc")},n.dec=function(){n.step("dec")},n.state=j(t,!0),n}return(0,i.ZT)(t,e),t.prototype.step=function(e){if(!this.props.disabled)if(!0===this.props.integer){var t=this.state,n=t.value,i=t.min,r=t.max,a=t.delta,u=g(n,i,r),o=u.canInc,s=u.canDec;if(null===n||"inc"===e&&!o||"dec"===e&&!s)return;var p=void 0;p="inc"===e?n+a:n-a,null==(c=this.props.onChange)||c(p),this.setState({value:p,input:String(p)})}else{var l=this.props,c=l.onChange,m=l.decimal,v=this.state,d=(n=v.value,i=v.min,r=v.max,a=v.delta,E(n,i,r));if(o=d.canInc,s=d.canDec,"inc"===e&&!o||"dec"===e&&!s)return;p=void 0;var h=(p="inc"===e?n.plus(a):n.minus(a)).toFixed(m);null==c||c(h),this.setState({value:p,input:h})}},t.getDerivedStateFromProps=function(e,t){var n=t.prevProps;if(e===n)return null;var r=function(e){return(0,F.n)(e,"value")&&(0,F.n)(e,"onChange")}(e);if(e.integer!==n.integer)return j(e,r);if(!0===e.integer){var a=(0,i.pi)((0,i.pi)({},t),{prevProps:e}),u=!1;if(!_(e.min,n.min)||!_(e.max,n.max)){var o=x(e),s=o.min,p=o.max;a.min=s,a.max=p,u=!0}if(r&&(u||!_(e.value,n.value))){var l=b(e.value,a.min,a.max),c=l.value,m=l.input;a.value=c,a.input=m}return a}var v=(0,i.pi)((0,i.pi)({},t),{prevProps:e}),d=!1;if(!_(e.min,n.min)||!_(e.max,n.max)){var h=z(e);s=h.min,p=h.max,v.min=s,v.max=p,d=!0}if(r&&(d||!_(e.value,n.value)||!_(e.decimal,n.decimal))){var f=T(e.value,v.min,v.max,e.decimal);c=f.value,m=f.input,v.value=c,v.input=m}return _(e.step,n.step)&&_(e.decimal,n.decimal)||(v.delta=y(e.decimal,e.step)),v},t.prototype.checkPropsValue=function(){if(!0===this.props.integer)this.props.value!==this.state.value&&(t=this.props.onChange)&&t(this.state.value);else{var e=this.props,t=e.onChange,n=e.decimal,i=this.state.value;if(t&&""!==this.props.value&&""!==this.state.input)try{new(l())(this.props.value).eq(i)||t(i.toFixed(n))}catch(e){t(i.toFixed(n))}}},t.prototype.componentDidMount=function(){"value"in this.props&&!this.focused&&this.checkPropsValue()},t.prototype.componentDidUpdate=function(e){e!==this.props&&"value"in this.props&&!this.focused&&this.checkPropsValue()},t.prototype.renderChild=function(e){var t,n=this.props,a=n.disabled,u=void 0===a?this.context.value:a,s=n.readOnly,p=n.showCounter,l=n.showStepper;if(!0===this.props.integer){var m=this.state,v=m.min,d=m.max;t=g(m.value,v,d)}else{var h=this.state;t=E(h.value,v=h.min,d=h.max)}var f=t.canDec,x=t.canInc,b=this.state.input,N=u||s||!x||""===b,w=u||s||!f||""===b,S=o()({"zent-number-input-arrow":!0,"zent-number-input-arrowup":!0,"zent-number-input-arrow-disable":N}),I=o()({"zent-number-input-arrow":!0,"zent-number-input-arrowdown":!0,"zent-number-input-arrow-disable":w}),y=o()({"zent-number-input-count":!0,"zent-number-input-countreduce":!0,"zent-number-input-count-disable":w}),C=o()({"zent-number-input-count":!0,"zent-number-input-countadd":!0,"zent-number-input-count-disable":N});return(0,r.jsxs)(r.Fragment,{children:[p&&(0,r.jsx)("div",(0,i.pi)({className:y,onClick:this.dec,"data-zv":"10.0.0-beta.3"},{children:"–"}),void 0),e,p&&(0,r.jsx)("div",(0,i.pi)({className:C,onClick:this.inc,"data-zv":"10.0.0-beta.3"},{children:"+"}),void 0),l&&(0,r.jsxs)("div",(0,i.pi)({className:"zent-number-input-arrows","data-zv":"10.0.0-beta.3"},{children:[(0,r.jsx)("div",(0,i.pi)({className:S,onClick:this.inc,"data-zv":"10.0.0-beta.3"},{children:(0,r.jsx)(c.Z,{type:"up"},void 0)}),void 0),(0,r.jsx)("div",(0,i.pi)({className:I,onClick:this.dec,"data-zv":"10.0.0-beta.3"},{children:(0,r.jsx)(c.Z,{type:"down"},void 0)}),void 0)]}),void 0)]},void 0)},t.prototype.renderInput=function(){var e=this.props,t=(e.integer,e.className),n=e.disabled,a=e.readOnly,u=(e.type,e.onChange,e.showStepper),s=e.showCounter,p=(e.min,e.max,e.decimal,e.onInput,e.showTooltip,(0,i._T)(e,["integer","className","disabled","readOnly","type","onChange","showStepper","showCounter","min","max","decimal","onInput","showTooltip"])),l=this.state.input;if(u&&s)throw new Error("NumberInput: showStepper、 showCounter cannot exist at the same time");return(0,r.jsx)(m.I,(0,i.pi)({ref:this.inputRef,autoComplete:"off"},p,{readOnly:a,disabled:n,className:o()("zent-number-input",t),value:l,onChange:this.onUserInput,onFocus:this.onFocus,onBlur:this.onBlur}),void 0)},t.prototype.render=function(){var e=this,t=this.state.pop;return this.props.showTooltip?(0,r.jsx)(s.Z,(0,i.pi)({componentName:"Stepper"},{children:function(n){return(0,r.jsx)(d.r.Provider,(0,i.pi)({value:e.inputContext},{children:(0,r.jsx)(v.Z,(0,i.pi)({trigger:"none",content:t.visible?n[t.type]+t.text:"",visible:t.visible,position:"bottom-left"},{children:e.renderInput()}),void 0)}),void 0)}}),void 0):(0,r.jsx)(d.r.Provider,(0,i.pi)({value:this.inputContext},{children:this.renderInput()}),void 0)},t.defaultProps={integer:!1,type:"number",decimal:0,size:"normal"},t.contextType=h.d,t}(a.Component),P=M},85883:(e,t,n)=>{"use strict";var i=n(92497);t.Z=i.Z}}]);