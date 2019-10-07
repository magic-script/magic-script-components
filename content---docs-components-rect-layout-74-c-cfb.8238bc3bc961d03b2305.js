(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(0);var a=n(180);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={id:"rectLayout",title:"RectLayout"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"contentAlignment options: Alignment",id:"contentalignment-options-alignment",children:[]}]}],c={rightToc:l},s="wrapper";function p(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(s,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The RectLayout component allows you to automatically layout content within a single rectangular plane with side padding and content alignment. It acts like a table cell when used in conjunction with other layout elements. When you do not specify the rectangle size, or use ",Object(a.b)("inlineCode",{parentName:"p"},"0"),", the rectangle grows to fit the content until it is clipped by the edges of the container. Non-uniform scaling is not recommended.  By default, there is no padding and content is aligned to the top left. The padding order is top, right, bottom, left."),Object(a.b)("p",null,"The RectLayout sends events only when it is the immediate parent of a UI element. For example, if you have text in a RectLayout, both the text and the RectLayout send onHover events. If you have a text button inside the layout, the layout does not send an onHover event because the parent of the text is the button."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"<RectLayout />\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",o({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",o({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"contentAlignment"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Sets the content alignment within the rectangular area. The default content alignments are ",Object(a.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". When the size of the layout is set to zero in a dimension, it grows in that dimension to fit both the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"padding"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"vec4"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Sets the content padding for the four sides of the rectangular area, in scene units. The default is no padding (",Object(a.b)("inlineCode",{parentName:"td"},"0,0,0,0"),"). The padding order is: top, right, bottom, left. When the size of the layout is set to zero in a dimension, it grows in that dimension to fit both the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored.")))),Object(a.b)("h3",{id:"contentalignment-options-alignment"},"contentAlignment options: ",Object(a.b)("a",o({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,m=p[l+"."+d]||p[d]||s[d]||r;return n?o.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);