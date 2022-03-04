(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[9632],{19632:(n,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>h});var i=e(73450),o=e(27378),c=e(57318),d=e(24246);function a(n,l){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);l&&(i=i.filter((function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable}))),e.push.apply(e,i)}return e}function t(n){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?a(Object(e),!0).forEach((function(l){(0,i.Z)(n,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(e,l))}))}return n}function r(n){return(0,d.jsx)(n.tag,t(t({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function u(n){return(0,d.jsx)(r,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function p(n){return(0,d.jsx)(r,{tag:"style",html:n.style})}function s(n,l){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(l+=n.offsetTop),s(n.parentNode,l);return l}class h extends o.Component{componentDidMount(){var n=location.hash;if(n){var l=document.querySelector('a[href="'.concat(n,'"]'));l&&(0,c.l)(document.documentElement,0,s(l,-9))}}render(){return o.createElement("div",{className:"zandoc-react-container"},o.createElement(p,{style:""}),o.createElement(u,{html:'<h1 class="anchor-heading"><a href="#10-0-0-qian-yi-zhi-nan">¶</a><a href="javascript:void(0)" id="10-0-0-qian-yi-zhi-nan" class="anchor-point"></a>10.0.0 迁移指南</h1>\n<h2 class="anchor-heading"><a href="#breaking-changes">¶</a><a href="javascript:void(0)" id="breaking-changes" class="anchor-point"></a>Breaking Changes</h2>\n<p>本次升级我们尽量保证了组件的向前兼容，下面所列的破坏性改动理论上不涉及组件的功能，基本都是 UI 上的。</p>\n<p>其中 <code>Tree</code> 和 <code>Link</code> 的改动可能会导致用户自定义的样式覆盖失效，所以我们把老版组件迁移到了最新版的 <code>@zent/compat</code> 中，需要平滑升级的话直接引用其中组件即可。</p>\n<ul>\n<li>\n<p><code>Tree</code></p>\n<ul>\n<li>🦀️ DOM 结构调整</li>\n<li>🦀️ <code>autoExpandOnSelect</code> 默认值改为 false</li>\n</ul>\n</li>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>🦀️ icon 的 <code>font-size</code> 变为 20px</li>\n</ul>\n</li>\n<li>\n<p><code>Link</code></p>\n<ul>\n<li>🦀️ disable 状态下 classname 规范化。<code>zent-link__disabled</code> 重命名为 <code>zent-link--disabled</code></li>\n</ul>\n</li>\n<li>\n<p><code>Tag</code></p>\n<ul>\n<li>🦀️ 默认 <code>theme</code> 调整为 <code>grey</code> 以适配新版设计语言</li>\n</ul>\n</li>\n<li>\n<p><code>Loading</code></p>\n<ul>\n<li>🦀️ 默认图标从 <code>youzan</code> 修改为 <code>circle</code></li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#xin-zeng-zu-jian">¶</a><a href="javascript:void(0)" id="xin-zeng-zu-jian" class="anchor-point"></a>新增组件</h2>\n<ul>\n<li>✨ 新增 <code>DropdownNav</code> 组件，封装自 <code>Dropdown</code></li>\n<li>✨ 新增 <code>Elevator</code> 组件</li>\n<li>✨ 新增 <code>Password</code> 组件</li>\n<li>✨ 新增 <code>Indicator</code> 组件，从 <code>Steps</code> 组件中拆分出</li>\n<li>✨ 新增 <code>StatusBar</code> 组件，封装自 <code>Alert</code></li>\n<li>✨ 新增 <code>Banner</code> 组件，封装自 <code>Alert</code></li>\n<li>✨ 新增 <code>Prompt</code> 组件，封装自 <code>Alert</code></li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-rc-7-2022-03-04">¶</a><a href="javascript:void(0)" id="zent-10-0-0-rc-7-2022-03-04" class="anchor-point"></a>zent@10.0.0-rc.7(2022-03-04)</h2>\n<ul>\n<li>\n<p><code>Select</code></p>\n<ul>\n<li>🦀 回滚 rc.6 中的修改，恢复宽度默认值</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-rc-6-2022-03-03">¶</a><a href="javascript:void(0)" id="zent-10-0-0-rc-6-2022-03-03" class="anchor-point"></a>zent@10.0.0-rc.6(2022-03-03)</h2>\n<ul>\n<li>\n<p><code>Select</code></p>\n<ul>\n<li>🦀 去掉 v10 中新增的 <code>size</code> 宽度默认值</li>\n</ul>\n</li>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>🦀 不改变 dom 结构情况下支持 button disabled 时显示 cursor，不再造成 break change</li>\n</ul>\n</li>\n<li>\n<p><code>Input</code></p>\n<ul>\n<li>🦀 去掉 v10 中新增的 <code>widthSize</code> 默认值</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-rc-5-2022-03-02">¶</a><a href="javascript:void(0)" id="zent-10-0-0-rc-5-2022-03-02" class="anchor-point"></a>zent@10.0.0-rc.5(2022-03-02)</h2>\n<h3 class="anchor-heading"><a href="#he-bing-v9-12-6-de-xiu-gai">¶</a><a href="javascript:void(0)" id="he-bing-v9-12-6-de-xiu-gai" class="anchor-point"></a>合并 v9.12.6 的修改</h3>\n<ul>\n<li>\n<p><code>Grid</code></p>\n<ul>\n<li>🦀 优化 selection ts 定义</li>\n</ul>\n</li>\n<li>\n<p><code>Select</code></p>\n<ul>\n<li>🦀 修复使用文本高亮时正则特殊字符报错问题</li>\n</ul>\n</li>\n<li>\n<p><code>Cascader</code></p>\n<ul>\n<li>🦀 修复使用文本高亮时正则特殊字符报错问题</li>\n</ul>\n</li>\n<li>\n<p><code>Collapse</code></p>\n<ul>\n<li>📚 更新 <code>activeKey</code> 使用 demo 和相关说明</li>\n</ul>\n</li>\n<li>增加 yarn workspace <code>nohoist</code> 配置</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-rc-4-2022-02-24">¶</a><a href="javascript:void(0)" id="zent-10-0-0-rc-4-2022-02-24" class="anchor-point"></a>zent@10.0.0-rc.4(2022-02-24)</h2>\n<ul>\n<li>\n<p><code>Select</code></p>\n<ul>\n<li>🦀️ 修复 getExtraOption 函数中取值时可能报错的问题</li>\n<li>🦀️ 修复创建条目时，没有显示 option 的问题</li>\n</ul>\n</li>\n<li>\n<p><code>Breadcrumb</code></p>\n<ul>\n<li>🦀 元素高度 &#x26; 行高样式调整</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-rc-3-2022-02-16">¶</a><a href="javascript:void(0)" id="zent-10-0-0-rc-3-2022-02-16" class="anchor-point"></a>zent@10.0.0-rc.3(2022-02-16)</h2>\n<ul>\n<li>\n<p><code>Tabs</code></p>\n<ul>\n<li>🦀️ 多标签滚动模式下，隐藏项 tab 弹框宽度限制，超出显示省略号</li>\n</ul>\n</li>\n<li>\n<p><code>Icon</code></p>\n<ul>\n<li>🦀 更新 warning icon</li>\n</ul>\n</li>\n<li>\n<p><code>Steps</code></p>\n<ul>\n<li>📚 文档调整，删除无用参数<code>status</code>、<code>direction</code>，参数<code>type</code>默认值添加相关备注</li>\n</ul>\n</li>\n<li>\n<p><code>Indicator</code></p>\n<ul>\n<li>📚 文档调整，添加参数<code>direction</code></li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-rc-2-2022-02-15">¶</a><a href="javascript:void(0)" id="zent-10-0-0-rc-2-2022-02-15" class="anchor-point"></a>zent@10.0.0-rc.2(2022-02-15)</h2>\n<ul>\n<li>\n<h2 class="anchor-heading"><a href="#sortable">¶</a><a href="javascript:void(0)" id="sortable" class="anchor-point"></a><code>Sortable</code></h2>\n<ul>\n<li>🦀️ 取消拖拽过程中拖拽元素 overflow:hidden 样式设置</li>\n<li>🦀️ 元素拖拽中占位覆盖元素 zIndex 层级设置</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-rc-1-2022-02-10">¶</a><a href="javascript:void(0)" id="zent-10-0-0-rc-1-2022-02-10" class="anchor-point"></a>zent@10.0.0-rc.1(2022-02-10)</h2>\n<ul>\n<li>📚 组件分类修改</li>\n<li>\n<p><code>Grid</code></p>\n<ul>\n<li>🦀️ 不传 <code>size</code> 时保持之前 tr 上设置的 56px 高度，不再是 break change</li>\n</ul>\n</li>\n<li>\n<p><code>Card</code></p>\n<ul>\n<li>暂时移除改动，API 还需要调整</li>\n</ul>\n</li>\n<li>\n<p><code>Pagination</code></p>\n<ul>\n<li>🦀️ 兼容次按钮样式更新导致的样式变动</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-beta-3-2022-01-28">¶</a><a href="javascript:void(0)" id="zent-10-0-0-beta-3-2022-01-28" class="anchor-point"></a>zent@10.0.0-beta.3(2022-01-28)</h2>\n<ul>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>🦀️ 回滚 beta2 中删除 <code>border</code> 属性的修改</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-beta-2-2022-01-26">¶</a><a href="javascript:void(0)" id="zent-10-0-0-beta-2-2022-01-26" class="anchor-point"></a>zent@10.0.0-beta.2(2022-01-26)</h2>\n<ul>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>🦀️ 修改次级按钮样式</li>\n</ul>\n</li>\n<li>\n<p><code>Tabs</code></p>\n<ul>\n<li>✨ <code>tabPanel</code> 新增 candel、canFixed 参数</li>\n</ul>\n</li>\n<li>\n<p><code>Alert</code></p>\n<ul>\n<li>🦀️ <code>closable</code> 默认值恢复 false</li>\n</ul>\n</li>\n<li>\n<p><code>Banner</code></p>\n<ul>\n<li>🦀️ <code>closable</code> 默认值设为 true</li>\n</ul>\n</li>\n<li>\n<p><code>Prompt</code></p>\n<ul>\n<li>🦀️ <code>closable</code> 默认值设为 true</li>\n</ul>\n</li>\n<li>\n<p><code>StatusBar</code></p>\n<ul>\n<li>🦀️ <code>closable</code> 默认值设为 true</li>\n</ul>\n</li>\n</ul>\n<h2 class="anchor-heading"><a href="#zent-10-0-0-beta-1-2022-01-17">¶</a><a href="javascript:void(0)" id="zent-10-0-0-beta-1-2022-01-17" class="anchor-point"></a>zent@10.0.0-beta.1(2022-01-17)</h2>\n<ul>\n<li>\n<p><code>Tree</code></p>\n<ul>\n<li>✨ 支持 select 状态</li>\n<li>✨ 支持 title 只显示一行，超出时 hover 显示 Pop</li>\n<li>🦀️ 调整 hover 及 disabled 状态下背景颜色</li>\n<li>🦀️ 展开、收起动画曲线及动画时间调整</li>\n<li>📚 自定义大小、自定义节点展示、自定义操作、可选树代码演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Breadcrumb</code></p>\n<ul>\n<li>✨ 支持 <code>maxItemCount</code> 属性，bread 数量超过后自动收起</li>\n<li>✨ 面包屑宽度可适配，超出展示左右 Icon</li>\n<li>🦀️ 最后一级 <code>BreadcrumbItem</code> 字体颜色、字号、字重调整</li>\n</ul>\n</li>\n<li>\n<p><code>Tabs</code></p>\n<ul>\n<li>✨ <code>card</code> 类型支持 <code>onAdd</code> 属性，显示添加按钮</li>\n<li>✨ 新增 <code>canFixed</code> 属性，支持固钉，固定状态支持受控</li>\n<li>🦀️ <code>card</code> 类型 hover、disabled 状态下字体及背景颜色调整</li>\n<li>📚 无 TabPanel、垂直模式、按钮模式代码演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>DatePicker</code></p>\n<ul>\n<li>🦀️ 修改 item 选中和 hover 时的背景颜色</li>\n<li>🦀️ 修改日期时候，不重置已选择的时间</li>\n<li>🦀️ icon 替换为新版 ZentIcon</li>\n<li>🦀️ 周选择高亮覆盖范围包含第一天</li>\n</ul>\n</li>\n<li>\n<p><code>Cascader</code></p>\n<ul>\n<li>🦀️ 样式修改，修改选中时和 hover 时的背景颜色，tag 的 margin 大小，字体颜色，icon 颜色</li>\n<li>✨ 新增<code>maxLine</code>参数，控制多选状态下最多显示行数，默认为 null</li>\n<li>✨ 新增<code>normal</code>模式的多选模式</li>\n</ul>\n</li>\n<li>\n<p><code>Swiper</code></p>\n<ul>\n<li>✨ 组件改名为 <code>Carousel</code> ，并增加相应命名导出，原组件名 <code>Swiper</code> 仍可用</li>\n<li>✨ 下方翻页按钮调整，支持 <code>line</code> 类型，默认为 <code>line</code> 类型</li>\n<li>✨ 支持通过 <code>arrowsDisabled</code> 属性，禁用左右切换按钮</li>\n<li>✨ 左右两侧按钮支持 hover 显示</li>\n<li>✨ 支持 <code>arrowSize</code> 属性，调整左右两侧按钮尺寸</li>\n<li>✨ 支持 <code>dotsTheme</code> 属性，提供两种指示器主题色</li>\n<li>🦀️ 左右两侧按钮尺寸、背景颜色调整</li>\n<li>📚 文档中英文名调整为 <code>Carousel</code></li>\n</ul>\n</li>\n<li>\n<p><code>Alert</code></p>\n<ul>\n<li><strong>现在作为基础组件，不再建议直接使用，可以根据场景使用 <code>StatusBar</code>、<code>Banner</code> 或者 <code>Prompt</code></strong></li>\n<li>✨ 支持配置 <code>bordered</code> 调整边框是否显示，默认无边框</li>\n<li>✨ 支持自定义左侧 Icon</li>\n<li>✨ 支持自定义 close 按钮颜色</li>\n<li>✨ 支持配置顶部进度条进度</li>\n</ul>\n</li>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>✨ 新增 type="icon" 按钮类型</li>\n<li>✨ 新增 type="text" 按钮类型</li>\n</ul>\n</li>\n<li>\n<p><code>SplitButton</code></p>\n<ul>\n<li>分类上归类到按钮组</li>\n<li>✨ 新增<code>text</code>样式</li>\n<li>✨ 新增没有左侧 button 的下拉按钮样式</li>\n</ul>\n</li>\n<li>\n<p><code>Radio</code></p>\n<ul>\n<li>🦀️ 修改文案色值，和 disabled 状态色值</li>\n</ul>\n</li>\n<li>\n<p><code>Checkbox</code></p>\n<ul>\n<li>🦀️ 修改文案色值，和 disabled 状态色值</li>\n</ul>\n</li>\n<li>\n<p><code>Switch</code></p>\n<ul>\n<li>🦀️ 关闭状态和禁用状态颜色调整</li>\n<li>🦀️ loading 状态下图标尺寸调整</li>\n</ul>\n</li>\n<li>\n<p><code>Link</code></p>\n<ul>\n<li>✨ 新增 <code>weak</code> 参数，true 时表示弱文字链接，默认值 false</li>\n<li>🦀️ 强文字链接去掉了 hover 时的按钮背景</li>\n<li>🦀️ css 语义化修改</li>\n<li>📚 原链接改为强文字链接，增加弱文字链接示例</li>\n</ul>\n</li>\n<li>\n<p><code>Tag</code></p>\n<ul>\n<li>✨ 新增 <code>LinkTag</code> 和 <code>SelectTag</code> 组件</li>\n<li>✨ 新增 <code>size</code> 属性，支持调整组件尺寸</li>\n<li>📚 彩色标签和可关闭标签代码演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Select</code></p>\n<ul>\n<li>✨ 内部实现创建条目方法，原来是通过传入的 <code>onCreate</code> 修改 options 实现，现在是内部处理新增 options 的逻辑</li>\n<li>🦀️ select 样式修改，修改 hover 和选中背景颜色，tags 超出一行显示省略号，分组下间距字体大小修改</li>\n<li>🦀️ select 增加 <code>widthSize</code> 的类型，分为 xs、s、m、l、xl</li>\n<li>📚 文档中修改 demo 中样式，滚动加载的显示高度，加载中 icon 文字的大小 padding</li>\n</ul>\n</li>\n<li>\n<p><code>Badge</code></p>\n<ul>\n<li>🦀️ 修复 <code>offset</code> 参数实际实现与文档说明（[x, y]）相反的 bug</li>\n<li>🦀️ 徽标数字从 12px 改为 10px，使用 scale 实现</li>\n<li>📚 组件名称 徽标数 改为 徽标，修改使用指南</li>\n</ul>\n</li>\n<li>\n<p><code>Card</code></p>\n<ul>\n<li>✨ 新增无边框样式</li>\n<li>✨ 新增小卡片样式</li>\n<li>🦀️ title 字体大小、字重调整</li>\n<li>🦀️ header 区域间距、边框调整</li>\n<li>🦀️ 内联卡片样式调整</li>\n<li>📚 有边框、无标题及嵌入模式代码演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Drawer</code></p>\n<ul>\n<li>✨ 支持两种默认尺寸（default: 728px、small: 364px）</li>\n<li>🦀️ 标题区域间距调整</li>\n<li>🦀️ 关闭按钮尺寸和颜色调整</li>\n<li>📚 自定义位置及无遮罩代码演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Popover</code></p>\n<ul>\n<li>🦀️ 圆角和 padding 大小修改</li>\n</ul>\n</li>\n<li>\n<p><code>Dialog</code></p>\n<ul>\n<li>🦀️ 标题区域间距调整</li>\n<li>🦀️ 关闭按钮尺寸和颜色调整</li>\n<li>📚 无头部及仅内容代码演示移入废弃区，新版设计语言已不再使用</li>\n<li>📚 组件名称对话框改为对话窗</li>\n</ul>\n</li>\n<li>\n<p><code>Pagination</code></p>\n<ul>\n<li>🦀️ svg 箭头图标改为 ZentIcon 中的箭头</li>\n</ul>\n</li>\n<li>\n<p><code>Steps</code></p>\n<ul>\n<li>✨ 拆分部分功能到 Indicator 组件</li>\n<li>✨ breadcrumb 、number 类型支持自定义 Icon</li>\n<li>✨ breadcrumb 类型支持 ghost 属性，显示反色样式</li>\n<li>🦀️ 步骤条间间距调整</li>\n<li>📚 tabs 及 card 类型演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Input</code></p>\n<ul>\n<li>✨ 新增 <code>widthSize</code> API，支持四种长度 xs、s、m、l、xl</li>\n<li>🦀️ 样式修改，修改 icon 大小，icon 边距，disabled 状态下 icon 颜色，textArea 默认高度，超出时间字数统计变为红色</li>\n</ul>\n</li>\n<li>\n<p><code>NumberInput</code></p>\n<ul>\n<li>🦀️ 样式修改，改变图标大小，hover 时候的样式</li>\n<li>✨ 异常输入添加 pop 提示</li>\n<li>📚 删除带 + - 号步进器的 demo，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Slider</code></p>\n<ul>\n<li>🦀️ 样式修改，修改 hover 和 active 时滚动点的边框大小</li>\n<li>📚 删除双滑块的 demo，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Tooltip</code></p>\n<ul>\n<li>🦀️ tooltip 背景色与 padding 大小的修改，去掉阴影</li>\n<li>📚 文档中删除 LT、LB、RT、RB 四个方向，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Collapse</code></p>\n<ul>\n<li>✨ 支持标题自定义内容</li>\n<li>🦀️ 折叠箭头 Icon 调整为 ZentIcon</li>\n<li>🦀️ 标题间距、颜色调整</li>\n<li>🦀️ 分割线颜色调整</li>\n<li>📚 有边框及无箭头样式演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Grid</code></p>\n<ul>\n<li>✨ 新增 size 属性，支持三种尺寸</li>\n<li>✨ 新增排序按钮 hover 时的 tooltip 提示，并增加 hover 对应的背景色</li>\n<li>🦀️ 表格行 hover 时的背景色修改</li>\n<li>🦀️ 可展开列按钮改为 ZentIcon 中的箭头</li>\n</ul>\n</li>\n<li>\n<p><code>Sortable</code></p>\n<ul>\n<li>🦀️ 拖拽动效优化</li>\n<li>📚 新增拖拽手柄及拖拽禁用相关 demo</li>\n</ul>\n</li>\n<li>\n<p><code>Progress</code></p>\n<ul>\n<li>✨ 进度条边缘样式支持配置为 <code>round</code>、<code>square</code>，默认为 <code>round</code></li>\n<li>🦀️ 默认宽度及 Icon 尺寸调整</li>\n<li>📚 环形进度条代码演示移入废弃区，新版设计语言已不再使用</li>\n</ul>\n</li>\n<li>\n<p><code>Notify</code></p>\n<ul>\n<li>🦀️ Icon 尺寸调整</li>\n<li>🦀️ 圆角调整为 2px</li>\n<li>🦀️ 去掉最小宽度</li>\n</ul>\n</li>\n<li>\n<p><code>Loading</code></p>\n<ul>\n<li>🦀️ circle 图标替换为 svg</li>\n<li>✨ 支持 <code>showBackground</code> 属性，展示白色背景</li>\n<li>✨ 支持 <code>textSize</code> 属性，设置 loading 文案字体大小</li>\n</ul>\n</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>🦀️ 调整提示信息错误信息之间的间距，样式</li>\n<li>📚 修改自定义 model 的 demo，校验失败后能自动滚动到错误位置，将大部分 label 和 input 改成上下排列</li>\n</ul>\n</li>\n<li>\n<p><code>语义化相关</code></p>\n<ul>\n<li>✨ 新增文字按钮、图片按钮语义化定义</li>\n<li>🦀️ Button 组件部分语义化修改</li>\n</ul>\n</li>\n</ul>'}))}}}}]);