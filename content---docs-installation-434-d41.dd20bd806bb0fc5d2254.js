(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,u=s[c+"."+b]||s[b]||p[b]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},i,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:r,l[1]=c;for(var b=2;b<o;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));n(0);var r=n(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"installation",title:"Installation"},c=[],i={rightToc:c},p="wrapper";function s(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(p,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install ",Object(r.b)("inlineCode",{parentName:"li"},"magic-script-cli"),":")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"npm install -g magic-script-cli\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create new MagicScript application:")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"magic-script init\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow the steps."),Object(r.b)("li",{parentName:"ul"},'Choose "Components" when application type is requested.')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Install the required ",Object(r.b)("inlineCode",{parentName:"li"},"npm")," packages from the app folder:")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Build and install your application:")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"magic-script build -i\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Refer to MagicScript ",Object(r.b)("a",a({parentName:"li"},{href:"https://www.magicscript.org/docs/getting-started"}),"Getting Started")," guide for more information.")))}s.isMDXComponent=!0}}]);