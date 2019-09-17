(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r),o=i.a.createContext({}),a=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=a(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=a(n),p=r,f=s[l+"."+p]||s[p]||c[p]||o;return n?i.a.createElement(f,Object.assign({},{ref:t},u,{components:n})):i.a.createElement(f,Object.assign({},{ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,l=i?Symbol.for("react.fragment"):60107,u=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,s=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,f=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,m=i?Symbol.for("react.suspense_list"):60120,h=i?Symbol.for("react.memo"):60115,b=i?Symbol.for("react.lazy"):60116;i&&Symbol.for("react.fundamental"),i&&Symbol.for("react.responder");var y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||v}function w(){}function N(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var S=N.prototype=new w;S.constructor=N,r(S,j.prototype),S.isPureReactComponent=!0;var k={current:null},E={suspense:null},x={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r=void 0,i={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&!P.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var $=/\/+/g,R=[];function L(e,t,n,r){if(R.length){var i=R.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,i){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var u=!1;if(null===t)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case a:u=!0}}if(u)return r(i,t,""===n?"."+D(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=n+D(l=t[c],c);u+=e(l,s,r,i)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(l=t.next()).done;)u+=e(l=l.value,s=n+D(l,c++),r,i);else if("object"===l)throw r=""+t,g(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,i){var o="";null!=n&&(o=(""+n).replace($,"$&/")+"/"),I(e,U,t=L(t,o,r,i)),A(t)}function F(){var e=k.current;if(null===e)throw g(Error(321));return e}var z={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,M,t=L(null,null,t,n)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,Profiler:c,StrictMode:u,Suspense:d,unstable_SuspenseList:m,createElement:C,cloneElement:function(e,t,n){if(null==e)throw g(Error(267),e);var i=void 0,a=r({},e.props),l=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=x.current),void 0!==t.key&&(l=""+t.key);var s=void 0;for(i in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,i)&&!P.hasOwnProperty(i)&&(a[i]=void 0===t[i]&&void 0!==s?s[i]:t[i])}if(1===(i=arguments.length-2))a.children=n;else if(1<i){s=Array(i);for(var p=0;p<i;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:l,ref:u,props:a,_owner:c}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=E.suspense;E.suspense=void 0===t?null:t;try{e()}finally{E.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:E,ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r}},V={default:z},B=V&&z||V;e.exports=B.default||B},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,u=a(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))i.call(n,s)&&(u[s]=n[s]);if(r){l=r(n);for(var p=0;p<l.length;p++)o.call(n,l[p])&&(u[l[p]]=n[l[p]])}}return u}},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));n(181);var r=n(180);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a={id:"linearLayout",title:"LinearLayout"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"defaultItemAlignment options: Orientation",id:"defaultitemalignment-options-orientation",children:[]},{value:"itemAlignment options: Alignment",id:"itemalignment-options-alignment",children:[]},{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]}]}],u={rightToc:l},c="wrapper";function s(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(c,i({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The LinearLayout component automatically lays out of multiple elements in a horizontal or vertical orientation. When you add items, they are appended to the previously added item. By default, the LinearLayout will grow to fit vertical content without padding. Padding order is top, right, bottom, left. The default content alignment is top left for items added to the layout."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"<LinearLayout />\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",i({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",i({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Sets the default item alignment within the grid. Default item alignments are TOP_LEFT. This will be set for any new items that are added that aren't explicitly specifying alignment. The alignment of each individual item can still be set later if needed. Note that for the right and the bottom alignments to kick in, the containing cell should be, respectively, wider and higher than its content.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"vec4"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that aren't explicitly specifying padding. The padding of each individual item can still be set later if needed. Note that padding in a dimension will work only for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding vis-a-vis the height of the row the item is in.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"itemAlignment"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Sets the item alignment. Note that for the right and the bottom alignments to kick in, the containing cell should be, respectively, wider and higher than its content.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"itemPadding"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"vec4"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Sets the item padding at the specified row and col position. Note that padding in a dimension will work only for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding vis-a-vis the height of the row the item is in.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Skips invisble items. Setting this value true will cause the layout to skip over any invisible items. The layout will check the visibility of each top-level item Node added and if invisible, along with inherited visibility, will skip that Node for layout. Using this setting will affect the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",i({parentName:"tr"},{align:null}),"orientation"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",i({parentName:"tr"},{align:null}),"Sets the horizontal or vertical orientation of this linear layout. The default orientation is Vertical.")))),Object(r.b)("h3",{id:"defaultitemalignment-options-orientation"},"defaultItemAlignment options: ",Object(r.b)("a",i({parentName:"h3"},{href:"/docs/types/alignment"}),"Orientation")),Object(r.b)("h3",{id:"itemalignment-options-alignment"},"itemAlignment options: ",Object(r.b)("a",i({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(r.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(r.b)("a",i({parentName:"h3"},{href:"/docs/types/orientation"}),"Orientation")))}s.isMDXComponent=!0}}]);