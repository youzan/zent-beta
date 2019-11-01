(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{917:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return j});var t=s(33),e=s.n(t),p=s(34),o=s.n(p),c=s(35),l=s.n(c),u=s(36),k=s.n(u),r=s(45),i=s.n(r),d=s(37),g=s.n(d),m=s(38),h=s.n(m),b=s(773),f=s.n(b),y=s(0),T=s.n(y),v=s(195),E=s(136),C=function(){return T.a.createElement("div",null,T.a.createElement(E.xb,null,"tag content"),T.a.createElement(E.xb,null,T.a.createElement("a",{href:"#"},"link")))},w=function(){return T.a.createElement("div",null,T.a.createElement(E.xb,{theme:"grey"},"grey"),T.a.createElement(E.xb,{theme:"red"},"red"),T.a.createElement(E.xb,{theme:"green"},"green"),T.a.createElement(E.xb,{theme:"yellow"},"yellow"),T.a.createElement(E.xb,{theme:"blue"},"blue"),T.a.createElement(E.xb,{theme:"grey",outline:!0},"grey"),T.a.createElement(E.xb,{theme:"red",outline:!0},"red"),T.a.createElement(E.xb,{theme:"green",outline:!0},"green"),T.a.createElement(E.xb,{theme:"yellow",outline:!0},"yellow"),T.a.createElement(E.xb,{theme:"blue",outline:!0},"blue"))},x=function(){return T.a.createElement("div",null,T.a.createElement(E.xb,{style:{borderColor:"#9370db",backgroundColor:"#9370db"}},"#9370db"),T.a.createElement(E.xb,{style:{borderColor:"#9370db",color:"#9370db"},outline:!0},"#9370db"),T.a.createElement(E.xb,{style:{borderColor:"#87d068",backgroundColor:"#cfefdf",color:"#00a854"}},"custom color"),T.a.createElement(E.xb,{style:{borderColor:"#778899",backgroundColor:"#778899"},rounded:!1},"rectangle"),T.a.createElement(E.xb,{style:{borderColor:"#48d1cc",backgroundColor:"#48d1cc",fontSize:14}},"Large size"))},z=function(){return T.a.createElement("div",null,T.a.createElement(E.xb,{closable:!0,onClose:function(n){E.bb.success("Close tag")},outline:!0},"custom color"),T.a.createElement(E.xb,{closable:!0,onClose:function(n){E.bb.success("Close tag2")}},"rectangle"),T.a.createElement(E.xb,{theme:"grey",closable:!0,closeButtonStyle:{color:"#969799"}},"custom close button color"))};function N(n){return T.a.createElement(n.tag,f()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return T.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return T.a.createElement(N,{tag:"style",html:n.style})}var D=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=l()(this,(n=k()(a)).call.apply(n,[this].concat(p))),h()(i()(s),"state",{showCode:!1}),h()(i()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return g()(a,n),o()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return T.a.createElement("div",{className:"zandoc-react-demo"},T.a.createElement("div",{className:"zandoc-react-demo__preview"},e),T.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},T.a.createElement("div",{className:"zandoc-react-demo__title"},T.a.createElement("p",null,s||"")),T.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&T.a.createElement("pre",{className:"zandoc-react-demo__code"},T.a.createElement(N,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),j=function(n){function a(){return e()(this,a),l()(this,k()(a).apply(this,arguments))}return g()(a,n),o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return T.a.createElement("div",{className:"zandoc-react-container",key:null},T.a.createElement(_,{style:".zent-tag{\n\tmargin: 0 10px 5px 0;\n}"}),T.a.createElement(S,{html:'<h2 class="anchor-heading"><a href="#tag">¶</a><a href="javascript:void(0)" id="tag" class="anchor-point"></a>Tag</h2>\n<p>Tag is suitable for marking and sorting。</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Tag is usually used as special marks or sorting marks.</li>\n<li>You can add multiple tags for one item.</li>\n<li>The text in tag should not more than four words.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),T.a.createElement(D,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span>tag content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(C)),T.a.createElement(D,{title:"Two styles and five default colors",id:"Demostyle",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>grey<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      grey\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      red\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      green\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      yellow\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      blue\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(w)),T.a.createElement(D,{title:"Support custom color, rectangle style and custom size",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      #9370db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      outline\n    <span class="token operator">></span>\n      #9370db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#87d068\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#cfefdf\'</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#00a854\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      custom color\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      rounded<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      rectangle\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        fontSize<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      Large size\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(x)),T.a.createElement(D,{title:"Support the callback function that is trigger",id:"Demoonclose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback2</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback<span class="token punctuation">}</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      custom color\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback2<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      rectangle\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag theme<span class="token operator">=</span><span class="token string">"grey"</span> closable closeButtonStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#969799\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n      custom close button color\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(z)),T.a.createElement(S,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>theme</td>\n<td>The preset color of tag</td>\n<td>string</td>\n<td><code>'red'</code></td>\n<td><code>'red'</code>\n \n|\n \n<code>'green'</code>\n \n|\n \n<code>'yellow'</code>\n \n|\n \n<code>'blue'</code>\n \n|\n \n<code>'grey'</code></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>The style with colorful border and transparent backgound.</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>Whether the tag is rounded or not</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>Whether the tag can be closed</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>The callback function that is trigged when the tag is closed</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>Tag is visible</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeButtonStyle</td>\n<td>Style of close button</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>The custom style</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>All props are optional, a tag can be closed by using <code>visible</code> and <code>onClose</code> together.</p>\n</blockquote>"}))}}]),a}(y.Component)}}]);