(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),l=(a(0),a(170)),c={id:"datePicker",title:"DatePicker"},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"LabelSide values:",id:"labelside-values",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],i={id:"components/datePicker",title:"DatePicker",description:"## Description",source:"@site/../docs/components/DatePicker.md",permalink:"/docs/components/datePicker",sidebar:"docs",previous:{title:"Content",permalink:"/docs/components/content"},next:{title:"Dialog",permalink:"/docs/components/dialog"}},o={rightToc:b,metadata:i},p="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(p,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Dialog which allows the user to select date."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, DatePicker } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    return (\n      <DatePicker\n        label="Select Date"\n        labelSide="left"\n        color={[0.112, 0.655, 0.766, 1]}\n        defaultDate="03/21/2019"\n        showHint={false}\n        height={0.5}\n        yearMin={1990}\n        yearMax={2020}\n        localScale={[2, 2, 0]}\n      />\n    );\n  }\n}\n')),Object(l.b)("h2",{id:"common-events"},Object(l.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(l.b)("h2",{id:"common-properties"},Object(l.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(l.b)("h2",{id:"create-properties"},"Create Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text label that appears with the date picker.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"labelSide"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"top")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Side enum specifying whether the label appears on the side or top. Only top and left are currently supported.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultDate"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"(current DateTime)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default date to appear on the date picker instead of the placeholder strings.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yearMin"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"-1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum year available to choose from.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yearMax"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"-1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum year available to choose from.")))),Object(l.b)("h3",{id:"labelside-values"},"LabelSide values:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"bottom"),Object(l.b)("li",{parentName:"ul"},"left"),Object(l.b)("li",{parentName:"ul"},"right"),Object(l.b)("li",{parentName:"ul"},"top")),Object(l.b)("h2",{id:"element-properties"},"Element Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"color"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vec4"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the DatePicker component's color. This does not affect the label.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"date"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the date manually. This only has an affect when not currently focused.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"showHint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To show the selected Date eg. 01/01/2019 or the format hint eg. MM/DD/YYYY. This will only have an affect when not currently focused. The full hint is always displayed on creation. Each field will continue to show the hint, ie MM or DD or YYYYY, until that field is focused. This can override that behavior and display the Date immediately if desired. The full Date will be shown when the user confirms a selected Date.")))))}d.isMDXComponent=!0},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},b=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var i="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p[b+"."+d]||p[d]||o[d]||l;return a?r.a.createElement(m,Object.assign({},{ref:t},i,{components:a})):r.a.createElement(m,Object.assign({},{ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[i]="string"==typeof e?e:n,c[1]=b;for(var d=2;d<l;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);