(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{677:function(a,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return h}));var t=s(20),p=s.n(t),e=s(4),c=s(1),o=s.n(c),l=s(46);function u(a,n){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),s.push.apply(s,t)}return s}function k(a){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?u(Object(s),!0).forEach((function(n){p()(a,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(s,n))}))}return a}var i=function(){return Object(e.jsxs)("div",{children:[Object(e.jsxs)("div",{className:"zent-avatar-list",children:[Object(e.jsx)(l.f,{size:"small",children:"Y"}),Object(e.jsx)(l.f,{size:"small",icon:"customer"}),Object(e.jsx)(l.f,{size:"small",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),Object(e.jsx)(l.f,{size:"small",shape:"square",children:"Y"}),Object(e.jsx)(l.f,{size:"small",shape:"square",icon:"customer"}),Object(e.jsx)(l.f,{size:"small",shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})]}),Object(e.jsxs)("div",{className:"zent-avatar-list",children:[Object(e.jsx)(l.f,{children:"Y"}),Object(e.jsx)(l.f,{icon:"customer"}),Object(e.jsx)(l.f,{src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),Object(e.jsx)(l.f,{shape:"square",children:"Y"}),Object(e.jsx)(l.f,{shape:"square",icon:"customer"}),Object(e.jsx)(l.f,{shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})]}),Object(e.jsxs)("div",{className:"zent-avatar-list",children:[Object(e.jsx)(l.f,{size:"large",children:"Y"}),Object(e.jsx)(l.f,{size:"large",icon:"customer"}),Object(e.jsx)(l.f,{size:"large",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),Object(e.jsx)(l.f,{size:"large",shape:"square",children:"Y"}),Object(e.jsx)(l.f,{size:"large",shape:"square",icon:"customer"}),Object(e.jsx)(l.f,{size:"large",shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})]})]})},r=function(){return Object(e.jsx)("div",{children:Object(e.jsxs)("div",{className:"zent-avatar-list",children:[Object(e.jsx)(l.f,{children:"MJ"}),Object(e.jsx)(l.f,{children:"Billie"}),Object(e.jsx)(l.f,{children:"Jean"}),Object(e.jsx)(l.f,{shape:"square",children:"MJ"}),Object(e.jsx)(l.f,{shape:"square",children:"Beat"}),Object(e.jsx)(l.f,{shape:"square",children:"It"})]})})},d=function(){return Object(e.jsx)("div",{children:Object(e.jsxs)("div",{className:"zent-avatar-list",children:[Object(e.jsx)(l.f,{style:{backgroundColor:"#a1b56c"},children:"MJ"}),Object(e.jsx)(l.f,{style:{backgroundColor:"#f7ca88"},children:"Billie"}),Object(e.jsx)(l.f,{style:{backgroundColor:"#ab4642"},children:"Jean"}),Object(e.jsx)(l.g,{dot:!0,children:Object(e.jsx)(l.f,{style:{backgroundColor:"#ba8baf"},children:"MJ"})}),Object(e.jsx)(l.g,{count:3,children:Object(e.jsx)(l.f,{style:{backgroundColor:"#7cafc2"},children:"Beat"})}),Object(e.jsx)(l.f,{size:48,style:{fontSize:30,backgroundColor:"#e8e8e8",color:"#dc9656"},children:"IT"})]})})};function m(a){return Object(e.jsx)(a.tag,k(k({},a.attributes),{},{dangerouslySetInnerHTML:{__html:a.html}}))}function g(a){return Object(e.jsx)(m,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function b(a){return Object(e.jsx)(m,{tag:"style",html:a.style})}class v extends c.Component{constructor(...a){super(...a),p()(this,"state",{showCode:!1}),p()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var a=this.state.showCode,n=this.props,s=n.title,t=n.src,p=n.children;return Object(e.jsxs)("div",{className:"zandoc-react-demo",children:[Object(e.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),Object(e.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(e.jsx)("div",{className:"zandoc-react-demo__title",children:Object(e.jsx)("p",{children:s||""})}),Object(e.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(a?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),a&&Object(e.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(e.jsx)(m,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class h extends c.Component{componentDidMount(){var a=location.hash;if(a){var n=document.querySelector('a[href="'.concat(a,'"]'));n&&Object(l.nc)(document.documentElement,0,function a(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),a(n.parentNode,s);return s}(n,-9))}}render(){return o.a.createElement("div",{className:"zandoc-react-container",key:null},o.a.createElement(b,{style:".zent-avatar-list {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin-top: 10px;\n\talign-items: center\n}\n.zent-avatar-list:first-child {\n\tmargin-top: 0;\n}\n.zent-avatar-list .zent-avatar:not(:last-child),\n\t.zent-avatar-list .zent-badge:not(:last-child) {\n\t\tmargin-right: 10px\n}"}),o.a.createElement(g,{html:'<h2 class="anchor-heading"><a href="#avatar">¶</a><a href="javascript:void(0)" id="avatar" class="anchor-point"></a>Avatar</h2>\n<p>Represent a person or a thing, supports icons, images or character.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),o.a.createElement(v,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Avatar</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">Y</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(i)),o.a.createElement(v,{title:"Fit text automatically",id:"Demotext",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Avatar</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Billie</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Jean</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Beat</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">It</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(r)),o.a.createElement(v,{title:"Custom styles",id:"Democustom",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Avatar</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Badge</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#a1b56c\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#f7ca88\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Billie</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#ab4642\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Jean</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#ba8baf\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token constant">MJ</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Badge</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#7cafc2\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Beat</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Badge</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span>\n        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">48</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#e8e8e8\'</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">\'#dc9656\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token constant">IT</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Avatar</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},o.a.createElement(d)),o.a.createElement(g,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>Avatar shape, circle or square</td>\n<td><code>string</code></td>\n<td>No</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'square\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Avatar size, can be a preset or an arbitrary number</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>No</td>\n<td><code>\'default\'</code></td>\n<td><code>\'small\'</code>\n \n|\n \n<code>\'large\'</code>\n \n|\n pixel value</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Icon name</td>\n<td><code>string</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>src</td>\n<td>Image url</td>\n<td><code>string</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>Text content</td>\n<td><code>string</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bordered</td>\n<td>Show border</td>\n<td><code>bool</code></td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Custom styles</td>\n<td><code>object</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom class name</td>\n<td><code>string</code></td>\n<td>NO</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>WARNING</strong>：<code>icon</code>, <code>src</code> and <code>children</code> are mutual exclusive，using more than one at the same time is undefined behavior.</p>'}))}}}}]);