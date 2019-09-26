(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),b=r,d=p[l+"."+b]||p[b]||c[b]||i;return n?a.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(0);var r=n(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={id:"light",title:"Light"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"type options: LightType",id:"type-options-lighttype",children:[]},{value:"useHeadPose",id:"useheadpose",children:[]}]}],s={rightToc:l},c="wrapper";function p(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(c,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The Light component creates a light in your scene. The default light system supports 1 directional light, poised on the Headpose camera. This cannot be used in conjunction with other lights. Any light you add to the prism disables the default light. All light nodes default to a white color, but can be modified to use a different light color. Light intensity controls how bright the light is, which ranges from 0 to 1.0. All lights can optionally cast shadows."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<Light />\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"color"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"vec4"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the light color.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"intensity"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the light intensity.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"range"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the light range.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"spotAngle"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the light spot angle (ignored if this is not a spot light).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"type"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the light type.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"castsShadows"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"boolean"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Attempts to set the light's shadow casting status. Currently the system supports only one shadow casting light. In landscape mode this light is created by the system and shared by all apps. In immersive mode, the developer is responsible for setting the the shadow casting light. Only directional lights can cast shadows. If this function fails, the reason for the failure will appear in the log.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"useHeadPose"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),Object(r.b)("em",{parentName:"td"},"object")),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the head pose status of the light. Calling this function and setting a_on to true will result in the light using the headpose world transform as it's own transform.")))),Object(r.b)("h3",{id:"type-options-lighttype"},"type options: ",Object(r.b)("a",a({parentName:"h3"},{href:"/docs/types/lightType"}),"LightType")),Object(r.b)("h3",{id:"useheadpose"},"useHeadPose"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"on"),Object(r.b)("li",{parentName:"ul"},"offset")))}p.isMDXComponent=!0}}]);