(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(284);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"panel",title:"Panel"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"edgeConstraint",id:"edgeconstraint",children:[]},{value:"edgeConstraintLevel",id:"edgeconstraintlevel",children:[]},{value:"panelShape",id:"panelshape",children:[]},{value:"cursorTransitionType options: PanelCursorTransitionType",id:"cursortransitiontype-options-panelcursortransitiontype",children:[]},{value:"edgeConstraintLevel options: PanelEdgeConstraintLevel",id:"edgeconstraintlevel-options-paneledgeconstraintlevel",children:[]}]}],s={rightToc:o},l="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The Panel component organizes two or more elements, transforms descendants within its bounds, and affects the cursor. Panels can also use gravity wells to lightly constrain the cursor within the panel. Panels can parent other panels or be in a layout with other panels. Use Panels when your app needs high-level or visual navigation clues or when you need a way to navigate between locations or purposes. Use subpanels when you want to visually separate or sort groups of similar content or group content to receive the same transforms. By default, a Panel creates a 2D square that is centered on the parent node's position."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport { View, Panel, Button } from \"magic-script-components\";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const aShape = {\n      size: [0.4, 0.4],\n      offset: [0, 0, 0],\n      roundness: 0.2\n    };\n\n    const bShape = {\n      size: [0.4, 0.4],\n      offset: [0, 0, 0],\n      roundness: 0.8\n\n    };\n\n    return (\n      <View name='main-view'>\n        <Panel\n          localPosition={[0, 0.25, 0]}\n          panelShape={aShape}\n          cursorTransitionType='closest-edge'\n          cursorVisible={true}\n        >\n          <Button\n            text='Panel A'\n            textSize={0.1}\n            roundness={aShape.roundness}\n            width={aShape.size[0]}\n            height={aShape.size[1]}/>\n        </Panel>\n        <Panel\n          localPosition={[0, -0.25, 0]}\n          panelShape={bShape}\n          cursorTransitionType='center'\n          cursorVisible={false}\n        >\n          <Button\n            text='Panel B'\n            textSize={0.1}\n            roundness={bShape.roundness}\n            width={aShape.size[0]}\n            height={aShape.size[1]}/>\n        </Panel>\n      </View>\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorConstrained"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the panel constrains cursor movement within the boundary shape or not.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorInitialPosition"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec3"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the initial position of the cursor within the panel upon a Panel-to-Panel transition when PanelCursorTransitionType 'initial-position' is in affect.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorTransitionType"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the cursor transition type for the panel. The cursor transition type dictates where the cursor appears upon a panel transition, such as the closest edge, center, or initial position. The default is the initial position.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorVisible"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the cursor is visible while inside the ",Object(a.b)("inlineCode",{parentName:"td"},"<Panel>"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"edgeConstraint"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the edge constraint and panel transition properties for a side of the panel shape.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"edgeConstraintLevel"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the edge constraint for a side of the panel shape using a discrete constraint level. Panel edge constraint levels are mapped to a float magnitude and can be used for a consistent setting instead of setting the magnitude manually.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"panelShape"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the boundary shape for the panel. The panel is not active until the shape is set.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"side"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the side of the boundary shape.")))),Object(a.b)("h3",{id:"edgeconstraint"},"edgeConstraint"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    side: <string>,\n    constraintMagnitude: <number>\n}\n")),Object(a.b)("h3",{id:"edgeconstraintlevel"},"edgeConstraintLevel"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    side: <string>,\n    level: <string>\n}\n")),Object(a.b)("h3",{id:"panelshape"},"panelShape"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    size: <vec2>,\n    offset: <vec3>,\n    roundness: <number>\n}\n")),Object(a.b)("h3",{id:"cursortransitiontype-options-panelcursortransitiontype"},"cursorTransitionType options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/panelCursorTransitionType"}),"PanelCursorTransitionType")),Object(a.b)("h3",{id:"edgeconstraintlevel-options-paneledgeconstraintlevel"},"edgeConstraintLevel options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/panelEdgeConstraintLevel"}),"PanelEdgeConstraintLevel")))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=o(n),b=a,d=c[s+"."+b]||c[b]||p[b]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);