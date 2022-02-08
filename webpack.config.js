var path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    // mode: 'development',
    entry: './Main.ts',
    // baseUrl: '',
    resolve: {
        extensions: [".d.ts", ".ts", ".js"]
    },
    optimization: {
        minimize: false, // uglify
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'final.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: path.resolve(__dirname, './'),
                loader: 'ts-loader'
            }
        ]
    }
}