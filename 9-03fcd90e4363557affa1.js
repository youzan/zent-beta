(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{795:function(e,o,c){"use strict";c.r(o),c.d(o,"default",function(){return D});var n=c(33),i=c.n(n),l=c(34),d=c.n(l),a=c(35),r=c.n(a),s=c(36),t=c.n(s),p=c(45),h=c.n(p),u=c(37),g=c.n(u),f=c(38),v=c.n(f),k=c(773),m=c.n(k),b=c(0),S=c.n(b),j=c(195);function F(e){return S.a.createElement(e.tag,m()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function P(e){return S.a.createElement(F,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function y(e){return S.a.createElement(F,{tag:"style",html:e.style})}b.Component;var D=function(e){function o(){return i()(this,o),r()(this,t()(o).apply(this,arguments))}return g()(o,e),d()(o,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var o=document.querySelector('a[href="'.concat(e,'"]'));o&&Object(j.a)(document.documentElement,0,function e(o,c){for(;o;)return o.offsetTop&&"static"!==getComputedStyle(o).position&&(c+=o.offsetTop),e(o.parentNode,c);return c}(o,-9))}}},{key:"render",value:function(){return S.a.createElement("div",{className:"zandoc-react-container",key:null},S.a.createElement(y,{style:""}),S.a.createElement(P,{html:'<h2 class="anchor-heading"><a href="#geng-xin-ri-zhi">¶</a><a href="javascript:void(0)" id="geng-xin-ri-zhi" class="anchor-point"></a>更新日志</h2>\n<p>3.5.3 之前版本的详细修改记录请看 <a href="github_changelog#zent-3-5-2-2017-09-07">Github 日志</a>。</p>\n<h3 class="anchor-heading"><a href="#sheng-ji-zhi-nan">¶</a><a href="javascript:void(0)" id="sheng-ji-zhi-nan" class="anchor-point"></a>升级指南</h3>\n<ul>\n<li><a href="../migrating/3x">3.x 升级指南</a></li>\n<li><a href="../migrating/21x">2.1.x 升级指南</a></li>\n<li><a href="./changelog-v7">7.x 升级指南</a></li>\n</ul>\n<h3 class="anchor-heading"><a href="#7-0-0-2019-11-01">¶</a><a href="javascript:void(0)" id="7-0-0-2019-11-01" class="anchor-point"></a>7.0.0 (2019-11-01)</h3>\n<p>改动较多，参考<a href="./changelog-v7">这个文档</a>。</p>\n<h3 class="anchor-heading"><a href="#6-6-2-2019-02-26">¶</a><a href="javascript:void(0)" id="6-6-2-2019-02-26" class="anchor-point"></a>6.6.2 (2019-02-26)</h3>\n<ul>\n<li>\n<p><code>Form</code> </p>\n<ul>\n<li>🦀️ 修复异步检验通过还是报错的问题</li>\n<li>🦀️ 更新 <code>createForm</code> 的 TypeScript 定义</li>\n</ul>\n</li>\n<li>🦀️ 增加 <code>Affix</code> 以及 <code>Avatar</code> DOM 节点不存在时的异常校验 </li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-6-1-2019-01-30">¶</a><a href="javascript:void(0)" id="6-6-1-2019-01-30" class="anchor-point"></a>6.6.1 (2019-01-30)</h3>\n<ul>\n<li>🦀️ 修复 <code>Grid</code> 表头滚动时内容不跟着滚动的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-6-0-2019-01-29">¶</a><a href="javascript:void(0)" id="6-6-0-2019-01-29" class="anchor-point"></a>6.6.0 (2019-01-29)</h3>\n<ul>\n<li>✨ <code>Grid</code> 支持表头分组</li>\n<li>🦀️ 修复了 <code>Table</code>, <code>Grid</code>, <code>WindowResizeHandler</code> 的 <code>undefined</code> 报错问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-5-3-2019-01-13">¶</a><a href="javascript:void(0)" id="6-5-3-2019-01-13" class="anchor-point"></a>6.5.3 (2019-01-13)</h3>\n<ul>\n<li>✨ <code>Pop</code> 支持函数形式的 <code>position</code> 参数，参考 <code>Popover.Position.create</code></li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>📚 增加了自定义校验函数的文档</li>\n<li>🦀️ 修复了使用 <code>Fragment</code> 时滚动报错的问题</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>ClampLines</code> 组件修改 <code>text</code> 后不更新的问题</li>\n<li>🦀️ 修复了几个组件中 unmount 之后部分代码报错的问题，包括 <code>Table</code>, <code>Select</code>, <code>Grid</code>, <code>ClampLines</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-5-2-2018-12-12">¶</a><a href="javascript:void(0)" id="6-5-2-2018-12-12" class="anchor-point"></a>6.5.2 (2018-12-12)</h3>\n<ul>\n<li>⚠️ 回滚了之前 <code>6.4.0</code> 版本引入的一个 <code>FormSelectField</code> 在 <code>tags</code> 模式下的不兼容改动，不影响 <code>Select</code> 组件本身，且这个问题只在使用了 <code>FormSelectField</code> 的 <code>tags</code> 模式才会出现。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-5-1-2018-12-07">¶</a><a href="javascript:void(0)" id="6-5-1-2018-12-07" class="anchor-point"></a>6.5.1 (2018-12-07)</h3>\n<p>⚠️ <code>6.4.0</code> 版本引入了一个 <code>FormSelectField</code> 在 <code>tags</code> 模式下的不兼容改动，<code>6.5.2</code> 已经回滚这个改动。</p>\n<ul>\n<li>✨ 增加维权图标</li>\n<li>\n<p><code>Table</code></p>\n<ul>\n<li>✨ 支持在行内渲染半选中状态的复选框</li>\n<li>🦀️ 修复右对齐无效的问题</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>Form</code> 对组件类型的检查</li>\n<li>🦀️ 修复了一些 TypeScript 的类型定义问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-5-0-2018-10-29">¶</a><a href="javascript:void(0)" id="6-5-0-2018-10-29" class="anchor-point"></a>6.5.0 (2018-10-29)</h3>\n<p>⚠️ <code>6.4.0</code> 版本引入了一个 <code>FormSelectField</code> 在 <code>tags</code> 模式下的不兼容改动，<code>6.5.2</code> 已经回滚这个改动。</p>\n<p>⚠️ <code>Form</code> 的改动可能会导致之前写的有问题代码暴露出问题来，如果遇到这个问题请在 <code>onSubmitFail</code> 里处理这些异常。</p>\n<ul>\n<li>✨ 增加一批新的图标</li>\n<li>🦀️ <code>Form</code> 提交时不会再静默吞掉未处理的异常</li>\n<li>🦀️ 用 <code>lodash/assign</code> 替换了代码中对 <code>Object.assign</code> 的依赖</li>\n<li>🦀️ 修复 <code>SKU</code> 组件中弹窗的层级问题</li>\n<li>🦀️ 修复 <code>Grid</code> 组件的 <code>TypeScript</code> 定义</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-4-1-2018-10-16">¶</a><a href="javascript:void(0)" id="6-4-1-2018-10-16" class="anchor-point"></a>6.4.1 (2018-10-16)</h3>\n<p>⚠️ <code>6.4.0</code> 版本引入了一个 <code>FormSelectField</code> 在 <code>tags</code> 模式下的不兼容改动，<code>6.5.2</code> 已经回滚这个改动。</p>\n<ul>\n<li>✨ <code>Tabs</code> 通过 <code>navExtraContent</code> 增加导航栏自定义额外内容的能力</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-4-0-2018-09-26">¶</a><a href="javascript:void(0)" id="6-4-0-2018-09-26" class="anchor-point"></a>6.4.0 (2018-09-26)</h3>\n<p>⚠️ 这个版本引入了一个 <code>FormSelectField</code> 在 <code>tags</code> 模式下的不兼容改动，<code>6.5.2</code> 已经回滚这个改动。</p>\n<ul>\n<li>✨ <code>FormSelectField</code> 支持 <code>tags</code> 模式 (<em>已回滚</em>)</li>\n<li>🦀️ 修复 <code>Select</code> 组件 placeholder 颜色不对的问题</li>\n<li>🦀️ 修复 <code>Upload</code> 上传多个音频时的样式问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-3-0-2018-09-07">¶</a><a href="javascript:void(0)" id="6-3-0-2018-09-07" class="anchor-point"></a>6.3.0 (2018-09-07)</h3>\n<ul>\n<li>✨ <code>TimePicker</code> 组件增加 <code>disabledTime</code> 时间禁用函数属性</li>\n<li>✨ <code>Loading</code> 支持延迟显示</li>\n<li>✨ 打包支持 ES module 输出形式</li>\n<li>✨ <code>babel-plugin-zent@1.2.1</code> 支持只处理样式引入，配合 ES module 实现 tree shaking（需要打包工具支持）</li>\n<li>\n<p><code>InfiniteScroller</code></p>\n<ul>\n<li>🦀️ 修复反复触发 <code>loadMore</code> 回调的问题</li>\n<li>🦀️ 修复文档问题</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-2-0-2018-08-24">¶</a><a href="javascript:void(0)" id="6-2-0-2018-08-24" class="anchor-point"></a>6.2.0 (2018-08-24)</h3>\n<ul>\n<li>🎉 新增多文本缩略显示 <code>ClampLines</code> 组件</li>\n<li>✨ <code>Grid</code> 支持拖拽操作</li>\n<li>✨ <code>Menu</code> 添加子菜单折叠/展开以及点击的回调函数</li>\n<li>🦀️ <code>DatePicker</code> 关闭浏览器自动填充输入框的行为</li>\n<li>🦀️ 修复 <code>Form</code> 初始化 <code>FieldArray</code> 时的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-1-0-2018-08-03">¶</a><a href="javascript:void(0)" id="6-1-0-2018-08-03" class="anchor-point"></a>6.1.0 (2018-08-03)</h3>\n<ul>\n<li>\n<p><code>Grid</code> </p>\n<ul>\n<li>✨ 支持给每一列设置一个默认的展示文案</li>\n<li>🦀️ 修复 <code>selection.getCheckboxProps</code> 没有实时更新的问题</li>\n</ul>\n</li>\n<li>✨ 新增几个 <code>Icon</code></li>\n<li>✨ <code>Cascader</code> 支持通过 <code>expandTrigger</code> 设置子菜单的触发方式</li>\n<li>✨ <code>Pop</code> 增加 <code>containerSelector</code> 支持</li>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>✨ 样式更新</li>\n<li>✨ 当按钮文案为两个中文字符时，会在两个字符中间插入一个空格</li>\n</ul>\n</li>\n<li>🦀️ 修复了 <code>NumberInput</code> 处理 <code>.xy</code> 形式的浮点数的问题</li>\n<li>🦀️ <code>Table</code> 选择模式下支持将行设置为选中同时是禁用的状态</li>\n<li>🦀️ 修复 <code>Form</code> 中 <code>FieldArray</code> 没有正确更新的问题</li>\n<li>🦀️ 修复了非常多的 <code>TypeScript</code> 定义问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-0-1-2018-07-13">¶</a><a href="javascript:void(0)" id="6-0-1-2018-07-13" class="anchor-point"></a>6.0.1 (2018-07-13)</h3>\n<blockquote>\n<p>⚠️ 之前的版本 <code>Icon</code> 字体文件可能在 Windows 下展示会有问题，如果 Window 环境对你很重要建议使用这个版本。</p>\n</blockquote>\n<ul>\n<li>🦀️ 修复 Windows 下 <code>Icon</code> 显示不正常的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-0-0-2018-07-04">¶</a><a href="javascript:void(0)" id="6-0-0-2018-07-04" class="anchor-point"></a>6.0.0 (2018-07-04)</h3>\n<blockquote>\n<p>这个版本移除了对 React 15.3 以下版本的支持。</p>\n<p>文档网站从这个版本开始将放到 <a href="https://youzan.github.io/zent">github pages</a> 上维护。</p>\n</blockquote>\n<ul>\n<li>💥 [breaking change] 删除 <code>Loading</code> 组件的 <code>on</code>, <code>off</code> 以及 <code>newInstance</code> 方法</li>\n<li>💥 [breaking change] 修复 <code>WeekPicker</code> 的禁用和选中逻辑</li>\n<li>💥 [breaking change] <code>Table</code> 单元格的 <code>box-sizing</code> 变为 <code>border-box</code></li>\n<li>💥 [breaking change] 删除 <code>Select</code> 弹层上的 <code>zent-select</code> 类名，这个类名只应该存在于 trigger 上面</li>\n<li>🎉 新组件 <code>Mention</code></li>\n<li>🎉 新组件 <code>Timeline</code></li>\n<li>🎉 <code>Tree</code> 重写了一个新版，兼容老的 API，通过 <code>useNew</code> 启用；新版加入了受控模式支持</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>✨ <code>FieldArray</code> 支持串行调用多次操作函数，如 <code>push</code> 等</li>\n<li>✨ <code>DateRangePickerField</code> 以及 <code>DateRangeQuickPickerField</code> 支持通过 <code>dateFormat</code> 来透传依赖组件的 <code>format</code> prop</li>\n<li>✨ 补全 <code>DatePicker</code> 相关的 <code>Field</code> 类型，比如 <code>FormWeekPickerField</code> 等</li>\n<li>✨ <code>FieldArray</code> 支持通过 <code>setFieldsValue</code> 以及 <code>initialize</code> 修改值</li>\n</ul>\n</li>\n<li>\n<p><code>Grid</code></p>\n<ul>\n<li>✨ 增加 <code>TypeScript</code> 类型定义</li>\n<li>✨ 支持 <code>expandation</code> 行展开配置</li>\n<li>✨ 增加行展开时的 <code>onExpand</code> 回调函数</li>\n<li>✨ <code>onChange</code> 回调支持传递分页大小</li>\n<li>🦀️ 移除 <code>cloneDeep</code> 的使用，React 16 下复制 jsx 会报错</li>\n<li>🦀️ 修复 <code>rowKey</code> 无效的问题</li>\n<li>📚 文档优化</li>\n</ul>\n</li>\n<li>\n<p><code>ErrorBoundary</code></p>\n<ul>\n<li>✨ 增加 <code>catchError</code> HOC，适合使用 decorator 的场景</li>\n<li>📚 修复文档中 <code>withErrorBoundary</code> 的描述</li>\n</ul>\n</li>\n<li>\n<p><code>Cascader</code></p>\n<ul>\n<li>✨ 增加 <code>displayText</code> 回调自定义选中值的展示</li>\n<li>🦀️ 修复 <code>value</code> 值不存在时报错的问题</li>\n</ul>\n</li>\n<li>✨ <code>Table</code> 组件的 <code>onChange</code> 回调支持传递分页大小</li>\n<li>✨ <code>AutoComplete</code> 增加 <code>TAB</code> 按键处理</li>\n<li>✨ <code>SplitButton</code> 支持下拉菜单位置配置</li>\n<li>✨ <code>Pagination</code> 支持在分页大小改变时触发 <code>onPageSizeChange</code> 回调函数</li>\n<li>🦀️ 修复 <code>BlockHeader</code> 标签类型限制的问题(<code>p</code> 不能嵌套 <code>div</code>)</li>\n<li>🦀️ 修复 <code>Avatar</code> 的 <code>TypeScript</code> 类型定义</li>\n<li>🦀️ 修复 <code>Sortable</code> 的 <code>TypeScript</code> 类型定义</li>\n<li>🦀️ 修复 <code>SplitButton</code> 的 <code>TypeScript</code> 类型定义</li>\n<li>🦀️ 修复 <code>Tabs</code> 的 <code>TypeScript</code> 类型定义</li>\n<li>🦀️ 添加了几个新的图标</li>\n<li>🦀️ 修复 <code>Input</code> 组件的 <code>addonBefore</code> 和 <code>addonAfter</code> 样式</li>\n<li>🦀️ 修复 <code>Swiper</code> 组件只有两个元素时删除其中一个元素时位置错位的问题</li>\n<li>\n<p><code>Dialog</code></p>\n<ul>\n<li>🦀️ 修复关闭时报错的问题</li>\n<li>🦀️ 修复 SSR 报错</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>Button</code> 组件代码里的一些拼写错误，不影响功能</li>\n<li>🦀️ 修复 <code>Collapse</code> 组件的 props 类型申明</li>\n<li>🦀️ 修复 <code>DatePicker</code> 时间禁用逻辑</li>\n<li>🦀️ 修复 <code>Select</code> 某些情况下 <code>focus</code> 报错的问题</li>\n<li>🦀️ 修复 <code>Loading</code> 组件在 React 16 下关闭报错的问题</li>\n<li>🦀️ 删除了 <code>Card</code> 中的一些无用样式</li>\n<li>📚 修复文档的 <code>babel</code> 拼写错误</li>\n</ul>\n<h4 class="anchor-heading"><a href="#breaking-change-qian-yi-fang-an">¶</a><a href="javascript:void(0)" id="breaking-change-qian-yi-fang-an" class="anchor-point"></a>Breaking change 迁移方案</h4>\n<blockquote>\n<p><code>Loading</code> <code>on</code>, <code>off</code>, <code>newInstance</code> 的迁移方案：</p>\n</blockquote>\n<p>将 <code>Loading.on</code> 以及 <code>Loading.off</code> 替换为组件形式，并通过 <code>state</code> 上的开关控制。</p>\n<pre><code class="language-js"><span class="token operator">&#x3C;</span>Loading float show<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></code></pre>\n<p>如果使用了 <code>newInstance</code> 方法，渲染多个 <code>Loading</code> 实例即可。</p>\n<blockquote>\n<p><code>WeekPicker</code> 迁移方案:</p>\n</blockquote>\n<ul>\n<li>涉及到自定义了 <code>diabledDate</code> 的场景，新版中返回的日期区间将只包含可选的日期，老版本会返回整个完整的周，包括那些不可选的日期。这个代码里自行处理下，多数情况应该没有影响。</li>\n<li>内部维护的周日期区间 <code>[start, end]</code> 两个值的时间部分有变化，新版 <code>start</code> 时间部分是 <code>00:00:00:000</code>, <code>end</code> 时间部分是 <code>23:59:59:999</code>。所以在 <code>disabledDate</code> 的回调函数里判断日期是否禁用的时候需要注意时间部分的差，原则上日期比较是不应该关注时间部分的，但是很多写得不好的代码是直接 <code>a.getTime() &#x3C; b.getTime()</code> 这样比较的，这种用法很大概率上会出问题。</li>\n</ul>\n<blockquote>\n<p><code>Table</code> 单元格样式迁移方案:</p>\n</blockquote>\n<p>之前是 <code>content-box</code>，这次更新之后变为 <code>border-box</code>，有些情况下可能会出现单元格变窄的情况，需要在使用的地方适当将受影响的单元格加宽。</p>\n<blockquote>\n<p><code>Select</code> 弹层的 <code>zent-select</code> 类名迁移方案：</p>\n</blockquote>\n<p>首先把这个类名删除是正确的，trigger 和 弹层是不应该公用一个类名的。之前依赖弹层上的 <code>zent-select</code> 类名的地方改为 <code>zent-select__popover</code> 就行了。</p>\n<h3 class="anchor-heading"><a href="#5-1-1-2018-04-19">¶</a><a href="javascript:void(0)" id="5-1-1-2018-04-19" class="anchor-point"></a>5.1.1 (2018-04-19)</h3>\n<ul>\n<li>🦀️ 修复 <code>Dialog</code> 某些情况下关闭的时候没有动画的问题</li>\n<li>🦀️ 修复 <code>Table</code> 单元格宽度超出设置值的问题</li>\n<li>🦀️ <code>Form</code> 滚动到第一个错误位置时允许非 <code>ControlGroup</code> 封装的 <code>Field</code></li>\n<li>✨ 升级 <code>lerna</code> 到最新版</li>\n</ul>\n<h3 class="anchor-heading"><a href="#5-1-0-2018-04-17">¶</a><a href="javascript:void(0)" id="5-1-0-2018-04-17" class="anchor-point"></a>5.1.0 (2018-04-17)</h3>\n<ul>\n<li>🎉 新组件 <code>ErrorBoundary</code>，需要 <code>React</code> >= 16</li>\n<li>🎉 新组件 <code>SplitButton</code></li>\n<li>✨ <code>previewImage</code> 支持图片缩放</li>\n<li>✨ <code>BlockHeader</code> 增加 <code>childAlign</code> 属性，支持子元素靠右侧显示</li>\n<li>✨ <code>Portal</code> 组件重构，新增 <code>PurePortal</code> 和 <code>LayeredPortal</code></li>\n<li>✨ 升级 <code>Design</code> 组件的拖拽库</li>\n<li>✨ <code>Dialog</code> 增加打开/关闭动画</li>\n<li>\n<p><code>YearPicker</code></p>\n<ul>\n<li>✨ 支持设置 <code>max</code> 和 <code>min</code></li>\n<li>✨ <code>value</code> 支持 <code>Date</code> 类型</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>height</code> 在 <code>Loading</code> 不显示的时候被忽略的问题</li>\n<li>🦀️ 修复 <code>BlockHeader</code> 弹层样式</li>\n<li>🦀️ 修复 <code>Popover</code> 在 <code>React</code> 16 下位置计算不正确的问题</li>\n<li>🦀️ 修复 <code>Form</code> 组件 <code>asyncValidate</code> 的返回值在某些条件下不是 <code>Promise</code> 的问题</li>\n<li>🦀️ 修复 <code>Pagination</code> 样式问题</li>\n<li>🦀️ <code>Select</code> 的 <code>tag</code> 模式会撑大内容区域，而不是出现滚动条</li>\n<li>🦀️ <code>Cascader</code> 单测兼容 <code>React</code> 16</li>\n<li>📚 更新文档网站中英文截图</li>\n</ul>\n<h3 class="anchor-heading"><a href="#5-0-1-2018-03-20">¶</a><a href="javascript:void(0)" id="5-0-1-2018-03-20" class="anchor-point"></a>5.0.1 (2018-03-20)</h3>\n<ul>\n<li>🦀️ 修复 <code>WeekPicker</code> 文字溢出问题</li>\n<li>🦀️ 修复了一些打包问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#5-0-0-2018-03-16">¶</a><a href="javascript:void(0)" id="5-0-0-2018-03-16" class="anchor-point"></a>5.0.0 (2018-03-16)</h3>\n<blockquote>\n<p>⚠️ 这个版本 <code>Upload</code> 组件有问题，请不要使用。</p>\n<p>从这个版本开始正式支持 <code>React</code> 16，后续开发都将基于 16。</p>\n</blockquote>\n<ul>\n<li>🎉 升级 <code>React</code> 以及 <code>Enzyme</code> 到最新版本，正式支持 <code>React</code> 16</li>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>✨ 添加对图标的支持</li>\n<li>✨ 新增 <code>Button.Group</code> 容器</li>\n</ul>\n</li>\n<li>✨ <code>Steps</code> 组件新增一个 <code>process</code> 状态，并且默认值也修改为 <code>process</code></li>\n<li>🦀️ 修复 <code>Loading</code> 组件高度问题</li>\n<li>🦀️ 更新 <code>BlockHeader</code> 组件样式</li>\n<li>\n<p><code>Tree</code></p>\n<ul>\n<li>🦀️ 修复节点 <code>expand</code> 不生效的问题</li>\n<li>📚 补充 <code>loadMore</code> 的文档</li>\n</ul>\n</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>✨ 允许通过 <code>errorMessages</code> 参数自定义错误提示文案</li>\n<li>🦀️ 收敛 CSS 的类名，降低冲突风险</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-3-2-2018-03-07">¶</a><a href="javascript:void(0)" id="4-3-2-2018-03-07" class="anchor-point"></a>4.3.2 (2018-03-07)</h3>\n<blockquote>\n<p>⚠️ 这个版本 <code>Loading</code> 组件样式有问题，请不要使用。</p>\n</blockquote>\n<ul>\n<li>🦀️ 更新 <code>Loading</code> 组件高度设置逻辑</li>\n<li>🦀️ 修复 <code>Pagination</code> 文案</li>\n<li>🦀️ 修复 <code>Radio</code> 和 <code>Checkbox</code> 组件嵌套使用时的问题</li>\n<li>🦀️ <code>Radio</code> 和 <code>Checkbox</code> 的分组组件只读或禁用时会忽略组件自身的设置</li>\n<li>🦀️ 修复 <code>Upload</code> 组件样式问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-3-1-2018-03-05">¶</a><a href="javascript:void(0)" id="4-3-1-2018-03-05" class="anchor-point"></a>4.3.1 (2018-03-05)</h3>\n<ul>\n<li>🦀️ 修复 <code>Select</code> 组件在标签样式下 placeholder 缩进不一致的问题</li>\n<li>🦀️ 修复 <code>Popover</code> 在特定情况下循环调用 <code>adjustPosition</code> 的问题</li>\n<li>🦀️ 调整 <code>Tree</code> 组件的字体大小</li>\n<li>🦀️ 修复 <code>Grid</code> 组件在 Windows 系统下的现实问题</li>\n<li>🦀️ 修复 <code>CopyButton</code> 在某些情况下选择错误的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-3-0-2018-02-14">¶</a><a href="javascript:void(0)" id="4-3-0-2018-02-14" class="anchor-point"></a>4.3.0 (2018-02-14)</h3>\n<blockquote>\n<p>情人节快乐！新春快乐!</p>\n</blockquote>\n<ul>\n<li>🎉 新增 <code>AutoComplete</code> 组件</li>\n<li>🎉 新增 <code>Rate</code> 评分组件</li>\n<li>🦀️ 优化 <code>Notify</code> 动画</li>\n<li>🦀️ 去除 <code>Tabs</code> 组件样式中不必要的 <code>!important</code></li>\n<li>🦀️ 修复 <code>Select</code> 搜索框无法获取输入焦点的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-3-2018-02-09">¶</a><a href="javascript:void(0)" id="4-2-3-2018-02-09" class="anchor-point"></a>4.2.3 (2018-02-09)</h3>\n<ul>\n<li>🦀️ 修复 <code>Sortable</code> 在没传 <code>items</code> 时的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-2-2018-02-07">¶</a><a href="javascript:void(0)" id="4-2-2-2018-02-07" class="anchor-point"></a>4.2.2 (2018-02-07)</h3>\n<ul>\n<li>✨ <code>Steps</code> 新增垂直样式</li>\n<li>🦀️ 修复 <code>Grid</code> 表头高度问题</li>\n<li>🦀️ 修复打包 CSS 样式丢失问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-1-2018-02-06">¶</a><a href="javascript:void(0)" id="4-2-1-2018-02-06" class="anchor-point"></a>4.2.1 (2018-02-06)</h3>\n<blockquote>\n<p>⚠️ 这个版本 CSS 打包有问题，请不要使用。</p>\n</blockquote>\n<ul>\n<li>🦀️ 修复 <code>Upload</code> 文件类型判断问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-0-2018-02-05">¶</a><a href="javascript:void(0)" id="4-2-0-2018-02-05" class="anchor-point"></a>4.2.0 (2018-02-05)</h3>\n<blockquote>\n<p>⚠️ 这个版本 CSS 打包有问题，请不要使用。</p>\n</blockquote>\n<ul>\n<li>🎉 新组件 <code>Avatar</code></li>\n<li>🎉 新组件 <code>Collapase</code></li>\n<li>✨ <code>Menu</code> 增加内联模式</li>\n<li>✨ <code>Cascader</code> 支持菜单样式</li>\n<li>✨ <code>Input</code> 清空按钮的回调函数中加入判断来自按钮的参数</li>\n<li>✨ 补全各个时间选择器的 <code>TypeScript</code> 定义</li>\n<li>✨ <code>Badge</code> 组件支持自定义偏移量</li>\n<li>✨ <code>NumberInput</code> 支持回车确认输入</li>\n<li>✨ <code>Upload</code> 的 <code>onUpload</code> 回调支持返回一个 <code>Promise</code></li>\n<li>🦀️ 修复 <code>Sortable</code> 中 <code>onMove</code>, <code>onEnd</code> 与 <code>onChange</code> 同时传入时的问题</li>\n<li>🦀️ 修复 <code>Form</code> 中的多行文本框无法换行的问题</li>\n<li>🦀️ 修复 <code>InfiniteScroller</code> 样式问题</li>\n<li>🦀️ 修复 <code>Select</code> 键盘事件无效的问题</li>\n<li>🦀️ 修复 <code>Grid</code> 边框样式问题</li>\n<li>🦀️ 修复 <code>Select</code> 死循环问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-1-0-2018-01-29">¶</a><a href="javascript:void(0)" id="4-1-0-2018-01-29" class="anchor-point"></a>4.1.0 (2018-01-29)</h3>\n<ul>\n<li>🎉 新增 <code>TimePicker</code> 和 <code>TimeRangePicker</code></li>\n<li>🎉 新增 <code>Placeholder</code> 组件</li>\n<li>🎉 新的文档网站样式</li>\n<li>\n<p><code>Card</code></p>\n<ul>\n<li>✨ 新增 <code>loading</code> 状态支持</li>\n<li>✨ 支持嵌套的卡片</li>\n<li>🦀️ 样式更新</li>\n</ul>\n</li>\n<li>✨ <code>DatePicker</code> 支持 <code>canClear</code> 参数配置是否可以清除选中的时间</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>✨ 支持外部传入分组</li>\n<li>🦀️ 修复可以选择超过 <code>maxAmount</code> 数量文件的问题</li>\n<li>🦀️ 修复自动弹出的问题</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>Notify</code> 背景色</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-0-0-2018-01-23">¶</a><a href="javascript:void(0)" id="4-0-0-2018-01-23" class="anchor-point"></a>4.0.0 (2018-01-23)</h3>\n<ul>\n<li>💥 <code>DateRangePicker</code> 不再支持合并模式，<code>type</code> 参数废弃，升级请注意样式</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>✨ 支持分组功能</li>\n<li>✨ 国际化支持</li>\n</ul>\n</li>\n<li>✨ <code>Menu</code> 支持图标展示</li>\n<li>\n<p><code>DatePicker</code></p>\n<ul>\n<li>🦀️ 修复未选择时间直接确认没有考虑最小时间的问题</li>\n<li>🦀️ 修复最小时间的判断问题</li>\n</ul>\n</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>🦀️ 文档样式修复</li>\n<li>🦀️ <code>DesignEditor</code> 不再继承 <code>PureComponent</code></li>\n</ul>\n</li>\n<li>🦀️ <code>Slider</code> 样式修复</li>\n<li>🦀️ 修复文档网站锚点失效的问题</li>\n<li>🦀️ <code>Grid</code> 修复头部高度不同步的问题</li>\n<li>🦀️ 优化 <code>Notify</code> 的动画</li>\n<li>\n<p><code>Select</code></p>\n<ul>\n<li>🦀️ 修复在部分浏览器下的兼容性问题</li>\n<li>🦀️ 修复 <code>emptyText</code> 无效的问题</li>\n</ul>\n</li>\n<li>🦀️ <code>Sortable</code> 修复示例</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-3-2018-01-10">¶</a><a href="javascript:void(0)" id="3-12-3-2018-01-10" class="anchor-point"></a>3.12.3 (2018-01-10)</h3>\n<ul>\n<li>🦀️ 修复 <code>Slider</code> 组件背景色问题</li>\n<li>🦀️ <code>Upload</code> 添加 <code>image/bmp</code> 支持</li>\n<li>🦀️ 修复 <code>Design</code> demo 中按钮布局和样式</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-2-2018-01-09">¶</a><a href="javascript:void(0)" id="3-12-2-2018-01-09" class="anchor-point"></a>3.12.2 (2018-01-09)</h3>\n<ul>\n<li>✨ <code>Loading</code> 没有 <code>children</code> 时去掉蒙层的背景色</li>\n<li>✨ 重命名文件，保持项目内统一</li>\n<li>🦀️ 修复 <code>Grid</code> 头部样式</li>\n<li>🦀️ 修复大号 <code>Button</code> 字体大小</li>\n<li>🦀️ 修复 <code>MonthPicker</code> 没有判断年份的问题</li>\n<li>📚 增加了国际化的文档</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-1-2018-01-05">¶</a><a href="javascript:void(0)" id="3-12-1-2018-01-05" class="anchor-point"></a>3.12.1 (2018-01-05)</h3>\n<ul>\n<li>🦀️ 修复 <code>CombineDateRangePicker</code> 没有选完就关闭的问题</li>\n<li>🦀️ 修复 <code>Notify</code> 出场动画问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-0-2018-01-04">¶</a><a href="javascript:void(0)" id="3-12-0-2018-01-04" class="anchor-point"></a>3.12.0 (2018-01-04)</h3>\n<ul>\n<li>🎉 新增拖拽排序组件 <code>Sortable</code></li>\n<li>🎉 组件国际化支持</li>\n<li>✨ <code>Tag</code> 支持外部控制显示隐藏</li>\n<li>✨ <code>Input</code> 组件支持清除按钮</li>\n<li>✨ <code>Grid</code> 组件支持表头固定垂直滚动</li>\n<li>✨ <code>Notify</code> 支持多个实例排列显示，同时加上了进出场动画</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>✨ <code>Field</code> 修改错误显示逻辑，支持 <code>displayError</code> 控制错误是否显示</li>\n<li>✨ <code>Field</code> 支持 <code>relatedFields</code> 指定检验时同时触发的其他字段</li>\n<li>✨ 重写 <code>FieldArray</code></li>\n</ul>\n</li>\n<li>✨ <code>Swiper</code> 支持动态增减图片</li>\n<li>✨ <code>Design</code> 支持 <code>settings</code> 以及 <code>onSettingsChange</code> 来设置动态全局配置</li>\n<li>✨ <code>Sweetalert</code> 支持配置关闭按钮以及点击蒙层是否关闭</li>\n<li>🦀️ 修复 <code>DateRangePicker</code> 禁用样式</li>\n<li>🦀️ 修复 <code>Loading</code> 布局中的问题</li>\n<li>🦀️ 修复 <code>DatePicker</code> <code>onChange</code> 值不对的问题</li>\n<li>🦀️ 修复 <code>NumberInput</code> <code>onBlur</code> 与 <code>onChange</code> 事件抛出的值不一致的问题</li>\n<li>🦀️ 修复 <code>Upload</code> 上传图片乱序的问题</li>\n<li>🦀️ 修复 <code>Select</code> tag 类型选中顺序不一致的问题</li>\n<li>🦀️ 修复 <code>ColorPicker</code> 颜色输入框无法删除的问题</li>\n<li>🦀️ 修复 <code>textarea</code> 高度抖动的问题</li>\n<li>🦀️ 修复了一些 typo</li>\n<li>🦀️ 修复 <code>yarn new-component</code> 命令</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-11-0-2017-12-20">¶</a><a href="javascript:void(0)" id="3-11-0-2017-12-20" class="anchor-point"></a>3.11.0 (2017-12-20)</h3>\n<ul>\n<li>🎉 新组件季度选择器 <code>QuarterPicker</code></li>\n<li>✨ <code>Select</code> 支持选中后清除</li>\n<li>✨ <code>Grid</code> 支持表头固定的纵向滚动方式</li>\n<li>✨ <code>DatePicker</code> 交互优化，没有时间的时候不需要按确认按钮</li>\n<li>✨ <code>Upload</code> 支持已选图片拖拽排序</li>\n<li>✨ <code>Input</code> 的 <code>textarea</code> 模式支持文字计数</li>\n<li>✨ <code>Input</code> 的 <code>textarea</code> 模式支持根据高度自动撑高</li>\n<li>✨ <code>BlockHeader</code> 修改弹层位置</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ 新增图片广告示例组件</li>\n<li>✨ 新增富文本示例组件</li>\n<li>✨ 支持在 preview 底部显示额外的信息</li>\n</ul>\n</li>\n<li>✨ <code>Popover</code> 和 <code>Pop</code> 新增 <code>onPositionUpdated</code> 回调函数</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>✨ 修改 <code>required</code> 校验规则，<code>null</code> 也认为是错误</li>\n<li>✨ 支持禁止表单内部输入框回车提交表单的行为</li>\n<li>🦀️ 修复 <code>validationOnChange</code> 为 <code>false</code> 时部分情况下组件重新渲染的问题</li>\n<li>🦀️ 修复自动滚动到第一个错误处无法处理 Functional Component 的问题</li>\n</ul>\n</li>\n<li>\n<p><code>Swiper</code></p>\n<ul>\n<li>🦀️ 修复只有一个图片时的问题</li>\n<li>🦀️ 修复快速连续点击上一张/下一张的动画问题</li>\n</ul>\n</li>\n<li>🦀️ <code>Loading</code> 修复图标不居中的问题</li>\n<li>🦀️ 滚动函数支持运行在 <code>node.js</code> 环境</li>\n<li>🦀️ <code>Table</code> 修复使用 <code>batchcomponents</code> 时报错的问题</li>\n<li>📚 <code>InfiniteScroller</code> 修复文档错误</li>\n<li>📚 <code>Button</code> 修复示例</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-7-2017-12-07">¶</a><a href="javascript:void(0)" id="3-10-7-2017-12-07" class="anchor-point"></a>3.10.7 (2017-12-07)</h3>\n<ul>\n<li>✨ <code>Menu</code> 支持传入额外的自定义样式</li>\n<li>🦀️ <code>Upload</code> 修复单文件上传的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-6-2017-12-06">¶</a><a href="javascript:void(0)" id="3-10-6-2017-12-06" class="anchor-point"></a>3.10.6 (2017-12-06)</h3>\n<ul>\n<li>✨ <code>Form</code> 组件支持表单报错事滚动到第一个错误处</li>\n<li>🦀️ <code>Upload</code> 增加文件过滤支持</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-5-2017-12-05">¶</a><a href="javascript:void(0)" id="3-10-5-2017-12-05" class="anchor-point"></a>3.10.5 (2017-12-05)</h3>\n<ul>\n<li>🦀️ 回滚 <code>Design</code> 的预览宽度为 <code>320px</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-4-2017-12-04">¶</a><a href="javascript:void(0)" id="3-10-4-2017-12-04" class="anchor-point"></a>3.10.4 (2017-12-04)</h3>\n<ul>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ 预览区域宽度调整为 <code>375px</code></li>\n<li>🦀️ 样式优化</li>\n</ul>\n</li>\n<li>✨ <code>Pop</code> 和 <code>Popover</code> 组件导出了 <code>adjustPosition</code> 用于在极端情况下手动触发位置更新</li>\n<li>🦀️ 修复 <code>Button</code> 组件在某些全局环境下，样式错误的问题</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>🦀️ 样式优化</li>\n<li>🦀️ 处理了一些 ES6 的兼容问题</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-3-2017-11-29">¶</a><a href="javascript:void(0)" id="3-10-3-2017-11-29" class="anchor-point"></a>3.10.3 (2017-11-29)</h3>\n<ul>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>🦀️ 修复 <code>accept</code> 参数无效的问题</li>\n<li>🦀️ 修复语音上传问题</li>\n</ul>\n</li>\n<li>🦀️ <code>Pagination</code> 样式修复</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ 修改添加组件按钮样式</li>\n<li>✨ 优化删除组件逻辑</li>\n<li>🦀️ 去掉添加/删除组件时的自动滚动</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-2-2017-11-28">¶</a><a href="javascript:void(0)" id="3-10-2-2017-11-28" class="anchor-point"></a>3.10.2 (2017-11-28)</h3>\n<ul>\n<li>🦀️ 修复 <code>Upload</code> 组件 <code>accept</code> 参数无效的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-1-2017-11-27">¶</a><a href="javascript:void(0)" id="3-10-1-2017-11-27" class="anchor-point"></a>3.10.1 (2017-11-27)</h3>\n<ul>\n<li>🎉 <code>NumberInput</code> 新增一种新样式，通过 <code>showCounter</code> 开启</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>✨ 组件增强文件类型判断功能</li>\n<li>✨ 支持语音上传</li>\n<li>🦀️ 修复删除图片位置不对的问题</li>\n</ul>\n</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>🦀️ 修复了一些样式问题</li>\n<li>✨ 新增 <code>canInsert</code>, <code>canDelete</code> 用于细粒度控制添加/删除按钮</li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>Form</code> 组件有异步校验导致无法提交的问题</li>\n<li>🦀️ 修复 <code>Pop</code> 的 TypeScript 类型定义</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-0-2017-11-24">¶</a><a href="javascript:void(0)" id="3-10-0-2017-11-24" class="anchor-point"></a>3.10.0 (2017-11-24)</h3>\n<ul>\n<li>🎉 新增年份选择组件 <code>YearPicker</code></li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ 新的添加组件交互</li>\n<li>✨ 不再依赖 <code>react-dnd</code></li>\n</ul>\n</li>\n<li>🦀️ 修复 <code>Cascader</code> 数据不能为空的问题</li>\n</ul>\n<p>如果你的 <code>Design</code> 组件依赖 <code>react-dnd</code> 你可能需要在 App 的顶层自己注入 <code>react-dnd</code> 的 context.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> HTML5Backend <span class="token keyword">from</span> <span class="token string">\'react-dnd-html5-backend\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DragDropContextProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dnd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">YourApp</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>DragDropContextProvider</span> <span class="token attr-name">backend</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>HTML5Backend<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token comment">/* ... */</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>DragDropContextProvider</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 class="anchor-heading"><a href="#3-9-9-2017-11-22">¶</a><a href="javascript:void(0)" id="3-9-9-2017-11-22" class="anchor-point"></a>3.9.9 (2017-11-22)</h3>\n<ul>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>🦀️ 修复添加组件浮层字体颜色不对的问题</li>\n<li>🦀️ 暂时去掉了选中组件时滚动到屏幕内的行为</li>\n</ul>\n</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>🦀️ 修复 <code>FieldArray</code> 因删减导致的表单校验报错的问题</li>\n<li>🦀️ 修复 <code>FieldArray</code> 在嵌套使用时，部分域增删时数据不对问题</li>\n<li>🦀️ 修复文档中错误文字</li>\n<li>🦀️ 修复 <code>setFieldsValue</code> 和 <code>initialize</code> 方法无法设定表单域为 <code>0</code> 的问题</li>\n<li>🦀️ 修复 <code>validateOnChange</code> 和 <code>validateOnBlur</code> 同为 <code>false</code> 时，部分情况下仍然在非提交时报错</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-8-2017-11-21">¶</a><a href="javascript:void(0)" id="3-9-8-2017-11-21" class="anchor-point"></a>3.9.8 (2017-11-21)</h3>\n<ul>\n<li>🦀️ 更新 <code>Design</code> 删除/添加组件的交互</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-7-2017-11-20">¶</a><a href="javascript:void(0)" id="3-9-7-2017-11-20" class="anchor-point"></a>3.9.7 (2017-11-20)</h3>\n<ul>\n<li>🦀️ 修复 <code>Design</code> 分组样式问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-6-2017-11-20">¶</a><a href="javascript:void(0)" id="3-9-6-2017-11-20" class="anchor-point"></a>3.9.6 (2017-11-20)</h3>\n<ul>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ 当组件达到最大可添加数量时，支持展示一个提示给用户</li>\n<li>✨ 样式更新，最主要的是去掉了添加组件区域上面的箭头</li>\n</ul>\n</li>\n<li>\n<p><code>Input</code></p>\n<ul>\n<li>✨ 增加了一个 <code>select</code> 方法用于选中输入框的文字，同时也支持 <code>autoSelect</code> 来默认选中部分文字</li>\n<li>🦀️ 修复了 <code>diabled</code> 状态的样式问题</li>\n</ul>\n</li>\n<li>🦀️ 修复了 <code>Upload</code> 组件无法重复上传同一个组件的问题</li>\n<li>🦀️ 修复了 <code>Select</code> 中 <code>data</code> 参数为 <code>undefined</code> 或者 <code>null</code> 时报错的问题</li>\n<li>🦀️ 修复了 <code>MonthPicker</code> 的禁用逻辑</li>\n<li>🦀️ 修复了 <code>Table</code> 组件的 <code>emptyLabel</code> 类型</li>\n<li>🦀️ 修复了 <code>Button</code> 组件的 TypeScript 定义</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-5-2017-11-13">¶</a><a href="javascript:void(0)" id="3-9-5-2017-11-13" class="anchor-point"></a>3.9.5 (2017-11-13)</h3>\n<ul>\n<li>✨ 文档网站增加组件搜索功能</li>\n<li>🦀️ 修复了 <code>DatePicker</code> 时间联动禁用逻辑</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-4-2017-11-09">¶</a><a href="javascript:void(0)" id="3-9-4-2017-11-09" class="anchor-point"></a>3.9.4 (2017-11-09)</h3>\n<ul>\n<li>🦀️ 更新英文文档</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-3-2017-11-09">¶</a><a href="javascript:void(0)" id="3-9-3-2017-11-09" class="anchor-point"></a>3.9.3 (2017-11-09)</h3>\n<ul>\n<li>🎉 新版文档网站，加入了英文文档支持</li>\n<li>✨ <code>Progress</code> 组件支持自定义颜色</li>\n<li>✨ 表单组件（例如 <code>Input</code>, <code>Select</code> 等）支持通过传入 <code>width=xx</code> 来设置宽度</li>\n<li>✨ <code>Notify</code> 组件支持 <code>config</code> 函数来设置全局弹框消失延迟时间</li>\n<li>✨ <code>DatePicker</code> 支持 <code>max</code> 和 <code>min</code> 来禁用时间</li>\n<li>🦀️ 修复了 <code>Form</code> 组件提交表单时不触发没有校验过的异步校验的问题</li>\n<li>🦀️ 修复了 <code>Popover</code> 组件某些情况下调用 <code>getBoundingClientRect</code> 出错的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-2-2017-11-06">¶</a><a href="javascript:void(0)" id="3-9-2-2017-11-06" class="anchor-point"></a>3.9.2 (2017-11-06)</h3>\n<ul>\n<li>✨ <code>Design</code> 组件支持创建时自定义默认类型</li>\n<li>🦀️ 修复了 <code>Table</code> 某些情况下跨页多选失败的问题</li>\n<li>🦀️ 修复了一些 React 16 下的兼容问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-1-2017-11-02">¶</a><a href="javascript:void(0)" id="3-9-1-2017-11-02" class="anchor-point"></a>3.9.1 (2017-11-02)</h3>\n<ul>\n<li>🦀️ 修复了 <code>Design</code> 的一些样式问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-0-2017-10-31">¶</a><a href="javascript:void(0)" id="3-9-0-2017-10-31" class="anchor-point"></a>3.9.0 (2017-10-31)</h3>\n<ul>\n<li>✨ 增加了基础全局样式，类似 <code>normalize.css</code> 和 <code>reset.css</code></li>\n<li>\n<p><code>Grid</code>:</p>\n<ul>\n<li>🦀️ 修复了不能动态修改 <code>columns</code> 的问题</li>\n<li>🦀️ 修复当行高高于默认高度时，左侧固定列和右侧固定列高度不一致的问题</li>\n<li>🦀️ 修复滚动到最右侧时，最右侧固定列的阴影不消失的问题</li>\n</ul>\n</li>\n<li>🦀️ 修复了 <code>Design</code> 代码中的一个变量名错误，不影响代码功能</li>\n<li>🦀️ 修复了 <code>Form</code> 的 <code>ControlGroup</code> 不能处理 Functional Component 的问题</li>\n<li>📚 更新了文档网站细节样式</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-8-1-2017-10-26">¶</a><a href="javascript:void(0)" id="3-8-1-2017-10-26" class="anchor-point"></a>3.8.1 (2017-10-26)</h3>\n<ul>\n<li>🎉 新增组件库 Demo，可以在文档的<a href="demos">项目示例</a>页面查看</li>\n<li>🎉 新增新建组件样板的脚本 <code>yarn new-component</code></li>\n<li>✨ <code>Table</code> 支持整行选择，通过参数 <code>canRowSelect</code> 控制，默认关闭</li>\n<li>\n<p><code>Design</code>:</p>\n<ul>\n<li>🦀️ 修复了 <code>defaultSelectedIndex</code> 的应用逻辑</li>\n<li>🦀️ 修复了 Chrome 62 中的按钮样式问题</li>\n</ul>\n</li>\n<li>🦀️ 修复了 <code>Select</code> 组件在格式化数据时会修改 <code>data</code> 数组中对象的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#babel-plugin-zent-1-1-0-2017">¶</a><a href="javascript:void(0)" id="babel-plugin-zent-1-1-0-2017" class="anchor-point"></a>babel-plugin-zent@1.1.0 (2017-10-26)</h3>\n<ul>\n<li>✨ 新增 <code>useRawStyle</code> 参数，支持 import postcss 样式，需要配合 zent >= 3.8.1 使用</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-8-0-2017-10-20">¶</a><a href="javascript:void(0)" id="3-8-0-2017-10-20" class="anchor-point"></a>3.8.0 (2017-10-20)</h3>\n<ul>\n<li>🎉 新组件 <code>InfiniteScroller</code>，用来实现滚动自动加载</li>\n<li>\n<p><code>Form</code>:</p>\n<ul>\n<li>🎉 新增 <code>FormSection</code> 以及 <code>FieldArray</code> 支持</li>\n<li>🎉 新增 <code>setFieldsValue</code> 以及 <code>initialize</code> 方法</li>\n<li>🎉 更多内置表单元素组件: <code>FormColorPickerField</code>, <code>FormDateRangePickerField</code>, <code>FormNumberInputField</code>, <code>FormSwitchField</code></li>\n<li>🎉 <code>Field</code> 添加重要提示 <code>notice</code> 属性</li>\n<li>✨ 增加 <code>setFormDirty</code> 和 <code>isFieldDirty</code> 方法</li>\n</ul>\n</li>\n<li>✨ <code>Select</code> 做了一些代码逻辑优化</li>\n<li>✨ <code>Design</code> 添加组件的时候支持回调函数终止当前操作</li>\n<li>✨ <code>Popover</code> 的 <code>onBeforeClose</code> 以及 <code>onBeforeShow</code> 支持终止当前操作</li>\n<li>🦀️ <code>Slider</code> 组件现在高亮圆点的时候会同时高亮滑动条</li>\n<li>🦀️ 修复了 <code>DateRangePicker</code> 的 TypeScript 定义</li>\n<li>🦀 修复了 <code>SearchInput</code> 的一个样式问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-7-0-2017-09-28">¶</a><a href="javascript:void(0)" id="3-7-0-2017-09-28" class="anchor-point"></a>3.7.0 (2017-09-28)</h3>\n<ul>\n<li>🎉 新组件 <code>Grid</code>，功能和 <code>Table</code> 组件类似，但是底层是用 <code>&#x3C;table></code> 实现的，现在 <code>Grid</code> 有些 <code>Table</code> 的功能还没有实现</li>\n<li>🎉 Zent 支持自定义主题，文档网站同步添加了<a href="colors">色彩</a>和<a href="theme">主题定制</a>的章节</li>\n<li>\n<p><code>Steps</code>:</p>\n<ul>\n<li>✨ 新增了 <code>onStepChange</code> 和 <code>sequence</code> 参数</li>\n<li>✨ 更新了 <code>number</code> 类型的样式</li>\n</ul>\n</li>\n<li>🦀️ 修复了 React 16 下面的一些警告</li>\n<li>🦀️ 修复了 <code>Slider</code> 文档页面上的警告</li>\n<li>🦀️ 更新了 <code>DateRangeQuickPicker</code> 的样式</li>\n<li>🦀️ 修复了 <code>Select</code> 在选项数组置空后选中项不会重置的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-6-1-2017-09-21">¶</a><a href="javascript:void(0)" id="3-6-1-2017-09-21" class="anchor-point"></a>3.6.1 (2017-09-21)</h3>\n<ul>\n<li>🦀️ 修复了 <code>Design</code> 的样式问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-6-0-2017-09-21">¶</a><a href="javascript:void(0)" id="3-6-0-2017-09-21" class="anchor-point"></a>3.6.0 (2017-09-21)</h3>\n<ul>\n<li>\n<p><code>Design</code>:</p>\n<ul>\n<li>✨ 支持添加区域组件的分组展示</li>\n<li>✨ 支持限制每个组件可添加的次数</li>\n</ul>\n</li>\n<li>✨ <code>DatePicker</code> 添加了 <code>onBeforeConfirm</code> 以及 <code>onBeforeClear</code> 的钩子</li>\n<li>️🦀️ 修复了 <code>Table</code> 全选复选框在整页都不可选时没有禁用的问题</li>\n<li>🦀️ 修复了某些情况下 <code>Popover</code> 在屏幕滚动后弹出层位置错误的问题</li>\n<li>🦀️ 修复了 <code>MonthPicker</code> 禁用的日期依然可以选择的问题</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-5-4-2017-09-15">¶</a><a href="javascript:void(0)" id="3-5-4-2017-09-15" class="anchor-point"></a>3.5.4 (2017-09-15)</h3>\n<ul>\n<li>\n<p><code>Swiper</code>：</p>\n<ul>\n<li>🦀️ 修复了只有一张图片时的显示问题</li>\n<li>📚 增加了实例 API 文档，用于外部控制切换</li>\n</ul>\n</li>\n<li>🦀️ 修复了 <code>Table</code> 跨页多选在全选按钮上无效的问题</li>\n<li>🦀️ 回滚了 <code>Select</code> 组件的宽度样式</li>\n<li>🦀️ 修复了 <code>Design</code> 组件没有正确删除 <code>beforeunload</code> 事件回调函数的问题</li>\n<li>🦀️ 更新了 <code>Tabs</code> 组件的 Typescript 定义</li>\n<li>📚 更新了文档网站，添加了<a href="contribute">组件开发的详细文档</a></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-5-3-2017-09-13">¶</a><a href="javascript:void(0)" id="3-5-3-2017-09-13" class="anchor-point"></a>3.5.3 (2017-09-13)</h3>\n<ul>\n<li>🦀️ 修复了同时打开多个 <code>Dialog</code> 时遮罩 <code>z-index</code> 不正确的问题</li>\n<li>🦀️ 修复了 <code>DateRangeQuickPicker</code> 最近 7 天的语义，包含今天</li>\n<li>🦀️ 修复了 <code>Tabs</code> 组件中 <code>activeId</code> 为 0 时无法选中的问题</li>\n<li>🦀️ 修复了 <code>Form</code> 组件 <code>validateOnChange</code> 和 <code>validateOnBlur</code> 同时设为 <code>false</code> 时，表单提交时不显示校验错误的问题</li>\n<li>\n<p><code>Table</code>:</p>\n<ul>\n<li>🦀️ 修复了 <code>clearfix</code> 样式不存在的问题</li>\n<li>🦀️ 修复了 <code>totalItem</code> 没有正确读取的问题</li>\n<li>📚 修改了 <code>title</code> 类型的描述</li>\n</ul>\n</li>\n<li>🦀️ 修复了 <code>Select</code> 组件高度不正确的问题</li>\n</ul>'}))}}]),o}(b.Component)}}]);