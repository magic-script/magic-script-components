(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(9),r=(n(0),n(206)),o={id:"gridLayout",title:"GridLayout"},l={id:"components/gridLayout",title:"GridLayout",description:"## Description",source:"@site/../docs/components/GridLayout.md",permalink:"/docs/components/gridLayout",sidebar:"docs",previous:{title:"DropdownListItem",permalink:"/docs/components/dropdownListItem"},next:{title:"Image",permalink:"/docs/components/image"}},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"defaultItemAlignment options: Alignment",id:"defaultitemalignment-options-alignment",children:[]},{value:"itemAlignment options: Alignment",id:"itemalignment-options-alignment",children:[]}]}],m={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The GridLayout class automatically lays out elements in a grid with optional padding. The grid layout grows to accommodate additional items based on row and column settings. You can constrain the number of columns, rows, or both. If you constrain only one dimension, the other grows as needed. If the layout has an explicit width, then any items added to it shrinks to fit if they are larger than the width of the layout. All units are in meters, including padding."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, GridLayout, Text } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea",\n      "Metis",\n      "Ananke",\n      "Carme"\n    ];\n\n    return (\n      <View name="main-view">\n        <GridLayout\n          columns={3}\n          rows={3}\n          defaultItemAlignment="center-left"\n          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          localPosition={[-0.25, 0.25, 0]}\n        >\n          {moons.map((moon, index) => (\n            <Text textSize={0.05} key={index} text={moon} />\n          ))}\n        </GridLayout>\n      </View>\n    );\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport { GridLayout, LinearLayout, Text, View } from \"magic-script-components\";\n\nexport default class MyApp extends React.Component {\n  render() {\n    return (\n      <View name=\"main-view\">\n        <GridLayout localPosition={[0, 0.5, 0]} width={0.5} height={0.8} rows={2} columns={2}\n          itemAlignment={[\n            {row: 0, column: 0, alignment: 'top-right'},\n            {row: 0, column: 1, alignment: 'bottom-left'},\n            {row: 1, column: 0, alignment: 'top-left'},\n            {row: 1, column: 1, alignment: 'bottom-right'}\n          ]}\n        >\n          <Text textSize={0.08} text='Europa' />\n          <Text textSize={0.06} text='Atlas' />\n          <Text textSize={0.1 } text='Callisto' />\n          <Text textSize={0.03} text='Dia' />\n        </GridLayout>\n      </View>\n    );\n  }\n}\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/events/commonEvents"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the default item alignment within the grid. The default item alignments are ",Object(r.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vec4"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"itemAlignment"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"itemPadding"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vec4"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Skips invisible items. Setting this value to ",Object(r.b)("inlineCode",{parentName:"td"},"true")," causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"columns"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the number of columns for the grid. The default value of ",Object(r.b)("inlineCode",{parentName:"td"},"0")," indicates the number of columns can grow to fit items as they are added. Setting the value above ",Object(r.b)("inlineCode",{parentName:"td"},"0")," locks the grid column dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of columns is set, the grid lays items in row-major order.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rows"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the number of rows for the grid. The default value of ",Object(r.b)("inlineCode",{parentName:"td"},"0")," indicates the number of rows can grow to fit items as they are added. Setting the value above zero locks the grid row dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of rows is set (and columns is zero), the grid lays items in column-major order.")))),Object(r.b)("h3",{id:"defaultitemalignment-options-alignment"},"defaultItemAlignment options: ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(r.b)("h3",{id:"itemalignment-options-alignment"},"itemAlignment options: ",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")))}d.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),d=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=d(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=a,u=s["".concat(o,".").concat(p)]||s[p]||b[p]||r;return n?i.a.createElement(u,l({ref:t},m,{components:n})):i.a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);