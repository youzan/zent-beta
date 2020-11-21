(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{678:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return f}));var t=s(476),o=s.n(t),p=s(21),e=s.n(p),c=s(0),l=s.n(c),i=s(42),u=function(){class n extends l.a.Component{constructor(...n){super(...n),e()(this,"state",{visible:!1}),e()(this,"triggerDialog",n=>{this.setState({visible:n})})}render(){return l.a.createElement("div",null,l.a.createElement(i.k,{type:"primary",onClick:()=>this.triggerDialog(!0)},"Show Dialog"),l.a.createElement(i.x,{visible:this.state.visible,onClose:()=>this.triggerDialog(!1),title:"Dialog"},l.a.createElement("p",null,"content"),l.a.createElement("p",null,"other content")))}}return l.a.createElement(n,null)},r=function(){var n=i.x.openDialog,a=i.x.closeDialog,s="my_dialog";return l.a.createElement(i.k,{type:"primary",onClick:()=>{n({dialogId:s,title:"Open the dialog through openDialog",children:l.a.createElement("div",null,"Hello World"),footer:l.a.createElement(i.k,{onClick:()=>a(s)},"Close"),onClose(){console.log("outer dialog closed")}})}},"Open")},k=function(){var n=i.x.openDialog,a=l.a.createContext({shared:"This is from context"});class s extends l.a.Component{constructor(...s){super(...s),e()(this,"open",()=>{n({parentComponent:this,title:"openDialog support context",children:l.a.createElement(a.Consumer,null,({shared:n})=>l.a.createElement("span",null,n))})})}render(){return l.a.createElement(i.k,{type:"primary",onClick:this.open},"Show")}}return l.a.createElement(a.Provider,null,l.a.createElement(s,null))};function d(n){return l.a.createElement(n.tag,o()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function m(n){return l.a.createElement(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return l.a.createElement(d,{tag:"style",html:n.style})}class h extends c.Component{constructor(...n){super(...n),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return l.a.createElement("div",{className:"zandoc-react-demo"},l.a.createElement("div",{className:"zandoc-react-demo__preview"},o),l.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},l.a.createElement("div",{className:"zandoc-react-demo__title"},l.a.createElement("p",null,s||"")),l.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&l.a.createElement("pre",{className:"zandoc-react-demo__code"},l.a.createElement(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}class f extends c.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(i.mc)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return l.a.createElement("div",{className:"zandoc-react-container",key:null},l.a.createElement(g,{style:""}),l.a.createElement(m,{html:'<h2 class="anchor-heading"><a href="#dialog">¶</a><a href="javascript:void(0)" id="dialog" class="anchor-point"></a>Dialog</h2>\n<p>Dialog is used for opening a floating layer.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>\n<p>Imperative, call <code>openDialog</code> function.</p>\n</li>\n<li>\n<p>Component-based, show/hide the dialog  through <code>visible</code> prop.</p>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),l.a.createElement(h,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> visible<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">triggerDialog</span> <span class="token operator">=</span> <span class="token parameter">visible</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token maybe-class-name">Show</span> <span class="token maybe-class-name">Dialog</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dialog</span></span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">visible</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dialog<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>other content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dialog</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Example</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},l.a.createElement(u)),l.a.createElement(h,{title:"Set up with openDialog",id:"Demoopen",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog<span class="token punctuation">,</span> closeDialog <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token string">\'my_dialog\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    dialogId<span class="token operator">:</span> id<span class="token punctuation">,</span> <span class="token comment">// id is used to close the dialog</span>\n    title<span class="token operator">:</span> <span class="token string">\'Open the dialog through openDialog\'</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Hello</span> <span class="token maybe-class-name">World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    footer<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token function">closeDialog</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Close</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'outer dialog closed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Open</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},l.a.createElement(r)),l.a.createElement(h,{title:"openDialog with context",id:"Democontext",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Dialog</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token maybe-class-name">DemoContext</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  shared<span class="token operator">:</span> <span class="token string">\'This is from context\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token string">\'openDialog support context\'</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DemoContext.Consumer</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> shared <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>shared<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DemoContext.Consumer</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">open</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token maybe-class-name">Show</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DemoContext.Provider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Example</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DemoContext.Provider</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},l.a.createElement(k)),l.a.createElement(m,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>custom dialog title</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>content of the dialog: \n<code>&#x3C;Dialog>xxxx&#x3C;/Dialog></code></td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>content of the dialog footer</td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>visibility of the dialog</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>visibility of the close button at the upper right corner</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>close callback</td>\n<td>func</td>\n<td><code>noop</code></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>visibility of the mask</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>wether click on the mask is to close the dialog</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style object</td>\n<td>object</td>\n<td><code>{}</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#opendialog">¶</a><a href="javascript:void(0)" id="opendialog" class="anchor-point"></a>openDialog</h4>\n<p><code>openDialog(options: object): function</code></p>\n<p><strong><code>options</code> can contain all props above in addition to <code>visible</code> as well as the following parameters：</strong> </p>\n<table class="table">\n<thead>\n<tr>\n<th>parameter</th>\n<th>description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dialogId</td>\n<td>Optional, the id of dialog. The dialog can be closed throuth \n<code>closeDialog(dialogId)</code>\n.</td>\n<td>string</td>\n<td><code>\'random-id\'</code></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>Optional, the reference of dialog\'s parent, used to correlate the \n<code>context</code></td>\n<td>ReactInstance</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>A <code>ref</code> function passed to <code>openDialog</code> can provide a reference to the instance, <strong><code>ref</code> in string format is non-supported.</strong></p>\n<blockquote>\n<p>The return value of <code>openDialog</code> is a function which can close the dialog manually, and close the dialog with this function won\'t trigger <code>onClose</code>. <strong>It is recommended to use <code>closeDialog</code>.</strong></p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#closedialog">¶</a><a href="javascript:void(0)" id="closedialog" class="anchor-point"></a>closeDialog</h4>\n<p><code>closeDialog(dialogId: string, options: object): void</code></p>\n<p>If <code>options.triggerOnClose</code> is <code>true</code>, <code>onClose</code> will be triggered when the dialog is closed.</p>\n<h4 class="anchor-heading"><a href="#specify-the-width-of-the-dialo">¶</a><a href="javascript:void(0)" id="specify-the-width-of-the-dialo" class="anchor-point"></a>Specify the width of the Dialog</h4>\n<p>Set a <code>style</code> prop on Dialog can specify its width, e.g. <code>style={{ width: \'600px\' }}</code>.</p>\n<p>By default the pop-up window width will adapt its content, meanwhile it has a minimum width and maximum width.</p>'}))}}}}]);