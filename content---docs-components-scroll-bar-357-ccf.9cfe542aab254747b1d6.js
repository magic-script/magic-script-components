(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(284);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={id:"scrollBar",title:"ScrollBar"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]}]}],l={rightToc:i},c="wrapper";function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(c,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The ScrollBar component creates a scroll bar used in conjunction with a ScrollView component. This creates the visual indicator that the content can be scrolled and provides the controls used to scroll the view. By default, the scroll bar is as long the ScrollView. The ends of the scroll bar cannot be interacted with, so the scroll range is less than the entire length of the scroll bar. You generally do not need to change either."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<ScrollBar />\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"This is the length of the scroll bar. This is a little bit longer than the scroll range (which is the range the scroll bar thumb runs).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"This is the width of the scroll bar. A user should normally not care about this unless they intend to change the skin of an app.")))),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"thumbSize"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the size of the scroll bar thumb. This updates the size of the scroll bar thumb according to the size of the scroll bounds in respect to the size of the scroll content. If the ratio is out of the range 0-1, the thumb is hidden.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"thumbPosition"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the position of the scroll bar thumb along the track according to the value passed. A value of ",Object(r.b)("inlineCode",{parentName:"td"},"0")," places the thumb at the left or upper most possible position along the track. A value of ",Object(r.b)("inlineCode",{parentName:"td"},"1")," places the thumb at the right or bottom most possible position along the track. This value must reflect the position of the ScrollView's scroll bounds in respect to ScrollView's scroll content.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"orientation"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets how the scroll bar is orientated. This is used only when adding ScrollBar to ScrollView.")))),Object(r.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(r.b)("a",a({parentName:"h3"},{href:"/docs/types/orientation"}),"Orientation")))}b.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),p=r,h=s[l+"."+p]||s[p]||b[p]||o;return n?a.a.createElement(h,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(h,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);