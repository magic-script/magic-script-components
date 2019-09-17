(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return f}));n(181);var r=n(180);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u={id:"quality",title:"Quality"},i=[{value:"Quality options",id:"quality-options",children:[]}],l={rightToc:i},c="wrapper";function f(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"quality-options"},"Quality options"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:"left"}),"Value"),Object(r.b)("th",o({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"enh1")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Enhanced lvl 1 text, which uses preconditioned font data.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"enh1-aa")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Uses same data as kEnh1 but applies extra anti-aliasing; slower than kEnh1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"enh1-fast")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Uses the same data as kEnh1 with a less accurate but faster shader.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"enh2")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Enhanced lvl 2 text, which uses different preconditioned data than kEnh1.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"enh3")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"exper")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Like kStd, but still in development. Experimental -- never for production use.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"fast")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Fastest rendering, but the text quality is unacceptable for most use cases.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"std")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Standard quality, which is ideal for on-the-fly font loading.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"std-0")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"N.B. these are still in development and deprecated; prefer kStd except for testing purposes.")))))}f.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),f=u(n),s=r,p=f[i+"."+s]||f[s]||c[s]||a;return n?o.a.createElement(p,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(p,Object.assign({},{ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:r,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}function w(){}function N(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var S=N.prototype=new w;S.constructor=N,r(S,g.prototype),S.isPureReactComponent=!0;var k={current:null},x={suspense:null},C={current:null},E=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)E.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:C.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,T=[];function q(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case u:l=!0}}if(l)return r(o,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=n+M(i=t[c],c);l+=e(i,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),c=0;!(i=t.next()).done;)l+=e(i=i.value,f=n+M(i,c++),r,o);else if("object"===i)throw r=""+t,O(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),I(e,D,t=q(t,a,r,o)),A(t)}function F(){var e=k.current;if(null===e)throw O(Error(321));return e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,U,t=q(null,null,t,n)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:c,StrictMode:l,Suspense:b,unstable_SuspenseList:d,createElement:P,cloneElement:function(e,t,n){if(null==e)throw O(Error(267),e);var o=void 0,u=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)E.call(t,o)&&!_.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))u.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:a,type:e.type,key:i,ref:l,props:u,_owner:c}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=x.suspense;x.suspense=void 0===t?null:t;try{e()}finally{x.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:x,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},B={default:V},Q=B&&V||B;e.exports=Q.default||Q},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=u(e),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))o.call(n,f)&&(l[f]=n[f]);if(r){i=r(n);for(var s=0;s<i.length;s++)a.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}}}]);