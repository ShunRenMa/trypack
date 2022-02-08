/**
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
 */

import { TypePack } from "../lib/TypePack";

function main() {
  console.log("this is start");

  new TypePack();
}

main();
