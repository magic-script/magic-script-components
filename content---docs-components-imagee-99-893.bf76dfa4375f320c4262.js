(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a),l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p[i+"."+m]||p[m]||o[m]||l;return n?r.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,b[1]=i;for(var m=2;m<l;m++)b[m]=n[m];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(0);var a=n(185);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={id:"image",title:"Image"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"icon options: IconType",id:"icon-options-icontype",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:i},o="wrapper";function p(e){var t=e.components,n=l(e,["components"]);return Object(a.b)(o,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The Image component displays a 2D image from an image file."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport { View, Image, Button } from \"magic-script-components\";\n\nexport default class MyApp extends React.Component {\n  state = { index: 1 }\n\n  onNextClick = (eventData) => {\n    this.setState(state => ({ index: state.index < 4 ? state.index + 1 : 1 }));\n  }\n\n  render() {\n    const path = `res/DemoPicture${this.state.index}.jpg`;\n\n    return (\n      <View>\n        <Image\n          filePath={path}\n          height={0.25}\n          width={0.5}\n          localPosition={[0.1, 0.1, 0]}\n        />\n        <Button\n          localPosition={[ 0.12, -0.15, 0]}\n          width={0.25}\n          height={0.10}\n          roundness={0.5}\n          type='icon'\n          iconType='arrow-right'\n          onClick={this.onNextClick}\n        />\n      </View>\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Image offers 3 constructors accepting different property sets.")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"filePath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The path to the file to render for the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The width of the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"absolutePath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Flag that pngFile is an absolute path name, instead of a relative path.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"useFrame"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Specifies whether the image should have a frame.")))),Object(a.b)("hr",null),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"resourceId"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"BigInt"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The resource ID to render for the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The width of the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"useFrame"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Specifies whether the image should have a frame.")))),Object(a.b)("hr",null),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"icon"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The SystemIcon type for the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")))),Object(a.b)("h3",{id:"icon-options-icontype"},"icon options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/iconType"}),"IconType")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"color"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets a color to modulate the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textCoords"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"[vec2]"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the texture coordinates used by the image. The texture coordinates must be a list of four coordinates representing the UV coordinates of the four corners.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"opaque"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the opacity state of the image.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"ui"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the image is rendered on UI Layer.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"imageFrameResource"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"BigInt"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the model resource used for the image frame. Note: Frame models are expected to be one meter high,  one meter wide, and centered at the origin.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"renderResource"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"BigInt"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the render resource used for the image.")))))}p.isMDXComponent=!0}}]);