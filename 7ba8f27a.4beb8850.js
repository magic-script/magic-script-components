(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(170)),o={id:"dropdownList",title:"DropdownList"},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"selected",id:"selected",children:[]}]}],l={id:"components/dropdownList",title:"DropdownList",description:"## Description",source:"@site/../docs/components/DropdownList.md",permalink:"/docs/components/dropdownList",sidebar:"docs",previous:{title:"Dialog",permalink:"/docs/components/dialog"},next:{title:"DropdownListItem",permalink:"/docs/components/dropdownListItem"}},b={rightToc:c,metadata:l},s="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"DropDownList")," creates a vertical drop-down list box. Single or multiple items can be selected from a ",Object(i.b)("inlineCode",{parentName:"p"},"DropDownList"),". Drop-down lists can be flat or nested. When you create nested drop-down lists, only the parent list and the current list are visible at the same time. Drop-down lists that overflow are automatically styled to show that there are more selections."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, DropdownList, DropdownListItem } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  state = { selectedId: undefined };\n\n  onSelection = eventData => {\n    console.log("Selected items:", eventData.SelectedItems);\n  };\n\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea"\n    ];\n\n    return (\n      <View name="main-view">\n        <DropdownList\n          text="Select Moon"\n          iconColor={[0.5, 1.0, 0.5, 0.8]}\n          onSelectionChanged={this.onSelection}\n        >\n          {moons.map((moon, index) => (\n            <DropdownListItem id={index} label={moon} />\n          ))}\n        </DropdownList>\n      </View>\n    );\n  }\n}\n')),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"create-properties"},"Create Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The UTF-8 encoded text to initially set the drop-down list label to.")))),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"iconSize"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Sets the button icon size in scene units.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"iconColor"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vec4"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Sets the RGBA color of the button icon.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"listMaxHeight"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Sets the maximum height of a drop-down list. The default value (",Object(i.b)("inlineCode",{parentName:"td"},"0"),") indicates there is no limit and the list grows as long as it needs to. Setting a value greater than zero will set the maximum height such that if a list is larger than the maxiumum height, the list content scrolls.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"listTextSize"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Sets the size of the list text. If no size set, the list uses the same text size used in the drop-down list menu button itself. If no text is present on the menu button, the default text size is used.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"maxCharacterLimit"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Sets the maximum amount of characters to be used per list item label before adding '...'. The default character limit is ",Object(i.b)("inlineCode",{parentName:"td"},"0"),", which means there is no limit and the labels scale to the largest item.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"multiSelect"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Sets the multi-select mode of the drop-down list.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"showList"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Shows the drop-down list or not.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"selected"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("em",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Sets the selected state of a ",Object(i.b)("inlineCode",{parentName:"td"},"DropDownListItem"),". This uses the ID set for a particular ",Object(i.b)("inlineCode",{parentName:"td"},"DropDownListItem"),", which should be unique. If the ID is not unique, the first item with that ID is set. State are updated upon closing and reopening the list when the list is visible.")))),Object(i.b)("h3",{id:"selected"},"selected"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    id: <number>,\n    selected: <boolean>\n}\n")))}p.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),p=a,d=s[c+"."+p]||s[p]||b[p]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);