(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{655:function(n,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return y}));var t=a(21),p=a.n(t),e=a(0),o=a(1),c=a.n(o),l=a(27);function u(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?u(Object(a),!0).forEach((function(s){p()(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var k=function(){var n=l.sb.MenuItem;return Object(e.jsxs)(l.A,{position:l.F.AutoBottomLeft,children:[Object(e.jsx)(l.C,{children:Object(e.jsx)(l.B,{type:"primary",children:"Click"})}),Object(e.jsx)(l.D,{children:Object(e.jsxs)(l.sb,{children:[Object(e.jsx)(n,{children:"Food"}),Object(e.jsx)(n,{children:"Clothing"})]})})]})},r=function(){var n=l.sb.MenuItem;return Object(e.jsxs)(l.A,{position:l.F.AutoBottomLeft,children:[Object(e.jsx)(l.E,{children:Object(e.jsx)(l.B,{type:"primary",children:"Hover"})}),Object(e.jsx)(l.D,{children:Object(e.jsxs)(l.sb,{children:[Object(e.jsx)(n,{children:"Food"}),Object(e.jsx)(n,{children:"Clothing"})]})})]})},m=function(){var n=l.sb.MenuItem;class s extends o.Component{constructor(...n){super(...n),p()(this,"state",{visible:!1})}render(){return Object(e.jsxs)(l.A,{visible:this.state.visible,onVisibleChange:n=>this.setState({visible:n}),position:l.F.AutoBottomLeft,children:[Object(e.jsx)(l.C,{children:Object(e.jsx)(l.B,{type:"primary",children:"Click"})}),Object(e.jsx)(l.D,{children:Object(e.jsxs)(l.sb,{onClick:()=>this.setState({visible:!1}),children:[Object(e.jsx)(n,{children:"Close menu"}),Object(e.jsx)(n,{children:"Close menu"})]})})]})}}return Object(e.jsx)(s,{})};function d(n){return Object(e.jsx)(n.tag,i(i({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function g(n){return Object(e.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function b(n){return Object(e.jsx)(d,{tag:"style",html:n.style})}class h extends o.Component{constructor(...n){super(...n),p()(this,"state",{showCode:!1}),p()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return Object(e.jsxs)("div",{className:"zandoc-react-demo",children:[Object(e.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),Object(e.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(e.jsx)("div",{className:"zandoc-react-demo__title",children:Object(e.jsx)("p",{children:a||""})}),Object(e.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(e.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(e.jsx)(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class y extends o.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(l.tc)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}render(){return c.a.createElement("div",{className:"zandoc-react-container",key:null},c.a.createElement(b,{style:""}),c.a.createElement(g,{html:'<h2 class="anchor-heading"><a href="#dropdown">¶</a><a href="javascript:void(0)" id="dropdown" class="anchor-point"></a>Dropdown</h2>\n<p>Dropdown menu, often used with <code>Menu</code>.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),c.a.createElement(h,{title:"Click to open",id:"Demo01click",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Dropdown</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">Menu</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownButton</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownClickTrigger</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownContent</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">MenuItem</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Menu</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">AutoBottomLeft</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownButton</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownButton</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Food</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Clothing</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},c.a.createElement(k)),c.a.createElement(h,{title:"Hover to open",id:"Demo02hover",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Menu</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">Dropdown</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownHoverTrigger</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownContent</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownButton</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">MenuItem</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Menu</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">AutoBottomLeft</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownHoverTrigger</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownButton</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Hover</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownButton</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownHoverTrigger</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Food</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Clothing</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},c.a.createElement(r)),c.a.createElement(h,{title:"Click to close",id:"Demo03close",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Dropdown</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownButton</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownClickTrigger</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownContent</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">,</span>\n  <span class="token maybe-class-name">Menu</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">MenuItem</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token maybe-class-name">Menu</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PopoverDemo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>\n        <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">visible</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onVisibleChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">v</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token operator">:</span> v <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">position</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">DropdownPosition</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">AutoBottomLeft</span></span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownButton</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownButton</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownClickTrigger</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Close</span> menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Close</span> menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuItem</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownContent</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PopoverDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},c.a.createElement(m)),c.a.createElement(g,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p>Please refer to <a href="popover#api">the api doc of <code>Popover</code></a>, <code>Dropdown</code> only sets some default values for props.</p>\n<p><code>DropdownButton</code> supports all <code>Button</code> props, the difference is it is aware of <code>Dropdown</code> content visible changes.</p>\n<h3 class="anchor-heading"><a href="#about-position">¶</a><a href="javascript:void(0)" id="about-position" class="anchor-point"></a>About position</h3>\n<p>It\'s recommanded to use <code>AutoXxxYxx</code> provided by <code>Popover</code> for positioning. E.g. it\'s positioned below the lower left corner, but the position will be adjusted if it\'s out of the screen.</p>\n<p>Alternative ways for positioning can be refered to <a href="popover#position%20api">the position doc of <code>Popover</code></a>。</p>'}))}}}}]);