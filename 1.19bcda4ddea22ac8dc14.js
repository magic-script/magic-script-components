(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{109:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=n(a(19));t.default=function(){return r.useContext(l.default)}},110:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},112:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(109));t.default=function(e){var t=(r.default().siteConfig||{}).baseUrl,a=void 0===t?"/":t;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},114:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(113),c=a(109),o=a.n(c),i=a(112),s=a.n(i),u=a(120),d=a.n(u),h=a(111),f=a(115),m=a.n(f),v=a(110),p=a.n(v),g=a(124),b=a.n(g);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e){return r.a.createElement(h.a,_({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:s()(e.to)}),e.label)}var E=function(){return r.a.createElement("span",{className:p()(b.a.toggle,b.a.moon)})},w=function(){return r.a.createElement("span",{className:p()(b.a.toggle,b.a.sun)})};var N=function(){var e=o()(),t=k(Object(n.useState)(!1),2),a=t[0],c=t[1],i="undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"",u=k(Object(n.useState)(i),2),f=u[0],v=u[1],g=e.siteConfig,N=void 0===g?{}:g,C=N.baseUrl,O=N.themeConfig,j=void 0===O?{}:O,x=j.algolia,M=j.navbar,P=void 0===M?{}:M,T=P.title,S=P.logo,F=P.links,X=void 0===F?[]:F,I=Object(n.useCallback)(function(){c(!0)},[c]),B=Object(n.useCallback)(function(){c(!1)},[c]);Object(n.useEffect)(function(){try{var e=localStorage.getItem("theme");v(e)}catch(e){console.error(e)}},[]);var L=function(e){var t=e.target.checked?"dark":"";v(t);try{localStorage.setItem("theme",t)}catch(e){console.error(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":f})),r.a.createElement("nav",{className:p()("navbar","navbar--light","navbar--fixed-top",{"navbar--sidebar-show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:I,onKeyDown:I},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(h.a,{className:"navbar__brand",to:C},null!=S&&r.a.createElement("img",{className:"navbar__logo",src:s()(S.src),alt:S.alt}),null!=T&&r.a.createElement("strong",null,T)),X.filter(function(e){return"right"!==e.position}).map(function(e,t){return r.a.createElement(y,_({},e,{key:t}))})),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.filter(function(e){return"right"===e.position}).map(function(e,t){return r.a.createElement(y,_({},e,{key:t}))}),r.a.createElement(d.a,{className:b.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===f,onChange:L,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(w,null)}}),x&&r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement(m.a,null)))),r.a.createElement("div",{role:"presentation",className:"navbar__sidebar__backdrop",onClick:function(){c(!1)}}),r.a.createElement("div",{className:"navbar__sidebar"},r.a.createElement("div",{className:"navbar__sidebar__brand"},r.a.createElement(h.a,{className:"navbar__brand",onClick:B,to:C},null!=S&&r.a.createElement("img",{className:"navbar__logo",src:s()(S.src),alt:S.alt}),null!=T&&r.a.createElement("strong",null,T)),a&&r.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===f,onChange:L,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(w,null)}})),r.a.createElement("div",{className:"navbar__sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},X.map(function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(y,_({className:"menu__link"},e,{onClick:B})))})))))))};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var O=function(){var e=o()().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer;if(!a)return null;var n=a.copyright,l=a.links,c=void 0===l?[]:l,i=a.logo;return r.a.createElement("footer",{className:p()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},c.map(function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(function(e){return r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(h.a,C({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:s()(e.to)}),e.label))})):null)})),(i||n)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:i.alt,src:i.src})),n)))};a(125);t.a=function(e){var t=o()().siteConfig,a=void 0===t?{}:t,n=a.favicon,c=a.tagline,i=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,m=e.noFooter,v=e.description,p=e.image,g=e.keywords,b=e.permalink,k=f||"".concat(i," · ").concat(c),_=p||u;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:s()(n)}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),g&&g.length&&r.a.createElement("meta",{property:"keywords",content:g}),_&&r.a.createElement("meta",{property:"og:image",content:d+s()(_)}),_&&r.a.createElement("meta",{property:"twitter:image",content:d+s()(_)}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for ".concat(k)}),b&&r.a.createElement("meta",{property:"og:url",content:d+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),h,!m&&r.a.createElement(O,null))}},115:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return null}},120:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=h(l),o=h(a(110)),i=h(a(6)),s=h(a(121)),u=h(a(122)),d=a(123);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),r(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}();t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},121:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},122:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},124:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_1gtM",toggle:"toggle_16vC",moon:"moon_1N64",sun:"sun_3CZP"}},125:function(e,t,a){}}]);