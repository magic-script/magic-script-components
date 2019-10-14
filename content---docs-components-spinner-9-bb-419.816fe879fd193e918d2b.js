(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));n(0);var r=n(185);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"spinner",title:"Spinner"},p=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"type options: LoadingSpinnerType",id:"type-options-loadingspinnertype",children:[]}]}],o={rightToc:p},c="wrapper";function b(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(c,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The Spinner component shows the loading state using specific visual effects. There are two types of loading spinners (",Object(r.b)("inlineCode",{parentName:"p"},"sprite-animation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"particle-package"),") with different effects."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<Spinner />\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The loading spinner type (",Object(r.b)("inlineCode",{parentName:"td"},"sprite-animation")," or ",Object(r.b)("inlineCode",{parentName:"td"},"particle-package"),").")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"resourceId"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The resource ID.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"resourcePath"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"''"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The resource path in the resource (optional).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The height of the loading spinner (optional).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"determinate"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"If ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", this creates a determinate loading spinner component using default settings.")))),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"value"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets a normalized value between 0-1 for loading completeness, with ",Object(r.b)("inlineCode",{parentName:"td"},"0")," being no progress and ",Object(r.b)("inlineCode",{parentName:"td"},"1")," fully complete. This is used only when the loading spinner is determinate.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"size"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"vec2"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the loading spinner size. This affects the visual scale of all sprite-based loading spinners but has no affect on the visual scale of a particle-based spinner. Modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners.")))),Object(r.b)("h3",{id:"type-options-loadingspinnertype"},"type options: ",Object(r.b)("a",a({parentName:"h3"},{href:"/docs/types/loadingSpinnerType"}),"LoadingSpinnerType")))}b.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=l(n),s=r,d=b[p+"."+s]||b[s]||c[s]||i;return n?a.a.createElement(d,Object.assign({},{ref:t},o,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[o]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);