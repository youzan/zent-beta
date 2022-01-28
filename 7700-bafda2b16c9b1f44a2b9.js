(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[7700],{27700:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var t=s(73450),e=s(27378),p=s(57318),o=s(20713),c=s(24246);function l(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var u=function(){return(0,c.jsx)(o.Z,{style:{width:400},children:(0,c.jsx)("p",{children:"Card item"})})},r=function(){return(0,c.jsxs)(o.Z,{style:{width:400},title:"Card Title",children:[(0,c.jsx)("p",{children:"Card item"}),(0,c.jsx)("p",{children:"Card item"})]})},d=function(){return(0,c.jsx)(o.Z,{style:{width:400},title:"Card Title",action:(0,c.jsx)("a",{className:"zent-link",target:"_blank",href:"//www.youzan.com",children:"有赞"}),children:(0,c.jsx)("p",{children:"Card item"})})},k=function(){return(0,c.jsxs)(o.Z,{style:{width:400},title:"外层卡片",children:[(0,c.jsx)("p",{style:{marginBottom:10},children:"Card content"}),(0,c.jsx)(o.Z,{type:"nested",title:"内层卡片",children:(0,c.jsx)("p",{children:"Nested card content"})})]})},m=function(){return(0,c.jsx)(o.Z,{style:{width:400},bodyStyle:{background:"#e5e5e5"},children:(0,c.jsx)("p",{children:"Custom background"})})},h=function(){return(0,c.jsx)(o.Z,{style:{width:400},loading:!0,title:"Card Title",children:(0,c.jsx)("p",{children:"Card item"})})};function g(n){return(0,c.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function y(n){return(0,c.jsx)(g,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function f(n){return(0,c.jsx)(g,{tag:"style",html:n.style})}function v(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),v(n.parentNode,a);return a}class j extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return(0,c.jsxs)("div",{className:"zandoc-react-demo",children:[(0,c.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,c.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,c.jsx)("div",{className:"zandoc-react-demo__title",children:(0,c.jsx)("p",{children:s||""})}),(0,c.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,c.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,c.jsx)(g,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class b extends e.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,p.l)(document.documentElement,0,v(a,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(f,{style:""}),e.createElement(y,{html:'<h2 class="anchor-heading"><a href="#card-qia-pian">¶</a><a href="javascript:void(0)" id="card-qia-pian" class="anchor-point"></a>Card 卡片</h2>\n<p>用于在卡片容器内展示信息。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>通过 <code>title</code> 来控制是否显示标题</li>\n<li>通过 <code>action</code> 来提供交互操作</li>\n<li>通过 <code>bodyStyle</code> 来自定义内容样式</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(j,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Card</span> item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(j,{title:"带标题的卡片",id:"Demowithtitle",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Card</span> item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Card</span> item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(r)),e.createElement(j,{title:"带交互的卡片",id:"Demowithaction",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Title<span class="token punctuation">"</span></span>\n    <span class="token attr-name">action</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-link<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        有赞\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Card</span> item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(d)),e.createElement(j,{title:"嵌套卡片",id:"Demonested",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>外层卡片<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Card</span> content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nested<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>内层卡片<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Nested</span> card content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(k)),e.createElement(j,{title:"支持自定义样式",id:"Democustomstyle",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">bodyStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">\'#e5e5e5\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Custom</span> background<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(m)),e.createElement(j,{title:"加载中状态",id:"Demoloading",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Card Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Card</span> item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(h)),e.createElement(y,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td><code>node</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>action</td>\n<td>操作</td>\n<td><code>node</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>加载状态</td>\n<td><code>bool</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>卡片类型，现在有两种，普通和嵌套</td>\n<td><code>string</code></td>\n<td><code>\'normal\'</code></td>\n<td><code>\'nested\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>卡片容器自定义样式</td>\n<td><code>object</code></td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>bodyStyle</td>\n<td>内容区域自定义样式</td>\n<td><code>object</code></td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}},20713:(n,a,s)=>{"use strict";s.d(a,{Z:()=>u});var t=s(59312),e=s(24246),p=s(27378),o=s(60042),c=s.n(o),l=s(40937),i=s(31256),u=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.title,s=n.action,p=n.type,o=n.loading,u=n.style,r=n.children,d=n.className,k=n.bodyStyle,m=!(0,i.Z)(a),h=!(0,i.Z)(s);return(0,e.jsxs)("div",(0,t.pi)({className:c()("zent-card",d,{"zent-card--normal":"normal"===p,"zent-card--nested":"nested"===p}),style:u,"data-zv":"9.12.4"},{children:[(m||h)&&(0,e.jsxs)("div",(0,t.pi)({className:"zent-card-header","data-zv":"9.12.4"},{children:[m&&(0,e.jsx)("h3",(0,t.pi)({className:"zent-card-header__title","data-zv":"9.12.4"},{children:a}),void 0),h&&(0,e.jsx)("div",(0,t.pi)({className:"zent-card-header__action","data-zv":"9.12.4"},{children:s}),void 0)]}),void 0),(0,e.jsx)("div",(0,t.pi)({className:"zent-card-body",style:k,"data-zv":"9.12.4"},{children:o?(0,e.jsx)(l.Z.TextBlock,{rows:5},void 0):r}),void 0)]}),void 0)},a.defaultProps={type:"normal",style:{},bodyStyle:{},loading:!1,className:""},a}(p.Component)},40937:(n,a,s)=>{"use strict";s.d(a,{V:()=>g,Z:()=>y});var t=s(59312),e=s(24246),p=s(27378),o=s(60042),c=s.n(o),l=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.className,s=n.lineSpacing,p=n.animate,o=n.style,l={marginTop:s},i=c()("zent-placeholder-text-row","zent-placeholder-shape",{"zent-placeholder-shape--animate":p},a);return(0,e.jsx)("div",{className:i,style:(0,t.pi)((0,t.pi)({},l),o),"data-zv":"9.12.4"},void 0)},a.defaultProps={lineSpacing:"0.7em",animate:!0},a}(p.PureComponent),i=[[61.8,38],[30,25,44],[20,75],[33,16,20,27],[12,32,53],[45,12,42],[20,10,47,18],[14,47,37]],u=function(n){function a(a){var s,t=n.call(this,a)||this;return t.state={segments:(s=i,s[Math.floor(Math.random()*s.length)])},t}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.className,s=n.lineSpacing,p=n.animate,o=n.segments,l=n.style,i={marginTop:s},u=c()("zent-placeholder-text-row-dashed",a),r=c()("zent-placeholder-shape",{"zent-placeholder-shape--animate":p}),d=Array.isArray(o)?o:this.state.segments;return(0,e.jsx)("div",(0,t.pi)({className:u,style:(0,t.pi)((0,t.pi)({},i),l),"data-zv":"9.12.4"},{children:d.map((function(n,a){return(0,e.jsx)("div",(0,t.pi)({className:"zent-placeholder-text-row-dashed-segment",style:{width:n+"%",paddingLeft:0===a?0:"0.3em"},"data-zv":"9.12.4"},{children:(0,e.jsx)("div",{className:r,"data-zv":"9.12.4"},void 0)}),a)}))}),void 0)},a.defaultProps={lineSpacing:"0.7em",animate:!0},a}(p.PureComponent),r=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.className,s=n.style,t=n.animate,p=c()("zent-placeholder-shape",{"zent-placeholder-shape--animate":t},a);return(0,e.jsx)("div",{className:p,style:s,"data-zv":"9.12.4"},void 0)},a.defaultProps={style:{},animate:!0},a}(p.PureComponent),d=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.className,s=n.diameter,p=n.style,o=(0,t._T)(n,["className","diameter","style"]),l=c()("zent-placeholder-circle",a),i=(0,t.pi)({height:s,minWidth:s},p);return(0,e.jsx)(r,(0,t.pi)({className:l,style:i},o),void 0)},a.defaultProps={style:{},animate:!0,diameter:80},a}(p.PureComponent),k=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.className,s=n.width,p=n.height,o=n.style,l=(0,t._T)(n,["className","width","height","style"]),i=c()("zent-placeholder-rectangle",a),u=(0,t.pi)({minWidth:s,height:p},o);return(0,e.jsx)(r,(0,t.pi)({className:i,style:u},l),void 0)},a.defaultProps={style:{},animate:!0,width:80,height:80},a}(p.PureComponent),m=function(n){function a(){var a=null!==n&&n.apply(this,arguments)||this;return a.getRowStyle=function(n){var s=a.props.widths;return{width:s[n%s.length]+"%"}},a.getRows=function(){for(var n=a.props,s=n.rows,p=n.lineSpacing,o=n.animate,c=n.dashed,i=n.dashSegments,r=[],d=0;d<s;d++){var k=c?u:l,m={style:a.getRowStyle(d),lineSpacing:d?p:0,animate:o};c&&(m.segments=i[d%i.length]),r.push((0,e.jsx)(k,(0,t.pi)({},m),d))}return r},a}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.style,s=n.className,p=c()("zent-placeholder-text-block",s);return(0,e.jsx)("div",(0,t.pi)({className:p,style:(0,t.pi)((0,t.pi)({},a),{width:"100%"}),"data-zv":"9.12.4"},{children:this.getRows()}),void 0)},a.defaultProps={widths:[97,99,94,92,96,95,98,60],dashSegments:i,animate:!0,dashed:!0,lineSpacing:"0.7em"},a}(p.PureComponent),h=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.className,s=n.style,p=n.rows,o=n.shape,l=n.size,i=n.animate,u=n.dashed,r=n.widths,h=n.dashSegments,g=n.lineSpacing,y=c()("zent-placeholder-richtext-block",a),f={marginRight:10};return(0,e.jsxs)("div",(0,t.pi)({className:y,style:(0,t.pi)((0,t.pi)({},s),{display:"flex"}),"data-zv":"9.12.4"},{children:["circle"===o?(0,e.jsx)(d,{style:f,diameter:l,animate:i},void 0):(0,e.jsx)(k,{style:f,width:l,height:l,animate:i},void 0),(0,e.jsx)(m,{rows:p,animate:i,dashed:u,widths:r,dashSegments:h,lineSpacing:g},void 0)]}),void 0)},a.defaultProps={style:{},className:"",shape:"circle",animate:!0,dashed:!0,size:80},a}(p.PureComponent),g={TextRow:l,TextRowDashed:u,Circle:d,Rectangle:k,TextBlock:m,RichTextBlock:h},y=g},31256:(n,a,s)=>{"use strict";function t(n){return null==n}s.d(a,{Z:()=>t})}}]);