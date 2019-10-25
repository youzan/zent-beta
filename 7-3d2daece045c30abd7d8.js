(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{805:function(e,o,n){"use strict";n.r(o),n.d(o,"default",function(){return S});var a=n(34),c=n.n(a),d=n(35),i=n.n(d),l=n(36),s=n.n(l),t=n(37),r=n.n(t),p=n(45),h=n.n(p),u=n(38),g=n.n(u),f=n(39),k=n.n(f),v=n(784),x=n.n(v),b=n(0),m=n.n(b),j=n(185);function P(e){return m.a.createElement(e.tag,x()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function y(e){return m.a.createElement(P,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function C(e){return m.a.createElement(P,{tag:"style",html:e.style})}b.Component;var S=function(e){function o(){return c()(this,o),s()(this,r()(o).apply(this,arguments))}return g()(o,e),i()(o,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var o=document.querySelector('a[href="'.concat(e,'"]'));o&&Object(j.a)(document.documentElement,0,function e(o,n){for(;o;)return o.offsetTop&&"static"!==getComputedStyle(o).position&&(n+=o.offsetTop),e(o.parentNode,n);return n}(o,-9))}}},{key:"render",value:function(){return m.a.createElement("div",{className:"zandoc-react-container",key:null},m.a.createElement(C,{style:""}),m.a.createElement(y,{html:'<h2 class="anchor-heading"><a href="#7-0-0-qian-yi-zhi-nan">¶</a><a href="javascript:void(0)" id="7-0-0-qian-yi-zhi-nan" class="anchor-point"></a>7.0.0 迁移指南</h2>\n<h4 class="anchor-heading"><a href="#quan-ju-bian-geng">¶</a><a href="javascript:void(0)" id="quan-ju-bian-geng" class="anchor-point"></a>全局变更</h4>\n<ul>\n<li><code>React</code> 必须升级到 16.8 以上</li>\n<li>删除了所有组件上的 <code>propTypes</code></li>\n<li>不再支持 <code>cjs</code>，请使用支持 esm 的打包工具</li>\n<li>由于 <code>React</code> 内部逻辑的变更，在 <code>Portal</code> 内部触发的事件会随着组件树往上冒泡，注意不是 DOM 树，而是组件树。请仔细阅读<a href="https://reactjs.org/docs/portals.html#event-bubbling-through-portals">官方文档</a>。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a><code>babel-plugin-zent</code></h4>\n<p>需要升级到最新的版本，不兼容之前版本的 <code>zent</code></p>\n<h4 class="anchor-heading"><a href="#mo-ren-zi-hao-cong-12-diao-zheng-wei-14">¶</a><a href="javascript:void(0)" id="mo-ren-zi-hao-cong-12-diao-zheng-wei-14" class="anchor-point"></a>默认字号从 12 调整为 14</h4>\n<p>注意调整后的页面样式有没有问题</p>\n<h4 class="anchor-heading"><a href="#button">¶</a><a href="javascript:void(0)" id="button" class="anchor-point"></a><code>Button</code></h4>\n<p><code>Button</code> 删除了 <code>component</code> 属性，请使用新的 <code>ButtonDirective</code> 组件处理之前 <code>component</code> 的使用场景。</p>\n<h4 class="anchor-heading"><a href="#pagination">¶</a><a href="javascript:void(0)" id="pagination" class="anchor-point"></a><code>Pagination</code></h4>\n<p><code>Pagination</code> 分为 3 种类型，<code>import { Pagination, LitePagination, MiniPagination } from \'zent\'</code>。后两种是新增的，不涉及迁移问题。<code>Pagination</code> 的一些参数有变化：</p>\n<ul>\n<li><code>totalItem</code> 重命名为 <code>total</code>，老的参数名还是支持的，新代码请用 <code>total</code></li>\n<li><code>onChange</code> 回调函数的参数是个对象（老版是个数字），包含当前分页大小和当前页码，老版本只有当前页码</li>\n<li>删除了 <code>onPageSizeChange</code>，<code>onPageSizeChange</code> 的能力合并到 <code>onChange</code> 之中了</li>\n<li>删除了 <code>maxPageToShow</code>，<code>maxPageToShow</code> 的效果可以用 <code>formatTotal</code> 来实现，但是请注意语义不一样</li>\n<li><code>pageSize</code> 不再耦合当前页码和页码选项，拆开成两个独立参数：<code>pageSize</code> 和 <code>pageSizeOptions</code>。分页选项配置也和原来的不一致，接受数字或者 <code>{value: number, text: node}</code>。</li>\n<li>CSS 类名和 HTML 结果有变化，有样式复写的需要确认样式是否正常。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#grid-he-table">¶</a><a href="javascript:void(0)" id="grid-he-table" class="anchor-point"></a><code>Grid</code> 和 <code>Table</code></h4>\n<p>因为这两个组件的 <code>pageInfo</code> 参数依赖 <code>Pagination</code>，所以 <code>Pagination</code> 的改动对这个参数一样有影响。</p>\n<h4 class="anchor-heading"><a href="#loading">¶</a><a href="javascript:void(0)" id="loading" class="anchor-point"></a><code>Loading</code></h4>\n<p><code>Loading</code> 拆分成了 3 种子类型，<code>import { BlockLoading, InlineLoading, FullScreenLoading } from \'zent\'</code>，<code>InlineLoading</code> 是新增的能力，不涉及迁移问题。新增了一种样式和描述文案支持。</p>\n<ul>\n<li>老版中用到 <code>float</code> 参数的场景可以用 <code>FullScreenLoading</code> 替换，非 <code>float</code> 的场景用 <code>BlockLoading</code> 替换</li>\n<li><code>showDelay</code> 重命名为 <code>delay</code>，逻辑一致</li>\n<li><code>show</code> 重命名为 <code>loading</code>，逻辑一致</li>\n<li>删除了 <code>containerClass</code> 参数</li>\n<li>CSS 类名和 HTML 结果有变化，有样式复写的需要确认样式是否正常。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#radio">¶</a><a href="javascript:void(0)" id="radio" class="anchor-point"></a><code>Radio</code></h4>\n<p>现在 Radio 的 <code>disable</code> 属性总是比父组件 RadioGroup 的 <code>disable</code> 拥有更高优先级。</p>\n<h4 class="anchor-heading"><a href="#checkbox">¶</a><a href="javascript:void(0)" id="checkbox" class="anchor-point"></a><code>Checkbox</code></h4>\n<p>现在 Checkbox 的 <code>disable</code> 属性总是比父组件 CheckboxGroup 的 <code>disable</code> 拥有更高优先级。</p>\n<h4 class="anchor-heading"><a href="#design-he-sku">¶</a><a href="javascript:void(0)" id="design-he-sku" class="anchor-point"></a><code>Design</code> 和 <code>SKU</code></h4>\n<p>使用 <code>@zent/design</code> 和 <code>@zent/sku</code>，功能一致的。</p>\n<h4 class="anchor-heading"><a href="#switch">¶</a><a href="javascript:void(0)" id="switch" class="anchor-point"></a><code>Switch</code></h4>\n<p>用了大号样式的地方统一改成默认样式，同时找视觉确认下。</p>\n<h4 class="anchor-heading"><a href="#tree">¶</a><a href="javascript:void(0)" id="tree" class="anchor-point"></a><code>Tree</code></h4>\n<ul>\n<li>删除了老版的非受控代码，只支持受控模式（这个很早就存在了），组件参数基本是一致的。</li>\n<li>选中逻辑仅保留受控模式</li>\n<li><code>defaultCheckedKeys</code> 重命名为 <code>checkedKeys</code></li>\n<li><code>onCheck</code> 参数发生变化</li>\n</ul>\n<pre><code class="language-ts"><span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token punctuation">:</span> <span class="token keyword">Array</span><span class="token punctuation">,</span> extra<span class="token punctuation">:</span> IExtra<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">,</span> extra<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        checkedKeys<span class="token punctuation">:</span> checked<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">IExtra</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 触发onCheck的节点</span>\n  currentRoot<span class="token punctuation">:</span> Node<span class="token punctuation">;</span>\n  <span class="token comment">// 禁用节点集合</span>\n  disabled<span class="token punctuation">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">//  所有选中的节点集合</span>\n  all<span class="token punctuation">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">//  所有选中节点的祖先节点；即全选可能只有顶部节点</span>\n  top<span class="token punctuation">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">//  能够组成这次选中的最底层节点；即全选可能是金字塔底部的节点</span>\n  bottom<span class="token punctuation">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 class="anchor-heading"><a href="#numberinput">¶</a><a href="javascript:void(0)" id="numberinput" class="anchor-point"></a><code>NumberInput</code></h4>\n<ul>\n<li>组件完全重写</li>\n<li><code>onChange</code> 的参数改为字符串，原来是个事件对象</li>\n<li>修改了 <code>onChange</code> 触发的行为，现在只会在 <code>onBlur</code> 或者通过加减按钮修改时触发 <code>onChange</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#form">¶</a><a href="javascript:void(0)" id="form" class="anchor-point"></a><code>Form</code></h4>\n<p><code>equals</code> 和 <code>equalsField</code> 这两个内置校验方法迁移到 <code>===</code>，以前是 <code>==</code>，用到的地方需要自行排查是否兼容。</p>\n<h4 class="anchor-heading"><a href="#layout">¶</a><a href="javascript:void(0)" id="layout" class="anchor-point"></a><code>Layout</code></h4>\n<p>组件真正支持响应式布局，意味着布局可以随着屏幕大小变化而调整，之前的版本布局是固定的。</p>\n<p>导出的组件名字变了，老的写法</p>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span></code></pre>\n<p>新的写法</p>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> LayoutRow <span class="token keyword">as</span> Row<span class="token punctuation">,</span> LayoutCol <span class="token keyword">as</span> Col<span class="token punctuation">,</span> LayoutGrid <span class="token keyword">as</span> Grid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span></code></pre>\n<p>另外，<code>LayoutRow</code> 和 <code>LayoutCol</code> 必须在 <code>LayoutGrid</code> 内部。</p>\n<h3 class="anchor-heading"><a href="#tag">¶</a><a href="javascript:void(0)" id="tag" class="anchor-point"></a><code>Tag</code></h3>\n<ul>\n<li>删除<code>onVisibleChange</code>，不再有内部<code>state</code></li>\n<li>搭配 <code>visible</code> 和 <code>onClose</code> 可以实现关闭效果</li>\n<li>删除<code>borderColor</code>，<code>bgColor</code>，<code>fontColor</code>，直接从<code>style</code>传入控制</li>\n<li>删除<code>closeButtonFontColor</code>，添加<code>closeButtonStyle</code></li>\n<li>预设主题色属性从 <code>color</code> 改名为 <code>theme</code>，移除 <code>darkgreen</code> 主题色，且不再支持自定义颜色传递，需要自定义样式可改用 <code>style</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#portal">¶</a><a href="javascript:void(0)" id="portal" class="anchor-point"></a><code>Portal</code></h4>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Portal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> PurePortal <span class="token punctuation">}</span> <span class="token operator">=</span> Portal<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyPortal1 <span class="token operator">=</span> Portal<span class="token punctuation">.</span><span class="token function">withEscToClose</span><span class="token punctuation">(</span>Portal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> MyPortal2 <span class="token operator">=</span> Portal<span class="token punctuation">.</span><span class="token function">withNonScrollable</span><span class="token punctuation">(</span>Portal<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>新的写法</p>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Portal<span class="token punctuation">,</span> PurePortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span>\n\n<span class="token comment">// 替代 withEscToClose</span>\n<span class="token operator">&#x3C;</span>Portal closeOnESC<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&#x3C;</span><span class="token operator">/</span>Portal<span class="token operator">></span>\n\n<span class="token comment">// 替代 withNonScrollable</span>\n<span class="token operator">&#x3C;</span>Portal blockPageScroll<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&#x3C;</span><span class="token operator">/</span>Portal<span class="token operator">></span></code></pre>\n<ul>\n<li>删除了 <code>LayeredPortal</code>，请用 <code>Portal</code> 替换。</li>\n<li>去除 <code>onMount</code> 和 <code>onUnmount</code>，使用方直接使用上层组件的 <code>componentDidMount</code> 和 <code>componentWillUnmount</code> 即可。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#input">¶</a><a href="javascript:void(0)" id="input" class="anchor-point"></a><code>Input</code></h4>\n<ul>\n<li>重写，API 无不兼容改动</li>\n<li>CSS 样式层级有变化，样式覆盖需要注意</li>\n<li>增加了 <code>icon</code> 属性</li>\n</ul>\n<h4 class="anchor-heading"><a href="#searchinput">¶</a><a href="javascript:void(0)" id="searchinput" class="anchor-point"></a><code>SearchInput</code></h4>\n<ul>\n<li>删除了这个组件，使用 <code>&#x3C;input icon="search" /></code> 代替</li>\n</ul>\n<h4 class="anchor-heading"><a href="#blockheader">¶</a><a href="javascript:void(0)" id="blockheader" class="anchor-point"></a><code>BlockHeader</code></h4>\n<ul>\n<li>删除 <code>content</code> 和 <code>childAlign</code>，改用 <code>leftContent</code> 和 <code>rightContent</code> 来控制左右侧额外展示的内容</li>\n<li>不再渲染 <code>children</code> 中的内容</li>\n<li>整体布局改为 <code>flex</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#alert">¶</a><a href="javascript:void(0)" id="alert" class="anchor-point"></a><code>Alert</code></h3>\n<ul>\n<li>内部布局改为 flex 布局</li>\n<li>删除 <code>type</code> 属性中的 <code>danger</code> 类型（可改用 <code>error</code> 类型），添加 <code>success</code> 类型</li>\n<li>删除 <code>size</code>、<code>rounded</code> 属性（新版设计中都是圆角样式，且没有大小区分，需要自定义大小和圆角请使用自定义 <code>className</code> 修改样式）</li>\n<li>添加新的属性 <code>loading</code>、<code>outline</code>、<code>closeContent</code>、<code>extraContent</code>，使用方法请参考组件文档</li>\n<li>添加 <code>title</code>、<code>description</code> 两个属性用于简化内容排版</li>\n<li><code>onClose</code> 现在回调会在点击关闭触发器同时被触发，而不是等到 React 更新完后才触发</li>\n</ul>\n<h3 class="anchor-heading"><a href="#rate">¶</a><a href="javascript:void(0)" id="rate" class="anchor-point"></a><code>Rate</code></h3>\n<ul>\n<li>删除了 <code>zent-rate-star-active</code> 这个 class，外部如果依赖的话请使用 <code>zent-rate-star-half</code> 替换</li>\n</ul>\n<h3 class="anchor-heading"><a href="#progress">¶</a><a href="javascript:void(0)" id="progress" class="anchor-point"></a><code>Progress</code></h3>\n<ul>\n<li>修改状态计算逻辑，传入外部 <code>status</code> prop 的情况下，直接使用外部 <code>status</code>，否则通过百分比进行状态计算</li>\n<li>修改消息展示中 <code>format</code> 函数的优先级，<code>success</code> 和 <code>exception</code> 状态下只显示图标，不调用 <code>format</code> 函数</li>\n<li><code>line</code> 类型的默认宽度变为适配容器宽度（即100%）</li>\n</ul>\n<h3 class="anchor-heading"><a href="#tabs">¶</a><a href="javascript:void(0)" id="tabs" class="anchor-point"></a><code>Tabs</code></h3>\n<ul>\n<li>删除 <code>onTabChange</code>，这个回调等价于 <code>onChange</code>，并且两年前就已经 deprecate 了，如果有用到的直接替换就行</li>\n<li>内部布局修改为 flex 布局</li>\n<li>在 <code>children</code> 和 <code>tabs</code> 两种配置方式都未使用的情况下会报错，请检查之前的代码是否有使用空 tabs 的情况</li>\n<li>删除了之前未在文档中提及的 <code>TabPanel</code> 的 <code>onTabReady</code> prop 回调，如有需要，请在 <code>onChange</code> 回调中执行相关代码</li>\n<li>删除 <code>align</code> 参数，新版设计下不再支持自定义布局；若原来有通过 <code>align="center"</code> 的方式进行 tab 均分内容区域的地方，可以使用新的 prop —— <code>stretch</code> 代替</li>\n<li>修改 <code>type</code> 支持的样式类型，删除了 <code>slider</code> 类型，添加了 <code>button</code> 类型，默认展示样式类型从卡片样式改为新版基础样式，若需要维持卡片样式不变，请添加 <code>type="card"</code></li>\n<li>删除 <code>canadd</code> 和 <code>onAdd</code> 参数，若需要实现动态增删 tab，请使用 <code>navExtraContent</code>，传入自定义的 Add Trigger，可参考 tab 文档下的 \'动态增删\' demo</li>\n<li>删除 <code>size</code> 参数，需要自定义大小请使用 <code>className</code></li>\n<li>添加 <code>VerticalTabs</code> 组件，用于展示竖状样式</li>\n<li>修改了部分组件 className，请注意样式覆盖的使用场景</li>\n</ul>\n<h3 class="anchor-heading"><a href="#icon">¶</a><a href="javascript:void(0)" id="icon" class="anchor-point"></a><code>Icon</code></h3>\n<ul>\n<li>统一了 <code>Icon</code> 的画布大小，所以部分图标在同样 <code>font-size</code> 的情况下可能比原来的要小，样式上需要注意下</li>\n</ul>\n<h4 class="anchor-heading"><a href="#yuan-yang-shi">¶</a><a href="javascript:void(0)" id="yuan-yang-shi" class="anchor-point"></a>源样式</h4>\n<p>如果之前依赖了 postcss 的源样式，需要改成 sass。</p>\n<h2 class="anchor-heading"><a href="#7-0-0-next-39-2019-10-25">¶</a><a href="javascript:void(0)" id="7-0-0-next-39-2019-10-25" class="anchor-point"></a>7.0.0-next.39(2019-10-25)</h2>\n<ul>\n<li>增加所有组件的 <a href="../../apidoc">API 文档</a></li>\n<li>更新所有 <code>Icon</code>，统一了 <code>Icon</code> 的画布大小，所以部分图标在同样 <code>font-size</code> 的情况下可能比原来的要小</li>\n<li><code>Tabs</code> 修复切换 Panel 时的隐藏行为，默认和老版本保持一致，只是隐藏，不会 unmount；可以通过参数强制在切换时 unmount</li>\n<li>修复 <code>Sweetalert</code> 的类型定义</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-38-2019-10-15">¶</a><a href="javascript:void(0)" id="7-0-0-next-38-2019-10-15" class="anchor-point"></a>7.0.0-next.38(2019-10-15)</h2>\n<ul>\n<li>修复<code>Input</code>样式问题</li>\n<li>修复<code>Notice.close</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-37-2019-10-10">¶</a><a href="javascript:void(0)" id="7-0-0-next-37-2019-10-10" class="anchor-point"></a>7.0.0-next.37(2019-10-10)</h2>\n<ul>\n<li>修复 TimePicker resetTime 的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-36-2019-10-10">¶</a><a href="javascript:void(0)" id="7-0-0-next-36-2019-10-10" class="anchor-point"></a>7.0.0-next.36(2019-10-10)</h2>\n<ul>\n<li>修复 <code>Select.Option</code> 的导出问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-35-2019-10-10">¶</a><a href="javascript:void(0)" id="7-0-0-next-35-2019-10-10" class="anchor-point"></a>7.0.0-next.35(2019-10-10)</h2>\n<ul>\n<li>修复 <code>Pagination</code> 样式问题</li>\n<li>修复 <code>Alert</code> 样式问题 </li>\n<li>修改 <code>Grid</code> 排序 icon 样式</li>\n<li>修复 <code>Upload</code> 样式问题</li>\n<li><code>Checkbox</code> 样式修改</li>\n<li><code>Sweetalert</code> 添加 <code>onClose</code> 回调</li>\n<li>修复 <code>Tree</code> 会修改外部传入的数据的问题</li>\n<li><code>Tabs</code> 添加类型不匹配时的默认展示行为</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-34-2019-09-20-xiu-fu-3">¶</a><a href="javascript:void(0)" id="7-0-0-next-34-2019-09-20-xiu-fu-3" class="anchor-point"></a>7.0.0-next.34(2019-09-20) 修复 33 的发布问题，内容一样</h2>\n<h2 class="anchor-heading"><a href="#7-0-0-next-33-2019-09-20-zhe-ge-ban-ben">¶</a><a href="javascript:void(0)" id="7-0-0-next-33-2019-09-20-zhe-ge-ban-ben" class="anchor-point"></a>7.0.0-next.33(2019-09-20) 这个版本有问题，不要使用</h2>\n<ul>\n<li>修复 <code>Loading</code> 的延迟</li>\n<li>修复 <code>Alert</code> 的样式</li>\n<li><a href="#progress">重构 <code>Progress</code></a></li>\n<li><a href="#tabs">重构 <code>Tabs</code></a></li>\n<li>修复 <code>Sortable.js</code> 的类型定义</li>\n<li><code>Rate</code> 增加 <code>readonly</code></li>\n<li>修复 <code>Notice</code> 的 <code>className</code> 和 <code>style</code></li>\n<li>重构 <code>Slider</code>，内部实现有变化</li>\n<li>修复 <code>DateQuickRangePicker</code> 在 <code>Form</code> 下的高亮</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-32-2019-09-16">¶</a><a href="javascript:void(0)" id="7-0-0-next-32-2019-09-16" class="anchor-point"></a>7.0.0-next.32(2019-09-16)</h2>\n<ul>\n<li>修复 <code>Select</code> 样式</li>\n<li><code>Button</code> 添加 warning 样式</li>\n<li>添加新组件 <code>Notice</code></li>\n<li>修复 <code>Notify</code> 样式</li>\n<li>更新 <code>Upload</code> 样式</li>\n<li>修复 <code>Table</code> 类型定义</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-31-2019-09-06">¶</a><a href="javascript:void(0)" id="7-0-0-next-31-2019-09-06" class="anchor-point"></a>7.0.0-next.31(2019-09-06)</h2>\n<ul>\n<li>\n<p><code>Input</code></p>\n<ul>\n<li>删除组件的内联样式，放到样式文件内，方便外部覆盖</li>\n<li>图标从左侧移到右侧</li>\n</ul>\n</li>\n<li>修复 <code>Button</code> 对 <code>Disabled</code> 组件兼容性问题</li>\n<li>替换 <code>ColorPicker</code> 内的 <code>componentWillReceiveProps</code> 为新 API</li>\n<li>修复 <code>Table</code> 排序逻辑错误</li>\n<li>\n<p><code>Grid</code></p>\n<ul>\n<li>hover 背景色由灰色改为蓝色</li>\n<li>纵轴滚动条设置为 <code>auto</code>，高度不够时不显示滚动条</li>\n</ul>\n</li>\n<li>更新 <code>Notify</code> 为最新的样式</li>\n<li>修复 <code>Select</code> tags 模式的样式问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-30-2019-08-27">¶</a><a href="javascript:void(0)" id="7-0-0-next-30-2019-08-27" class="anchor-point"></a>7.0.0-next.30(2019-08-27)</h2>\n<ul>\n<li><code>Pop</code> 添加 <code>cushion</code> API</li>\n<li><code>NumberInput</code> 调整内部实现，<code>integer</code> 模式下用户输入为空时 <code>onChange</code> 会得到 <code>null</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-29-2019-08-23">¶</a><a href="javascript:void(0)" id="7-0-0-next-29-2019-08-23" class="anchor-point"></a>7.0.0-next.29(2019-08-23)</h2>\n<ul>\n<li>修复 <code>QuarterPicker</code> 的选中逻辑</li>\n<li>按新的视觉样式重写 <code>Alert</code>，有不兼容改动，具体参考上面的 <code>Alert</code> 一节</li>\n<li><code>Popover</code> 的 trigger 支持 functional component</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-28-2019-08-22">¶</a><a href="javascript:void(0)" id="7-0-0-next-28-2019-08-22" class="anchor-point"></a>7.0.0-next.28(2019-08-22)</h2>\n<ul>\n<li>样式重构为 CSS Variable</li>\n<li><code>package.json</code> 里加回 <code>main</code> 字段，和 <code>modules</code> 指向相同的代码</li>\n<li><code>Grid</code> 和 <code>Table</code> 支持 <code>mini</code> 类型的分页器</li>\n<li>重写 <code>Icon</code> 组件为 functional component</li>\n<li>用 Hooks 重写 <code>Checkbox</code> 组件，现在 <code>Checkbox</code> 的 <code>disable</code> 属性总是比父组件 <code>CheckboxGroup</code> 的 <code>disable</code> 拥有更高优先级</li>\n<li><code>NumberInput</code> 支持整数模式，此时 <code>value</code> 类型为数字</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-27-2019-08-19">¶</a><a href="javascript:void(0)" id="7-0-0-next-27-2019-08-19" class="anchor-point"></a>7.0.0-next.27(2019-08-19)</h2>\n<ul>\n<li>修复 <code>AnimateHeight</code> 高度为 <code>auto</code> 时动画结束没有正确设置高度为 <code>auto</code> 的问题</li>\n<li>修复 <code>Tree</code> 的更新逻辑</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-26-2019-08-14">¶</a><a href="javascript:void(0)" id="7-0-0-next-26-2019-08-14" class="anchor-point"></a>7.0.0-next.26(2019-08-14)</h2>\n<ul>\n<li>修复 <code>TypeScript</code> 编译器导致的的一个循环依赖 bug</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-25-2019-08-14">¶</a><a href="javascript:void(0)" id="7-0-0-next-25-2019-08-14" class="anchor-point"></a>7.0.0-next.25(2019-08-14)</h2>\n<ul>\n<li>更新 <code>Cascader</code> 和 <code>Form</code> 的样式</li>\n<li>修复非法属性被透传到 <code>input</code> 的问题</li>\n<li>使用 Hooks 重写 <code>Radio</code> 组件，现在 <code>Radio</code> 的 <code>disable</code> 属性总是比父组件 <code>RadioGroup</code> 的 <code>disable</code> 拥有更高优先级</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-24-2019-08-05">¶</a><a href="javascript:void(0)" id="7-0-0-next-24-2019-08-05" class="anchor-point"></a>7.0.0-next.24(2019-08-05)</h2>\n<ul>\n<li>修复 <code>Upload</code> 组件 <code>categoryId</code> 无法修改的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-23-2019-07-31">¶</a><a href="javascript:void(0)" id="7-0-0-next-23-2019-07-31" class="anchor-point"></a>7.0.0-next.23(2019-07-31)</h2>\n<ul>\n<li>修复 <code>Input</code> 样式问题</li>\n<li>修复 <code>date-fns</code> 代码引用问题</li>\n<li>修复 <code>Layout</code> 响应式参数不生效的问题</li>\n<li><code>Tree</code> 组件选择行为仅保留受控形式，详见上面的迁移指南</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-22-2019-07-30">¶</a><a href="javascript:void(0)" id="7-0-0-next-22-2019-07-30" class="anchor-point"></a>7.0.0-next.22(2019-07-30)</h2>\n<ul>\n<li>临时修复三方依赖类型定义和实际代码对不上的问题</li>\n<li>修复 <code>Disabled</code> 组件对 <code>textarea</code> 不生效的问题</li>\n<li>修复 <code>Grid</code> 鼠标移动时触发重绘的问题</li>\n<li>修复 <code>Mention</code>, <code>AutoComplete</code> 弹层不出现的问题</li>\n<li>修复 <code>ColorPicker</code> 修改颜色没有及时生效的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-21-2019-07-26">¶</a><a href="javascript:void(0)" id="7-0-0-next-21-2019-07-26" class="anchor-point"></a>7.0.0-next.21(2019-07-26)</h2>\n<ul>\n<li>删除 <code>cjs</code> 格式输出，只支持 esm；白话版：npm 包里 <code>lib</code> 目录没有了，只保留 <code>es</code></li>\n<li>新增 <code>Disabled</code> 组件，用来做区块级别的组件禁用</li>\n<li>修改 <code>Grid</code> 和 <code>Table</code> 组件排序规则，同时扩大点击热区到整个表头</li>\n<li>修复文档小程序组件库链接</li>\n<li>修复 <code>Input</code> 背景颜色不对的问题</li>\n<li><code>Table</code> 排序按钮现在和 <code>Grid</code> 一致，一致显示，不需要 hover</li>\n<li>补全 <code>Grid</code> 的类型定义</li>\n<li>移除 <code>Cascader</code>, <code>Swiper</code> 以及 <code>LazyMount</code> 内的废弃生命周期函数依赖</li>\n<li>增加文档百度统计能力</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-20-2019-07-11">¶</a><a href="javascript:void(0)" id="7-0-0-next-20-2019-07-11" class="anchor-point"></a>7.0.0-next.20(2019-07-11)</h2>\n<ul>\n<li>修复 <code>Form</code> 最后一个 <code>Field</code> 设置 <code>validateOnBlur</code> 为 <code>false</code> 时表单校验结果没有更新的问题</li>\n<li>\n<p><code>Pagination</code></p>\n<ul>\n<li>修复 <code>double</code> 属性警告\n- 修复页码输入框触发上层表单提交的问题</li>\n</ul>\n</li>\n<li>修复 <code>DatePicker</code> 字体样式</li>\n<li>修复在第一次 mount <code>Portal</code> 时如果 <code>selector</code> 节点不存在的报错问题</li>\n<li>修复 <code>NumberInput</code> 不传 <code>value</code> 时的非必要重绘</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-19-2019-06-26">¶</a><a href="javascript:void(0)" id="7-0-0-next-19-2019-06-26" class="anchor-point"></a>7.0.0-next.19(2019-06-26)</h2>\n<ul>\n<li>重写 <code>BlockHeader</code>，有不兼容改动，详见上面的迁移指南</li>\n<li>重写 <code>Input</code>，增加 <code>icon</code> 支持，样式覆盖可能有兼容问题，详见上面的迁移指南</li>\n<li>删除 <code>SearchInput</code>，使用 <code>&#x3C;input icon="search" /></code> 代替</li>\n<li>修复嵌套 <code>Portal</code> 的 <code>componentDidMount</code> 时无法获取正确 DOM 信息的问题</li>\n<li>回滚 <code>TypeScript</code> 到 3.4，3.5 有严重问题</li>\n<li>更新 <code>Upload</code> 的文案</li>\n<li><code>Pagination</code> 右对齐</li>\n<li>使用 <code>flex-start</code> 以及 <code>flex-end</code> 替换 <code>start</code> 和 <code>end</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-18-2019-06-24">¶</a><a href="javascript:void(0)" id="7-0-0-next-18-2019-06-24" class="anchor-point"></a>7.0.0-next.18(2019-06-24)</h2>\n<ul>\n<li>重排 <code>primary</code> 颜色的顺序，从深到浅，自定义主题的需要更新一下主题色顺序(<a href="https://github.com/youzan/zent/pull/1096">1096</a>)</li>\n<li>修复 <code>Grid</code> 类型没导出完全的问题</li>\n<li>修复 <code>ButtonDirective</code> 默认值问题</li>\n<li><code>Table</code> 和 <code>Grid</code> 增加 <code>Pagination</code> 的 <code>formatTotal</code> 支持</li>\n<li>修复 <code>Grid</code> 样式问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-17-2019-06-24">¶</a><a href="javascript:void(0)" id="7-0-0-next-17-2019-06-24" class="anchor-point"></a>7.0.0-next.17(2019-06-24)</h2>\n<p>内容同 <code>7.0.0-next.18</code>，遇到一个 <code>TypeScript</code> 的 <a href="https://github.com/microsoft/TypeScript/issues/32057">bug</a>，已下线，不要使用。</p>\n<h2 class="anchor-heading"><a href="#7-0-0-next-16-2019-06-18">¶</a><a href="javascript:void(0)" id="7-0-0-next-16-2019-06-18" class="anchor-point"></a>7.0.0-next.16(2019-06-18)</h2>\n<ul>\n<li>更新全局字体配色</li>\n<li>修复 <code>Tag</code> 组件样式问题，移除 <code>color</code> 属性，增加 <code>theme</code> 属性</li>\n<li>修复 <code>Loading</code> 组件包裹内容时导致内容重绘的问题</li>\n<li><code>Pagination</code> 增加 <code>formatTotal</code> 用来自定义总数</li>\n<li>修复 <code>Table</code> 批量操作区域样式</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-15-2019-06-10">¶</a><a href="javascript:void(0)" id="7-0-0-next-15-2019-06-10" class="anchor-point"></a>7.0.0-next.15(2019-06-10)</h2>\n<ul>\n<li>修复 <code>babel-plugin-zent</code> 处理非 <code>default export</code> 的问题</li>\n<li>修复 <code>TabPanel</code> 缺失的 <code>disabled</code> 属性</li>\n<li>修复 <code>Upload</code> 在小屏幕情况下样式问题</li>\n<li>重构 <code>Button</code>，新增 <code>ButtonDirective</code> 替换 <code>component</code> 的使用场景</li>\n<li>重构 <code>Tag</code>，删除<code>onVisibleChange</code>，不再有内部<code>state</code>；搭配 <code>visible</code> 和 <code>onClose</code> 可以实现关闭效果；删除<code>borderColor</code>，<code>bgColor</code>，<code>fontColor</code>，直接从<code>style</code>传入控制；删除<code>closeButtonFontColor</code>，添加<code>closeButtonStyle</code></li>\n<li>重构 <code>AnimationHeight</code>，删除无用功能，保留最小可用功能</li>\n<li>\n<p><code>Pagination</code></p>\n<ul>\n<li>删除 <code>componentWillReceiveProps</code></li>\n<li>优化上一个、下一个按钮的禁用逻辑</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-14-2019-05-29">¶</a><a href="javascript:void(0)" id="7-0-0-next-14-2019-05-29" class="anchor-point"></a>7.0.0-next.14(2019-05-29)</h2>\n<ul>\n<li>修复嵌套 <code>Dialog</code> 关闭时窗口滚动问题</li>\n<li>修复 <code>NumberInput</code> 加减按钮没有 <code>onChange</code> 回调的问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-13-2019-05-21">¶</a><a href="javascript:void(0)" id="7-0-0-next-13-2019-05-21" class="anchor-point"></a>7.0.0-next.13(2019-05-21)</h2>\n<ul>\n<li>修复 <code>Pagination</code> 样式</li>\n<li><code>Grid</code> 支持 <code>bodyRender</code> 的参数添加 <code>fixed</code> 属性，用来判断固定了哪里的列</li>\n<li><code>DataRangeQuickPicker</code> 支持在 <code>preset</code> 里自定义时间区间</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-12-2019-05-21">¶</a><a href="javascript:void(0)" id="7-0-0-next-12-2019-05-21" class="anchor-point"></a>7.0.0-next.12(2019-05-21)</h2>\n<ul>\n<li>支持 <code>React.CSSProperties</code> 形式的 style 属性</li>\n<li>修复 <code>Portal</code> 每次 render 都重新 mount 的问题</li>\n<li>移除 <code>DatePicker</code>, <code>ClampLine</code> 以及 <code>Menu</code> 的 <code>componentWillReceiveProps</code> 生命周期依赖</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-11-2019-04-29">¶</a><a href="javascript:void(0)" id="7-0-0-next-11-2019-04-29" class="anchor-point"></a>7.0.0-next.11(2019-04-29)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li><code>Portal</code> hooks 重构，API 有变化，具体看上面的 <code>Portal</code> 部分</li>\n<li><code>NumberInput</code> 默认关闭 <code>autoComplete</code></li>\n<li>更新了组件的字体大小，现在是 14，之前改漏了</li>\n</ul>\n<h3 class="anchor-heading"><a href="#qi-ta">¶</a><a href="javascript:void(0)" id="qi-ta" class="anchor-point"></a>其他</h3>\n<ul>\n<li>更新打包时的警告信息</li>\n<li>更新了一些组件的类型定义</li>\n<li>清理 <code>SelectMenu</code> 的代码</li>\n<li><code>Grid</code> 文档里的排序功能增加了数据变化，更加直观</li>\n<li>修复了 <code>Grid</code> 没有滚动条时的多余阴影问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-10-2019-03-29">¶</a><a href="javascript:void(0)" id="7-0-0-next-10-2019-03-29" class="anchor-point"></a>7.0.0-next.10(2019-03-29)</h2>\n<h2 class="anchor-heading"><a href="#7-0-0-next-9-2019-03-29">¶</a><a href="javascript:void(0)" id="7-0-0-next-9-2019-03-29" class="anchor-point"></a>7.0.0-next.9(2019-03-29)</h2>\n<ul>\n<li>新增 <code>TextMark</code> 组件，用于高亮文本中的一组关键字</li>\n<li>\n<p><code>Table</code> 和 <code>Grid</code></p>\n<ul>\n<li>支持通过 <code>paginationType="lite"</code> 选择简化版的分页器</li>\n<li>修复一个样式问题</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-8-2019-03-27">¶</a><a href="javascript:void(0)" id="7-0-0-next-8-2019-03-27" class="anchor-point"></a>7.0.0-next.8(2019-03-27)</h2>\n<ul>\n<li>修复了一些文档和类型定义问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-7-2019-03-25">¶</a><a href="javascript:void(0)" id="7-0-0-next-7-2019-03-25" class="anchor-point"></a>7.0.0-next.7(2019-03-25)</h2>\n<ul>\n<li>修复 <code>NumberInput</code> 的样式问题</li>\n<li>修复 <code>Timeline</code> 的演示代码问题</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-6-2019-03-25">¶</a><a href="javascript:void(0)" id="7-0-0-next-6-2019-03-25" class="anchor-point"></a>7.0.0-next.6(2019-03-25)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li><code>Form</code> 校验方法中的 <code>equals</code> 和 <code>equalsField</code> 迁移到 <code>===</code> 比较，之前是 <code>==</code></li>\n<li>重写 <code>NumberInput</code> 组件，<code>onChange</code> 参数修改为字符串，不再是个模拟的事件对象；同时 <code>onChange</code> 只在 blur 的时候触发</li>\n<li>更新了 <code>babel-plugin-zent</code> 插件的数据格式，不兼容以前的版本</li>\n<li>重写 <code>Layout</code>，不再导出 <code>Layout</code> 这个命名空间；同时真正支持响应式布局</li>\n</ul>\n<h3 class="anchor-heading"><a href="#qi-ta">¶</a><a href="javascript:void(0)" id="qi-ta" class="anchor-point"></a>其他</h3>\n<ul>\n<li>删除了组件上所有的 <code>propTypes</code>，现在依赖 <code>TypeScript</code> 的类型系统；使用 JavaScript 的话就没有 props 的类型检查了</li>\n<li>组件代码迁移到 TypeScript，同时使用 <code>tsc</code> 替代 <code>babel</code> 做转码</li>\n<li>恢复主题自定义功能，使用方式有变化，具体看文档</li>\n<li><code>Portal</code> 支持嵌套，后续会把 <code>Popover</code> 里处理嵌套的相关逻辑迁移到 <code>Portal</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-5-2019-02-28">¶</a><a href="javascript:void(0)" id="7-0-0-next-5-2019-02-28" class="anchor-point"></a>7.0.0-next.5(2019-02-28)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li>拆分 <code>Pagination</code> 为 <code>Pagination</code>, <code>MiniPagination</code> 以及 <code>LitePagination</code> 三个独立的样式。</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-4-2019-02-26">¶</a><a href="javascript:void(0)" id="7-0-0-next-4-2019-02-26" class="anchor-point"></a>7.0.0-next.4(2019-02-26)</h2>\n<h3 class="anchor-heading"><a href="#bu-jian-rong-gai-dong">¶</a><a href="javascript:void(0)" id="bu-jian-rong-gai-dong" class="anchor-point"></a>不兼容改动</h3>\n<ul>\n<li>默认字号从 12 调整为 14</li>\n<li><code>prefix</code> 参数不再支持，后续后全面移除，现在部分组件已经移除</li>\n<li>不再支持 16.8 以下的 React(Hooks 的最小可用版本)</li>\n<li>删除 UMD 格式输出</li>\n<li><code>Pagination</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li><code>Loading</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li>用 React 新的 context API 重写 <code>RadioGroup</code> 和 <code>CheckboxGroup</code></li>\n<li>移除 <code>Design</code> 和 <code>SKU</code> 组件，请使用 <code>@zent/design</code> 和 <code>@zent/sku</code>。<code>SKU</code> 组件不再维护，<code>Design</code> 组件进入维护期，不再迭代。</li>\n<li><code>Switch</code> 删除大号样式支持</li>\n<li><code>Tree</code> 组件删除老版支持(即不再支持 <code>useNew</code> 参数选择使用的版本)</li>\n<li>废弃 <code>postcss</code> 改用 <code>node-sass</code>，样式源文件（assets 目录下的）按需加载需要升级 <code>babel-plugin-zent</code> 到 <code>2.0.0-next.3</code></li>\n<li><code>NumberInput</code> 的 <code>onChange</code> 回调的参数是 <code>string</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#qi-ta">¶</a><a href="javascript:void(0)" id="qi-ta" class="anchor-point"></a>其他</h3>\n<ul>\n<li>样式更新：<code>Button</code>, <code>SplitButton</code>, <code>Breadcrumb</code>, <code>Steps</code>, <code>Menu</code>, <code>Radio</code>, <code>Checkbox</code>, <code>Input</code>, <code>Select</code>, <code>Slider</code>, <code>Switch</code>, <code>Badge</code>, <code>Collapse</code>, <code>Pop</code>, <code>Tabs</code>, <code>Tag</code>, <code>Timeline</code>, <code>Dialog</code>, <code>Progress</code>, <code>Rate</code>, <code>Collapse</code>, <code>Table</code>, <code>Grid</code></li>\n<li>增加 <code>RadioButton</code>，按钮样式的单选框</li>\n<li>删除 <code>zan-utils</code> 依赖</li>\n<li>用 <code>createPortal</code> 重写 <code>Portal</code> 组件，API 向下兼容</li>\n</ul>'}))}}]),o}(b.Component)}}]);