(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1020:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return I}));var t=s(917),p=s.n(t),o=s(911),e=s.n(o),c=s(912),l=s.n(c),u=s(570),r=s.n(u),i=s(913),k=s.n(i),d=s(914),m=s.n(d),f=s(915),h=s.n(f),y=s(916),g=s.n(y),w=s(0),C=s.n(w),v=s(152),b=s(169);function E(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=h()(n);if(a){var p=h()(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return m()(this,s)}}var B=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"showAlertInfo",(function(){b.Sweetalert.alert({content:"这个是具体内容",parentComponent:r()(n)})})),n}return l()(s,[{key:"render",value:function(){return C.a.createElement(b.Button,{onClick:this.showAlertInfo},"消息对话框")}}]),s}(C.a.Component);return C.a.createElement(n,null)},A=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"onConfirm",(function(){b.Notify.success("我真的知道了")})),g()(r()(n),"onCancel",(function(){b.Notify.error("我真的取消了")})),g()(r()(n),"showAlertConfirm",(function(){b.Sweetalert.confirm({content:C.a.createElement("p",null,"这个是内容"),onConfirm:n.onConfirm,onCancel:n.onCancel,parentComponent:r()(n)})})),n}return l()(s,[{key:"render",value:function(){return C.a.createElement(b.Button,{onClick:this.showAlertConfirm},"消息对话框")}}]),s}(C.a.Component);return C.a.createElement(n,null)},S=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"autoCloseConfirm",(function(){var a=b.Sweetalert.confirm({content:C.a.createElement("p",null,"一秒后自动关闭"),parentComponent:r()(n)});setTimeout(a,1e3)})),n}return l()(s,[{key:"render",value:function(){return C.a.createElement(b.Button,{onClick:this.autoCloseConfirm},"自动关闭对话框")}}]),s}(C.a.Component);return C.a.createElement(n,null)},N=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"promiseConfirm",(function(){b.Sweetalert.confirm({content:"点击确定后三秒自动关闭",title:"onConfirm返回Promise",onConfirm:function(){return new Promise((function(n){setTimeout((function(){n()}),3e3)}))},parentComponent:r()(n)})})),n}return l()(s,[{key:"render",value:function(){return C.a.createElement(b.Button,{onClick:this.promiseConfirm},"自动关闭对话框(Promise)")}}]),s}(C.a.Component);return C.a.createElement(n,null)},z=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"showAlertInfo",(function(){b.Sweetalert.alert({type:"info",content:"这个是具体内容",title:"这是一个消息标题",parentComponent:r()(n)})})),n}return l()(s,[{key:"render",value:function(){return C.a.createElement(b.Button,{onClick:this.showAlertInfo},"含有图标消息对话框")}}]),s}(C.a.Component);return C.a.createElement(n,null)},D=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"showAlertConfirm",(function(){b.Sweetalert.confirm({confirmType:"danger",confirmText:"删除",cancelText:"取消",content:"确认删除吗？",title:"请确认",parentComponent:r()(n)})})),n}return l()(s,[{key:"render",value:function(){return C.a.createElement(b.Button,{onClick:this.showAlertConfirm,type:"danger"},"删除")}}]),s}(C.a.Component);return C.a.createElement(n,null)},R=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"showAlertInfo",(function(){b.Sweetalert.alert({closeBtn:!0,maskClosable:!0,content:"这个是具体内容",parentComponent:r()(n)})})),n}return l()(s,[{key:"render",value:function(){return C.a.createElement(b.Button,{onClick:this.showAlertInfo},"带有关闭按钮")}}]),s}(C.a.Component);return C.a.createElement(n,null)};function j(n){return C.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function x(n){return C.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function T(n){return C.a.createElement(j,{tag:"style",html:n.style})}var _=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),g()(r()(n),"state",{showCode:!1}),g()(r()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return C.a.createElement("div",{className:"zandoc-react-demo"},C.a.createElement("div",{className:"zandoc-react-demo__preview"},p),C.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.a.createElement("div",{className:"zandoc-react-demo__title"},C.a.createElement("p",null,s||"")),C.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&C.a.createElement("pre",{className:"zandoc-react-demo__code"},C.a.createElement(j,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(w.Component),I=function(n){k()(s,n);var a=E(s);function s(){return e()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return C.a.createElement("div",{className:"zandoc-react-container",key:null},C.a.createElement(T,{style:""}),C.a.createElement(x,{html:'<h2 class="anchor-heading"><a href="#sweetalert-kuai-jie-dui-hua-kuang">¶</a><a href="javascript:void(0)" id="sweetalert-kuai-jie-dui-hua-kuang" class="anchor-point"></a>Sweetalert 快捷对话框</h2>\n<p>快速唤起 Dialog 组件</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>组件不提供个性化选项，如有需要请使用 Dialog 组件。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),C.a.createElement(_,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">.</span><span class="token method function property-access">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token operator">:</span> <span class="token string">\'这个是具体内容\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showAlertInfo</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>消息对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Wrapper</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(B)),C.a.createElement(_,{title:"带有确认和取消按钮",id:"Demowithbuttons",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Notify</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">onConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'我真的知道了\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">\'我真的取消了\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">showAlertConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">.</span><span class="token method function property-access">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这个是内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n      onConfirm<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onConfirm</span><span class="token punctuation">,</span>\n      onCancel<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onCancel</span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showAlertConfirm</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>消息对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Wrapper</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(A)),C.a.createElement(_,{title:"自动关闭",id:"Democlosedexternal",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">autoCloseConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> close <span class="token operator">=</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">.</span><span class="token method function property-access">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>一秒后自动关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>close<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">autoCloseConfirm</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>自动关闭对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Wrapper</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(S)),C.a.createElement(_,{title:"回调返回 Promise",id:"Demoreturnpromise",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">promiseConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">.</span><span class="token method function property-access">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token operator">:</span> <span class="token string">\'点击确定后三秒自动关闭\'</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token string">\'onConfirm返回Promise\'</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">onConfirm</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">promiseConfirm</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token function">自动关闭对话框</span><span class="token punctuation">(</span><span class="token known-class-name class-name">Promise</span><span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Wrapper</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(N)),C.a.createElement(_,{title:"标题旁带有 icon 的 Dialog",id:"Demowithicon",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">.</span><span class="token method function property-access">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token operator">:</span> <span class="token string">\'info\'</span><span class="token punctuation">,</span>\n      content<span class="token operator">:</span> <span class="token string">\'这个是具体内容\'</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token string">\'这是一个消息标题\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showAlertInfo</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>含有图标消息对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Wrapper</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(z)),C.a.createElement(_,{title:"支持设置 Dialog 中的 button 类型",id:"Demobuttontype",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">.</span><span class="token method function property-access">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      confirmType<span class="token operator">:</span> <span class="token string">\'danger\'</span><span class="token punctuation">,</span>\n      confirmText<span class="token operator">:</span> <span class="token string">\'删除\'</span><span class="token punctuation">,</span>\n      cancelText<span class="token operator">:</span> <span class="token string">\'取消\'</span><span class="token punctuation">,</span>\n      content<span class="token operator">:</span> <span class="token string">\'确认删除吗？\'</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token string">\'请确认\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showAlertConfirm</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Wrapper</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(D)),C.a.createElement(_,{title:"带有右上角的关闭按钮",id:"Demowithclosebtn",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Sweetalert</span><span class="token punctuation">.</span><span class="token method function property-access">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      closeBtn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      maskClosable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      content<span class="token operator">:</span> <span class="token string">\'这个是具体内容\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token operator">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">showAlertInfo</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>带有关闭按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Wrapper</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(R)),C.a.createElement(x,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<h4 class=\"anchor-heading\"><a href=\"#alert\">¶</a><a href=\"javascript:void(0)\" id=\"alert\" class=\"anchor-point\"></a>alert</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>弹窗中的内容</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>弹窗的类型, 设置会在 title 左边显示一个小图标, 不传不会显示图标</td>\n<td>string</td>\n<td>-</td>\n<td><code>'info'</code>\n, \n<code>'success'</code>\n, \n<code>'error'</code>\n, \n<code>'warning'</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>弹窗的标题</td>\n<td>node</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>确定操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>确定按钮文案</td>\n<td>string</td>\n<td><code>'我知道了'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmType</td>\n<td>确定按钮的类型</td>\n<td>string</td>\n<td><code>'primary'</code></td>\n<td><code>'default'</code>\n、\n<code>'primary'</code>\n、\n<code>'danger'</code>\n、\n<code>'success'</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>是否显示右上角关闭按钮</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>点击遮罩是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>父级组件实例，i18n 需要通过这个传递 context</td>\n<td>ReactInstance</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外的 className</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class=\"anchor-heading\"><a href=\"#confirm\">¶</a><a href=\"javascript:void(0)\" id=\"confirm\" class=\"anchor-point\"></a>confirm</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>弹窗中的内容</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>弹窗的类型, 设置会在 title 左边显示一个小图标, 不传不会显示图标</td>\n<td>string</td>\n<td>-</td>\n<td><code>'info'</code>\n, \n<code>'success'</code>\n, \n<code>'error'</code>\n, \n<code>'warning'</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>弹窗的标题</td>\n<td>node</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>取消操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>确定操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消按钮文案</td>\n<td>string</td>\n<td><code>'取消'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>确定按钮文案</td>\n<td>string</td>\n<td><code>'确定'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmType</td>\n<td>确定按钮的类型</td>\n<td>string</td>\n<td><code>'primary'</code></td>\n<td><code>'default'</code>\n、\n<code>'primary'</code>\n、\n<code>'danger'</code>\n、\n<code>'success'</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>是否显示右上角关闭按钮</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>点击遮罩是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外的 className</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li><code>Sweetalert.alert</code> 和 <code>Sweetalert.confirm</code> 的返回值是可以用来手动关闭对话框的函数。</li>\n<li>如果 <code>onConfirm</code> 的返回值是 <code>Promise</code>, 对应的按钮会在 <code>Promise</code> pending 时保持在 loading 状态；如果 <code>Promise</code> reject，对话框不会关闭，如果 <code>Promise</code> resolve 对话框关闭。</li>\n<li>如果 <code>onConfirm</code> 没有参数并且返回值是 <code>false</code> 对话框不会关闭。</li>\n<li>如果 <code>onConfirm</code> 有一个参数的话，需要手动调用 <code>close</code> 这个参数来关闭对话框。</li>\n</ul>"}))}}]),s}(w.Component)}}]);