(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1058:function(n,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return V}));var t=a(917),p=a.n(t),e=a(911),o=a.n(e),c=a(912),u=a.n(c),l=a(570),i=a.n(l),r=a(913),k=a.n(r),d=a(914),m=a.n(d),g=a(915),h=a.n(g),y=a(916),v=a.n(y),f=a(0),w=a.n(f),b=a(152),C=a(169);function x(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,t=h()(n);if(s){var p=h()(this).constructor;a=Reflect.construct(t,arguments,p)}else a=t.apply(this,arguments);return m()(this,a)}}var E=function(){var n=function(n){k()(a,n);var s=x(a);function a(){var n;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=s.call.apply(s,[this].concat(p)),v()(i()(n),"state",{text:"",suggestions:[]}),v()(i()(n),"onValueChange",(function(s){n.setState({text:s})})),v()(i()(n),"onSearchChange",(function(s){var a=[];if(s)for(var t=s,p=0;p<4;p++)a.push({content:t,value:p}),t+=s;n.setState({suggestions:a})})),n}return u()(a,[{key:"render",value:function(){return w.a.createElement(C.Mention,{value:this.state.text,onChange:this.onValueChange,onSearchChange:this.onSearchChange,suggestions:this.state.suggestions})}}]),a}(w.a.Component);return w.a.createElement(n,null)},S=function(){var n=function(n){k()(a,n);var s=x(a);function a(){var n;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=s.call.apply(s,[this].concat(p)),v()(i()(n),"state",{text:"",suggestions:[{content:"Item 1",value:100},{content:"Item 2",value:200},{content:"Item 3",value:300},{content:"Item 4",value:400},{content:"Item 5",value:500}]}),v()(i()(n),"onValueChange",(function(s){n.setState({text:s})})),n}return u()(a,[{key:"render",value:function(){return w.a.createElement(C.Mention,{value:this.state.text,onChange:this.onValueChange,suggestions:this.state.suggestions,multiLine:!0})}}]),a}(w.a.Component);return w.a.createElement(n,null)},M=function(){var n=function(n){k()(a,n);var s=x(a);function a(){var n;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=s.call.apply(s,[this].concat(p)),v()(i()(n),"state",{text:"",suggestions:[{content:"Item 1",value:100},{content:"Item 2",value:200},{content:"Item 3",value:300},{content:"Item 4",value:400},{content:"Item 5",value:500}]}),v()(i()(n),"onValueChange",(function(s){n.setState({text:s})})),n}return u()(a,[{key:"render",value:function(){return w.a.createElement(C.Mention,{value:this.state.text,onChange:this.onValueChange,suggestions:this.state.suggestions,position:"top"})}}]),a}(w.a.Component);return w.a.createElement(n,null)},N=function(){var n=function(n){k()(a,n);var s=x(a);function a(){var n;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=s.call.apply(s,[this].concat(p)),v()(i()(n),"state",{text:"",suggestions:[]}),v()(i()(n),"onValueChange",(function(s){n.setState({text:s})})),v()(i()(n),"onSearchChange",(function(s){var a=[];if(s)for(var t=s,p=0;p<4;p++)a.push({content:t,value:p}),t+=s;n.setState({suggestions:a})})),n}return u()(a,[{key:"render",value:function(){return w.a.createElement(C.Mention,{value:this.state.text,onChange:this.onValueChange,onSearchChange:this.onSearchChange,suggestions:this.state.suggestions,addonBefore:"Buy",addonAfter:"Apple"})}}]),a}(w.a.Component);return w.a.createElement(n,null)};function I(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function D(n){return w.a.createElement(I,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return w.a.createElement(I,{tag:"style",html:n.style})}var z=function(n){k()(a,n);var s=x(a);function a(){var n;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=s.call.apply(s,[this].concat(p)),v()(i()(n),"state",{showCode:!1}),v()(i()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return u()(a,[{key:"render",value:function(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,a||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(I,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(f.Component),V=function(n){k()(a,n);var s=x(a);function a(){return o()(this,a),s.apply(this,arguments)}return u()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(b.a)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(j,{style:""}),w.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#mention">¶</a><a href="javascript:void(0)" id="mention" class="anchor-point"></a>Mention</h2>\n<p>Use <code>Mention</code> when you need to mention someone or something when typing, e.g. @somebody.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),w.a.createElement(z,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onSearchChange</span> <span class="token operator">=</span> <span class="token parameter">search</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>search<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> v <span class="token operator">=</span> search<span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        suggestions<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          content<span class="token operator">:</span> v<span class="token punctuation">,</span>\n          value<span class="token operator">:</span> i<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v <span class="token operator">=</span> v <span class="token operator">+</span> search<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onSearchChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onSearchChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(E)),w.a.createElement(z,{title:"Multi-line mode",id:"Demomultiline",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 1\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 2\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 3\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 4\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 5\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">multiLine</span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(S)),w.a.createElement(z,{title:"Popover position",id:"Demoposition",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 1\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 2\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 3\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 4\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">\'Item 5\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(M)),w.a.createElement(z,{title:"Input with prefix and suffix",id:"Demowithinputprefix",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Mention</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MentionDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    suggestions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onValueChange</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      text<span class="token operator">:</span> val<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onSearchChange</span> <span class="token operator">=</span> <span class="token parameter">search</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> suggestions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>search<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> v <span class="token operator">=</span> search<span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        suggestions<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          content<span class="token operator">:</span> v<span class="token punctuation">,</span>\n          value<span class="token operator">:</span> i<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        v <span class="token operator">=</span> v <span class="token operator">+</span> search<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      suggestions<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mention</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onValueChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onSearchChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onSearchChange</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">suggestions</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">addonBefore</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Buy<span class="token punctuation">"</span></span> <span class="token attr-name">addonAfter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Apple<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MentionDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(N)),w.a.createElement(D,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>Input content value</td>\n<td><code>string</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>Callback when input content changes</td>\n<td><code>(val: string): void</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onSearchChange</td>\n<td>Callback when mention search keyword changes</td>\n<td><code>(search: string): void</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>multiLine</td>\n<td>Multi line input</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Popup position relative to text</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>bottom</code></td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>suggestions</td>\n<td>Suggestions for current mention</td>\n<td><code>array</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>suggestionNotFoundContent</td>\n<td>Content to display when no suggestion found</td>\n<td><code>node</code></td>\n<td>No</td>\n<td><code>\'No results found, press SPACE to finish typing\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>triggerText</td>\n<td>Text to trigger a mention</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'@\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p><code>Mention</code> supports all <code>Input</code> props，e.g. <code>placeholder</code>.</p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#supported-suggestions-data-typ">¶</a><a href="javascript:void(0)" id="supported-suggestions-data-typ" class="anchor-point"></a>Supported <code>suggestions</code> data types</h4>\n<p>Every item in <code>suggestions</code> can be one of:</p>\n<ul>\n<li><code>string</code></li>\n<li><code>number</code></li>\n<li><code>object</code></li>\n</ul>\n<p>Item object structure:</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>Item value</td>\n<td><code>string</code></td>\n<td>Yes</td>\n</tr>\n<tr>\n<td>content</td>\n<td>Item display content，defaults to \n<code>value</code>\n if omitted</td>\n<td><code>node</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>isGroup</td>\n<td>Group item</td>\n<td><code>bool</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>isDivider</td>\n<td>Divider item</td>\n<td><code>bool</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Show item icon</td>\n<td><code>string</code></td>\n<td>No</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable item</td>\n<td><code>bool</code></td>\n<td>No</td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(f.Component)}}]);