(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return d}));n(0);var a=n(180);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l={id:"textEdit",title:"TextEdit"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Aditional (optional) parameters for create step.",id:"aditional-optional-parameters-for-create-step",children:[{value:"fontDescription",id:"fontdescription",children:[]},{value:"AdvanceDirection options: AdvanceDirection",id:"advancedirection-options-advancedirection",children:[]},{value:"FlowDirection options: FlowDirection",id:"flowdirection-options-flowdirection",children:[]},{value:"Quality options: Quality",id:"quality-options-quality",children:[]}]},{value:"Element Properties",id:"element-properties",children:[{value:"fontParameters",id:"fontparameters",children:[]},{value:"style options: FontStyle",id:"style-options-fontstyle",children:[]},{value:"weight options: FontWeight",id:"weight-options-fontweight",children:[]},{value:"textAlignment options: HorizontalTextAlignment",id:"textalignment-options-horizontaltextalignment",children:[]},{value:"cursorEdgeScrollMode options: CursorEdgeScrollMode",id:"cursoredgescrollmode-options-cursoredgescrollmode",children:[]},{value:"scrollBarVisibility options: ScrollBarVisibility",id:"scrollbarvisibility-options-scrollbarvisibility",children:[]},{value:"textEntry options: TextEntryMode",id:"textentry-options-textentrymode",children:[]}]}],b={rightToc:o},c="wrapper";function d(t){var e=t.components,n=i(t,["components"]);return Object(a.b)(c,r({},b,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The TextEdit component creates an editable text box for text entry on a single or multiple lines. The last line includes a white underline to clearly delineate that the text box is editable. Include a UTF-8 compatible font in your project if you expect characters outside of the ISO Latin-1 character set."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'<TextEdit\n    charSpacing={0.02}\n    height={0.08}\n    lineSpacing={0.3}\n    localPosition={[-0.9, 0.5, 0]}\n    padding={[0.5, 0.3, 0.5, 0.3]}\n    text="Edit Me"\n    textAlignment="center"\n    textSize={0.03}\n    width={0.4}\n />\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The UTF-8 encoded text to initially set the TextEdit to.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The width of the text edit area.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The height of the text edit area.")))),Object(a.b)("h2",{id:"aditional-optional-parameters-for-create-step"},"Aditional (optional) parameters for create step."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"fontDescription"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"A 2D font is a font rendered onto a planar image (whatever the format), as opposed to a 3D model of the glyphs or other graphical representation.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"filePath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The font file from which to load the glyphs. By default assumed to be a relative path from the executable file.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"absolutePath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Flag that fontFile is an absolute path name, instead of a relative path.")))),Object(a.b)("h3",{id:"fontdescription"},"fontDescription"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    advanceDirection: <string>,\n    flowDirection: <string>,\n    tileSize: <number>,\n    quality: <string>,\n    minAlpha: <number>,\n}\n")),Object(a.b)("h3",{id:"advancedirection-options-advancedirection"},"AdvanceDirection options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/advanceDirection"}),"AdvanceDirection")),Object(a.b)("h3",{id:"flowdirection-options-flowdirection"},"FlowDirection options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/flowDirection"}),"FlowDirection")),Object(a.b)("h3",{id:"quality-options-quality"},"Quality options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/quality"}),"Quality")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"charLimit"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the maximum number of characters allowed in the text edit.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"charSpacing"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the additional character spacing that is applied between characters. Note a spacing of 0 is the default spacing.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cursorEdgeScrollMode"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the cursor edge scroll mode for this text edit.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"style"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The style of the Magic Leap font.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"weight"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The weight (i.e., thickness) of the Magic Leap font.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"hint"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the UTF-8 encoded text for the hint.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"hintColor"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the text color of the hint.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"lineSpacing"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the line spacing to adjust the distance between lines of text; e.g., use 1 for single-spaced text, 2 for double-spaced text. Default is 1.0.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"multiline"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the text edit is in multiline mode or not. Default is single line.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"password"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the text edit is in password mode or not.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"scrollBarVisibility"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Creates and shows the scrollbar in the vertical direction. If a scrollbar already exists, only its visibility is affected. This function also attaches the scrollbar to the ScrollView that will manage it.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"scrolling"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the scrolling is enabled or not.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"scrollSpeed"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the scroll speed in scene units per second.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"scrollValue"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Manually scrolls the textEdit content position using a normalized value between 0 and 1.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"selectedBegin"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The first index for text selection.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"selectedEnd"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The last index for text selection.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the UTF-8 encoded text.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textAlignment"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Aligns the text to the left, center or right or justifies it.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textColor"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the RGBA color of the rendered text.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textEntry"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the current text entry mode of the text edit.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textPadding"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the padding around the text within the text edit area. Defaults to half the text size unless explicitly set. The padding order is: top, right, bottom, left.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textSize"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the text render size height in scene units.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"fontParams"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the font parameters, including syle, weight, pixel size, and tracking. This will use one of the default set of Magic Leap font resources that support style and weight.")))),Object(a.b)("h3",{id:"fontparameters"},"fontParameters"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    style: string,\n    weight: string,\n    fontSize: number,\n    tracking: number,\n    allCaps: boolean\n}\n")),Object(a.b)("h3",{id:"style-options-fontstyle"},"style options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/fontStyle"}),"FontStyle")),Object(a.b)("h3",{id:"weight-options-fontweight"},"weight options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/fontWeight"}),"FontWeight")),Object(a.b)("h3",{id:"textalignment-options-horizontaltextalignment"},"textAlignment options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/horizontalTextAlignment"}),"HorizontalTextAlignment")),Object(a.b)("h3",{id:"cursoredgescrollmode-options-cursoredgescrollmode"},"cursorEdgeScrollMode options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/cursorEdgeScrollMode"}),"CursorEdgeScrollMode")),Object(a.b)("h3",{id:"scrollbarvisibility-options-scrollbarvisibility"},"scrollBarVisibility options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/scrollBarVisibility"}),"ScrollBarVisibility")),Object(a.b)("h3",{id:"textentry-options-textentrymode"},"textEntry options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/textEntryMode"}),"TextEntryMode")))}d.isMDXComponent=!0},180:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(t){var e=r.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):Object.assign({},e,t)),n},o=function(t){var e=l(t.components);return r.a.createElement(i.Provider,{value:e},t.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,b=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&-1===e.indexOf(a)&&(n[a]=t[a]);return n}(t,["components","mdxType","originalType","parentName"]),d=l(n),p=a,s=d[o+"."+p]||d[p]||c[p]||i;return n?r.a.createElement(s,Object.assign({},{ref:e},b,{components:n})):r.a.createElement(s,Object.assign({},{ref:e},b))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[b]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);