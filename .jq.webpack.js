var webpack = require('webpack');
var path = require("path");

module.exports = {

    entry: {
        app: [path.resolve(__dirname, "src/index.ts")]
    },

    output: {
        path: path.resolve(__dirname, "dist/jq"),
        filename: "anix.jq.js",
        libraryTarget: "umd"
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    externals: {
        jQuery: 'window.jQuery',
        $: 'window.jQuery'
    },

    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: [/node_modules/, /example/],
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