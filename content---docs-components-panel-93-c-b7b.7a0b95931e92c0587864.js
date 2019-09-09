(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(0);var a=n(174);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={id:"panel",title:"Panel"},l=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"edgeConstraint",id:"edgeconstraint",children:[]},{value:"edgeConstraintLevel",id:"edgeconstraintlevel",children:[]},{value:"panelShape",id:"panelshape",children:[]},{value:"cursorTransitionType options: PanelCursorTransitionType",id:"cursortransitiontype-options-panelcursortransitiontype",children:[]},{value:"edgeConstraintLevel.level options: PanelEdgeConstraintLevel",id:"edgeconstraintlevellevel-options-paneledgeconstraintlevel",children:[]}]}],s={rightToc:l},c="wrapper";function p(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(c,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"<Panel />\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorConstrained"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the Panel constrains cursor movement within the boundary shape or not.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorInitialPosition"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec3"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the initial position of the cursor within the Panel upon a Panel-to-Panel transition when PanelCursorTransitionType 'initial-position' is in affect.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorTransitionType"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the cursor transition type for the Panel. The cursor transition type dictates where the cursor appears upon a Panel transition, whether closest edge, center, or manually set initial position. The default is the initial position.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorVisible"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the cursor is visible while inside the ",Object(a.b)("inlineCode",{parentName:"td"},"<Panel>"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"edgeConstraint"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the edge constraint and Panel transition properties for a side of the Panel shape.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"edgeConstraintLevel"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the edge constraint for a side of the Panel shape using a discrete constraint level. Panel edge constraint levels are mapped to a float magnitude and can be used for a consistent setting instead of setting the magnitude manually.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"panelShape"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the boundary shape for the UiPanel. The UiPanel will not be active until the shape is set.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"side"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}))))),Object(a.b)("h3",{id:"edgeconstraint"},"edgeConstraint"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    side: <string>,\n    constraintMagnitude: <number>\n}\n")),Object(a.b)("h3",{id:"edgeconstraintlevel"},"edgeConstraintLevel"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    side: <string>,\n    level: <string>\n}\n")),Object(a.b)("h3",{id:"panelshape"},"panelShape"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    size: <vec2>,\n    offset: <vec3>,\n    roundness: <number>\n}\n")),Object(a.b)("h3",{id:"cursortransitiontype-options-panelcursortransitiontype"},"cursorTransitionType options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/panelCursorTransitionType"}),"PanelCursorTransitionType")),Object(a.b)("h3",{id:"edgeconstraintlevellevel-options-paneledgeconstraintlevel"},"edgeConstraintLevel.level options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/panelEdgeConstraintLevel"}),"PanelEdgeConstraintLevel")))}p.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),b=a,d=p[l+"."+b]||p[b]||c[b]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);