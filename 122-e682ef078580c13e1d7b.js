(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1014:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return A}));var t=s(922),p=s.n(t),e=s(924),o=s.n(e),c=s(916),l=s.n(c),u=s(917),i=s.n(u),r=s(577),d=s.n(r),k=s(918),m=s.n(k),h=s(919),g=s.n(h),f=s(920),v=s.n(f),y=s(921),b=s.n(y),w=s(0),E=s.n(w),C=s(106);function j(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=v()(n);if(a){var p=v()(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return g()(this,s)}}var x=function(){var n=function(n){m()(s,n);var a=j(s);function s(){var n;l()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=a.call.apply(a,[this].concat(p)),b()(d()(n),"state",{list:[{name:"Arvin"},{name:"Jack"},{name:"Bob"},{name:"Nick"}]}),b()(d()(n),"handleChange",(function(a){n.setState({list:a})})),n}return i()(s,[{key:"render",value:function(){var n=this.state.list;return E.a.createElement(C.Sortable,{items:n,onChange:this.handleChange},n.map((function(n){var a=n.name;return E.a.createElement(C.Card,{key:a},a)})))}}]),s}(E.a.Component);return E.a.createElement(n,null)},S=function(){var n=function(n){m()(s,n);var a=j(s);function s(){var n;l()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=a.call.apply(a,[this].concat(p)),b()(d()(n),"state",{list:[{name:"Arvin"},{name:"Jack"},{name:"Bob"},{name:"Nick"},{name:"Mark"},{name:"Leo"},{name:"James"},{name:"Wade"}]}),b()(d()(n),"handleAdd",(function(){var a=n.state.list;n.setState({list:[].concat(o()(a),[{name:"Custom".concat(a.length+1)}])})})),b()(d()(n),"handleRemove",(function(a){var s=n.state.list.filter((function(n,s){return s!==a}));n.setState({list:s})})),b()(d()(n),"handleChange",(function(a){n.setState({list:a})})),n}return i()(s,[{key:"render",value:function(){var n=this,a=this.state.list;return E.a.createElement(C.Sortable,{className:"demo-sortable",items:a,filterClass:"demo-sortable-add",dragClass:"demo-sortable-drag",onChange:this.handleChange},a.map((function(a,s){var t=a.name;return E.a.createElement("div",{className:"demo-sortable-item",key:t},t,E.a.createElement(C.Icon,{className:"demo-sortable-icon",type:"close",onClick:function(){return n.handleRemove(s)}}))})),E.a.createElement("div",{className:"demo-sortable-add",onClick:this.handleAdd},E.a.createElement(C.Icon,{type:"plus"})))}}]),s}(E.a.Component);return E.a.createElement(n,null)};function N(n){return E.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function M(n){return E.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return E.a.createElement(N,{tag:"style",html:n.style})}var T=function(n){m()(s,n);var a=j(s);function s(){var n;l()(this,s);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return n=a.call.apply(a,[this].concat(p)),b()(d()(n),"state",{showCode:!1}),b()(d()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return i()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},p),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(N,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(w.Component),A=function(n){m()(s,n);var a=j(s);function s(){return l()(this,s),a.apply(this,arguments)}return i()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(C.smoothScroll)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(z,{style:".demo-sortable {\n\t\tpadding: 0 140px;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: flex-start;\n\t}\n\n\t.zent-card:not(:last-child) {\n\t\tmargin-bottom: 4px;\n\t}\n\n\t.demo-sortable-item,\n\t.demo-sortable-add {\n\t\tposition: relative;\n\t\ttext-align: center;\n\t\tline-height: 100px;\n\t\tborder: 1px solid #dcdde0;\n\t\tborder-radius: 4px;\n\t\tflex: 0 0 100px;\n\t\theight: 100px;\n\t\tmargin: 0 20px 20px 0;\n\t}\n\n\t.demo-sortable-add {\n\t\tcursor: pointer;\n\t}\n\n\t.demo-sortable-item:hover .demo-sortable-icon {\n\t\t\tdisplay: block;\n\t\t}\n\n\t.demo-sortable-drag .demo-sortable-icon {\n\t\t\tdisplay: none !important;\n\t\t}\n\n\t.demo-sortable-icon {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tfont-size: 10px;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tright: 10px;\n\t}"}),E.a.createElement(M,{html:'<h2 class="anchor-heading"><a href="#sortable-tuo-zhuai-pai-xu">¶</a><a href="javascript:void(0)" id="sortable-tuo-zhuai-pai-xu" class="anchor-point"></a>Sortable 拖拽排序</h2>\n<p>Sortable 主要用于一个容器内元素的拖拽排序</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),E.a.createElement(T,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sortable</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Arvin\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Jack\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Bob\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Nick\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> items\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sortable</span></span>\n        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          list<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span> <span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sortable</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(x)),E.a.createElement(T,{title:"可编辑列表",id:"Demoeditablelist",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sortable</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Card</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Arvin\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Jack\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Bob\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Nick\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Mark\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Leo\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'James\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Wade\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Custom</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>list<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleRemove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">removeIndex</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token method function property-access">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> index <span class="token operator">!==</span> removeIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> newList\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> items\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sortable</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable<span class="token punctuation">"</span></span>\n        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token attr-name">filterClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-add<span class="token punctuation">"</span></span>\n        <span class="token attr-name">dragClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-drag<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          list<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">,</span> index</span> <span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n                <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-item<span class="token punctuation">"</span></span>\n                <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>\n              <span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span>name<span class="token punctuation">}</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span>\n                  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-icon<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleRemove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-add<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleAdd</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sortable</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(S)),E.a.createElement(M,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#ji-chu-api">¶</a><a href="javascript:void(0)" id="ji-chu-api" class="anchor-point"></a><strong><code>基础API</code></strong></h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>tag</td>\n<td>容器元素的 HTML 标签名</td>\n<td>string</td>\n<td><code>\'div\'</code></td>\n<td>一切合法的 HTML 标签名</td>\n</tr>\n<tr>\n<td>items</td>\n<td>被排序元素的数组</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>排序完成时的回调函数</td>\n<td>(newItems: array): void</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>filterClass</td>\n<td>禁用排序元素的类名</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>⚠️ 注意：基础 API 可以满足绝大多数的拖拽需求，items 和 onChange 必须同时出现，作为一个受控组件，你需要在 onChange 中拿到新的数组，然后自己更新数据，如果有更复杂的需求，也可以不用 items 和 onChange，而使用下面的进阶 API 实现更复杂的功能。</p>\n<h4 class="anchor-heading"><a href="#jin-jie-api">¶</a><a href="javascript:void(0)" id="jin-jie-api" class="anchor-point"></a><strong><code>进阶API</code></strong></h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>sort</td>\n<td>是否支持拖拽</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>group</td>\n<td>用于多容器拖拽的分组(详见\n<a href="#group">Group</a>\n)</td>\n<td>string or object</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>delay</td>\n<td>拖拽时延迟的时间(ms)</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>animation</td>\n<td>拖拽时的动画持续时间(ms)</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>handle</td>\n<td>拖动柄的选择器(比如 \'.sortable-handle\')</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>ghostClass</td>\n<td>拖拽目标处填充元素的类名</td>\n<td>string</td>\n<td><code>\'zent-ghost\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>chosenClass</td>\n<td>被选中的元素的类名</td>\n<td>string</td>\n<td><code>\'zent-chosen\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dragClass</td>\n<td>正在被拖拽的元素的类名</td>\n<td>string</td>\n<td><code>\'zent-drag\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>forceFallback</td>\n<td>是否忽略 HTML5 的拖拽行为并强制回退</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>fallbackClass</td>\n<td>使用 forceFallback 时克隆的 DOM 元素的类名</td>\n<td>string</td>\n<td><code>\'zent-fallback\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>fallbackOnBody</td>\n<td>是否将克隆的 DOM 元素附加到 Body 中</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>fallbackTolerance</td>\n<td>拖动行为生效前鼠标移动的距离(px)</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>scroll</td>\n<td>拖拽过程中是否允许屏幕滚动</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>scrollFn</td>\n<td>如果你有自定义滚动条，该方法可用于自动滚动</td>\n<td>(offsetX: number, offsetY: number, originalEvent: Event): void</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>scrollSensitivity</td>\n<td>触发滚动时鼠标距离边缘的像素值(px)</td>\n<td>number</td>\n<td>30</td>\n<td></td>\n</tr>\n<tr>\n<td>scrollSpeed</td>\n<td>滚动速度(px/s)</td>\n<td>number</td>\n<td>10</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#jin-jie-shi-jian-api">¶</a><a href="javascript:void(0)" id="jin-jie-shi-jian-api" class="anchor-point"></a><strong><code>进阶事件API</code></strong></h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>setData</td>\n<td>用于调用 HTML5 原生的 DataTransfer.setData 方法</td>\n<td>(dataTransfer: object, dragEl: HTMLElement): void</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChoose</td>\n<td>元素被选中时的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onStart</td>\n<td>元素开始拖拽时的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onEnd</td>\n<td>元素结束拖拽时的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onAdd</td>\n<td>元素从另一个容器被拖拽到当前容器的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onUpdate</td>\n<td>元素被重新排序时的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onSort</td>\n<td>当有元素被排序时的回调函数(例如新增，更新，删除)</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onRemove</td>\n<td>当元素从当前容器拖拽至其他容器时的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onFilter</td>\n<td>当尝试拖拽一个被禁用拖拽的元素时的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onMove</td>\n<td>当在一个容器内或者不同容器之间拖拽元素时的回调函数</td>\n<td>(e: Event, originEvent: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onClone</td>\n<td>当复制元素时的回调函数</td>\n<td>(e: Event) (详见\n<a href="#shi-jian-hui-diao">事件回调</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#group">¶</a><a href="javascript:void(0)" id="group" class="anchor-point"></a>Group</h3>\n<p>要将元素从一个列表拖到另一个列表中，这两个列表必须具有相同的分组名称(Group 值)。 你还可以定义列表是否可以放弃，给予和保留元素的副本（clone），或接收元素。</p>\n<ul>\n<li>name: <code>string</code> 分组的名称</li>\n<li>pull: <code>true | false | \'clone\' | function</code> 从列表中拖出的能力，如果设置为 <code>\'clone\'</code> 则不会移动元素，而是复制。</li>\n<li>put: <code>true | false | [\'foo\', \'bar\'] | function</code> 是否可以从其他列表添加元素，还是可以设置为可接受元素的列表的一组组名。</li>\n<li>revertClone: <code>boolean</code> 当移动到另一个列表后，将克隆的元素还原到初始位置。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#shi-jian-hui-diao">¶</a><a href="javascript:void(0)" id="shi-jian-hui-diao" class="anchor-point"></a>事件回调</h3>\n<ul>\n<li>onChoose, onStart:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">oldIndex</span><span class="token punctuation">;</span>  <span class="token comment">// 元素在父元素中的下标(number)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onEnd, onAdd, onUpdate, onSort, onRemove:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">item</span><span class="token punctuation">;</span>  <span class="token comment">// 被拖拽的元素(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">to</span><span class="token punctuation">;</span>    <span class="token comment">// 元素在拖拽开始前所在的列表(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token keyword module">from</span><span class="token punctuation">;</span>  <span class="token comment">// 元素在拖拽结束后所在的列表(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">oldIndex</span><span class="token punctuation">;</span>  <span class="token comment">// 元素在拖拽开始前的父元素中的下标(number)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">newIndex</span><span class="token punctuation">;</span>  <span class="token comment">// 元素在拖拽结束后的父元素中的下标(number)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onFilter:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">item</span><span class="token punctuation">;</span>  <span class="token comment">// 接收到 `mousedown|tapstart` 事件的元素(HTMLElement)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onMove:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt， <span class="token doc-comment comment">/**Event*/</span>originalEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">dragged</span><span class="token punctuation">;</span> <span class="token comment">// 被拖拽的元素(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">draggedRect</span><span class="token punctuation">;</span> <span class="token comment">// 被拖拽元素的TextRectangle {left, top, right, bottom}</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">related</span><span class="token punctuation">;</span> <span class="token comment">// 拖拽的目标元素(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">relatedRect</span><span class="token punctuation">;</span> <span class="token comment">// 拖拽的目标元素的TextRectangle {left, top, right, bottom}</span>\n    originalEvent<span class="token punctuation">.</span><span class="token property-access">clientY</span><span class="token punctuation">;</span> <span class="token comment">// 鼠标所在的位置(number)</span>\n    <span class="token comment">// return false; — 用于取消拖拽</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onClose:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">item</span><span class="token punctuation">;</span>  <span class="token comment">// 原始元素(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">clone</span> <span class="token comment">// 被复制的元素(HTMLElement)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>'}))}}]),s}(w.Component)}}]);