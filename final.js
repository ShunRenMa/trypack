var TryPack;
(function (TryPack) {
    var typePack = /** @class */ (function () {
        function typePack() {
            console.log("this is type Pack ~~");
        }
        return typePack;
    }());
    TryPack.typePack = typePack;
})(TryPack || (TryPack = {}));
/// <reference path="./lib/typePack.ts" />
var TryPack;
(function (TryPack) {
    var Main = /** @class */ (function () {
        function Main() {
        }
        Main.prototype.start = function () {
            console.log("this is ");
            new TryPack.typePack();
        };
        return Main;
    }());
    TryPack.Main = Main;
})(TryPack || (TryPack = {}));
var main = new TryPack.Main();
main.start();
