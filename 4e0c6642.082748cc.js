(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(6),c=(a(0),a(170)),o={id:"quad",title:"Quad"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"viewMode options: ViewMode",id:"viewmode-options-viewmode",children:[]}]}],b={id:"components/quad",title:"Quad",description:"## Description",source:"@site/../docs/components/Quad.md",permalink:"/docs/components/quad",sidebar:"docs",previous:{title:"ProgressBar",permalink:"/docs/components/progressBar"},next:{title:"RectLayout",permalink:"/docs/components/rectLayout"}},p={rightToc:i,metadata:b},d="wrapper";function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"The Quad component renders a 2D rectangle in your scene and applies a texture to it. You can draw on this node or render stereoscopic images. By default, a quad node renders as a one meter square."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"<Quad />\n")),Object(c.b)("h2",{id:"common-events"},Object(c.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(c.b)("h2",{id:"common-properties"},Object(c.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(c.b)("h2",{id:"create-properties"},"Create Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"renderResourceId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BigInt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the resource used when drawing the quad component (optional).")))),Object(c.b)("h2",{id:"element-properties"},"Element Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"texCoords"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"[vec2]"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the texture coordinates of the node being rendered when the resource referenced in ",Object(c.b)("inlineCode",{parentName:"td"},"renderResourceId")," is a texture. If the render resource is not a texture, this has no effect.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"viewMode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the current ViewMode to the given value.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vec2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the custom size, which is one by default: ","[1, 1]",".")))),Object(c.b)("h3",{id:"viewmode-options-viewmode"},"viewMode options: ",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/types/viewMode"}),"ViewMode")))}l.isMDXComponent=!0},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(0),r=a.n(n),c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=o(a),l=n,s=d[i+"."+l]||d[l]||p[l]||c;return a?r.a.createElement(s,Object.assign({},{ref:t},b,{components:a})):r.a.createElement(s,Object.assign({},{ref:t},b))}));function l(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[b]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);