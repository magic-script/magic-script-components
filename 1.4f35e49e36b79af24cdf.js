/*! For license information please see 1.4f35e49e36b79af24cdf.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{181:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(n(19));t.default=function(){return r.useContext(o.default)}},182:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(181));t.default=function(e){var t=(r.default().siteConfig||{}).baseUrl,n=void 0===t?"/":t;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},183:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},188:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(183),c=n.n(o),l=n(184),i=n(181),s=n.n(i),u=n(182),d=n.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(){var e=s()().siteConfig,t=(void 0===e?{}:e).themeConfig,n=(void 0===t?{}:t).footer;if(!n)return null;var a=n.copyright,o=n.links,i=void 0===o?[]:o,u=n.logo;return r.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e){return r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(l.a,f({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:d()(e.to)}),e.label))}))):null)}))),(u||a)&&r.a.createElement("div",{className:"text--center"},u&&u.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:u.alt,src:u.src})),a)))}},189:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(201),c=n.n(o);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){u(e,t,n[t])}))}return e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?m(e):t}var b=[];t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n=function(n){function a(){var e,t;l(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return u(m(m(t=v(this,(e=h(a)).call.apply(e,[this].concat(r))))),"state",{scriptsLoaded:!1,scriptsLoadedSuccessfully:!1}),u(m(m(t)),"_isMounted",!1),u(m(m(t)),"loadScripts",(function(e){var n=e.filter((function(e){return!b.includes(e)})).map((function(e){return t.loadScript(e)})),a=!0;Promise.all(n).catch((function(){a=!1})).then((function(){t._isMounted&&t.setState({scriptsLoaded:!0,scriptsLoadedSuccessfully:a})}))})),u(m(m(t)),"loadScript",(function(e){b.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var n=new Promise((function(n,a){t.addEventListener("load",(function(){return n(e)})),t.addEventListener("error",(function(e){return a(e)}))})).catch((function(n){var a=b.indexOf(e);throw a>=0&&b.splice(a,1),t.remove(),n}));return document.body.appendChild(t),n})),t}return f(a,n),s(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.loadScripts(t)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=d({},this.props,this.state);return r.a.createElement(e,t)}}]),a}(r.a.Component);return c()(n,e)}}},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(196),c=n.n(o),l=n(184),i=n(185),s=n(181),u=n.n(s),d=n(182),f=n.n(d),h=n(191),p=n.n(h),m=n(183),v=n.n(m),b=n(200),g=n.n(b);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e){return r.a.createElement(l.a,_({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:f()(e.to)}),e.label)}var E=function(){return r.a.createElement("span",{className:v()(g.a.toggle,g.a.moon)})},O=function(){return r.a.createElement("span",{className:v()(g.a.toggle,g.a.sun)})};t.a=function(){var e=u()(),t=y(Object(a.useState)(!1),2),n=t[0],o=t[1],s=y(Object(a.useState)(!1),2),d=s[0],h=s[1],m="undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"",b=y(Object(a.useState)(m),2),w=b[0],j=b[1],N=e.siteConfig,C=void 0===N?{}:N,P=C.baseUrl,S=C.themeConfig,x=void 0===S?{}:S,T=x.algolia,M=x.navbar,L=void 0===M?{}:M,X=L.title,D=L.logo,F=L.links,B=void 0===F?[]:F,A=Object(a.useCallback)((function(){o(!0)}),[o]),I=Object(a.useCallback)((function(){o(!1)}),[o]);Object(a.useEffect)((function(){try{var e=localStorage.getItem("theme");j(e)}catch(e){console.error(e)}}),[]);var R=function(e){var t=e.target.checked?"dark":"";j(t);try{localStorage.setItem("theme",t)}catch(e){console.error(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en","data-theme":w})),r.a.createElement("nav",{className:v()("navbar","navbar--light","navbar--fixed-top",{"navbar--sidebar-show":n})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(l.a,{className:"navbar__brand",to:P},null!=D&&r.a.createElement("img",{className:"navbar__logo",src:f()(D.src),alt:D.alt}),null!=X&&r.a.createElement("strong",{className:d?g.a.hideLogoText:""},X)),B.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(k,_({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},B.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(k,_({},e,{key:t}))})),r.a.createElement(c.a,{className:g.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===w,onChange:R,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(O,null)}}),T&&r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement(p.a,{handleSearchBarToggle:h,isSearchBarExpanded:d})))),r.a.createElement("div",{role:"presentation",className:"navbar__sidebar__backdrop",onClick:function(){o(!1)}}),r.a.createElement("div",{className:"navbar__sidebar"},r.a.createElement("div",{className:"navbar__sidebar__brand"},r.a.createElement(l.a,{className:"navbar__brand",onClick:I,to:P},null!=D&&r.a.createElement("img",{className:"navbar__logo",src:f()(D.src),alt:D.alt}),null!=X&&r.a.createElement("strong",null,X)),n&&r.a.createElement(c.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===w,onChange:R,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(O,null)}})),r.a.createElement("div",{className:"navbar__sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},B.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(k,_({className:"menu__link"},e,{onClick:I})))}))))))))}},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return null}},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=f(o),l=f(n(183)),i=f(n(7)),s=f(n(197)),u=f(n(198)),d=n(199);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},200:function(e,t,n){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_1gtM",toggle:"toggle_16vC",moon:"moon_1N64",sun:"sun_3CZP",hideLogoText:"hideLogoText_1pX_"}},201:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,n,d){if("string"!=typeof n){if(u){var f=s(n);f&&f!==u&&e(t,f,d)}var h=c(n);l&&(h=h.concat(l(n)));for(var p=0;p<h.length;++p){var m=h[p];if(!(a[m]||r[m]||d&&d[m])){var v=i(n,m);try{o(t,m,v)}catch(e){}}}return t}return t}}}]);