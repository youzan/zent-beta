(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1028:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return z}));var o=t(911),a=t.n(o),c=t(912),s=t.n(c),r=t(570),i=t.n(r),d=t(913),l=t.n(d),p=t(914),h=t.n(p),u=t(915),m=t.n(u),f=t(916),g=t.n(f),v=t(917),y=t.n(v),w=t(0),b=t.n(w),k=t(152);function E(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=m()(e);if(n){var a=m()(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return h()(this,t)}}function j(e){return b.a.createElement(e.tag,y()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function x(e){return b.a.createElement(j,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function C(e){return b.a.createElement(j,{tag:"style",html:e.style})}w.Component;var z=function(e){l()(t,e);var n=E(t);function t(){return a()(this,t),n.apply(this,arguments)}return s()(t,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var n=document.querySelector('a[href="'.concat(e,'"]'));n&&Object(k.a)(document.documentElement,0,function e(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),e(n.parentNode,t);return t}(n,-9))}}},{key:"render",value:function(){return b.a.createElement("div",{className:"zandoc-react-container",key:null},b.a.createElement(C,{style:""}),b.a.createElement(x,{html:'<h2 class="anchor-heading"><a href="#how-to-contribute">¶</a><a href="javascript:void(0)" id="how-to-contribute" class="anchor-point"></a>How to Contribute</h2>\n<h4 class="anchor-heading"><a href="#setup-environment">¶</a><a href="javascript:void(0)" id="setup-environment" class="anchor-point"></a>Setup Environment</h4>\n<pre><code class="language-bash"><span class="token function">yarn</span> bootstrap</code></pre>\n<h4 class="anchor-heading"><a href="#code-structure">¶</a><a href="javascript:void(0)" id="code-structure" class="anchor-point"></a>Code Structure</h4>\n<ul>\n<li>There\'re two npm packages within Zent\'s repository: <code>babel-plugin-zent</code> and <code>zent</code>.</li>\n<li>This site\'s source is in <code>site</code>, run <code>yarn dev</code> within <code>site</code> to view docs locally.</li>\n</ul>\n<p>Source code for all components is in <code>packages/zent</code>:</p>\n<pre><code class="language-text">packages<span class="token operator">/</span>zent\n├── __tests__       # unit tests\n├── assets          # styles\n├── docs            # documentations\n├── scripts         # scripts <span class="token keyword">for</span> testing<span class="token punctuation">,</span> building<span class="token punctuation">,</span> etc<span class="token punctuation">.</span>\n<span class="token property-access">├──</span> src             # <span class="token maybe-class-name">JavaScript</span> source code</code></pre>\n<h4 class="anchor-heading"><a href="#add-a-new-component">¶</a><a href="javascript:void(0)" id="add-a-new-component" class="anchor-point"></a>Add a New Component</h4>\n<p>Steps:</p>\n<ul>\n<li>Add JavaScript code</li>\n<li>Add styles</li>\n<li>Add tests</li>\n<li>Add documentation</li>\n</ul>\n<p>The boring part is automated, just run <code>yarn new-component YOUR-COMPONENT-NAME</code> in <code>packages/zent</code>, all necessary boilerplates are created for you.</p>\n<h4 class="anchor-heading"><a href="#naming">¶</a><a href="javascript:void(0)" id="naming" class="anchor-point"></a>Naming</h4>\n<ul>\n<li>Component file name should be camel case，e.g. <code>ActionButton</code>\'s file name should be <code>ActionsButton.js</code></li>\n<li>Files export functions should be camel case(first letter is lower case), e.g. <code>withPop</code></li>\n<li>Directory name should be lower case separated by -, e.g. <code>number-input</code></li>\n<li>file name in demos should be lower case separated by -, e.g <code>with-close-btn</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#testing">¶</a><a href="javascript:void(0)" id="testing" class="anchor-point"></a>Testing</h4>\n<p>Beside the unit tests in <code>__tests__</code>, remember to update documentation whenever you make a change.</p>\n<pre><code class="language-bash"><span class="token function">yarn</span> dev</code></pre>\n<p>There\'s a separate command to run tests for only one component at a time.</p>\n<pre><code class="language-bash"><span class="token function">yarn</span> test-componet button</code></pre>\n<h2 class="anchor-heading"><a href="#how-to-write-documentation">¶</a><a href="javascript:void(0)" id="how-to-write-documentation" class="anchor-point"></a>How to Write Documentation</h2>\n<p>There\'re two READMEs in each component directory, <code>README_zh-CN.md</code> is Chinese documentaion and <code>README_en-US.md</code> is English documentation. These docs are written in Markdown format.</p>\n<p>You can find detailed <a href="markdown">instructions here</a>.</p>\n<h2 class="anchor-heading"><a href="#tips">¶</a><a href="javascript:void(0)" id="tips" class="anchor-point"></a>Tips</h2>\n<h4 class="anchor-heading"><a href="#component-dependency-within-ze">¶</a><a href="javascript:void(0)" id="component-dependency-within-ze" class="anchor-point"></a>Component Dependency within Zent</h4>\n<p>For example, in order to import <code>Portal</code> within <code>Dialog</code>, you can just write <code>import Portal from \'portal\';</code>, no relative path required.</p>\n<h4 class="anchor-heading"><a href="#export-component">¶</a><a href="javascript:void(0)" id="export-component" class="anchor-point"></a>Export Component</h4>\n<ul>\n<li>Each component can have only one export: the default export. Please attach all other variables to the default export variable if you have multiple exports.</li>\n<li>Don\'t use <a href="https://facebook.github.io/react/docs/refs-and-the-dom.html#refs-and-functional-components">Functional Component</a> when exporting a component. Functional components can\'t have <code>ref</code>s and <code>ref</code>s are discouraged, we should not forbid the use of <code>ref</code>s on our componet anyway.</li>\n</ul>\n<h4 class="anchor-heading"><a href="#styles">¶</a><a href="javascript:void(0)" id="styles" class="anchor-point"></a>Styles</h4>\n<p>Component styles are written in <code>precss</code>, please refer to <a href="https://github.com/jonathantneal/precss">precss documentation</a>.</p>\n<h4 class="anchor-heading"><a href="#z-index">¶</a><a href="javascript:void(0)" id="z-index" class="anchor-point"></a>z-index</h4>\n<p>We have rules for <code>z-index</code> within Zent, <code>z-index</code> priorities(from high to low) are defined as:</p>\n<ul>\n<li>Special：Notify is always on top，[10000, +∞)</li>\n<li>Popups：Pop, Select, DatePicker, ColorPicker, Cascader etc. [2000, 3000)</li>\n<li>Fullscreen components：Dialog, image-preview etc. [1000, 2000)</li>\n<li>Others：Used with one component to control layers, [-10, 10] is recommended, the lower the better.</li>\n</ul>'}))}}]),t}(w.Component)}}]);