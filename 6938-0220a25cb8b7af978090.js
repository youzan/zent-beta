(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[6938],{33938:(e,t,n)=>{"use strict";n.d(t,{X:()=>h});var i=n(93646),r=n(24246),s=n(60042),u=n.n(s),a=n(27378),o=n(1535),l=n(23130),d=n(1348),c=n(4008);function h(e){var t=(0,a.useContext)(d.d),n=(0,a.useContext)(l.Z),s=(0,a.useRef)(e);s.current=e;var c,h=n&&n.onChange,p=(0,a.useCallback)((function(e){var t=s.current,n=t.value,r=t.onChange;if(h)h(n);else if(r){var u=Object.create(e);u.target=(0,i.pi)((0,i.pi)({},s.current),{type:"checkbox",checked:e.target.checked}),r(u)}}),[h]),f=(e.checked,e.className),v=e.style,F=(e.disabled,e.readOnly,e.children),b=e.indeterminate,x=e.width,m=(e.value,e.labelStyle),C=e.onMouseEnter,D=e.onMouseLeave,y=(0,i._T)(e,["checked","className","style","disabled","readOnly","children","indeterminate","width","value","labelStyle","onMouseEnter","onMouseLeave"]),g=function(e,t){return"boolean"==typeof t.readOnly?t.readOnly:!!e&&e.readOnly}(n,e),z=function(e,t,n){return"boolean"==typeof n.disabled?n.disabled:t?t.disabled:e.value}(t,n,e);if(n){var E=n.value,k=n.isValueEqual;c=-1!==E.findIndex((function(t){return k(t,e.value)}))}else c=!!e.checked;return(0,r.jsxs)("label",(0,i.pi)({className:u()("zent-checkbox-wrap",f,{"zent-checkbox-checked":!!c,"zent-checkbox-disabled":z||g,"zent-checkbox-indeterminate":b}),style:(0,i.pi)((0,i.pi)({},v),(0,o.Z)(x)),onMouseEnter:C,onMouseLeave:D,"data-zv":"10.0.0-beta.3"},{children:[(0,r.jsxs)("span",(0,i.pi)({className:"zent-checkbox","data-zv":"10.0.0-beta.3"},{children:[(0,r.jsx)("span",{className:"zent-checkbox-inner","data-zv":"10.0.0-beta.3"},void 0),(0,r.jsx)("input",(0,i.pi)({},y,{type:"checkbox",checked:c&&!b,disabled:z,readOnly:g,onChange:p,"data-zv":"10.0.0-beta.3"}),void 0)]}),void 0),null!=F&&!0!==F&&!1!==F?(0,r.jsx)("div",(0,i.pi)({className:"zent-checkbox-label",style:m,"data-zv":"10.0.0-beta.3"},{children:F}),void 0):null]}),void 0)}h.Group=c.Z,t.Z=h},4008:(e,t,n)=>{"use strict";n.d(t,{c:()=>h});var i=n(93646),r=n(24246),s=n(27378),u=n(60042),a=n.n(u),o=n(41925),l=n(23130),d=n(1348),c=l.Z.Provider,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getGroupContext=(0,o.Z)((function(e,n,i,r){return{value:Array.isArray(e)?e:[],disabled:n,readOnly:i,isValueEqual:r,onChange:t.onCheckboxChange}})),t.onCheckboxChange=function(e){var n=t.props,i=n.isValueEqual,r=n.onChange,s=n.value;if(r){var u=s?s.slice():[],a=u.findIndex((function(t){return i(t,e)}));-1!==a?u.splice(a,1):u.push(e),r(u)}},t}return(0,i.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.style,s=e.children,u=e.value,o=e.disabled,l=void 0===o?this.context.value:o,d=e.readOnly,h=void 0!==d&&d,p=e.isValueEqual,f=a()("zent-checkbox-group",t);return(0,r.jsx)(c,(0,i.pi)({value:this.getGroupContext(u,l,h,p)},{children:(0,r.jsx)("div",(0,i.pi)({className:f,style:n,"data-zv":"10.0.0-beta.3"},{children:s}),void 0)}),void 0)},t.defaultProps={isValueEqual:Object.is,value:[]},t.contextType=d.d,t}(s.Component);t.Z=h},23130:(e,t,n)=>{"use strict";var i=n(27378);t.Z=(0,i.createContext)(null)},2038:(e,t,n)=>{"use strict";n.d(t,{A:()=>b});var i=n(93646),r=n(24246),s=n(27378),u=n(60042),a=n.n(u),o=n(54779),l=n(85883),d=n(14322),c=n(14805);function h(e,t){void 0===t&&(t="&nbsp;");var n=p(e,"line-height"),i=parseFloat(n);if(n===i+""){var r=e.style.lineHeight;e.style.lineHeight=n+"em",n=p(e,"line-height"),i=parseFloat(n),r?e.style.lineHeight=r:delete e.style.lineHeight}if(-1!==n.indexOf("pt")?(i*=4,i/=3):-1!==n.indexOf("mm")?(i*=96,i/=25.4):-1!==n.indexOf("cm")?(i*=96,i/=2.54):-1!==n.indexOf("in")?i*=96:-1!==n.indexOf("pc")&&(i*=16),i=Math.round(i),"normal"===n){var s=e.nodeName,u=(0,c.Z)(s);u.innerHTML="<span>"+t+"</span>","TEXTAREA"===s.toUpperCase()&&u.setAttribute("rows","1");var a=p(e,"font-size"),o=u.style;o.fontSize=a,o.padding="0px",o.border="0px",o.color="transparent",o.background="transparent",o.position="absolute",o.top="-10000px",o.left="-10000px";var l=document.body;l.appendChild(u),i=u.offsetHeight,l.removeChild(u)}return i}function p(e,t){return getComputedStyle(e).getPropertyValue(t)}var f=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\u1ab0-\u1aff\u1dc0-\u1dff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\u1ab0-\u1aff\u1dc0-\u1dff]|\ud83c[\udffb-\udfff])?)*/,v=/\xB7|\xD7|\u2014|\u2018|\u2019|\u201C|\u201D|\u2026|[\u2E80-\u2EFF]|[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u31C0-\u31EF]|[\u3200-\u32FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FFF]|[\u3400-\u4DBF]|(?:[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF])|(?:\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F])|(?:\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F])|(?:\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF])|(?:\uD873[\uDEB0-\uDFFF]|[\uD874-\uD879][\uDC00-\uDFFF]|\uD87A[\uDC00-\uDFEF])|(?:[\uD880-\uD883][\uDC00-\uDFFF]|\uD884[\uDC00-\uDF4F])|[\uF900-\uFAFF]|[\u3300-\u33FF]|[\uFE30-\uFE4F]|[\uF900-\uFAFF]|(?:\uD87E[\uDC00-\uDE1F])/,F={wordBreak:"break-all",overflowWrap:"break-word"},b=function(e){function t(t){var n=e.call(this,t)||this;return n.element=null,n.innerElement=(0,s.createRef)(),n.resizeObserver=null,n.containerWidth=NaN,n.handleWindowResize=function(){n.setState({holdsFullText:!1},n.clampLines)},n.handleContainerResize=function(e){var t,i=e[0],r=i.contentBoxSize,s=i.contentRect;t=r?Array.isArray(r)?r[0].inlineSize:r.inlineSize:s.width,Number.isNaN(n.containerWidth)||t===n.containerWidth||n.setState({holdsFullText:!1},n.clampLines),n.containerWidth=t},n.onContainerRefChange=function(e){n.element=e,n.observe(e)},n.onNoClampContainerRefChange=function(e){n.observe(e)},n.state={holdsFullText:!1,textSuited:""},n}return(0,i.ZT)(t,e),t.prototype.componentDidUpdate=function(e){var t=this;e.text===this.props.text&&e.mode===this.props.mode&&e.lines===this.props.lines||this.setState({holdsFullText:!1},(function(){t.clampLines()}))},t.prototype.componentDidMount=function(){this.clampLines()},t.prototype.componentWillUnmount=function(){var e=this.getResizeObserver();e&&e.disconnect()},t.prototype.getResizeObserver=function(){return!this.resizeObserver&&window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(this.handleContainerResize)),this.resizeObserver},t.prototype.observe=function(e){var t=this.getResizeObserver();t&&this.props.resizable&&(this.containerWidth=NaN,t.disconnect(),e&&t.observe(e))},t.prototype.clampLines=function(){this.innerElement.current&&this.element&&("performance"===this.props.mode?this._clampLinesFast():this._clampLinesAccurate())},t.prototype._clampLinesFast=function(){var e,t,n,i,r,s=this.props.text,u=(e=this.element,n=function(e){return f.test(e)}(t=s)?h(e,"🇨🇳"):-1/0,i=function(e){return v.test(e)}(t)?h(e,"世界"):-1/0,r=h(e),Math.max(n,i,r)*this.props.lines);if(this.innerElement.current.textContent=s,this.element.clientHeight<=u)this.setState({textSuited:s,holdsFullText:!0});else{for(var a=Array.from(s),o=0,l=0,d=a.length;o<d;)l=Math.floor((o+d)/2),this.innerElement.current.textContent=x(a,0,l)+this.getEllipsis(),this.element.clientHeight>u?d=l:o=l+1;var c=x(a,0,d-1)+this.getEllipsis();this.innerElement.current.textContent=c,this.setState({textSuited:c,holdsFullText:!1})}},t.prototype._clampLinesAccurate=function(){var e=h(this.element),t=this.props.text,n=Array.from(t),i=this.props.lines,r=0,s=n[r],u="";this.innerElement.current.textContent=s;for(var a=this.element.clientHeight,o=1;o<n.length&&i>0;o++){var l=s+n[o];this.innerElement.current.textContent=l;var d=this.element.clientHeight;if(d-a>=e&&i--,i>0)a=d,r=o,s=l;else for(;r;){var c=(s=x(n,0,r--))+this.getEllipsis();if(this.innerElement.current.textContent=c,a===this.element.clientHeight){u=c;break}}}i>0?this.setState({textSuited:t,holdsFullText:!0}):this.setState({textSuited:u,holdsFullText:!1})},t.prototype.getEllipsis=function(){return this.state.holdsFullText?"":this.props.ellipsis},t.prototype.renderResizable=function(){return this.props.resizable&&!window.ResizeObserver?(0,r.jsx)(d.w,{onResize:this.handleWindowResize},void 0):null},t.prototype.renderClampedText=function(){var e=this.props.className,t=a()("zent-clamp-lines",e);return(0,r.jsxs)("div",(0,i.pi)({className:t,style:F,"data-zv":"10.0.0-beta.3"},{children:[(0,r.jsxs)("div",(0,i.pi)({ref:this.onContainerRefChange,"data-zv":"10.0.0-beta.3"},{children:[(0,r.jsx)("span",(0,i.pi)({ref:this.innerElement,"data-zv":"10.0.0-beta.3"},{children:this.state.textSuited}),void 0),this.props.extra]}),void 0),this.renderResizable()]}),void 0)},t.prototype.render=function(){var e=this.props,t=e.text,n=e.className,s=e.showPop,u=e.popWidth,a=e.trigger,o=e.renderPop;return t?this.state.holdsFullText?(0,r.jsxs)("div",(0,i.pi)({ref:this.onNoClampContainerRefChange,className:n,style:F,"data-zv":"10.0.0-beta.3"},{children:[t,this.renderResizable()]}),void 0):s?(0,r.jsx)(l.Z,(0,i.pi)({trigger:a,content:(0,r.jsx)("div",(0,i.pi)({style:(0,i.pi)({maxWidth:u},F),"data-zv":"10.0.0-beta.3"},{children:o(t)}),void 0)},{children:this.renderClampedText()}),void 0):this.renderClampedText():null},t.defaultProps={className:"",lines:2,ellipsis:"...",showPop:!0,popWidth:250,trigger:"hover",renderPop:o.Z,resizable:!1,mode:"performance",extra:null},t}(s.Component);function x(e,t,n){return e.slice(t,n).join("")}},85883:(e,t,n)=>{"use strict";var i=n(92497);t.Z=i.Z},14322:(e,t,n)=>{"use strict";n.d(t,{w:()=>l});var i=n(24246),r=n(27378),s=n(27468),u=n(80186),a=n(17127),o={passive:!0},l=function(e){var t=e.disableThrottle,n=void 0!==t&&t,l=e.onResize,d=(0,r.useRef)(null),c=(0,r.useRef)(l);c.current=l;var h=(0,r.useCallback)((function(e){var t=(0,s.ZP)();d.current||(d.current=t);var n=d.current,i={deltaX:t.width-n.width,deltaY:t.height-n.height};0===i.deltaX&&0===i.deltaY||(c.current(e,i),d.current=t)}),[]),p=(0,a.BN)(h,n);return(0,r.useEffect)((function(){return d.current=(0,s.ZP)(),p.cancel}),[p]),(0,i.jsx)(u.ZP,{eventName:"resize",listener:p,options:o},void 0)}},1535:(e,t,n)=>{"use strict";function i(e){return"string"==typeof e||"number"==typeof e?{width:e}:{}}n.d(t,{Z:()=>i})},54779:(e,t,n)=>{"use strict";function i(e){return e}n.d(t,{Z:()=>i})}}]);