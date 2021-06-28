(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{624:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return j}));var t=s(21),p=s.n(t),e=s(198),o=s.n(e),c=s(0),l=s(1),u=s.n(l),i=s(27);function r(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function k(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){p()(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var d=function(){function n(){var n=u.a.useState("auto"),a=o()(n,2),s=a[0],t=a[1],p=u.a.useCallback(()=>{t(Math.min(550,("auto"===s?200:s)+50))},[s]),e=u.a.useCallback(()=>{t(Math.max(100,("auto"===s?200:s)-50))},[s]),l=u.a.useCallback(()=>{t("auto")},[s]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(i.k,{onClick:p,children:"+100px"}),Object(c.jsx)(i.k,{onClick:e,children:"-100px"}),Object(c.jsx)(i.k,{onClick:l,children:"auto"}),Object(c.jsx)(i.d,{className:"zent-animate-height-demo",height:s,style:{background:"#114db4",marginTop:16},children:Object(c.jsx)("div",{style:{height:200}})})]})}return Object(c.jsx)("div",{style:{height:600},children:Object(c.jsx)(n,{})})};function h(n){return Object(c.jsx)(n.tag,k(k({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return Object(c.jsx)(h,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return Object(c.jsx)(h,{tag:"style",html:n.style})}class b extends l.Component{constructor(...n){super(...n),p()(this,"state",{showCode:!1}),p()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return Object(c.jsxs)("div",{className:"zandoc-react-demo",children:[Object(c.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),Object(c.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(c.jsx)("div",{className:"zandoc-react-demo__title",children:Object(c.jsx)("p",{children:s||""})}),Object(c.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(c.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(c.jsx)(h,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class j extends l.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(i.tc)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return u.a.createElement("div",{className:"zandoc-react-container",key:null},u.a.createElement(g,{style:""}),u.a.createElement(m,{html:'<h2 class="anchor-heading"><a href="#animateheight-gao-du-jian-bian">¶</a><a href="javascript:void(0)" id="animateheight-gao-du-jian-bian" class="anchor-point"></a>AnimateHeight 高度渐变</h2>\n<p>将容器以动画形式渐变为指定的高度。</p>\n<p>将高度渐变为自适应的目标高度是无法使用 CSS 动画实现的，这种场景必须用 JavaScript 代码的方式来实现。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),u.a.createElement(b,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">AnimateHeight</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Demo</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>height<span class="token punctuation">,</span> setHeight<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token string">\'auto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> inc <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span>\n      <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">min</span><span class="token punctuation">(</span><span class="token number">550</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>height <span class="token operator">===</span> <span class="token string">\'auto\'</span> <span class="token operator">?</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">:</span> height<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> dec <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span>\n      <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">max</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>height <span class="token operator">===</span> <span class="token string">\'auto\'</span> <span class="token operator">?</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">:</span> height<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> reset <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token string">\'auto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inc<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token number">100</span>px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dec<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token number">100</span>px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reset<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AnimateHeight</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-animate-height-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>height<span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">\'#114db4\'</span><span class="token punctuation">,</span> marginTop<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AnimateHeight</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},u.a.createElement(d)),u.a.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>必填</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>目标高度</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>动画时长</td>\n<td><code>number</code></td>\n<td>否</td>\n<td>200</td>\n<td></td>\n</tr>\n<tr>\n<td>easing</td>\n<td>动画的中间值计算函数</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>ease</code></td>\n<td>参考 CSS 的 \n<code>transition-timing-function</code>\n 属性</td>\n</tr>\n<tr>\n<td>appear</td>\n<td>是否在首次渲染时应用动画效果</td>\n<td><code>boolean</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td><code>CSSProperties</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>overflow</td>\n<td>CSS \n<code>overflow</code>\n 属性的快捷方式</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>hidden</code></td>\n<td><code>auto</code>\n \n|\n \n<code>scroll</code></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);