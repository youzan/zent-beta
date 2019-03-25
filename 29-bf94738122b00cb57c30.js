(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{771:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return S});var t=s(28),e=s.n(t),p=s(29),o=s.n(p),c=s(30),l=s.n(c),u=s(31),r=s.n(u),i=s(43),k=s.n(i),d=s(32),m=s.n(d),g=s(24),f=s.n(g),h=s(707),E=s.n(h),v=s(0),y=s.n(v),b=s(175),z=s(126),w=function(){return y.a.createElement(z.b,null,"公告内容")},A=function(){return y.a.createElement(z.b,null,y.a.createElement(z.y,{type:"error-circle"}),y.a.createElement("span",null,"警告：交易过程中的短信通知，将通过营销中心的“消息推送”功能来发送。"),y.a.createElement("a",{href:"",onClick:function(n){return n.preventDefault()}},"立即订购"))},N=function(){return y.a.createElement("div",{className:"zent-alert-example"},y.a.createElement(z.b,{type:"info"},"这个是默认的 info 样式。"),y.a.createElement(z.b,{type:"warning"},"这个是 warning 样式。"),y.a.createElement(z.b,{type:"danger"},"这个是 danger 样式。"))},x=function(){return y.a.createElement("div",{className:"zent-alert-example"},y.a.createElement(z.b,null,"这个是正常尺寸的公告。"),y.a.createElement(z.b,{size:"large"},y.a.createElement("p",{className:"text"},"这个是大尺寸"),y.a.createElement("p",null,"交易过程中的短信通知，将通过营销中心的“消息推送”功能来发送。"),y.a.createElement("br",null),y.a.createElement("p",null,"官方咨询电话：0571-88888888")))},D=function(){return y.a.createElement(z.b,{type:"warning",rounded:!0},"这个公告是有圆角的。")},_=function(){return y.a.createElement(z.b,{size:"large",closable:!0},y.a.createElement("div",{className:"content"},y.a.createElement("p",{className:"text"},"交易过程中的短信通知，将通过营销中心的“消息推送”功能来发送。"),y.a.createElement("p",null,"官方咨询电话：0571-88888888")),y.a.createElement("br",null),y.a.createElement(z.i,null,"了解详情"))},C=function(){return y.a.createElement(z.b,{type:"info",closable:!0,onClose:function(){return z.cb.alert({content:"公告关闭了"})}},"这个公告关闭时有回调函数。")};function M(n){return y.a.createElement(n.tag,E()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function O(n){return y.a.createElement(M,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return y.a.createElement(M,{tag:"style",html:n.style})}var R=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=l()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(k()(s),"state",{showCode:!1}),f()(k()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return m()(a,n),o()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,s||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(M,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),S=function(n){function a(){return e()(this,a),l()(this,r()(a).apply(this,arguments))}return m()(a,n),o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(j,{style:".zenticon-error-circle {\n\tcolor: #FF4343;\n\tmargin-right: 5px;\n}\n\n.zent-alert-example {\n    padding-right: 32px;\n}\n\n.zent-alert-example .zent-alert {\n        margin-bottom: 20px\n    }\n\n.zent-alert-example .zent-alert:last-child {\n\tmargin-bottom: 0;\n}\n\n.zent-alert-example .zent-alert a {\n            color: #3388FF;\n            margin-left: 10px;\n}\n\n.zent-alert .text {\n\t\tmargin-bottom: 5px;\n\t}"}),y.a.createElement(O,{html:'<h2 class="anchor-heading"><a href="#alert-gong-gao">¶</a><a href="javascript:void(0)" id="alert-gong-gao" class="anchor-point"></a>Alert 公告</h2>\n<p>公告，提供一个醒目的提示信息。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>内容文字尽可能精简, 减少阅读障碍。</li>\n<li>公告类按钮不要多于两个, 保持逻辑简单。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.a.createElement(R,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span><span class="token punctuation">></span></span>公告内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(w)),y.a.createElement(R,{title:"公告内容可以是非字符串",id:"Democontent",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error-circle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>警告：交易过程中的短信通知，将通过营销中心的“消息推送”功能来发送。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>立即订购<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(A)),y.a.createElement(R,{title:"三种样式：info, warning 和 danger",id:"Demostyles",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-alert-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这个是默认的 info 样式。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这个是 warning 样式。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这个是 danger 样式。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(N)),y.a.createElement(R,{title:"公告有两种大小",id:"Demosizes",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-alert-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span><span class="token punctuation">></span></span>这个是正常尺寸的公告。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这个是大尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>交易过程中的短信通知，将通过营销中心的“消息推送”功能来发送。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>官方咨询电话：<span class="token number">0571</span><span class="token operator">-</span><span class="token number">88888888</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(x)),y.a.createElement(R,{title:"支持圆角样式",id:"Demoround",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">rounded</span><span class="token punctuation">></span></span>这个公告是有圆角的。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(D)),y.a.createElement(R,{title:"关闭按钮",id:"Democlose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>交易过程中的短信通知，将通过营销中心的“消息推送”功能来发送。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>官方咨询电话：<span class="token number">0571</span><span class="token operator">-</span><span class="token number">88888888</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>了解详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(_)),y.a.createElement(R,{title:"关闭时的回调",id:"Democallback",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Sweetalert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Alert\n    type<span class="token operator">=</span><span class="token string">"info"</span>\n    closable\n    onClose<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Sweetalert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token punctuation">:</span> <span class="token string">\'公告关闭了\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    这个公告关闭时有回调函数。\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(C)),y.a.createElement(O,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>警告提示的样式</td>\n<td>string</td>\n<td><code>'info'</code></td>\n<td><code>'info'</code>\n, \n<code>'warning'</code>\n, \n<code>'danger'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>alert 的大小</td>\n<td>string</td>\n<td><code>'normal'</code></td>\n<td><code>'normal'</code>\n, \n<code>'large'</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>是否圆角</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭时的回调</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(v.Component)}}]);