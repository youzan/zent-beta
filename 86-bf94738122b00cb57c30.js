(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{855:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return S});var t=s(28),p=s.n(t),o=s(29),c=s.n(o),e=s(30),u=s.n(e),l=s(31),i=s.n(l),k=s(43),r=s.n(k),d=s(32),f=s.n(d),g=s(24),m=s.n(g),y=s(707),h=s.n(y),b=s(0),N=s.n(b),v=s(175),E=s(126),C=function(){return N.a.createElement("div",null,N.a.createElement(E.i,{onClick:function(){return E.L.success("success")}},"success"),N.a.createElement(E.i,{onClick:function(){return E.L.error("error")}},"error"))},w=function(){return N.a.createElement("div",null,N.a.createElement(E.i,{onClick:function(){return E.L.config({duration:1e3})}},"Set global duration to 1s"),N.a.createElement(E.i,{onClick:function(){return E.L.config({duration:2e3})}},"2s"),N.a.createElement(E.i,{onClick:function(){return E.L.config({duration:3e3})}},"3s"),N.a.createElement("br",null),N.a.createElement("br",null),N.a.createElement(E.i,{onClick:function(){return E.L.success("success")}},"success"),N.a.createElement(E.i,{onClick:function(){return E.L.error("error")}},"error"))},B=function(){return N.a.createElement("div",null,N.a.createElement(E.i,{onClick:function(){return E.L.success("duration 1s",1e3)}},"duration 1s"))},z=function(){return N.a.createElement(E.i,{onClick:function(){E.L.success(N.a.createElement("div",null,N.a.createElement("span",{style:{color:"#f67"}},"color"),N.a.createElement("i",null,"italic"),N.a.createElement("b",null,"bold")))}},"custom notify content")},D=function(){function n(){alert("Notify has over")}return N.a.createElement(E.i,{onClick:function(){return E.L.success("callback when notify is finished",1e3,n)}},"Custom callback after Notify is finished")},j=function(){function n(){console.log("Callback has call")}return N.a.createElement("div",null,N.a.createElement(E.i,{onClick:function(){return E.L.success("Notify success",2e3,n)}},"Notify success"),N.a.createElement(E.i,{onClick:function(){return E.L.clear()}},"Clear"))};function _(n){return N.a.createElement(n.tag,h()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function L(n){return N.a.createElement(_,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function M(n){return N.a.createElement(_,{tag:"style",html:n.style})}var O=function(n){function a(){var n,s;p()(this,a);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return s=u()(this,(n=i()(a)).call.apply(n,[this].concat(o))),m()(r()(s),"state",{showCode:!1}),m()(r()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return f()(a,n),c()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return N.a.createElement("div",{className:"zandoc-react-demo"},N.a.createElement("div",{className:"zandoc-react-demo__preview"},p),N.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},N.a.createElement("div",{className:"zandoc-react-demo__title"},N.a.createElement("p",null,s||"")),N.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&N.a.createElement("pre",{className:"zandoc-react-demo__code"},N.a.createElement(_,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),S=function(n){function a(){return p()(this,a),u()(this,i()(a).apply(this,arguments))}return f()(a,n),c()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return N.a.createElement("div",{className:"zandoc-react-container",key:null},N.a.createElement(M,{style:""}),N.a.createElement(L,{html:'<h2 class="anchor-heading"><a href="#notify">¶</a><a href="javascript:void(0)" id="notify" class="anchor-point"></a>Notify</h2>\n<p>Display a notification at top of the viewport.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Display a brief message</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),N.a.createElement(O,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Notify<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'success\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},N.a.createElement(C)),N.a.createElement(O,{title:"Adjust the global default duration through Notify.config",id:"Demoglobalduration",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Notify<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Set global duration to 1s<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token punctuation">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>2s<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> duration<span class="token punctuation">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>3s<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'success\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},N.a.createElement(w)),N.a.createElement(O,{title:"Custom Notify Show Time",id:"Democustomshowtime",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Notify<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'duration 1s\'</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>duration 1s<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},N.a.createElement(B)),N.a.createElement(O,{title:"Custom Notify Content",id:"Democustomcontent",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Notify<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">customContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#f67\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span>italic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>bold<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>customContent<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>custom notify content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},N.a.createElement(z)),N.a.createElement(O,{title:"Custom callback after Notify is finished",id:"Democustomcallback",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Notify<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">closeCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'Notify has over\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'callback when notify is finished\'</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> closeCallback<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Custom callback after Notify is finished<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},N.a.createElement(D)),N.a.createElement(O,{title:"Clear all nofications in screen",id:"Democlear",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Notify<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">closeCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Callback has call\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Notify success\'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> closeCallback<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Notify success\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Clear<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},N.a.createElement(j)),N.a.createElement(L,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<ul>\n<li><code>Notify.success(text: node, duration?: number, callback?: () => ()): number</code></li>\n<li><code>Notify.error(text: node, duration?: number, callback?: () => ()): number</code></li>\n</ul>\n<p><code>Notify.success</code> and <code>Notify.error</code> return an id, which can be used by <code>Notify.clear(id)</code> to close the specific notify instance;</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>notify message</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>duration</td>\n<td>number</td>\n<td><code>2000</code></td>\n</tr>\n<tr>\n<td>callback</td>\n<td>customize callabck when notify closes</td>\n<td>func</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li><code>Notify.clear(number?: id): void</code></li>\n</ul>\n<p>If no <code>id</code> is passed to <code>Notify.clear</code>, it will close all notify instances that are active.</p>\n<ul>\n<li><code>Notify.config(options): void</code></li>\n</ul>\n<p><code>duration</code> is the only supported parameter in <code>options</code>, it is used to set <code>Notify</code> duration globally.</p>'}))}}]),a}(b.Component)}}]);