(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1033:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return j}));var t=s(911),e=s.n(t),p=s(912),o=s.n(p),c=s(570),l=s.n(c),u=s(913),i=s.n(u),r=s(914),k=s.n(r),m=s(915),d=s.n(m),h=s(916),g=s.n(h),f=s(917),y=s.n(f),v=s(918),b=s.n(v),E=s(0),C=s.n(E),w=s(152),I=s(169);function _(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=d()(n);if(a){var e=d()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return k()(this,s)}}var N=function(){function n(){var n=C.a.useState(!0),a=b()(n,2),s=a[0],t=a[1],e=C.a.useState("ime"),p=b()(e,2),o=p[0],c=p[1],l=function(n){c(n.target.value)};return C.a.createElement("div",{className:"ime-composition-demo"},C.a.createElement(I.IMEComposition,{enable:s},C.a.createElement(I.Input,{value:o,onChange:l}),C.a.createElement(I.Input,{value:o,onChange:l,type:"textarea"})),C.a.createElement(I.Button,{type:"primary",onClick:function(){return t(!s)}},s?"Disable":"Enable"," IMEComposition"))}return C.a.createElement(n,null)};function z(n){return C.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function x(n){return C.a.createElement(z,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function M(n){return C.a.createElement(z,{tag:"style",html:n.style})}var S=function(n){i()(s,n);var a=_(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(l()(n),"state",{showCode:!1}),g()(l()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return o()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return C.a.createElement("div",{className:"zandoc-react-demo"},C.a.createElement("div",{className:"zandoc-react-demo__preview"},e),C.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.a.createElement("div",{className:"zandoc-react-demo__title"},C.a.createElement("p",null,s||"")),C.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&C.a.createElement("pre",{className:"zandoc-react-demo__code"},C.a.createElement(z,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(E.Component),j=function(n){i()(s,n);var a=_(s);function s(){return e()(this,s),a.apply(this,arguments)}return o()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return C.a.createElement("div",{className:"zandoc-react-container",key:null},C.a.createElement(M,{style:".ime-composition-demo {\n\tdisplay: inline-flex;\n\tflex-direction: column;\n}\n\n.ime-composition-demo > * {\n\tmargin-bottom: 10px;\n}"}),C.a.createElement(x,{html:'<h2 class="anchor-heading"><a href="#imecomposition">¶</a><a href="javascript:void(0)" id="imecomposition" class="anchor-point"></a>IMEComposition</h2>\n<p><code>IMEComposition</code>\'s <code>Input</code> child component will emit <code>onChange</code> event after IME complete input string instead of every time you press keyboard.</p>\n<p>PS：Only controlled component will be handled.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),C.a.createElement(S,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">IMEComposition</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Input</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Simple</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>enable<span class="token punctuation">,</span> setEnable<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token string">\'ime\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">onInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setText</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ime-composition-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IMEComposition</span></span> <span class="token attr-name">enable</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>enable<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onInputChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onInputChange<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">IMEComposition</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token function">setEnable</span><span class="token punctuation">(</span><span class="token operator">!</span>enable<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>enable <span class="token operator">?</span> <span class="token string">\'Disable\'</span> <span class="token operator">:</span> <span class="token string">\'Enable\'</span><span class="token punctuation">}</span> <span class="token maybe-class-name">IMEComposition</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(N)),C.a.createElement(x,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>enable</td>\n<td>is enable ime composition</td>\n<td>bool</td>\n<td>No</td>\n<td>false</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),s}(E.Component)}}]);