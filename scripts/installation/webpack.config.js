const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options:{
                    presets: ["@babel/env", "@babel/react"]
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        })
    ]
}