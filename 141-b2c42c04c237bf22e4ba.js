(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{689:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var s=t(20),e=t.n(s),o=t(4),p=t(1),i=t.n(p),c=t(46);function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,s)}return t}function l(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){e()(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}var d=function(){return Object(o.jsx)(c.Tb,{style:{lineHeight:"28px"},activeIndex:1,activeStyle:{backgroundColor:"#f48f42"},highlightStyle:{backgroundColor:"#ffd54f"},searchWords:["Chain","Chomps"],textToHighlight:"Chain Chomps (occasionally Chain-Chomps) are common enemies in the Mario franchise. They first appeared in Super Mario Bros. 3. Chain Chomps bear a resemblance to a ball and chain and are typified by their large, tooth-filled maws and incessant biting. Shigeru Miyamoto's inspiration for the Chain Chomps was from a childhood experience: a dog once ran up to him and tried to bite him, but the dog's chain held it back. As a result, Chain Chomps also possess canine qualities, such as barking, and are commonly used as guard dogs throughout the Mario series. Chain Chomps were originally created as an enemy for The Legend of Zelda series, but ended up being used for the Mario franchise first. Many Chomps have been part of the Koopa Troop, though a couple of them have been shown to be independent. "})},u=function(){return Object(o.jsx)(c.Tb,{style:{lineHeight:"28px"},activeIndex:1,activeClassName:"zent-demo-text-mark-active",highlightClassName:"zent-demo-text-mark-highlight",searchWords:["Chomps"],textToHighlight:"Chain Chomps (occasionally Chain-Chomps) are common enemies in the Mario franchise. They first appeared in Super Mario Bros. 3. Chain Chomps bear a resemblance to a ball and chain and are typified by their large, tooth-filled maws and incessant biting. Shigeru Miyamoto's inspiration for the Chain Chomps was from a childhood experience: a dog once ran up to him and tried to bite him, but the dog's chain held it back. As a result, Chain Chomps also possess canine qualities, such as barking, and are commonly used as guard dogs throughout the Mario series. Chain Chomps were originally created as an enemy for The Legend of Zelda series, but ended up being used for the Mario franchise first. Many Chomps have been part of the Koopa Troop, though a couple of them have been shown to be independent. "})},h=function(){return Object(o.jsx)(c.Tb,{style:{lineHeight:"28px"},activeIndex:1,activeClassName:"zent-demo-text-mark-active",highlightClassName:{Chomps:"zent-demo-text-mark-highlight",Chain:"zent-demo-text-mark-highlight2"},searchWords:["Chomps","Chain"],textToHighlight:"Chain Chomps (occasionally Chain-Chomps) are common enemies in the Mario franchise. They first appeared in Super Mario Bros. 3. Chain Chomps bear a resemblance to a ball and chain and are typified by their large, tooth-filled maws and incessant biting. Shigeru Miyamoto's inspiration for the Chain Chomps was from a childhood experience: a dog once ran up to him and tried to bite him, but the dog's chain held it back. As a result, Chain Chomps also possess canine qualities, such as barking, and are commonly used as guard dogs throughout the Mario series. Chain Chomps were originally created as an enemy for The Legend of Zelda series, but ended up being used for the Mario franchise first. Many Chomps have been part of the Koopa Troop, though a couple of them have been shown to be independent. "})};function m(n){return Object(o.jsx)(n.tag,l(l({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function k(n){return Object(o.jsx)(m,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function g(n){return Object(o.jsx)(m,{tag:"style",html:n.style})}class b extends p.Component{constructor(...n){super(...n),e()(this,"state",{showCode:!1}),e()(this,"toggle",()=>{this.setState({showCode:!this.state.showCode})})}render(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return Object(o.jsxs)("div",{className:"zandoc-react-demo",children:[Object(o.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),Object(o.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[Object(o.jsx)("div",{className:"zandoc-react-demo__title",children:Object(o.jsx)("p",{children:t||""})}),Object(o.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&Object(o.jsx)("pre",{className:"zandoc-react-demo__code",children:Object(o.jsx)(m,{tag:"code",html:s,attributes:{className:"language-jsx"}})})]})}}class f extends p.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(c.nc)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}render(){return i.a.createElement("div",{className:"zandoc-react-container",key:null},i.a.createElement(g,{style:".zent-demo-text-mark-highlight {\n\tbackground-color: #ffd54f;\n}\n\n.zent-demo-text-mark-active {\n\tbackground-color: #f48f42;\n}\n\n.zent-demo-text-mark-highlight2 {\n\tbackground-color: #df4545;\n}"}),i.a.createElement(k,{html:'<h2 class="anchor-heading"><a href="#textmark">¶</a><a href="javascript:void(0)" id="textmark" class="anchor-point"></a>TextMark</h2>\n<p>Highlight selected words in a string.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),i.a.createElement(b,{title:"Inline styles",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">TextMark</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TextMark</span></span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lineHeight<span class="token operator">:</span> <span class="token string">\'28px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">activeIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">activeStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#f48f42\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">highlightStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'#ffd54f\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">searchWords</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"Chain"</span><span class="token punctuation">,</span> <span class="token string">"Chomps"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">textToHighlight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Chain Chomps (occasionally Chain-Chomps) are common enemies in the Mario franchise. They first appeared in Super Mario Bros. 3. Chain Chomps bear a resemblance to a ball and chain and are typified by their large, tooth-filled maws and incessant biting. Shigeru Miyamoto<span class="token punctuation">\'</span>s inspiration for the Chain Chomps was from a childhood experience: a dog once ran up to him and tried to bite him, but the dog<span class="token punctuation">\'</span>s chain held it back. As a result, Chain Chomps also possess canine qualities, such as barking, and are commonly used as guard dogs throughout the Mario series. Chain Chomps were originally created as an enemy for The Legend of Zelda series, but ended up being used for the Mario franchise first. Many Chomps have been part of the Koopa Troop, though a couple of them have been shown to be independent. <span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},i.a.createElement(d)),i.a.createElement(b,{title:"External CSS",id:"Democlass",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">TextMark</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TextMark</span></span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lineHeight<span class="token operator">:</span> <span class="token string">\'28px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">activeIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">activeClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-demo-text-mark-active<span class="token punctuation">"</span></span>\n    <span class="token attr-name">highlightClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-demo-text-mark-highlight<span class="token punctuation">"</span></span>\n    <span class="token attr-name">searchWords</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"Chomps"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">textToHighlight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Chain Chomps (occasionally Chain-Chomps) are common enemies in the Mario franchise. They first appeared in Super Mario Bros. 3. Chain Chomps bear a resemblance to a ball and chain and are typified by their large, tooth-filled maws and incessant biting. Shigeru Miyamoto<span class="token punctuation">\'</span>s inspiration for the Chain Chomps was from a childhood experience: a dog once ran up to him and tried to bite him, but the dog<span class="token punctuation">\'</span>s chain held it back. As a result, Chain Chomps also possess canine qualities, such as barking, and are commonly used as guard dogs throughout the Mario series. Chain Chomps were originally created as an enemy for The Legend of Zelda series, but ended up being used for the Mario franchise first. Many Chomps have been part of the Koopa Troop, though a couple of them have been shown to be independent. <span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},i.a.createElement(u)),i.a.createElement(b,{title:"Different styles for different search words",id:"Demomulti",src:'<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">TextMark</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TextMark</span></span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lineHeight<span class="token operator">:</span> <span class="token string">\'28px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">activeIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">activeClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zent-demo-text-mark-active<span class="token punctuation">"</span></span>\n    <span class="token attr-name">highlightClassName</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      <span class="token string">\'Chomps\'</span><span class="token operator">:</span> <span class="token string">\'zent-demo-text-mark-highlight\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'Chain\'</span><span class="token operator">:</span> <span class="token string">\'zent-demo-text-mark-highlight2\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">searchWords</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Chomps\'</span><span class="token punctuation">,</span> <span class="token string">\'Chain\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">textToHighlight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Chain Chomps (occasionally Chain-Chomps) are common enemies in the Mario franchise. They first appeared in Super Mario Bros. 3. Chain Chomps bear a resemblance to a ball and chain and are typified by their large, tooth-filled maws and incessant biting. Shigeru Miyamoto<span class="token punctuation">\'</span>s inspiration for the Chain Chomps was from a childhood experience: a dog once ran up to him and tried to bite him, but the dog<span class="token punctuation">\'</span>s chain held it back. As a result, Chain Chomps also possess canine qualities, such as barking, and are commonly used as guard dogs throughout the Mario series. Chain Chomps were originally created as an enemy for The Legend of Zelda series, but ended up being used for the Mario franchise first. Many Chomps have been part of the Koopa Troop, though a couple of them have been shown to be independent. <span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},i.a.createElement(h)),i.a.createElement(k,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>textToHighlight</td>\n<td>Text to be searched</td>\n<td>string</td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>searchWords</td>\n<td>Search words, will be converted to RegExp</td>\n<td>Array&#x3C;string \n|\n RegExp></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>highlightClassName</td>\n<td>Highlight CSS class name, you can have different class names for each search word</td>\n<td>string \n|\n object</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>highlightStyle</td>\n<td>Highlight inline style</td>\n<td>object</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>activeClassName</td>\n<td>Active CSS class name</td>\n<td>string</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>activeStyle</td>\n<td>Active inline style</td>\n<td>object</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>activeIndex</td>\n<td>Active index</td>\n<td>number</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>unhighlightClassName</td>\n<td>Unhighlight CSS class name</td>\n<td>string</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>unhighlightStyle</td>\n<td>Unhighlight inline style</td>\n<td>object</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>highlightTag</td>\n<td>Component to render highlighted text</td>\n<td>React.ElementType</td>\n<td>No</td>\n<td><code>\'mark\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>sanitize</td>\n<td>Preprocessor for search words and text</td>\n<td>(str: string) => string</td>\n<td>No</td>\n<td>identity</td>\n<td></td>\n</tr>\n<tr>\n<td>autoEscape</td>\n<td>Automatically escape RegExp special characters in search words</td>\n<td>boolean</td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>caseSensitive</td>\n<td>Case sensitive match</td>\n<td>boolean</td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>findChunks</td>\n<td>Customize matching algorithm</td>\n<td>(options) => Array&#x3C;{start: number; end: number; highlight: boolean;}></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom top level CSS class name</td>\n<td>string</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>Custom top level inline style</td>\n<td>object</td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);