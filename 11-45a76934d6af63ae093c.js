(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{953:function(e,o,c){"use strict";c.r(o),c.d(o,"default",(function(){return S}));var a=c(911),n=c.n(a),i=c(912),r=c.n(i),d=c(570),t=c.n(d),h=c(913),s=c.n(h),l=c(914),p=c.n(l),g=c(915),u=c.n(g),f=c(916),v=c.n(f),m=c(917),z=c.n(m),j=c(0),y=c.n(j),k=c(152);function b(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,a=u()(e);if(o){var n=u()(this).constructor;c=Reflect.construct(a,arguments,n)}else c=a.apply(this,arguments);return p()(this,c)}}function w(e){return y.a.createElement(e.tag,z()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function x(e){return y.a.createElement(w,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function P(e){return y.a.createElement(w,{tag:"style",html:e.style})}j.Component;var S=function(e){s()(c,e);var o=b(c);function c(){return n()(this,c),o.apply(this,arguments)}return r()(c,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var o=document.querySelector('a[href="'.concat(e,'"]'));o&&Object(k.a)(document.documentElement,0,function e(o,c){for(;o;)return o.offsetTop&&"static"!==getComputedStyle(o).position&&(c+=o.offsetTop),e(o.parentNode,c);return c}(o,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(P,{style:""}),y.a.createElement(x,{html:'<h1 class="anchor-heading"><a href="#9-0-0-qian-yi-zhi-nan">¶</a><a href="javascript:void(0)" id="9-0-0-qian-yi-zhi-nan" class="anchor-point"></a>9.0.0 迁移指南</h1>\n<h2 class="anchor-heading"><a href="#breaking-changes">¶</a><a href="javascript:void(0)" id="breaking-changes" class="anchor-point"></a>Breaking Changes</h2>\n<h3 class="anchor-heading"><a href="#yi-chu-prefix-zhi-chi">¶</a><a href="javascript:void(0)" id="yi-chu-prefix-zhi-chi" class="anchor-point"></a>移除 <code>prefix</code> 支持</h3>\n<p>所有组件都不再支持 <code>prefix</code> 属性。</p>\n<p>这个属性是历史遗留问题，开始于一个远古的 zent 版本，本身设计的目的为了支持样式定制，但其实一点用也没有。如果有在使用这个属性来做样式定制的，请直接使用 zent 提供的主题功能。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-popover-zu-jian">¶</a><a href="javascript:void(0)" id="chong-xie-popover-zu-jian" class="anchor-point"></a>重写 <code>Popover</code> 组件</h3>\n<p>⚠️ 如果希望使用老版本的 <code>Popover</code> 组件，请使用 <code>@zent/compat</code> 这个包。这个包里的 <code>Popover</code> 组件不再迭代，不加新功能，不改 bug。</p>\n<p>老版本的 <code>Popover</code> 因为 React 的限制，会有一个包裹层 <code>zent-popover-wrapper</code>，新版本的 React 支持了 Fragment，所以 <code>Popover</code> 不再需要这个包裹层了。由于这个改动，<code>Popover</code> 上原来用来控制这个包裹层样式的参数都被删除了，包括 <code>width</code>、<code>display</code> 以及 <code>wrapperClassName</code>，这些属性可以直接在 trigger 上自行控制。另外增加了控制弹层样式的 <code>style</code> 属性，原来的 <code>className</code> 行为未变。</p>\n<h4 class="anchor-heading"><a href="#fei-qi-trigger-base-ji-lei">¶</a><a href="javascript:void(0)" id="fei-qi-trigger-base-ji-lei" class="anchor-point"></a>废弃 <code>Trigger.Base</code> 基类</h4>\n<p>请使用 <code>PopoverAnchor</code> 来实现自定义的 trigger，<code>Trigger.Base</code> 不再被支持。</p>\n<h4 class="anchor-heading"><a href="#trigger-click">¶</a><a href="javascript:void(0)" id="trigger-click" class="anchor-point"></a><code>Trigger.Click</code></h4>\n<ul>\n<li><code>autoClose</code> 重命名为 <code>closeOnClickOutside</code>，这个名字更加贴切的描述了这个属性的作用</li>\n<li>删除 <code>isOutSide</code> 参数，这个参数太过于灵活，使用频次也非常低</li>\n<li>新增 <code>toggle</code> 和 <code>getElement</code>，具体说明请参考 <code>Popover</code> 的文档说明</li>\n</ul>\n<h4 class="anchor-heading"><a href="#trigger-hover">¶</a><a href="javascript:void(0)" id="trigger-hover" class="anchor-point"></a><code>Trigger.Hover</code></h4>\n<ul>\n<li>删除 <code>quirk</code> 和 <code>isOutSide</code> 参数</li>\n<li>新增 <code>anchorOnly</code> 和 <code>getElement</code> 参数，其中 <code>anchorOnly</code> 用于替代 <code>quirk</code> 的绝大部分使用场景</li>\n</ul>\n<h4 class="anchor-heading"><a href="#trigger-focus">¶</a><a href="javascript:void(0)" id="trigger-focus" class="anchor-point"></a><code>Trigger.Focus</code></h4>\n<ul>\n<li>新增 <code>getElement</code> 参数</li>\n</ul>\n<h3 class="anchor-heading"><a href="#pop-he-tooltip">¶</a><a href="javascript:void(0)" id="pop-he-tooltip" class="anchor-point"></a><code>Pop</code> 和 <code>Tooltip</code></h3>\n<p><code>Popover</code> 的改动同样适用于 <code>Pop</code> 和 <code>Tooltip</code>，这里不再重复，请参考上文 <code>Popover</code> 的描述以及 <code>Pop</code> 和 <code>Tooltip</code> 各自的文档说明。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-select">¶</a><a href="javascript:void(0)" id="chong-xie-select" class="anchor-point"></a>重写 <code>Select</code></h3>\n<p>老版本的 <code>Select</code> 是一个非受控组件，代码逻辑难以捉摸，这次是从头开始的完全重写，可以认为是两个完全不同的组件，使用说明请参考新版 <code>Select</code> 的文档。新版加入了一些需求很大的功能，比如选项的动态加载等。</p>\n<p>如果希望继续使用老版本的 <code>Select</code> 组件，请使用 <code>@zent/compat</code> 这个包。⚠️ 注意：这个包里的 <code>Select</code> 组件不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-datepicker-deng-shi-jian-xuan-ze-zu-jian">¶</a><a href="javascript:void(0)" id="chong-xie-datepicker-deng-shi-jian-xuan-ze-zu-jian" class="anchor-point"></a>重写 <code>DatePicker</code> 等时间选择组件</h3>\n<p>和 <code>Select</code> 类似，这也是完全重写，和老组件没有任何关联，使用说明请参考新版组件的文档。新版本采用了全新的交互、视觉设计，新增了一些新交互的组件，比如 <code>CombinedDateRangePicker</code> 和 <code>CombinedTimeRangePicker</code>。</p>\n<p>如果希望继续使用老版本的时间选择组件，请使用 <code>@zent/compat</code> 这个包。⚠️ 注意：这个包里的时间选择组件不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#chong-xie-cascader">¶</a><a href="javascript:void(0)" id="chong-xie-cascader" class="anchor-point"></a>重写 <code>Cascader</code></h3>\n<p>这也是一个从头开始的完全重写，和原组件完全不兼容，使用说明请参考新版组件的文档。新版增加了异步搜索，滚动加载等新功能。</p>\n<p>如果希望继续使用老版本的 <code>Cascader</code>，请使用 <code>@zent/compat</code> 这个包。⚠️ 注意：这个包里的 <code>Cascader</code> 不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#nei-zhi-de-form-field-zu-jian">¶</a><a href="javascript:void(0)" id="nei-zhi-de-form-field-zu-jian" class="anchor-point"></a>内置的 <code>Form</code> <code>Field</code> 组件</h3>\n<p>由于 <code>Select</code> 和时间选择组件的重构，这些组件对应的 <code>Field</code> 也做了相应改造，如果希望使用在新 <code>Form</code>（基于 formulr）中使用这些老版本的 <code>Field</code>，请使用 <code>@zent/compat</code> 这个包里的 <code>formulr/form-components</code>。⚠️ 注意：这些 <code>Field</code> 组件不再迭代新功能，也不再修 bug，只会酌情处理致命的问题。</p>\n<h3 class="anchor-heading"><a href="#previewimage">¶</a><a href="javascript:void(0)" id="previewimage" class="anchor-point"></a><code>previewImage</code></h3>\n<p>所有 CSS 类名都加了 <code>zent-image-p-</code> 的前缀，如果有自定义样式不正常请检查类名是否正确。</p>\n<ul>\n<li><code>zent-show-image</code></li>\n<li><code>image-is-zooming</code></li>\n<li><code>image-p-footer-paging</code></li>\n<li><code>show-rotate-btn</code></li>\n<li><code>rotate-action</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#wen-dang">¶</a><a href="javascript:void(0)" id="wen-dang" class="anchor-point"></a>文档</h3>\n<ul>\n<li>删除 <a href="https://github.com/zent-contrib/sku"><code>Sku</code></a> 和 <a href="https://github.com/zent-contrib/design"><code>Design</code></a> 的文档，这两个组件上个版本已经移除，如果需要查看它们的文档请到对应的仓库看。</li>\n</ul>\n<h2 class="anchor-heading"><a href="#xin-gong-neng">¶</a><a href="javascript:void(0)" id="xin-gong-neng" class="anchor-point"></a>新功能</h2>\n<ul>\n<li>新增 <code>Transfer</code> 组件，一个左右布局的选择组件。</li>\n</ul>'}))}}]),c}(j.Component)}}]);