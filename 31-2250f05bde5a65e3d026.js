(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{995:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return y}));var t=s(827),p=s.n(t),e=s(828),o=s.n(e),c=s(829),l=s.n(c),u=s(0),i=s.n(u),k=s(90),r=function(){function n(){var n=i.a.useState("auto"),a=l()(n,2),s=a[0],t=a[1],p=i.a.useCallback(()=>{t(Math.min(550,("auto"===s?200:s)+50))},[s]),e=i.a.useCallback(()=>{t(Math.max(100,("auto"===s?200:s)-50))},[s]),o=i.a.useCallback(()=>{t("auto")},[s]);return i.a.createElement("div",null,i.a.createElement(k.Button,{onClick:p},"+100px"),i.a.createElement(k.Button,{onClick:e},"-100px"),i.a.createElement(k.Button,{onClick:o},"auto"),i.a.createElement(k.AnimateHeight,{className:"zent-animate-height-demo",height:s,style:{background:"#114db4",marginTop:16}},i.a.createElement("div",{style:{height:200}})))}return i.a.createElement("div",{style:{height:600}},i.a.createElement(n,null))};function d(n){return i.a.createElement(n.tag,o()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return i.a.createElement(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function h(n){return i.a.createElement(d,{tag:"style",html:n.style})}class g extends u.Component{constructor(...n){super(...n),p()(this,"state",{showCode:!1}),p()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return i.a.createElement("div",{className:"zandoc-react-demo"},i.a.createElement("div",{className:"zandoc-react-demo__preview"},p),i.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},i.a.createElement("div",{className:"zandoc-react-demo__title"},i.a.createElement("p",null,s||"")),i.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&i.a.createElement("pre",{className:"zandoc-react-demo__code"},i.a.createElement(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}class y extends u.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(k.smoothScroll)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return i.a.createElement("div",{className:"zandoc-react-container",key:null},i.a.createElement(h,{style:""}),i.a.createElement(m,{html:'<h2 class="anchor-heading"><a href="#animateheight">¶</a><a href="javascript:void(0)" id="animateheight" class="anchor-point"></a>AnimateHeight</h2>\n<p>Animate an element to any specific height.</p>\n<p>Animating to <code>auto</code> height is not possible with pure CSS, this is when this component comes into play.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),i.a.createElement(g,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">AnimateHeight</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Demo</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>height<span class="token punctuation">,</span> setHeight<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token string">\'auto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> inc <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span>\n      <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">min</span><span class="token punctuation">(</span><span class="token number">550</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>height <span class="token operator">===</span> <span class="token string">\'auto\'</span> <span class="token operator">?</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">:</span> height<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> dec <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span>\n      <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">max</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>height <span class="token operator">===</span> <span class="token string">\'auto\'</span> <span class="token operator">?</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">:</span> height<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> reset <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token string">\'auto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inc<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token number">100</span>px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dec<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token number">100</span>px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reset<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AnimateHeight</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-animate-height-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>height<span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">\'#114db4\'</span><span class="token punctuation">,</span> marginTop<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AnimateHeight</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},i.a.createElement(r)),i.a.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>Target height</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Animation duration</td>\n<td><code>number</code></td>\n<td>No</td>\n<td>200</td>\n<td></td>\n</tr>\n<tr>\n<td>easing</td>\n<td>Timing function for animation</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>ease</code></td>\n<td>Same as CSS\'s \n<code>transition-timing-function</code>\n property</td>\n</tr>\n<tr>\n<td>appear</td>\n<td>Apply animation in initial mount</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Custom style</td>\n<td><code>CSSProperties</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>overflow</td>\n<td>A shotcut of CSS \n<code>overflow</code>\n property</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>hidden</code></td>\n<td><code>auto</code>\n \n|\n \n<code>scroll</code></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);