(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{108:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},b=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var o="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)(function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,m=c[b+"."+d]||c[d]||p[d]||l;return n?r.a.createElement(m,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},o))});function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b[o]="string"==typeof e?e:a,i[1]=b;for(var d=2;d<l;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return i}),n.d(t,"rightToc",function(){return b}),n.d(t,"default",function(){return c});n(0);var a=n(108);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={id:"video",title:"Video"},b=[{value:"Tag: <Video>",id:"tag-video",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"viewMode options:",id:"viewmode-options",children:[]},{value:"action options:",id:"action-options",children:[]}]},{value:"Video EventData",id:"video-eventdata",children:[{value:"VideoEventType values, XPos & YPos purpose:",id:"videoeventtype-values-xpos--ypos-purpose",children:[]}]}],o={rightToc:b},p="wrapper";function c(e){var t=e.components,n=l(e,["components"]);return Object(a.b)(p,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tag-video"},"Tag: ",Object(a.b)("inlineCode",{parentName:"h2"},"<Video>")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("h4",r({parentName:"li"},{id:"lumin-runtime-native-component---videonode"}),"Lumin Runtime native component - VideoNode"))),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"512"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The surface resolution width 1 to 2048")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"512"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The surface resolution height 1 to 2048")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"videoPath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the file to Play. Preparation for playback begins synchronously after this property is set. The VideoNode is not ready to actually play (via action='start') until a VideoEvent of type VideoEventType 'prepared' is received.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"viewMode"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"full-area")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Set the current ViewMode to the given value.")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"volume"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the volume of the node.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"looping"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the looping mode of the player.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"timedTextPath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the timed text file.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"videoUri"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the file Uri to Play. Preparation for playback begins synchronously after this property is set. The VideoNode is not ready to actually play (via action='start') until a VideoEvent of type VideoEventType 'prepared' is received.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"seekTo"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Seeks to the specified time position.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"action"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the current operation: ",Object(a.b)("inlineCode",{parentName:"td"},"start"),", ",Object(a.b)("inlineCode",{parentName:"td"},"stop"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pause"))))),Object(a.b)("h3",{id:"viewmode-options"},"viewMode options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"full-area"),Object(a.b)("li",{parentName:"ul"},"left-right")),Object(a.b)("h3",{id:"action-options"},"action options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pause"),Object(a.b)("li",{parentName:"ul"},"start"),Object(a.b)("li",{parentName:"ul"},"stop")),Object(a.b)("h2",{id:"video-eventdata"},"Video EventData"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"AffectedNodeId"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"BigInt"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"The ID of the VideoNode that was affected.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"XPos"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"*based on event type")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"YPos"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"*based on event type")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"VideoEventType"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Video event type")))),Object(a.b)("h3",{id:"videoeventtype-values-xpos--ypos-purpose"},"VideoEventType values, XPos & YPos purpose:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"buffering-update:\nX is the buffering percent, Y is unused"),Object(a.b)("li",{parentName:"ul"},"completion"),Object(a.b)("li",{parentName:"ul"},"error:\nX is the type of fatal error, Y is the MediaError code"),Object(a.b)("li",{parentName:"ul"},"info:\nX is the info or warning code, Y is an info code to provide more details"),Object(a.b)("li",{parentName:"ul"},"prepared"),Object(a.b)("li",{parentName:"ul"},"seek-complete"),Object(a.b)("li",{parentName:"ul"},"video-size-changed:\nX is width, Y is height")))}c.isMDXComponent=!0}}]);