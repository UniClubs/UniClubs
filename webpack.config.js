const path = require("path"); // include a module called "path" which provides utilities for working with file and directory paths. require() is a built-in function from Node.JS

module.exports = {
    mode: "development", // configuration options tells webpack to use its built-in optimizations accordingly (mode: none, development, production)
    entry: path.resolve(__dirname, `src`, `app`),
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: false // [disabled] enables to use react router
    },
    module: {
        rules: [
            { // (https://webpack.js.org/concepts/#loaders) webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules.
                test: /\.jsx?/,
                loader: 'babel-loader'
            }
        ]
    }
}