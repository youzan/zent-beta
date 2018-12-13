(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1057:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return B});var t=s(10),p=s.n(t),o=s(4),e=s.n(o),c=s(8),l=s.n(c),u=s(5),i=s.n(u),k=s(6),r=s.n(k),m=s(7),g=s.n(m),d=s(2),h=s.n(d),v=s(3),f=s.n(v),y=s(0),E=s.n(y),C=s(148),w=s(149),P=function(){var n=w.D.MenuItem;return E.a.createElement(w.K,{position:w.K.Position.AutoBottomLeft,display:"inline",cushion:5},E.a.createElement(w.K.Trigger.Click,null,E.a.createElement(w.h,{type:"primary"},"Click")),E.a.createElement(w.K.Content,null,E.a.createElement(w.D,null,E.a.createElement(n,null,"Food"),E.a.createElement(n,null,"Clothing"))))},M=function(){var n=w.D.MenuItem;return E.a.createElement(w.K,{position:w.K.Position.AutoBottomLeft,display:"inline",cushion:5},E.a.createElement(w.K.Trigger.Hover,null,E.a.createElement(w.h,{type:"primary"},"Hover")),E.a.createElement(w.K.Content,null,E.a.createElement(w.D,null,E.a.createElement(n,null,"Food"),E.a.createElement(n,null,"Clothing"))))},b=function(){var n=w.D.MenuItem,a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return a=i()(this,(n=r()(s)).call.apply(n,[this].concat(p))),f()(h()(h()(a)),"state",{visible:!1}),a}return g()(s,a),l()(s,[{key:"render",value:function(){var a=this;return E.a.createElement(w.K,{visible:this.state.visible,onVisibleChange:function(n){return a.setState({visible:n})},position:w.K.Position.AutoBottomLeft,display:"inline",cushion:5},E.a.createElement(w.K.Trigger.Click,null,E.a.createElement(w.h,{type:"primary"},"Click")),E.a.createElement(w.K.Content,null,E.a.createElement(w.D,{onClick:function(){return a.setState({visible:!1})}},E.a.createElement(n,null,"Close menu"),E.a.createElement(n,null,"Close menu"))))}}]),s}(y.Component);return E.a.createElement(a,null)};function I(n){return E.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function D(n){return E.a.createElement(I,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return E.a.createElement(I,{tag:"style",html:n.style})}var z=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),f()(h()(h()(s)),"state",{showCode:!1}),f()(h()(h()(s)),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return g()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},p),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(I,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),B=function(n){function a(){return e()(this,a),i()(this,r()(a).apply(this,arguments))}return g()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(C.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(_,{style:""}),E.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#dropdown">¶</a><a href="javascript:void(0)" id="dropdown" class="anchor-point"></a>Dropdown</h2>\n<p>A component pops down.</p>\n<p>We don\'t provide a specific component called <code>Dropdown</code>. The function of <code>Dropdown</code> component is a subset of function of <code>Popover</code> component. This doc decribes how to use <code>Popover</code> to implement a <code>Dropdown</code>.</p>\n<h3 class="anchor-heading"><a href="#usage">¶</a><a href="javascript:void(0)" id="usage" class="anchor-point"></a>Usage</h3>\n<p>Generally, the component is used for dropdown menu.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),E.a.createElement(z,{title:"Click to open",id:"Democlick",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>\n    <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span></span>\n    <span class="token attr-name">display</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>\n    <span class="token attr-name">cushion</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Clothing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(P)),E.a.createElement(z,{title:"Hover to open",id:"Demohover",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>\n    <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span></span>\n    <span class="token attr-name">display</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>\n    <span class="token attr-name">cushion</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Hover</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Hover</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Clothing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(M)),E.a.createElement(z,{title:"Click to close",id:"Democlose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> MenuItem <span class="token punctuation">}</span> <span class="token operator">=</span> Menu<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PopoverDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Popover\n        visible<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span>\n        onVisibleChange<span class="token operator">=</span><span class="token punctuation">{</span>v <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> v <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        position<span class="token operator">=</span><span class="token punctuation">{</span>Popover<span class="token punctuation">.</span>Position<span class="token punctuation">.</span>AutoBottomLeft<span class="token punctuation">}</span>\n        display<span class="token operator">=</span><span class="token string">"inline"</span>\n        cushion<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Trigger.Click</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover.Content</span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>Menu onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Close menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span><span class="token punctuation">></span></span>Close menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MenuItem</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover.Content</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverDemo</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(b)),E.a.createElement(D,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Please refer <a href="popover#api">the api doc of <code>Popover</code></a>.</p>\n<h3 class="anchor-heading"><a href="#about-position">¶</a><a href="javascript:void(0)" id="about-position" class="anchor-point"></a>About position</h3>\n<p>It\'s recommanded to use <code>AutoXxxYxx</code> provided by <code>Popover</code> for positioning. E.g. it\'s positioned below the lower left corner, but the position will be adjusted if it\'s out of the screen.</p>\n<p>Alternative ways for positioning can be refered to <a href="popover#position%20api">the   position doc of <code>Popover</code></a>。</p>'}))}}]),a}(y.Component)}}]);