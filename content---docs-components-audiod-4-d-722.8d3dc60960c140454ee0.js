(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return b});n(73);var a=n(72);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={id:"audio",title:"Audio"},i=[{value:"Tag: <Audio>",id:"tag-audio",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"spatialSoundDirection",id:"spatialsounddirection",children:[]},{value:"spatialSoundDirectSendLevels",id:"spatialsounddirectsendlevels",children:[]},{value:"spatialSoundDistance",id:"spatialsounddistance",children:[]},{value:"spatialSoundPosition",id:"spatialsoundposition",children:[]},{value:"spatialSoundRadiation",id:"spatialsoundradiation",children:[]},{value:"spatialSoundRoomSendLevels",id:"spatialsoundroomsendlevels",children:[]}]}],c={rightToc:i},u="wrapper";function b(e){var t=e.components,n=o(e,["components"]);return Object(a.b)(u,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tag-audio"},"Tag: ",Object(a.b)("inlineCode",{parentName:"h2"},"<Audio>")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("h4",r({parentName:"li"},{id:"lumin-runtime-native-component---audionode"}),"Lumin Runtime native component - AudioNode"))),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"fileName"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"File name of the resource to load. By default assumed to be a relative path from the executable file.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"loadFile"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Loads the entire audio file in the memory. For big files you may use the createStreamedFileAudioResource method.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"absolutePath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Flag that fileName is an absolute path name, instead of a relative path.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"descriptor"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"-1")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Optional file descriptor that points to a resource.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"basePath"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"null")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"If you are loading a resource from an absolute path, and that path != the current process path, set this field to the equivalent base path in the other client directory. This allows path relative dependencies to solve a fully qualified (absolute) path outside of the current process. This value defaults to the currently executing process root.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"autoDestroy"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"If true, play the sound once and delete the node. If false the audio node will stay until scenegraph is destroyed.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"dynamicDecode"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"if true, the file resource is compressed and will be decoded when playing. If false, the file\\resource is an uncompressed PCM data.")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"action"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the current operation: ",Object(a.b)("inlineCode",{parentName:"td"},"start"),", ",Object(a.b)("inlineCode",{parentName:"td"},"stop"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pause"),", ",Object(a.b)("inlineCode",{parentName:"td"},"resume"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"soundLooping"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the mode of playing audio in repeat mode. If enabled, audio will play from start after reaching the end, until disabled. When audio is created, the default is disabled.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"soundMute"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Mute or unmute the sound.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"soundPitch"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"1.0")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets sound pitch. The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down and 2.0 being one octave up.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"soundVolumeLinear"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the audio volume. The range of the volume is 0 to 8, with 0 for silence, 1 for unity gain, and 8 for 8x gain.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spatialSoundEnable"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Enable/Disable the capability for spatial sound. If enabled, spatialSoundPosition")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"must have value for positional sound to be effective."),Object(a.b)("td",r({parentName:"tr"},{align:"left"})),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"streamedFileOffset"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the starting point for playback of a streamed-file sound.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spatialSoundDirection"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Set the sound direction of a given audio channel. Effective only if spatial sound is enabled (spatialSoundEnable) for an audio node. The Direction is relative to this nodes local orientation. By default that is, if this API not called then, the direction is same as the the parent nodes orientation. Will change the direction even if the audio clip is already playing.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spatialSoundDirectSendLevels"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the direct send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (see spatialSoundEnabled) this property sets the send levels for the direct component of the sound, i.e., the audio mix for the the part of the sound not affected by room acoustics. Multi-channel sounds require the direct send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spatialSoundDistance"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Set spatial sound distance parameters for a given channel.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spatialSoundPosition"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Set the position of a given audio channel relative to this nodes local position. Effective only if spatial sound is enabled explicitly for an audio node. Will change the position even if the audio clip is already playing.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spatialSoundRadiation"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Set spatial sound radiation parameters for a given channel.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spatialSoundRoomSendLevels"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"center"})),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the room send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (see spatialSoundEnabled) this function sets the send levels for the room component of the sound, i.e., the audio mix for the the part of the sound that's affected by room acoustics. Multi-channel sounds require the room send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.")))),Object(a.b)("h3",{id:"spatialsounddirection"},"spatialSoundDirection"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    channelDirection: quat\n}\n")),Object(a.b)("h3",{id:"spatialsounddirectsendlevels"},"spatialSoundDirectSendLevels"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    gain: number,\n    gainHf: number,\n    gainLf: number,\n    gainMf: number\n}\n")),Object(a.b)("h3",{id:"spatialsounddistance"},"spatialSoundDistance"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    minDistance: number,\n    maxDistance: number,\n    rolloffFactor: number\n}\n")),Object(a.b)("h3",{id:"spatialsoundposition"},"spatialSoundPosition"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    channelPosition: vec3\n}\n")),Object(a.b)("h3",{id:"spatialsoundradiation"},"spatialSoundRadiation"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    innerAngle: number,\n    outerAngle: number,\n    outerGain: number,\n    outerGainHf: number\n}\n")),Object(a.b)("h3",{id:"spatialsoundroomsendlevels"},"spatialSoundRoomSendLevels"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    gain: number,\n    gainHf: number,\n    gainLf: number,\n    gainMf: number\n}\n")))}b.isMDXComponent=!0},72:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=function(e){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=l(t),b=n,s=c[o+"."+b]||c[b]||u[b]||a;return t?r.a.createElement(s,Object.assign({},i,{components:t})):r.a.createElement(s,i)};function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";e.exports=n(74)},74:function(e,t,n){"use strict";var a=n(75),r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,l=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,b=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116;r&&Symbol.for("react.fundamental"),r&&Symbol.for("react.responder");var j="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function N(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function v(){}function S(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=N.prototype;var w=S.prototype=new v;w.constructor=S,a(w,N.prototype),w.isPureReactComponent=!0;var C={current:null},P={suspense:null},E={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var a=void 0,r={},l=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,a)&&!_.hasOwnProperty(a)&&(r[a]=t[a]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var u=Array(c),b=0;b<c;b++)u[b]=arguments[b+2];r.children=u}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===r[a]&&(r[a]=c[a]);return{$$typeof:o,type:e,key:l,ref:i,props:r,_owner:E.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g,T=[];function $(e,t,n,a){if(T.length){var r=T.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function A(e,t,n){return null==e?0:function e(t,n,a,r){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case l:c=!0}}if(c)return a(r,t,""===n?"."+F(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var b=n+F(i=t[u],u);c+=e(i,b,a,r)}else if(null===t||"object"!=typeof t?b=null:b="function"==typeof(b=j&&t[j]||t["@@iterator"])?b:null,"function"==typeof b)for(t=b.call(t),u=0;!(i=t.next()).done;)c+=e(i=i.value,b=n+F(i,u++),a,r);else if("object"===i)throw a=""+t,O(Error(31),"[object Object]"===a?"object with keys {"+Object.keys(t).join(", ")+"}":a,"");return c}(e,"",t,n)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,a,n,function(e){return e}):null!=e&&(D(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),a.push(e))}function q(e,t,n,a,r){var o="";null!=n&&(o=(""+n).replace(R,"$&/")+"/"),A(e,M,t=$(t,o,a,r)),L(t)}function U(){var e=C.current;if(null===e)throw O(Error(321));return e}var V={Children:{map:function(e,t,n){if(null==e)return e;var a=[];return q(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;A(e,I,t=$(null,null,t,n)),L(t)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var t=[];return q(e,t,null,function(e){return e}),t},only:function(e){if(!D(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:N,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:i,Profiler:u,StrictMode:c,Suspense:p,unstable_SuspenseList:f,createElement:k,cloneElement:function(e,t,n){if(null==e)throw O(Error(267),e);var r=void 0,l=a({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,u=E.current),void 0!==t.key&&(i=""+t.key);var b=void 0;for(r in e.type&&e.type.defaultProps&&(b=e.type.defaultProps),t)x.call(t,r)&&!_.hasOwnProperty(r)&&(l[r]=void 0===t[r]&&void 0!==b?b[r]:t[r])}if(1===(r=arguments.length-2))l.children=n;else if(1<r){b=Array(r);for(var s=0;s<r;s++)b[s]=arguments[s+2];l.children=b}return{$$typeof:o,type:e.type,key:i,ref:c,props:l,_owner:u}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:D,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=P.suspense;P.suspense=void 0===t?null:t;try{e()}finally{P.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:P,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:a}},W={default:V},B=W&&V||W;e.exports=B.default||B},75:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,c=l(e),u=1;u<arguments.length;u++){for(var b in n=Object(arguments[u]))r.call(n,b)&&(c[b]=n[b]);if(a){i=a(n);for(var s=0;s<i.length;s++)o.call(n,i[s])&&(c[i[s]]=n[i[s]])}}return c}}}]);