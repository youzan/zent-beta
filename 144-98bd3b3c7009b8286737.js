(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{622:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return j}));var t=s(21),p=s.n(t),e=s(0),o=s(1),c=s.n(o),l=s(27);function u(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){p()(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var r=function(){return Object(e.jsxs)("div",{children:[Object(e.jsx)("h3",{children:"横向"}),Object(e.jsx)(l.cc.Legend,{children:"样例"}),Object(e.jsxs)(l.cc,{type:"horizontal",children:[Object(e.jsx)(l.cc.Item,{label:"Time 1"}),Object(e.jsx)(l.cc.Item,{label:"Time 2",tip:"hello"}),Object(e.jsx)(l.cc.Item,{label:"Time 3"}),Object(e.jsx)(l.cc.Item,{size:0,label:"自定义长度"})]}),Object(e.jsx)("h3",{children:"纵向"}),Object(e.jsx)(l.cc.Legend,{children:"样例"}),Object(e.jsxs)(l.cc,{type:"vertical",children:[Object(e.jsx)(l.cc.Item,{label:"Time 1"}),Object(e.jsx)(l.cc.Item,{label:"Time 2",tip:"hello"}),Object(e.jsx)(l.cc.Item,{label:"Time 3"}),Object(e.jsx)(l.cc.Item,{label:"不显示圆点，自定义颜色",showDot:!1,lineColor:"red"}),Object(e.jsx)(l.cc.Item,{label:"不显示标签",showLabel:!1}),Object(e.jsx)(l.cc.Item,{label:"自定义圆点颜色",dotColor:"#5197FF"}),Object(e.jsx)(l.cc.Item,{size:0,label:"自定义长度"})]})]})},k=function(){return Object(e.jsx)("div",{children:Object(e.jsx)(l.cc,{type:"horizontal",timeline:["hello","world",{label:"blue",dotColor:"#5197FF"},{label:"red",lineColor:"#E70000"},{label:"color",color:"#E70000"}]})})},d=function(){var n=[{label:"online",color:"#00b90e",percent:.3},{label:"unknown",percent:.2,showDot:!1,showLabel:!1},{label:"offline",color:"#E70000",percent:.5}];class a extends c.a.Component{constructor(...n){super(...n),p()(this,"state",{size:500}),p()(this,"onChange",n=>{this.setState({size:n})})}render(){var a=this.state.size;return Object(e.jsxs)("div",{children:[Object(e.jsx)(l.yb,{value:a,onChange:this.onChange,showStepper:!0}),Object(e.jsx)(l.cc,{size:a,timeline:n})]})}}return Object(e.jsx)(a,{})};function m(n){return Object(e.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return Object(e.jsx)(m,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return Object(e.jsx)(m,{tag:"style",html:n.style})}class b extends o.Component{constructor(...n){super(...n),p()(this,"state",{showCode:!1}),p()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return Object(e.jsxs)("div",{className:"zandoc-react-demo",children:[Object(e.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),Object(e.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(e.jsx)("div",{className:"zandoc-react-demo__title",children:Object(e.jsx)("p",{children:s||""})}),Object(e.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(e.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(e.jsx)(m,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class j extends o.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(l.tc)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return c.a.createElement("div",{className:"zandoc-react-container",key:null},c.a.createElement(g,{style:""}),c.a.createElement(h,{html:'<h2 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h2>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),c.a.createElement(b,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Timeline</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>横向<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>样例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义长度<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>纵向<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>样例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline.Legend</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>不显示圆点，自定义颜色<span class="token punctuation">"</span></span> <span class="token attr-name">showDot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>不显示标签<span class="token punctuation">"</span></span> <span class="token attr-name">showLabel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义圆点颜色<span class="token punctuation">"</span></span> <span class="token attr-name">dotColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#5197FF<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline.Item</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义长度<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Timeline</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},c.a.createElement(r)),c.a.createElement(b,{title:"数组",id:"Demoarray",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Timeline</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'hello\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'world\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n    dotColor<span class="token operator">:</span> <span class="token string">\'#5197FF\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n    lineColor<span class="token operator">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'color\'</span><span class="token punctuation">,</span>\n    color<span class="token operator">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},c.a.createElement(k)),c.a.createElement(b,{title:"动态大小",id:"Demodynamic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Timeline</span><span class="token punctuation">,</span> <span class="token maybe-class-name">NumberInput</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'online\'</span><span class="token punctuation">,</span>\n    color<span class="token operator">:</span> <span class="token string">\'#00b90e\'</span><span class="token punctuation">,</span>\n    percent<span class="token operator">:</span> <span class="token number">0.3</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'unknown\'</span><span class="token punctuation">,</span>\n    percent<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>\n    showDot<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    showLabel<span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token operator">:</span> <span class="token string">\'offline\'</span><span class="token punctuation">,</span>\n    color<span class="token operator">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n    percent<span class="token operator">:</span> <span class="token number">0.5</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    size<span class="token operator">:</span> <span class="token number">500</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      size<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NumberInput</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onChange</span><span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timeline</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},c.a.createElement(d)),c.a.createElement(h,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<h3 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th>可选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>水平或垂直</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>size</td>\n<td>大小</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>timeline</td>\n<td>时间轴数组</td>\n<td>Array</td>\n<td></td>\n<td>是</td>\n<td>是</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-item">¶</a><a href="javascript:void(0)" id="timeline-item" class="anchor-point"></a>Timeline Item</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th>可选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>标签</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>tip</td>\n<td>hover 时的弹层提示</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>color</td>\n<td>颜色，优先于\n<code>lineColor</code>\n和\n<code>dotColor</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>lineColor</td>\n<td>线颜色</td>\n<td>string</td>\n<td><code>#999</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>dotColor</td>\n<td>圆点颜色</td>\n<td>string</td>\n<td><code>#00B90E</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>type</td>\n<td>水平或垂直</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>showLabel</td>\n<td>是否显示标签</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>showDot</td>\n<td>是否显示圆点</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>size</td>\n<td>大小</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>是</td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>是</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-shu-zu">¶</a><a href="javascript:void(0)" id="timeline-shu-zu" class="anchor-point"></a>Timeline 数组</h3>\n<p>支持<code>Timeline Item</code>的全部字段</p>\n<table class="table">\n<thead>\n<tr>\n<th>额外字段</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>默认的\n<code>key</code>\n，若没有会采用数组下标为\n<code>key</code></td>\n<td>string</td>\n<td>是</td>\n</tr>\n<tr>\n<td>percent</td>\n<td>动态大小时占用的比例(0 &#x3C;= percent &#x3C;= 1)</td>\n<td>number</td>\n<td>是</td>\n</tr>\n</tbody>\n</table>'}))}}}}]);