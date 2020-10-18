const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");
const NodemonPlugin = require('nodemon-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    globalObject: 'this', 
    path: bundlePath,
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'public/'),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hot: true,
    historyApiFallback: true
  },
  watchOptions: {
    ignored: /dist/
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(), 
    new NodemonPlugin(), 
    new webpack.WatchIgnorePlugin([ './dist'] ),
    new StaticSiteGeneratorPlugin({
      globals: {
        window: {}
      }
    })
  ],
  performance: {
    hints: false
  },
};
