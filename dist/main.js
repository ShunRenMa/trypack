/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/TypePack.ts":
/*!*************************!*\
  !*** ./lib/TypePack.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/*\nmodule TryPack {\n\n\n    export class typePack {\n\n        constructor() {\n            console.log(\"this is type Pack ~~\");\n        }\n\n    }\n}\n*/\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TypePack = void 0;\nclass TypePack {\n    constructor() {\n        console.log(\"this is type Pack ~~\");\n    }\n}\nexports.TypePack = TypePack;\n\n\n//# sourceURL=webpack://try/./lib/TypePack.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n/**\n/// <reference path=\"./lib/typePack.ts\" />\n\nmodule TryPack {\n\n    export class Main {\n\n        public start() {\n\n            console.log(\"this is start\");\n\n            new typePack();\n        }\n    }\n\n}\n\nvar main = new TryPack.Main()\nmain.start();\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst TypePack_1 = __webpack_require__(/*! ../lib/TypePack */ \"./lib/TypePack.ts\");\nfunction main() {\n    console.log(\"this is start\");\n    new TypePack_1.TypePack();\n}\nmain();\n\n\n//# sourceURL=webpack://try/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;