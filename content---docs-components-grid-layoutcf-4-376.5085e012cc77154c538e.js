(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));n(0);var i=n(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"gridLayout",title:"GridLayout"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"defaultItemAlignment options: Alignment",id:"defaultitemalignment-options-alignment",children:[]},{value:"itemAlignment options: Alignment",id:"itemalignment-options-alignment",children:[]}]}],d={rightToc:o},s="wrapper";function m(e){var t=e.components,n=r(e,["components"]);return Object(i.b)(s,a({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The GridLayout class automatically lays out elements in a grid with optional padding. The GridLayout grows to accommodate additional items based on row and column settings. You can constrain the number of columns, rows, or both. If you constrain only one dimension, the other can grow as needed. If the layout has an explicit width, then any items added to it can shrink to fit if they are larger than the width of the layout. All units are in meters, including padding."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<GridLayout />\n")),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default item alignment within the grid. Default item alignments are TOP_LEFT. This will be set for any new items that are added that aren't explicitly specifying alignment. The alignment of each individual item can still be set later if needed. Note that for the right and the bottom alignments to kick in, the containing cell should be, respectively, wider and higher than its content.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that aren't explicitly specifying padding. The padding of each individual item can still be set later if needed. Note that padding in a dimension will work only for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding vis-a-vis the height of the row the item is in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item alignment. Note that for the right and the bottom alignments to kick in, the containing cell should be, respectively, wider and higher than its content.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item padding at the specified row and col position. Note that padding in a dimension will work only for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding vis-a-vis the height of the row the item is in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Skips invisble items. Setting this value true will cause the layout to skip over any invisible items. The layout will check the visibility of each top-level item Node added and if invisible, along with inherited visibility, will skip that Node for layout. Using this setting will affect the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"columns"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the number of columns for the grid. The default value of 0 indicates the number of columns can grow to fit items as they are added. Setting the value above 0 will lock the grid column dimension. If both rows and columns are set, columns will take precedence. If neither rows or columns are set, the grid layout will have 1 row and add columns as needed. When the number of columns is set, the grid will lay items in row-major order.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"rows"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the number of rows for the grid. The default value of 0 indicates the number of rows can grow to fit items as they are added. Setting the value above 0 will lock the grid row dimension. If both rows and columns are set, columns will take precedence. If neither rows or columns are set, the grid layout will have 1 row and add columns as needed. When the number of rows is set (and columns is 0), the grid will lay items in column-major order.")))),Object(i.b)("h3",{id:"defaultitemalignment-options-alignment"},"defaultItemAlignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(i.b)("h3",{id:"itemalignment-options-alignment"},"itemAlignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")))}m.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var i=n(0),a=n.n(i),r=a.a.createContext({}),l=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["components","mdxType","originalType","parentName"]),m=l(n),c=i,h=m[o+"."+c]||m[c]||s[c]||r;return n?a.a.createElement(h,Object.assign({},{ref:t},d,{components:n})):a.a.createElement(h,Object.assign({},{ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);