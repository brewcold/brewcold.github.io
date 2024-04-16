"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4255],{"../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray})},"../notice/components/Notice/Notice.css.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>BACKGROUND});var BACKGROUND={normal:"_1ciezqs0",isRead:"_1ciezqs1",notRead:"_1ciezqs2"}},"./stories/notice/Notice.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,default:()=>Notice_stories});var objectSpread2=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("../../node_modules/.pnpm/next@13.4.12_@babel+core@7.23.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),external_temporal=__webpack_require__("../../_libs/external-temporal/index.tsx"),Notice_css=__webpack_require__("../notice/components/Notice/Notice.css.ts");const ALARMUI_Notice={FRIEND_REQUEST_CAPTION:"거절해도 알림이 가지 않아요"};function Notice(_ref){var content=_ref.content,alarmType=_ref.alarmType,className=_ref.isRead?"isRead":"notRead";return react.createElement("div",{className:Notice_css.q[className]},react.createElement(external_temporal.kC,{justifyContents:"spaceBetween"},react.createElement(external_temporal.kC,{flexDirection:"column",justifyContents:"center",alignItems:"start"},react.createElement(external_temporal.H6,null,content),"FRIEND_REQUEST"===alarmType&&react.createElement(react.Fragment,null,react.createElement(external_temporal.Ki,{size:"0.5"}),react.createElement(external_temporal.P,{color:"grey",type:"caption"},ALARMUI_Notice.FRIEND_REQUEST_CAPTION))),react.createElement(external_temporal.Ki,{dir:"h"}),"FRIEND_REQUEST"===alarmType&&react.createElement(external_temporal.kC,{justifyContents:"start"},react.createElement(external_temporal.oP,{type:"button",variant:"key",onClick:function onClick(){},disabled:!1},"수락"),react.createElement(external_temporal.Ki,{dir:"h",size:"0.5"}),react.createElement(external_temporal.oP,{type:"button",variant:"white",onClick:function onClick(){},disabled:!1},"거절"))))}Notice.__docgenInfo={description:"",methods:[],displayName:"Notice"};try{Notice.displayName="Notice",Notice.__docgenInfo={description:"",displayName:"Notice",props:{alarmSeq:{defaultValue:null,description:"",name:"alarmSeq",required:!1,type:{name:"number"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},isRead:{defaultValue:null,description:"",name:"isRead",required:!0,type:{name:"boolean"}},alarmType:{defaultValue:null,description:"",name:"alarmType",required:!0,type:{name:"enum",value:[{value:'"FRIEND_REQUEST"'},{value:'"FRIEND_ACCEPT"'},{value:'"SCHEDULE_ASSIGNED"'},{value:'"MENTIONED"'},{value:'"SCHEDULE_UPDATE"'},{value:'"SCHEDULE_NOTI"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../notice/components/Notice/Notice.tsx#Notice"]={docgenInfo:Notice.__docgenInfo,name:"Notice",path:"../notice/components/Notice/Notice.tsx#Notice"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3;const Notice_stories={title:"Notice/Notice",component:Notice,parameters:{layout:"centered",componentSubtitle:"알림 컴포넌트입니다."},tags:["autodocs"],argTypes:{alarmType:{description:"ss"},content:{description:"yy"}}};var Primary={args:{alarmType:"FRIEND_REQUEST",content:"민병기님이 친구 신청을 했어요.",isRead:!1,alarmSeq:3}},Secondary={args:{alarmType:"SCHEDULE_ASSIGNED",content:"두희가 칼 들고 협박함에 초대됐어요.",isRead:!0,alarmSeq:2}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    alarmType: 'FRIEND_REQUEST',\n    content: '민병기님이 친구 신청을 했어요.',\n    isRead: false,\n    alarmSeq: 3\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Secondary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Secondary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    alarmType: 'SCHEDULE_ASSIGNED',\n    content: '두희가 칼 들고 협박함에 초대됐어요.',\n    isRead: true,\n    alarmSeq: 2\n  }\n}"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})})}}]);