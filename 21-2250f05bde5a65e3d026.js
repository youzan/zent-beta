(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{935:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return u}));s(827);var e=s(828),o=s.n(e),t=s(0),c=s.n(t),p=s(90);function r(n){return c.a.createElement(n.tag,o()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function l(n){return c.a.createElement(r,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function i(n){return c.a.createElement(r,{tag:"style",html:n.style})}t.Component;class u extends t.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(p.smoothScroll)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return c.a.createElement("div",{className:"zandoc-react-container",key:null},c.a.createElement(i,{style:""}),c.a.createElement(l,{html:'<h2 class="anchor-heading"><a href="#coding-guides">¶</a><a href="javascript:void(0)" id="coding-guides" class="anchor-point"></a>Coding Guides</h2>\n<p>Zent provides some useful SCSS mixins and functions to help write themable style.</p>\n<h3 class="anchor-heading"><a href="#mixins">¶</a><a href="javascript:void(0)" id="mixins" class="anchor-point"></a>Mixins</h3>\n<p>There\'re three mixins defined in  <code>assets/theme/default</code>.</p>\n<h4 class="anchor-heading"><a href="#theme-color">¶</a><a href="javascript:void(0)" id="theme-color" class="anchor-point"></a>theme-color</h4>\n<p><code>theme-color</code> is what you need most of time.</p>\n<p><code>theme-color($property, $category, $index, $opacity: 1)</code>, the last parameter <code>$opacity</code> is optional.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> primary<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>background-color<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// with opacity</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-color</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> primary<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 class="anchor-heading"><a href="#theme-border">¶</a><a href="javascript:void(0)" id="theme-border" class="anchor-point"></a>theme-border</h4>\n<p><code>theme-border</code> provides an easy way to define border with theme support.</p>\n<p><code>theme-border($width, $style, $category, $index, $opacity: 1)</code>, again the last parameter <code>$opacity</code> is optional.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">,</span> solid<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// with opacity</span>\n  <span class="token keyword">@include</span> <span class="token function">theme-border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token unit">px</span><span class="token punctuation">,</span> solid<span class="token punctuation">,</span> stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>There\'re four variants corresponding to <code>border-left</code>, <code>border-right</code>, <code>border-top</code> and <code>border-bottom</code>, they all share the definition with <code>theme-border</code>.</p>\n<ul>\n<li><code>theme-border-left</code></li>\n<li><code>theme-border-right</code></li>\n<li><code>theme-border-top</code></li>\n<li><code>theme-border-bottom</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#theme-shadow">¶</a><a href="javascript:void(0)" id="theme-shadow" class="anchor-point"></a>theme-shadow</h4>\n<p>There\'re three predefined shadows: <code>layer</code>, <code>focus</code> and <code>modal</code>. These\'re the possible arguments to <code>theme-shadow($name)</code>.</p>\n<ul>\n<li><code>layer</code> can be used for popup shadow, e.g. <code>Select</code> and <code>Pop</code></li>\n<li><code>focus</code> can be used for input focus highlight</li>\n<li><code>modal</code> can be used for dialog shadow</li>\n</ul>\n<h3 class="anchor-heading"><a href="#functions">¶</a><a href="javascript:void(0)" id="functions" class="anchor-point"></a>Functions</h3>\n<p>There\'re some cases where <code>theme-color</code>, <code>theme-border</code> and <code>theme-shadow</code> can not cover, you can use these functions to help write themable code.</p>\n<h4 class="anchor-heading"><a href="#theme-rgb">¶</a><a href="javascript:void(0)" id="theme-rgb" class="anchor-point"></a>theme-rgb</h4>\n<p><code>theme-rgb($category, $index)</code> this function returns a CSS variable in RGB format.</p>\n<p>For example <code>theme-rgb(stroke, 6)</code> returns something like <code>rgb(var(--theme-stroke-6, 235, 237, 240))</code>.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token variable">$theme-stroke-6</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">theme-rgb</span><span class="token punctuation">(</span>stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 class="anchor-heading"><a href="#theme-rgba">¶</a><a href="javascript:void(0)" id="theme-rgba" class="anchor-point"></a>theme-rgba</h4>\n<p><code>theme-rgba($category, $index, $opacity)</code> is like <code>theme-rgb</code>, except it accepts an <code>$opacity</code> parameter and returns a CSS variable in RGBA format.</p>\n<p>For example <code>theme-rgb(stroke, 6, 0.8)</code> returns something like <code>rgba(var(--theme-stroke-6, 235, 237, 240), 0.8)</code>.</p>\n<pre><code class="language-scss"><span class="token selector">.container </span><span class="token punctuation">{</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$theme-stroke-6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">theme-rgba</span><span class="token punctuation">(</span>stroke<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>'}))}}}}]);