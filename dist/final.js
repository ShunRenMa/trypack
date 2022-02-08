/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/// <reference path="./lib/typePack.ts" />
var TryPack;
(function (TryPack) {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.start = function () {
            console.log("this is start");
            new TryPack.typePack();
        };
        return Main;
    }());
    TryPack.Main = Main;
})(TryPack || (TryPack = {}));
var main = new TryPack.Main();
main.start();

/******/ })()
;
//# sourceMappingURL=final.js.map