const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'), // bundle file path
  SRC: path.resolve(__dirname, 'src'), // source folder path ->
  PUBLIC: path.resolve(__dirname, 'public'), // source folder path ->
  NODE_MODULES: path.resolve(__dirname, 'node_modules')
};

// paths that should be cleaned
const pathsToClean = ['dist', 'build'];

const cleanOptions = {
  verbose: true,
  dry: false
};

const compressionOptions = {
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: paths.SRC,
    historyApiFallback: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html')
    }), // serves up html
    new CleanWebpackPlugin(pathsToClean, cleanOptions), // clean ./build
    // gzip assets
    new CompressionPlugin(compressionOptions),
    new CopyWebpackPlugin([{ from: paths.PUBLIC, to: paths.DIST }], {
      ignore: ['index.html']
    })
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2,
              sourceMap: true
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};
