(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[3420],{33420:(e,t,n)=>{"use strict";n.d(t,{m:()=>O,Z:()=>W});var a=n(93646),i=n(24246),r=n(19185),s=n(60042),o=n.n(s),d=n(27378),l=n(31256),c=n(42690),p=n(12856),u=n(87396),h=n(98454),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.typeName="normal",t}return(0,a.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.actived,n=e.disabled,r=e.children;return(0,i.jsx)("div",(0,a.pi)({role:"tab",className:this.tabsCls,"aria-disabled":n,"aria-selected":t,onClick:this.onClick,"data-zv":"10.0.0-beta.3"},{children:(0,i.jsxs)("div",(0,a.pi)({className:"zent-tabs-tab-inner","data-zv":"10.0.0-beta.3"},{children:[r,this.renderDelOperater()]}),void 0)}),void 0)},t}(h.Z),b=n(53789),f=n(27036),x=n(33806),m=n(77828),g=n(77465),y=function(e){var t=e.tabs,n=e.onChange,r=(0,m.Q)(n),s=(0,d.useState)(!1),l=s[0],c=s[1],p=(0,d.useCallback)((function(e){r.current(e),!e.disabled&&c(!1)}),[r]);return(0,i.jsxs)(x.ZP,(0,a.pi)({position:x.ZP.Position.BottomLeft,cushion:3,visible:l,onVisibleChange:c},{children:[(0,i.jsx)(x.ZP.Trigger.Hover,{children:(0,i.jsx)(f.Z,{type:"more"},void 0)},void 0),(0,i.jsx)(x.ZP.Content,{children:(0,i.jsx)("div",(0,a.pi)({className:"zent-tabs-hidden-tabs","data-zv":"10.0.0-beta.3"},{children:t.map((function(e){return(0,i.jsx)("div",(0,a.pi)({className:o()("zent-tabs-hidden-tab",{"zent-tabs-hidden-tab-disabled":e.disabled}),onClick:function(){return p(e)},title:(0,g.JA)(e.title),"data-zv":"10.0.0-beta.3"},{children:e.title}),e.key)}))}),void 0)},void 0)]}),void 0)},C=function(e){var t=e.disablePrev,n=e.disableNext,a=e.onPrevChange,r=e.onNextChange;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Z,{type:"left",className:o()({"icon-disabled":t}),onClick:a},void 0),(0,i.jsx)(f.Z,{type:"right",className:o()({"icon-disabled":n}),onClick:r},void 0)]},void 0)},z=n(14322),T=n(41925),j=n(17127),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tabsWrapperRef=(0,d.createRef)(),t.tabsMainRef=(0,d.createRef)(),t.state={startIndex:0,endIndex:0,translateX:0},t.getTargetIndex=function(e,t,n){void 0===n&&(n=!1);var a=t.list,i=t.tabsTotalWidth,r=n?a.length-1:0,s=n?-1:1;if(e<=0)return 0;if(e>=i)return a.length-1;for(var o=0;o<a.length;o++){var d=a[o],l=d.width,c=d.accumWidth;if(c+l>=e&&c<e)return o+s}return r},t.getHiddenTabs=(0,T.Z)((function(e,t,n){return e.reduce((function(e,a,i){return(i<t||i>n)&&e.push(a),e}),[])})),t.onStartChange=function(e,n){var a=n.list,i=n.tabsTotalWidth,r=t.tabsWrapperWidth,s=a[e].accumWidth+r,o=Math.min(s,i);s>i&&(e=t.getTargetIndex(i-r,n));var d=t.getTargetIndex(o,n,!0),l=o-r;t.setState({startIndex:e,endIndex:d,translateX:l})},t.onEndChange=function(e,n){var a=n.list,i=t.tabsWrapperWidth,r=a[e],s=r.accumWidth+r.width-i,o=Math.max(s,0);s<0&&(e=t.getTargetIndex(i,n,!0));var d=t.getTargetIndex(o,n);t.setState({startIndex:d,endIndex:e,translateX:o})},t.handlePageScroll=function(e){var n=t.getTabsInfo(),a=n.list.findIndex((function(t){return t.id===e.key})),i=t.state,r=i.startIndex,s=i.endIndex;a<=r&&t.onStartChange(a,n),a>=s&&t.onEndChange(a,n)},t.onAnchorPageChange=function(e){var n,a;e.disabled||(t.isControlled||t.handlePageScroll(e),null===(a=(n=t.props).onChange)||void 0===a||a.call(n,e.key))},t.onSlidePageChange=function(e,n){if(void 0===n&&(n=!1),!n){var a=t.state,i=a.startIndex,r=a.endIndex,s=t.getTabsInfo();e?t.onEndChange(i-1,s):t.onStartChange(r+1,s)}},t.onResize=(0,j.$j)((function(){t.onStartChange(t.state.startIndex,t.getTabsInfo())})),t.componentDidUpdate=function(e){var n=t.props,a=n.activeId,i=n.tabDataList;if(e.tabDataList.length!==t.props.tabDataList.length&&t.onResize(),e.activeId!==a){var r=t.state,s=r.startIndex,o=r.endIndex,d=i.findIndex((function(e){return e.key===a}));if(-1!==d&&(d<s||d>o)){var l=i[d];t.handlePageScroll(l)}}},t.handleAddClick=function(){var e=t.props.onAdd;null==e||e()},t}return(0,a.ZT)(t,e),Object.defineProperty(t.prototype,"tabsWrapperWidth",{get:function(){var e;return(null===(e=this.tabsWrapperRef.current)||void 0===e?void 0:e.offsetWidth)||0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isControlled",{get:function(){return"activeId"in this.props},enumerable:!1,configurable:!0}),t.prototype.getTabsInfo=function(){for(var e,t=this.props.tabDataList,n=(null===(e=this.tabsMainRef.current)||void 0===e?void 0:e.children)||[],a=[],i=0,r=0;r<n.length;r++){var s=n[r].offsetWidth,o=t[r].key;a.push({id:o,width:s,accumWidth:i}),i+=s}return{list:a,tabsTotalWidth:i}},t.prototype.renderSlideOperations=function(){var e=this,t=this.props.tabDataList,n=this.state,a=n.startIndex,r=n.endIndex,s=!a,o=r>=t.length-1;return(0,i.jsx)(C,{disablePrev:s,disableNext:o,onPrevChange:function(){return e.onSlidePageChange(!0,s)},onNextChange:function(){return e.onSlidePageChange(!1,o)}},void 0)},t.prototype.renderAnchorOperations=function(e){return e.length?(0,i.jsx)(y,{tabs:e,onChange:this.onAnchorPageChange},void 0):null},t.prototype.componentDidMount=function(){this.onStartChange(0,this.getTabsInfo())},t.prototype.render=function(){var e,t,n,r=this.props,s=r.overflowMode,d=r.tabs,l=r.tabDataList,c=r.onAdd,p=this.state,u=p.translateX,h=p.startIndex,v=p.endIndex,b="zent-tabs-nav-tabs-content-"+s,x=this.getHiddenTabs(l,h,v),m=0!==x.length;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",(0,a.pi)({className:o()(b,(e={},e[b+"-left"]=!!h,e[b+"-right"]=v!==d.length-1,e)),ref:this.tabsWrapperRef,"data-zv":"10.0.0-beta.3"},{children:[(0,i.jsx)("div",(0,a.pi)({className:o()(b+"-main",(t={},t[b+"-main--has-add"]=!m&&c,t)),ref:this.tabsMainRef,onScroll:this.onResize,style:{transform:"translateX(-"+(m?u:0)+"px)"},"data-zv":"10.0.0-beta.3"},{children:d}),void 0),!m&&c&&(0,i.jsx)("span",(0,a.pi)({className:b+"__add-btn",onClick:this.handleAddClick,"data-zv":"10.0.0-beta.3"},{children:(0,i.jsx)(f.Z,{type:"plus",className:b+"__add-icon"},void 0)}),void 0)]}),void 0),m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",(0,a.pi)({className:o()(b+"-option",(n={},n[b+"-option--right"]=v!==d.length-1,n)),"data-zv":"10.0.0-beta.3"},{children:["slide"===s&&this.renderSlideOperations(),"anchor"===s&&this.renderAnchorOperations(x),c&&(0,i.jsx)("span",(0,a.pi)({className:b+"-option__add-btn",onClick:this.handleAddClick,"data-zv":"10.0.0-beta.3"},{children:(0,i.jsx)(f.Z,{type:"plus",className:b+"__add-icon"},void 0)}),void 0)]}),void 0),(0,i.jsx)(z.w,{onResize:this.onResize},void 0)]},void 0)]},void 0)},t.defaultProps={overflowMode:"anchor"},t}(d.Component),I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onTabDel=function(e){(0,t.props.onDelete)(e)},t}return(0,a.ZT)(t,e),Object.defineProperty(t.prototype,"tabsNavCls",{get:function(){var e,t=this.props,n=t.stretch,a=t.className;return o()("zent-tabs-nav","zent-tabs-nav-type__"+this.typeName,a,((e={})["zent-tabs-nav__stretch"]=n,e))},enumerable:!1,configurable:!0}),t.prototype.renderNavExtraContent=function(){var e=this.props.navExtraContent;return e?(0,i.jsx)("div",(0,a.pi)({className:"zent-tabs-nav-extra-content","data-zv":"10.0.0-beta.3"},{children:e}),void 0):null},t.prototype.transformTabDataList=function(e){var t=this,n=this.props.candel;return e.map((function(e){return(0,g.Vw)(e,n,(0,g.Gw)(t.props))}))},t.prototype.render=function(){var e=this.renderNavExtraContent(),t=this.props,n=t.tabDataList,r=t.overflowMode,s=t.onChange,o=t.onAdd,d=t.type,l=t.activeId,c=t.style,p=this.renderTabs(),u=r&&("normal"===d||"card"===d)||o;return(0,i.jsxs)("div",(0,a.pi)({className:this.tabsNavCls,style:c,"data-zv":"10.0.0-beta.3"},{children:[u?(0,i.jsx)(N,{overflowMode:r,onChange:s,onAdd:o,tabDataList:n,tabs:p,activeId:l},void 0):(0,i.jsx)("div",(0,a.pi)({className:"zent-tabs-nav-content","data-zv":"10.0.0-beta.3"},{children:(0,i.jsx)("div",(0,a.pi)({className:"zent-tabs-scroll",role:"tablist","data-zv":"10.0.0-beta.3"},{children:p}),void 0)}),void 0),e]}),void 0)},t}(b.Z),Z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.typeName="normal",t}return(0,a.ZT)(t,e),t.prototype.renderTab=function(e){return(0,i.jsx)(v,(0,a.pi)({onSelected:this.onTabSelected,onDelete:this.onTabDel},e,{id:e.key},{children:e.title}),void 0)},t}(I),P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.typeName="card",t}return(0,a.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.actived,n=e.disabled,r=e.children;return(0,i.jsx)("div",(0,a.pi)({role:"tab",className:this.tabsCls,"aria-disabled":n,"aria-selected":t,onClick:this.onClick,"data-zv":"10.0.0-beta.3"},{children:(0,i.jsxs)("div",(0,a.pi)({className:"zent-tabs-tab-inner","data-zv":"10.0.0-beta.3"},{children:[r,this.renderDelOperater()]}),void 0)}),void 0)},t}(h.Z),F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.typeName="card",t.state={fixedIds:[]},t.onFixedChange=function(e){var n=t.props.onFixedChange;null==n||n(e),t.setState({fixedIds:e})},t}return(0,a.ZT)(t,e),Object.defineProperty(t.prototype,"isFixedControlled",{get:function(){return"fixedIds"in this.props},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fixedIds",{get:function(){return(this.isFixedControlled?this.props.fixedIds:this.state.fixedIds)||[]},enumerable:!1,configurable:!0}),t.prototype.renderTab=function(e){return(0,i.jsx)(P,(0,a.pi)({onSelected:this.onTabSelected,onDelete:this.onTabDel},e,{fixedIds:this.fixedIds,onFixedChange:this.onFixedChange,id:e.key},{children:e.title}),void 0)},t}(I),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.typeName="button",t}return(0,a.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.actived,n=e.disabled,r=e.children;return(0,i.jsx)("div",(0,a.pi)({role:"tab",className:this.tabsCls,"aria-disabled":n,"aria-selected":t,onClick:this.onClick,"data-zv":"10.0.0-beta.3"},{children:(0,i.jsx)("div",(0,a.pi)({className:"zent-tabs-tab-inner","data-zv":"10.0.0-beta.3"},{children:r}),void 0)}),void 0)},t}(h.Z),D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.typeName="button",t}return(0,a.ZT)(t,e),t.prototype.renderTab=function(e){return(0,i.jsx)(k,(0,a.pi)({onSelected:this.onTabSelected,onDelete:this.onTabDel},e,{id:e.key},{children:e.title}),void 0)},t}(I),_=n(87057),S={normal:Z,card:F,button:D},O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.ZT)(t,e),Object.defineProperty(t.prototype,"tabsCls",{get:function(){var e=this.props,t=e.className,n=e.type;return o()("zent-tabs","zent-tabs-type__"+n,t)},enumerable:!1,configurable:!0}),t.prototype.getTabDataListFromTabs=function(e){var t=this.props.activeId;return e.map((function(e){return(0,a.pi)((0,a.pi)({},e),{actived:e.key===t})}))},t.prototype.getTabDataListFromChildren=function(e){var t=this.props.activeId;return d.Children.map(e,(function(e){return(0,r.isElement)(e)?(0,g.AQ)(e,t):null})).filter((function(e){return!(0,l.Z)(e)}))},t.prototype.renderNav=function(e){var t=this.props,n=t.type,r=t.candel,s=t.canFixed,o=t.fixedIds,d=t.onFixedChange,l=t.stretch,c=t.navExtraContent,p=t.onChange,u=t.onDelete,h=t.onAdd,v=t.overflowMode,b=t.activeId,f=t.renderTabBar,x=S[n]||S.normal,m={onChange:p,tabDataList:e,onDelete:u,onAdd:h,candel:r,canFixed:s,stretch:l,overflowMode:v,navExtraContent:c,type:n,activeId:b,onFixedChange:d};return"fixedIds"in this.props&&(m.fixedIds=o),f?f(m,x):(0,i.jsx)(x,(0,a.pi)({},m),void 0)},t.prototype.renderTabPanel=function(e){var t=this.props,n=t.unmountPanelOnHide,r=t.disableLazyMount;return(0,i.jsx)(p.Z,(0,a.pi)({mount:r||e.actived},{children:(0,i.jsx)(u.Z,(0,a.pi)({tab:e.title,actived:e.actived,unmountOnHide:e.unmountOnHide||n,className:e.className,id:e.key},{children:e.panelChildren}),void 0)}),e.key)},t.TabPanel=u.Z,t.defaultProps={type:"normal",activeId:"",candel:!1,canFixed:!1,stretch:!1,onChange:c.Z,onDelete:c.Z,unmountPanelOnHide:!1},t}(_.Z),W=O},87396:(e,t,n)=>{"use strict";var a=n(93646),i=n(24246),r=n(60042),s=n.n(r);t.Z=function(e){var t=e.actived,n=e.className,r=e.unmountOnHide,o=e.children;if(!t&&r)return null;var d=t?{}:{display:"none"},l=s()("zent-tabs-panel",n);return(0,i.jsx)("div",(0,a.pi)({role:"tabpanel",style:d,className:l,"data-zv":"10.0.0-beta.3"},{children:o}),void 0)}},98454:(e,t,n)=>{"use strict";var a=n(93646),i=n(24246),r=n(27378),s=n(60042),o=n.n(s),d=n(27036),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onDel=function(e){e.stopPropagation();var n=t.props,a=n.onDelete,i=n.id;a&&a(i)},t.onClick=function(){var e=t.props,n=e.onSelected,a=e.id,i=e.actived,r=e.disabled;i||r||n&&n(a)},t.onClickFixed=function(e){e.stopPropagation();var n=t.props,i=n.fixedIds,r=void 0===i?[]:i,s=n.onFixedChange,o=n.id,d=t.isFixed?r.filter((function(e){return e!==o})):(0,a.ev)((0,a.ev)([],r),[o]);null==s||s(d)},t}return(0,a.ZT)(t,e),Object.defineProperty(t.prototype,"tabsCls",{get:function(){var e,t=this.props,n=t.actived,a=t.disabled;return o()("zent-tabs-tab","zent-tabs-tab-type__"+this.typeName,((e={})["zent-tabs-tab__actived"]=n,e["zent-tabs-tab__disabled"]=a,e))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isFixed",{get:function(){var e=this.props,t=e.id,n=e.fixedIds;return(void 0===n?[]:n).includes(t)},enumerable:!1,configurable:!0}),t.prototype.renderDelOperater=function(){var e=this.props,t=e.candel,n=e.canFixed;return t?(0,i.jsxs)("div",(0,a.pi)({className:o()("zent-tabs-tab__actions",{"zent-tabs-tab-actions--fixed":this.isFixed}),"data-zv":"10.0.0-beta.3"},{children:[!this.isFixed&&(0,i.jsx)("span",(0,a.pi)({className:"zent-tabs-tab__actions__delete",onClick:this.onDel,"data-zv":"10.0.0-beta.3"},{children:"✕"}),void 0),n&&(0,i.jsx)("span",(0,a.pi)({className:"zent-tabs-tab__actions__fixed",onClick:this.onClickFixed,"data-zv":"10.0.0-beta.3"},{children:this.isFixed?(0,i.jsx)(d.Z,{type:"pin"},void 0):(0,i.jsx)(d.Z,{type:"pin-o"},void 0)}),void 0)]}),void 0):null},t}(r.Component);t.Z=l},87057:(e,t,n)=>{"use strict";var a=n(93646),i=n(24246),r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.ZT)(t,e),t.prototype.renderWithPanel=function(){var e=this.props.children,t=this.getTabDataListFromChildren(e);return(0,i.jsxs)("div",(0,a.pi)({className:this.tabsCls,"data-zv":"10.0.0-beta.3"},{children:[this.renderNav(t),(0,i.jsx)("div",(0,a.pi)({className:"zent-tabs-panel-wrapper","data-zv":"10.0.0-beta.3"},{children:t.map(this.renderTabPanel.bind(this))}),void 0)]}),void 0)},t.prototype.renderWithoutPanel=function(){var e=this.props.tabs;return(0,i.jsx)("div",(0,a.pi)({className:this.tabsCls,"data-zv":"10.0.0-beta.3"},{children:this.renderNav(this.getTabDataListFromTabs(e))}),void 0)},t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.children;if(!t&&!n)throw new Error("Tabs Componment must receive one prop of 'tabs' and 'children'");return t?this.renderWithoutPanel():this.renderWithPanel()},t}(n(27378).Component);t.Z=r},53789:(e,t,n)=>{"use strict";var a=n(93646),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onTabSelected=function(e){(0,t.props.onChange)(e)},t}return(0,a.ZT)(t,e),t.prototype.renderTabs=function(){var e=this.props.tabDataList;return this.transformTabDataList(e).map(this.renderTab,this)},t}(n(27378).PureComponent);t.Z=i},77465:(e,t,n)=>{"use strict";n.d(t,{AQ:()=>r,Vw:()=>s,JA:()=>o,Gw:()=>d});var a=n(93646),i=function(e){return"boolean"==typeof e};function r(e,t){var n=e.props,a=n.id,i=n.disabled;return{title:n.tab,disabled:i,key:a,actived:t===a,panelChildren:n.children,className:n.className,unmountOnHide:n.unmountOnHide,canFixed:n.canFixed,candel:n.candel}}function s(e,t,n){void 0===n&&(n={});var r=t;i(e.candel)&&(r=e.candel);var s=n.canFixed,o=(0,a._T)(n,["canFixed"]);return i(e.canFixed)&&(s=e.canFixed),(0,a.pi)({key:e.key,actived:e.actived,disabled:e.disabled,title:e.title,className:e.className,candel:r&&!e.disabled,canFixed:s},o)}var o=function(e){if("string"==typeof e)return e},d=function(e){var t=e.canFixed,n=e.fixedIds,a={canFixed:t,onFixedChange:e.onFixedChange};return"fixedIds"in e&&(a.fixedIds=n),a}},12856:(e,t,n)=>{"use strict";var a=n(93646),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={mounted:t.mount},n}return(0,a.ZT)(t,e),t.prototype.render=function(){var e=this.props.children;return this.state.mounted?e:null},t.getDerivedStateFromProps=function(e,t){return e.mount&&!t.mounted?{mounted:!0}:null},t.defaultProps={mount:!1},t}(n(27378).Component);t.Z=i},77828:(e,t,n)=>{"use strict";n.d(t,{Q:()=>i});var a=n(27378);function i(e){var t=(0,a.useRef)(e);return(0,a.useEffect)((function(){t.current=e}),[e]),t}},31256:(e,t,n)=>{"use strict";function a(e){return null==e}n.d(t,{Z:()=>a})}}]);