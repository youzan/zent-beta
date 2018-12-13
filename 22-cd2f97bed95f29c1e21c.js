(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1046:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return S});var e=s(4),t=s.n(e),o=s(8),p=s.n(o),c=s(5),r=s.n(c),i=s(6),l=s.n(i),u=s(7),d=s.n(u),m=s(2),h=s.n(m),k=s(3),f=s.n(k),g=s(10),y=s.n(g),v=s(0),w=s.n(v),b=s(148);function z(n){return w.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return w.a.createElement(z,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function x(n){return w.a.createElement(z,{tag:"style",html:n.style})}v.Component;var S=function(n){function a(){return t()(this,a),r()(this,l()(a).apply(this,arguments))}return d()(a,n),p()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(x,{style:""}),w.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#upgrade-to-3-x-from-2-x">¶</a><a href="javascript:void(0)" id="upgrade-to-3-x-from-2-x" class="anchor-point"></a>Upgrade to 3.x from 2.x</h2>\n<h3 class="anchor-heading"><a href="#javascript-components">¶</a><a href="javascript:void(0)" id="javascript-components" class="anchor-point"></a>Javascript Components</h3>\n<p>Starting from Zent 3.x, we no longer publish separate npm packages for each component.</p>\n<p>So there\'re some usages we no longer support.</p>\n<pre><code class="language-js"><span class="token comment">// These are no longer supported(Button as an example)</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'zent-button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'zent/button\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Instead, you can use this</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span></code></pre>\n<p>That is to say, only <code>import { Button } from \'zent\';</code> is supported starting from now on.</p>\n<h3 class="anchor-heading"><a href="#umd">¶</a><a href="javascript:void(0)" id="umd" class="anchor-point"></a>UMD</h3>\n<p>The UMD bundle location has changed.</p>\n<pre><code class="language-js"><span class="token comment">// 2.x</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/dist/main.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Instead, you write</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Or if you prefer the minified version</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'zent/lib/zent-umd.min.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#styles">¶</a><a href="javascript:void(0)" id="styles" class="anchor-point"></a>Styles</h3>\n<p>CSS location has changed.</p>\n<pre><code class="language-js"><span class="token comment">// 2.x</span>\n<span class="token keyword">import</span> <span class="token string">\'zent/lib/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Instead, you write</span>\n<span class="token keyword">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a>babel-plugin-zent</h3>\n<p>Since we no longer maintain separate packages for each component, here is an alternative solution to achieve the same goal.</p>\n<p><code>babel-plugin-zent</code> can rewrite all Zent <code>imports</code> on the fly, you only pay what you use in your project.</p>\n<p>Read the <a href="../guides/babel-plugin-zent">documentation</a>.</p>'}))}}]),a}(v.Component)}}]);