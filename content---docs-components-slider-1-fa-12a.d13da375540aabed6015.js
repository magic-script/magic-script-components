(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{180:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n),a=o.a.createContext({}),l=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=l(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,p=s[i+"."+f]||s[f]||c[f]||a;return r?o.a.createElement(p,Object.assign({},{ref:t},u,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var f=2;f<a;f++)l[f]=r[f];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";e.exports=r(182)},182:function(e,t,r){"use strict";var n=r(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function w(){}function N(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var S=N.prototype=new w;S.constructor=N,n(S,g.prototype),S.isPureReactComponent=!0;var x={current:null},E={suspense:null},C={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n=void 0,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:C.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,T=[];function D(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case l:u=!0}}if(u)return n(o,t,""===r?"."+M(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=r+M(i=t[c],c);u+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(i=t.next()).done;)u+=e(i=i.value,s=r+M(i,c++),n,o);else if("object"===i)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return u}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),I(e,U,t=D(t,a,n,o)),A(t)}function F(){var e=x.current;if(null===e)throw v(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,L,t=D(null,null,t,r)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:c,StrictMode:u,Suspense:b,unstable_SuspenseList:d,createElement:k,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=void 0,l=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,o)&&!P.hasOwnProperty(o)&&(l[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))l.children=r;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];l.children=s}return{$$typeof:a,type:e.type,key:i,ref:u,props:l,_owner:c}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=E.suspense;E.suspense=void 0===t?null:t;try{e()}finally{E.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:E,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},z={default:V},H=z&&V||z;e.exports=H.default||H},183:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,u=l(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(u[s]=r[s]);if(n){i=n(r);for(var f=0;f<i.length;f++)a.call(r,i[f])&&(u[i[f]]=r[i[f]])}}return u}},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));r(181);var n=r(180);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l={id:"slider",title:"Slider"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],u={rightToc:i},c="wrapper";function s(e){var t=e.components,r=a(e,["components"]);return Object(n.b)(c,o({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The Slider class places a slider into your volume. Use sliders to provide a visual reference to a specific range and the current value within that range, like a volume slider. You can create two types of sliders: horizontal and radial. Horizontal sliders can use either icons or labels. Radial sliders must use icons. The default slider is white and uses 100% opacity for the active part of the slider. Sliders inherit the width from a parent node, such as RectLayout. If the slider does not have a parent, it is one meter wide unless otherwise constrained. The default minimum and maximum values in the range are 0 and 1."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"<Slider />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Width")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"0"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Height")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"min"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Sets the min slider value. This min value is set only if it is less than the slider's max value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"max"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Sets the slider min and max values. These values are set only if min is less than max. Default values for min and max are 0 and 1.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"value"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Sets the slider value. The value will be clamped within the current min and max range.")))))}s.isMDXComponent=!0}}]);