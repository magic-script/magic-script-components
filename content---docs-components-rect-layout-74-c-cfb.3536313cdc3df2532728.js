(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));n(58),n(31),n(22),n(23),n(59),n(0);var o=n(284);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={id:"rectLayout",title:"RectLayout"},r=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"contentAlignment options: Alignment",id:"contentalignment-options-alignment",children:[]}]}],c={rightToc:r},l="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(l,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The RectLayout component allows you to automatically layout content within a single rectangular plane with side padding and content alignment. It acts like a table cell when used in conjunction with other layout elements. When you do not specify the rectangle size, or use ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", the rectangle grows to fit the content until it is clipped by the edges of the container. Non-uniform scaling is not recommended.  By default, there is no padding and content is aligned to the top left. The padding order is top, right, bottom, left."),Object(o.b)("p",null,"The RectLayout sends events only when it is the immediate parent of a UI element. For example, if you have text in a RectLayout, both the text and the RectLayout send onHover events. If you have a text button inside the layout, the layout does not send an onHover event because the parent of the text is the button."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport { View, RectLayout, Content, Text } from \"magic-script-components\";\n\nexport default class MyApp extends React.Component {\n  render() {\n    return (\n      <View name='main-view'>\n        <RectLayout\n          localPosition={[-0.40, 0.40, 0]}\n          width={0.8}\n          height={0.4}\n          padding={[0.1, 0.1, 0.1, 0.1]}\n          contentAlignment='bottom-left'\n        >\n          <Content>\n            <Text textSize={0.05} text='Top Message'/>\n          </Content>\n        </RectLayout>\n        <RectLayout\n          localPosition={[-0.40, 0, 0]}\n          width={0.8}\n          height={0.4}\n          padding={[0.1, 0.1, 0.1, 0.1]}\n          contentAlignment='top-right'\n        >\n          <Content>\n            <Text textSize={0.05} text='Bottom Message'/>\n          </Content>\n        </RectLayout>\n      </View>\n    );\n  }\n}\n")),Object(o.b)("h2",{id:"common-events"},Object(o.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(o.b)("h2",{id:"common-properties"},Object(o.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(o.b)("h2",{id:"element-properties"},"Element Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",a({parentName:"tr"},{align:null}),"contentAlignment"),Object(o.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",a({parentName:"tr"},{align:null}),"Sets the content alignment within the rectangular area. The default content alignments are ",Object(o.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". When the size of the layout is set to zero in a dimension, it grows in that dimension to fit both the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",a({parentName:"tr"},{align:null}),"padding"),Object(o.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(o.b)("td",a({parentName:"tr"},{align:null}),"Sets the content padding for the four sides of the rectangular area, in scene units. The default is no padding (",Object(o.b)("inlineCode",{parentName:"td"},"0,0,0,0"),"). The padding order is: top, right, bottom, left. When the size of the layout is set to zero in a dimension, it grows in that dimension to fit both the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored.")))),Object(o.b)("h3",{id:"contentalignment-options-alignment"},"contentAlignment options: ",Object(o.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")))}s.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o),i=a.a.createContext({}),r=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=r(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=r(n),d=o,m=p[c+"."+d]||p[d]||s[d]||i;return n?a.a.createElement(m,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(m,Object.assign({},{ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);