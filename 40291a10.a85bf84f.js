(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),o=(a(0),a(170)),i={id:"portalIcon",title:"PortalIcon"},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"iconSize options: PortalIconSize",id:"iconsize-options-portaliconsize",children:[]},{value:"labelDisplayMode options: LabelDisplayMode",id:"labeldisplaymode-options-labeldisplaymode",children:[]}]}],l={id:"components/portalIcon",title:"PortalIcon",description:"## Description",source:"@site/../docs/components/PortalIcon.md",permalink:"/docs/components/portalIcon",sidebar:"docs",previous:{title:"Panel",permalink:"/docs/components/panel"},next:{title:"ProgressBar",permalink:"/docs/components/progressBar"}},b={rightToc:c,metadata:l},p="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The PortalIcon component represents a portal icon for use in the on-device app Launcher."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, PortalIcon } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    return (\n      <View name="main-view">\n        <PortalIcon text="Portal Icon" iconSize="extra-large" />\n      </View>\n    );\n  }\n}\n')),Object(o.b)("h2",{id:"common-events"},Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(o.b)("h2",{id:"common-properties"},Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(o.b)("h2",{id:"create-properties"},"Create Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default, UTF-8 encoded portal icon label text.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iconSize"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"small")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of the built-in sizes for the portal icon.")))),Object(o.b)("h2",{id:"element-properties"},"Element Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hoverScale"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the overall hover scale of the portal icon component. This value is provided as a multiplier, with ",Object(o.b)("inlineCode",{parentName:"td"},"1")," being normal scale, ",Object(o.b)("inlineCode",{parentName:"td"},"2")," being scaled two times normal, etc.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hoverZOffset"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the overall hover Z-offset of the portal icon component. This value is provided in local space to the portal icon component's +Z axis. Positive values move towards the camera.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iconActivateAnimation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the icon activate animation name (optional). This is the animation played when the user opens the app.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iconContextMenuAnimation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the icon context menu animation name (optional). This is the animation played when the user opens the app settings.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iconHoverAnimation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the icon hover animation name (optional). This is the animation played when the user hovers on the icon, but no action is taken.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iconIdleAnimation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the icon idle animation name (required). This is the default animation state when the user is not interacting with the icon.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iconHoverPosition"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vec3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the icon hover position relative to the portal sphere. This value is specified in local space to the portal component and is scaled with the rest of the portal elements during hover scale animation.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"labelDisplayMode"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the display mode for the portal icon label. The default value is kAlways, to always show the label.")))),Object(o.b)("h3",{id:"iconsize-options-portaliconsize"},"iconSize options: ",Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/types/portalIconSize"}),"PortalIconSize")),Object(o.b)("h3",{id:"labeldisplaymode-options-labeldisplaymode"},"labelDisplayMode options: ",Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/types/labelDisplayMode"}),"LabelDisplayMode")))}s.isMDXComponent=!0},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=i(a),s=n,m=p[c+"."+s]||p[s]||b[s]||o;return a?r.a.createElement(m,Object.assign({},{ref:t},l,{components:a})):r.a.createElement(m,Object.assign({},{ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);