(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{538:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return r}));s(21);var e=s(476),t=s.n(e),p=s(0),c=s.n(p),o=s(42);function i(n){return c.a.createElement(n.tag,t()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function l(n){return c.a.createElement(i,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function u(n){return c.a.createElement(i,{tag:"style",html:n.style})}p.Component;class r extends p.Component{componentDidMount(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(o.mc)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}render(){return c.a.createElement("div",{className:"zandoc-react-container",key:null},c.a.createElement(u,{style:'img[alt="zent-theme"] {\n    width: 514px;\n    height: 319px;\n  }'}),c.a.createElement(l,{html:'<h2 class="anchor-heading"><a href="#ding-zhi-zhu-ti">¶</a><a href="javascript:void(0)" id="ding-zhi-zhu-ti" class="anchor-point"></a>定制主题</h2>\n<p>Zent 支持主题定制，目前仅支持组件库颜色的定制。</p>\n<p><img src="https://img.yzcdn.cn/zanui/react/zent-theme.png" alt="zent-theme"></p>\n<h3 class="anchor-heading"><a href="#shi-yong-css-variables">¶</a><a href="javascript:void(0)" id="shi-yong-css-variables" class="anchor-point"></a>使用 CSS Variables</h3>\n<p>Zent 使用CSS Variables定制主题色，对于不支持 CSS Variables 的浏览器，会降级到默认主题色，可以通过重新构建 SCSS 定制主题色。</p>\n<p>通过 CSS 变量覆盖主题色示例：</p>\n<pre><code class="language-css"><span class="token selector"><span class="token pseudo-class">:root</span></span> <span class="token punctuation">{</span>\n  <span class="token variable">--theme-primary-1</span><span class="token punctuation">:</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-2</span><span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">177</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-3</span><span class="token punctuation">:</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-4</span><span class="token punctuation">:</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">240</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-5</span><span class="token punctuation">:</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">242</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-6</span><span class="token punctuation">:</span> <span class="token number">126</span><span class="token punctuation">,</span> <span class="token number">136</span><span class="token punctuation">,</span> <span class="token number">243</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-7</span><span class="token punctuation">:</span> <span class="token number">176</span><span class="token punctuation">,</span> <span class="token number">182</span><span class="token punctuation">,</span> <span class="token number">248</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-8</span><span class="token punctuation">:</span> <span class="token number">242</span><span class="token punctuation">,</span> <span class="token number">243</span><span class="token punctuation">,</span> <span class="token number">254</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>CSS 变量主题色生成可以参考<a href="https://gist.github.com/cpylua/247a2ac8da6adfe2354daceb352dcdea">这个链接</a>。</p>\n<h3 class="anchor-heading"><a href="#chong-xin-gou-jian-scss-ding-zhi-zhu-ti-se">¶</a><a href="javascript:void(0)" id="chong-xin-gou-jian-scss-ding-zhi-zhu-ti-se" class="anchor-point"></a>重新构建 SCSS 定制主题色</h3>\n<p>Zent 的样式使用 <a href="https://sass-lang.com">scss</a> 开发，我们提供了一个预定义的扩展文件来支持主题定制，通过在 Zent 仓库中修改配置，生成一份定制的 css 样式。</p>\n<p>这种方式对业务项目是非侵入式的，样式的定制和业务项目完全独立；但也有一个问题，就是每次更新 Zent 组件库都要重新生成一份定制主题。</p>\n<h4 class="anchor-heading"><a href="#ding-zhi-fang-fa">¶</a><a href="javascript:void(0)" id="ding-zhi-fang-fa" class="anchor-point"></a>定制方法</h4>\n<ol>\n<li>克隆 Zent <a href="https://github.com/youzan/zent">源码</a>并安装依赖</li>\n<li>在 <code>packages/zent/assets/theme</code> 目录下找到一个名为 <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_override.scss"><code>_override.scss</code></a> 的文件，这个文件是预留用来覆盖默认主题变量的，所有主题变量可以在同目录的 <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_default.scss"><code>_default.scss</code></a> 文件内找到</li>\n<li>在 <code>packages/zent</code> 目录下面执行 <code>yarn theme</code></li>\n<li>定制的主题样式文件会生成在 <code>packages/zent/css</code> 目录下</li>\n</ol>'}))}}}}]);