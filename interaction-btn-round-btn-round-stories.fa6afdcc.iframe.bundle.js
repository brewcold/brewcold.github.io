"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8849],{"../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2});var toPropertyKey=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=(0,toPropertyKey.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toPropertyKey});var esm_typeof=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"../../_libs/external-temporal/components/interaction/btn-round/btn-round.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>BtnRound});var react=__webpack_require__("../../node_modules/.pnpm/next@13.4.12_@babel+core@7.23.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),SIZE={M:"_1lj3aem5",S:"_1lj3aem6",XS:"_1lj3aem7"},VARIANTS={key:"_1lj3aem1 _1lj3aem0",white:"_1lj3aem2 _1lj3aem0",black:"_1lj3aem3 _1lj3aem0",transparent:"_1lj3aem4"};function BtnRound(_ref){var type=_ref.type,variant=_ref.variant,disabled=_ref.disabled,_ref$size=_ref.size,size=void 0===_ref$size?"M":_ref$size,children=_ref.children,onClick=_ref.onClick,className="".concat(VARIANTS[variant]," ").concat(SIZE[size]);return react.createElement("button",{className,disabled,type,onClick},children)}BtnRound.__docgenInfo={description:"",methods:[],displayName:"BtnRound"};try{BtnRound.displayName="BtnRound",BtnRound.__docgenInfo={description:"",displayName:"BtnRound",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"key"'},{value:'"black"'},{value:'"transparent"'},{value:'"white"'}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"M"'},{value:'"S"'},{value:'"XS"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../_libs/external-temporal/components/interaction/btn-round/btn-round.tsx#BtnRound"]={docgenInfo:BtnRound.__docgenInfo,name:"BtnRound",path:"../../_libs/external-temporal/components/interaction/btn-round/btn-round.tsx#BtnRound"})}catch(__react_docgen_typescript_loader_error){}},"../../_libs/external-temporal/components/interaction/btn-round/btn-round.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");const __WEBPACK_DEFAULT_EXPORT__={title:"External-temporal/Interaction/Buttons/BtnRound",component:__webpack_require__("../../_libs/external-temporal/components/interaction/btn-round/btn-round.tsx").o,parameters:{layout:"centered",componentSubtitle:"둥근 버튼입니다."},tags:["autodocs"],argTypes:{type:{description:"버튼의 타입을 선택합니다. form 태그 내부의 button은 submit을 선택해주세요."},variant:{description:"버튼의 색상을 지정할 수 있습니다."},size:{description:"버튼의 크기를 지정할 수 있습니다."},disabled:{description:"버튼의 작동 여부를 정합니다. 클릭을 막고 싶다면 true를 선택해주세요."},children:{description:"자식 노드를 받습니다."},onClick:{description:"클릭 시 실행될 함수입니다."}}};var Primary={args:{type:"button",variant:"key",disabled:!1,size:"M",children:"안녕 나는 둥근 버튼이야"}};Primary.parameters=(0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Primary.parameters),{},{docs:(0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,_Users_syu_Desktop_dev_t1_amadda_frontend_node_modules_pnpm_babel_runtime_7_23_2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    type: 'button',\n    variant: 'key',\n    disabled: false,\n    size: 'M',\n    children: '안녕 나는 둥근 버튼이야'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})}}]);