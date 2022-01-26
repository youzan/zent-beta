(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[2673],{92673:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>y});var t=a(73450),p=a(73118),e=a(27378),o=a(57318),c=a(3454),l=a(79737),i=a(24246);function u(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function r(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?u(Object(a),!0).forEach((function(s){(0,t.Z)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var k=function(){function n(){var n=e.useState("auto"),s=(0,p.Z)(n,2),a=s[0],t=s[1],o=e.useCallback((()=>{t(Math.min(550,("auto"===a?200:a)+50))}),[a]),u=e.useCallback((()=>{t(Math.max(100,("auto"===a?200:a)-50))}),[a]),r=e.useCallback((()=>{t("auto")}),[a]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(c.z,{onClick:o,children:"+100px"}),(0,i.jsx)(c.z,{onClick:u,children:"-100px"}),(0,i.jsx)(c.z,{onClick:r,children:"auto"}),(0,i.jsx)(l.H,{className:"zent-animate-height-demo",height:a,style:{background:"#114db4",marginTop:16},children:(0,i.jsx)("div",{style:{height:200}})})]})}return(0,i.jsx)("div",{style:{height:600},children:(0,i.jsx)(n,{})})};function d(n){return(0,i.jsx)(n.tag,r(r({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return(0,i.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function m(n){return(0,i.jsx)(d,{tag:"style",html:n.style})}function g(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),g(n.parentNode,s);return s}class f extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return(0,i.jsxs)("div",{className:"zandoc-react-demo",children:[(0,i.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,i.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,i.jsx)("div",{className:"zandoc-react-demo__title",children:(0,i.jsx)("p",{children:a||""})}),(0,i.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,i.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,i.jsx)(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class y extends e.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&(0,o.l)(document.documentElement,0,g(s,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(m,{style:""}),e.createElement(h,{html:'<h2 class="anchor-heading"><a href="#animateheight">¶</a><a href="javascript:void(0)" id="animateheight" class="anchor-point"></a>AnimateHeight</h2>\n<p>Animate an element to any specific height.</p>\n<p>Animating to <code>auto</code> height is not possible with pure CSS, this is when this component comes into play.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),e.createElement(f,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">AnimateHeight</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Demo</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>height<span class="token punctuation">,</span> setHeight<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token string">\'auto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> inc <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span>\n      <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">min</span><span class="token punctuation">(</span><span class="token number">550</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>height <span class="token operator">===</span> <span class="token string">\'auto\'</span> <span class="token operator">?</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">:</span> height<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> dec <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span>\n      <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">max</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>height <span class="token operator">===</span> <span class="token string">\'auto\'</span> <span class="token operator">?</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token operator">:</span> height<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> reset <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token string">\'auto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inc<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token number">100</span>px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dec<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token number">100</span>px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>reset<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>auto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AnimateHeight</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-animate-height-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>height<span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">\'#114db4\'</span><span class="token punctuation">,</span> marginTop<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token constant">INITIAL_HEIGHT</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AnimateHeight</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(k)),e.createElement(h,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>Target height</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Animation duration</td>\n<td><code>number</code></td>\n<td>No</td>\n<td>200</td>\n<td></td>\n</tr>\n<tr>\n<td>easing</td>\n<td>Timing function for animation</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>ease</code></td>\n<td>Same as CSS\'s \n<code>transition-timing-function</code>\n property</td>\n</tr>\n<tr>\n<td>appear</td>\n<td>Apply animation in initial mount</td>\n<td><code>boolean</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Custom style</td>\n<td><code>CSSProperties</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>overflow</td>\n<td>A shotcut of CSS \n<code>overflow</code>\n property</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>hidden</code></td>\n<td><code>auto</code>\n \n|\n \n<code>scroll</code></td>\n</tr>\n</tbody>\n</table>'}))}}},79737:(n,s,a)=>{"use strict";a.d(s,{H:()=>l});var t=a(93646),p=a(24246),e=a(27378),o=a(17127);function c(n,s){n.style.height="number"==typeof s?s+"px":s}var l=function(n){function s(){var s=null!==n&&n.apply(this,arguments)||this;return s.ref=(0,e.createRef)(),s.timer=null,s}return(0,t.ZT)(s,n),s.prototype.componentDidMount=function(){var n=this,s=this.props,a=s.appear,t=s.height,p=s.duration,e=this.ref.current;a&&"auto"===t?(e.style.height="0px",(0,o.tA)((function(){n.props.height===t&&(e.style.height=e.offsetHeight+"px",n.timer=setTimeout((function(){n.timer=null,n.props.height===t&&(e.style.height="auto")}),p))}))):c(e,t)},s.prototype.componentDidUpdate=function(n){var s=this,a=this.props,t=a.height,p=a.duration;if(n.height!==t){null!==this.timer&&(clearTimeout(this.timer),this.timer=null);var e=this.ref.current;if("auto"===n.height)e.style.height=e.offsetHeight+"px",(0,o.tA)((function(){s.props.height===t&&c(e,t)}));else if("auto"===t){var l=e.offsetHeight;e.style.height="auto";var i=e.offsetHeight;e.style.height=l+"px",(0,o.tA)((function(){e.style.height=i+"px",s.timer=setTimeout((function(){s.timer=null,s.props.height===t&&(e.style.height=t)}),p)}))}else c(e,t)}},s.prototype.render=function(){var n=this.props,s=n.duration,a=n.className,e=n.style,o=n.easing,c=n.overflow,l=n.children,i=n.transitionPrototype;return(0,p.jsx)("div",(0,t.pi)({ref:this.ref,className:a,style:(0,t.pi)((0,t.pi)({},e),{transition:i+" "+s+"ms "+o,overflow:c}),"data-zv":"10.0.0-beta.2"},{children:l}),void 0)},s.defaultProps={appear:!1,duration:200,easing:"ease",overflow:"hidden",transitionPrototype:"height"},s}(e.Component)}}]);