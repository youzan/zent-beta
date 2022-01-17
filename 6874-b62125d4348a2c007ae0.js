(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[6874],{36874:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>v});var a=e(73450),s=e(27378),o=e(57318),r=e(15196),i=e(24246);function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){(0,a.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var p=function(){return(0,i.jsx)("div",{className:"zent-alert-example",children:(0,i.jsx)(r.j,{backgroundImage:"https://img01.yzcdn.cn/upload_files/2021/11/25/FtAGwcqfZIngtd1uXYIuIND58IeU.png",closeIconColor:"white",children:(0,i.jsxs)("div",{className:"zent-banner-example",children:["有赞联合QQ百家扶持计划，帮你触达",(0,i.jsx)("span",{className:"zent-banner-example-highlight",children:"6"}),"亿月活的全新流量"]})})})};function d(t){return(0,i.jsx)(t.tag,l(l({},t.attributes),{},{dangerouslySetInnerHTML:{__html:t.html}}))}function u(t){return(0,i.jsx)(d,{tag:"section",html:t.html,attributes:{className:"zandoc-react-markdown"}})}function h(t){return(0,i.jsx)(d,{tag:"style",html:t.style})}function m(t,n){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(n+=t.offsetTop),m(t.parentNode,n);return n}class g extends s.Component{constructor(...t){super(...t),(0,a.Z)(this,"state",{showCode:!1}),(0,a.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var t=this.state.showCode,n=this.props,e=n.title,a=n.src,s=n.children;return(0,i.jsxs)("div",{className:"zandoc-react-demo",children:[(0,i.jsx)("div",{className:"zandoc-react-demo__preview",children:s}),(0,i.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,i.jsx)("div",{className:"zandoc-react-demo__title",children:(0,i.jsx)("p",{children:e||""})}),(0,i.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(t?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),t&&(0,i.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,i.jsx)(d,{tag:"code",html:a,attributes:{className:"language-jsx"}})})]})}}class v extends s.Component{componentDidMount(){var t=location.hash;if(t){var n=document.querySelector('a[href="'.concat(t,'"]'));n&&(0,o.l)(document.documentElement,0,m(n,-9))}}render(){return s.createElement("div",{className:"zandoc-react-container"},s.createElement(h,{style:".zent-banner-example {\n\tcolor: #fff;\n\tfont-size: 18px;\n\tfont-weight: 500;\n\theight: 20px;\n}\n.zent-banner-example-highlight {\n\tcolor: #FFDD5D;\n\tfont-weight: 400;\n\tfont-size: 28px;\n\tmargin: 0 2px;\n\tvertical-align: middle;\n}"}),s.createElement(u,{html:'<h2 class="anchor-heading"><a href="#banner-gong-gao">¶</a><a href="javascript:void(0)" id="banner-gong-gao" class="anchor-point"></a>Banner 公告</h2>\n<p>向用户传递推广信息</p>\n<h3 class="anchor-heading"><a href="#jian-yi">¶</a><a href="javascript:void(0)" id="jian-yi" class="anchor-point"></a>建议</h3>\n<ul>\n<li>使用：用于向用户传递产品推广信息。公告会一直存在，直到被用户处理或关闭；</li>\n<li>位置：公告通常位于页面内容区容器上方，导航栏下方，随内容区宽度自适应；</li>\n</ul>\n<h3 class="anchor-heading"><a href="#zhu-yi">¶</a><a href="javascript:void(0)" id="zhu-yi" class="anchor-point"></a>注意</h3>\n<ul>\n<li>仅在必要时使用公告，且应将公告限制在与之内容相关的任务界面中。频繁使用可能会导致用户对公告的注意力下降；</li>\n<li>禁止多条公告叠加。如单个页面存在多条公告，仅展示优先级最高的公告内容；</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),s.createElement(g,{title:"基础用法",id:"Demo1",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Banner</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">IMG</span> <span class="token operator">=</span>\n  <span class="token string">\'https://img01.yzcdn.cn/upload_files/2021/11/25/FtAGwcqfZIngtd1uXYIuIND58IeU.png\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-alert-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Banner</span></span> <span class="token attr-name">backgroundImage</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">IMG</span><span class="token punctuation">}</span></span> <span class="token attr-name">closeIconColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-banner-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        有赞联合<span class="token constant">QQ</span>百家扶持计划，帮你触达\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-banner-example-highlight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token number">6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        亿月活的全新流量\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Banner</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},s.createElement(p)),s.createElement(u,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>backgroundImage</td>\n<td>背景图片</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>closeIconColor</td>\n<td>自定义 close 颜色</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td><code>\'grey\'</code>\n|\n<code>\'white\'</code>\n|\n \n<code>string</code></td>\n</tr>\n</tbody>\n</table>\n<p>Banner 组件基于 Alert 实现，更多属性请参考 <a href="https://youzan.github.io/zent/zh/component/alert">Alert 文档</a></p>'}))}}},82010:(t,n,e)=>{"use strict";e.d(n,{b:()=>h});var a=e(93646),s=e(24246),o=e(60042),r=e.n(o),i=e(27378),c=e(8434),l=e(78486),p=e(78513),d=["outline","closed","onClose"],u=["title","description","loading","closable","closed","onClose","closeContent","closeIconColor","icon","extraContent"],h=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={closed:!1},n.onCloseHandler=function(){n.isControlled||n.setState({closed:!0}),n.props.onClose&&n.props.onClose()},n}return(0,a.ZT)(n,t),Object.defineProperty(n.prototype,"isControlled",{get:function(){return"closed"in this.props},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"closed",{get:function(){return this.isControlled?this.props.closed:this.state.closed},enumerable:!1,configurable:!0}),n.prototype.render=function(){var t;if(this.closed)return null;var n=(0,p.Z)(this.props,u),e=n.className,o=n.type,i=n.outline,h=n.bordered,m=n.progress,g=(0,a._T)(n,["className","type","outline","bordered","progress"]),v=(0,p.Z)(this.props,d),f=r()("zent-alert","zent-alert-style-"+o,e,((t={})["zent-alert-outline"]=i,t["zent-alert--borderless"]=!h,t));return(0,s.jsxs)("div",(0,a.pi)({className:f},g,{"data-zv":"10.0.0-beta.1"},{children:[!!m&&(0,s.jsx)(c.E,{className:"zent-alert__progress",percent:m,showInfo:!1,strokeWidth:2},void 0),(0,s.jsx)(l.Z,(0,a.pi)({},v,{onAlertItemClose:this.onCloseHandler},{children:this.props.children}),void 0)]}),void 0)},n.highlightClassName="zent-alert-item-content__highlight",n.defaultProps={type:"info",bordered:!1,loading:!1,outline:!1,closable:!0},n}(i.PureComponent)},78486:(t,n,e)=>{"use strict";var a=e(93646),s=e(24246),o=e(27378),r=e(60042),i=e.n(r),c=e(27036),l=e(20840),p={info:"info-circle",warning:"warning",success:"check-circle",error:"close-circle"},d=(0,o.forwardRef)((function(t,n){var e=t.extraContent,r=t.classItemName,d=t.title,u=t.description,h=t.children,m=t.loading,g=t.type,v=t.closable,f=t.icon,k=t.closeIconColor,b=t.closeContent,z=t.onAlertItemClose,y=(0,o.useRef)(t);y.current=t;var j=(0,o.useMemo)((function(){return h||(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)("h3",(0,a.pi)({className:"zent-alert-item-content__title","data-zv":"10.0.0-beta.1"},{children:d}),void 0),u&&(0,s.jsx)("p",(0,a.pi)({className:"zent-alert-item-content__description","data-zv":"10.0.0-beta.1"},{children:u}),void 0)]},void 0)}),[h,u,d]),x=(0,o.useMemo)((function(){var t=y.current.onClose,n=k?{color:k}:{};return v?(0,s.jsx)("div",(0,a.pi)({className:"zent-alert-item-close-wrapper",onClick:function(n){null==t||t(),z&&z(),n.stopPropagation()},"data-zv":"10.0.0-beta.1"},{children:null!=b?b:(0,s.jsx)(c.Z,{type:"close",className:"zent-alert-item-close-btn",style:n},void 0)}),void 0):null}),[v,b,k,z]),N=(0,o.useMemo)((function(){return m?(0,s.jsx)(l.Z,{className:"zent-alert-item-icon",loading:!0,icon:"circle",iconSize:16},void 0):null===f||!1===f?null:f?(0,s.jsx)("span",(0,a.pi)({className:"zent-alert-item-custom-icon","data-zv":"10.0.0-beta.1"},{children:f}),void 0):g in p?(0,s.jsx)(c.Z,{className:"zent-alert-item-icon",type:p[g]},void 0):null}),[m,g,f]);return(0,s.jsxs)("div",(0,a.pi)({className:i()("zent-alert-item",r),ref:n,"data-zv":"10.0.0-beta.1"},{children:[N,(0,s.jsx)("div",(0,a.pi)({className:"zent-alert-item-content","data-zv":"10.0.0-beta.1"},{children:j}),void 0),e&&(0,s.jsx)("div",(0,a.pi)({className:"zent-alert-item-extra-content","data-zv":"10.0.0-beta.1"},{children:e}),void 0),x]}),void 0)}));d.displayName="AlertItem",n.Z=d},15196:(t,n,e)=>{"use strict";e.d(n,{j:()=>p});var a=e(93646),s=e(24246),o=e(27378),r=e(60042),i=e.n(r),c=e(82010),l={grey:"#999",white:"#fff"},p=function(t){var n=t.backgroundImage,e=t.closeIconColor,r=t.style,p=void 0===r?{}:r,d=t.className,u=(0,a._T)(t,["backgroundImage","closeIconColor","style","className"]),h=(0,o.useMemo)((function(){return n?(0,a.pi)((0,a.pi)({},p),{backgroundImage:"url("+n+")"}):p}),[p,n]),m=i()("zent-banner",d);return(0,s.jsx)(c.b,(0,a.pi)({},u,{icon:null,style:h,className:m,closeIconColor:l[e]||e}),void 0)}},8434:(t,n,e)=>{"use strict";e.d(n,{E:()=>f});var a=e(93646),s=e(24246),o=e(27378),r=e(60042),i=e.n(r),c=["normal","success","exception"],l=(0,e(70453).Z)("zentAnimatedArcStrokeGradient"),p={},d={WebkitTransition:"none",MozTransition:"none",OTransition:"none",msTransition:"none",transition:"none"},u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={opacity:0,rotate:0,transition:p},n.startAnimation=function(){n.animationDelayTimerId&&clearTimeout(n.animationDelayTimerId);var t=n.props,e=t.arcLength,a=t.radius,s=(e-n.getMaskArcLength())/a;n.setState({rotate:s,transition:p,opacity:.2},n.queueAnimationEnd)},n.finishAnimation=function(){n.transitionEndTimerId&&clearTimeout(n.transitionEndTimerId),n.setState({rotate:0,transition:d,opacity:0}),n.animationDelayTimerId=setTimeout(n.startAnimation,1e3)},n.queueAnimationEnd=function(){n.transitionEndTimerId=setTimeout(n.finishAnimation,400)},n}return(0,a.ZT)(n,t),n.prototype.render=function(){var t=this.getPath(),n=this.props,e=n.className,o=n.strokeWidth,r=this.state,i=r.rotate,c=r.transition,p=r.opacity;return(0,s.jsxs)("g",(0,a.pi)({"data-zv":"10.0.0-beta.1"},{children:[(0,s.jsx)("defs",(0,a.pi)({"data-zv":"10.0.0-beta.1"},{children:(0,s.jsxs)("linearGradient",(0,a.pi)({id:l},{children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"rgba(255, 255, 255, 0)","data-zv":"10.0.0-beta.1"},void 0),(0,s.jsx)("stop",{offset:"100%",stopColor:"#fff","data-zv":"10.0.0-beta.1"},void 0)]}),void 0)}),void 0),(0,s.jsx)("path",{className:e,d:t,stroke:"url(#"+l+")",strokeOpacity:p,strokeWidth:o,style:(0,a.pi)({transform:"rotate("+i+"rad)"},c),"data-zv":"10.0.0-beta.1"},void 0)]}),void 0)},n.prototype.componentDidMount=function(){this.startAnimation()},n.prototype.componentWillUnmount=function(){clearTimeout(this.animationDelayTimerId),clearTimeout(this.transitionEndTimerId),this.animationDelayTimerId=null,this.transitionEndTimerId=null},n.prototype.getMaskArcLength=function(){return.2*this.props.arcLength},n.prototype.getMaskTheta=function(){var t=this.props.radius;return this.getMaskArcLength()/t},n.prototype.getArcStartPoint=function(){var t=this.props,n=t.radius,e=t.strokeWidth/2;return[n+e,e]},n.prototype.getArcEndPoint=function(){var t=this.props,n=t.radius,e=n+t.strokeWidth/2,a=this.getMaskTheta();return[e+Math.sin(a)*n,e-Math.cos(a)*n]},n.prototype.getPath=function(){var t=this.getArcStartPoint(),n=this.getArcEndPoint(),e=this.props.radius;return"M"+t.join(",")+" A"+e+","+e+" 0 0 1 "+n.join(",")},n}(o.PureComponent),h=e(39215),m=function(t){var n=t.type,e=t.percent,a=t.format,o=t.state,r=t.color;return"success"===o?(0,s.jsx)(h.J,{type:"circle"===n?"check":"check-circle",style:{color:r}},void 0):"exception"===o?(0,s.jsx)(h.J,{type:"circle"===n?"close":"close-circle",style:{color:r}},void 0):(0,s.jsx)(s.Fragment,{children:a(e)},void 0)},g=function(t){var n=t.percent,e=t.showInfo,o=t.format,r=t.strokeWidth,c=t.width,l=t.bgColor,p=t.color,d=t.state,h=t.strokeLinecap,g=c||132,v=g/2,f=g-r,k=f/2,b=f*Math.PI,z=b*(100-n)/100;return(0,s.jsxs)("div",(0,a.pi)({className:"zent-progress-container",style:{width:g,height:g},"data-zv":"10.0.0-beta.1"},{children:[(0,s.jsx)("div",{className:"zent-progress-wrapper",style:{borderWidth:r,borderColor:l,width:g,height:g},"data-zv":"10.0.0-beta.1"},void 0),(0,s.jsxs)("svg",(0,a.pi)({className:"zent-progress-inner",viewBox:"0 0 "+g+" "+g,width:g,height:g,"data-zv":"10.0.0-beta.1"},{children:[(0,s.jsx)("g",(0,a.pi)({transform:"rotate(-90 "+v+" "+v+")","data-zv":"10.0.0-beta.1"},{children:(0,s.jsx)("circle",{className:i()("zent-progress-inner-path","zent-progress-inner-path--"+h),cx:v,cy:v,r:k,style:{stroke:p,strokeWidth:r},strokeDasharray:b,strokeDashoffset:z,"data-zv":"10.0.0-beta.1"},void 0)}),void 0),"normal"===d&&(0,s.jsx)(u,{className:i()("zent-progress-path-mask","zent-progress-path-mask--"+h),radius:k,arcLength:b-z,strokeWidth:r},void 0)]}),void 0),e&&(0,s.jsx)("div",(0,a.pi)({className:"zent-progress-info","data-zv":"10.0.0-beta.1"},{children:(0,s.jsx)(m,{type:"circle",percent:n,format:o,state:d,color:p},void 0)}),void 0)]}),void 0)},v=function(t){var n=t.format,e=t.width,o=t.percent,r=t.showInfo,c=t.strokeWidth,l=t.bgColor,p=t.color,d=t.state,u=t.strokeLinecap,h=e||"100%",g=r&&(0,s.jsx)("div",(0,a.pi)({className:"zent-progress-info","data-zv":"10.0.0-beta.1"},{children:(0,s.jsx)(m,{type:"line",percent:o,format:n,state:d,color:p},void 0)}),void 0);return(0,s.jsxs)("div",(0,a.pi)({className:"zent-progress-container","data-zv":"10.0.0-beta.1"},{children:[(0,s.jsx)("div",(0,a.pi)({className:i()("zent-progress-wrapper","zent-progress-wrapper--"+u,{"zent-progress-wrapper--finished":100===o}),style:{background:l,width:h,height:c},"data-zv":"10.0.0-beta.1"},{children:(0,s.jsx)("div",{className:"zent-progress-inner",style:{background:p,width:o+"%",height:c},"data-zv":"10.0.0-beta.1"},void 0)}),void 0),g]}),void 0)},f=function(t){var n,e=t,r=e.type,l=e.status,p=e.percent,d=e.className,u=e.normalColor,h=e.successColor,m=e.exceptionColor,f=e.bgColor,k=e.format,b=e.showInfo,z=e.strokeWidth,y=e.width,j=e.strokeLinecap,x=(0,a._T)(e,["type","status","percent","className","normalColor","successColor","exceptionColor","bgColor","format","showInfo","strokeWidth","width","strokeLinecap"]),N=(0,o.useMemo)((function(){return-1!==c.indexOf(l)?l:p>=100?"success":"normal"}),[l,p]),w={exception:m,success:h,normal:u}[N],C=(0,o.useMemo)((function(){return p<0?0:p>100?100:p}),[p]);switch(r){case"circle":n=g;break;case"line":default:n=v}var I=i()("zent-progress","zent-progress-type__"+r,"zent-progress-state__"+N,d);return(0,s.jsx)("div",(0,a.pi)({className:I},x,{"data-zv":"10.0.0-beta.1"},{children:(0,s.jsx)(n,{percent:C,showInfo:b,strokeWidth:z,width:y,bgColor:f,format:k,color:w,state:N,strokeLinecap:j},void 0)}),void 0)};f.defaultProps={type:"line",percent:0,showInfo:!0,strokeWidth:8,strokeLinecap:"round",format:function(t){return t+"%"}}}}]);