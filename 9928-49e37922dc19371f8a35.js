(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[9928],{79928:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>f});var t=s(73450),e=s(27378),p=s(57318),c=s(25802),o=s(24246);function l(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function r(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var u=function(){return(0,o.jsx)(c.a,{breads:[{name:"首页",href:"//www.youzan.com"},{name:"应用中心",href:"//www.youzan.com"},{name:"营销中心"}]})},i=function(){return(0,o.jsxs)(c.a,{children:[(0,o.jsx)(c.a.Item,{name:"首页",href:"//www.youzan.com"}),(0,o.jsx)(c.a.Item,{name:"应用中心",href:"//www.youzan.com",className:"zent-demo-bread"}),(0,o.jsx)(c.a.Item,{name:"营销中心"})]})},d=function(){return(0,o.jsxs)(c.a,{children:[(0,o.jsx)(c.a.Item,{children:(0,o.jsx)("a",{href:"//www.youzan.com",children:"首页"})}),(0,o.jsx)(c.a.Item,{children:(0,o.jsx)("span",{children:"应用中心"})}),(0,o.jsx)("span",{children:"营销中心"})]})};function k(n){return(0,o.jsx)(n.tag,r(r({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return(0,o.jsx)(k,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function h(n){return(0,o.jsx)(k,{tag:"style",html:n.style})}function g(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),g(n.parentNode,a);return a}class b extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return(0,o.jsxs)("div",{className:"zandoc-react-demo",children:[(0,o.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,o.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,o.jsx)("div",{className:"zandoc-react-demo__title",children:(0,o.jsx)("p",{children:s||""})}),(0,o.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,o.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,o.jsx)(k,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class f extends e.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,p.l)(document.documentElement,0,g(a,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(h,{style:""}),e.createElement(m,{html:'<h2 class="anchor-heading"><a href="#breadcrumb-mian-bao-xie">¶</a><a href="javascript:void(0)" id="breadcrumb-mian-bao-xie" class="anchor-point"></a>Breadcrumb 面包屑</h2>\n<p>面包屑，提供一个有层次的导航结构, 并标明当前位置。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>系统拥有超过两级以上的层级结构。</li>\n<li>需要告知用户『你在哪里』。</li>\n<li>需要向上导航的功能。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(b,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Breadcrumb</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'首页\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'应用中心\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'营销中心\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">breads</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dataList<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(b,{title:"可以直接调用 Breadcrumb.Item 组件",id:"Demoitem",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Alert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>应用中心<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-demo-bread<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>营销中心<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},e.createElement(i)),e.createElement(b,{title:"用户自定义 Breadcrumb.Item 的内容，或者自定义面包屑的所有内容",id:"Democustomitem",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Alert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>应用中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>营销中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},e.createElement(d)),e.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#breadcrumb">¶</a><a href="javascript:void(0)" id="breadcrumb" class="anchor-point"></a>Breadcrumb</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>breads</td>\n<td>数据</td>\n<td>array</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#item">¶</a><a href="javascript:void(0)" id="item" class="anchor-point"></a>Item</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>内容</td>\n<td>string or React node</td>\n<td>-</td>\n</tr>\n<tr>\n<td>href</td>\n<td>链接</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>'}))}}},25802:(n,a,s)=>{"use strict";s.d(a,{a:()=>r});var t=s(59312),e=s(24246),p=s(27378),c=s(60042),o=s.n(c),l=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.href,s=n.name,p=(0,t._T)(n,["href","name"]);return this.props.children?this.props.children:a?(0,e.jsx)("a",(0,t.pi)({},p,{href:a,"data-zv":"9.12.4"},{children:s}),void 0):(0,e.jsx)("span",(0,t.pi)({},p,{"data-zv":"9.12.4"},{children:s}),void 0)},a}(p.Component),r=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.className,s=n.children,c=void 0===s?null:s,r=n.breads;return(0,e.jsxs)("div",(0,t.pi)({className:o()("zent-breadcrumb",a),"data-zv":"9.12.4"},{children:[c,r&&r.length>0&&r.map((function(n,a){return(0,p.createElement)(l,(0,t.pi)({},n,{key:a}))}))]}),void 0)},a.defaultProps={className:"",breads:[]},a.Item=l,a}(p.Component)}}]);