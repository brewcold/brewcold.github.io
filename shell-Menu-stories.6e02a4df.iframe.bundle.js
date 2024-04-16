"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5323],{"../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray})},"../shell/components/navigation/navigation.css.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tH:()=>BASE,sk:()=>MENU});var BASE="pdqiqs0",MENU="pdqiqs2"},"../shell/components/navigation/menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Menu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@13.4.12_@babel+core@7.23.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),_navigation_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../shell/components/navigation/navigation.css.ts"),_amadda_external_temporal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../_libs/external-temporal/index.tsx");function Menu(_ref){var iconType=_ref.iconType,onClick=(_ref.data,_ref.onClick);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:_navigation_css__WEBPACK_IMPORTED_MODULE_1__.sk,onClick},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_amadda_external_temporal__WEBPACK_IMPORTED_MODULE_2__.JO,{type:iconType,color:"key",cursor:"pointer",size:"28"}))}Menu.__docgenInfo={description:"",methods:[],displayName:"Menu"};try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"cal"'},{value:'"dot"'},{value:'"config"'},{value:'"close"'},{value:'"noti"'},{value:'"noti_red"'},{value:'"plus"'},{value:'"friendadd"'},{value:'"scheduleadd"'},{value:'"back"'},{value:'"friends"'},{value:'"exc"'},{value:'"up"'},{value:'"down"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../shell/components/navigation/menu.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"../shell/components/navigation/menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}},"./stories/shell/Menu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shell/Menu",component:__webpack_require__("../shell/components/navigation/menu.tsx").v,parameters:{layout:"centered",componentSubtitle:"헤더에 들어가는 메뉴 컴포넌트입니다. 등록된 아이콘이면 모두 사용할 수 있습니다."},tags:["autodocs"],argTypes:{}};var Primary={args:{iconType:"cal",onClick:function onClick(){}}};Primary.parameters=(0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Primary.parameters),{},{docs:(0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    iconType: 'cal',\n    onClick: () => {}\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})}}]);