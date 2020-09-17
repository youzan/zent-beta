(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1005:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return R}));var t=s(917),e=s.n(t),o=s(919),p=s.n(o),c=s(911),l=s.n(c),u=s(912),r=s.n(u),i=s(570),d=s.n(i),k=s(913),m=s.n(k),h=s(914),f=s.n(h),g=s(915),y=s.n(g),v=s(916),w=s.n(v),b=s(0),E=s.n(b),z=s(152),M=s(169);function _(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=y()(n);if(a){var e=y()(this).constructor;s=Reflect.construct(t,arguments,e)}else s=t.apply(this,arguments);return f()(this,s)}}var C=function(){var n=function(n){m()(s,n);var a=_(s);function s(){var n;l()(this,s);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n=a.call.apply(a,[this].concat(e)),w()(d()(n),"state",{list:[1,2,3,4,5,6,7,8,9,10]}),n}return r()(s,[{key:"loadMore",value:function(n){var a=this,s=this.state.list,t=s.slice(s.length-10).map((function(n){return n+10}));setTimeout((function(){a.setState({list:[].concat(p()(s),p()(t))}),n&&n()}),500)}},{key:"render",value:function(){var n=this.state.list;return E.a.createElement(M.InfiniteScroller,{className:"infinite-scroller-demo",hasMore:!0,loadMore:this.loadMore.bind(this)},n.map((function(n){return E.a.createElement(M.Card,{key:n},n)})))}}]),s}(E.a.Component);return E.a.createElement(n,null)};function N(n){return E.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return E.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function L(n){return E.a.createElement(N,{tag:"style",html:n.style})}var j=function(n){m()(s,n);var a=_(s);function s(){var n;l()(this,s);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n=a.call.apply(a,[this].concat(e)),w()(d()(n),"state",{showCode:!1}),w()(d()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return r()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},e),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(N,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(b.Component),R=function(n){m()(s,n);var a=_(s);function s(){return l()(this,s),a.apply(this,arguments)}return r()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(z.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(L,{style:".infinite-scroller-demo {\n\theight: 300px;\n}"}),E.a.createElement(S,{html:'<h2 class="anchor-heading"><a href="#infinitescroller-wu-xian-gun-dong-zu-jian">¶</a><a href="javascript:void(0)" id="infinitescroller-wu-xian-gun-dong-zu-jian" class="anchor-point"></a>InfiniteScroller 无限滚动组件</h2>\n<p>无限滚动组件</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>常用于长列表内容的懒加载</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),E.a.createElement(j,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">InfiniteScroller</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token parameter">closeLoading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> latestList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newList <span class="token operator">=</span> latestList<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token arrow operator">=></span> item <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>list<span class="token punctuation">,</span> <span class="token spread operator">...</span>newList<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      closeLoading <span class="token operator">&amp;&amp;</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InfiniteScroller</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infinite-scroller-demo<span class="token punctuation">"</span></span>\n        <span class="token attr-name">hasMore</span>\n        <span class="token attr-name">loadMore</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">loadMore</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">InfiniteScroller</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(C)),E.a.createElement(S,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>hasMore</td>\n<td>是否还有更多数据待加载</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loadMore</td>\n<td>加载更多的回调函数，如果函数接收参数则会传入一个停止 loading 效果的回调</td>\n<td><code>(() => Promise&#x3C;unknown>) | ((stopLoading?: () => void) => void)</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>skipLoadOnMount</td>\n<td>初始化时是否触发一次数据加载</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>useWindow</td>\n<td>是否使用 \n<code>window</code>\n 作为滚动容器</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>loader</td>\n<td>加载时显示的内容</td>\n<td><code>ReactNode</code></td>\n<td><code>BlockLoading</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#loadmore">¶</a><a href="javascript:void(0)" id="loadmore" class="anchor-point"></a>loadMore</h3>\n<ul>\n<li>当异步加载时，期望传入的 <code>loadMore</code> 函数的返回值是一个 <code>Promise</code> 对象，用于组件控制 loading 的显示</li>\n<li>你也可以使用 <code>loadMore</code> 的参数 <code>stopLoading</code> 手动停止 loading，此时不需要返回 <code>Promise</code></li>\n</ul>'}))}}]),s}(b.Component)}}]);