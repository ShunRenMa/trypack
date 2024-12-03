var path = require("path");

const development = {
    mode: "development",
    devtool: "source-map",
};

const production = {
    mode: "production",
};

module.exports = (env) => ({
    ...(env.production ? production : development),
    entry: "./Main.ts",
    resolve: {
        extensions: [".d.ts", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: "ts-loader",
            },
        ],
    },
});