const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths = {
    DIST: path.resolve(__dirname, 'dist'), // bundle file path
    SRC: path.resolve(__dirname, 'src'), // source folder path ->    
};

// paths that should be cleaned
let pathsToClean = [
    'dist',
    'build'
];

let cleanOptions = {
    verbose: true,
    dry: false
}

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: paths.SRC,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }), // serves up html
        new CleanWebpackPlugin(pathsToClean, cleanOptions), // clean ./build
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ]
    }
};