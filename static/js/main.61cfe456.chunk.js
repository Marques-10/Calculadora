(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculadora}));var C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_index_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(15),_index_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],indice:0},Calculadora=function(_Component){Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculadora,_Component);var _super=Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Calculadora);function Calculadora(e){var _;return Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Calculadora),(_=_super.call(this,e)).state=Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),_.clearMemory(),_}return Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Calculadora,[{key:"clearMemory",value:function(){this.setState(Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if("X"==operation){var indice=this.state.indice,values=Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values),valueDisplay=this.state.displayValue;return valueDisplay=valueDisplay.substring(0,valueDisplay.length-1),values[indice]=valueDisplay,void this.setState({displayValue:valueDisplay,indice:indice,values:values})}if("CE"==operation){var _indice=this.state.indice,_values=Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values),_valueDisplay=0;return _values[_indice]=0,void this.setState({displayValue:_valueDisplay,values:_values,indice:_indice})}if(0===this.state.indice)this.setState({operation:operation,indice:1,clearDisplay:!0});else{var equals="="==operation,stateOperation=this.state.operation,_values2=Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);try{_values2[0]=Math.round(100*eval("".concat(_values2[0]," ").concat(stateOperation," ").concat(_values2[1])))/100,_values2[1]=0}catch(e){_values2[0]=this.state.values[0]}this.setState({displayValue:_values2[0],values:_values2,operation:"="==operation?null:operation,indice:"="==operation?0:1,clearDisplay:!equals})}}},{key:"setNumber",value:function(e){var _=this.state.indice;if(console.log(_),"."===e){var a=this.state.indice,t=Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values),r=this.state.values[a].toString();if(console.log(r),r.includes("."))return;"0"==r?(t[a]=parseFloat("0")+".",this.setState({displayValue:t[a],clearDisplay:!1,values:t})):(t[a]=r+".",this.setState({displayValue:t[a],clearDisplay:!1,values:t}))}var l=("0"==this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+e;if("."!==e){var s=this.state.indice,n=Object(C_Users_xjmar_Desktop_Calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);n[s]=parseFloat(l),console.log("Value: ",l,"Array: ",n),this.setState({displayValue:l,clearDisplay:!1,values:n})}}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"topo"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,"Calculadora")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"menu"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"menu-left"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i",{class:"icon-windows"}))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"text-default"},"Padr\xe3o")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"menu-right"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i",{class:"icon-time"}))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"display"},this.state.displayValue),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"numbers"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setOperation("CE")}},"CE"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.clearMemory("C")}},"C"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setOperation("X")}},"X"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setOperation("/")}},"/")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("7")}},"7"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("8")}},"8"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("9")}},"9"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setOperation("*")}},"*")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("4")}},"4"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("5")}},"5"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("6")}},"6"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setOperation("-")}},"-")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("3")}},"3"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("2")}},"2"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("1")}},"1"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setOperation("+")}},"+")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber("0")}},"0"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setNumber(".")}},"."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:function(){return e.setOperation("=")},className:"equal"},"="))))}}]),Calculadora}(react__WEBPACK_IMPORTED_MODULE_6__.Component)},,,,,function(e,_,a){e.exports=a(17)},,,,,function(e,_,a){},function(e,_,a){e.exports=a.p+"static/media/Roboto-Regular.11eabca2.ttf"},function(e,_,a){"use strict";a.r(_);var t=a(0),r=a.n(t),l=a(4),s=a.n(l),n=a(5);a(16);var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.61cfe456.chunk.js.map