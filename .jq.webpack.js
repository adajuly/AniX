var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        app: ["./src/index.ts"]
    },

    output: {
        path: path.resolve(__dirname, "dist/jq"),
        filename: "anix.jq.js",
        libraryTarget: "umd"
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },

    externals: {
        jQuery: 'window.jQuery',
        $: 'window.jQuery'
    },

    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};