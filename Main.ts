export class Main {
  public static start() {
    console.log("this is start");

    if (window["a"]) {
      import(/* webpackChunkName: "TypePack" */ "./lib/TypePack");
    } else {
      import(/* webpackChunkName: "TypeBack" */ "./lib/TypeBack");
    }
  }
}

Main.start();
