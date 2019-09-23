(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));n(0);var r=n(180);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={id:"listViewItem",title:"ListViewItem"},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties: has no properties !",id:"properties-has-no-properties-",children:[]}],p={rightToc:c},s="wrapper";function l(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(s,i({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The ListViewItem creates the parent node and container for items in a list view. Each individual list item is contained in a ListViewItem, which is parented to a ListView. The ListViewItem automatically creates a background quad that represents the bounds of the item in the list view."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"<ListViewItem />\n")),Object(r.b)("h2",{id:"properties-has-no-properties-"},"Properties: has no properties !"))}l.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r),a=i.a.createContext({}),o=function(e){var t=i.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return i.a.createElement(a.Provider,{value:t},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=o(n),u=r,d=l[c+"."+u]||l[u]||s[u]||a;return n?i.a.createElement(d,Object.assign({},{ref:t},p,{components:n})):i.a.createElement(d,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);