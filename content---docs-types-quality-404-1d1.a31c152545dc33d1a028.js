(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,s=p[l+"."+d]||p[d]||c[d]||i;return n?r.a.createElement(s,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(s,Object.assign({},{ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[o]="string"==typeof e?e:a,b[1]=l;for(var d=2;d<i;d++)b[d]=n[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(0);var a=n(174);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={id:"quality",title:"Quality"},l=[],o={rightToc:l},c="wrapper";function p(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(c,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"quality-options"},"Quality options:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Value"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"enh1")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Enhanced lvl 1 text, which uses preconditioned font data.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"enh1-aa")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Uses same data as kEnh1 but applies extra anti-aliasing; slower than kEnh1.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"enh1-fast")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Uses the same data as kEnh1 with a less accurate but faster shader.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"enh2")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Enhanced lvl 2 text, which uses different preconditioned data than kEnh1.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"enh3")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"exper")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Like kStd, but still in development. Experimental -- never for production use.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"fast")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Fastest rendering, but the text quality is unacceptable for most use cases.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"std")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Standard quality, which is ideal for on-the-fly font loading.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("inlineCode",{parentName:"td"},"std-0")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"N.B. these are still in development and deprecated; prefer kStd except for testing purposes.")))))}p.isMDXComponent=!0}}]);