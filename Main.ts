
// import { TypePack } from "./lib/TypePack";
// import { TypeBack } from "./lib/TypeBack";

export class Main {

    public static start() {
        console.log("this is start");
        // let moduleSpecifier
        if (window["a"]) {
            import(/* webpackChunkName: "TypePack" */ "./lib/TypePack").then(e => {
                new e.TypePack();
            });

        } else {
            import(/* webpackChunkName: "TypeBack" */ "./lib/TypeBack").then(e => {
                new e.TypeBack();
            });;
        }
    }

}


Main.start();