(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1081:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return A});var t=s(10),p=s.n(t),e=s(4),o=s.n(e),c=s(8),u=s.n(c),l=s(5),i=s.n(l),r=s(6),k=s.n(r),d=s(7),m=s.n(d),h=s(2),g=s.n(h),v=s(3),f=s.n(v),y=s(0),w=s.n(y),b=s(148),C=s(149),E=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),f()(g()(g()(s)),"state",{value:0}),f()(g()(g()(s)),"onChange",function(n){s.setState({value:n})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.value;return w.a.createElement(C.T,{value:n,onChange:this.onChange})}}]),a}(w.a.Component);return w.a.createElement(n,null)},S=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),f()(g()(g()(s)),"state",{value:[30,100]}),f()(g()(g()(s)),"onChange",function(n){s.setState({value:n})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.value;return w.a.createElement(C.T,{range:!0,value:n,onChange:this.onChange})}}]),a}(w.a.Component);return w.a.createElement(n,null)},T=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),f()(g()(g()(s)),"state",{value:1.3}),f()(g()(g()(s)),"onChange",function(n){s.setState({value:n})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.value;return w.a.createElement(C.T,{max:2,min:1,step:.1,value:n,onChange:this.onChange})}}]),a}(w.a.Component);return w.a.createElement(n,null)},j=function(){var n={0:"0°C",100:"100°C"},a=function(a){function s(){var n,a;o()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return a=i()(this,(n=k()(s)).call.apply(n,[this].concat(p))),f()(g()(g()(a)),"state",{value:[30,100]}),f()(g()(g()(a)),"onChange",function(n){a.setState({value:n})}),a}return m()(s,a),u()(s,[{key:"render",value:function(){var a=this.state.value;return w.a.createElement(C.T,{range:!0,marks:n,value:a,onChange:this.onChange})}}]),s}(w.a.Component);return w.a.createElement(a,null)},z=function(){var n={0:"0°C",25:"25°C",50:"50°C",75:"75°C",100:"100°C"},a=function(a){function s(){var n,a;o()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return a=i()(this,(n=k()(s)).call.apply(n,[this].concat(p))),f()(g()(g()(a)),"state",{value:[0,50]}),f()(g()(g()(a)),"onChange",function(n){a.setState({value:n})}),a}return m()(s,a),u()(s,[{key:"render",value:function(){var a=this.state.value;return w.a.createElement(C.T,{range:!0,dots:!0,marks:n,value:a,onChange:this.onChange})}}]),s}(w.a.Component);return w.a.createElement(a,null)},D=function(){return w.a.createElement(C.T,{value:[30,100],range:!0,disabled:!0})};function N(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function _(n){return w.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function x(n){return w.a.createElement(N,{tag:"style",html:n.style})}var R=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),f()(g()(g()(s)),"state",{showCode:!1}),f()(g()(g()(s)),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return m()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(N,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),A=function(n){function a(){return o()(this,a),i()(this,k()(a).apply(this,arguments))}return m()(a,n),u()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(x,{style:""}),w.a.createElement(_,{html:'<h2 class="anchor-heading"><a href="#slider">¶</a><a href="javascript:void(0)" id="slider" class="anchor-point"></a>Slider</h2>\n<p>You can select a value by dragging or clicking <code>Slider</code>.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Support a single slider and double slider.</li>\n<li>Can be used with <code>Input</code>.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),w.a.createElement(R,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(E)),w.a.createElement(R,{title:"Double silders for range selection",id:"Demorange",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">range</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(S)),w.a.createElement(R,{title:"Set the maximun value, the minimun value and the interval between values.",id:"Demosetproperty",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">1.3</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.1</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(T)),w.a.createElement(R,{title:"Label",id:"Demolabel",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> marks <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">\'0°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">100</span><span class="token punctuation">:</span> <span class="token string">\'100°C\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">range</span> <span class="token attr-name">marks</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>marks<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(j)),w.a.createElement(R,{title:"Only the label values can be selected, where there is no input.",id:"Demonoinput",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> marks <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">\'0°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">25</span><span class="token punctuation">:</span> <span class="token string">\'25°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">50</span><span class="token punctuation">:</span> <span class="token string">\'50°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">75</span><span class="token punctuation">:</span> <span class="token string">\'75°C\'</span><span class="token punctuation">,</span>\n  <span class="token number">100</span><span class="token punctuation">:</span> <span class="token string">\'100°C\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">range</span> <span class="token attr-name">dots</span> <span class="token attr-name">marks</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>marks<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(R,{title:"disabled",id:"Demodisable",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">range</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(D)),w.a.createElement(_,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Required</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>The value of input</td>\n<td>[\nnumber,array\n]</td>\n<td>0</td>\n<td>[\n0,0\n]</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggered when the slider is changed</td>\n<td>func(e:Event)</td>\n<td></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>range</td>\n<td>Whether the range selection can be used or not</td>\n<td>bool</td>\n<td>false</td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>max</td>\n<td>The max value</td>\n<td>number</td>\n<td>100</td>\n<td>50</td>\n<td>no</td>\n</tr>\n<tr>\n<td>min</td>\n<td>The min value</td>\n<td>number</td>\n<td>0</td>\n<td>-100</td>\n<td>no</td>\n</tr>\n<tr>\n<td>step</td>\n<td>The interval between values</td>\n<td>number</td>\n<td>1</td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>withInput</td>\n<td>Whether the input is included</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n<td>no</td>\n</tr>\n<tr>\n<td>dots</td>\n<td>Whether the value of slider can only be selected from label values or not</td>\n<td>bool</td>\n<td>true</td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>marks</td>\n<td>label values</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Disable the silder</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>no</td>\n</tr>\n<tr>\n<td>width</td>\n<td>width</td>\n<td>string or number</td>\n<td></td>\n<td></td>\n<td>no否</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>no</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Ps.</strong> When setting <code>range</code>, you should set <code>value</code> as an array of length 2. The array entry must be a number. Property <code>dots</code> must be used with <code>marks</code>.</p>'}))}}]),a}(y.Component)}}]);