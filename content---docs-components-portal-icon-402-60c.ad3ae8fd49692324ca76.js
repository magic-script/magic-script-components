(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=o(n),s=a,m=b[l+"."+s]||b[s]||p[s]||i;return n?r.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));n(0);var a=n(185);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={id:"portalIcon",title:"PortalIcon"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"iconSize options: PortalIconSize",id:"iconsize-options-portaliconsize",children:[]},{value:"labelDisplayMode options: LabelDisplayMode",id:"labeldisplaymode-options-labeldisplaymode",children:[]}]}],c={rightToc:l},p="wrapper";function b(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(p,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The PortalIcon component represents a portal icon for use in the on-device app Launcher."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport { View, PortalIcon } from \"magic-script-components\";\n\nexport default class MyApp extends React.Component {\n  render() {\n    return (\n      <View name='main-view'>\n        <PortalIcon text='Portal Icon' iconSize='extra-large' />\n      </View>\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The default, UTF-8 encoded portal icon label text.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"iconSize"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"small")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"One of the built-in sizes for the portal icon.")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"hoverScale"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the overall hover scale of the portal icon component. This value is provided as a multiplier, with ",Object(a.b)("inlineCode",{parentName:"td"},"1")," being normal scale, ",Object(a.b)("inlineCode",{parentName:"td"},"2")," being scaled two times normal, etc.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"hoverZOffset"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the overall hover Z-offset of the portal icon component. This value is provided in local space to the portal icon component's +Z axis. Positive values move towards the camera.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"iconActivateAnimation"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the icon activate animation name (optional). This is the animation played when the user opens the app.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"iconContextMenuAnimation"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the icon context menu animation name (optional). This is the animation played when the user opens the app settings.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"iconHoverAnimation"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the icon hover animation name (optional). This is the animation played when the user hovers on the icon, but no action is taken.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"iconIdleAnimation"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the icon idle animation name (required). This is the default animation state when the user is not interacting with the icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"iconHoverPosition"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec3"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the icon hover position relative to the portal sphere. This value is specified in local space to the portal component and is scaled with the rest of the portal elements during hover scale animation.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"labelDisplayMode"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the display mode for the portal icon label. The default value is kAlways, to always show the label.")))),Object(a.b)("h3",{id:"iconsize-options-portaliconsize"},"iconSize options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/portalIconSize"}),"PortalIconSize")),Object(a.b)("h3",{id:"labeldisplaymode-options-labeldisplaymode"},"labelDisplayMode options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/labelDisplayMode"}),"LabelDisplayMode")))}b.isMDXComponent=!0}}]);