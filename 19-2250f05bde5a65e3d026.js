(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{934:function(n,s,a){"use strict";a.r(s),a.d(s,"default",(function(){return r}));a(827);var e=a(828),t=a.n(e),o=a(0),p=a.n(o),c=a(90);function i(n){return p.a.createElement(n.tag,t()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function u(n){return p.a.createElement(i,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function l(n){return p.a.createElement(i,{tag:"style",html:n.style})}o.Component;class r extends o.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&Object(c.smoothScroll)(document.documentElement,0,function n(s,a){for(;s;)return s.offsetTop&&"static"!==getComputedStyle(s).position&&(a+=s.offsetTop),n(s.parentNode,a);return a}(s,-9))}}render(){return p.a.createElement("div",{className:"zandoc-react-container",key:null},p.a.createElement(l,{style:'img[alt="zent-theme"] {\n    width: 514px;\n    height: 319px;\n  }'}),p.a.createElement(u,{html:'<h2 class="anchor-heading"><a href="#themes">¶</a><a href="javascript:void(0)" id="themes" class="anchor-point"></a>Themes</h2>\n<p>Zent supports themes, only colors are customizable for now.</p>\n<p><img src="https://img.yzcdn.cn/zanui/react/zent-theme.png" alt="zent-theme"></p>\n<h3 class="anchor-heading"><a href="#customize-through-css-variable">¶</a><a href="javascript:void(0)" id="customize-through-css-variable" class="anchor-point"></a>Customize through CSS variables</h3>\n<p>Zent uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS Variables</a>, so it is possible to customize themes via custom CSS variables.</p>\n<p>Override theme color with CSS variables:</p>\n<pre><code class="language-css"><span class="token selector"><span class="token pseudo-class">:root</span></span> <span class="token punctuation">{</span>\n  <span class="token variable">--theme-primary-1</span><span class="token punctuation">:</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-2</span><span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">177</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-3</span><span class="token punctuation">:</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-4</span><span class="token punctuation">:</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">240</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-5</span><span class="token punctuation">:</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">242</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-6</span><span class="token punctuation">:</span> <span class="token number">126</span><span class="token punctuation">,</span> <span class="token number">136</span><span class="token punctuation">,</span> <span class="token number">243</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-7</span><span class="token punctuation">:</span> <span class="token number">176</span><span class="token punctuation">,</span> <span class="token number">182</span><span class="token punctuation">,</span> <span class="token number">248</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-8</span><span class="token punctuation">:</span> <span class="token number">242</span><span class="token punctuation">,</span> <span class="token number">243</span><span class="token punctuation">,</span> <span class="token number">254</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>It is recommended that these CSS variables are generated by code, here is an <a href="https://gist.github.com/cpylua/247a2ac8da6adfe2354daceb352dcdea">example</a>.</p>\n<h3 class="anchor-heading"><a href="#customize-through-rebuilding-s">¶</a><a href="javascript:void(0)" id="customize-through-rebuilding-s" class="anchor-point"></a>Customize through rebuilding SCSS</h3>\n<p>Styles in Zent are written in <a href="https://sass-lang.com">scss</a>, we have a builtin theme extension file to support custom themes. You can build custom styles using this extension file.</p>\n<p>This method is non-intrusive, but you have to manually build your custom theme every time you upgrade Zent.</p>\n<h4 class="anchor-heading"><a href="#build-steps">¶</a><a href="javascript:void(0)" id="build-steps" class="anchor-point"></a>Build Steps</h4>\n<ol>\n<li>Clone Zent from <a href="https://github.com/youzan/zent">github</a> and install dependencies</li>\n<li>Create a file named <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_override_.scss"><code>_override.scss</code></a> in <code>packages/zent/assets</code>, define your custom colors in this file. All customizable colors are defined in <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_default.scss"><code>_default.scss</code></a> within the same directory.</li>\n<li>Run <code>yarn theme</code> within <code>packages/zent</code></li>\n<li>Your custom theme styles are in <code>packages/zent/css</code>.</li>\n</ol>'}))}}}}]);