(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(284);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={id:"dialog",title:"Dialog"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"Dialog Type options: DialogType",id:"dialog-type-options-dialogtype",children:[]},{value:"DialogLayout options: DialogLayout",id:"dialoglayout-options-dialoglayout",children:[]}]},{value:"Element Properties",id:"element-properties",children:[{value:"buttonType options: ButtonType",id:"buttontype-options-buttontype",children:[]},{value:"cancelIcon / confirmIcon options: IconType",id:"cancelicon--confirmicon-options-icontype",children:[]}]}],l={rightToc:i},c="wrapper";function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The Dialog is a container where you can place other UI components - such as layouts, buttons, or text - as child nodes."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'onDialogCancel = (event) => {\n    console.log("onDialogCancel");\n  }\n\nonDialogConfirm = (event) => {\n    console.log("onDialogConfirm");\n  }\n  \n<Dialog\n    buttonType="text-with-icon"\n    dialogType="dual-action"\n    dialogLayout="wide"\n    cancelIcon="thumbs-up"\n    cancelText="Cancel"\n    confirmIcon="check"\n    confirmText="Confirm"\n    title="This is title"\n    text="This is text"\n    onCancel={this.onDialogCancel}\n    onConfirm={this.onDialogConfirm}\n/>\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"title"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The dialog title text. Use an empty string to hide the title.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The dialog message text. Use an empty string to hide the message.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"type"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"dual-action")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The type of dialog.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"layout"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"standard")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The dialog layout preference.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"scrolling"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Creates a new dialog with vertical scrolling content.")))),Object(a.b)("h3",{id:"dialog-type-options-dialogtype"},"Dialog Type options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/dialogType"}),"DialogType")),Object(a.b)("h3",{id:"dialoglayout-options-dialoglayout"},"DialogLayout options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/dialogLayout"}),"DialogLayout")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"buttonType"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the button type to use for the dialog.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cancelText"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the UTF-8 encoded Cancel button text, default is ",Object(a.b)("inlineCode",{parentName:"td"},"Cancel"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cancelIcon"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the Confirm button icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"confirmText"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the UTF-8 encoded Confirm button text, default is ",Object(a.b)("inlineCode",{parentName:"td"},"Confirm"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"confirmIcon"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the Confirm button icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"expireTime"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the expiration time for the dialog in seconds. For modeless timed dialogs, and optionally for other dialogs, a timer can be set that sends out the ",Object(a.b)("inlineCode",{parentName:"td"},"onTimeExpired")," event when the dialog time expires. The dialog does not destroy itself and must be handled by the caller using the event.")))),Object(a.b)("h3",{id:"buttontype-options-buttontype"},"buttonType options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/buttonType"}),"ButtonType")),Object(a.b)("h3",{id:"cancelicon--confirmicon-options-icontype"},"cancelIcon / confirmIcon options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/iconType"}),"IconType")))}b.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,m=p[l+"."+d]||p[d]||b[d]||o;return n?r.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);