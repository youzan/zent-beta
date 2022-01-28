(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[7652],{17652:(n,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var a=s(73450),e=s(27378),o=s(57318),c=s(67911),p=s(3454),i=s(24246);function l(n,t){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.push.apply(s,a)}return s}function u(n){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){(0,a.Z)(n,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(s,t))}))}return n}var r=function(){var n=(n,t)=>()=>{c.q.push((0,i.jsx)(c.q,{title:n,position:t,children:n}))};return(0,i.jsxs)("div",{children:[(0,i.jsx)(p.z,{onClick:n("Right Top","right-top"),children:"Right Top"}),(0,i.jsx)(p.z,{onClick:n("Right Bottom","right-bottom"),children:"Right Bottom"}),(0,i.jsx)(p.z,{onClick:n("Left Top","left-top"),children:"Left Top"}),(0,i.jsx)(p.z,{onClick:n("Left Bottom","left-bottom"),children:"Left Bottom"})]})},d=function(){var n=n=>()=>{c.q.push((0,i.jsx)(c.q,{type:n,title:n,children:n}))};return(0,i.jsxs)("div",{children:[(0,i.jsx)(p.z,{onClick:n("info"),children:"Info"}),(0,i.jsx)(p.z,{onClick:n("success"),children:"Success"}),(0,i.jsx)(p.z,{onClick:n("warning"),children:"Warning"}),(0,i.jsx)(p.z,{onClick:n("error"),children:"Error"})]})};function k(n){return(0,i.jsx)(n.tag,u(u({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return(0,i.jsx)(k,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function h(n){return(0,i.jsx)(k,{tag:"style",html:n.style})}function g(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),g(n.parentNode,t);return t}class f extends e.Component{constructor(...n){super(...n),(0,a.Z)(this,"state",{showCode:!1}),(0,a.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,t=this.props,s=t.title,a=t.src,e=t.children;return(0,i.jsxs)("div",{className:"zandoc-react-demo",children:[(0,i.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,i.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,i.jsx)("div",{className:"zandoc-react-demo__title",children:(0,i.jsx)("p",{children:s||""})}),(0,i.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,i.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,i.jsx)(k,{tag:"code",html:a,attributes:{className:"language-jsx"}})})]})}}class v extends e.Component{componentDidMount(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&(0,o.l)(document.documentElement,0,g(t,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(h,{style:""}),e.createElement(m,{html:'<h2 class="anchor-heading"><a href="#notice-tong-zhi-ti-xing">¶</a><a href="javascript:void(0)" id="notice-tong-zhi-ti-xing" class="anchor-point"></a>Notice 通知提醒</h2>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(f,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Notice</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notice</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notice</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>position<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notice</span></span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Right Top\'</span><span class="token punctuation">,</span> <span class="token string">\'right-top\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Right</span> <span class="token maybe-class-name">Top</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Right Bottom\'</span><span class="token punctuation">,</span> <span class="token string">\'right-bottom\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token maybe-class-name">Right</span> <span class="token maybe-class-name">Bottom</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Left Top\'</span><span class="token punctuation">,</span> <span class="token string">\'left-top\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Left</span> <span class="token maybe-class-name">Top</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'Left Bottom\'</span><span class="token punctuation">,</span> <span class="token string">\'left-bottom\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token maybe-class-name">Left</span> <span class="token maybe-class-name">Bottom</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(r)),e.createElement(f,{title:"不同的样式",id:"Demostyle",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Notice</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">showNotice</span> <span class="token operator">=</span> <span class="token parameter">type</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notice</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Notice</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>type<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Notice</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'info\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Info</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'success\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Success</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'warning\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Warning</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token known-class-name class-name">Error</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(d)),e.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>string</td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>React.CSSProperties</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>样式</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td><code>info</code>\n, \n<code>success</code>\n,\n<code>warning</code>\n, \n<code>error</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否显示关闭按钮，当是\n<code>false</code>\n时不会自动关闭</td>\n<td>boolean</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭按钮点击时的回调</td>\n<td>function</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>autoClose</td>\n<td>是否自动关闭</td>\n<td>boolean</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>timeout</td>\n<td>自动关闭的延迟时间</td>\n<td>number</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>内容</td>\n<td>React.ReactNode</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td>位置</td>\n<td>string</td>\n<td>否</td>\n<td><code>top-right</code></td>\n<td><code>right-top</code>\n, \n<code>right-bottom</code>\n, \n<code>left-top</code>\n, \n<code>left-bottom</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#notice-push-node-reactnode">¶</a><a href="javascript:void(0)" id="notice-push-node-reactnode" class="anchor-point"></a><code>Notice.push(node: ReactNode): string</code></h4>\n<p>打开一个新的通知，返回值是这个通知的 <code>id</code>，可通过 <code>Notice.close(id)</code> 手动关闭通知。</p>\n<p>注意：由于 <code>ReactDOM.render</code> 在某些场景下是异步的（比如在 <code>useEffect</code> 内部调用的时候），所以 <code>push</code> 返回的 <code>id</code> 并不能立刻用于 <code>close</code>，如果调用 <code>close(id)</code> 时 <code>ReactDOM.render</code>\n还未渲染出来，那么此次 <code>close</code> 调用不会有效果。</p>\n<h4 class="anchor-heading"><a href="#notice-close-id-string-void">¶</a><a href="javascript:void(0)" id="notice-close-id-string-void" class="anchor-point"></a><code>Notice.close(id: string): void</code></h4>\n<p>关闭 <code>id</code> 指定的通知。</p>'}))}}},67911:(n,t,s)=>{"use strict";s.d(t,{q:()=>z});var a=s(93646),e=s(24246),o=s(27378),c=s(60042),p=s.n(c),i=s(39215),l=s(70453),u=s(31542),r=s(14623),d=s(19185),k=s(17127),m=(0,o.createContext)(null);m.displayName="ZentNoticeContext";var h={appear:"zent-notice-animation-enter",appearActive:"zent-notice-animation-enter-active",appearDone:"zent-notice-animation-enter-done",enter:"zent-notice-animation-enter",enterActive:"zent-notice-animation-enter-active",enterDone:"zent-notice-animation-enter-done",exit:"zent-notice-animation-exit",exitActive:"zent-notice-animation-exit-active",exitDone:"zent-notice-animation-exit-done"},g=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.elementRef=(0,o.createRef)(),t.state={entered:!1,show:!1},t.timer=0,t.ctx={onClose:function(){t.leave()}},t.onEntered=function(){t.setState({entered:!0})},t.onExited=function(){var n=t.elementRef.current;n.style.height=n.clientHeight+"px",(0,k.tA)((function(){return n.style.height="0"})),setTimeout((function(){var n=t.props;(0,n.onExited)(n.id)}),200)},t}return(0,a.ZT)(t,n),t.prototype.leave=function(){this.timer&&clearTimeout(this.timer),this.setState({show:!1})},t.prototype.componentDidMount=function(){var n=this;this.setState({show:!0});var t=this.props.children;if((0,d.isElement)(t)&&t.props){var s=t.props,a=s.autoClose,e=void 0===a||a,o=s.closable,c=void 0===o||o,p=s.timeout,i=void 0===p?4500:p;c&&e&&(this.timer=setTimeout((function(){return n.leave()}),i))}},t.prototype.componentWillUnmount=function(){var n=this.props.id;b.delete(n)},t.prototype.render=function(){var n=this.props.children,t=this.state,s=t.entered,o=t.show;return(0,e.jsx)(m.Provider,(0,a.pi)({value:this.ctx},{children:(0,e.jsx)(r.Z,(0,a.pi)({in:o,timeout:s?160:100,onEntered:this.onEntered,onExited:this.onExited,classNames:h},{children:(0,e.jsx)("div",(0,a.pi)({ref:this.elementRef,className:"zent-notice-animation","data-zv":"10.0.0-beta.3"},{children:n}),void 0)}),void 0)}),void 0)},t}(o.Component),f=s(14805),v={"right-top":null,"right-bottom":null,"left-top":null,"left-bottom":null},y={"right-top":new Set,"right-bottom":new Set,"left-top":new Set,"left-bottom":new Set},b=new Map,j=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={list:[]},t.onExited=function(n){t.setState((function(t){return{list:t.list.filter((function(t){return t.props.id!==n}))}}))},t}return(0,a.ZT)(t,n),t.prototype.push=function(n,t){var s=(0,o.createRef)(),c=(0,e.jsx)(g,(0,a.pi)({ref:s,id:t,onExited:this.onExited},{children:n}),t);return b.set(t,s),this.setState((function(n){return{list:n.list.concat([c])}})),t},t.prototype.render=function(){return(0,e.jsx)(e.Fragment,{children:this.state.list},void 0)},t}(o.Component);function x(n){switch(n){case"info":return(0,e.jsx)(i.J,{className:"zent-notice-icon zent-notice-icon-info",type:"info-circle"},void 0);case"success":return(0,e.jsx)(i.J,{className:"zent-notice-icon zent-notice-icon-success",type:"check-circle"},void 0);case"warning":return(0,e.jsx)(i.J,{className:"zent-notice-icon zent-notice-icon-warning",type:"warning"},void 0);case"error":return(0,e.jsx)(i.J,{className:"zent-notice-icon zent-notice-icon-error",type:"error-circle"},void 0);default:return null}}function z(n){var t=n.children,s=n.title,c=n.type,l=n.closable,u=void 0===l||l,r=n.onClose,d=n.className,k=n.style,h=(0,o.useContext)(m),g=(0,o.useCallback)((function(){h&&h.onClose(),r&&r()}),[h,r]);return(0,e.jsxs)("div",(0,a.pi)({className:p()("zent-notice",{"zent-notice-with-icon":!!c},d),style:k,"data-zv":"10.0.0-beta.3"},{children:[x(c),(0,e.jsx)("div",(0,a.pi)({className:"zent-notice-title","data-zv":"10.0.0-beta.3"},{children:s}),void 0),u?(0,e.jsx)(i.J,{type:"close",className:"zent-notice-close",onClick:g},void 0):null,(0,e.jsx)("div",(0,a.pi)({className:"zent-notice-content","data-zv":"10.0.0-beta.3"},{children:t}),void 0)]}),void 0)}z.push=function(n){var t="right-top";(0,d.isElement)(n)&&n.props&&(t=n.props.position||t);var s=(0,l.Z)("zent-notice-");return function(n,t){var s=v[n];if(s)return t(s);var a=y[n];if(a.add(t),!(a.size>1)){var o=function(n){var t=(0,f.Z)("div");switch(t.classList.add("zent-notice-container"),n){case"right-top":t.classList.add("zent-notice-container-right","zent-notice-container-top");break;case"right-bottom":t.classList.add("zent-notice-container-right","zent-notice-container-bottom");break;case"left-top":t.classList.add("zent-notice-container-left","zent-notice-container-top");break;case"left-bottom":t.classList.add("zent-notice-container-left","zent-notice-container-bottom");break;default:throw new Error("Invalid argument "+n)}return document.body.appendChild(t),t}(n);u.render((0,e.jsx)(j,{element:o,ref:function(t){t&&(v[n]=t,a.forEach((function(n){return n(t)})),a.clear())}},void 0),o)}}(t,(function(t){t.push(n,s)})),s},z.close=function(n){var t=b.get(n);t&&t.current&&t.current.leave()}}}]);