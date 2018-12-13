(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{980:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return _});var o=n(4),c=n.n(o),i=n(8),t=n.n(i),r=n(5),d=n.n(r),s=n(6),h=n.n(s),l=n(7),p=n.n(l),u=n(2),f=n.n(u),g=n(3),m=n.n(g),v=n(10),y=n.n(v),j=n(0),z=n.n(j),b=n(148);function x(e){return z.a.createElement(e.tag,y()({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function k(e){return z.a.createElement(x,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function w(e){return z.a.createElement(x,{tag:"style",html:e.style})}j.Component;var _=function(e){function a(){return c()(this,a),d()(this,h()(a).apply(this,arguments))}return p()(a,e),t()(a,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var a=document.querySelector('a[href="'.concat(e,'"]'));a&&Object(b.a)(document.documentElement,0,function e(a,n){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(n+=a.offsetTop),e(a.parentNode,n);return n}(a,-9))}}},{key:"render",value:function(){return z.a.createElement("div",{className:"zandoc-react-container",key:null},z.a.createElement(w,{style:""}),z.a.createElement(k,{html:'<h2 class="anchor-heading"><a href="#ru-he-can-yu-zent-de-kai-fa">¶</a><a href="javascript:void(0)" id="ru-he-can-yu-zent-de-kai-fa" class="anchor-point"></a>如何参与 Zent 的开发</h2>\n<h4 class="anchor-heading"><a href="#chu-shi-hua-xiang-mu">¶</a><a href="javascript:void(0)" id="chu-shi-hua-xiang-mu" class="anchor-point"></a>初始化项目:</h4>\n<pre><code class="language-bash">yarn bootstrap</code></pre>\n<h4 class="anchor-heading"><a href="#dai-ma-mu-lu-jie-gou">¶</a><a href="javascript:void(0)" id="dai-ma-mu-lu-jie-gou" class="anchor-point"></a>代码目录结构</h4>\n<ul>\n<li>仓库包含两个 npm 包，代码都在 <code>packages</code> 目录下：<code>babel-plugin-zent</code> 以及 <code>zent</code>。</li>\n<li><code>site</code> 目录下是文档网站的代码，本地开发时可以在 <code>site</code> 目录下运行 <code>yarn dev</code> 开启文档网站。</li>\n</ul>\n<p>组件代码都在 <code>packages/zent</code> 目录下：</p>\n<pre><code class="language-text">packages<span class="token operator">/</span>zent\n├── __tests__       # 测试\n├── assets          # 样式代码\n├── docs            # 一些文档\n├── scripts         # 一些脚本，用于测试、发布等\n├── src             # 组件源码\n├── typings         # typescript 的定义文件</code></pre>\n<h4 class="anchor-heading"><a href="#tian-jia-xin-zu-jian">¶</a><a href="javascript:void(0)" id="tian-jia-xin-zu-jian" class="anchor-point"></a>添加新组件</h4>\n<p>主要步骤：</p>\n<ul>\n<li>添加 Javascript 代码</li>\n<li>添加样式代码</li>\n<li>添加测试代码</li>\n<li>添加文档</li>\n<li>添加 Typescript 的定义</li>\n</ul>\n<p>我们提供了一个脚本来自动化大部分初始化工作，在 <code>packages/zent</code> 目录下执行 <code>yarn new-component YOUR-COMPONENT-NAME</code>，脚本会自动创建组件需要的目录和样板代码。</p>\n<p>代码写完之后还需要在 <code>packages/zent/typings</code> 目录下添加新组建对应的 Typescript 类型定义。</p>\n<h4 class="anchor-heading"><a href="#wen-jian-ming-ming">¶</a><a href="javascript:void(0)" id="wen-jian-ming-ming" class="anchor-point"></a>文件命名</h4>\n<ul>\n<li>组件文件名字驼峰，例如 <code>ActionButton</code> 组件的文件名就是 <code>ActionsButton.js</code></li>\n<li>导出函数的文件名驼峰（首字母小写），一般和函数名字保持一致，例如 <code>withPop</code></li>\n<li>文件夹名字用 - 隔开，例如 <code>number-input</code></li>\n<li>demos文件夹中的Md文件名字用 - 隔开，例如 <code>with-close-btn</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#ben-di-ce-shi">¶</a><a href="javascript:void(0)" id="ben-di-ce-shi" class="anchor-point"></a>本地测试</h4>\n<p><code>__tests__</code> 里面只是单元测试，本地测试请在本地运行文档网站，确保每次修改代码文档都回有相应的更新。</p>\n<p>我们的原则是：文档即代码。</p>\n<pre><code class="language-bash">yarn dev</code></pre>\n<p>我们另外提供了一个命令用来运行单个组件的测试用例，传入组件在 <code>__tests__</code> 下的目录名或者文件名即可。</p>\n<pre><code class="language-bash">yarn test-component button</code></pre>\n<h2 class="anchor-heading"><a href="#zu-jian-wen-dang-ru-he-bian-xie">¶</a><a href="javascript:void(0)" id="zu-jian-wen-dang-ru-he-bian-xie" class="anchor-point"></a>组件文档如何编写</h2>\n<p>每个组件根目录下都有两个 README 文件，<code>README_zh-CN.md</code> (注意名称大写) 是中文文档，<code>README_en-US.md</code> 是英文文档。组件文档采用 Markdown 格式，具体书写规范请参考 <a href="markdown">组件文档书写规范</a>。</p>\n<h2 class="anchor-heading"><a href="#yi-xie-shi-yong-ji-qiao">¶</a><a href="javascript:void(0)" id="yi-xie-shi-yong-ji-qiao" class="anchor-point"></a>一些实用技巧</h2>\n<h4 class="anchor-heading"><a href="#zu-jian-hu-xiang-yin-yong">¶</a><a href="javascript:void(0)" id="zu-jian-hu-xiang-yin-yong" class="anchor-point"></a>组件互相引用</h4>\n<p>比如说 <code>Dialog</code> 里面引用了 <code>Portal</code> 组件，代码里支持 <code>import Portal from \'portal\';</code> 这样去引用，不需要写相对路径。</p>\n<h4 class="anchor-heading"><a href="#zu-jian-dao-chu">¶</a><a href="javascript:void(0)" id="zu-jian-dao-chu" class="anchor-point"></a>组件导出</h4>\n<p>为了统一管理，每个组件只能 <code>export default</code> 一个东西，如果需要导出多个变量，请把其余变量挂载在 <code>export default</code> 的变量上。</p>\n<p>导出的组件不要写成 <a href="https://facebook.github.io/react/docs/refs-and-the-dom.html#refs-and-functional-components">Functional Component</a>，这样子使用的时候没法加 <code>ref</code>，虽然不推荐用 <code>ref</code>，但是我们应该支持在组件上加 <code>ref</code>。</p>\n<h4 class="anchor-heading"><a href="#yang-shi">¶</a><a href="javascript:void(0)" id="yang-shi" class="anchor-point"></a>样式</h4>\n<p>组件样式使用 <code>precss</code>，语法请参考 <a href="https://github.com/jonathantneal/precss">precss 文档</a>.</p>\n<h4 class="anchor-heading"><a href="#guan-yu-z-index">¶</a><a href="javascript:void(0)" id="guan-yu-z-index" class="anchor-point"></a>关于 z-index</h4>\n<p>为了防止 <code>z-index</code> 滥用，我们规定了组件库内部的 <code>z-index</code> 使用规范。</p>\n<p><code>z-index</code> 优先级（从高到低）：</p>\n<ul>\n<li>特殊组件：Notify 永远在最上面，[10000, +∞)</li>\n<li>小范围的 ‘用完就关’ 的组件：Pop, Select, Datetimepicker, ColorPicker, Cascader 等 [2000, 3000)</li>\n<li>全屏幕的组件：Dialog, image-preview 等 [1000, 2000)</li>\n<li>其他：组件内部用来控制层次的 z-index 的区间 [-10, 10]，尽可能写小，一般1，2，3这种就够了。</li>\n</ul>'}))}}]),a}(j.Component)}}]);