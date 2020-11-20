(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{990:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return g}));var t=s(828),e=s.n(t),p=s(827),o=s.n(p),c=s(0),l=s.n(c),u=s(90),i=function(){class n extends l.a.Component{constructor(...n){super(...n),o()(this,"state",{list:[{name:"Arvin"},{name:"Jack"},{name:"Bob"},{name:"Nick"}]}),o()(this,"handleChange",n=>{this.setState({list:n})})}render(){var n=this.state.list;return l.a.createElement(u.Sortable,{items:n,onChange:this.handleChange},n.map(({name:n})=>l.a.createElement(u.Card,{key:n},n)))}}return l.a.createElement(n,null)},r=function(){class n extends l.a.Component{constructor(...n){super(...n),o()(this,"state",{list:[{name:"Arvin"},{name:"Jack"},{name:"Bob"},{name:"Nick"},{name:"Mark"},{name:"Leo"},{name:"James"},{name:"Wade"}]}),o()(this,"handleAdd",()=>{var n=this.state.list;this.setState({list:[...n,{name:"Custom".concat(n.length+1)}]})}),o()(this,"handleRemove",n=>{var a=this.state.list.filter((a,s)=>s!==n);this.setState({list:a})}),o()(this,"handleChange",n=>{this.setState({list:n})})}render(){var n=this.state.list;return l.a.createElement(u.Sortable,{className:"demo-sortable",items:n,filterClass:"demo-sortable-add",dragClass:"demo-sortable-drag",onChange:this.handleChange},n.map(({name:n},a)=>l.a.createElement("div",{className:"demo-sortable-item",key:n},n,l.a.createElement(u.Icon,{className:"demo-sortable-icon",type:"close",onClick:()=>this.handleRemove(a)}))),l.a.createElement("div",{className:"demo-sortable-add",onClick:this.handleAdd},l.a.createElement(u.Icon,{type:"plus"})))}}return l.a.createElement(n,null)};function d(n){return l.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function k(n){return l.a.createElement(d,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function m(n){return l.a.createElement(d,{tag:"style",html:n.style})}class h extends c.Component{constructor(...n){super(...n),o()(this,"state",{showCode:!1}),o()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return l.a.createElement("div",{className:"zandoc-react-demo"},l.a.createElement("div",{className:"zandoc-react-demo__preview"},e),l.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},l.a.createElement("div",{className:"zandoc-react-demo__title"},l.a.createElement("p",null,s||"")),l.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&l.a.createElement("pre",{className:"zandoc-react-demo__code"},l.a.createElement(d,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}class g extends c.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(u.smoothScroll)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return l.a.createElement("div",{className:"zandoc-react-container",key:null},l.a.createElement(m,{style:".demo-sortable {\n\t\tpadding: 0 140px;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: flex-start;\n\t}\n\n\t.demo-sortable-item,\n\t.demo-sortable-add {\n\t\tposition: relative;\n\t\ttext-align: center;\n\t\tline-height: 100px;\n\t\tborder: 1px solid #bbb;\n\t\tborder-radius: 4px;\n\t\tflex: 0 0 100px;\n\t\theight: 100px;\n\t\tmargin: 0 20px 20px 0;\n\t}\n\n\t.demo-sortable-add {\n\t\tcursor: pointer;\n\t}\n\n\t.demo-sortable-item:hover .demo-sortable-icon {\n\t\t\tdisplay: block;\n\t\t}\n\n\t.demo-sortable-drag .demo-sortable-icon {\n\t\t\tdisplay: none !important;\n\t\t}\n\n\t.demo-sortable-icon {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tfont-size: 10px;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tright: 10px;\n\t}"}),l.a.createElement(k,{html:'<h2 class="anchor-heading"><a href="#sortable">¶</a><a href="javascript:void(0)" id="sortable" class="anchor-point"></a>Sortable</h2>\n<p>Sortable is used for drag and drop elements of a container</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),l.a.createElement(h,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sortable</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Card</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Arvin\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Jack\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Bob\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Nick\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> items\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sortable</span></span>\n        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          list<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span> <span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sortable</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},l.a.createElement(i)),l.a.createElement(h,{title:"Editable List",id:"Demoeditablelist",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Sortable</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Card</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Icon</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Arvin\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Jack\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Bob\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Nick\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Mark\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Leo\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'James\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">\'Wade\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Custom</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>list<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleRemove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">removeIndex</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> newList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token method function property-access">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> index <span class="token operator">!==</span> removeIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> newList\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      list<span class="token operator">:</span> items\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sortable</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable<span class="token punctuation">"</span></span>\n        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token attr-name">filterClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-add<span class="token punctuation">"</span></span>\n        <span class="token attr-name">dragClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-drag<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleChange</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>\n          list<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">,</span> index</span> <span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n                <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-item<span class="token punctuation">"</span></span>\n                <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>\n              <span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span>name<span class="token punctuation">}</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span>\n                  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-icon<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleRemove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-sortable-add<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">handleAdd</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Icon</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sortable</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Simple</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},l.a.createElement(r)),l.a.createElement(k,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#basic-api">¶</a><a href="javascript:void(0)" id="basic-api" class="anchor-point"></a><strong><code>Basic API</code></strong></h4>\n<table class="table">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>tag</td>\n<td>the HTML tagName of the container element</td>\n<td>string</td>\n<td><code>\'div\'</code></td>\n<td>All legal HTML tagNames</td>\n</tr>\n<tr>\n<td>items</td>\n<td>an array of sorted elements</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>callback function when sorting is completed</td>\n<td>(newItems: array): void</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>filterClass</td>\n<td>the className of the elements that can not be sort</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom classname</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>⚠️Notice：basic api can fit almost all the demand,items and onChange must appear at the same time，as a controlled component,you need to update the data by yourself from the onChange callback function,if more complex needs,you can Instead of using items and onChange, use the advanced API below for more complex situation.</p>\n<h4 class="anchor-heading"><a href="#advanced-api">¶</a><a href="javascript:void(0)" id="advanced-api" class="anchor-point"></a><strong><code>Advanced API</code></strong></h4>\n<table class="table">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>sort</td>\n<td>is support drag and drop sort</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>group</td>\n<td>grouping for multi-container dragging(see detail at \n<a href="#group">Group</a>\n)</td>\n<td>string or object</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>delay</td>\n<td>time to define when the sorting should start(ms)</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>animation</td>\n<td>animation speed moving items when sorting(ms)</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>handle</td>\n<td>drag handle selector within list items</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>ghostClass</td>\n<td>class name for the drop placeholder</td>\n<td>string</td>\n<td><code>\'zent-ghost\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>chosenClass</td>\n<td>class name for the chosen item</td>\n<td>string</td>\n<td><code>\'zent-chosen\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dragClass</td>\n<td>class name for the dragging item</td>\n<td>string</td>\n<td><code>\'zent-drag\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>forceFallback</td>\n<td>ignore the HTML5 DnD behaviour and force the fallback to kick in</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>fallbackClass</td>\n<td>class name for the cloned DOM Element when using forceFallback</td>\n<td>string</td>\n<td><code>\'zent-fallback\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>fallbackOnBody</td>\n<td>appends the cloned DOM Element into the Document\'s Body</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>false</code>\n, \n<code>true</code></td>\n</tr>\n<tr>\n<td>fallbackTolerance</td>\n<td>Specify how far the mouse should move before it\'s considered as a drag(px)</td>\n<td>number</td>\n<td>0</td>\n<td></td>\n</tr>\n<tr>\n<td>scroll</td>\n<td>whether to allow the screen to scroll while dragging</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>scrollFn</td>\n<td>if you have custom scrollbar scrollFn may be used for autoscrolling</td>\n<td>(offsetX: number, offsetY: number, originalEvent: Event): void</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>scrollSensitivity</td>\n<td>how near the mouse must be to an edge to start scrolling(px)</td>\n<td>number</td>\n<td>30</td>\n<td></td>\n</tr>\n<tr>\n<td>scrollSpeed</td>\n<td>the scroll speed(px/s)</td>\n<td>number</td>\n<td>10</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#advanced-event-api">¶</a><a href="javascript:void(0)" id="advanced-event-api" class="anchor-point"></a><strong><code>Advanced Event API</code></strong></h4>\n<table class="table">\n<thead>\n<tr>\n<th>Props</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>setData</td>\n<td>used to call the HTML5 native DataTransfer.setData method</td>\n<td>(dataTransfer: object, dragEl: HTMLElement): void</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onChoose</td>\n<td>the callback function when element is chosen</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onStart</td>\n<td>the callback function when element dragging started</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onEnd</td>\n<td>the callback function when element dragging ended</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onAdd</td>\n<td>the callback function when element is dropped into the list from another list</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onUpdate</td>\n<td>the callback function when changed sorting within list</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onSort</td>\n<td>the callback function called by any change to the list (add / update / remove)</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onRemove</td>\n<td>the callback function when element is removed from the list into another list</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onFilter</td>\n<td>the callback function when attempt to drag a filtered element</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onMove</td>\n<td>the callback function when you move an item in the list or between lists</td>\n<td>(e: Event, originEvent: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onClone</td>\n<td>the callback function when creating a clone of element</td>\n<td>(e: Event) (see detail at \n<a href="#event-callback">Event callback</a>\n)</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#group">¶</a><a href="javascript:void(0)" id="group" class="anchor-point"></a>Group</h3>\n<p>To drag elements from one list into another, both lists must have the same <code>group</code> value. You can also define whether lists can give away, give and keep a copy (<code>clone</code>), and receive elements.</p>\n<ul>\n<li>name: <code>string</code> group name</li>\n<li>pull: <code>true | false | \'clone\' | function</code> ability to move from the list. <code>\'clone\'</code> copy the item, rather than move.</li>\n<li>put: <code>true | false | [\'foo\', \'bar\'] | function</code> whether elements can be added from other lists, or an array of group names from which elements can be taken.</li>\n<li>revertClone: <code>boolean</code> revert cloned element to initial position after moving to a another list.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#event-callback">¶</a><a href="javascript:void(0)" id="event-callback" class="anchor-point"></a>Event callback</h3>\n<ul>\n<li>onChoose, onStart:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">oldIndex</span><span class="token punctuation">;</span>  <span class="token comment">// lement index within parent(number)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onEnd, onAdd, onUpdate, onSort, onRemove:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">item</span><span class="token punctuation">;</span>  <span class="token comment">// dragged HTMLElement(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">to</span><span class="token punctuation">;</span>    <span class="token comment">// target list(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token keyword module">from</span><span class="token punctuation">;</span>  <span class="token comment">// previous list(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">oldIndex</span><span class="token punctuation">;</span>  <span class="token comment">// element\'s old index within old parent(number)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">newIndex</span><span class="token punctuation">;</span>  <span class="token comment">// element\'s new index within new parent(number)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onFilter:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">item</span><span class="token punctuation">;</span>  <span class="token comment">// HTMLElement receiving the `mousedown|tapstart` event.(HTMLElement)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onMove:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt， <span class="token doc-comment comment">/**Event*/</span>originalEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">dragged</span><span class="token punctuation">;</span> <span class="token comment">// dragged HTMLElement(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">draggedRect</span><span class="token punctuation">;</span> <span class="token comment">// TextRectangle {left, top, right, bottom}</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">related</span><span class="token punctuation">;</span> <span class="token comment">// HTMLElement on which have guided(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">relatedRect</span><span class="token punctuation">;</span> <span class="token comment">// TextRectangle {left, top, right, bottom}</span>\n    originalEvent<span class="token punctuation">.</span><span class="token property-access">clientY</span><span class="token punctuation">;</span> <span class="token comment">// mouse position</span>\n    <span class="token comment">// return false; — for cancel</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<ul>\n<li>onClose:</li>\n</ul>\n<pre><code class="language-js"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token doc-comment comment">/**Event*/</span>evt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">item</span><span class="token punctuation">;</span>  <span class="token comment">// the origin HTMLElement(HTMLElement)</span>\n    evt<span class="token punctuation">.</span><span class="token property-access">clone</span> <span class="token comment">// the cloned HTMLElement(HTMLElement)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>'}))}}}}]);