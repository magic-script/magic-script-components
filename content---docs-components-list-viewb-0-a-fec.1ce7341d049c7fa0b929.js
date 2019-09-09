(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));n(0);var a=n(174);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l={id:"listView",title:"ListView"},o=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"itemAlignment",id:"itemalignment",children:[]},{value:"itemPadding",id:"itempadding",children:[]},{value:"cursorEdgeScrollMode options: CursorEdgeScrollMode",id:"cursoredgescrollmode-options-cursoredgescrollmode",children:[]},{value:"defaultItemAlignment options: Alignment",id:"defaultitemalignment-options-alignment",children:[]},{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]},{value:"scrollBarVisibility options: ScrollBarVisibility",id:"scrollbarvisibility-options-scrollbarvisibility",children:[]},{value:"itemAlignment.alignment options: Alignment",id:"itemalignmentalignment-options-alignment",children:[]}]},{value:"Events",id:"events",children:[]}],b={rightToc:o},c="wrapper";function d(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(c,i({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ListView is a component for displaying lists of information."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"<ListView />\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",i({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",i({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"0")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"The width of the list view. The default (0) allows the list to grow to content.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"0")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"The height of the list view. The default (0) allows the list to grow to content.")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"cursorEdgeScrollMode"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the cursor edge scroll mode for this list view.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the default item alignment within the list. Default item alignments are TOP_LEFT. This will be set for any new items that are added that aren't explicitly specifying alignment. The alignment of each individual item can still be set later if needed.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"vec4"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the default padding of each item within the list, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that aren't explicitly specifying padding. The padding of each individual item can still be set later if needed.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"orientation"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the orientation of this list view. The default orientation is Vertical.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"scrollBarVisibility"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the vibility mode of the scrollbar(s) attached.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"scrollingEnabled"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets whether the list view scrolling is enabled or not.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"scrollSpeed"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the scroll speed in scene units per second.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"scrollValue"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the scroll content position manually with normalized value between 0 and 1.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"scrollToItem"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"The index of the item you would like to scroll to.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Skips invisble items. Setting this value to true will cause the layout to skip over any invisible items. The layout will check the visibility of each top-level item Node added and if invisible, along with inherited visibility, will skip that Node for layout.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"itemAlignment"),Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the item alignment at the specified index.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"itemPadding"),Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the item padding at the specified index.")))),Object(a.b)("h3",{id:"itemalignment"},"itemAlignment"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"{\n    index: <number>,\n    alignment: <string>\n}\n")),Object(a.b)("h3",{id:"itempadding"},"itemPadding"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"{\n    index: <number>,\n    padding: <vec4>\n}\n")),Object(a.b)("h3",{id:"cursoredgescrollmode-options-cursoredgescrollmode"},"cursorEdgeScrollMode options: ",Object(a.b)("a",i({parentName:"h3"},{href:"/docs/types/cursorEdgeScrollMode"}),"CursorEdgeScrollMode")),Object(a.b)("h3",{id:"defaultitemalignment-options-alignment"},"defaultItemAlignment options: ",Object(a.b)("a",i({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(a.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(a.b)("a",i({parentName:"h3"},{href:"/docs/types/orientation"}),"Orientation")),Object(a.b)("h3",{id:"scrollbarvisibility-options-scrollbarvisibility"},"scrollBarVisibility options: ",Object(a.b)("a",i({parentName:"h3"},{href:"/docs/types/scrollBarVisibility"}),"ScrollBarVisibility")),Object(a.b)("h3",{id:"itemalignmentalignment-options-alignment"},"itemAlignment.alignment options: ",Object(a.b)("a",i({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(a.b)("h2",{id:"events"},"Events"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"onScrollChanged")))}d.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a),r=i.a.createContext({}),l=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,p=d[o+"."+m]||d[m]||c[m]||r;return n?i.a.createElement(p,Object.assign({},{ref:t},b,{components:n})):i.a.createElement(p,Object.assign({},{ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[b]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);