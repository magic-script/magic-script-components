(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));n(58),n(31),n(22),n(23),n(59),n(0);var i=n(284);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r={id:"linearLayout",title:"LinearLayout"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"defaultItemAlignment options: Orientation",id:"defaultitemalignment-options-orientation",children:[]},{value:"itemAlignment options: Alignment",id:"itemalignment-options-alignment",children:[]},{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]}]}],l={rightToc:o},d="wrapper";function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(d,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The LinearLayout component automatically lays out multiple elements in a horizontal or vertical orientation. When you add items, they are appended to the previously added item. By default, the linear layout grows to fit vertical content without padding. Padding order is top, right, bottom, left. The default content alignment is top left for items added to the layout."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, LinearLayout, Text } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea",\n      "Metis",\n      "Ananke",\n      "Carme"\n    ];\n\n    return (\n      <View name="main-view">\n        <LinearLayout\n          defaultItemAlignment="center-left"\n          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          localPosition={[-0.25, 0.25, 0]}\n        >\n          {moons.map((moon, index) => (\n            <Text textSize={0.05} key={index} text={moon} />\n          ))}\n        </LinearLayout>\n      </View>\n    );\n  }\n}\n')),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default item alignment within the grid. The default item alignments are ",Object(i.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Skips invisible items. Setting this value to ",Object(i.b)("inlineCode",{parentName:"td"},"true")," causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"orientation"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the horizontal or vertical orientation of this linear layout. The default orientation is ",Object(i.b)("inlineCode",{parentName:"td"},"Vertical"),".")))),Object(i.b)("h3",{id:"defaultitemalignment-options-orientation"},"defaultItemAlignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Orientation")),Object(i.b)("h3",{id:"itemalignment-options-alignment"},"itemAlignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(i.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/orientation"}),"Orientation")))}m.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var i=n(0),a=n.n(i),r=a.a.createContext({}),o=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),c=i,p=s[l+"."+c]||s[c]||m[c]||r;return n?a.a.createElement(p,Object.assign({},{ref:t},d,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);