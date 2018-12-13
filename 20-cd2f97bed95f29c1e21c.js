(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1044:function(n,s,a){"use strict";a.r(s),a.d(s,"default",function(){return Z});var t=a(4),e=a.n(t),p=a(8),o=a.n(p),c=a(5),i=a.n(c),u=a(6),l=a.n(u),r=a(7),k=a.n(r),h=a(2),m=a.n(h),d=a(3),f=a.n(d),g=a(10),y=a.n(g),v=a(0),w=a.n(v),b=a(148);function z(n){return w.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return w.a.createElement(z,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function x(n){return w.a.createElement(z,{tag:"style",html:n.style})}v.Component;var Z=function(n){function s(){return e()(this,s),i()(this,l()(s).apply(this,arguments))}return k()(s,n),o()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(b.a)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(x,{style:'img[alt="zent-theme"] {\n    width: 514px;\n    height: 319px;\n  }'}),w.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#themes">¶</a><a href="javascript:void(0)" id="themes" class="anchor-point"></a>Themes</h2>\n<p>Zent supports themes, only colors are customizable for now.</p>\n<p><img src="https://img.yzcdn.cn/zanui/react/zent-theme.png" alt="zent-theme"></p>\n<h3 class="anchor-heading"><a href="#customize">¶</a><a href="javascript:void(0)" id="customize" class="anchor-point"></a>Customize</h3>\n<p>Styles in Zent are written in <a href="http://postcss.org/">postcss</a>, so we have a postcss plugin <a href="https://www.npmjs.com/package/postcss-theme-variables">postcss-theme-variables</a> to support themes.</p>\n<p>There\'re two different ways to use this plugin:</p>\n<ol>\n<li>Build a custom css style within Zent.</li>\n<li>Import Zent\'s style source files within your project and config postcss to use custom colors.</li>\n</ol>\n<p>Each has its own pros and cons. </p>\n<p>The first one is non-intrusive, but you have to manually build your custom theme every time you upgrade Zent.</p>\n<p>On the other hand, the second one is intrusive, you have to adjust your project\'s building process to support Zent\'s postcss files. The good news is you don\'t have to rebuild your custom theme when you upgrade Zent.</p>\n<p>Rule of thumb: Use option 1 unless you happen to use postcss in your project.</p>\n<h4 class="anchor-heading"><a href="#option-1">¶</a><a href="javascript:void(0)" id="option-1" class="anchor-point"></a>Option 1</h4>\n<ol>\n<li>Clone Zent from <a href="https://github.com/youzan/zent">github</a> and install dependencies</li>\n<li>Create a file in <code>packages/zent</code>, e.g. <code>custom-theme.js</code>, define your custom colors in this file. All customizable colors are defined in <a href="colors">Colors</a>.</li>\n<li>Run <code>yarn theme custom-theme.js</code> within <code>packages/zent</code></li>\n<li>Your custom theme is in <code>packages/zent/css</code>.</li>\n</ol>\n<pre><code class="language-text"><span class="token comment">/* custom-theme.js */</span>\n\n<span class="token comment">// Only customize primary colors</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'theme-primary-1\'</span><span class="token punctuation">:</span> <span class="token string">\'#72f\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-2\'</span><span class="token punctuation">:</span> <span class="token string">\'#83f\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-3\'</span><span class="token punctuation">:</span> <span class="token string">\'#95f\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-4\'</span><span class="token punctuation">:</span> <span class="token string">\'#dbf\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-5\'</span><span class="token punctuation">:</span> <span class="token string">\'#f7e8fd\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'theme-primary-6\'</span><span class="token punctuation">:</span> <span class="token string">\'#f3eaff\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 class="anchor-heading"><a href="#option-2">¶</a><a href="javascript:void(0)" id="option-2" class="anchor-point"></a>Option 2</h4>\n<p>Make sure you are using Zent\'s postcss source files for styling, you can find them in <code>zent/assets</code>.</p>\n<p>You can import all styles with one line <code>import zent/assets/index.pcss</code>.</p>\n<p>Or you can use <a href="babel-plugin-zent">babel-plugin-zent</a>\'s <code>useRawStyle</code> option to automatically import postcss styles for you.</p>\n<p>Please refer to the following postcss configuration, make sure postcss-theme-variables is properly configured. Read the plugin docs <a href="https://www.npmjs.com/package/postcss-theme-variables">here</a>.</p>\n<pre><code class="language-text">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-easy-import\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      prefix<span class="token punctuation">:</span> <span class="token string">\'_\'</span><span class="token punctuation">,</span>\n      extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'pcss\'</span><span class="token punctuation">,</span> <span class="token string">\'css\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-theme-variables\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token comment">// ... your overrides here</span>\n      vars<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'theme-primary-1\'</span><span class="token punctuation">:</span> <span class="token string">\'#72f\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-2\'</span><span class="token punctuation">:</span> <span class="token string">\'#83f\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-3\'</span><span class="token punctuation">:</span> <span class="token string">\'#95f\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-4\'</span><span class="token punctuation">:</span> <span class="token string">\'#dbf\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-5\'</span><span class="token punctuation">:</span> <span class="token string">\'#f7e8fd\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'theme-primary-6\'</span><span class="token punctuation">:</span> <span class="token string">\'#f3eaff\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// precss variables starts with $</span>\n      prefix<span class="token punctuation">:</span> <span class="token string">\'$\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'autoprefixer\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'precss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Minify(Optional)</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'cssnano\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span> safe<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>'}))}}]),s}(v.Component)}}]);