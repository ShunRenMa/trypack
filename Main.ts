/// <reference path="./lib/typePack.ts" />

module TryPack {

    export class Main {

        public start() {

            console.log("this is start");

            new typePack();
        }
    }

}

var main = new TryPack.Main()
main.start();