const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'), // bundle file path
  SRC: path.resolve(__dirname, 'src'), // source folder path ->
  PUBLIC: path.resolve(__dirname, 'public'), // source folder path ->
};

// paths that should be cleaned
const pathsToClean = [
  'dist',
  'build',
];

const cleanOptions = {
  verbose: true,
  dry: false,
};

const compressionOptions = {
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8,
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: paths.SRC,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
    }), // serves up html
    new CleanWebpackPlugin(pathsToClean, cleanOptions), // clean ./build
    // gzip assets
    new CompressionPlugin(compressionOptions),
  ],
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },

    ],
  },
};
