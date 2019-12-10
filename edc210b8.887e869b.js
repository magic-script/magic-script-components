(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(1),a=n(6),o=(n(0),n(170)),r={id:"linearLayout",title:"LinearLayout"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"defaultItemAlignment options: Orientation",id:"defaultitemalignment-options-orientation",children:[]},{value:"itemAlignment options: Alignment",id:"itemalignment-options-alignment",children:[]},{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]}]}],c={id:"components/linearLayout",title:"LinearLayout",description:"## Description",source:"@site/../docs/components/LinearLayout.md",permalink:"/docs/components/linearLayout",sidebar:"docs",previous:{title:"Line",permalink:"/docs/components/line"},next:{title:"ListView",permalink:"/docs/components/listView"}},d={rightToc:l,metadata:c},m="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(m,Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The LinearLayout component automatically lays out multiple elements in a horizontal or vertical orientation. When you add items, they are appended to the previously added item. By default, the linear layout grows to fit vertical content without padding. Padding order is top, right, bottom, left. The default content alignment is top left for items added to the layout."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, LinearLayout, Text } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea",\n      "Metis",\n      "Ananke",\n      "Carme"\n    ];\n\n    return (\n      <View name="main-view">\n        <LinearLayout\n          defaultItemAlignment="center-left"\n          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          localPosition={[-0.25, 0.25, 0]}\n        >\n          {moons.map((moon, index) => (\n            <Text textSize={0.05} key={index} text={moon} />\n          ))}\n        </LinearLayout>\n      </View>\n    );\n  }\n}\n')),Object(o.b)("h2",{id:"common-events"},Object(o.b)("a",Object(i.a)({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(o.b)("h2",{id:"common-properties"},Object(o.b)("a",Object(i.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(o.b)("h2",{id:"element-properties"},"Element Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Sets the default item alignment within the grid. The default item alignments are ",Object(o.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"vec4"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"itemAlignment"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"itemPadding"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"vec4"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Skips invisible items. Setting this value to ",Object(o.b)("inlineCode",{parentName:"td"},"true")," causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"orientation"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Sets the horizontal or vertical orientation of this linear layout. The default orientation is ",Object(o.b)("inlineCode",{parentName:"td"},"Vertical"),".")))),Object(o.b)("h3",{id:"defaultitemalignment-options-orientation"},"defaultItemAlignment options: ",Object(o.b)("a",Object(i.a)({parentName:"h3"},{href:"/docs/types/alignment"}),"Orientation")),Object(o.b)("h3",{id:"itemalignment-options-alignment"},"itemAlignment options: ",Object(o.b)("a",Object(i.a)({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(o.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(o.b)("a",Object(i.a)({parentName:"h3"},{href:"/docs/types/orientation"}),"Orientation")))}s.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var i=n(0),a=n.n(i),o=a.a.createContext({}),r=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),m=r(n),s=i,p=m[l+"."+s]||m[s]||d[s]||o;return n?a.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);