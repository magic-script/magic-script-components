(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(0);var r=n(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"scrollBar",title:"ScrollBar"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]}]}],c={rightToc:i},b="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(b,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The ScrollBar creates a scrollbar used in conjunction with a ScrollView. This creates the visual indicator that the content can be scrolled and provides the controls used to scroll the view. By default, the scrollbar is as long the ScrollView is. The ends of the scrollbar cannot be interacted with, so the scroll range is less than the entire length of the scroll bar. You generally do not need to change either."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<ScrollBar />\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The length of the scrollbar. This is a little bit longer than the scroll range (which is the range the thumb will run)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"This is how wide the scrollbar will be. A user should normally not care about this unless they intend to change the skin of an app")))),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"thumbSize"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the size of the thumb. This function is called in particular by UiScrollBar to update the size of the thumb according to the size of the scroll bound in respect to that of the scroll content. If the ratio is out of the range 0-1, the thumb is hidden.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"thumbPosition"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the position of the thumb along the track according to the value passed. A value of 0 will place the thumb at the left/upper most possible position along the track. A value of 1 will place the thumb at the right/bottom most possible position along the track. This value must reflect the position of the ScrollView's scroll bound in respect to ScrollView's scroll content.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"orientation"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Used only when adding ScrollBar to ScrollView")))),Object(r.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(r.b)("a",a({parentName:"h3"},{href:"/docs/types/orientation"}),"Orientation")))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),s=r,h=p[i+"."+s]||p[s]||b[s]||o;return n?a.a.createElement(h,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(h,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);