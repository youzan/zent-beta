(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1020:function(n,a,t){"use strict";t.r(a),t.d(a,"default",function(){return B});var s=t(2),e=t.n(s),p=t(3),o=t.n(p),c=t(10),l=t.n(c),u=t(4),i=t.n(u),r=t(8),k=t.n(r),d=t(5),m=t.n(d),g=t(6),h=t.n(g),f=t(7),v=t.n(f),E=t(0),y=t.n(E),b=t(148),w=t(149),N=function(){var n=function(n){function a(){return i()(this,a),m()(this,h()(a).apply(this,arguments))}return v()(a,n),k()(a,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(w.f,{title:"有赞微商城",tooltip:y.a.createElement("span",null,"test"),content:y.a.createElement("a",{href:"/"},"content"),position:"top-center"}),y.a.createElement("br",null),y.a.createElement(w.f,{className:"test-class",title:"有赞微商城",position:"top-center"},y.a.createElement("a",{href:"/"},"children")),y.a.createElement("br",null),y.a.createElement(w.f,{title:"有赞微商城",tooltip:y.a.createElement("div",null,y.a.createElement("p",null,"test1"),y.a.createElement("p",null,"test2")),content:y.a.createElement("a",{href:"/"},"content"),position:"top-center",childAlign:"right"}),y.a.createElement("br",null),y.a.createElement(w.f,{className:"test-class",title:"有赞微商城",tooltip:y.a.createElement("span",null,"test"),position:"top-center",childAlign:"right"},y.a.createElement("a",{href:"/"},"children")))}}]),a}(y.a.Component);return y.a.createElement(n,null)};function _(n){return y.a.createElement(n.tag,l()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function z(n){return y.a.createElement(_,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function C(n){return y.a.createElement(_,{tag:"style",html:n.style})}var H=function(n){function a(){var n,t;i()(this,a);for(var s=arguments.length,p=new Array(s),c=0;c<s;c++)p[c]=arguments[c];return t=m()(this,(n=h()(a)).call.apply(n,[this].concat(p))),o()(e()(e()(t)),"state",{showCode:!1}),o()(e()(e()(t)),"toggle",function(){t.setState({showCode:!t.state.showCode})}),t}return v()(a,n),k()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,t||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(_,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(E.Component),B=function(n){function a(){return i()(this,a),m()(this,h()(a).apply(this,arguments))}return v()(a,n),k()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(C,{style:""}),y.a.createElement(z,{html:'<h2 class="anchor-heading"><a href="#blockheader-biao-ti">¶</a><a href="javascript:void(0)" id="blockheader-biao-ti" class="anchor-point"></a>BlockHeader 标题</h2>\n<p>这是一个模块标题。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(H,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockHeader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>有赞微商城<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          content<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>有赞微商城<span class="token punctuation">"</span></span>\n          <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-center<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>children<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BlockHeader</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>有赞微商城<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>test1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>test2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">}</span></span>\n          <span class="token attr-name">content={&lt;a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          childAlign<span class="token operator">=</span><span class="token string">"right"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockHeader</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-class<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>有赞微商城<span class="token punctuation">"</span></span>\n          <span class="token attr-name">tooltip={&lt;span</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          position<span class="token operator">=</span><span class="token string">"top-center"</span>\n          childAlign<span class="token operator">=</span><span class="token string">"right"</span>\n        <span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>children<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BlockHeader</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(N)),y.a.createElement(z,{html:"<h2 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h2>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td>string</td>\n<td>''</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td>pop显示内容</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>content</td>\n<td>自定义content</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>childAlign</td>\n<td>子元素对齐方式</td>\n<td>string</td>\n<td><code>'left'</code></td>\n<td><code>'left'、'right'</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>pop posotion</td>\n<td>string</td>\n<td>'top-right'</td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(E.Component)}}]);