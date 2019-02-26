(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{747:function(e,o,c){"use strict";c.r(o),c.d(o,"default",function(){return T});var n=c(4),d=c.n(n),t=c(8),a=c.n(t),i=c(5),l=c.n(i),r=c(6),s=c.n(r),u=c(7),h=c.n(u),p=c(2),g=c.n(p),m=c(3),f=c.n(m),b=c(10),k=c.n(b),v=c(0),P=c.n(v),S=c(130);function w(e){return P.a.createElement(e.tag,k()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function y(e){return P.a.createElement(w,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function I(e){return P.a.createElement(w,{tag:"style",html:e.style})}v.Component;var T=function(e){function o(){return d()(this,o),l()(this,s()(o).apply(this,arguments))}return h()(o,e),a()(o,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var o=document.querySelector('a[href="'.concat(e,'"]'));o&&Object(S.a)(document.documentElement,0,function e(o,c){for(;o;)return o.offsetTop&&"static"!==getComputedStyle(o).position&&(c+=o.offsetTop),e(o.parentNode,c);return c}(o,-9))}}},{key:"render",value:function(){return P.a.createElement("div",{className:"zandoc-react-container",key:null},P.a.createElement(I,{style:""}),P.a.createElement(y,{html:'<h2 class="anchor-heading"><a href="#7-0-0-next-4-2019-02-26">¶</a><a href="javascript:void(0)" id="7-0-0-next-4-2019-02-26" class="anchor-point"></a>7.0.0-next.4(2019-02-26)</h2>\n<h3 class="anchor-heading"><a href="#breaking-changes">¶</a><a href="javascript:void(0)" id="breaking-changes" class="anchor-point"></a>Breaking changes</h3>\n<ul>\n<li>不再支持 16.8 以下的 React(Hooks 的最小可用版本)</li>\n<li>删除 UMD 格式输出</li>\n<li><code>Pagination</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li><code>Loading</code> 重写，API 跟老版不兼容，具体参考 API 文档</li>\n<li>用 React 新的 context API 重写 <code>RadioGroup</code> 和 <code>CheckboxGroup</code></li>\n<li>移除 <code>Design</code> 和 <code>SKU</code> 组件，请使用 <code>@zent/design</code> 和 <code>@zent/sku</code>。<code>SKU</code> 组件不再维护，<code>Design</code> 组件进入维护期，不再迭代。</li>\n<li><code>Switch</code> 删除大号样式支持</li>\n<li><code>Tree</code> 组件删除老版支持(即不再支持 <code>useNew</code> 参数选择使用的版本)</li>\n<li>废弃 <code>postcss</code> 改用 <code>node-sass</code>，样式源文件（assets 目录下的）按需加载需要升级 <code>babel-plugin-zent</code> 到 <code>2.0.0-next.3</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#other-changes">¶</a><a href="javascript:void(0)" id="other-changes" class="anchor-point"></a>Other changes</h3>\n<ul>\n<li>样式更新：<code>Button</code>, <code>SplitButton</code>, <code>Breadcrumb</code>, <code>Steps</code>, <code>Menu</code>, <code>Radio</code>, <code>Checkbox</code>, <code>Input</code>, <code>Select</code>, <code>Slider</code>, <code>Switch</code>, <code>Badge</code>, <code>Collapse</code>, <code>Pop</code>, <code>Tabs</code>, <code>Tag</code>, <code>Timeline</code>, <code>Dialog</code>, <code>Progress</code>, <code>Rate</code>, <code>Collapse</code>, <code>Table</code>, <code>Grid</code></li>\n<li>增加 <code>RadioButton</code>，按钮样式的单选框</li>\n<li>删除 <code>zan-utils</code> 依赖</li>\n<li>用 <code>createPortal</code> 重写 <code>Portal</code> 组件，API 向下兼容</li>\n</ul>'}))}}]),o}(v.Component)}}]);