
// import { TypePack } from "./lib/TypePack";
// import { TypeBack } from "./lib/TypeBack";

export class Main {

    public static start() {
        console.log("this is start");
        let moduleSpecifier
        if (window['a']) {
            moduleSpecifier = './lib/TypePack';

        } else {
            moduleSpecifier = './lib/TypeBack';

        }
        import(moduleSpecifier).then(M => {
            debugger
        })
    }

}


Main.start();