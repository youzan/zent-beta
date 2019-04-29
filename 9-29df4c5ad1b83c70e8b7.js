(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{730:function(a,n,o){"use strict";o.r(n),o.d(n,"default",function(){return C});var e=o(30),c=o.n(e),s=o(31),d=o.n(s),i=o(32),t=o.n(i),l=o(33),r=o.n(l),p=o(43),h=o.n(p),u=o(34),g=o.n(u),k=o(25),f=o.n(k),v=o(708),m=o.n(v),b=o(0),y=o.n(b),P=o(175);function j(a){return y.a.createElement(a.tag,m()({},a.attributes,{dangerouslySetInnerHTML:{__html:a.html}}))}function w(a){return y.a.createElement(j,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function x(a){return y.a.createElement(j,{tag:"style",html:a.style})}b.Component;var C=function(a){function n(){return c()(this,n),t()(this,r()(n).apply(this,arguments))}return g()(n,a),d()(n,[{key:"componentDidMount",value:function(){var a=location.hash;if(a){var n=document.querySelector('a[href="'.concat(a,'"]'));n&&Object(P.a)(document.documentElement,0,function a(n,o){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(o+=n.offsetTop),a(n.parentNode,o);return o}(n,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(x,{style:""}),y.a.createElement(w,{html:'<h2 class="anchor-heading"><a href="#7-0-0-qian-yi-zhi-nan">¶</a><a href="javascript:void(0)" id="7-0-0-qian-yi-zhi-nan" class="anchor-point"></a>7.0.0 迁移指南</h2>\n<h4 class="anchor-heading"><a href="#quan-ju-bian-geng">¶</a><a href="javascript:void(0)" id="quan-ju-bian-geng" class="anchor-point"></a>全局变更</h4>\n<ul>\n<li><code>React</code> 必须升级到 16.8 以上</li>\n<li>删除了所有组件上的 <code>propTypes</code></li>\n<li>由于 <code>React</code> 内部逻辑的变更，在 <code>Portal</code> 内部触发的事件会随着组件树往上冒泡，注意不是 DOM 树，而是组件树。请仔细阅读<a href="https://reactjs.org/docs/portals.html#event-bubbling-through-portals">官方文档</a>。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a><code>babel-plugin-zent</code></h4>\n<p>需要升级到最新的版本，不兼容之前版本的 <code>zent</code></p>\n<h4 class="anchor-heading"><a href="#mo-ren-zi-hao-cong-12-diao-zheng-wei-14">¶</a><a href="javascript:void(0)" id="mo-ren-zi-hao-cong-12-diao-zheng-wei-14" class="anchor-point"></a>默认字号从 12 调整为 14</h4>\n<p>注意调整后的页面样式有没有问题</p>\n<h4 class="anchor-heading"><a href="#pagination">¶</a><a href="javascript:void(0)" id="pagination" class="anchor-point"></a><code>Pagination</code></h4>\n<p><code>Pagination</code> 分为 3 种类型，<code>import { Pagination, LitePagination, MiniPagination } from \'zent\'</code>。后两种是新增的，不涉及迁移问题。<code>Pagination</code> 的一些参数有变化：</p>\n<ul>\n<li><code>totalItem</code> 重命名为 <code>total</code>，老的参数名还是支持的，新代码请用 <code>total</code></li>\n<li><code>onChange</code> 回调函数的参数是个对象（老版是个数字），包含当前分页大小和当前页码，老版本只有当前页码</li>\n<li>删除了 <code>onPageSizeChange</code> 和 <code>maxPageToShow</code>，<code>onPageSizeChange</code> 的能力合并到 <code>onChange</code> 之中了</li>\n<li><code>pageSize</code> 不再耦合当前页码和页码选项，拆开成两个独立参数：<code>pageSize</code> 和 <code>pageSizeOptions</code>。分页选项配置也和原来的不一致，接受数字或者 <code>{value: number, text: node}</code>。</li>\n<li>CSS 类名和 HTML 结果有变化，有样式复写的需要确认样式是否正常。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#grid-he-table">¶</a><a href="javascript:void(0)" id="grid-he-table" class="anchor-point"></a><code>Grid 和</code>Table`</h4>\n<p>因为这两个组件的 <code>pageInfo</code> 参数依赖 <code>Pagination</code>，所以 <code>Pagination</code> 的改动对这个参数一样有影响。</p>\n<h4 class="anchor-heading"><a href="#loading">¶</a><a href="javascript:void(0)" id="loading" class="anchor-point"></a><code>Loading</code></h4>\n<p><code>Loading</code> 拆分成了 3 种子类型，<code>import { BlockLoading, InlineLoading, FullScreenLoading } from \'zent\'</code>，<code>InlineLoading</code> 是新增的能力，不涉及迁移问题。新增了一种样式和描述文案支持。</p>\n<ul>\n<li>老版中用到 <code>float</code> 参数的场景可以用 <code>FullScreenLoading</code> 替换，非 <code>float</code> 的场景用 <code>BlockLoading</code> 替换</li>\n<li><code>showDelay</code> 重命名为 <code>delay</code>，逻辑一致</li>\n<li><code>show</code> 重命名为 <code>loading</code>，逻辑一致</li>\n<li>删除了 <code>containerClass</code> 参数</li>\n<li>CSS 类名和 HTML 结果有变化，有样式复写的需要确认样式是否正常。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#radiogroup-he-checkboxgroup">¶</a><a href="javascript:void(0)" id="radiogroup-he-checkboxgroup" class="anchor-point"></a><code>RadioGroup</code> 和 <code>CheckboxGroup</code></h4>\n<p>应该没有影响，只是内部实现变了。</p>\n<h4 class="anchor-heading"><a href="#design-he-sku">¶</a><a href="javascript:void(0)" id="design-he-sku" class="anchor-point"></a><code>Design</code> 和 <code>SKU</code></h4>\n<p>使用 <code>@zent/design</code> 和 <code>@zent/sku</code>，功能一致的。</p>\n<h4 class="anchor-heading"><a href="#switch">¶</a><a href="javascript:void(0)" id="switch" class="anchor-point"></a><code>Switch</code></h4>\n<p>用了大号样式的地方统一改成默认样式，同时找视觉确认下。</p>\n<h4 class="anchor-heading"><a href="#tree">¶</a><a href="javascript:void(0)" id="tree" class="anchor-point"></a><code>Tree</code></h4>\n<p>删除了老版的非受控代码，只支持受控模式（这个很早就存在了），参数是一致的，一些选中逻辑会有细微区别。</p>\n<h4 class="anchor-heading"><a href="#numberinput">¶</a><a href="javascript:void(0)" id="numberinput" class="anchor-point"></a><code>NumberInput</code></h4>\n<p>组件重写，<code>onChange</code> 的参数改为字符串。修改了 <code>onChange</code> 触发的行为，现在只会在 <code>onBlur</code> 或者通过加减按钮修改时触发 <code>onChange</code>。</p>\n<h4 class="anchor-heading"><a href="#form">¶</a><a href="javascript:void(0)" id="form" class="anchor-point"></a><code>Form</code></h4>\n<p><code>equals</code> 和 <code>equalsField</code> 这两个内置校验方法迁移到 <code>===</code>，以前是 <code>==</code>，用到的地方需要自行排查是否兼容。</p>\n<h4 class="anchor-heading"><a href="#layout">¶</a><a href="javascript:void(0)" id="layout" class="anchor-point"></a><code>Layout</code></h4>\n<p>组件真正支持响应式布局，意味着布局可以随着屏幕大小变化而调整，之前的版本布局是固定的。</p>\n<p>导出的组件名字变了，老的写法</p>\n<h4 class="anchor-heading"><a href="#portal">¶</a><a href="javascript:void(0)" id="portal" class="anchor-point"></a><code>Portal</code></h4>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Portal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> PurePortal <span class="token punctuation">}</span> <span class="token operator">=</span> Portal<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyPortal1 <span class="token operator">=</span> Portal<span class="token punctuation">.</span><span class="token function">withEscToClose</span><span class="token punctuation">(</span>Portal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> MyPortal2 <span class="token operator">=</span> Portal<span class="token punctuation">.</span><span class="token function">withNonScrollable</span><span class="token punctuation">(</span>Portal<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>新的写法 </p>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Portal<span class="token punctuation">,</span> PurePortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span>\n\n<span class="token comment">// 替代 withEscToClose</span>\n<span class="token operator">&#x3C;</span>Portal closeOnESC<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&#x3C;</span><span class="token operator">/</span>Portal<span class="token operator">></span>\n\n<span class="token comment">// 替代 withNonScrollable</span>\n<span class="token operator">&#x3C;</span>Portal blockPageScroll<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&#x3C;</span><span class="token operator">/</span>Portal<span class="token operator">></span></code></pre>\n<ul>\n<li>删除了 <code>LayeredPortal</code>，请用 <code>Portal</code> 替换。</li>\n<li>去除 <code>onMount</code> 和 <code>onUnmount</code>，使用方直接使用上层组件的 <code>componentDidMount</code> 和 <code>componentWillUnmount</code> 即可。</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token operator">=</span> Layout</code></pre>\n<p>新的写法</p>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> LayoutRow <span class="token keyword">as</span> Row<span class="token punctuation">,</span> LayoutCol <span class="token keyword">as</span> Col<span class="token punctuation">,</span> LayoutGrid <span class="token keyword">as</span> Grid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span></code></pre>\n<p>另外，<code>LayoutRow</code> 和 <code>LayoutCol</code> 必须在 <code>LayoutGrid</code> 内部。</p>\n<h4 class="anchor-heading"><a href="#yuan-yang-shi">¶</a><a href="javascript:void(0)" id="yuan-yang-shi" class="anchor-point"></a>源样式</h4>\n<p>如果之前依赖了 postcss 的源样式，需要改成 sass。</p>\n<h2 class="anchor-heading"><a href="#7-0-0-next-11-2019-04-29">¶</a><a href="javascript:void(0)" id="7-0-0-next-11-2019-04-29" class="anchor-point"></a>7.0.0-next.11(2019-04-29)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li><code>Portal</code> hooks 重构，API 有变化，具体看上面的 <code>Portal</code> 部分</li>\n<li><code>NumberInput</code> 默认关闭 <code>autoComplete</code></li>\n<li>更新了组件的字体大小，现在是 14，之前改漏了</li>\n</ul>\n<h3 class="anchor-heading"><a href="#qi-ta">¶</a><a href="javascript:void(0)" id="qi-ta" class="anchor-point"></a>其他</h3>\n<ul>\n<li>更新打包时的警告信息</li>\n<li>更新了一些组件的类型定义</li>\n<li>清理 <code>SelectMenu</code> 的代码</li>\n<li><code>Grid</code> 文档里的排序功能增加了数据变化，更加直观</li>\n<li>修复了 <code>Grid</code> 没有滚动条时的多余阴影问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-10-2019-03-29">¶</a><a href="javascript:void(0)" id="7-0-0-next-10-2019-03-29" class="anchor-point"></a>7.0.0-next.10(2019-03-29)</h2>\n<h2 class="anchor-heading"><a href="#7-0-0-next-9-2019-03-29">¶</a><a href="javascript:void(0)" id="7-0-0-next-9-2019-03-29" class="anchor-point"></a>7.0.0-next.9(2019-03-29)</h2>\n<ul>\n<li>新增 <code>TextMark</code> 组件，用于高亮文本中的一组关键字</li>\n<li>\n<p><code>Table</code> 和 <code>Grid</code> </p>\n<ul>\n<li>支持通过 <code>paginationType="lite"</code> 选择简化版的分页器</li>\n<li>修复一个样式问题</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-8-2019-03-27">¶</a><a href="javascript:void(0)" id="7-0-0-next-8-2019-03-27" class="anchor-point"></a>7.0.0-next.8(2019-03-27)</h2>\n<ul>\n<li>修复了一些文档和类型定义问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-7-2019-03-25">¶</a><a href="javascript:void(0)" id="7-0-0-next-7-2019-03-25" class="anchor-point"></a>7.0.0-next.7(2019-03-25)</h2>\n<ul>\n<li>修复 <code>NumberInput</code> 的样式问题</li>\n<li>修复 <code>Timeline</code> 的演示代码问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-6-2019-03-25">¶</a><a href="javascript:void(0)" id="7-0-0-next-6-2019-03-25" class="anchor-point"></a>7.0.0-next.6(2019-03-25)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li><code>Form</code> 校验方法中的 <code>equals</code> 和 <code>equalsField</code> 迁移到 <code>===</code> 比较，之前是 <code>==</code></li>\n<li>重写 <code>NumberInput</code> 组件，<code>onChange</code> 参数修改为字符串，不再是个模拟的事件对象；同时 <code>onChange</code> 只在 blur 的时候触发</li>\n<li>更新了 <code>babel-plugin-zent</code> 插件的数据格式，不兼容以前的版本</li>\n<li>重写 <code>Layout</code>，不再导出 <code>Layout</code> 这个命名空间；同时真正支持响应式布局</li>\n</ul>\n<h3 class="anchor-heading"><a href="#qi-ta">¶</a><a href="javascript:void(0)" id="qi-ta" class="anchor-point"></a>其他</h3>\n<ul>\n<li>删除了组件上所有的 <code>propTypes</code>，现在依赖 <code>TypeScript</code> 的类型系统；使用 JavaScript 的话就没有 props 的类型检查了</li>\n<li>组件代码迁移到 TypeScript，同时使用 <code>tsc</code> 替代 <code>babel</code> 做转码</li>\n<li>恢复主题自定义功能，使用方式有变化，具体看文档</li>\n<li><code>Portal</code> 支持嵌套，后续会把 <code>Popover</code> 里处理嵌套的相关逻辑迁移到 <code>Portal</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-5-2019-02-28">¶</a><a href="javascript:void(0)" id="7-0-0-next-5-2019-02-28" class="anchor-point"></a>7.0.0-next.5(2019-02-28)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li>拆分 <code>Pagination</code> 为 <code>Pagination</code>, <code>MiniPagination</code> 以及 <code>LitePagination</code> 三个独立的样式。</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-4-2019-02-26">¶</a><a href="javascript:void(0)" id="7-0-0-next-4-2019-02-26" class="anchor-point"></a>7.0.0-next.4(2019-02-26)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li>默认字号从 12 调整为 14</li>\n<li><code>prefix</code> 参数不再支持，后续后全面移除，现在部分组件已经移除</li>\n<li>不再支持 16.8 以下的 React(Hooks 的最小可用版本)</li>\n<li>删除 UMD 格式输出</li>\n<li><code>Pagination</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li><code>Loading</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li>用 React 新的 context API 重写 <code>RadioGroup</code> 和 <code>CheckboxGroup</code></li>\n<li>移除 <code>Design</code> 和 <code>SKU</code> 组件，请使用 <code>@zent/design</code> 和 <code>@zent/sku</code>。<code>SKU</code> 组件不再维护，<code>Design</code> 组件进入维护期，不再迭代。</li>\n<li><code>Switch</code> 删除大号样式支持</li>\n<li><code>Tree</code> 组件删除老版支持(即不再支持 <code>useNew</code> 参数选择使用的版本)</li>\n<li>废弃 <code>postcss</code> 改用 <code>node-sass</code>，样式源文件（assets 目录下的）按需加载需要升级 <code>babel-plugin-zent</code> 到 <code>2.0.0-next.3</code></li>\n<li><code>NumberInput</code> 的 <code>onChange</code> 回调的参数是 <code>string</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#qi-ta">¶</a><a href="javascript:void(0)" id="qi-ta" class="anchor-point"></a>其他</h3>\n<ul>\n<li>样式更新：<code>Button</code>, <code>SplitButton</code>, <code>Breadcrumb</code>, <code>Steps</code>, <code>Menu</code>, <code>Radio</code>, <code>Checkbox</code>, <code>Input</code>, <code>Select</code>, <code>Slider</code>, <code>Switch</code>, <code>Badge</code>, <code>Collapse</code>, <code>Pop</code>, <code>Tabs</code>, <code>Tag</code>, <code>Timeline</code>, <code>Dialog</code>, <code>Progress</code>, <code>Rate</code>, <code>Collapse</code>, <code>Table</code>, <code>Grid</code></li>\n<li>增加 <code>RadioButton</code>，按钮样式的单选框</li>\n<li>删除 <code>zan-utils</code> 依赖</li>\n<li>用 <code>createPortal</code> 重写 <code>Portal</code> 组件，API 向下兼容</li>\n</ul>'}))}}]),n}(b.Component)}}]);