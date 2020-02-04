(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(9),l=(a(0),a(206)),b={id:"model",title:"Model"},c={id:"components/model",title:"Model",description:"## Description",source:"@site/../docs/components/Model.md",permalink:"/docs/components/model",sidebar:"docs",previous:{title:"ListViewItem",permalink:"/docs/components/listViewItem"},next:{title:"PageView",permalink:"/docs/components/pageView"}},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"animation",id:"animation",children:[]},{value:"texture",id:"texture",children:[]},{value:"defaultTextureSlot options: TextureType",id:"defaulttextureslot-options-texturetype",children:[]},{value:"texture.textureSlot options: TextureType",id:"texturetextureslot-options-texturetype",children:[]}]}],o={rightToc:i};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"The Model component renders a static or animated 3D model in your scene. Lumin Runtime uses a proprietary material file format called a kmat to bind materials to renderable surfaces. When creating your model, ensure you use <material_name>.kmat to reference the material. Your textures are referenced in the kmat file. We recommend creating kmat files with the Lumin Runtime Editor."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'<Model\n  modelPath={"resources/turkey4.fbx"}\n  materialPath={"resources/turkey.kmat"}\n  texturePaths={["resources/turkey_baseColor.png"]}\n  defaultTextureIndex={0}\n  defaultTextureSlot={"albedo"}\n  defaultMaterialName={"turkey_material"}\n  animation={{ name: "idle" }}\n  animationPauseState={false}\n  animationPlaybackSpeed={1.0}\n/>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"FBX file format is currently supported on Magic Leap One.")),Object(l.b)("h2",{id:"common-events"},Object(l.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/events/commonEvents"}),"Common Events")),Object(l.b)("h2",{id:"common-properties"},Object(l.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(l.b)("h2",{id:"create-properties"},"Create Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"modelPath"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File name of the model resource to load. By default this is assumed to be a relative path from the executable file.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"materialPath"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File name of the material resource to load. By default this is assumed to be a relative path from the executable file.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"importScale"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1.0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scale that is applied to this resource.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"texturePaths"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[string]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of file names of the texture resources. By default this is assumed to be a relative path from the executable file.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultTextureIndex"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default index from the texturePaths.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultTextureSlot"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The texture slot, such as ",Object(l.b)("inlineCode",{parentName:"td"},"Albedo")," or ",Object(l.b)("inlineCode",{parentName:"td"},"Normal"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultMaterialName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the material.")))),Object(l.b)("h2",{id:"element-properties"},"Element Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animationPauseState"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the animation pause state for the current model node.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animationPlaybackSpeed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the playback speed for animations.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animationTime"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the current time of the animation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"modelResourceId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the ID of the resource this node draws. The ID refers to a ",Object(l.b)("em",{parentName:"td"},"ModelResource"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the current animation by ",Object(l.b)("inlineCode",{parentName:"td"},"resource")," + ",Object(l.b)("inlineCode",{parentName:"td"},"name"),". Some animation resources contain multiple animations. These are addressed by animation name. FBX models, for example, may contain 1-n animations.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"texture"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the texture of a given material by the new texture ID. Material should be the one applied to the Model Node.")))),Object(l.b)("h3",{id:"animation"},"animation"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    resourceId: <number>,\n    name: <string>,\n    paused: <boolean>,\n    loops: <number>\n}\n")),Object(l.b)("h3",{id:"texture"},"texture"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    textureId: <number>,\n    textureSlot: <string>,\n    materialName: <string>\n}\n")),Object(l.b)("h3",{id:"defaulttextureslot-options-texturetype"},"defaultTextureSlot options: ",Object(l.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/types/textureType"}),"TextureType")),Object(l.b)("h3",{id:"texturetextureslot-options-texturetype"},"texture.textureSlot options: ",Object(l.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/types/textureType"}),"TextureType")))}m.isMDXComponent=!0},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,O=p["".concat(b,".").concat(d)]||p[d]||u[d]||l;return a?r.a.createElement(O,c({ref:t},o,{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);