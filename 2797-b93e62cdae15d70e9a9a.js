(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[2797],{22797:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>z});var t=s(73450),p=s(83721),e=s(27378),o=s(57318),c=s(3454),l=s(24246),u=["path"];function k(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?k(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var r=function(){return(0,l.jsx)(c.z,{children:"按钮"})},d=function(){return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(c.z,{type:"primary",children:"主按钮"}),(0,l.jsx)(c.z,{children:"次按钮"}),(0,l.jsx)(c.z,{type:"text",children:"文字按钮"}),(0,l.jsx)(c.z,{type:"icon",icon:"search"})]})})},m=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(c.z,{size:"large",children:"大号按钮"}),(0,l.jsx)(c.z,{children:"正常按钮"}),(0,l.jsx)(c.z,{size:"small",children:"小号按钮"}),(0,l.jsx)(c.z,{type:"icon",icon:"search",size:"large"}),(0,l.jsx)(c.z,{type:"icon",icon:"search"}),(0,l.jsx)(c.z,{type:"icon",icon:"search",size:"small"}),(0,l.jsx)(c.z,{type:"text",children:"文字按钮"})]})},g=function(){return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(c.z,{type:"primary",children:"主按钮"}),(0,l.jsx)(c.z,{disabled:!0,type:"primary",children:"主按钮"}),(0,l.jsx)(c.z,{loading:!0,type:"primary",children:"主按钮"}),(0,l.jsx)(c.z,{icon:"search",type:"primary",children:"主按钮"})]}),(0,l.jsxs)("div",{style:{marginTop:36},children:[(0,l.jsx)(c.z,{children:"次按钮"}),(0,l.jsx)(c.z,{disabled:!0,children:"次按钮"}),(0,l.jsx)(c.z,{loading:!0,children:"次按钮"}),(0,l.jsx)(c.z,{icon:"search",children:"次按钮"})]}),(0,l.jsxs)("div",{style:{marginTop:36},children:[(0,l.jsx)(c.z,{type:"text",children:"文字按钮"}),(0,l.jsx)(c.z,{disabled:!0,type:"text",children:"文字按钮"}),(0,l.jsx)(c.z,{loading:!0,type:"text",children:"文字按钮"})]}),(0,l.jsxs)("div",{style:{marginTop:36},children:[(0,l.jsx)(c.z,{type:"icon",icon:"search"}),(0,l.jsx)(c.z,{disabled:!0,type:"icon",icon:"search"}),(0,l.jsx)(c.z,{loading:!0,type:"icon",icon:"search"})]})]})},h=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(c.z,{href:"https://youzan.com",children:"有赞首页"}),(0,l.jsx)(c.z,{href:"https://youzan.com",target:"_blank",children:"新窗口打开"})]})},y=function(){function n(n){var a=n.path,s=(0,p.Z)(n,u);return(0,l.jsx)("a",i(i({},s),{},{href:"#".concat(a)}))}return(0,l.jsx)(c.z.Directive,{type:"primary",children:(0,l.jsx)(n,{path:"path",children:"按钮"})})};function v(n){return(0,l.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function f(n){return(0,l.jsx)(v,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return(0,l.jsx)(v,{tag:"style",html:n.style})}function b(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),b(n.parentNode,a);return a}class B extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return(0,l.jsxs)("div",{className:"zandoc-react-demo",children:[(0,l.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,l.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,l.jsx)("div",{className:"zandoc-react-demo__title",children:(0,l.jsx)("p",{children:s||""})}),(0,l.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,l.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,l.jsx)(v,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class z extends e.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,o.l)(document.documentElement,0,b(a,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(j,{style:""}),e.createElement(f,{html:'<h2 class="anchor-heading"><a href="#button-an-niu">¶</a><a href="javascript:void(0)" id="button-an-niu" class="anchor-point"></a>Button 按钮</h2>\n<p>用于触发操作的可点击元素。用来传达用户可以执行的操作并允许用户与页面交互。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>通过 <code>type</code> 来控制按钮的样式</li>\n<li>通过 <code>size</code> 控制按钮的大小</li>\n<li>提供 <code>\'block\'</code>、<code>\'disabled\'</code>、<code>\'loading\'</code> 等修饰状态</li>\n<li>传入 <code>href/target</code>, Button 将渲染为 a 标签, 仍然支持以其他属性控制样式及状态</li>\n<li>使用 directive 模式来自定义渲染组件</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(B,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(r)),e.createElement(B,{title:"按钮类型",id:"Demostyle",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>次按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>icon<span class="token punctuation">\'</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>search<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(d)),e.createElement(B,{title:"按钮大小",id:"Demosize",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>大号按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>正常按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>小号按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(m)),e.createElement(B,{title:"按钮状态",id:"Demostatus",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        主按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        主按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        主按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        主按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token operator">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n        次按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n        次按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>\n        次按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        次按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token operator">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        文字按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        文字按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        文字按钮\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token operator">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(g)),e.createElement(B,{title:"将按钮变成链接, 只需要提供`href`属性，并可以通过`target`属性控制打开方式",id:"Demolink",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>有赞首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      新窗口打开\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(h)),e.createElement(B,{title:"Directive",id:"Demodirective",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">RouterLink</span></span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path<span class="token punctuation">,</span> <span class="token spread operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword control-flow">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token spread"><span class="token punctuation">{</span><span class="token spread operator">...</span>props<span class="token punctuation">}</span></span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button.Directive</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RouterLink</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RouterLink</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button.Directive</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(y)),e.createElement(f,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#button">¶</a><a href="javascript:void(0)" id="button" class="anchor-point"></a>Button</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>风格</td>\n<td>string</td>\n<td><code>\'default\'</code></td>\n<td><code>\'primary\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>string</td>\n<td><code>\'medium\'</code></td>\n<td><code>\'large\'</code>\n、\n<code>\'small\'</code></td>\n</tr>\n<tr>\n<td>htmlType</td>\n<td>button 标签原生 type 属性</td>\n<td>string</td>\n<td><code>\'button\'</code></td>\n<td><code>submit</code>\n、\n<code>reset</code>\n、\n<code>button</code></td>\n</tr>\n<tr>\n<td>block</td>\n<td>是否以块级元素的形式展开</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>状态控制</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>状态控制</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>边框有颜色，内部没有颜色</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>其他参数</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>href</td>\n<td>可选，如果设置的话会用 a 标签而不是 button</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>target</td>\n<td>可选，和 href 一起使用，就是 a 标签的 target 属性</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td><code>\'_blank\'</code></td>\n</tr>\n<tr>\n<td>download</td>\n<td>HTML5 的下载功能</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定 style</td>\n<td>object</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#buttondirective">¶</a><a href="javascript:void(0)" id="buttondirective" class="anchor-point"></a>ButtonDirective</h4>\n<p>这个组件会将 <code>Button</code> 的样式渲染到自己的 <code>children</code> 上，主要用在需要 <code>Button</code> 的样式，但是需要有特殊逻辑的按钮，例如将一个 <code>react-router</code> 的 <code>Link</code> 渲染成 <code>Button</code> 的样式，但是保留 <code>Link</code> 自身的功能。API 只支持 <code>Button</code> 的样式参数，用法参考 demo。</p>'}))}}}}]);