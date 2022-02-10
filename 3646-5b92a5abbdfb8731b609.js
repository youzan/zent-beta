(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[3646],{33646:(n,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var a=s(73450),e=s(27378),o=s(57318),p=s(82049),c=s(20713),r=s(24246);function i(n,t){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.push.apply(s,a)}return s}function l(n){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){(0,a.Z)(n,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(s,t))}))}return n}var u=function(){class n extends e.Component{constructor(...n){super(...n),(0,a.Z)(this,"state",{list:[1,2,3,4,5,6,7,8,9,10]})}loadMore(n){var t=this.state.list,s=t.slice(t.length-10).map((n=>n+10));setTimeout((()=>{this.setState({list:[...t,...s]}),n&&n()}),500)}render(){var n=this.state.list;return(0,r.jsx)(p.S,{className:"infinite-scroller-demo",hasMore:!0,loadMore:this.loadMore.bind(this),children:n.map((n=>(0,r.jsx)(c.Z,{children:n},n)))})}}return(0,r.jsx)(n,{})};function d(n){return(0,r.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function h(n){return(0,r.jsx)(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function m(n){return(0,r.jsx)(d,{tag:"style",html:n.style})}function k(n,t){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(t+=n.offsetTop),k(n.parentNode,t);return t}class f extends e.Component{constructor(...n){super(...n),(0,a.Z)(this,"state",{showCode:!1}),(0,a.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,t=this.props,s=t.title,a=t.src,e=t.children;return(0,r.jsxs)("div",{className:"zandoc-react-demo",children:[(0,r.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,r.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,r.jsx)("div",{className:"zandoc-react-demo__title",children:(0,r.jsx)("p",{children:s||""})}),(0,r.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,r.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,r.jsx)(d,{tag:"code",html:a,attributes:{className:"language-jsx"}})})]})}}class v extends e.Component{componentDidMount(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&(0,o.l)(document.documentElement,0,k(t,-9))}}render(){return e.createElement("div",{className:"zandoc-react-container"},e.createElement(m,{style:".infinite-scroller-demo {\n\theight: 300px;\n}"}),e.createElement(h,{html:'<h2 class="anchor-heading"><a href="#infinitescroller-wu-xian-gun-dong-zu-jian">¶</a><a href="javascript:void(0)" id="infinitescroller-wu-xian-gun-dong-zu-jian" class="anchor-point"></a>InfiniteScroller 无限滚动组件</h2>\n<p>无限滚动组件</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>常用于长列表内容的懒加载</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),e.createElement(f,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">InfiniteScroller</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token parameter">closeLoading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> latestList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newList <span class="token operator">=</span> latestList<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token arrow operator">=></span> item <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>list<span class="token punctuation">,</span> <span class="token spread operator">...</span>newList<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      closeLoading <span class="token operator">&amp;&amp;</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InfiniteScroller</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infinite-scroller-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">hasMore</span>\n        <span class="token attr-name">loadMore</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">loadMore</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">InfiniteScroller</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},e.createElement(u)),e.createElement(h,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>hasMore</td>\n<td>是否还有更多数据待加载</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loadMore</td>\n<td>加载更多的回调函数，如果函数接收参数则会传入一个停止 loading 效果的回调</td>\n<td><code>(() => Promise&#x3C;unknown>) \\| ((stopLoading?: () => void) => void)</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>skipLoadOnMount</td>\n<td>初始化时是否触发一次数据加载</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>useWindow</td>\n<td>是否使用 \n<code>window</code>\n 作为滚动容器</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>loader</td>\n<td>加载时显示的内容</td>\n<td><code>ReactNode</code></td>\n<td><code>BlockLoading</code></td>\n<td></td>\n</tr>\n<tr>\n<td>threshold</td>\n<td>触发 \n<code>loadMore</code>\n 时距离列表末尾的距离</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#loadmore">¶</a><a href="javascript:void(0)" id="loadmore" class="anchor-point"></a>loadMore</h3>\n<ul>\n<li>当异步加载时，期望传入的 <code>loadMore</code> 函数的返回值是一个 <code>Promise</code> 对象，用于组件控制 loading 的显示</li>\n<li>你也可以使用 <code>loadMore</code> 的参数 <code>stopLoading</code> 手动停止 loading，此时不需要返回 <code>Promise</code></li>\n</ul>'}))}}},20713:(n,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(59312),e=s(24246),o=s(27378),p=s(60042),c=s.n(p),r=s(40937),i=s(31256),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.title,s=n.action,o=n.type,p=n.loading,l=n.style,u=n.children,d=n.className,h=n.bodyStyle,m=!(0,i.Z)(t),k=!(0,i.Z)(s);return(0,e.jsxs)("div",(0,a.pi)({className:c()("zent-card",d,{"zent-card--normal":"normal"===o,"zent-card--nested":"nested"===o}),style:l,"data-zv":"10.0.0-rc.1"},{children:[(m||k)&&(0,e.jsxs)("div",(0,a.pi)({className:"zent-card-header","data-zv":"10.0.0-rc.1"},{children:[m&&(0,e.jsx)("h3",(0,a.pi)({className:"zent-card-header__title","data-zv":"10.0.0-rc.1"},{children:t}),void 0),k&&(0,e.jsx)("div",(0,a.pi)({className:"zent-card-header__action","data-zv":"10.0.0-rc.1"},{children:s}),void 0)]}),void 0),(0,e.jsx)("div",(0,a.pi)({className:"zent-card-body",style:h,"data-zv":"10.0.0-rc.1"},{children:p?(0,e.jsx)(r.Z.TextBlock,{rows:5},void 0):u}),void 0)]}),void 0)},t.defaultProps={type:"normal",style:{},bodyStyle:{},loading:!1,className:""},t}(o.Component)},82049:(n,t,s)=>{"use strict";s.d(t,{S:()=>h});var a=s(59312),e=s(24246),o=s(60042),p=s.n(o),c=s(27378),r=s(50993),i=s(86446),l=s(79352),u=s(43239),d=(0,e.jsx)(r.Z,{height:60,loading:!0,icon:"circle"},void 0),h=(0,c.forwardRef)((function(n,t){var s,o=n.hasMore,r=void 0!==o&&o,h=n.loadMore,m=n.skipLoadOnMount,k=void 0!==m&&m,f=n.useWindow,v=void 0!==f&&f,y=n.loader,g=void 0===y?d:y,w=n.threshold,b=void 0===w?1:w,z=n.className,x=n.children,j=(0,c.useState)(!1),N=j[0],T=j[1],S=(0,u.s)(),P=(0,c.useCallback)((function(){S.current&&T(!1)}),[S]),C=(0,c.useCallback)((function(){"function"==typeof h&&(T(!0),h.length>0?h(P):h().then(P,P))}),[h,P]),O=(0,c.useCallback)((function(n){N||2===n.previousPosition&&C()}),[C,N]);return(0,c.useEffect)((function(){k||C()}),[]),(0,e.jsxs)("div",(0,a.pi)({className:p()("zent-infinite-scroller",z,(s={},s["zent-infinite-scroller-y"]=!v,s)),ref:t,"data-zv":"10.0.0-rc.1"},{children:[x,r&&l.Z&&(0,e.jsx)(i.h,{scrollableAncestor:v?window:void 0,onEnter:O,bottomOffset:-b},void 0),N&&g]}),void 0)}));h.displayName="InfiniteScroller",t.Z=h},50993:(n,t,s)=>{"use strict";s.d(t,{c:()=>l});var a=s(59312),e=s(24246),o=s(60042),p=s.n(o),c=s(40695),r=s(73326),i=s(72551);function l(n){var t=function(n){var t=(0,i.n)(n,"height"),s=n.children;return s||t?s&&!t?"initial":n.height:160}(n),s=n.loading,o=void 0!==s&&s,l=n.delay,u=void 0===l?0:l,d=n.className,h=n.children,m=n.icon,k=void 0===m?"circle":m,f=n.iconSize,v=n.iconText,y=n.textPosition,g=void 0===y?"bottom":y,w=n.colorPreset,b=void 0===w?"primary":w,z=!!h,x=!(0,r.Z)({loading:o,delay:u})&&o;return x||z?(0,e.jsxs)("div",(0,a.pi)({className:p()("zent-loading","zent-loading--block",d,{"zent-loading--has-children":z}),style:{height:t},"data-zv":"10.0.0-rc.1"},{children:[h,x&&(0,e.jsx)(c.Z,{icon:k,size:f,text:v,textPosition:g,colorPreset:b},void 0)]}),void 0):null}t.Z=l},40695:(n,t,s)=>{"use strict";s.d(t,{Z:()=>p});var a=s(59312),e=s(24246),o=s(56975);function p(n){return(0,e.jsx)("div",(0,a.pi)({className:"zent-loading-mask","data-zv":"10.0.0-rc.1"},{children:(0,e.jsx)(o.Z,(0,a.pi)({},n),void 0)}),void 0)}},40937:(n,t,s)=>{"use strict";s.d(t,{V:()=>f,Z:()=>v});var a=s(59312),e=s(24246),o=s(27378),p=s(60042),c=s.n(p),r=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,s=n.lineSpacing,o=n.animate,p=n.style,r={marginTop:s},i=c()("zent-placeholder-text-row","zent-placeholder-shape",{"zent-placeholder-shape--animate":o},t);return(0,e.jsx)("div",{className:i,style:(0,a.pi)((0,a.pi)({},r),p),"data-zv":"10.0.0-rc.1"},void 0)},t.defaultProps={lineSpacing:"0.7em",animate:!0},t}(o.PureComponent),i=[[61.8,38],[30,25,44],[20,75],[33,16,20,27],[12,32,53],[45,12,42],[20,10,47,18],[14,47,37]],l=function(n){function t(t){var s,a=n.call(this,t)||this;return a.state={segments:(s=i,s[Math.floor(Math.random()*s.length)])},a}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,s=n.lineSpacing,o=n.animate,p=n.segments,r=n.style,i={marginTop:s},l=c()("zent-placeholder-text-row-dashed",t),u=c()("zent-placeholder-shape",{"zent-placeholder-shape--animate":o}),d=Array.isArray(p)?p:this.state.segments;return(0,e.jsx)("div",(0,a.pi)({className:l,style:(0,a.pi)((0,a.pi)({},i),r),"data-zv":"10.0.0-rc.1"},{children:d.map((function(n,t){return(0,e.jsx)("div",(0,a.pi)({className:"zent-placeholder-text-row-dashed-segment",style:{width:n+"%",paddingLeft:0===t?0:"0.3em"},"data-zv":"10.0.0-rc.1"},{children:(0,e.jsx)("div",{className:u,"data-zv":"10.0.0-rc.1"},void 0)}),t)}))}),void 0)},t.defaultProps={lineSpacing:"0.7em",animate:!0},t}(o.PureComponent),u=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,s=n.style,a=n.animate,o=c()("zent-placeholder-shape",{"zent-placeholder-shape--animate":a},t);return(0,e.jsx)("div",{className:o,style:s,"data-zv":"10.0.0-rc.1"},void 0)},t.defaultProps={style:{},animate:!0},t}(o.PureComponent),d=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,s=n.diameter,o=n.style,p=(0,a._T)(n,["className","diameter","style"]),r=c()("zent-placeholder-circle",t),i=(0,a.pi)({height:s,minWidth:s},o);return(0,e.jsx)(u,(0,a.pi)({className:r,style:i},p),void 0)},t.defaultProps={style:{},animate:!0,diameter:80},t}(o.PureComponent),h=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,s=n.width,o=n.height,p=n.style,r=(0,a._T)(n,["className","width","height","style"]),i=c()("zent-placeholder-rectangle",t),l=(0,a.pi)({minWidth:s,height:o},p);return(0,e.jsx)(u,(0,a.pi)({className:i,style:l},r),void 0)},t.defaultProps={style:{},animate:!0,width:80,height:80},t}(o.PureComponent),m=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.getRowStyle=function(n){var s=t.props.widths;return{width:s[n%s.length]+"%"}},t.getRows=function(){for(var n=t.props,s=n.rows,o=n.lineSpacing,p=n.animate,c=n.dashed,i=n.dashSegments,u=[],d=0;d<s;d++){var h=c?l:r,m={style:t.getRowStyle(d),lineSpacing:d?o:0,animate:p};c&&(m.segments=i[d%i.length]),u.push((0,e.jsx)(h,(0,a.pi)({},m),d))}return u},t}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.style,s=n.className,o=c()("zent-placeholder-text-block",s);return(0,e.jsx)("div",(0,a.pi)({className:o,style:(0,a.pi)((0,a.pi)({},t),{width:"100%"}),"data-zv":"10.0.0-rc.1"},{children:this.getRows()}),void 0)},t.defaultProps={widths:[97,99,94,92,96,95,98,60],dashSegments:i,animate:!0,dashed:!0,lineSpacing:"0.7em"},t}(o.PureComponent),k=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a.ZT)(t,n),t.prototype.render=function(){var n=this.props,t=n.className,s=n.style,o=n.rows,p=n.shape,r=n.size,i=n.animate,l=n.dashed,u=n.widths,k=n.dashSegments,f=n.lineSpacing,v=c()("zent-placeholder-richtext-block",t),y={marginRight:10};return(0,e.jsxs)("div",(0,a.pi)({className:v,style:(0,a.pi)((0,a.pi)({},s),{display:"flex"}),"data-zv":"10.0.0-rc.1"},{children:["circle"===p?(0,e.jsx)(d,{style:y,diameter:r,animate:i},void 0):(0,e.jsx)(h,{style:y,width:r,height:r,animate:i},void 0),(0,e.jsx)(m,{rows:o,animate:i,dashed:l,widths:u,dashSegments:k,lineSpacing:f},void 0)]}),void 0)},t.defaultProps={style:{},className:"",shape:"circle",animate:!0,dashed:!0,size:80},t}(o.PureComponent),f={TextRow:r,TextRowDashed:l,Circle:d,Rectangle:h,TextBlock:m,RichTextBlock:k},v=f},55978:(n,t,s)=>{"use strict";function a(n){for(var t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];var a=setTimeout((function(){return n.apply(void 0,t)}),1);return{cancel:function(){clearTimeout(a)}}}s.d(t,{Z:()=>a})},31256:(n,t,s)=>{"use strict";function a(n){return null==n}s.d(t,{Z:()=>a})},86446:(n,t,s)=>{"use strict";s.d(t,{h:()=>v});var a=s(59312),e=s(24246),o=s(27378),p=s(49744),c=s(19185);function r(n){return(0,c.isElement)(n)&&"string"==typeof n.type}function i(n){return n.viewportBottom-n.viewportTop==0?3:n.viewportTop<=n.waypointTop&&n.waypointTop<=n.viewportBottom||n.viewportTop<=n.waypointBottom&&n.waypointBottom<=n.viewportBottom||n.waypointTop<=n.viewportTop&&n.viewportBottom<=n.waypointBottom?1:n.viewportBottom<n.waypointTop?2:n.waypointTop<n.viewportTop?0:3}var l=s(79352),u=s(55978);function d(n){return k(n.toLowerCase())}function h(n,t,s){var a=k(n=n.toLowerCase());return null!==a?a:function(n,t,s){var a=f.exec(n);if(a){var e=parseFloat(a[1]);switch(a[2]){case"em":return null!==(o=t())?o*e:null;case"rem":var o;return null!==(o=s())?o*e:null;default:return null}}return null}(n,t,s)}var m=/(^-?\d*\.?\d+)(cm|mm|in|px|pt|pc)$/;function k(n){var t=m.exec(n);if(t){var s=parseFloat(t[1]);switch(t[2]){case"cm":return 9600*s/254;case"mm":return 960*s/254;case"in":return 96*s;case"pt":return 4*s/3;case"pc":return 16*s;case"px":return s;default:return null}}return null}var f=/(^-?\d*\.?\d+)(em|rem)$/,v=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.refElement=(0,o.createRef)(),t.previousPosition=4,t.handleScroll=function(n){if(t.refElement.current){var s=t.getBounds(),a=i(s),e=t.previousPosition,o=t.props,p=o.onPositionChange,c=o.onEnter,r=o.onLeave,l=o.fireOnRapidScroll;if(t.previousPosition=a,e!==a){var u={currentPosition:a,previousPosition:e,event:n,waypointTop:s.waypointTop,waypointBottom:s.waypointBottom,viewportTop:s.viewportTop,viewportBottom:s.viewportBottom};null==p||p(u),1===a?null==c||c(u):1!==e&&4!==e||null==r||r(u),l&&(2===e&&0===a||0===e&&2===a)&&(null==c||c({currentPosition:1,previousPosition:e,event:n,waypointTop:s.waypointTop,waypointBottom:s.waypointBottom,viewportTop:s.viewportTop,viewportBottom:s.viewportBottom}),null==r||r({currentPosition:a,previousPosition:1,event:n,waypointTop:s.waypointTop,waypointBottom:s.waypointBottom,viewportTop:s.viewportTop,viewportBottom:s.viewportBottom}))}}},t}return(0,a.ZT)(t,n),t.prototype.componentDidMount=function(){var n=this;l.Z&&(this.cancelOnNextTick=(0,u.Z)((function(){n.cancelOnNextTick=null,function(n,t){if(n&&!r(n)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n")}(n.props.children,n.refElement.current),n.scrollableAncestor=n.findScrollableAncestor(),n.scrollEventListenerUnsubscribe=(0,p.Oo)(n.scrollableAncestor,"scroll",n.handleScroll,{passive:!0}),n.resizeEventListenerUnsubscribe=(0,p.Oo)(window,"resize",n.handleScroll,{passive:!0}),n.handleScroll(null)})))},t.prototype.componentDidUpdate=function(){var n=this;l.Z&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=(0,u.Z)((function(){n.cancelOnNextTick=null,n.handleScroll(null)}))))},t.prototype.componentWillUnmount=function(){var n,t,s;l.Z&&(null===(n=this.scrollEventListenerUnsubscribe)||void 0===n||n.call(this),null===(t=this.resizeEventListenerUnsubscribe)||void 0===t||t.call(this),null===(s=this.cancelOnNextTick)||void 0===s||s.cancel())},t.prototype.findScrollableAncestor=function(){var n=this.props,t=n.horizontal,s=n.scrollableAncestor;if(s)return s;for(var a=this.refElement.current;a.parentNode;){if((a=a.parentNode)===document.body)return window;var e=getComputedStyle(a),o=(t?e.getPropertyValue("overflow-x"):e.getPropertyValue("overflow-y"))||e.getPropertyValue("overflow");if("auto"===o||"scroll"===o)return a}return window},t.prototype.getBounds=function(){var n,t,s=this.props.horizontal,a=this.refElement.current.getBoundingClientRect(),e=a.left,o=a.top,p=a.right,c=a.bottom,r=s?e:o,i=s?p:c;if(this.scrollableAncestor===window)n=s?window.innerWidth:window.innerHeight,t=0;else{var l=this.scrollableAncestor.getBoundingClientRect();n=s?l.width:l.height,t=s?l.left:l.top}return{waypointTop:r,waypointBottom:i,viewportTop:t+this.getOffset("top",n),viewportBottom:t+n-this.getOffset("bottom",n)}},t.prototype.getOffset=function(n,t){var s,a,e=this.props.horizontal,o=n+"Offset",p="top"===n?"border"+(e?"Left":"Top")+"Width":"border"+(e?"Right":"Bottom")+"Width",c=this.props[o];if("auto"!==c)return function(n,t){var s=function(n){var t;if(t="number"==typeof n?n:parseFloat(n),!Number.isNaN(t)&&Number.isFinite(t))return t}(n);if("number"==typeof s)return s;if("string"==typeof n){var a=function(n){if("%"===n.slice(-1))return parseFloat(n.slice(0,-1))/100}(n);if("number"==typeof a)return a*t}}(c,t);if(this.scrollableAncestor===window){var r=getComputedStyle(document.documentElement),i=function(){return d(r.fontSize)};return null!==(s=h(r[p],i,i))&&void 0!==s?s:0}var l=getComputedStyle(this.scrollableAncestor);return i=function(){return d(l.fontSize)},null!==(a=h(l[p],i,(function(){return d(getComputedStyle(document.documentElement).fontSize)})))&&void 0!==a?a:0},t.prototype.render=function(){var n=this,t=this.props.children;if(!t)return(0,e.jsx)("span",{ref:this.refElement,style:{fontSize:0},className:"zent-waypoint-marker","data-zv":"10.0.0-rc.1"},void 0);var s=o.Children.only(t);return r(s)||(0,c.isForwardRef)(s)?(0,o.cloneElement)(s,{ref:function(t){n.refElement.current=t;var a=s.ref;a&&("function"==typeof a?a(t):a.current=t)}}):(0,o.cloneElement)(s,{innerRef:this.refElement})},t.defaultProps={topOffset:0,bottomOffset:0,horizontal:!1,fireOnRapidScroll:!0},t}(o.PureComponent)}}]);