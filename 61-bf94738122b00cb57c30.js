(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{791:function(n,s,a){"use strict";a.r(s),a.d(s,"default",function(){return E});var t=a(28),o=a.n(t),p=a(29),e=a.n(p),c=a(30),l=a.n(c),r=a(31),i=a.n(r),u=a(43),d=a.n(u),k=a(32),m=a.n(k),g=a(24),h=a.n(g),f=a(707),v=a.n(f),y=a(0),w=a.n(y),b=a(175);function C(n){return w.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function D(n){return w.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return w.a.createElement(C,{tag:"style",html:n.style})}y.Component;var E=function(n){function s(){return o()(this,s),l()(this,i()(s).apply(this,arguments))}return m()(s,n),e()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(b.a)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(j,{style:""}),w.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#design-wei-ye-mian-bian-ji-zu-jian">¶</a><a href="javascript:void(0)" id="design-wei-ye-mian-bian-ji-zu-jian" class="anchor-point"></a>Design 微页面编辑组件</h2>\n<p>请使用 <code>@zent/design</code> 这个包。</p>\n<p>微页面编辑组件，用所见即所得(WYSIWG)的方式创建内容丰富的富文本页面。</p>\n<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>components</td>\n<td>所有组件的定义数组</td>\n<td>array</td>\n<td>[]</td>\n<td>必须</td>\n</tr>\n<tr>\n<td>value</td>\n<td>组件当前的值</td>\n<td>array</td>\n<td>[]</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>组件值修改时触发的回调函数</td>\n<td>func(value: array): void</td>\n<td>必须</td>\n<td></td>\n</tr>\n<tr>\n<td>settings</td>\n<td>组件的配置信息，会传给每个 Design 组件</td>\n<td>object</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>onSettingsChange</td>\n<td>组件配置信息的修改回调函数</td>\n<td>func</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>defaultSelectedIndex</td>\n<td>默认选中的下标（value）</td>\n<td>number</td>\n<td>-1</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>preview</td>\n<td>用于自定义整个 Design 的渲染</td>\n<td>Component</td>\n<td>DesingPreview</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>previewFooter</td>\n<td>自定义 Preview 底部的额外信息</td>\n<td>node</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>confirmUnsavedLeave</td>\n<td>有未保存数据关闭窗口时需要用户确认</td>\n<td>boolean</td>\n<td>true</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>cache</td>\n<td>是否将未保存的数据暂存到 localStorage 中</td>\n<td>boolean</td>\n<td>false</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>cacheId</td>\n<td>配合 cache 使用，用于设置 Design 实例的缓存 id</td>\n<td>string</td>\n<td></td>\n<td>cache 为 true 时必填</td>\n</tr>\n<tr>\n<td>cacheRestoreMessage</td>\n<td>恢复缓存时的提示文案</td>\n<td>node</td>\n<td>提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用编辑</td>\n<td>boolean</td>\n<td>false</td>\n<td>可选</td>\n</tr>\n<tr>\n<td>globalConfig</td>\n<td>全局参数，通常是 window._global</td>\n<td>object</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>children</td>\n<td>渲染在 Design 内部的额外内容</td>\n<td>node</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>scrollTopOffset</td>\n<td>滚动到顶部时的偏移量</td>\n<td>number \n|\n func</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>scrollLeftOffset</td>\n<td>滚动到左侧时的偏移量</td>\n<td>number \n|\n func</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外类名</td>\n<td>string</td>\n<td></td>\n<td>可选</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>类名前缀</td>\n<td>string</td>\n<td></td>\n<td>可选</td>\n</tr>\n</tbody>\n</table>\n<p><code>components</code> 是一个数组，列出了所有支持的组件，每一项需要指定组件的类型，预览和编辑组件，以及是否可以拖拽、编辑等。 </p>\n<pre><code class="language-js">type Component <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 组件类型，必须唯一</span>\n  type<span class="token punctuation">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 组件类型的默认值</span>\n  <span class="token comment">// 如果 type 是数组，可以传一个下标</span>\n  <span class="token comment">// 如果是函数，不管 type 是字符串还是数组都会调用</span>\n  defaultType<span class="token operator">?</span><span class="token punctuation">:</span> number <span class="token operator">|</span> <span class="token punctuation">(</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> string\n\n  <span class="token comment">// 渲染预览部分的组件</span>\n  preview<span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// 渲染编辑部分的组件</span>\n  editor<span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// 预览组件的包裹层</span>\n  previewItem<span class="token operator">?</span><span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// 所有预览界面上的事件都是在这个里面处理的</span>\n  previewController<span class="token operator">?</span><span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// 编辑组件的包裹层</span>\n  editorItem<span class="token operator">?</span><span class="token punctuation">:</span> ReactComponent<span class="token punctuation">,</span>\n\n  <span class="token comment">// 组件是否可以拖拽</span>\n  dragable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 组件是否出现在添加组件的列表里面</span>\n  appendable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 是否显示右下角的编辑区域(编辑/加内容/删除)</span>\n  <span class="token comment">// 如果要自定义编辑区域，可以通过重写 previewController 的方式来做。</span>\n  configurable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 是否显示删除按钮</span>\n  canDelete<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 是否显示添加组件按钮</span>\n  canInsert<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 组件是否可以编辑</span>\n  <span class="token comment">// 可以选中的组件一定是可以编辑的</span>\n  <span class="token comment">// 不可编辑的组件不可选中，只能展示。</span>\n  <span class="token comment">// 右下角的编辑区域由 configurable 单独控制</span>\n  editable<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 选中时是否高亮</span>\n  highlightWhenSelect<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 组件最多可以添加的实例个数，可以是数字或者一个函数</span>\n  <span class="token comment">// 不传或者传 0 表示没有限制</span>\n  <span class="token comment">// 如果是函数，返回 false 表示不可再添加</span>\n  limit<span class="token operator">?</span><span class="token punctuation">:</span> number <span class="token operator">|</span> <span class="token punctuation">(</span>count<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> boolean<span class="token punctuation">,</span>\n\n  <span class="token comment">// 组件不可再添加后，鼠标移上去的提示</span>\n  <span class="token comment">// 如果是个函数，需要返回一个错误信息</span>\n  <span class="token comment">// 如果 limit 是个正整数，limitMessage 会有一个默认的值：该组件最多添加 xx 个</span>\n  <span class="token comment">// 如果 limit 是个负数，limitMessage 默认为：该组件暂不可用</span>\n  limitMessage<span class="token operator">?</span><span class="token punctuation">:</span> node <span class="token operator">|</span> <span class="token punctuation">(</span>count<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> node<span class="token punctuation">,</span>\n\n  <span class="token comment">// 是否可以添加组件的回调函数，返回一个 Promise，resolve 的话可以创建</span>\n  <span class="token comment">// 添加组件的实例时会调用</span>\n  shouldCreate<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>comp<span class="token punctuation">:</span> Component<span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token punctuation">,</span>\n\n  <span class="token comment">// 传给 editor 的额外 props</span>\n  editorProps<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> object<span class="token punctuation">)</span> <span class="token operator">=></span> object <span class="token operator">|</span> object<span class="token punctuation">,</span>\n\n  <span class="token comment">// 传给 preview 的额外 props</span>\n  previewProps<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> object<span class="token punctuation">)</span> <span class="token operator">=></span> object <span class="token operator">|</span> object\n<span class="token punctuation">}</span></code></pre>\n<p><code>value</code> 是一个数组，数组里面每一项都有一个 <code>type</code> 属性，用来标识这个值应该由哪个组件来渲染。</p>\n<h3 class="anchor-heading"><a href="#design-group-fang-fa">¶</a><a href="javascript:void(0)" id="design-group-fang-fa" class="anchor-point"></a>Design.group 方法</h3>\n<p>原型：<code>group(name: string): object</code></p>\n<p><code>Design</code> 组件支持将可添加的组件分组，只需要在 <code>components</code> 数组内适当的位置插入 <code>Design.group(\'groupName\')</code> 组件即可。</p>\n<pre><code class="language-text"><span class="token punctuation">[</span>\n  config<span class="token punctuation">,</span>\n\n  Design<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">\'分组1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  componentA<span class="token punctuation">,</span>\n  componentB<span class="token punctuation">,</span>\n\n  Design<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">\'分组2\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  componentC<span class="token punctuation">,</span>\n  componentD\n<span class="token punctuation">]</span></code></pre>\n<h3 class="anchor-heading"><a href="#settings-he-onsettingschange">¶</a><a href="javascript:void(0)" id="settings-he-onsettingschange" class="anchor-point"></a><code>settings</code> 和 <code>onSettingsChange</code></h3>\n<p>可以传入一个可选的 <code>settings</code> 以及相应的 <code>onSettingsChange</code> 回调函数，这两个属性会被传递给每一个 Design 组件。</p>\n<p><code>Design</code> 预定义个了一个设置：<code>previewBackground</code>，<code>Design</code> 使用 <code>settings.previewBackground</code> 来设置预览区域的背景色。</p>\n<h3 class="anchor-heading"><a href="#design-shi-li-fang-fa">¶</a><a href="javascript:void(0)" id="design-shi-li-fang-fa" class="anchor-point"></a>Design 实例方法</h3>\n<ul>\n<li><code>design.validate(): Promise</code>, 触发校验，如果有错误会 reject，否则 resolve</li>\n<li><code>design.markAsSaved()</code>，标记为以保存状态，如果使用了缓存或者离开提示需要手动调用这个函数通知 Design 更改已经保存</li>\n</ul>\n<h3 class="anchor-heading"><a href="#stripuuid">¶</a><a href="javascript:void(0)" id="stripuuid" class="anchor-point"></a>stripUUID</h3>\n<p><code>Design</code> 上面有一个 <code>stripUUID</code> 方法，数据发送到服务器之前可以使用这个函数来剔除 <code>Design</code> 内部使用的 id，这样可以减小数据大小。</p>\n<p>使用这个函数是可选的，不剔除也不会有问题，只是传输和存储的数据会稍稍大一点。</p>\n<h3 class="anchor-heading"><a href="#ru-he-shi-xian-xin-de-design-zu-jian">¶</a><a href="javascript:void(0)" id="ru-he-shi-xian-xin-de-design-zu-jian" class="anchor-point"></a>如何实现新的 Design 组件</h3>\n<p>每个 Design 组件都分为两部分：Preview 以及 Editor。</p>\n<p>Preview 比较简单，实现一个组件接受 <code>{ value: any, globalConfig: any, design: object }</code> 这些 props即可。</p>\n<p>Editor 请继承 <code>@youzan/design/lib/base/editor/DesignEditor</code>，这个基类提供了一些常用的方法（例如 <code>onChange</code> 事件的处理函数），在子类里面可以直接使用。</p>\n<p>Editor 接受如下props：<code>{ value: any, onChange: func, showError: boolean, validation: object, design object }</code>。</p>\n<ul>\n<li><code>validate(value): Promise</code> 有错误的时候 resolve 一个错误对象出来。</li>\n<li><code>reorder&#x3C;T>(array: T[], fromIndex: number, toIndex: number): T[]</code> 用于在拖拽结束后调整数组内容。</li>\n<li><code>props.design</code> 提供了一下可能有用的方法：例如触发组件的校验等。</li>\n</ul>\n<p>Editor 必须提供这几个静态属性：<code>designType, designDescription, getInitialValue, validate</code>。</p>\n<p>Editor 内部支持使用 <a href="https://github.com/atlassian/react-beautiful-dnd"><code>react-beautiful-dnd</code></a> 实现拖拽，只需要实现 <code>shouldHandleDragEnd(type: string): boolean</code> 以及 <code>onDragEnd(result)</code> 即可。<code>react-beautiful-dnd</code> 的使用请看官方文档以及 <code>components/image-ad</code> 下的示例。</p>\n<h4 class="anchor-heading"><a href="#yi-ge-li-zi">¶</a><a href="javascript:void(0)" id="yi-ge-li-zi" class="anchor-point"></a>一个例子</h4>\n<pre><code class="language-js"><span class="token comment">// Preview</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NoticePreview</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&#x3C;</span>div className<span class="token operator">=</span><span class="token string">"rc-design-component-notice-preview"</span><span class="token operator">></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&#x3C;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Editor</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DesignEditor<span class="token punctuation">,</span> ControlGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@youzan/design/base/editor/DesignEditor\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> PLACEHOLDER <span class="token operator">=</span> <span class="token string">\'请填写内容，如果过长，将会在手机上滚动显示\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NoticeEditor</span> <span class="token keyword">extends</span> <span class="token class-name">DesignEditor</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> showError<span class="token punctuation">,</span> validation <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&#x3C;</span>div className<span class="token operator">=</span><span class="token string">"rc-design-component-notice-editor"</span><span class="token operator">></span>\n        <span class="token operator">&#x3C;</span>ControlGroup\n          label<span class="token operator">=</span><span class="token string">"公告:"</span>\n          required\n          showError<span class="token operator">=</span><span class="token punctuation">{</span>showError <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMetaProperty</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">,</span> <span class="token string">\'touched\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          error<span class="token operator">=</span><span class="token punctuation">{</span>validation<span class="token punctuation">.</span>content<span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token operator">&#x3C;</span>Input\n            name<span class="token operator">=</span><span class="token string">"content"</span>\n            placeholder<span class="token operator">=</span><span class="token punctuation">{</span>PLACEHOLDER<span class="token punctuation">}</span>\n            value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>content<span class="token punctuation">}</span>\n            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onInputChange<span class="token punctuation">}</span>\n            onBlur<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onInputBlur<span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&#x3C;</span><span class="token operator">/</span>ControlGroup<span class="token operator">></span>\n      <span class="token operator">&#x3C;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> designType <span class="token operator">=</span> <span class="token string">\'notice\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> designDescription <span class="token operator">=</span> <span class="token string">\'公告\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> <span class="token function">getInitialValue</span><span class="token punctuation">(</span>settings<span class="token punctuation">,</span> globalConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      content<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      scrollable<span class="token punctuation">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token function">validate</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> content <span class="token punctuation">}</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>content <span class="token operator">||</span> <span class="token operator">!</span>content<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        errors<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token string">\'请填写公告内容\'</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">resolve</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}))}}]),s}(y.Component)}}]);