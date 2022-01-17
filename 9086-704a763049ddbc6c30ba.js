(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[9086],{49086:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>f});var t=s(73450),e=s(27378),p=s(57318),o=s(9357),c=s(96681),l=s(24246);function r(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var u=function(){return(0,l.jsx)("div",{className:"zent-status-bar-example",children:(0,l.jsxs)(o.A,{type:"waiting",progress:50,extraContent:(0,l.jsx)(c.z,{type:"primary",children:"按钮"}),children:["提示文案，常规提示。",(0,l.jsx)("a",{href:"javascript:;",children:"文字链接1"}),(0,l.jsx)("a",{href:"javascript:;",children:"文字链接2"})]})})},k=function(){return(0,l.jsxs)("div",{className:"zent-status-bar-example",children:[(0,l.jsxs)(o.A,{type:"info",extraContent:(0,l.jsx)(c.z,{type:"primary",children:"按钮"}),children:["提示文案，通知提示。",(0,l.jsx)("a",{href:"javascript:;",children:"文字链接1"}),(0,l.jsx)("a",{href:"javascript:;",children:"文字链接2"})]}),(0,l.jsxs)(o.A,{type:"waiting",progress:40,extraContent:(0,l.jsx)(c.z,{type:"primary",children:"按钮"}),children:["提示文案，通知提示。",(0,l.jsx)("a",{href:"javascript:;",children:"文字链接1"}),(0,l.jsx)("a",{href:"javascript:;",children:"文字链接2"})]}),(0,l.jsxs)(o.A,{type:"success",extraContent:(0,l.jsx)(c.z,{type:"primary",children:"按钮"}),children:["提示文案，成功提示。",(0,l.jsx)("a",{href:"javascript:;",children:"文字链接1"}),(0,l.jsx)("a",{href:"javascript:;",children:"文字链接2"})]}),(0,l.jsxs)(o.A,{type:"error",extraContent:(0,l.jsx)(c.z,{type:"primary",children:"按钮"}),children:["提示文案，失败提示。",(0,l.jsx)("a",{href:"javascript:;",children:"文字链接1"}),(0,l.jsx)("a",{href:"javascript:;",children:"文字链接2"})]})]})};function d(n){return(0,l.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return(0,l.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function h(n){return(0,l.jsx)(d,{tag:"style",html:n.style})}function g(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),g(n.parentNode,a);return a}class v extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return(0,l.jsxs)("div",{className:"zandoc-react-demo",children:[(0,l.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,l.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,l.jsx)("div",{className:"zandoc-react-demo__title",children:(0,l.jsx)("p",{children:s||""})}),(0,l.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,l.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,l.jsx)(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class f extends e.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,p.l)(document.documentElement,0,g(a,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(h,{style:".zent-status-bar-example .zent-alert {\n\tmargin-bottom: 24px;\n}\n.zent-status-bar-example .zent-alert a {\n\tmargin: 0 10px 0 8px;\n}\n\n.zent-status-bar-example .zent-alert {\n\tmargin-bottom: 24px;\n}\n.zent-status-bar-example .zent-alert a {\n\tmargin: 0 10px 0 8px;\n}"}),e.createElement(m,{html:'<h2 class="anchor-heading"><a href="#statusbar-ren-wu-zhuang-tai-tiao">¶</a><a href="javascript:void(0)" id="statusbar-ren-wu-zhuang-tai-tiao" class="anchor-point"></a>StatusBar 任务状态条</h2>\n<p>向用户传递任务相关的行为反馈</p>\n<h3 class="anchor-heading"><a href="#jian-yi">¶</a><a href="javascript:void(0)" id="jian-yi" class="anchor-point"></a>建议</h3>\n<ul>\n<li>使用：在任务期间响应用户的操作而展示，为用户提供直接、即时的反馈，确保用户知道如何在必要时采取行动；</li>\n<li>位置：与操作对象位于同一容器，位于操作对象上方，随容器自适应；</li>\n</ul>\n<h3 class="anchor-heading"><a href="#zhu-yi">¶</a><a href="javascript:void(0)" id="zhu-yi" class="anchor-point"></a>注意</h3>\n<ul>\n<li>禁止多条状态叠加；</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(v,{title:"基础使用",id:"Demo1",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">StatusBar</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-status-bar-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StatusBar</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>waiting<span class="token punctuation">"</span></span>\n      <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">extraContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      提示文案，常规提示。\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StatusBar</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(v,{title:"类型总览",id:"Demo2",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">StatusBar</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-status-bar-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StatusBar</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extraContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      提示文案，通知提示。\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StatusBar</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StatusBar</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>waiting<span class="token punctuation">"</span></span>\n      <span class="token attr-name">progress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">extraContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      提示文案，通知提示。\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StatusBar</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StatusBar</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extraContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      提示文案，成功提示。\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StatusBar</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StatusBar</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extraContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      提示文案，失败提示。\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字链接<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StatusBar</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(k)),e.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>状态条类型</td>\n<td>string</td>\n<td>否</td>\n<td><code>\'info\'</code></td>\n<td><code>\'waiting\'</code>\n|\n<code>\'success\'</code>\n|\n<code>\'error\'</code></td>\n</tr>\n<tr>\n<td>progress</td>\n<td>状态条顶部任务进度，仅在\n<code>type=waiting</code>\n时显示</td>\n<td>number</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>extraContent</td>\n<td>右侧自定义内容</td>\n<td><code>ReactNode</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>StatusBar 组件基于 Alert 实现，更多属性请参考 <a href="https://youzan.github.io/zent/zh/component/alert">Alert 文档</a></p>'}))}}},82010:(n,a,s)=>{"use strict";s.d(a,{b:()=>d});var t=s(93646),e=s(24246),p=s(60042),o=s.n(p),c=s(27378),l=s(8434),r=s(78486),i=s(78513),u=["outline","closed","onClose"],k=["title","description","loading","closable","closed","onClose","closeContent","closeIconColor","icon","extraContent"],d=function(n){function a(){var a=null!==n&&n.apply(this,arguments)||this;return a.state={closed:!1},a.onCloseHandler=function(){a.isControlled||a.setState({closed:!0}),a.props.onClose&&a.props.onClose()},a}return(0,t.ZT)(a,n),Object.defineProperty(a.prototype,"isControlled",{get:function(){return"closed"in this.props},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"closed",{get:function(){return this.isControlled?this.props.closed:this.state.closed},enumerable:!1,configurable:!0}),a.prototype.render=function(){var n;if(this.closed)return null;var a=(0,i.Z)(this.props,k),s=a.className,p=a.type,c=a.outline,d=a.bordered,m=a.progress,h=(0,t._T)(a,["className","type","outline","bordered","progress"]),g=(0,i.Z)(this.props,u),v=o()("zent-alert","zent-alert-style-"+p,s,((n={})["zent-alert-outline"]=c,n["zent-alert--borderless"]=!d,n));return(0,e.jsxs)("div",(0,t.pi)({className:v},h,{"data-zv":"10.0.0-beta.1"},{children:[!!m&&(0,e.jsx)(l.E,{className:"zent-alert__progress",percent:m,showInfo:!1,strokeWidth:2},void 0),(0,e.jsx)(r.Z,(0,t.pi)({},g,{onAlertItemClose:this.onCloseHandler},{children:this.props.children}),void 0)]}),void 0)},a.highlightClassName="zent-alert-item-content__highlight",a.defaultProps={type:"info",bordered:!1,loading:!1,outline:!1,closable:!0},a}(c.PureComponent)},78486:(n,a,s)=>{"use strict";var t=s(93646),e=s(24246),p=s(27378),o=s(60042),c=s.n(o),l=s(27036),r=s(20840),i={info:"info-circle",warning:"warning",success:"check-circle",error:"close-circle"},u=(0,p.forwardRef)((function(n,a){var s=n.extraContent,o=n.classItemName,u=n.title,k=n.description,d=n.children,m=n.loading,h=n.type,g=n.closable,v=n.icon,f=n.closeIconColor,y=n.closeContent,j=n.onAlertItemClose,x=(0,p.useRef)(n);x.current=n;var b=(0,p.useMemo)((function(){return d||(0,e.jsxs)(e.Fragment,{children:[u&&(0,e.jsx)("h3",(0,t.pi)({className:"zent-alert-item-content__title","data-zv":"10.0.0-beta.1"},{children:u}),void 0),k&&(0,e.jsx)("p",(0,t.pi)({className:"zent-alert-item-content__description","data-zv":"10.0.0-beta.1"},{children:k}),void 0)]},void 0)}),[d,k,u]),z=(0,p.useMemo)((function(){var n=x.current.onClose,a=f?{color:f}:{};return g?(0,e.jsx)("div",(0,t.pi)({className:"zent-alert-item-close-wrapper",onClick:function(a){null==n||n(),j&&j(),a.stopPropagation()},"data-zv":"10.0.0-beta.1"},{children:null!=y?y:(0,e.jsx)(l.Z,{type:"close",className:"zent-alert-item-close-btn",style:a},void 0)}),void 0):null}),[g,y,f,j]),C=(0,p.useMemo)((function(){return m?(0,e.jsx)(r.Z,{className:"zent-alert-item-icon",loading:!0,icon:"circle",iconSize:16},void 0):null===v||!1===v?null:v?(0,e.jsx)("span",(0,t.pi)({className:"zent-alert-item-custom-icon","data-zv":"10.0.0-beta.1"},{children:v}),void 0):h in i?(0,e.jsx)(l.Z,{className:"zent-alert-item-icon",type:i[h]},void 0):null}),[m,h,v]);return(0,e.jsxs)("div",(0,t.pi)({className:c()("zent-alert-item",o),ref:a,"data-zv":"10.0.0-beta.1"},{children:[C,(0,e.jsx)("div",(0,t.pi)({className:"zent-alert-item-content","data-zv":"10.0.0-beta.1"},{children:b}),void 0),s&&(0,e.jsx)("div",(0,t.pi)({className:"zent-alert-item-extra-content","data-zv":"10.0.0-beta.1"},{children:s}),void 0),z]}),void 0)}));u.displayName="AlertItem",a.Z=u},8434:(n,a,s)=>{"use strict";s.d(a,{E:()=>v});var t=s(93646),e=s(24246),p=s(27378),o=s(60042),c=s.n(o),l=["normal","success","exception"],r=(0,s(70453).Z)("zentAnimatedArcStrokeGradient"),i={},u={WebkitTransition:"none",MozTransition:"none",OTransition:"none",msTransition:"none",transition:"none"},k=function(n){function a(){var a=null!==n&&n.apply(this,arguments)||this;return a.state={opacity:0,rotate:0,transition:i},a.startAnimation=function(){a.animationDelayTimerId&&clearTimeout(a.animationDelayTimerId);var n=a.props,s=n.arcLength,t=n.radius,e=(s-a.getMaskArcLength())/t;a.setState({rotate:e,transition:i,opacity:.2},a.queueAnimationEnd)},a.finishAnimation=function(){a.transitionEndTimerId&&clearTimeout(a.transitionEndTimerId),a.setState({rotate:0,transition:u,opacity:0}),a.animationDelayTimerId=setTimeout(a.startAnimation,1e3)},a.queueAnimationEnd=function(){a.transitionEndTimerId=setTimeout(a.finishAnimation,400)},a}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.getPath(),a=this.props,s=a.className,p=a.strokeWidth,o=this.state,c=o.rotate,l=o.transition,i=o.opacity;return(0,e.jsxs)("g",(0,t.pi)({"data-zv":"10.0.0-beta.1"},{children:[(0,e.jsx)("defs",(0,t.pi)({"data-zv":"10.0.0-beta.1"},{children:(0,e.jsxs)("linearGradient",(0,t.pi)({id:r},{children:[(0,e.jsx)("stop",{offset:"0%",stopColor:"rgba(255, 255, 255, 0)","data-zv":"10.0.0-beta.1"},void 0),(0,e.jsx)("stop",{offset:"100%",stopColor:"#fff","data-zv":"10.0.0-beta.1"},void 0)]}),void 0)}),void 0),(0,e.jsx)("path",{className:s,d:n,stroke:"url(#"+r+")",strokeOpacity:i,strokeWidth:p,style:(0,t.pi)({transform:"rotate("+c+"rad)"},l),"data-zv":"10.0.0-beta.1"},void 0)]}),void 0)},a.prototype.componentDidMount=function(){this.startAnimation()},a.prototype.componentWillUnmount=function(){clearTimeout(this.animationDelayTimerId),clearTimeout(this.transitionEndTimerId),this.animationDelayTimerId=null,this.transitionEndTimerId=null},a.prototype.getMaskArcLength=function(){return.2*this.props.arcLength},a.prototype.getMaskTheta=function(){var n=this.props.radius;return this.getMaskArcLength()/n},a.prototype.getArcStartPoint=function(){var n=this.props,a=n.radius,s=n.strokeWidth/2;return[a+s,s]},a.prototype.getArcEndPoint=function(){var n=this.props,a=n.radius,s=a+n.strokeWidth/2,t=this.getMaskTheta();return[s+Math.sin(t)*a,s-Math.cos(t)*a]},a.prototype.getPath=function(){var n=this.getArcStartPoint(),a=this.getArcEndPoint(),s=this.props.radius;return"M"+n.join(",")+" A"+s+","+s+" 0 0 1 "+a.join(",")},a}(p.PureComponent),d=s(39215),m=function(n){var a=n.type,s=n.percent,t=n.format,p=n.state,o=n.color;return"success"===p?(0,e.jsx)(d.J,{type:"circle"===a?"check":"check-circle",style:{color:o}},void 0):"exception"===p?(0,e.jsx)(d.J,{type:"circle"===a?"close":"close-circle",style:{color:o}},void 0):(0,e.jsx)(e.Fragment,{children:t(s)},void 0)},h=function(n){var a=n.percent,s=n.showInfo,p=n.format,o=n.strokeWidth,l=n.width,r=n.bgColor,i=n.color,u=n.state,d=n.strokeLinecap,h=l||132,g=h/2,v=h-o,f=v/2,y=v*Math.PI,j=y*(100-a)/100;return(0,e.jsxs)("div",(0,t.pi)({className:"zent-progress-container",style:{width:h,height:h},"data-zv":"10.0.0-beta.1"},{children:[(0,e.jsx)("div",{className:"zent-progress-wrapper",style:{borderWidth:o,borderColor:r,width:h,height:h},"data-zv":"10.0.0-beta.1"},void 0),(0,e.jsxs)("svg",(0,t.pi)({className:"zent-progress-inner",viewBox:"0 0 "+h+" "+h,width:h,height:h,"data-zv":"10.0.0-beta.1"},{children:[(0,e.jsx)("g",(0,t.pi)({transform:"rotate(-90 "+g+" "+g+")","data-zv":"10.0.0-beta.1"},{children:(0,e.jsx)("circle",{className:c()("zent-progress-inner-path","zent-progress-inner-path--"+d),cx:g,cy:g,r:f,style:{stroke:i,strokeWidth:o},strokeDasharray:y,strokeDashoffset:j,"data-zv":"10.0.0-beta.1"},void 0)}),void 0),"normal"===u&&(0,e.jsx)(k,{className:c()("zent-progress-path-mask","zent-progress-path-mask--"+d),radius:f,arcLength:y-j,strokeWidth:o},void 0)]}),void 0),s&&(0,e.jsx)("div",(0,t.pi)({className:"zent-progress-info","data-zv":"10.0.0-beta.1"},{children:(0,e.jsx)(m,{type:"circle",percent:a,format:p,state:u,color:i},void 0)}),void 0)]}),void 0)},g=function(n){var a=n.format,s=n.width,p=n.percent,o=n.showInfo,l=n.strokeWidth,r=n.bgColor,i=n.color,u=n.state,k=n.strokeLinecap,d=s||"100%",h=o&&(0,e.jsx)("div",(0,t.pi)({className:"zent-progress-info","data-zv":"10.0.0-beta.1"},{children:(0,e.jsx)(m,{type:"line",percent:p,format:a,state:u,color:i},void 0)}),void 0);return(0,e.jsxs)("div",(0,t.pi)({className:"zent-progress-container","data-zv":"10.0.0-beta.1"},{children:[(0,e.jsx)("div",(0,t.pi)({className:c()("zent-progress-wrapper","zent-progress-wrapper--"+k,{"zent-progress-wrapper--finished":100===p}),style:{background:r,width:d,height:l},"data-zv":"10.0.0-beta.1"},{children:(0,e.jsx)("div",{className:"zent-progress-inner",style:{background:i,width:p+"%",height:l},"data-zv":"10.0.0-beta.1"},void 0)}),void 0),h]}),void 0)},v=function(n){var a,s=n,o=s.type,r=s.status,i=s.percent,u=s.className,k=s.normalColor,d=s.successColor,m=s.exceptionColor,v=s.bgColor,f=s.format,y=s.showInfo,j=s.strokeWidth,x=s.width,b=s.strokeLinecap,z=(0,t._T)(s,["type","status","percent","className","normalColor","successColor","exceptionColor","bgColor","format","showInfo","strokeWidth","width","strokeLinecap"]),C=(0,p.useMemo)((function(){return-1!==l.indexOf(r)?r:i>=100?"success":"normal"}),[r,i]),w={exception:m,success:d,normal:k}[C],N=(0,p.useMemo)((function(){return i<0?0:i>100?100:i}),[i]);switch(o){case"circle":a=h;break;case"line":default:a=g}var _=c()("zent-progress","zent-progress-type__"+o,"zent-progress-state__"+C,u);return(0,e.jsx)("div",(0,t.pi)({className:_},z,{"data-zv":"10.0.0-beta.1"},{children:(0,e.jsx)(a,{percent:N,showInfo:y,strokeWidth:j,width:x,bgColor:v,format:f,color:w,state:C,strokeLinecap:b},void 0)}),void 0)};v.defaultProps={type:"line",percent:0,showInfo:!0,strokeWidth:8,strokeLinecap:"round",format:function(n){return n+"%"}}},9357:(n,a,s)=>{"use strict";s.d(a,{A:()=>r});var t=s(93646),e=s(24246),p=s(60042),o=s.n(p),c=s(82010),l={info:{type:"info"},waiting:{type:"info",loading:!0},success:{type:"success"},error:{type:"error"}},r=function(n){var a=n.type,s=void 0===a?"info":a,p=n.progress,r=n.className,i=(0,t._T)(n,["type","progress","className"]),u=l[s],k="waiting"===s?p:0,d=o()("zent-status-bar",r);return(0,e.jsx)(c.b,(0,t.pi)({className:d},u,i,{progress:k}),void 0)}}}]);