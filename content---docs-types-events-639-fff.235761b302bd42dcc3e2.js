(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{108:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return s});var r=t(0),o=t.n(r),a=o.a.createContext({}),l=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)(function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=l(t),s=r,b=p[i+"."+s]||p[s]||u[s]||a;return t?o.a.createElement(b,Object.assign({},{ref:n},c,{components:t})):o.a.createElement(b,Object.assign({},{ref:n},c))});function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return l}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return p});t(0);var r=t(108);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l={id:"events",title:"Events"},i=[{value:"Common Events for the Ui elements",id:"common-events-for-the-ui-elements",children:[]}],c={rightToc:i},u="wrapper";function p(e){var n=e.components,t=a(e,["components"]);return Object(r.b)(u,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"common-events-for-the-ui-elements"},"Common Events for the Ui elements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"onActivate"),Object(r.b)("li",{parentName:"ul"},"onPressed"),Object(r.b)("li",{parentName:"ul"},"onLongPress"),Object(r.b)("li",{parentName:"ul"},"onRelease"),Object(r.b)("li",{parentName:"ul"},"onHoverEnter"),Object(r.b)("li",{parentName:"ul"},"onHoverExit"),Object(r.b)("li",{parentName:"ul"},"onHoverMove"),Object(r.b)("li",{parentName:"ul"},"onEnabled"),Object(r.b)("li",{parentName:"ul"},"onDisabled"),Object(r.b)("li",{parentName:"ul"},"onFocusGained"),Object(r.b)("li",{parentName:"ul"},"onFocusLost"),Object(r.b)("li",{parentName:"ul"},"onFocusInput"),Object(r.b)("li",{parentName:"ul"},"onUpdate"),Object(r.b)("li",{parentName:"ul"},"onDeleted")))}p.isMDXComponent=!0}}]);