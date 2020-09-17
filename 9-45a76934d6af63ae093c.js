(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{948:function(n,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return E}));var s=e(911),t=e.n(s),o=e(912),i=e.n(o),c=e(570),l=e.n(c),r=e(913),p=e.n(r),u=e(914),h=e.n(u),d=e(915),f=e.n(d),m=e(916),g=e.n(m),k=e(917),y=e.n(k),v=e(0),z=e.n(v),b=e(152);function j(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,s=f()(n);if(a){var t=f()(this).constructor;e=Reflect.construct(s,arguments,t)}else e=s.apply(this,arguments);return h()(this,e)}}function w(n){return z.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function x(n){return z.a.createElement(w,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function R(n){return z.a.createElement(w,{tag:"style",html:n.style})}v.Component;var E=function(n){p()(e,n);var a=j(e);function e(){return t()(this,e),a.apply(this,arguments)}return i()(e,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,e){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(e+=a.offsetTop),n(a.parentNode,e);return e}(a,-9))}}},{key:"render",value:function(){return z.a.createElement("div",{className:"zandoc-react-container",key:null},z.a.createElement(R,{style:'img[alt="zent-components"] {\n  width: 492px;\n  height: 438px;\n}'}),z.a.createElement(x,{html:'<h1 class="anchor-heading"><a href="#zent">¶</a><a href="javascript:void(0)" id="zent" class="anchor-point"></a>Zent</h1>\n<p>Zent ( \\ˈzent\\ ) 是有赞 PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件。</p>\n<p>目前我们有 50+ 组件，这些组件都已经在有赞的各类 PC 业务中使用，我们会在此基础上，持续开发一些新组件。</p>\n<p>我们的目标是让 React 项目开发更快、更简单。</p>\n<h3 class="anchor-heading"><a href="#zu-jian-zhan-shi">¶</a><a href="javascript:void(0)" id="zu-jian-zhan-shi" class="anchor-point"></a>组件展示</h3>\n<p><img src="https://b.yzcdn.cn/public_files/2018/04/17/00778671b9657602387902b6de9d1693.png" alt="zent-components"></p>\n<h3 class="anchor-heading"><a href="#te-xing">¶</a><a href="javascript:void(0)" id="te-xing" class="anchor-point"></a>特性</h3>\n<ul>\n<li>高质量的 React 基础组件以及丰富的业务组件</li>\n<li>内置 TypeScript 类型定义文件</li>\n<li>支持定制主题</li>\n<li>代码/样式按需加载</li>\n<li>一套有赞设计师绘制的图标库</li>\n</ul>\n<h3 class="anchor-heading"><a href="#zhi-chi-huan-jing">¶</a><a href="javascript:void(0)" id="zhi-chi-huan-jing" class="anchor-point"></a>支持环境</h3>\n<ul>\n<li>React >= 16.8</li>\n<li>现代浏览器，IE 除外</li>\n<li>支持服务端渲染(SSR)</li>\n</ul>\n<h3 class="anchor-heading"><a href="#liu-lan-qi">¶</a><a href="javascript:void(0)" id="liu-lan-qi" class="anchor-point"></a>浏览器</h3>\n<h4 class="anchor-heading"><a href="#zhi-chi-de-liu-lan-qi">¶</a><a href="javascript:void(0)" id="zhi-chi-de-liu-lan-qi" class="anchor-point"></a>支持的浏览器</h4>\n<ul>\n<li>Firefox >= 52(ESR)</li>\n<li>Chrome >= 49</li>\n<li>Safari >= 9.1</li>\n<li>不支持IE</li>\n</ul>\n<h4 class="anchor-heading"><a href="#xu-yao-de-polyfill">¶</a><a href="javascript:void(0)" id="xu-yao-de-polyfill" class="anchor-point"></a>需要的polyfill</h4>\n<p>对于受支持的浏览器需要的 polyfill</p>\n<ul>\n<li><code>es6.object.assign</code></li>\n<li><code>es6.object.is</code></li>\n<li><code>es6.string.ends-with</code></li>\n<li><code>es6.string.starts-with</code></li>\n<li><code>es6.string.includes</code></li>\n<li><code>es7.string.trim-left</code></li>\n<li><code>es7.string.trim-right</code></li>\n<li><code>es6.array.from</code></li>\n<li><code>es6.array.of</code></li>\n<li><code>es6.array.fill</code></li>\n<li><code>es6.array.find</code></li>\n<li><code>es6.array.find-index</code></li>\n<li><code>es7.array.includes</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#an-zhuang">¶</a><a href="javascript:void(0)" id="an-zhuang" class="anchor-point"></a>安装</h3>\n<pre><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> zent</code></pre>\n<h3 class="anchor-heading"><a href="#shi-yong-zu-jian">¶</a><a href="javascript:void(0)" id="shi-yong-zu-jian" class="anchor-point"></a>使用组件</h3>\n<pre><code class="language-jsx"><span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 引入样式</span>\n<span class="token keyword module">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#an-xu-jia-zai">¶</a><a href="javascript:void(0)" id="an-xu-jia-zai" class="anchor-point"></a>按需加载</h3>\n<p><a href="babel-plugin-zent">babel-plugin-zent</a> 这个 babel 插件可以帮助减小打包文件的大小，原理是自动做了类似下面的代码变换。</p>\n<pre><code class="language-js"><span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 变换为</span>\n\n<span class="token keyword module">import</span> <span class="token maybe-class-name">Button</span> <span class="token keyword module">from</span> <span class="token string">\'zent/es/button\'</span><span class="token punctuation">;</span></code></pre>\n<p>适用于基于 Zent 开发的组件库，以及对 Zent 使用量较少的项目。详细使用帮助请看<a href="babel-plugin-zent">插件的文档</a>。</p>\n<p>除此之外，Zent 也支持 ESM 的 tree-shaking 方式配合打包工具来实现按需加载。</p>\n<h3 class="anchor-heading"><a href="#zhu-ti">¶</a><a href="javascript:void(0)" id="zhu-ti" class="anchor-point"></a>主题</h3>\n<p>请参考<a href="theme">定制主题</a></p>'}))}}]),e}(v.Component)}}]);