(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[9145],{69145:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>y});var t=s(73450),e=s(27378),p=s(57318),o=s(25802),c=s(24246);function l(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function r(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){(0,t.Z)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}var u=function(){return(0,c.jsx)(o.a,{breads:[{name:"Index",href:"//www.youzan.com"},{name:"Application Center",href:"//www.youzan.com"},{name:"Marteting Center",href:"//www.youzan.com"},{name:"Marteting Play"}]})},i=function(){return(0,c.jsxs)(o.a,{children:[(0,c.jsx)(o.a.Item,{name:"Index",href:"//www.youzan.com"}),(0,c.jsx)(o.a.Item,{name:"Application Center",href:"//www.youzan.com",className:"zent-demo-bread"}),(0,c.jsx)(o.a.Item,{name:"Marteting Center"})]})},k=function(){return(0,c.jsxs)(o.a,{children:[(0,c.jsx)(o.a.Item,{children:(0,c.jsx)("a",{href:"//www.youzan.com",children:"Index"})}),(0,c.jsx)(o.a.Item,{children:(0,c.jsx)("a",{href:"//www.youzan.com",children:"Application Center"})}),(0,c.jsx)("span",{children:"Marteting Center"})]})},d=function(){return(0,c.jsx)(o.a,{breads:[{name:"Index",href:"//www.youzan.com"},{name:"Application Center",href:"//www.youzan.com"},{name:"Marteting Center",href:"//www.youzan.com"},{name:"Marteting Play"}],maxItemCount:3})},m=function(){var n=Array(20).fill().map(((n,a)=>({name:"Content ".concat(a),href:"//www.youzan.com"}))).concat({name:"Content 20"});return(0,c.jsx)(o.a,{style:{width:"400px"},breads:n,maxItemCount:3})};function h(n){return(0,c.jsx)(n.tag,r(r({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function f(n){return(0,c.jsx)(h,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return(0,c.jsx)(h,{tag:"style",html:n.style})}function b(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),b(n.parentNode,a);return a}class w extends e.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return(0,c.jsxs)("div",{className:"zandoc-react-demo",children:[(0,c.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,c.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,c.jsx)("div",{className:"zandoc-react-demo__title",children:(0,c.jsx)("p",{children:s||""})}),(0,c.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,c.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,c.jsx)(h,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class y extends e.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&(0,p.l)(document.documentElement,0,b(a,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(g,{style:""}),e.createElement(f,{html:'<h2 class="anchor-heading"><a href="#breadcrumb">¶</a><a href="javascript:void(0)" id="breadcrumb" class="anchor-point"></a>Breadcrumb</h2>\n<p>Displays the position of the current page in the system hierarchy. It can be redirected and is only one line high.</p>\n<h3 class="anchor-heading"><a href="#suggestion">¶</a><a href="javascript:void(0)" id="suggestion" class="anchor-point"></a>Suggestion</h3>\n<ul>\n<li>There\'re more than 2 levels of hierarchy。</li>\n<li>Users need to be told where they are.</li>\n<li>Function of navigating upwards is required.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#note">¶</a><a href="javascript:void(0)" id="note" class="anchor-point"></a>Note</h3>\n<ul>\n<li>No more than one line of Breadcrumbs is allowed</li>\n<li>Do not use Breadcrumbs directly to describe the operation path</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),e.createElement(w,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Breadcrumb</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Index\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Application Center\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Marteting Center\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Marteting Play\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">breads</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dataList<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(w,{title:"Breadcrmb.Item can be used directory",id:"Demoitem",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Alert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Index<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Application Center<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-demo-bread<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Marteting Center<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},e.createElement(i)),e.createElement(w,{title:"The content of Breadcrumb.Item is customizable.The whole Breadcrumb can be customized as well.",id:"Democustomitem",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Alert</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Index</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.youzan.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token maybe-class-name">Application</span> <span class="token maybe-class-name">Center</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token maybe-class-name">Marteting</span> <span class="token maybe-class-name">Center</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(k)),e.createElement(w,{title:"Basic Usage",id:"Demofold",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Breadcrumb</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Index\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Application Center\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Marteting Center\'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Marteting Play\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">breads</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dataList<span class="token punctuation">}</span></span> <span class="token attr-name">maxItemCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(d)),e.createElement(w,{title:"Fit Width",id:"Demofitwdith",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Breadcrumb</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token known-class-name class-name">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token method function property-access">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Content </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    href<span class="token operator">:</span> <span class="token string">\'//www.youzan.com\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token method function property-access">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Content 20</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">\'400px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">breads</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dataList<span class="token punctuation">}</span></span> <span class="token attr-name">maxItemCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(m)),e.createElement(f,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#breadcrumb">¶</a><a href="javascript:void(0)" id="breadcrumb" class="anchor-point"></a>Breadcrumb</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>breads</td>\n<td>data</td>\n<td>array</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>extra custom class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>maxItemCount</td>\n<td>exceeds the number of automatic folds</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#item">¶</a><a href="javascript:void(0)" id="item" class="anchor-point"></a>Item</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>extra custom class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>content</td>\n<td>string or React node</td>\n<td>-</td>\n</tr>\n<tr>\n<td>href</td>\n<td>hyperlink</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>'}))}}},25802:(n,a,s)=>{"use strict";s.d(a,{a:()=>d});var t=s(93646),e=s(27378),p=s(24246),o=s(60042),c=s.n(o),l=s(14322),r=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(a,n),a.prototype.render=function(){var n=this.props,a=n.href,s=n.name,e=(0,t._T)(n,["href","name"]);return this.props.children?this.props.children:a?(0,p.jsx)("a",(0,t.pi)({},e,{href:a,"data-zv":"10.0.0-beta.3"},{children:s}),void 0):(0,p.jsx)("span",(0,t.pi)({},e,{"data-zv":"10.0.0-beta.3"},{children:s}),void 0)},a}(e.Component),u=s(27036),i=s(17949),k=200,d=function(n){function a(){var a=null!==n&&n.apply(this,arguments)||this;return a.state={isFolded:!0,overflowLeft:!1,overflowRight:!1,contentStyleLeft:0},a.breadcrumbRef=(0,e.createRef)(),a.contentRef=(0,e.createRef)(),a.isMoving=!1,a.getOverflowStatus=function(){var n=a.state.contentStyleLeft;a.breadcrumbWidth&&a.contentWidth&&(n<0?a.setState({overflowLeft:!0}):a.setState({overflowLeft:!1}),a.breadcrumbWidth-n<a.contentWidth?a.setState({overflowRight:!0}):a.setState({overflowRight:!1}))},a.componentDidMount=function(){a.getOverflowStatus()},a.componentDidUpdate=function(n){(0,i.Z)(a.props.breads,n.breads)||a.getOverflowStatus()},a.handleClickMoveLeft=function(){var n=a.state.contentStyleLeft;if(!a.isMoving){a.isMoving=!0;for(var s=a.contentRef.current,t=0,e=s.childElementCount-1;e>=0;e--){var p=s.children.item(e).getBoundingClientRect().left;if(p<a.breadcrumbLeft){t=a.breadcrumbLeft-p+24;break}}var o=n+t<0?n+t:0;a.setState({contentStyleLeft:o},(function(){a.getOverflowStatus(),setTimeout((function(){a.isMoving=!1}),k)}))}},a.handleClickMoveRight=function(){var n=a.state.contentStyleLeft;if(!a.isMoving){a.isMoving=!0;for(var s=a.contentRef.current,t=0,e=0;e<s.childElementCount;e++){var p=s.children.item(e),o=p.getBoundingClientRect().left,c=p.getBoundingClientRect().width;if(o+c>a.breadcrumbLeft+a.breadcrumbWidth){t=o+c-(a.breadcrumbLeft+a.breadcrumbWidth)+24-24;break}}var l=a.contentWidth-a.breadcrumbWidth,r=Math.abs(n-t)>l?-l:n-t;a.setState({contentStyleLeft:r},(function(){a.getOverflowStatus(),setTimeout((function(){a.isMoving=!1}),k)}))}},a.unfoldBreads=function(){a.setState({isFolded:!1},(function(){a.getOverflowStatus()}))},a.getFoldItems=function(){var n=a.state.isFolded,s=a.props,e=s.maxItemCount,p=s.breads;if(!e||e<2)return p;if(!n||(null==p?void 0:p.length)<=e)return p;var o=(0,t.ev)([],p);return o.splice(1,p.length-e,{name:"...",className:"zent-breadcrumb__fold",onClick:a.unfoldBreads}),o},a}return(0,t.ZT)(a,n),Object.defineProperty(a.prototype,"breadcrumbWidth",{get:function(){var n=this.breadcrumbRef.current;return null==n?void 0:n.getBoundingClientRect().width},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"breadcrumbLeft",{get:function(){var n=this.breadcrumbRef.current;return null==n?void 0:n.getBoundingClientRect().left},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"contentWidth",{get:function(){var n=this.contentRef.current;return null==n?void 0:n.getBoundingClientRect().width},enumerable:!1,configurable:!0}),a.prototype.render=function(){var n=this.props,a=n.className,s=n.children,o=void 0===s?null:s,i=n.style,k=this.state,d=k.overflowLeft,m=k.overflowRight,h=k.contentStyleLeft,f=this.getFoldItems(),g=o||f&&f.length>0;return(0,p.jsxs)("div",(0,t.pi)({className:c()("zent-breadcrumb",a,{"zent-breadcrumb--overflow-left":d,"zent-breadcrumb--overflow-right":m}),ref:this.breadcrumbRef,style:i,"data-zv":"10.0.0-beta.3"},{children:[d&&(0,p.jsx)(u.Z,{type:"left",className:"zent-breadcrumb__move-left",onClick:this.handleClickMoveLeft},void 0),g&&(0,p.jsxs)("div",(0,t.pi)({className:"zent-breadcrumb__content",style:{left:h+"px"},ref:this.contentRef,"data-zv":"10.0.0-beta.3"},{children:[o,f&&f.length>0&&f.map((function(n,a){return(0,e.createElement)(r,(0,t.pi)({},n,{key:a}))}))]}),void 0),m&&(0,p.jsx)(u.Z,{type:"right",className:"zent-breadcrumb__move-right",onClick:this.handleClickMoveRight},void 0),(0,p.jsx)(l.w,{onResize:this.getOverflowStatus},void 0)]}),void 0)},a.defaultProps={className:"",breads:[]},a.Item=r,a}(e.Component)},14322:(n,a,s)=>{"use strict";s.d(a,{w:()=>r});var t=s(24246),e=s(27378),p=s(27468),o=s(80186),c=s(17127),l={passive:!0},r=function(n){var a=n.disableThrottle,s=void 0!==a&&a,r=n.onResize,u=(0,e.useRef)(null),i=(0,e.useRef)(r);i.current=r;var k=(0,e.useCallback)((function(n){var a=(0,p.ZP)();u.current||(u.current=a);var s=u.current,t={deltaX:a.width-s.width,deltaY:a.height-s.height};0===t.deltaX&&0===t.deltaY||(i.current(n,t),u.current=a)}),[]),d=(0,c.BN)(k,s);return(0,e.useEffect)((function(){return u.current=(0,p.ZP)(),d.cancel}),[d]),(0,t.jsx)(o.ZP,{eventName:"resize",listener:d,options:l},void 0)}}}]);