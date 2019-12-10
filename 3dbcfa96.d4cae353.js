(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(6),i=(n(0),n(170)),a={id:"view",title:"View"},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],p={id:"components/view",title:"View",description:"## Description",source:"@site/../docs/components/View.md",permalink:"/docs/components/view",sidebar:"docs",previous:{title:"Video",permalink:"/docs/components/video"},next:{title:"WebView",permalink:"/docs/components/webView"}},s={rightToc:c,metadata:p},l="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(l,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"A View collects node children, aggregates specific events of all children, and rebroadcasts the aggregated events. When a UI element within a View broadcasts an event, two events are sent: the first one from the child and the second one from the group. Use View if you want to trigger event logic when a child node broadcasts an event, or if you want to know an event occurred within the group."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"<View />\n")),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",Object(r.a)({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",Object(r.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"create-properties"},"Create Properties"),Object(i.b)("p",null,"N/A"),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("p",null,"N/A"))}d.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r),i=o.a.createContext({}),a=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=a(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=a(n),d=r,m=l[c+"."+d]||l[d]||s[d]||i;return n?o.a.createElement(m,Object.assign({},{ref:t},p,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);