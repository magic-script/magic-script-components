(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},b=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,d=p[b+"."+m]||p[m]||o[m]||l;return n?r.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[c]="string"==typeof e?e:a,i[1]=b;for(var m=2;m<l;m++)i[m]=n[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));n(0);var a=n(180);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={id:"datePicker",title:"DatePicker"},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"LabelSide values:",id:"labelside-values",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:b},o="wrapper";function p(e){var t=e.components,n=l(e,["components"]);return Object(a.b)(o,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Dialog which allows the user to select date."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { View, DatePicker } from 'magic-script-components';\n\nexport default class MyApp extends React.Component {\n  render () {\n    return (\n      <View name='main-view'>\n        <DatePicker label='Pick Date' />\n      </View>\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"label"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The text label that appears with the DatePicker.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"labelSide"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"top")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Side enum specifying whether the label appears on the side or top. Only top and left currently supported.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"defaultDate"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"(current DateTime)"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The default date to appear on the picker instead of the placeholder strings.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"yearMin"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"-1")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The minimum year available to choose from.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"yearMax"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"-1")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The maximum year available to choose from.")))),Object(a.b)("h3",{id:"labelside-values"},"LabelSide values:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"bottom"),Object(a.b)("li",{parentName:"ul"},"left"),Object(a.b)("li",{parentName:"ul"},"right"),Object(a.b)("li",{parentName:"ul"},"top")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"color"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the DatePicker component's color, doesn't affect label.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"date"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the Date manually. This will only have an affect when not currently focused.")))))}p.isMDXComponent=!0}}]);