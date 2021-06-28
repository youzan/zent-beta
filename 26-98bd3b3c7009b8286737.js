(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{564:function(n,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return k}));var t=a(21),e=a.n(t),o=a(0),p=a(1),c=a.n(p),r=a(27);function i(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?i(Object(a),!0).forEach((function(s){e()(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}function u(n){return Object(o.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return Object(o.jsx)(u,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function d(n){return Object(o.jsx)(u,{tag:"style",html:n.style})}p.Component;class k extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(r.tc)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}render(){return c.a.createElement("div",{className:"zandoc-react-container",key:null},c.a.createElement(d,{style:""}),c.a.createElement(m,{html:'<h2 class="anchor-heading"><a href="#zent-2-x-dao-3-x-sheng-ji-zhi-nan">¶</a><a href="javascript:void(0)" id="zent-2-x-dao-3-x-sheng-ji-zhi-nan" class="anchor-point"></a>Zent 2.x 到 3.x 升级指南</h2>\n<h3 class="anchor-heading"><a href="#javascript-zu-jian">¶</a><a href="javascript:void(0)" id="javascript-zu-jian" class="anchor-point"></a>Javascript 组件</h3>\n<p>从 Zent 3.x 开始我们不再单独为每个组件发包，所有组件代码都包含在一个包里。因此，原来的一些使用方法我们不再支持了。</p>\n<pre><code class="language-js"><span class="token comment">// 这些 2.x 的写法不再支持(以 Button 组件为例)</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Button</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent-button\'</span><span class="token punctuation">;</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">Button</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent/button\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 请改成 3.x 的写法</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span></code></pre>\n<p>也就是说 3.x 只支持 <code>import { Button } from \'zent\';</code> 这一种写法。</p>\n<h3 class="anchor-heading"><a href="#umd">¶</a><a href="javascript:void(0)" id="umd" class="anchor-point"></a>UMD</h3>\n<p>UMD 文件的路径变了。</p>\n<pre><code class="language-js"><span class="token comment">// 2.x 的写法</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/dist/main.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 请改成 3.x 的写法</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者使用 minify 后的版本</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.min.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#yang-shi">¶</a><a href="javascript:void(0)" id="yang-shi" class="anchor-point"></a>样式</h3>\n<p>css 文件的目录变了。</p>\n<pre><code class="language-js"><span class="token comment">// 2.x 的写法</span>\n<span class="token keyword module">import</span> <span class="token string">\'zent/lib/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 请改成 3.x 的写法</span>\n<span class="token keyword module">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a>babel-plugin-zent</h3>\n<p>我们不再维护每个组件单独的包，但是我们提供了一个更加方便的替代方案来达到相同的目的。</p>\n<p>这个 babel 插件可以自动重写所有 Zent 的 <code>import</code>，自动在打包的时候剔除没有使用的 Zent 组件代码，帮助减小代码体积。</p>\n<p>使用说明请看<a href="../guides/babel-plugin-zent">插件文档</a>。</p>'}))}}}}]);