(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{180:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n),b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,d=p[i+"."+m]||p[m]||o[m]||b;return a?r.a.createElement(d,Object.assign({},{ref:t},c,{components:a})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<b;m++)l[m]=a[m];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));a(0);var n=a(180);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l={id:"image",title:"Image"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"icon options: IconType",id:"icon-options-icontype",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:i},o="wrapper";function p(e){var t=e.components,a=b(e,["components"]);return Object(n.b)(o,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"Images display an alignable 2D image from an image resource."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'<Image\n    filePath="path/to/your/file" \n    height={0.150} \n    localPosition={[0.1, 0.1, 0]} \n    useFrame={true}\n    width={0.3}\n/>\n')),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Image offers 3 constructors accepting different property sets")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"filePath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The path to the file to render for the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The width of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"absolutePath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Flag that pngFile is an absolute path name, instead of a relative path.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"useFrame"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Specifies whether the image should have a frame.")))),Object(n.b)("hr",null),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"resourceId"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"BigInt"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The resource ID to render for the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The width of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"useFrame"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Specifies whether the image should have a frame.")))),Object(n.b)("hr",null),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"icon"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The SystemIcon type for the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")))),Object(n.b)("h3",{id:"icon-options-icontype"},"icon options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/iconType"}),"IconType")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets a color to modulate the image with.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"textCoords"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"[vec2]"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the texture coordinates used by the Image. The texture coordinates must be a list of 4 coordinates representing the UV coordinates of the 4 corners.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"opaque"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the opacity state of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"ui"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets if the image needs to be rendered on UI Layer.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"imageFrameResource"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"BigInt"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the model resource used for the image frame. Note: Frame models are expected to be sized at 1 meter high and 1 meter wide and to be centered at the origin.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"renderResource"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"BigInt"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the render resource used for the image.")))))}p.isMDXComponent=!0}}]);