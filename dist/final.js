/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./. sync recursive":
/*!*****************!*\
  !*** ././ sync ***!
  \*****************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./. sync recursive";
module.exports = webpackEmptyContext;

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./Main.ts ***!
  \*****************/

// import { TypePack } from "./lib/TypePack";
// import { TypeBack } from "./lib/TypeBack";
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.start = function () {
        console.log("this is start");
        var moduleSpecifier;
        if (window['a']) {
            moduleSpecifier = './lib/TypePack';
        }
        else {
            moduleSpecifier = './lib/TypeBack';
        }
        Promise.resolve().then(function () { return __webpack_require__("./. sync recursive")(moduleSpecifier); }).then(function (M) {
            debugger;
        });
    };
    return Main;
}());
exports.Main = Main;
Main.start();

})();

/******/ })()
;
//# sourceMappingURL=final.js.map