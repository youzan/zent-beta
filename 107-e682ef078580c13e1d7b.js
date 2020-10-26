(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1085:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var s=t(922),e=t.n(s),p=t(916),c=t.n(p),o=t(917),l=t.n(o),r=t(577),i=t.n(r),u=t(918),d=t.n(u),k=t(919),m=t.n(k),h=t(920),f=t.n(h),g=t(921),v=t.n(g),y=t(0),b=t.n(y),w=t(106);function _(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,s=f()(n);if(a){var e=f()(this).constructor;t=Reflect.construct(s,arguments,e)}else t=s.apply(this,arguments);return m()(this,t)}}var z=function(){var n=["http://img.yzcdn.cn/public_files/2017/6/30/b0717bad7ad3ebd025e175d624ade39f.png","http://img.yzcdn.cn/public_files/2017/6/30/8a0536db89fafaa1269afeaa807a579b.png","http://img.yzcdn.cn/public_files/2017/6/30/7fe46674b697a514d9b6e2e155e88f1c.png","http://img.yzcdn.cn/public_files/2017/6/30/b7a98d721698fe8dc93689683706db45.png"],a=function(a){d()(s,a);var t=_(s);function s(){var a;c()(this,s);for(var e=arguments.length,p=new Array(e),o=0;o<e;o++)p[o]=arguments[o];return a=t.call.apply(t,[this].concat(p)),v()(i()(a),"handlePreview",(function(t){Object(w.previewImage)({images:n,index:n.indexOf(t.target.src),parentComponent:i()(a),scaleRatio:3})})),a}return l()(s,[{key:"render",value:function(){var a=this;return b.a.createElement("div",{className:"image-preview-demo"},n.map((function(n,t){return b.a.createElement("img",{src:n,key:t,onClick:a.handlePreview,alt:"",width:"160"})})))}}]),s}(b.a.Component);return b.a.createElement(a,null)};function E(n){return b.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function C(n){return b.a.createElement(E,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function N(n){return b.a.createElement(E,{tag:"style",html:n.style})}var x=function(n){d()(t,n);var a=_(t);function t(){var n;c()(this,t);for(var s=arguments.length,e=new Array(s),p=0;p<s;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),v()(i()(n),"state",{showCode:!1}),v()(i()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(t,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return b.a.createElement("div",{className:"zandoc-react-demo"},b.a.createElement("div",{className:"zandoc-react-demo__preview"},e),b.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},b.a.createElement("div",{className:"zandoc-react-demo__title"},b.a.createElement("p",null,t||"")),b.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&b.a.createElement("pre",{className:"zandoc-react-demo__code"},b.a.createElement(E,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(y.Component),R=function(n){d()(t,n);var a=_(t);function t(){return c()(this,t),a.apply(this,arguments)}return l()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.smoothScroll)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(N,{style:""}),b.a.createElement(C,{html:'<h2 class="anchor-heading"><a href="#previewimage">¶</a><a href="javascript:void(0)" id="previewimage" class="anchor-point"></a>previewImage</h2>\n<p>This component is used to preview images.</p>\n<h3 class="anchor-heading"><a href="#guide">¶</a><a href="javascript:void(0)" id="guide" class="anchor-point"></a>Guide</h3>\n<ul>\n<li>It\'s used to zoom thumbnail.</li>\n<li>Next image and previous image can be selected.</li>\n<li>Images can be rotated.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),b.a.createElement(x,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> previewImage <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> imgArr <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/b0717bad7ad3ebd025e175d624ade39f.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/8a0536db89fafaa1269afeaa807a579b.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/7fe46674b697a514d9b6e2e155e88f1c.png\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'http://img.yzcdn.cn/public_files/2017/6/30/b7a98d721698fe8dc93689683706db45.png\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handlePreview</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      images<span class="token operator">:</span> imgArr<span class="token punctuation">,</span>\n      index<span class="token operator">:</span> imgArr<span class="token punctuation">.</span><span class="token method function property-access">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">src</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      scaleRatio<span class="token operator">:</span> <span class="token number">3</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-preview-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          imgArr<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">image<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>image<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handlePreview</span><span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},b.a.createElement(z)),b.a.createElement(C,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>images</td>\n<td>Urls for images</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>index</td>\n<td>Start index</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>showRotateBtn</td>\n<td>Show rotate button</td>\n<td>bool</td>\n<td>true</td>\n<td>true,false</td>\n</tr>\n<tr>\n<td>scaleRatio</td>\n<td>Custom scale Ratio</td>\n<td>number</td>\n<td>1.5</td>\n<td></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>Parent component instance，i18n needs this to pass context through</td>\n<td>ReactInstance</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Optional. Custom class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(y.Component)}}]);