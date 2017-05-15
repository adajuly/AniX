let path = require("path");
let webpack = require('webpack');

module.exports = {

    entry: {
        app: [path.resolve(__dirname, "../src/plugins/jquery.anix.ts")]
    },

    output: {
        path: path.resolve(__dirname, "../dist/jq"),
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
            exclude: [/node_modules/, /example/, /test/],
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