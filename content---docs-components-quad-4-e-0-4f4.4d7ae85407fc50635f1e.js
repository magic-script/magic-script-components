(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{140:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));r(0);var n=r(174);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={id:"quad",title:"Quad"},c=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"viewMode options: ViewMode",id:"viewmode-options-viewmode",children:[]}]}],l={rightToc:c},p="wrapper";function b(e){var t=e.components,r=o(e,["components"]);return Object(n.b)(p,a({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<Quad />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"renderResourceId"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"BigInt"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Sets the resource to be used when drawing the QuadNode. Optional")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"texCoords"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"[vec2]"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"Set the texture coordinates of the node being rendered, if the resource is a texture. If the type of the render resource is not a texture, this will have no effect.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"viewMode"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"Set the current ViewMode to the given value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"size"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"vec2"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"Set the custom size, which is by default one: ","[1, 1]",".")))),Object(n.b)("h3",{id:"viewmode-options-viewmode"},"viewMode options: ",Object(n.b)("a",a({parentName:"h3"},{href:"/docs/types/viewMode"}),"ViewMode")))}b.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),b=i(r),d=n,m=b[c+"."+d]||b[d]||p[d]||o;return r?a.a.createElement(m,Object.assign({},{ref:t},l,{components:r})):a.a.createElement(m,Object.assign({},{ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);