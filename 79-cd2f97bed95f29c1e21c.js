(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{984:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return N});var t=s(4),p=s.n(t),e=s(8),o=s.n(e),c=s(5),l=s.n(c),u=s(6),r=s.n(u),i=s(7),k=s.n(i),d=s(2),g=s.n(d),m=s(3),h=s.n(m),b=s(10),f=s.n(b),F=s(0),C=s.n(F),v=s(148),w=s(149),y=function(){var n=w.A.Row,a=w.A.Col;return C.a.createElement("div",{className:"layout-demo-basic"},C.a.createElement(n,null,C.a.createElement(a,{span:24},"Col 24")),C.a.createElement(n,null,C.a.createElement(a,{span:8},"Col 8"),C.a.createElement(a,{span:8},"Col 8"),C.a.createElement(a,{span:8},"Col 8")),C.a.createElement(n,null,C.a.createElement(a,{span:8},"Col 8"),C.a.createElement(a,{span:8,offset:8},"Col 8, Offset 8")),C.a.createElement(n,null,C.a.createElement(a,{span:4},"Col 4"),C.a.createElement(a,{span:4,offset:4},"Col 4, Offset 4"),C.a.createElement(a,{span:4,offset:4},"Col 4, Offset 4")))};function E(n){return C.a.createElement(n.tag,f()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return C.a.createElement(E,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return C.a.createElement(E,{tag:"style",html:n.style})}var _=function(n){function a(){var n,s;p()(this,a);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return s=l()(this,(n=r()(a)).call.apply(n,[this].concat(e))),h()(g()(g()(s)),"state",{showCode:!1}),h()(g()(g()(s)),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return k()(a,n),o()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return C.a.createElement("div",{className:"zandoc-react-demo"},C.a.createElement("div",{className:"zandoc-react-demo__preview"},p),C.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.a.createElement("div",{className:"zandoc-react-demo__title"},C.a.createElement("p",null,s||"")),C.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&C.a.createElement("pre",{className:"zandoc-react-demo__code"},C.a.createElement(E,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(F.Component),N=function(n){function a(){return p()(this,a),l()(this,r()(a).apply(this,arguments))}return k()(a,n),o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return C.a.createElement("div",{className:"zandoc-react-container",key:null},C.a.createElement(z,{style:".layout-demo-basic .zent-row {\n\t    background: linear-gradient(90deg, #F5F5F5 4.16666667%, rgba(0, 0, 0, 0) 4.16666667%, rgba(0, 0, 0, 0) 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 0) 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, rgba(0, 0, 0, 0) 20.83333333%, rgba(0, 0, 0, 0) 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, rgba(0, 0, 0, 0) 29.16666667%, rgba(0, 0, 0, 0) 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, rgba(0, 0, 0, 0) 45.83333333%, rgba(0, 0, 0, 0) 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, rgba(0, 0, 0, 0) 54.16666667%, rgba(0, 0, 0, 0) 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, rgba(0, 0, 0, 0) 70.83333333%, rgba(0, 0, 0, 0) 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, rgba(0, 0, 0, 0) 79.16666667%, rgba(0, 0, 0, 0) 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, rgba(0, 0, 0, 0) 95.83333333%);\n\t}\n\t.layout-demo-basic .zent-row > div {\n\t    padding: 40px 0;\n\t    background: rgba(0, 0, 222, 0.5);\n\t    color: #fff;\n\t    text-align: center;\n\t}\n\t.layout-demo-basic .zent-row > div:nth-child(even) {\n\t    background: rgba(0, 0, 222, 0.6);\n\t}"}),C.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#layout-bu-ju">¶</a><a href="javascript:void(0)" id="layout-bu-ju" class="anchor-point"></a>Layout 布局</h2>\n<p>24栅格布局组件</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),C.a.createElement(_,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token operator">=</span> Layout\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>layout-demo-basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">24</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token punctuation">,</span> Offset <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">4</span><span class="token punctuation">,</span> Offset <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">4</span><span class="token punctuation">,</span> Offset <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(y)),C.a.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#row">¶</a><a href="javascript:void(0)" id="row" class="anchor-point"></a>Row</h4>\n<table class="table">\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>额外的样式名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>UI 前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#col">¶</a><a href="javascript:void(0)" id="col" class="anchor-point"></a>Col</h4>\n<table class="table">\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>span</td>\n<td>col所占的栅格数</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>col左偏移的栅格数</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外的样式名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>UI 前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(F.Component)}}]);