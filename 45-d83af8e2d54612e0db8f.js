(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{836:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return _});var t=s(789),p=s.n(t),e=s(36),o=s.n(e),c=s(37),l=s.n(c),u=s(38),k=s.n(u),i=s(39),r=s.n(i),d=s(46),h=s.n(d),g=s(40),m=s.n(g),v=s(41),C=s.n(v),b=s(0),f=s.n(b),y=s(185),E=s(131),w=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),C()(h()(s),"state",{checked:!0}),C()(h()(s),"handleChange",function(n){s.setState({checked:n.target.checked})}),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.checked;return f.a.createElement(E.m,{checked:n,onChange:this.handleChange},"Checkbox")}}]),a}(f.a.Component);return f.a.createElement(n,null)},x=function(){return f.a.createElement("div",null,f.a.createElement(E.m,{checked:!0,disabled:!0}),f.a.createElement(E.m,{disabled:!0}))},L=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),C()(h()(s),"state",{checkedList:[]}),C()(h()(s),"onChange",function(n){s.setState({checkedList:n})}),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.checkedList;return f.a.createElement("div",null,f.a.createElement(E.m.Group,{value:n,onChange:this.onChange},f.a.createElement(E.m,{value:"Apple"},"苹果"),f.a.createElement(E.m,{value:"Pear"},"梨子"),f.a.createElement(E.m,{value:"Orange"},"橘子"),f.a.createElement(E.m,{value:"OrangeDisabled",disabled:!0},"烂苹果")))}}]),a}(f.a.Component);return f.a.createElement(n,null)},A=function(){var n=E.m.Group,a=function(a){function s(){var n,a;o()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return a=k()(this,(n=r()(s)).call.apply(n,[this].concat(p))),C()(h()(a),"state",{checkedList:[]}),C()(h()(a),"onChange",function(n){a.setState({checkedList:n})}),a}return m()(s,a),l()(s,[{key:"render",value:function(){var a=this.state.checkedList;return f.a.createElement("div",null,f.a.createElement(n,{value:a,onChange:this.onChange,style:{width:"100%"}},f.a.createElement(E.H,null,f.a.createElement(E.E,{span:8},f.a.createElement(E.m,{value:"A"},"A")),f.a.createElement(E.E,{span:8},f.a.createElement(E.m,{value:"B"},"B")),f.a.createElement(E.E,{span:8},f.a.createElement(E.m,{value:"C"},"C")),f.a.createElement(E.E,{span:8},f.a.createElement(E.m,{value:"D"},"D")),f.a.createElement(E.E,{span:8},f.a.createElement(E.m,{value:"E"},"E")))))}}]),s}(f.a.Component);return f.a.createElement(a,null)},j=function(){var n=E.m.Group,a=["Item 1","Item 2","Item 3"],s=function(s){function t(){var n,s;o()(this,t);for(var p=arguments.length,e=new Array(p),c=0;c<p;c++)e[c]=arguments[c];return s=k()(this,(n=r()(t)).call.apply(n,[this].concat(e))),C()(h()(s),"state",{checkedList:[]}),C()(h()(s),"handleCheckedAll",function(n){s.setState({checkedList:n.target.checked?a.slice():[]})}),s}return m()(t,s),l()(t,[{key:"handleChange",value:function(n){this.setState({checkedList:n})}},{key:"render",value:function(){var s=this.state.checkedList,t=!!s.length&&s.length===a.length,p=!!s.length&&s.length!==a.length;return f.a.createElement("div",null,f.a.createElement(E.m,{checked:t,indeterminate:p,onChange:this.handleCheckedAll},"全选"),f.a.createElement("div",{style:{margin:"5px 0",height:1,background:"#dcdee0"}}),f.a.createElement(n,{value:s,onChange:this.handleChange.bind(this)},a.map(function(n){return f.a.createElement(E.m,{key:n,value:n},n)})))}}]),t}(b.Component);return f.a.createElement(s,null)};function z(n){return f.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return f.a.createElement(z,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function D(n){return f.a.createElement(z,{tag:"style",html:n.style})}var N=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=k()(this,(n=r()(a)).call.apply(n,[this].concat(p))),C()(h()(s),"state",{showCode:!1}),C()(h()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return f.a.createElement("div",{className:"zandoc-react-demo"},f.a.createElement("div",{className:"zandoc-react-demo__preview"},p),f.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},f.a.createElement("div",{className:"zandoc-react-demo__title"},f.a.createElement("p",null,s||"")),f.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&f.a.createElement("pre",{className:"zandoc-react-demo__code"},f.a.createElement(z,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),_=function(n){function a(){return o()(this,a),k()(this,r()(a).apply(this,arguments))}return m()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(y.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return f.a.createElement("div",{className:"zandoc-react-container",key:null},f.a.createElement(D,{style:".zent-checkbox-doc-p {\n\t\tfont-size: 12px;\n\t\tline-height: 2em;\n\t}"}),f.a.createElement(S,{html:'<h2 class="anchor-heading"><a href="#checkbox-duo-xuan">¶</a><a href="javascript:void(0)" id="checkbox-duo-xuan" class="anchor-point"></a>Checkbox 多选</h2>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>\n<p>Checkbox 表现为一个<a href="">受控组件</a>, 需要设置 <code>onChange</code> 回调在组件外部处理其 <code>value</code> 属性的变化.</p>\n</li>\n<li>\n<p><code>value</code> 支持任意类型的值, 包括引用类型.</p>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),f.a.createElement(N,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    checked<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      checked<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>checked\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> checked <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checked<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},f.a.createElement(w)),f.a.createElement(N,{title:"不可用",id:"Demodisable",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},f.a.createElement(x)),f.a.createElement(N,{title:"Checkbox组",id:"Democheckboxgroup",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    checkedList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checkedList<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedList <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> checkedList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox.Group</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checkedList<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Pear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>梨子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Orange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>橘子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>OrangeDisabled<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>烂苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox.Group</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},f.a.createElement(L)),f.a.createElement(N,{title:"布局",id:"Demolayout",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox<span class="token punctuation">,</span> LayoutRow <span class="token keyword">as</span> Row<span class="token punctuation">,</span> LayoutCol <span class="token keyword">as</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> CheckboxGroup <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    checkedList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> checkedList <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedList <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> checkedList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>CheckboxGroup\n          value<span class="token operator">=</span><span class="token punctuation">{</span>checkedList<span class="token punctuation">}</span>\n          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>\n          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>D<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>E<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxGroup</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},f.a.createElement(A)),f.a.createElement(N,{title:"全选，在实现全选效果时，你可能会用到 `indeterminate` 属性",id:"Demoselectall",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Checkbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxGroup <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ITEMS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Item 1\'</span><span class="token punctuation">,</span> <span class="token string">\'Item 2\'</span><span class="token punctuation">,</span> <span class="token string">\'Item 3\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    checkedList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleCheckedAll</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      checkedList<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>checked <span class="token operator">?</span> ITEMS<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">handleChange</span><span class="token punctuation">(</span>checkedList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> checkedList <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> checkedList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> checkedAll <span class="token operator">=</span>\n      <span class="token operator">!</span><span class="token operator">!</span>checkedList<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> checkedList<span class="token punctuation">.</span>length <span class="token operator">===</span> ITEMS<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> indeterminate <span class="token operator">=</span>\n      <span class="token operator">!</span><span class="token operator">!</span>checkedList<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> checkedList<span class="token punctuation">.</span>length <span class="token operator">!==</span> ITEMS<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checkedAll<span class="token punctuation">}</span></span>\n          <span class="token attr-name">indeterminate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>indeterminate<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleCheckedAll<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          全选\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'5px 0\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> background<span class="token punctuation">:</span> <span class="token string">\'#dcdee0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxGroup</span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>checkedList<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>ITEMS<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span>item<span class="token punctuation">}</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxGroup</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},f.a.createElement(j)),f.a.createElement(S,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#checkbox-api">¶</a><a href="javascript:void(0)" id="checkbox-api" class="anchor-point"></a>Checkbox API</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>组件对应的值，在\n<code>CheckboxGroup</code>\n中使用</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>使组件不可用</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>readOnly</td>\n<td>使组件只读</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>indeterminate</td>\n<td>展示部分选中的模式</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>变化时回调函数</td>\n<td>func(e:Event)</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#checkbox-group-api">¶</a><a href="javascript:void(0)" id="checkbox-group-api" class="anchor-point"></a>Checkbox Group API</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>必填，指定选中的选项</td>\n<td>array</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>isValueEqual</td>\n<td>可选，判断value值是否相等</td>\n<td>func(a, b)</td>\n<td><code>() => a === b</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>使组件不可用</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>readOnly</td>\n<td>使组件只读</td>\n<td>bool</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>变化时回调函数</td>\n<td>func(checkedValueList)</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(b.Component)}}]);