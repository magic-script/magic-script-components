(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),l=(n(0),n(170)),i={id:"scrollView",title:"ScrollView"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"scrollBounds",id:"scrollbounds",children:[]},{value:"scrollBarVisibility options: ScrollBarVisibility",id:"scrollbarvisibility-options-scrollbarvisibility",children:[]},{value:"ScrollDirection options: ScrollDirection",id:"scrolldirection-options-scrolldirection",children:[]}]}],c={id:"components/scrollView",title:"ScrollView",description:"## Description",source:"@site/../docs/components/ScrollView.md",permalink:"/docs/components/scrollView",sidebar:"docs",previous:{title:"ScrollBar",permalink:"/docs/components/scrollBar"},next:{title:"Slider",permalink:"/docs/components/slider"}},s={rightToc:o,metadata:c},b="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(b,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"The ScrollView component represents a scrollable content view so objects, such as images or text, can overflow the viewable area. The ScrollView creates a 3D box that you specify a minimum and maximum corner that contains all of your content. The scroll bounds sets the viewable area (AABB) of the 3D box. Content outside the scroll bounds is clipped. You can scroll horizontally, vertically, or both. When scrolling, the cursor snaps to contents of the scroll view when gravity wells and snap are enabled."),Object(l.b)("p",null,"By default, the scroll view is the size of your prism and scrolls vertically with a .5f scroll rate and a 2.0f activity duration."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport {\n  View,\n  ScrollView,\n  ScrollBar,\n  Text,\n  LinearLayout\n} from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const alphabet = [\n      "Alfa",\n      "Bravo",\n      "Charlie",\n      "Delta",\n      "Echo",\n      "Foxtrot",\n      "Golf",\n      "Hotel",\n      "India",\n      "Juliett",\n      "Kilo",\n      "Lima",\n      "Mike",\n      "November",\n      "Oscar",\n      "Papa",\n      "Quebec",\n      "Romeo",\n      "Sierra",\n      "Tango",\n      "Uniform",\n      "Victor",\n      "Whiskey",\n      "X-ray",\n      "Yankee",\n      "Zulu"\n    ];\n\n    const aabb = {\n      min: [-0.25, -0.45, -0.1],\n      max: [0.25, 0.35, 0.1]\n    };\n\n    const calculateValue = (number, multiplier) =>\n      ((number + 1 * multiplier) % 10) * 0.1;\n\n    return (\n      <View name="main-view">\n        <Text\n          text="Phonetic Alphabet"\n          textSize={0.07}\n          localPosition={[-0.15, 0.4, 0]}\n        />\n        <ScrollView scrollBarVisibility="always" scrollBounds={aabb}>\n          <ScrollBar width={0.6} thumbSize={0.03} orientation="vertical" />\n          <LinearLayout\n            defaultItemAlignment="center-left"\n            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n            orientation="vertical"\n          >\n            {alphabet.map((word, index) => (\n              <Text\n                textSize={0.05}\n                key={index}\n                text={`${word[0]} - ${word}`}\n                textColor={[\n                  calculateValue(index, 1),\n                  calculateValue(index, 2),\n                  calculateValue(index, 3),\n                  0.8\n                ]}\n              />\n            ))}\n          </LinearLayout>\n        </ScrollView>\n      </View>\n    );\n  }\n}\n')),Object(l.b)("h2",{id:"common-events"},Object(l.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(l.b)("h2",{id:"common-properties"},Object(l.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(l.b)("h2",{id:"element-properties"},"Element Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"scrollBarVisibility"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the visibility mode of any attached scrollbars. The visibility mode affects the visibility of any attached scroll bars.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"scrollDirection"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the scroll direction for the scroll view. The default is vertical.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"scrollMask"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Applies the texture resource as a mask for ScrollView content.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"scrollOffset"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vec3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the scroll content offset manually.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"scrollSpeed"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the scroll speed in scene units per second.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"scrollValue"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the scroll content position manually with a normalized value between 0 and 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"scrollBounds"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("em",{parentName:"td"},"object")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the scroll bounds. The bounds are defined within the ScrollView's local coordinate system. The scroll bounds is used to both clip content visually and to automatically clamp content scrolling extents to stay within the bounds.")))),Object(l.b)("h3",{id:"scrollbounds"},"scrollBounds"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    min: <vec3>,\n    max: <vec3>\n}\n")),Object(l.b)("h3",{id:"scrollbarvisibility-options-scrollbarvisibility"},"scrollBarVisibility options: ",Object(l.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/types/scrollBarVisibility"}),"ScrollBarVisibility")),Object(l.b)("h3",{id:"scrolldirection-options-scrolldirection"},"ScrollDirection options: ",Object(l.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/types/scrollDirection"}),"ScrollDirection")))}p.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=i(n),p=a,d=b[o+"."+p]||b[p]||s[p]||l;return n?r.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);