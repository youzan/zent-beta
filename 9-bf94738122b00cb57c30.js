(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{729:function(e,o,c){"use strict";c.r(o),c.d(o,"default",function(){return x});var a=c(28),n=c.n(a),d=c(29),i=c.n(d),t=c(30),l=c.n(t),r=c(31),h=c.n(r),s=c(43),p=c.n(s),g=c(32),u=c.n(g),f=c(24),v=c.n(f),m=c(707),b=c.n(m),S=c(0),P=c.n(S),z=c(175);function k(e){return P.a.createElement(e.tag,b()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function j(e){return P.a.createElement(k,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function y(e){return P.a.createElement(k,{tag:"style",html:e.style})}S.Component;var x=function(e){function o(){return n()(this,o),l()(this,h()(o).apply(this,arguments))}return u()(o,e),i()(o,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var o=document.querySelector('a[href="'.concat(e,'"]'));o&&Object(z.a)(document.documentElement,0,function e(o,c){for(;o;)return o.offsetTop&&"static"!==getComputedStyle(o).position&&(c+=o.offsetTop),e(o.parentNode,c);return c}(o,-9))}}},{key:"render",value:function(){return P.a.createElement("div",{className:"zandoc-react-container",key:null},P.a.createElement(y,{style:""}),P.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#7-0-0-qian-yi-zhi-nan">¶</a><a href="javascript:void(0)" id="7-0-0-qian-yi-zhi-nan" class="anchor-point"></a>7.0.0 迁移指南</h2>\n<h4 class="anchor-heading"><a href="#quan-ju-bian-geng">¶</a><a href="javascript:void(0)" id="quan-ju-bian-geng" class="anchor-point"></a>全局变更</h4>\n<ul>\n<li><code>React</code> 必须升级到 16.8 以上</li>\n<li>删除了所有组件上的 <code>propTypes</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#babel-plugin-zent">¶</a><a href="javascript:void(0)" id="babel-plugin-zent" class="anchor-point"></a><code>babel-plugin-zent</code></h4>\n<p>需要升级到最新的版本，不兼容之前版本的 <code>zent</code></p>\n<h4 class="anchor-heading"><a href="#mo-ren-zi-hao-cong-12-diao-zheng-wei-14">¶</a><a href="javascript:void(0)" id="mo-ren-zi-hao-cong-12-diao-zheng-wei-14" class="anchor-point"></a>默认字号从 12 调整为 14</h4>\n<p>注意调整后的页面样式有没有问题</p>\n<h4 class="anchor-heading"><a href="#pagination">¶</a><a href="javascript:void(0)" id="pagination" class="anchor-point"></a><code>Pagination</code></h4>\n<p><code>Pagination</code> 分为 3 种类型，<code>import { Pagination, LitePagination, MiniPagination } from \'zent\'</code>。后两种是新增的，不涉及迁移问题。<code>Pagination</code> 的一些参数有变化：</p>\n<ul>\n<li><code>totalItem</code> 重命名为 <code>total</code>，老的参数名还是支持的，新代码请用 <code>total</code></li>\n<li><code>onChange</code> 回调函数的参数是个对象（老版是个数字），包含当前分页大小和当前页码，老版本只有当前页码</li>\n<li>删除了 <code>onPageSizeChange</code> 和 <code>maxPageToShow</code>，<code>onPageSizeChange</code> 的能力合并到 <code>onChange</code> 之中了</li>\n<li><code>pageSize</code> 不再耦合当前页码和页码选项，拆开成两个独立参数：<code>pageSize</code> 和 <code>pageSizeOptions</code>。分页选项配置也和原来的不一致，接受数字或者 <code>{value: number, text: node}</code>。</li>\n<li>CSS 类名和 HTML 结果有变化，有样式复写的需要确认样式是否正常。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#loading">¶</a><a href="javascript:void(0)" id="loading" class="anchor-point"></a><code>Loading</code></h4>\n<p><code>Loading</code> 拆分成了 3 种子类型，<code>import { BlockLoading, InlineLoading, FullScreenLoading } from \'zent\'</code>，<code>InlineLoading</code> 是新增的能力，不涉及迁移问题。新增了一种样式和描述文案支持。</p>\n<ul>\n<li>老版中用到 <code>float</code> 参数的场景可以用 <code>FullScreenLoading</code> 替换，非 <code>float</code> 的场景用 <code>BlockLoading</code> 替换</li>\n<li><code>showDelay</code> 重命名为 <code>delay</code>，逻辑一致</li>\n<li><code>show</code> 重命名为 <code>loading</code>，逻辑一致</li>\n<li>删除了 <code>containerClass</code> 参数</li>\n<li>CSS 类名和 HTML 结果有变化，有样式复写的需要确认样式是否正常。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#radiogroup-he-checkboxgroup">¶</a><a href="javascript:void(0)" id="radiogroup-he-checkboxgroup" class="anchor-point"></a><code>RadioGroup</code> 和 <code>CheckboxGroup</code></h4>\n<p>应该没有影响，只是内部实现变了。</p>\n<h4 class="anchor-heading"><a href="#design-he-sku">¶</a><a href="javascript:void(0)" id="design-he-sku" class="anchor-point"></a><code>Design</code> 和 <code>SKU</code></h4>\n<p>使用 <code>@zent/design</code> 和 <code>@zent/sku</code>，功能一致的。</p>\n<h4 class="anchor-heading"><a href="#switch">¶</a><a href="javascript:void(0)" id="switch" class="anchor-point"></a><code>Switch</code></h4>\n<p>用了大号样式的地方统一改成默认样式，同时找视觉确认下。</p>\n<h4 class="anchor-heading"><a href="#tree">¶</a><a href="javascript:void(0)" id="tree" class="anchor-point"></a><code>Tree</code></h4>\n<p>删除了老版的非受控代码，只支持受控模式（这个很早就存在了），参数是一致的，一些选中逻辑会有细微区别。</p>\n<h4 class="anchor-heading"><a href="#numberinput">¶</a><a href="javascript:void(0)" id="numberinput" class="anchor-point"></a><code>NumberInput</code></h4>\n<p>组件重写，<code>onChange</code> 的参数改为字符串。修改了<code>onChange</code>触发的行为，现在不会乱触发<code>onChange</code>。</p>\n<h4 class="anchor-heading"><a href="#form">¶</a><a href="javascript:void(0)" id="form" class="anchor-point"></a><code>Form</code></h4>\n<ul>\n<li><code>equals</code> 和 <code>equalsField</code> 这两个内置校验方法迁移到 <code>===</code>，以前是 <code>==</code>，用到的地方需要自行排查是否兼容。</li>\n</ul>\n<h4 class="anchor-heading"><a href="#yuan-yang-shi">¶</a><a href="javascript:void(0)" id="yuan-yang-shi" class="anchor-point"></a>源样式</h4>\n<p>如果之前依赖了 postcss 的源样式，需要改成 sass。</p>\n<h2 class="anchor-heading"><a href="#7-0-0-next-6-2019-03-25">¶</a><a href="javascript:void(0)" id="7-0-0-next-6-2019-03-25" class="anchor-point"></a>7.0.0-next.6(2019-03-25)</h2>\n<ul>\n<li>组件代码迁移到 TypeScript，同时使用 <code>tsc</code> 替代 <code>babel</code> 做转码</li>\n<li>删除了组件上所有的 <code>propTypes</code>，现在依赖 <code>TypeScript</code> 的类型系统；使用 JavaScript 的话就没有 props 的类型检查了</li>\n<li>恢复主题自定义功能，使用方式有变化，具体看文档</li>\n<li><code>Portal</code> 支持嵌套，后续会把 <code>Popover</code> 里处理嵌套的相关逻辑迁移到 <code>Portal</code></li>\n<li><code>Form</code> 校验方法中的 <code>equals</code> 和 <code>equalsField</code> 迁移到 <code>===</code> 比较，之前是 <code>==</code></li>\n<li>更新了 <code>babel-plugin-zent</code> 插件的数据格式，不兼容以前的版本</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-5-2019-02-28">¶</a><a href="javascript:void(0)" id="7-0-0-next-5-2019-02-28" class="anchor-point"></a>7.0.0-next.5(2019-02-28)</h2>\n<h3 class="anchor-heading"><a href="#breaking-changes">¶</a><a href="javascript:void(0)" id="breaking-changes" class="anchor-point"></a>Breaking changes</h3>\n<ul>\n<li>拆分 <code>Pagination</code> 为 <code>Pagination</code>, <code>MiniPagination</code> 以及 <code>LitePagination</code> 三个独立的样式。</li>\n</ul>\n<h2 class="anchor-heading"><a href="#7-0-0-next-4-2019-02-26">¶</a><a href="javascript:void(0)" id="7-0-0-next-4-2019-02-26" class="anchor-point"></a>7.0.0-next.4(2019-02-26)</h2>\n<h3 class="anchor-heading"><a href="#breaking-changes">¶</a><a href="javascript:void(0)" id="breaking-changes" class="anchor-point"></a>Breaking changes</h3>\n<ul>\n<li>默认字号从 12 调整为 14</li>\n<li><code>prefix</code> 参数不再支持，后续后全面移除，现在部分组件已经移除</li>\n<li>不再支持 16.8 以下的 React(Hooks 的最小可用版本)</li>\n<li>删除 UMD 格式输出</li>\n<li><code>Pagination</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li><code>Loading</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li>用 React 新的 context API 重写 <code>RadioGroup</code> 和 <code>CheckboxGroup</code></li>\n<li>移除 <code>Design</code> 和 <code>SKU</code> 组件，请使用 <code>@zent/design</code> 和 <code>@zent/sku</code>。<code>SKU</code> 组件不再维护，<code>Design</code> 组件进入维护期，不再迭代。</li>\n<li><code>Switch</code> 删除大号样式支持</li>\n<li><code>Tree</code> 组件删除老版支持(即不再支持 <code>useNew</code> 参数选择使用的版本)</li>\n<li>废弃 <code>postcss</code> 改用 <code>node-sass</code>，样式源文件（assets 目录下的）按需加载需要升级 <code>babel-plugin-zent</code> 到 <code>2.0.0-next.3</code></li>\n<li><code>NumberInput</code> 的 <code>onChange</code> 回调的参数是 <code>string</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#other-changes">¶</a><a href="javascript:void(0)" id="other-changes" class="anchor-point"></a>Other changes</h3>\n<ul>\n<li>样式更新：<code>Button</code>, <code>SplitButton</code>, <code>Breadcrumb</code>, <code>Steps</code>, <code>Menu</code>, <code>Radio</code>, <code>Checkbox</code>, <code>Input</code>, <code>Select</code>, <code>Slider</code>, <code>Switch</code>, <code>Badge</code>, <code>Collapse</code>, <code>Pop</code>, <code>Tabs</code>, <code>Tag</code>, <code>Timeline</code>, <code>Dialog</code>, <code>Progress</code>, <code>Rate</code>, <code>Collapse</code>, <code>Table</code>, <code>Grid</code></li>\n<li>增加 <code>RadioButton</code>，按钮样式的单选框</li>\n<li>删除 <code>zan-utils</code> 依赖</li>\n<li>用 <code>createPortal</code> 重写 <code>Portal</code> 组件，API 向下兼容</li>\n</ul>'}))}}]),o}(S.Component)}}]);