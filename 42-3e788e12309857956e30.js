(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{558:function(a,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return b}));var t=s(21),e=s.n(t),p=s(476),c=s.n(p),o=s(0),l=s.n(o),u=s(42),r=function(){return l.a.createElement(u.j,{breads:[{name:"首页",href:"//www.youzan.com"},{name:"应用中心",href:"//www.youzan.com"},{name:"营销中心"}]})},i=function(){return l.a.createElement(u.j,null,l.a.createElement(u.j.Item,{name:"首页",href:"//www.youzan.com"}),l.a.createElement(u.j.Item,{name:"应用中心",href:"//www.youzan.com",className:"zent-demo-bread"}),l.a.createElement(u.j.Item,{name:"营销中心"}))},k=function(){return l.a.createElement(u.j,null,l.a.createElement(u.j.Item,null,l.a.createElement("a",{href:"//www.youzan.com"},"首页")),l.a.createElement(u.j.Item,null,l.a.createElement("span",null,"应用中心")),l.a.createElement("span",null,"营销中心"))};function m(a){return l.a.createElement(a.tag,c()({},a.attributes,{dangerouslySetInnerHTML:{__html:a.html}}))}function d(a){return l.a.createElement(m,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function h(a){return l.a.createElement(m,{tag:"style",html:a.style})}class g extends o.Component{constructor(...a){super(...a),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var a=this.state.showCode,n=this.props,s=n.title,t=n.src,e=n.children;return l.a.createElement("div",{className:"zandoc-react-demo"},l.a.createElement("div",{className:"zandoc-react-demo__preview"},e),l.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},l.a.createElement("div",{className:"zandoc-react-demo__title"},l.a.createElement("p",null,s||"")),l.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(a?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),a&&l.a.createElement("pre",{className:"zandoc-react-demo__code"},l.a.createElement(m,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}class b extends o.Component{componentDidMount(){var a=location.hash;if(a){var n=document.querySelector('a[href="'.concat(a,'"]'));n&&Object(u.mc)(document.documentElement,0,function a(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),a(n.parentNode,s);return s}(n,-9))}}render(){return l.a.createElement("div",{className:"zandoc-react-container",key:null},l.a.createElement(h,{style:""}),l.a.createElement(d,{html:'<h2 class="anchor-heading"><a href="#breadcrumb-mian-bao-xie">¶</a><a href="javascript:void(0)" id="breadcrumb-mian-bao-xie" class="anchor-point"></a>Breadcrumb 面包屑</h2>\n<p>面包屑，提供一个有层次的导航结构, 并标明当前位置。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>系统拥有超过两级以上的层级结构。</li>\n<li>需要告知用户『你在哪里』。</li>\n<li>需要向上导航的功能。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),l.a.createElement(g,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Breadcrumb</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'首页\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'应用中心\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'营销中心\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">breads</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dataList<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},l.a.createElement(r)),l.a.createElement(g,{title:"可以直接调用 Breadcrumb.Item 组件",id:"Demoitem",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Alert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>应用中心<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-demo-bread<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>营销中心<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},l.a.createElement(i)),l.a.createElement(g,{title:"用户自定义 Breadcrumb.Item 的内容，或者自定义面包屑的所有内容",id:"Democustomitem",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Alert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>应用中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>营销中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},l.a.createElement(k)),l.a.createElement(d,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#breadcrumb">¶</a><a href="javascript:void(0)" id="breadcrumb" class="anchor-point"></a>Breadcrumb</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>breads</td>\n<td>数据</td>\n<td>array</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#item">¶</a><a href="javascript:void(0)" id="item" class="anchor-point"></a>Item</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>内容</td>\n<td>string or React node</td>\n<td>-</td>\n</tr>\n<tr>\n<td>href</td>\n<td>链接</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>'}))}}}}]);