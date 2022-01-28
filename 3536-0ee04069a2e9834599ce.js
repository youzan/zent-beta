(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[3536],{63536:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>v});var t=a(73450),p=a(27378),e=a(57318),o=a(90039),c=a(23476),l=a(24246);function u(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function k(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?u(Object(a),!0).forEach((function(s){(0,t.Z)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var i=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.V,{children:"标签内容"}),(0,l.jsx)(o.V,{children:(0,l.jsx)("a",{href:"#",children:"链接"})})]})},r=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.V,{theme:"grey",children:"灰色"}),(0,l.jsx)(o.V,{theme:"red",children:"红色"}),(0,l.jsx)(o.V,{theme:"green",children:"绿色"}),(0,l.jsx)(o.V,{theme:"yellow",children:"黄色"}),(0,l.jsx)(o.V,{theme:"blue",children:"蓝色"}),(0,l.jsx)(o.V,{theme:"grey",outline:!0,children:"灰色"}),(0,l.jsx)(o.V,{theme:"red",outline:!0,children:"红色"}),(0,l.jsx)(o.V,{theme:"green",outline:!0,children:"绿色"}),(0,l.jsx)(o.V,{theme:"yellow",outline:!0,children:"黄色"}),(0,l.jsx)(o.V,{theme:"blue",outline:!0,children:"蓝色"})]})},d=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.V,{style:{borderColor:"#9370db",backgroundColor:"#9370db"},children:"#9370db"}),(0,l.jsx)(o.V,{style:{borderColor:"#9370db",color:"#9370db"},outline:!0,children:"#9370db"}),(0,l.jsx)(o.V,{style:{borderColor:"#87d068",backgroundColor:"#cfefdf",color:"#00a854"},children:"自定义色彩"}),(0,l.jsx)(o.V,{style:{borderColor:"#778899",backgroundColor:"#778899"},rounded:!1,children:"非圆角"}),(0,l.jsx)(o.V,{style:{borderColor:"#48d1cc",backgroundColor:"#48d1cc",fontSize:14},children:"大标签"})]})},g=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.V,{closable:!0,onClose:n=>{c.g.success("Close tag")},outline:!0,children:"自定义色彩"}),(0,l.jsx)(o.V,{closable:!0,onClose:n=>{c.g.success("Close tag2")},children:"非圆角"}),(0,l.jsx)(o.V,{theme:"grey",closable:!0,closeButtonStyle:{color:"#969799"},children:"自定义关闭按钮颜色"})]})};function m(n){return(0,l.jsx)(n.tag,k(k({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return(0,l.jsx)(m,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function b(n){return(0,l.jsx)(m,{tag:"style",html:n.style})}function y(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),y(n.parentNode,s);return s}class f extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return(0,l.jsxs)("div",{className:"zandoc-react-demo",children:[(0,l.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,l.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,l.jsx)("div",{className:"zandoc-react-demo__title",children:(0,l.jsx)("p",{children:a||""})}),(0,l.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,l.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,l.jsx)(m,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class v extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&(0,e.l)(document.documentElement,0,y(s,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(b,{style:".zent-tag{\n\tmargin: 0 10px 5px 0;\n}"}),p.createElement(h,{html:'<h2 class="anchor-heading"><a href="#tag-biao-qian">¶</a><a href="javascript:void(0)" id="tag-biao-qian" class="anchor-point"></a>Tag 标签</h2>\n<p>标签用于进行标记和分类。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>用于添加特殊标记或者分类记号。</li>\n<li>可添加多个标签。</li>\n<li>标签内字数建议不超过四个字。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),p.createElement(f,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>标签内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(i)),p.createElement(f,{title:"两种风格和五种预定样式：`red`，`green`，`yellow`，`blue`，`grey`",id:"Demostyle",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>绿色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蓝色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      灰色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      红色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      绿色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      黄色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      蓝色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(r)),p.createElement(f,{title:"支持自定义色彩，非圆角，标签大小",id:"Democustom",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      #<span class="token number">9370</span>db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        color<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">outline</span>\n    <span class="token punctuation">></span></span>\n      #<span class="token number">9370</span>db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#87d068\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#cfefdf\'</span><span class="token punctuation">,</span>\n        color<span class="token operator">:</span> <span class="token string">\'#00a854\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      自定义色彩\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">rounded</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      非圆角\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      大标签\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(d)),p.createElement(f,{title:"关闭标签，支持添加关闭事件",id:"Demoonclose",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Notify</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback2</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>closeCallback<span class="token punctuation">}</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      自定义色彩\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>closeCallback2<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      非圆角\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">closeButtonStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">\'#969799\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      自定义关闭按钮颜色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(g)),p.createElement(h,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>theme</td>\n<td>标签的预置颜色</td>\n<td>string</td>\n<td><code>'red'</code></td>\n<td><code>'red'</code>\n \n|\n \n<code>'green'</code>\n \n|\n \n<code>'yellow'</code>\n \n|\n \n<code>'blue'</code>\n \n|\n \n<code>'grey'</code></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>边框有颜色，无底色</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>是否有圆角</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否显示</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭时的回调</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>closeButtonStyle</td>\n<td>关闭按钮样式</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>所有参数都是可选，搭配 <code>visible</code> 和 <code>onClose</code> 可以实现关闭效果</p>\n</blockquote>"}))}}},90039:(n,s,a)=>{"use strict";a.d(s,{V:()=>k});var t=a(59312),p=a(24246),e=a(60042),o=a.n(e),c=a(27378),l=a(27036),u={red:!0,green:!0,yellow:!0,blue:!0,grey:!0},k=(0,c.forwardRef)((function(n,s){var a=n.theme,e=void 0===a?"red":a,c=n.outline,k=n.rounded,i=void 0===k||k,r=n.closable,d=n.children,g=n.className,m=n.onClose,h=n.closeButtonStyle,b=n.visible,y=void 0===b||b,f=(0,t._T)(n,["theme","outline","rounded","closable","children","className","onClose","closeButtonStyle","visible"]);if(!y)return null;var v=u[e]?"-"+e:"",j=c?"-outline":"";return(0,p.jsxs)("div",(0,t.pi)({ref:s,className:o()("zent-tag","zent-tag-style"+v+j,g,{"zent-tag-rounded":i,"zent-tag-closable":r})},f,{"data-zv":"9.12.4"},{children:[(0,p.jsx)("div",(0,t.pi)({className:"zent-tag-content","data-zv":"9.12.4"},{children:d}),void 0),r?(0,p.jsx)(l.Z,{type:"close",className:"zent-tag-close-btn",onClick:m,style:h},void 0):null]}),void 0)}));k.displayName="ZentTag"}}]);