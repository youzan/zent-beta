(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{622:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));t(21);var e=t(476),s=t.n(e),o=t(0),p=t.n(o),c=t(42);function r(n){return p.a.createElement(n.tag,s()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function i(n){return p.a.createElement(r,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function l(n){return p.a.createElement(r,{tag:"style",html:n.style})}o.Component;class d extends o.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(c.mc)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}render(){return p.a.createElement("div",{className:"zandoc-react-container",key:null},p.a.createElement(l,{style:""}),p.a.createElement(i,{html:'<h2 class="anchor-heading"><a href="#writing-documentation">¶</a><a href="javascript:void(0)" id="writing-documentation" class="anchor-point"></a>Writing Documentation</h2>\n<h4 class="anchor-heading"><a href="#file-format">¶</a><a href="javascript:void(0)" id="file-format" class="anchor-point"></a>File Format</h4>\n<p>It\'s Markdown.</p>\n<p>But in order to support demos and internationalization, there\'re some things you need to know.</p>\n<p>Keep reading.</p>\n<h4 class="anchor-heading"><a href="#title">¶</a><a href="javascript:void(0)" id="title" class="anchor-point"></a>Title</h4>\n<p>Titles begin from <code>h2</code>(e.g. <code>##</code> in Markdown), <code>h3</code> and <code>h4</code> is enough in most cases.</p>\n<p>Don\'t nesting too many levels.</p>\n<h4 class="anchor-heading"><a href="#description">¶</a><a href="javascript:void(0)" id="description" class="anchor-point"></a>Description</h4>\n<p>You can put a component description below the first title. Be concise.</p>\n<h4 class="anchor-heading"><a href="#guides-optional">¶</a><a href="javascript:void(0)" id="guides-optional" class="anchor-point"></a>Guides (Optional)</h4>\n<p>You can have a usage guide following the description, starts with an <code>h3</code>.</p>\n<h4 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h4>\n<p>Demos are written in separate files in <code>demos</code> sub-directory.</p>\n<p>Demos are automatically inserted into the final documentation by our loader.</p>\n<pre><code class="language-text"><span class="token operator">--</span><span class="token operator">-</span>\norder<span class="token operator">:</span> <span class="token number">1</span>                          <span class="token comment">// `order` defines the order in the final documentation, smaller first</span>\nzh<span class="token operator">-</span><span class="token constant">CN</span><span class="token operator">:</span>                            <span class="token comment">// Start of Chinese string definitions</span>\n  title<span class="token operator">:</span> 基础用法                  <span class="token comment">// Required, demo title</span>\n  content<span class="token operator">:</span> 公告内容                <span class="token comment">// `content` will be replace as `公告内容` in Chinese documentaion</span>\nen<span class="token operator">-</span><span class="token constant">US</span><span class="token operator">:</span>                            <span class="token comment">// Start of English string definitions</span>\n  title<span class="token operator">:</span> <span class="token maybe-class-name">Basic</span>                    <span class="token comment">// Required, demo title</span>\n  content<span class="token operator">:</span> <span class="token maybe-class-name">Alert</span> content          <span class="token comment">// `content` will be replace as `Alert content` in English documentaion</span>\n<span class="token operator">--</span><span class="token operator">-</span>\n\n<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">jsx\nimport { Alert } from \'zent\';\nReactDOM.render(                  // ReactDOM.render is the entry point\n  &#x3C;Alert>{i18n.content}&#x3C;/Alert>   // The component you want to render\n  , mountNode                     // </span><span class="token template-punctuation string">`</span></span>mountNode<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"> is predefined\n);\n</span><span class="token template-punctuation string">`</span></span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>\n\n<span class="token comment">// It\'s precss</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>style</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">.</span><span class="token property-access">zent</span><span class="token operator">-</span>badge <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token property-access">nested</span> <span class="token punctuation">{</span>\n      background<span class="token operator">:</span> red<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>style</span><span class="token punctuation">></span></span></code></pre>\n<p>A demo can have three parts:</p>\n<ul>\n<li>\n<p>YAML configuration</p>\n<ul>\n<li><code>order</code> and <code>title</code> are required</li>\n</ul>\n</li>\n<li>\n<p>JavaScript code</p>\n<ul>\n<li>Use <code>i18n.varName</code> as a placeholder to texts, and define <code>varName</code> in YAML.</li>\n</ul>\n</li>\n<li>\n<p>styles(optional)</p>\n<ul>\n<li>You don\'t need this in most cases</li>\n</ul>\n</li>\n</ul>\n<p>Some rules for writing demos:</p>\n<ul>\n<li>Start from the basics</li>\n<li>Orthogonal: one demo for one senario</li>\n</ul>\n<h4 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h4>\n<p>Use a table for your APIs, the table should have these columns:</p>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>visible</td>\n<td>Show or hide</td>\n<td>bool</td>\n<td>No</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n</tbody>\n</table>'}))}}}}]);