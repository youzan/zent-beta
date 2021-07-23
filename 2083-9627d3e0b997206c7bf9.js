(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[2083],{72083:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>f});var t=a(73450),p=a(27378),o=a(57318),e=a(29430),c=a(24246);function u(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?u(Object(a),!0).forEach((function(s){(0,t.Z)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var i=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{text:"",suggestions:[]}),(0,t.Z)(this,"onValueChange",(n=>{this.setState({text:n})})),(0,t.Z)(this,"onSearchChange",(n=>{var s=[];if(n)for(var a=n,t=0;t<4;t++)s.push({content:a,value:t}),a+=n;this.setState({suggestions:s})}))}render(){return(0,c.jsx)(e.p,{value:this.state.text,onChange:this.onValueChange,onSearchChange:this.onSearchChange,suggestions:this.state.suggestions})}}return(0,c.jsx)(n,{})},r=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{text:"",suggestions:[{content:"Item 1",value:100},{content:"Item 2",value:200},{content:"Item 3",value:300},{content:"Item 4",value:400},{content:"Item 5",value:500}]}),(0,t.Z)(this,"onValueChange",(n=>{this.setState({text:n})}))}render(){return(0,c.jsx)(e.p,{value:this.state.text,onChange:this.onValueChange,suggestions:this.state.suggestions,multiLine:!0})}}return(0,c.jsx)(n,{})},k=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{text:"",suggestions:[{content:"Item 1",value:100},{content:"Item 2",value:200},{content:"Item 3",value:300},{content:"Item 4",value:400},{content:"Item 5",value:500}]}),(0,t.Z)(this,"onValueChange",(n=>{this.setState({text:n})}))}render(){return(0,c.jsx)(e.p,{value:this.state.text,onChange:this.onValueChange,suggestions:this.state.suggestions,position:"top"})}}return(0,c.jsx)(n,{})},d=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{text:"",suggestions:[]}),(0,t.Z)(this,"onValueChange",(n=>{this.setState({text:n})})),(0,t.Z)(this,"onSearchChange",(n=>{var s=[];if(n)for(var a=n,t=0;t<4;t++)s.push({content:a,value:t}),a+=n;this.setState({suggestions:s})}))}render(){return(0,c.jsx)(e.p,{value:this.state.text,onChange:this.onValueChange,onSearchChange:this.onSearchChange,suggestions:this.state.suggestions,addonBefore:"Buy",addonAfter:"Apple"})}}return(0,c.jsx)(n,{})};function h(n){return(0,c.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function g(n){return(0,c.jsx)(h,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function m(n){return(0,c.jsx)(h,{tag:"style",html:n.style})}function y(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),y(n.parentNode,s);return s}class v extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return(0,c.jsxs)("div",{className:"zandoc-react-demo",children:[(0,c.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,c.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,c.jsx)("div",{className:"zandoc-react-demo__title",children:(0,c.jsx)("p",{children:a||""})}),(0,c.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,c.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,c.jsx)(h,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class f extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&(0,o.l)(document.documentElement,0,y(s,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(m,{style:""}),p.createElement(g,{html:'<h2 class="anchor-heading"><a href="#mention-ti-ji">¶</a><a href="javascript:void(0)" id="mention-ti-ji" class="anchor-point"></a>Mention 提及</h2>\n<p>用于自动补全提及的内容，例如常见的 @某人。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),p.createElement(v,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onSearchChange</span> <span class="token operator">=</span> <span class="token parameter">search</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>search<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> v <span class="token operator">=</span> search<span class="token punctuation">;</span>\n      <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        suggestions<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          content<span class="token operator">:</span> v<span class="token punctuation">,</span>\n          value<span class="token operator">:</span> i<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v <span class="token operator">=</span> v <span class="token operator">+</span> search<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onSearchChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onSearchChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(i)),p.createElement(v,{title:"多行模式",id:"Demomultiline",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 1\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 2\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 3\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 4\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 5\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">multiLine</span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(r)),p.createElement(v,{title:"弹层位置",id:"Demoposition",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 1\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 2\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 3\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 4\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 5\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(k)),p.createElement(v,{title:"Input 有 Prefix 和 Suffix",id:"Demowithinputprefix",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onSearchChange</span> <span class="token operator">=</span> <span class="token parameter">search</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>search<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> v <span class="token operator">=</span> search<span class="token punctuation">;</span>\n      <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        suggestions<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          content<span class="token operator">:</span> v<span class="token punctuation">,</span>\n          value<span class="token operator">:</span> i<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v <span class="token operator">=</span> v <span class="token operator">+</span> search<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onSearchChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onSearchChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">addonBefore</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Buy<span class="token punctuation">"</span></span> <span class="token attr-name">addonAfter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Apple<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(d)),p.createElement(g,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>输入框的内容</td>\n<td><code>string</code></td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>输入框内容变化时的回调函数</td>\n<td><code>(val: string): void</code></td>\n<td>是</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onSearchChange</td>\n<td>触发提及的搜索文字变化时的回调函数</td>\n<td><code>(search: string): void</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>multiLine</td>\n<td>输入框是否是多行模式</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>弹层相对文字的位置</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>bottom</code></td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>suggestions</td>\n<td>提及的提示内容</td>\n<td><code>array</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>suggestionNotFoundContent</td>\n<td>提及的提示为空时的提示内容</td>\n<td><code>node</code></td>\n<td><code>\'无匹配结果，轻敲空格完成输入\'</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>triggerText</td>\n<td>提及的触发前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'@\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p><code>Mention</code> 支持 <code>Input</code> 的 props，例如 <code>placeholder</code> 等。</p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#zhi-chi-de-suggestions-shu-zu-xing-shi">¶</a><a href="javascript:void(0)" id="zhi-chi-de-suggestions-shu-zu-xing-shi" class="anchor-point"></a>支持的 <code>suggestions</code> 数组形式</h4>\n<p><code>suggestions</code> 数组中每一项可以是以下任意一种：</p>\n<ul>\n<li>字符串</li>\n<li>数字</li>\n<li>对象</li>\n</ul>\n<p>对象形式支持的字段如下:</p>\n<table class="table">\n<thead>\n<tr>\n<th>字段</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>选中时对应的值</td>\n<td><code>string</code></td>\n<td>是</td>\n</tr>\n<tr>\n<td>content</td>\n<td>选项的描述，不填默认使用 \n<code>value</code></td>\n<td><code>node</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标类型</td>\n<td><code>string</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>选项是否禁用</td>\n<td><code>bool</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>isGroup</td>\n<td>是否是分组标题</td>\n<td><code>bool</code></td>\n<td>否</td>\n</tr>\n<tr>\n<td>isDivider</td>\n<td>是否是分割线</td>\n<td><code>bool</code></td>\n<td>否</td>\n</tr>\n</tbody>\n</table>'}))}}}}]);