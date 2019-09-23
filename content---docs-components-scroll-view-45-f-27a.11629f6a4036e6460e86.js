(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));r(0);var n=r(180);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o={id:"scrollView",title:"ScrollView"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"scrollBounds",id:"scrollbounds",children:[]},{value:"scrollBarVisibility options: ScrollBarVisibility",id:"scrollbarvisibility-options-scrollbarvisibility",children:[]},{value:"ScrollDirection options: ScrollDirection",id:"scrolldirection-options-scrolldirection",children:[]}]}],c={rightToc:i},s="wrapper";function b(e){var t=e.components,r=a(e,["components"]);return Object(n.b)(s,l({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The ScrollView class represents a scrollable content view so objects, such as images or text, can overflow the viewable area. The ScrollView creates a 3D box (Quad) that you specify a minimum and maximum corner that contains all of your content. The scroll bounds sets the viewable area (AABB) of the 3D box. Content outside the scroll bounds is clipped. You can scroll horizontally, vertically, or both. When scrolling, the cursor snaps to contents of the scroll view when gravity wells and snap are enabled. By default, the scroll view is the size of the volume that called it and scrolls vertically with a .5f scroll rate and a 2.0f activity duration."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"<ScrollView>\n  <ScrollBar />\n  <Content>\n    <Text>Message Box</Text>\n    <Button>Submit</Button>\n  </Content>\n</ScrollView>\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",l({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",l({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"scrollBarVisibility"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Sets the vibility mode of any scrollbar(s) attached. The visibility mode will affect the visibility of any attached scroll bars.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"scrollDirection"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Sets the scroll direction for the scroll view (default is vertical).")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"scrollMask"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Applies the texture resource as a mask for UiScrollView content.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"scrollOffset"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"vec3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Sets the scroll content offset manually.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"scrollSpeed"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Sets the scroll speed in scene units per second.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"scrollValue"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Sets the scroll content position manually with normalized value between 0 and 1.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"scrollBounds"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"object")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Sets the scroll view bounds. The bounds are defined within the ScrollView's local coordinate system. The scroll bounds is used to both clip content visually and to automatically clamp content scrolling extents to stay within the bounds.")))),Object(n.b)("h3",{id:"scrollbounds"},"scrollBounds"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),"{\n    min: <vec3>,\n    max: <vec3>\n}\n")),Object(n.b)("h3",{id:"scrollbarvisibility-options-scrollbarvisibility"},"scrollBarVisibility options: ",Object(n.b)("a",l({parentName:"h3"},{href:"/docs/types/scrollBarVisibility"}),"ScrollBarVisibility")),Object(n.b)("h3",{id:"scrolldirection-options-scrolldirection"},"ScrollDirection options: ",Object(n.b)("a",l({parentName:"h3"},{href:"/docs/types/scrollDirection"}),"ScrollDirection")))}b.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return p}));var n=r(0),l=r.n(n),a=l.a.createContext({}),o=function(e){var t=l.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=o(e.components);return l.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),b=o(r),p=n,d=b[i+"."+p]||b[p]||s[p]||a;return r?l.a.createElement(d,Object.assign({},{ref:t},c,{components:r})):l.a.createElement(d,Object.assign({},{ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);