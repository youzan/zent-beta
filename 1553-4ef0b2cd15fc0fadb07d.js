(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[1553],{98770:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>f});var t=s(73450),e=s(27378),o=s(57318),p=s(67801),c=s(24246);function l(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function r(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var i=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(p.r,{href:"https://youzan.com",target:"_blank",children:"有赞首页"}),(0,c.jsx)(p.r,{href:"https://youzan.com",disabled:!0,children:"有赞首页"})]})},u=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(p.r,{href:"https://youzan.com",target:"_blank",weak:!0,children:"有赞首页"}),(0,c.jsx)(p.r,{href:"https://youzan.com",disabled:!0,weak:!0,children:"有赞首页"})]})};function k(n){return(0,c.jsx)(n.tag,r(r({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function d(n){return(0,c.jsx)(k,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function m(n){return(0,c.jsx)(k,{tag:"style",html:n.style})}function h(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),h(n.parentNode,a);return a}class g extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return(0,c.jsxs)("div",{className:"zandoc-react-demo",children:[(0,c.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,c.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,c.jsx)("div",{className:"zandoc-react-demo__title",children:(0,c.jsx)("p",{children:s||""})}),(0,c.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,c.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,c.jsx)(k,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class f extends e.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,o.l)(document.documentElement,0,h(a,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(m,{style:".zent-link {\n    margin-left: 10px;\n  }\n\n.zent-link {\n    margin-left: 10px;\n  }"}),e.createElement(d,{html:'<h2 class="anchor-heading"><a href="#link">¶</a><a href="javascript:void(0)" id="link" class="anchor-point"></a>Link</h2>\n<p>超链接，是对原生 <code>a</code> 标签的一个样式封装，同时支持禁用链接。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(g,{title:"强文字链接",id:"Demo1",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Link</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>有赞首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n      有赞首页\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(i)),e.createElement(g,{title:"弱文字链接",id:"Demo2",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Link</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">weak</span><span class="token punctuation">></span></span>有赞首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">weak</span><span class="token punctuation">></span></span>\n      有赞首页\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(d,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>支持 <code>&#x3C;a></code> 的所有属性。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td><code>boolean</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>weak</td>\n<td>是否弱文字连接</td>\n<td><code>boolean</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>'}))}}},67801:(n,a,s)=>{"use strict";s.d(a,{r:()=>r});var t=s(93646),e=s(24246),o=s(60042),p=s.n(o),c=s(27378),l=s(1348),r=(0,c.forwardRef)((function(n,a){var s=(0,c.useContext)(l.d),o=n.className,r=n.disabled,u=void 0===r?s.value:r,k=n.weak,d=void 0!==k&&k,m=n.onClick,h=(0,t._T)(n,["className","disabled","weak","onClick"]);return(0,e.jsx)("a",(0,t.pi)({},h,{className:p()(o,"zent-link",{"zent-link--disabled":u,"zent-link--weak":d}),ref:a,onClick:u?i:m,"data-zv":"10.0.0-beta.1"}),void 0)}));function i(n){n.preventDefault(),n.stopPropagation()}r.displayName="Link"}}]);