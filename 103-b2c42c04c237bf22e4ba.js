(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{697:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var s=a(20),e=a.n(s),o=a(4),c=a(1),d=a.n(c),p=a(46);function l(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,s)}return a}function r(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){e()(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}var i=function(){return Object(o.jsx)(p.xb.TextBlock,{rows:8})},u=function(){return Object(o.jsx)(p.xb.TextBlock,{rows:5,dashed:!1})},h=function(){return Object(o.jsx)(p.xb.RichTextBlock,{rows:4})},k=function(){return Object(o.jsx)(p.xb.RichTextBlock,{rows:7,shape:"rect",size:160,dashed:!1})},m=function(){return Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(o.jsx)(p.xb.Circle,{diameter:160}),Object(o.jsx)(p.xb.TextBlock,{rows:6,style:{margin:"0 10px"}}),Object(o.jsx)(p.xb.Rectangle,{width:160,height:160})]})};function g(n){return Object(o.jsx)(n.tag,r(r({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function b(n){return Object(o.jsx)(g,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function y(n){return Object(o.jsx)(g,{tag:"style",html:n.style})}class f extends c.Component{constructor(...n){super(...n),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return Object(o.jsxs)("div",{className:"zandoc-react-demo",children:[Object(o.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),Object(o.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(o.jsx)("div",{className:"zandoc-react-demo__title",children:Object(o.jsx)("p",{children:a||""})}),Object(o.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(o.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(o.jsx)(g,{tag:"code",html:s,attributes:{className:"language-jsx"}})})]})}}class j extends c.Component{componentDidMount(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&Object(p.nc)(document.documentElement,0,function n(t,a){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(a+=t.offsetTop),n(t.parentNode,a);return a}(t,-9))}}render(){return d.a.createElement("div",{className:"zandoc-react-container",key:null},d.a.createElement(y,{style:""}),d.a.createElement(b,{html:'<h2 class="anchor-heading"><a href="#placeholder">¶</a><a href="javascript:void(0)" id="placeholder" class="anchor-point"></a>Placeholder</h2>\n<p>Placeholder is used as loading state in sections.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>You can use this component to reduce users\' anxiety when the part of page is loading.</li>\n<li>Includes building block components and some presets.</li>\n<li>Build your own placeholder using the building block components when presets does not meet your requirements.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),d.a.createElement(f,{title:"Text blocks",id:"Demotext",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},d.a.createElement(i)),d.a.createElement(f,{title:"Solid line text rows",id:"Demotextnodashed",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},d.a.createElement(u)),d.a.createElement(f,{title:"Richtext blocks",id:"Demorichtext",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.RichTextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},d.a.createElement(h)),d.a.createElement(f,{title:"Richtext blocks(Rectangle)",id:"Demorichtextrect",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.RichTextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">dashed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},d.a.createElement(k)),d.a.createElement(f,{title:"Custom placeholder",id:"Democustom",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Placeholder</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token operator">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> alignItems<span class="token operator">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.Circle</span></span> <span class="token attr-name">diameter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.TextBlock</span></span> <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">\'0 10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Placeholder.Rectangle</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">160</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},d.a.createElement(m)),d.a.createElement(b,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Presets：<code>TextBlock</code>, <code>RichTextBlock</code>。</p>\n<p>Components: <code>TextRow</code>, <code>TextRowDashed</code>, <code>Circle</code> and <code>Rectangle</code>. Use these components to build your own placeholder.</p>\n<h3 class="anchor-heading"><a href="#textblock">¶</a><a href="javascript:void(0)" id="textblock" class="anchor-point"></a>TextBlock</h3>\n<p>Text block, lines can be dashed.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>rows</td>\n<td>Text rows</td>\n<td><code>number</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>widths</td>\n<td>Tow width pool, each number is a percentage</td>\n<td><code>number[]</code></td>\n<td>No</td>\n<td>Omitted</td>\n<td></td>\n</tr>\n<tr>\n<td>dashed</td>\n<td>Dashed</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dashSegments</td>\n<td>Dashed line segments, each segment can be a percent or fixed width</td>\n<td><code>(number | string)[][]</code></td>\n<td>No</td>\n<td>Omitted</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#richtextblock">¶</a><a href="javascript:void(0)" id="richtextblock" class="anchor-point"></a>RichTextBlock</h3>\n<p>Supports all props in <code>TextBlock</code>, with the following extra props.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>Shape name, circle or rectangle</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'rect\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Shape size</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrow">¶</a><a href="javascript:void(0)" id="textrow" class="anchor-point"></a>TextRow</h3>\n<p>Solid text row.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#textrowdashed">¶</a><a href="javascript:void(0)" id="textrowdashed" class="anchor-point"></a>TextRowDashed</h3>\n<p>Dashed text row.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>segments</td>\n<td>Line segments, each segment can be a percent or fixed width</td>\n<td><code>(number | string)[]</code></td>\n<td>No</td>\n<td>Random</td>\n<td></td>\n</tr>\n<tr>\n<td>lineSpacing</td>\n<td>Line spacing on top</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'0.7em\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#circle">¶</a><a href="javascript:void(0)" id="circle" class="anchor-point"></a>Circle</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>diameter</td>\n<td>Circle diameter</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#rectangle">¶</a><a href="javascript:void(0)" id="rectangle" class="anchor-point"></a>Rectangle</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>Rectangle width</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>height</td>\n<td>Rectangle height</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>No</td>\n<td><code>80</code></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Additional styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td><code>{}</code></td>\n<td></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>Animate shapes</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Additional class</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);