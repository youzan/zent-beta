(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1069:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return N});var t=s(10),o=s.n(t),p=s(4),e=s.n(p),c=s(8),l=s.n(c),u=s(5),r=s.n(u),i=s(6),k=s.n(i),d=s(7),h=s.n(d),m=s(2),g=s.n(m),f=s(3),y=s.n(f),v=s(0),C=s.n(v),w=s(148),b=s(149),E=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(o))),y()(g()(g()(s)),"state",{color:"#5197FF"}),y()(g()(g()(s)),"handleChange",function(n){s.setState({color:n})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.color;return C.a.createElement("div",null,C.a.createElement(b.n,{color:n,onChange:this.handleChange}),C.a.createElement("div",{style:{color:n,marginTop:5}},"Current color：",n))}}]),a}(C.a.Component);return C.a.createElement(n,null)},F=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(o))),y()(g()(g()(s)),"state",{color:"rgba(81, 151, 255, 0.6)",showAlpha:!0}),y()(g()(g()(s)),"handleChange",function(n){s.setState({color:n})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state,a=n.color,s=n.showAlpha;return C.a.createElement("div",null,C.a.createElement(b.n,{color:a,showAlpha:s,onChange:this.handleChange}),C.a.createElement("div",{style:{color:a,marginTop:5}},"Current color：",a))}}]),a}(C.a.Component);return C.a.createElement(n,null)},A=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(o))),y()(g()(g()(s)),"state",{color:"#FF4444"}),y()(g()(g()(s)),"handleChange",function(n){s.setState({color:n})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.color;return C.a.createElement("div",null,C.a.createElement(b.n,{color:n,type:"simple",onChange:this.handleChange}),C.a.createElement("div",{style:{color:n,marginTop:5}},"Current color：",n))}}]),a}(C.a.Component);return C.a.createElement(n,null)},S=function(){var n=b.n.ColorBoard,a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return a=r()(this,(n=k()(s)).call.apply(n,[this].concat(o))),y()(g()(g()(a)),"state",{color:"#5197FF"}),y()(g()(g()(a)),"handleChange",function(n){a.setState({color:n.hex})}),a}return h()(s,a),l()(s,[{key:"render",value:function(){var a=this.state,s=a.color;a.showAlpha;return C.a.createElement("div",null,C.a.createElement(n,{color:s,onChange:this.handleChange}),C.a.createElement("div",{style:{color:s,marginTop:10}},s))}}]),s}(C.a.Component);return C.a.createElement(a,null)},T=function(){var n=b.n.ColorBoard,a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return a=r()(this,(n=k()(s)).call.apply(n,[this].concat(o))),y()(g()(g()(a)),"state",{color:"rgba(81, 151, 255, 0.6)",showAlpha:!0}),y()(g()(g()(a)),"handleChange",function(n){a.setState({color:n.rgba})}),a}return h()(s,a),l()(s,[{key:"render",value:function(){var a=this.state,s=a.color,t=a.showAlpha;return C.a.createElement("div",null,C.a.createElement(n,{color:s,showAlpha:t,onChange:this.handleChange}),C.a.createElement("div",{style:{color:s,marginTop:10}},"Current color：",s))}}]),s}(C.a.Component);return C.a.createElement(a,null)};function D(n){return C.a.createElement(n.tag,o()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return C.a.createElement(D,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return C.a.createElement(D,{tag:"style",html:n.style})}var P=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(o))),y()(g()(g()(s)),"state",{showCode:!1}),y()(g()(g()(s)),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return C.a.createElement("div",{className:"zandoc-react-demo"},C.a.createElement("div",{className:"zandoc-react-demo__preview"},o),C.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.a.createElement("div",{className:"zandoc-react-demo__title"},C.a.createElement("p",null,s||"")),C.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&C.a.createElement("pre",{className:"zandoc-react-demo__code"},C.a.createElement(D,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),N=function(n){function a(){return e()(this,a),r()(this,k()(a).apply(this,arguments))}return h()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return C.a.createElement("div",{className:"zandoc-react-container",key:null},C.a.createElement(z,{style:""}),C.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#colorpicker">¶</a><a href="javascript:void(0)" id="colorpicker" class="anchor-point"></a>ColorPicker</h2>\n<p>ColorPicker is used for color selection and supports multiple formats.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),C.a.createElement(P,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(E)),C.a.createElement(P,{title:"Choose opacity",id:"Demoopacity",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'rgba(81, 151, 255, 0.6)\'</span><span class="token punctuation">,</span>\n    showAlpha<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">showAlpha</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showAlpha<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(F)),C.a.createElement(P,{title:"Simple version",id:"Demosimple",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#FF4444\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>simple<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(A)),C.a.createElement(P,{title:"Color board",id:"Democolorboard",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ColorBoard <span class="token operator">=</span> ColorPicker<span class="token punctuation">.</span>ColorBoard<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color<span class="token punctuation">:</span> color<span class="token punctuation">.</span>hex\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBoard</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(S)),C.a.createElement(P,{title:"Color board with opacity",id:"Demoopacityboard",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ColorBoard <span class="token operator">=</span> ColorPicker<span class="token punctuation">.</span>ColorBoard<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'rgba(81, 151, 255, 0.6)\'</span><span class="token punctuation">,</span>\n    showAlpha<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color<span class="token punctuation">:</span> color<span class="token punctuation">.</span>rgba\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBoard</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">showAlpha</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showAlpha<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(T)),C.a.createElement(j,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<h4 class=\"anchor-heading\"><a href=\"#colorpicker\">¶</a><a href=\"javascript:void(0)\" id=\"colorpicker\" class=\"anchor-point\"></a>ColorPicker</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>The color of ColorPicker</td>\n<td>string</td>\n<td></td>\n<td><code>'#5197FF'</code>\n or \n<code>'rgba(81, 151, 255, 0.6)'</code></td>\n</tr>\n<tr>\n<td>showAlpha</td>\n<td>Whether to show opacity selection</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true/false</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>The type of ColorPicker</td>\n<td>string</td>\n<td><code>'default'</code></td>\n<td><code>'default'</code>\n、\n<code>'simple'</code></td>\n</tr>\n<tr>\n<td>presetColors</td>\n<td>Simple version of custom color array</td>\n<td>array</td>\n<td>[\n<code>'#FFFFFF'</code>\n, \n<code>'#F8F8F8'</code>\n, \n<code>'#F2F2F2'</code>\n, \n<code>'#999999'</code>\n, \n<code>'#444444'</code>\n, \n<code>'#FF4444'</code>\n, \n<code>'#FF6500'</code>\n, \n<code>'#FF884D'</code>\n, \n<code>'#FFCD00'</code>\n, \n<code>'#3FBD00'</code>\n, \n<code>'#3FBC87'</code>\n, \n<code>'#00CD98'</code>\n, \n<code>'#5197FF'</code>\n, \n<code>'#BADCFF'</code>\n, \n<code>'#FFEFB8'</code>\n]</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggerd when color is changed</td>\n<td>func(color)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>wrapperClassName</td>\n<td>The  custom classname of trigger's parent node</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class=\"anchor-heading\"><a href=\"#colorboard\">¶</a><a href=\"javascript:void(0)\" id=\"colorboard\" class=\"anchor-point\"></a>ColorBoard</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>The color of ColorPicker</td>\n<td>string</td>\n<td></td>\n<td><code>'#5197FF'</code>\n or \n<code>'rgba(81, 151, 255, 0.6)'</code></td>\n</tr>\n<tr>\n<td>showAlpha</td>\n<td>Whether to show opacity selection</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true/false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggerd when color is changed</td>\n<td>func(color)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The cutom clasname</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(v.Component)}}]);